// task 2

import { content } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number > 5)

console.log(filteredNumbers);

// task 3

const games = ['Uncharted', 'The Last of Us', 'CS2', 'Dota 2', 'Dead by Daylight'];

const foundGame = games.find(game => game === 'CS2')

console.log(foundGame);

// task 4

function reverseArray(arr) {
  const reversedArray = arr.reverse(arr)
  return reversedArray
}

console.log(reverseArray(numbers));

// task 7

const filteredByEmail = content.filter(element => element.email.includes('.com'))

console.log(filteredByEmail);

// task 9

const filteredById = content.map(element => ({id: element.id, name: element.name}))

console.log(filteredById);

// task 10


const updatedContent = content.map(element => ({...element, isInvalid: element.body.length > 180}))

console.log(updatedContent);


// task 11

const emailsList = content.map(element => ({email: element.email}))

console.log(emailsList);

const emailsListByReduce = content.reduce((acc, element) => {
  acc.push(element.email)
  return acc
},  [])

console.log(emailsListByReduce);

// task 12

const emailsString = checkEmails.toString();
console.log(emailsString);

const reducedEmailsString = checkEmailsByReduce.join(' ')
console.log(reducedEmailsString);





