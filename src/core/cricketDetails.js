function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

// Keep the archived content as the source of truth; only change its composition.
export function composeProjectDetails(sections = []) {
  const introduction = [];
  const chapters = [];
  let current = introduction;
  let hero = null;
  for (const section of sections) {
    if (section.type === 'heading') {
      const chapter = { title: section.content, sections: [] };
      chapters.push(chapter);
      current = chapter.sections;
    } else if (!hero && current === introduction && section.type === 'image') {
      hero = section;
    } else {
      current.push(section);
    }
  }
  return { hero, introduction, chapters };
}

// Retain the original export for existing integrations.
export const composeCricketDetails = composeProjectDetails;

export class ProjectDetails {
  constructor() {
    this.root = element('div', 'cricket-details');
    this.root.hidden = true;
    this.root.setAttribute('role', 'dialog');
    this.root.setAttribute('aria-modal', 'true');
    this.root.setAttribute('aria-labelledby', 'cricket-details-title');
    this.root.tabIndex = -1;
    document.body.appendChild(this.root);
    this.closeTimer = null;
    window.addEventListener('keydown', (event) => {
      if (this.root.hidden) return;
      if (event.key === 'Escape') {
        if (document.fullscreenElement) return;
        event.preventDefault();
        this.dismiss();
      } else if (event.key === 'Tab') {
        this.keepFocus(event);
      }
    }, true);
    window.addEventListener('hashchange', () => {
      if (this.routeManaged) return;
      this.afterClose = null;
      this.close(true);
    });
  }

  open(data, origin, { onTag, onDismiss, routeManaged = false } = {}) {
    clearTimeout(this.closeTimer);
    this.afterClose = null;
    this.onTag = onTag;
    this.onDismiss = onDismiss;
    this.routeManaged = routeManaged;
    this.root.dataset.kind = data.kind ?? 'project';
    if (this.root.hidden) {
      this.previousFocus = document.activeElement;
      this.scene = document.querySelector('#scene');
      this.sceneWasInert = this.scene?.inert;
      this.sceneAriaHidden = this.scene?.getAttribute('aria-hidden');
      if (this.scene) {
        this.scene.inert = true;
        this.scene.setAttribute('aria-hidden', 'true');
      }
    }
    this.root.querySelectorAll('video').forEach((video) => video.pause());
    this.root.replaceChildren();
    const x = Math.min(window.innerWidth, Math.max(0, origin?.x ?? window.innerWidth / 2));
    const y = Math.min(window.innerHeight, Math.max(0, origin?.y ?? window.innerHeight / 2));
    this.root.style.setProperty('--reveal-x', `${x}px`);
    this.root.style.setProperty('--reveal-y', `${y}px`);

    const foundation = element('div', 'cricket-details__foundation');
    foundation.setAttribute('aria-hidden', 'true');
    this.root.appendChild(foundation);
    this.scroll = element('div', 'cricket-details__scroll');
    this.root.appendChild(this.scroll);
    this.scroll.appendChild(this.createToolbar(data));

    const article = element('article', 'cricket-details__article');
    const { hero, introduction, chapters } = composeProjectDetails(data.sections);
    article.appendChild(this.createCover(data, hero));
    const leadingCopy = [];
    const overview = [...introduction];
    while (overview[0]?.type === 'text') leadingCopy.push(overview.shift());
    if (leadingCopy.length) {
      const intro = element('section', 'cricket-introduction');
      const introLabel = this.panel('cricket-introduction__label', 'expand');
      introLabel.append(element('p', 'cricket-eyebrow', data.introLabel ?? 'THE PROJECT'));
      if (data.introHeading) introLabel.append(element('h3', '', data.introHeading));
      const introCopy = this.panel('cricket-introduction__copy', 'right');
      leadingCopy.forEach((section) => introCopy.appendChild(this.createContent(section)));
      intro.append(introLabel, introCopy);
      article.appendChild(intro);
    }
    if (overview.length) article.appendChild(this.createChapter({ sections: overview }, -1));
    chapters.forEach((chapter, index) => article.appendChild(this.createChapter(chapter, index)));

    const footer = this.panel('cricket-details__footer', 'left');
    const returnButton = element('button', 'cricket-return', data.returnLabel ?? 'BACK TO PROJECT');
    returnButton.type = 'button';
    const returnArrow = element('span', '', '←');
    returnArrow.setAttribute('aria-hidden', 'true');
    returnButton.append(returnArrow);
    returnButton.addEventListener('click', () => this.dismiss());
    footer.appendChild(returnButton);
    article.appendChild(footer);
    this.scroll.appendChild(article);

    this.root.hidden = false;
    this.root.dataset.state = 'open';
    this.scroll.scrollTop = 0;
    this.root.focus({ preventScroll: true });
  }

