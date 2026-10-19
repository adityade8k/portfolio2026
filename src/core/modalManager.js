import { ProjectDetails } from './cricketDetails.js';

export class ModalManager {
  constructor() {
    this.projectDetails = new ProjectDetails();
    this.overlay = document.querySelector('[data-modal-overlay]');
    this.dialog = document.querySelector('[data-modal-dialog]');
    this.title = document.querySelector('[data-modal-title]');
    this.body = document.querySelector('[data-modal-body]');
    this.closeButton = document.querySelector('[data-modal-close]');
    this.previousFocus = null;

    this.closeButton.addEventListener('click', () => this.closeModal());
    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) {
        this.closeModal();
      }
    });
    window.addEventListener('keydown', (event) => {
      if (this.overlay.hidden) return;
      if (event.key === 'Escape') {
        this.closeModal();
      }
      if (event.key === 'Tab') this.keepFocusInDialog(event);
    });
  }

  openModal(modalData, { projectId, projectDetails, origin, onTag } = {}) {
    if (projectDetails || projectId === 'liveBallData') {
      this.closeModal();
      this.projectDetails.open(modalData, origin, { onTag });
      return;
    }
    this.projectDetails.close(true);
    this.previousFocus = document.activeElement;
    this.title.textContent = modalData.title ?? 'More Info';
    this.body.replaceChildren();

    if (modalData.context) {
      const context = this.createTextSection({ content: modalData.context });
      context.className = 'modal-context';
      this.body.appendChild(context);
    }

    for (const section of modalData.sections ?? []) {
      if (section.type === 'image') {
        this.body.appendChild(this.createImageSection(section));
      } else if (section.type === 'gallery') {
        const gallery = document.createElement('div');
        gallery.className = 'modal-gallery';
        for (const item of section.images ?? []) {
          gallery.appendChild(this.createImageSection(item));
        }
        this.body.appendChild(gallery);
      } else if (section.type === 'heading') {
        const heading = document.createElement('h3');
        heading.textContent = section.content ?? '';
        this.body.appendChild(heading);
      } else if (section.type === 'link') {
        const link = document.createElement('a');
        link.className = 'modal-link';
        link.textContent = section.label ?? 'View project';
        link.href = section.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        this.body.appendChild(link);
      } else if (section.type === 'video') {
        this.body.appendChild(this.createVideoSection(section));
      } else {
        this.body.appendChild(this.createTextSection(section));
      }
    }

    this.overlay.hidden = false;
    this.dialog.scrollTop = 0;
    this.dialog.focus();
  }

  openPage(data, { origin, onDismiss } = {}) {
    this.closeModal();
    this.projectDetails.open(data, origin, { onDismiss, routeManaged: true });
  }

  closePage() {
    this.projectDetails.close(true);
  }

  closeModal() {
    if (this.overlay.hidden) return;
    this.body.querySelectorAll('video').forEach((video) => video.pause());
    this.overlay.hidden = true;
    this.previousFocus?.focus();
  }

  keepFocusInDialog(event) {
    const focusable = [...this.dialog.querySelectorAll('button, a[href], video[controls], [tabindex="0"]')];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && (document.activeElement === first || document.activeElement === this.dialog)) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === this.dialog)) {
      event.preventDefault();
      first?.focus();
    }
  }

  createTextSection(section) {
    const paragraph = document.createElement('p');
    paragraph.textContent = section.content ?? '';
    return paragraph;
  }

  createImageSection(section) {
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    image.src = section.src;
    image.alt = section.alt ?? section.caption ?? '';
    image.loading = 'lazy';
    image.decoding = 'async';
    figure.appendChild(image);

    if (section.caption) {
      const caption = document.createElement('figcaption');
      caption.textContent = section.caption;
      figure.appendChild(caption);
    }

    return figure;
  }

  createVideoSection(section) {
    const figure = document.createElement('figure');
    const video = document.createElement('video');
    video.src = section.src;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'none';
    video.setAttribute('aria-label', section.caption ?? 'Project video');
    if (section.poster) video.poster = section.poster;
    figure.appendChild(video);
    if (section.caption) {
      const caption = document.createElement('figcaption');
      caption.textContent = section.caption;
      figure.appendChild(caption);
    }
    return figure;
  }
}
