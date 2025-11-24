// task 3

const user = {
  firsName: 'Dauren',
  lastName: 'Ibrayev',
  age: 30,
  email: 'daurenibraev1995@gmail.com',
  country: 'Kazakhstan',
  city: 'Uralsk',
  jobCompany: 'JSC National information technology',
  jobTitle: 'Administrator'
}

// task 4

const vehicle = {
  brand: 'BMW',
  model: 'M5',
  year: 1995,
  color: 'blue',
  transmission: 'automatic'
}

vehicle.owner = user

console.log(user);

// task 5

function checkMaxSpeed(obj) {
  if (!('maxSpeed' in obj)) {
    obj.maxSpeed = 500;
  } else {
    return;
  }
}

checkMaxSpeed(vehicle);

// task 6

function getProperty(vehicle, model) {
  console.log(vehicle[model]);
}

getProperty(vehicle, 'model');

// task 7

const products = ['Мясо', 'Молоко', 'Рыба', 'Сыр', 'Яйца', 'Яблоко'];

// task 8

const playstationExclusives = [
  {
    name: 'The Last of Us Part 2',
    year: 2020,
    platform: 'PS5',
    mode: 'Single Player',
    company: 'Naughty Dog'
  },
  {
    name: 'Uncharted 4',
    year: 2016,
    platform: 'PS4',
    mode: 'Single Player',
    company: 'Naughty Dog'
  },
  {
    name: 'Bloodborne',
    year: 2015,
    platform: 'PS4',
    mode: 'Single Player',
    company: 'From Software'
  },
  {
    name: 'God of War',
    year: 2018,
    platform: 'PS4',
    mode: 'Single Player',
    company: 'Santa Monica Studious'
  },
  {
    name: 'God of War Ragnarok',
    year: 2022,
    platform: 'PS5',
    mode: 'Single Player',
    company: 'Santa Monica Studious'
  },
  {
    name: 'Until Dawn',
    year: 2015,
    platform: 'PS4',
    mode: 'Single Player',
    company: 'Super Massive Games'
  }
]

const deliveredGame = {
  name: 'Spider-man',
  year: 2018,
  platform: 'PS4',
  mode: 'Single Player',
  company: 'Insomniac Games'
}

playstationExclusives.push(deliveredGame);

console.log(playstationExclusives);

// task 9

const xboxExclusives = [
  {
    name: 'Halo 5',
    year: 2016,
    platform: 'Xbox one',
    mode: 'Single Player',
    company: '343 Industries'
  },
   {
    name: 'Halo 5',
    year: 2016,
    platform: 'Xbox one',
    mode: 'Single Player',
    company: '343 Industries'
  },
  {
    name: 'Quantum Break',
    year: 2017,
    platform: 'Xbox one',
    mode: 'Single Player',
    company: 'Remedy Entertainment'
  }
]

const gameCollection = [...playstationExclusives, ...xboxExclusives];

console.log(gameCollection);

// task 10

function addRare(gameCollection) {
  return gameCollection.map(game => ({ ...game, isRare: game.year < 2017}))
}

console.log(addRare(gameCollection));