  createToolbar(data) {
    const toolbar = element('header', 'cricket-toolbar');
    const label = this.panel('cricket-toolbar__label', 'left');
    label.append(element('span', '', data.eyebrow ?? 'PROJECT'));
    label.append(element('span', 'cricket-toolbar__name', data.title));
    const accent = this.panel('cricket-toolbar__accent', 'expand');
    accent.setAttribute('aria-hidden', 'true');
    this.closeButton = element('button', 'cricket-panel cricket-close');
    this.closeButton.dataset.enter = 'right';
    this.closeButton.type = 'button';
    this.closeButton.setAttribute('aria-label', data.closeLabel ?? 'Close project details');
    const cross = element('span', 'cricket-close__cross');
    cross.setAttribute('aria-hidden', 'true');
    this.closeButton.appendChild(cross);
    this.closeButton.addEventListener('click', () => this.dismiss());
    toolbar.append(label, accent, this.closeButton);
    return toolbar;
  }

  createCover(data, hero) {
    const cover = element('div', 'cricket-cover');
    const titlePanel = this.panel('cricket-cover__title', 'left');
    titlePanel.style.setProperty('--enter-delay', '45ms');
    const title = element('h2', '', data.title);
    title.id = 'cricket-details-title';
    titlePanel.appendChild(title);
    const accent = this.panel('cricket-cover__accent', 'expand');
    accent.style.setProperty('--enter-delay', '100ms');
    accent.setAttribute('aria-hidden', 'true');
    cover.append(titlePanel, accent);
    cover.classList.toggle('cricket-cover--without-media', !hero);
    const context = this.createMetadata(data);
    cover.classList.toggle('cricket-cover--without-context', !context);
    if (context) cover.appendChild(context);
    if (hero) {
      const media = this.panel('cricket-cover__media', 'right');
      media.style.setProperty('--enter-delay', '70ms');
      media.appendChild(this.createImage(hero, true));
      cover.appendChild(media);
    }
    return cover;
  }

  createMetadata(data) {
    const metadata = data.metadata ?? {};
    const hasStructuredMetadata = data.metadata != null;
    const years = metadata.years ?? [];
    const organizations = metadata.organizations ?? [];
    if (!years.length && !organizations.length && !metadata.role && !metadata.status && (hasStructuredMetadata || !data.context)) return null;
    const context = this.panel('cricket-cover__context', 'left');
    context.style.setProperty('--enter-delay', '90ms');
    if (metadata.role) context.appendChild(element('p', 'cricket-eyebrow', metadata.role));
    if (metadata.status) context.appendChild(element('p', 'cricket-eyebrow', metadata.status));
    const groups = element('div', 'cricket-metadata');
    for (const [label, tags] of [['Year', years], ['Organization', organizations]]) {
      if (!tags.length) continue;
      const group = element('div', 'cricket-metadata__group');
      group.appendChild(element('span', 'cricket-metadata__label', label));
      const values = element('div', 'cricket-metadata__values');
      for (const value of tags) {
        const tag = typeof value === 'object' ? value : { id: String(value), label: String(value) };
        const button = element(this.onTag ? 'button' : 'span', 'cricket-tag', tag.label ?? tag.id);
        if (this.onTag) {
          button.type = 'button';
          button.setAttribute('aria-label', `View projects tagged ${tag.label ?? tag.id}`);
          button.addEventListener('click', () => {
            const onTag = this.onTag;
            this.close(false, () => onTag(tag.id ?? tag.label));
          });
        }
        values.appendChild(button);
      }
      group.appendChild(values);
      groups.appendChild(group);
    }
    if (groups.childElementCount) context.appendChild(groups);
    // Legacy context is used only when structured metadata is unavailable.
    if (!hasStructuredMetadata && data.context) {
      context.appendChild(element('p', '', data.context));
    }
    return context;
  }

