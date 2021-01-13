// Module 2
// Task 2
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
    if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  } 
    return 'Доступ запрещен, неверный пароль!';
}

// Task 3
function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'В заказе еще нет товаров';
  } 
  if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  } 
    return 'Заказ оформлен, с вами свяжется менеджер';
}

// Task 5
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
const firstElement = fruits [0];
const secondElement = fruits [1];
const lastElement = fruits [fruits.length-1];

// Task 8
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits [lastElementIndex];

// Task 9
function getExtremeElements(array) {
  const first = array [0];
  const last = array [array.length - 1];
  return [first, last];
  }

//   Task 10
function splitMessage(message, delimeter) {
  let words;
  words = message.split (delimeter);
  return words;
}

// Task 11
function calculateEngravingPrice(message, pricePerWord) {
 let arrayOfWords = message.split (' ');
  let totalPrice = arrayOfWords.length * pricePerWord;
  return totalPrice;
}

// Task 13
function slugify(title) {
 let array = title.split (' ');
  let string = array.join ('-');
 let lowerString = string.toLowerCase();
 return lowerString;
}

// Task 14
const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
const firstTwoEls = fruits.slice (0, 2);
const nonExtremeEls = fruits.slice (1, fruits.length-1);
const lastThreeEls = fruits.slice (-3);

// Task 16
function makeArray(firstArray, secondArray, maxLength) {
const newArray = firstArray.concat (secondArray);
  if (newArray.length > maxLength) {
  return newArray.slice (0, maxLength)}
  return newArray;
}
  
// Task 18
function calculateTotal(number) {
let sum = 0;
for (let i = 1; i <= number; i += 1){
sum += i;
}
return sum;
}

// Task 20
function calculateTotalPrice(order) {
  let total = 0;
for (let i = 0; i < order.length; i +=1){
total +=order [i];
}
  return total;
}

// Task 21
function findLongestWord(string) {
 const array = string.split (' ');
  let biggest = 0;
  let wordLength =0;
  let longestWord = 0;
  for (let i = 0; i < array.length; i += 1){
    wordLength = array[i].length;
  if (wordLength > biggest) {
  biggest = wordLength;
    longestWord = array[i];
  }
  }
  return longestWord;
}

// or
function findLongestWord(string) {
 
    const array = string.split(' ');
    console.log (array);
  let biggest = 0;
    let wordLength = 0;
    let longWord = 0;
  for (let i = 0; i < array.length; i += 1){
      wordLength = array[i].length;
      console.log(wordLength);
  if (wordLength > biggest) {
      biggest = wordLength;
      longWord = array[i];
  }
    }
    console.log('The longest: ',biggest, longWord);
  return longWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');


// Task 22
function createArrayOfNumbers(min, max) {
  const numbers = [];
let integer = min;
  for (let i = min; i <= max; i += 1) {
  numbers.push(i);
     }
  return numbers;
}
 
// or
function createArrayOfNumbers(min, max) {
  const numbers = [];
  let integer = min;
  while (integer <= max) {
    console.log(integer);
    numbers.push(integer);
    console.log('Array: ',numbers);
    integer += 1;
  }
  return numbers;  
}

// Task 23
function filterArray(numbers, value) {
  let newNumbers = [];
  for (let number of numbers) {
  if (number > value) {
    newNumbers.push(number);
  }
  }
return newNumbers;
}
 
// Task 24
function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); 
}


//  Task 25
function getCommonElements(array1, array2) {
  let newArray = [];
 for (let arr1 of array1){
  
     if (array2.includes(arr1)) {
      newArray.push(arr1);  
     
   }
 }
  return newArray;
}

// Task 29
function getEvenNumbers(start, end) {
let arr = [];
for (let i = start; i <= end; i += 1){
  if (i % 2 === 0){
  arr.push (i);
  }
  }
    return arr;
  }

  // Task 32
  function includes(array, value) {
 let check = false; 
for (let arr of array) {
  if (arr === value){ 
 check = true;
  }
}

  return check;
}