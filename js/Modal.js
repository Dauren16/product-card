export class Modal {
  constructor(modalId, buttonId, closeOnOverlayClick) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeButton = this.modal.querySelector('.modal-form__close-btn');
    this.closeOnOverlayClick = closeOnOverlayClick;

    this.handleClose = () => {
      this.close();
    };

    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal--showed');
    this.overlay.classList.add('overlay--showed');
    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal--showed');
    this.overlay.classList.remove('overlay--showed');
    this.closeButton.removeEventListener('click', this.handleClose);

    if (this.closeOnOverlayClick) {
      this.overlay.removeEventListener('click', this.handleClose);
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal--showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    });
  }

  #initClose() {
    this.closeButton.addEventListener('click', this.handleClose);

    if (this.closeOnOverlayClick) {
      this.overlay.addEventListener('click', this.handleClose);
    }
  }
}