  createChapter(chapter, index) {
    const section = element('section', `cricket-chapter cricket-chapter--${index + 1}`);
    if (chapter.title) {
      const heading = this.panel('cricket-chapter__heading', index % 2 ? 'right' : 'left');
      const chapterTitle = element('h3', '', chapter.title);
      chapterTitle.id = `cricket-chapter-${index + 1}`;
      section.setAttribute('aria-labelledby', chapterTitle.id);
      heading.append(element('span', 'cricket-eyebrow', String(index + 1).padStart(2, '0')), chapterTitle);
      section.appendChild(heading);
    }
    let copy = [];
    const appendRow = (media = null) => {
      if (!copy.length && !media) return;
      const kind = copy.length ? (media ? 'paired' : 'text') : 'media';
      const row = element('div', `cricket-story-row cricket-story-row--${kind}`);
      if (copy.length) {
        const textPanel = this.panel('cricket-chapter__copy', 'left');
        copy.forEach((item) => textPanel.appendChild(this.createContent(item)));
        row.appendChild(textPanel);
      }
      if (media) {
        if (media.type === 'gallery') row.appendChild(this.createContent(media));
        else {
          const panel = this.panel('cricket-media', 'right');
          panel.appendChild(this.createContent(media));
          row.appendChild(panel);
        }
      }
      section.appendChild(row);
      copy = [];
    };
    for (const item of chapter.sections) {
      if (item.type === 'text') copy.push(item);
      else if (item.type === 'link') {
        appendRow();
        const panel = this.panel('cricket-link-panel', 'right');
        panel.appendChild(this.createContent(item));
        section.appendChild(panel);
      } else if (['image', 'video', 'gallery'].includes(item.type)) {
        if (item.type === 'gallery' && !item.images?.length) continue;
        appendRow(item);
      }
    }
    appendRow();
    return section;
  }

  panel(className, enter) {
    const panel = element('div', `cricket-panel ${className}`);
    panel.dataset.enter = enter;
    return panel;
  }

  createContent(section) {
    if (section.type === 'image') return this.createImage(section);
    if (section.type === 'gallery') {
      const gallery = element('div', 'cricket-gallery');
      for (const image of section.images ?? []) {
        const panel = this.panel('cricket-media', 'right');
        panel.appendChild(this.createImage(image));
        gallery.appendChild(panel);
      }
      return gallery;
    }
    if (section.type === 'video') {
      const figure = element('figure', 'cricket-figure');
      const video = element('video');
      video.src = section.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = 'none';
      video.setAttribute('aria-label', section.caption ?? 'Project video');
      if (section.poster) video.poster = section.poster;
      figure.appendChild(video);
      if (section.caption) figure.appendChild(element('figcaption', '', section.caption));
      return figure;
    }
    if (section.type === 'link') {
      const link = element('a', 'cricket-link', section.label ?? 'View project');
      link.href = section.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const arrow = element('span', '', '↗');
      arrow.setAttribute('aria-hidden', 'true');
      link.appendChild(arrow);
      return link;
    }
    return element('p', '', section.content);
  }

  createImage(section, eager = false) {
    const figure = element('figure', 'cricket-figure');
    const image = element('img');
    image.src = section.src;
    image.alt = section.alt ?? section.caption ?? '';
    if (section.width > 0) image.width = section.width;
    if (section.height > 0) image.height = section.height;
    image.loading = eager ? 'eager' : 'lazy';
    image.decoding = 'async';
    figure.appendChild(image);
    if (section.caption) figure.appendChild(element('figcaption', '', section.caption));
    return figure;
  }

  dismiss() {
    this.close(false, this.onDismiss);
  }

  close(immediate = false, afterClose) {
    if (this.root.hidden) return;
    if (immediate) this.afterClose = null;
    if (afterClose) this.afterClose = afterClose;
    if (this.root.dataset.state === 'closing' && !immediate) return;
    clearTimeout(this.closeTimer);
    this.root.querySelectorAll('video').forEach((video) => video.pause());
    // A quick dismissal continues from the current entrance frame.
    this.root.querySelectorAll('.cricket-panel').forEach((panel) => {
      const current = getComputedStyle(panel);
      panel.style.setProperty('--close-transform', current.transform);
      panel.style.setProperty('--close-opacity', current.opacity);
      panel.style.setProperty('--close-clip', current.clipPath);
    });
    this.root.dataset.state = 'closing';
    const finish = () => {
      this.root.hidden = true;
      this.root.replaceChildren();
      if (this.scene) {
        this.scene.inert = this.sceneWasInert;
        if (this.sceneAriaHidden === null) this.scene.removeAttribute('aria-hidden');
        else this.scene.setAttribute('aria-hidden', this.sceneAriaHidden);
      }
      const target = this.previousFocus?.isConnected && this.previousFocus !== document.body
        ? this.previousFocus : this.scene;
      if (target) {
        const tabIndex = target.getAttribute('tabindex');
        if (tabIndex === null) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        if (tabIndex === null) target.removeAttribute('tabindex');
      }
      const callback = this.afterClose;
      this.afterClose = null;
      callback?.();
    };
    if (immediate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) finish();
    else this.closeTimer = setTimeout(finish, 280);
  }

  keepFocus(event) {
    const focusable = [...this.root.querySelectorAll('button, a[href], video[controls]')];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && (document.activeElement === first || document.activeElement === this.root)) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === this.root)) {
      event.preventDefault();
      first?.focus();
    }
  }
}

export const CricketDetails = ProjectDetails;
