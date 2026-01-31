const deleteAllUsersButton = document.querySelector('#section__delete-users');
const getAllUsersButton = document.querySelector('#section__get-users');
const statusText = document.querySelector('.message');
const usersList = document.querySelector('.users-list');
const userCardTemplate = document.querySelector('#user-card__template');

function setStatus(message, timeout = 0) {
  statusText.textContent = message;

  if (timeout > 0) {
    setTimeout(() => {
      statusText.textContent = '';
    }, timeout);
  }
}

function renderUsers(users) {
  usersList.innerHTML = '';

  if (!Array.isArray(users) || users.length === 0) {
    usersList.innerHTML = '<li>Нет пользователей</li>';
    return;
  }

  users.forEach(user => {
    const userCardClone = userCardTemplate.content.cloneNode(true);

    const card = userCardClone.querySelector('.user-card');
    card.dataset.userId = user.id; // 🔹 сохраняем id пользователя

    userCardClone.querySelector('.user-card__avatar').src =
      `images/${user.img}.jpg`;
    userCardClone.querySelector('.user-card__id').textContent = `ID: ${user.id}`;
    userCardClone.querySelector('.user-card__name').textContent = `Имя: ${user.name}`;
    userCardClone.querySelector('.user-card__surname').textContent = `Фамилия: ${user.surname}`;
    userCardClone.querySelector('.user-card__email').textContent = `Эл.почта: ${user.email}`;
    userCardClone.querySelector('.user-card__age').textContent = `Возраст: ${user.age}`;

    usersList.appendChild(userCardClone);
  });
}

function saveUsersToStorage(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function getUsersFromStorage() {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : null;
}

async function fetchUsers() {
  const response = await fetch('users.json');
  if (!response.ok) {
    throw new Error('Ошибка загрузки users.json');
  }

  const data = await response.json();
  return Array.isArray(data.users) ? data.users : [];
}

async function initUsers() {
  const usersFromStorage = getUsersFromStorage();

  if (usersFromStorage) {
    renderUsers(usersFromStorage);
    return;
  }

  try {
    setStatus('Загрузка данных...');

    const users = await fetchUsers();
    saveUsersToStorage(users);
    renderUsers(users);
  } catch (error) {
    setStatus('Ошибка при загрузке данных', 3000);
  } finally {
    setStatus('');
  }
}

initUsers();

deleteAllUsersButton.addEventListener('click', () => {
  localStorage.removeItem('users');
  renderUsers([]);
});

getAllUsersButton.addEventListener('click', async () => {
  try {
    setStatus('Загрузка данных...');

    const users = await fetchUsers();
    saveUsersToStorage(users);
    renderUsers(users);
  } catch (error) {
    setStatus('Ошибка при загрузке данных', 3000);
  } finally {
    setStatus('');
  }
});

usersList.addEventListener('click', event => {
  const deleteButton = event.target.closest('.user-card__delete-button');
  if (!deleteButton) return;

  const card = deleteButton.closest('.user-card');
  const userId = Number(card.dataset.userId);

  const users = getUsersFromStorage() || [];
  const updatedUsers = users.filter(user => user.id !== userId);

  saveUsersToStorage(updatedUsers);
  renderUsers(updatedUsers);
});
