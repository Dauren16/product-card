export class Modal {
  constructor(modal) {
    this.modal = document.getElementById(modal);
  }

  openModal() {
    this.initCloseButton();
    this.modal.classList.add('modal--showed');
  }

  closeModal() {
    this.modal.classList.remove('modal--showed');
  }

  isOpenModal() {
    return this.modal.classList.contains('modal--showed');
  }

  initCloseButton() {
    const closeBtn = this.modal.querySelector('.modal-form__close-btn');
    if (!closeBtn) return;

    closeBtn.addEventListener('click', () => {
      this.closeModal();
    });
  }
}