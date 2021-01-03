// Module 1
// Task 1
const productName = 'Дроид';
const pricePerItem = 2000;
console.log(productName);
console.log(pricePerItem);

// Task 6
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
console.log(message);

// Task 7
function sayHi() {
  console.log ('Привет, это моя первая функция!');
}
sayHi();

// Task 8
function add(a,b,c) {
  console.log('Результат сложения равен', a+b+c);
}  
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// Task 9
function add(a, b, c) {
  return (a+b+c);
}
add(2, 5, 8); 
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// Task 10
function makeMessage (name, price) {
   const message = (`Вы выбрали ${name}, цена за штуку ${price} кредитов`);
  return message;
};

// Task 11
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
};

// Task 12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message =`Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
  return message;
}

// Task 13
function isAdult(age) {
  const passed = age>=18;
  return passed;
}

// Task 14
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password===SAVED_PASSWORD;
  return isMatch;
}

// Task 15
function checkAge(age) {
  let message;
  if (age>=18) { 
    message = 'Вы совершеннолетний человек';
  } else {
    message = 'Вы не совершеннолетний человек';
  }
  return message;
}

// Task 16
function checkStorage(available, ordered) {
  let message;
if (ordered > available){
message = 'На складе недостаточно товаров!';
} else {
message = 'Заказ оформлен, с вами свяжется менеджер';
}
  return message;
}

// Task 17
let a = 5;
let b = 10;
let c = 15;
let d = 20;
a += 2;
b -= 4;
c *= 3;
d /= 10;

// Task 18
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  if (password===null) { 
    message =  'Отменено пользователем!';
  } else if (password===ADMIN_PASSWORD) { 
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
  return message;
}

// Task 24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
if (totalSpent>=50000) {
discount = GOLD_DISCOUNT;
} else if (totalSpent>=20000 && totalSpent<50000) {
discount = SILVER_DISCOUNT;
} else if (totalSpent>=5000 && totalSpent<20000) {
discount = BRONZE_DISCOUNT;
} else {
discount = BASE_DISCOUNT;
}
  return discount;
}

// Task 25
function checkStorage(available, ordered) {
  let message;
  message = (ordered > available)?'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';
  return message;
}

// Task 28
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
switch (password){
  case null:
    message = 'Отменено пользователем!';
 break;
    
  case ADMIN_PASSWORD:
    message = 'Добро пожаловать!';
 break;
    
default:
    message = 'Доступ запрещён, неверный пароль!';
}
  return message;
}

// Task 31
const courseTopic = 'JavaSript для начинающих';
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Task 32
function getSubstring(string, length) {
  const substring = string.slice (0, length); 
  return substring;
}

// Task 33
function formatMessage(message, maxLength) {
  let result; 
if (message.length > maxLength) {
result = `${message.slice (0, maxLength)}...`; 
} else {
result = message;
}
  return result;
}

//Task 36
function checkForSpam(message) {
  let result;
 if ((message.toLowerCase()).includes('spam') || (message.toLowerCase()).includes('sale')) {
  result = true;
 } else {
 result = false;
 }
  return result;
}

// or
function checkForSpam(message) {
  let result;
  result = ((message.toLowerCase()).includes('spam') || (message.toLowerCase()).includes('sale')); 
  return result;
}