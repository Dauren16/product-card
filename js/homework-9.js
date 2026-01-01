import { Modal } from './Modal.js'
import { Form } from './Form.js'

let user = undefined;
//4 Вывод почт в виде объектов в консоль

const emailForm = document.querySelector('.footer__form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries())
  console.log(data);
})

//5 Модальное окно плюс оверлэй

const overlay = document.querySelector('.page');
const registrationOpenButton = document.querySelector('#button-registration');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-form__close-btn');
const password = document.getElementById('password-input');
const checkPassword = document.getElementById('check-password-input');
const registrationForm = document.querySelector('.modal-form');

const modalInstance = new Modal('modal');
const formInstance = new Form('registration-form');

registrationOpenButton.addEventListener('click', () => {
  overlay.classList.add('page--overlay');
  modalInstance.openModal();
});

closeModal.addEventListener('click', () => {
  overlay.classList.remove('page--overlay')
  modalInstance.closeModalBtn();
})

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formInstance.isValid()) {
    alert('Форма заполнена неверно!');
    return;
  }

  if (password.value !== checkPassword.value) {
    alert('Пароли не совпадают');
    return;
  }

  user = {
    ...formInstance.getValue(),
    createdOn: new Date()
  };

  console.log(user);

  formInstance.reset();
  modalInstance.closeModal();
  overlay.classList.remove('page--overlay');
});