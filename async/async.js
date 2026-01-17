const userCardTemplate = document.getElementById('user-card__template');
const usersList = document.querySelector('.users-list');
const status = document.querySelector('.message');
const getAllCardBtn = document.querySelector('.section__get-users');
const deleteAllCardBtn = document.querySelector('.section__delete-users');

async function fetchUsers() {
  try {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const parsed = JSON.parse(storedUsers);
      return Array.isArray(parsed) ? parsed : [];
    }

    status.textContent = 'Загрузка данных...';

    const response = await fetch('users.json');
    if (!response.ok) {
      throw new Error('Не удалось загрузить файл users.json');
    }

    const data = await response.json();

    await new Promise(resolve => setTimeout(resolve, 1500));

    const users = Array.isArray(data.users) ? data.users : [];
    localStorage.setItem('users', JSON.stringify(users));
    return users;
  } catch (error) {
    status.textContent = `Ошибка: ${error.message}`;
    console.error('Ошибка загрузки данных:', error);
    return [];
  }
}

async function initUsers() {
  const users = await fetchUsers();
  status.textContent = '';
  renderUsers(users);
}

function renderUsers(users) {
  usersList.innerHTML = '';

  if (!Array.isArray(users) || users.length === 0) {
    usersList.innerHTML = '<p>Нет пользователей</p>';
    return;
  }

  users.forEach(user => {
    const userClone = userCardTemplate.content.cloneNode(true);

    userClone.querySelector('.user-card__avatar').src = `../images/${ user.img }.png`;
    userClone.querySelector('.user-card__id').textContent = `id: ${ user.id }`;
    userClone.querySelector('.user-card__name').textContent = `Имя: ${ user.name }`;
    userClone.querySelector('.user-card__surname').textContent = `Фамилия: ${ user.surname }`;
    userClone.querySelector('.user-card__email').textContent = `Почта: ${ user.email }`;
    userClone.querySelector('.user-card__age').textContent = `Возраст: ${ user.age }`;

    const deleteBtn = userClone.querySelector('.user-card__delete-button');
    deleteBtn.dataset.userId = user.id;
    deleteBtn.addEventListener('click', handleDeleteUser);

    usersList.appendChild(userClone);
  });
}

function handleDeleteUser(event) {
  const userId = Number(event.target.dataset.userId);
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  const updatedUsers = storedUsers.filter(user => user.id !== userId);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  renderUsers(updatedUsers);
}

function handleDeleteAllUsers() {
  localStorage.setItem('users', JSON.stringify([]));
  renderUsers([]);
}

async function handleGetAllUsers() {
  const users = await fetchUsers();

  if (usersList.children.length === users.length) {
    status.textContent = 'Все пользователи уже отображены';
    setTimeout(() => (status.textContent = ''), 1500);
    return;
  }

  status.textContent = '';
  renderUsers(users);
}

getAllCardBtn.addEventListener('click', handleGetAllUsers);
deleteAllCardBtn.addEventListener('click', handleDeleteAllUsers);

initUsers();
