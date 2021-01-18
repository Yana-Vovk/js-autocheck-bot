// Module 3
// Task 2
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner:{
    name:'Генри',
      phone:'982-126-1588',
     email: 'henry.carter@aptmail.com',
    },
  };

//   Task 3
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  
  // Пиши код ниже этой строки
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Пиши код выше этой строки

//   Task 4
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Пиши код ниже этой строки
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Пиши код выше этой строки

// Task 5
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Пиши код ниже этой строки
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Пиши код выше этой строки

// Task 6
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Пиши код ниже этой строки
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Генри Сибола';
apartment.tags.push ('trusted');


// Task 7
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Просторная квартира в центре',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Генри Сибола',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com'
  }
};

// Пиши код ниже этой строки
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Ямайка';
apartment.location.city = 'Кингстон';


// Task 9
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Пиши код ниже этой строки
  
  [emailInputName]:  'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam', 
  
  // Пиши код выше этой строки
};


// Task 10
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
for (const item in apartment) {
  keys.push(item);
  values.push(apartment[item]);
}

// Task 11
const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Просторная квартира в центре';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
  if (apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);
  }
  // Пиши код выше этой строки
}


// Task 12
function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
  for (let key in object){
   if (object.hasOwnProperty(key)){
     propCount +=1;
   }
  }
  // Пиши код выше этой строки
  return propCount;
}


// Task 13
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
for (const apartItem of keys){
  values.push(apartment[apartItem]);
}

// Task 14
function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;
  let propArr = [];
propArr = Object.keys(object);
 propCount = propArr.length;

  return propCount;
  // Пиши код выше этой строки
}

// Task15
const apartment = {
  descr: 'Просторная квартира в центре',
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// Task 16
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  for (const key in salaries) {
    if (salaries.hasOwnProperty(key)){
    totalSalary += salaries[key];
  }
  }
  
  // Пиши код выше этой строки
  return totalSalary;
}


// Task 17
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const item of colors){
  hexColors.push(item.hex);
  rgbColors.push(item.rgb);
}

// Task 18
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  let result = null;
  for (const item of products){
   if (item.name === productName){ 
     result = item.price;
     break;
   } 
  }
  return result;
  // Пиши код выше этой строки
}

// Task 19
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const array = [];
  for (const object of products){
    for (const key in object){
     if (key === propName){
       array.push(object[key]);
     }
    }
  }
  return (array);
  // Пиши код выше этой строки
}


// Task 20
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let sum = 0;
  for (const object of products){
   if (object.name === productName){ 
     sum = object.price * object.quantity;
   }
  }
  return sum;
  // Пиши код выше этой строки
}


// Task 21
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday, today, tomorrow} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;


// Task 22
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday, today, tomorrow, 
       icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;


// Task 23
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Task 24
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}


// Task 25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки
const {today: {high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}, tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}} = forecast;


// Task 26
// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
  const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
   // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// Task 27
const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


// Task 28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);


// Task 29
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = {...defaultSettings, ...overrideSettings};


// Task 30
function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
  const newData = {completed: completed, category: category, priority: priority, ...data};
  return newData;
  // Пиши код выше этой строки
}


// Task 31
// Пиши код ниже этой строки
function add(...args) {
  let sum = 0;
  for (const arg of args){
   sum += arg; 
  }
  return sum;
  // Пиши код выше этой строки
}


// Task 32
// Пиши код ниже этой строки
function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > number){
    total += arg;
  }
  }
  return total;
  // Пиши код выше этой строки
}


// Task 33
// Пиши код ниже этой строки
function findMatches(arr, ...args) {
  const matches = []; // Не изменяй эту строку
   for (const arg of args){
    if (arr.includes(arg)){
      matches.push(arg);
    }
   }
  // Пиши код выше этой строки
  return matches;
}

// Task 34
const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {
    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
   removeBook(bookName) {
     return `Удаляем книгу ${bookName}`;
   },
  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`;
  },
  // Пиши код выше этой строки
};


// Task 35
const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
	const index = this.books.indexOf(oldName);
    this.books.splice(index, 1, newName);
	
	
    // Пиши код выше этой строки
  },
};


// Task 36
const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: [],
  // Пиши код выше этой строки
};


// Task 37
const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  getPotions() {
    return this.potions;
  },
  // Пиши код выше этой строки
};


// Task 38
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    this.potions.push(potionName);
    // Пиши код выше этой строки
  },
};


// Task 39
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    // 🔥 Оставляем три пустые строки для студента
    const index = this.potions.indexOf(potionName);
    this.potions.splice(index,1);
    // Пиши код выше этой строки
  },
};


// Task 40
const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    // 🔥 Оставляем три пустые строки для студента
    let index = this.potions.indexOf(oldName);
    this.potions.splice(index, 1,newName);
    // Пиши код выше этой строки
  },
};


// Task 41
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
 getPotions() {
   return this.potions;
  },
  addPotion(potionName) {
    for (const potion of this.potions) {
      if (potion === potionName) {
        return `Зелье ${potionName} уже есть в инвентаре!`;
      }
    }
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1){
      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1);
        return;
      }
    }
    return `Зелья ${potionName} нет в инвентаре!`;
    
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) { 
      if (oldName === this.potions[i].name) {
        this.potions[i].name = newName;
        return;
      }
    }
      return `Зелья ${oldName} нет в инвентаре!`;
  },
  // Пиши код выше этой строки
};

