export class ModalManager {
  constructor() {
    this.overlay = document.querySelector('[data-modal-overlay]');
    this.dialog = document.querySelector('[data-modal-dialog]');
    this.title = document.querySelector('[data-modal-title]');
    this.body = document.querySelector('[data-modal-body]');
    this.closeButton = document.querySelector('[data-modal-close]');

    this.closeButton.addEventListener('click', () => this.closeModal());
    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) {
        this.closeModal();
      }
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  openModal(modalData) {
    this.title.textContent = modalData.title ?? 'More Info';
    this.body.replaceChildren();

    for (const section of modalData.sections ?? []) {
      if (section.type === 'image') {
        this.body.appendChild(this.createImageSection(section));
      } else {
        this.body.appendChild(this.createTextSection(section));
      }
    }

    this.overlay.hidden = false;
    this.dialog.focus();
  }

  closeModal() {
    this.overlay.hidden = true;
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
    image.alt = section.caption ?? '';
    figure.appendChild(image);

    if (section.caption) {
      const caption = document.createElement('figcaption');
      caption.textContent = section.caption;
      figure.appendChild(caption);
    }

    return figure;
  }
}
