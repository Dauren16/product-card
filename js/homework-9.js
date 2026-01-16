import { Modal } from './Modal.js'
import { Form } from './Form.js'

let user = undefined;

// 4. Вывод почты в виде объекта
const emailForm = document.querySelector('.footer__form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

// 5. Модальное окно + overlay

const password = document.getElementById('password-input');
const checkPassword = document.getElementById('check-password-input');
const registrationForm = document.querySelector('.modal-form');

const modalInstance = new Modal('modal', 'button-registration');
const formInstance = new Form('registration-form');

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
  modalInstance.close();
});