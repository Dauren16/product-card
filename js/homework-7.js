// task 2

import { userComments } from "./comments.js"


//task 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers = numbers.filter(number => number > 5)

console.log(filteredNumbers);

//task 3

const games = ['Dota 2', 'CS 2', 'Uncharted', 'Left 4 Dead', 'Witcher 3']

const findedGame = games.find(game => game === 'CS 2')

console.log(findedGame);

//task 4

function reverseArray(arr) {
  return arr.reverse(arr)
}

console.log(reverseArray(numbers));
console.log(reverseArray(games));

//task 7

const filteredByEmail = userComments.filter(comment => comment.email.includes('.com'))

console.log(filteredByEmail);

//task 8

const filteredByPostId = userComments.map(comment => ({...comment, postId: element.postId  <= 5 ? 2 : 1}))

console.log(filteredByPostId);

//task 9

const filteredbyName = userComments.map(comment => ({name: comment.name, id: comment.id}))

console.log(filteredbyName);

//task 10

const updatedContent = userComments.map(comment => ({...comment, isInvalid: comment.body.length > 180}))

console.log(updatedContent);

//task 11

const emails = userComments.map(comment => comment.email)
console.log(emails);

// через Reduce сам не смог реализовать
const emailsListByReduce = userComments.reduce((acc, element) => {
  acc.push(element.email)
  return acc
},  [])

console.log(emailsListByReduce);

//task 12

const emailsString = emails.toString()
console.log(emailsString);

const reducedEmailsString = emailsListByReduce.join(' ')
console.log(reducedEmailsString);


