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

registrationOpenButton.addEventListener('click', () => {
  overlay.classList.add('page--overlay')
  modal.classList.add('modal--showed')
})

closeModal.addEventListener('click', () => {
  overlay.classList.remove('page--overlay')
  modal.classList.remove('modal--showed')
})

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    alert('Форма заполнена неверно!');
    return;
  }

  if(password.value !== checkPassword.value) {
    alert('Пароли не совпадают');
    return;
  }

  const formData = new FormData(registrationForm);
  user = Object.fromEntries(formData.entries());
  user.createdOn = new Date();

  console.log(user);

  registrationForm.reset();

  modal.classList.remove('modal--showed');
  overlay.classList.remove('page--overlay');
})