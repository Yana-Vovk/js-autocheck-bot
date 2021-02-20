// Module 6
// Task 1
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(function (item) {
    totalPrice += item;
  })

  // Пиши код выше этой строки
  return totalPrice;
}

// Task 2
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки

  numbers.forEach(function (item) {
    if (item > value) {
      filteredNumbers.push(item);
    }
  })

  // Пиши код выше этой строки
  return filteredNumbers;
}

//   Task 3
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  firstArray.forEach(function (item) {
    if (secondArray.includes(item)) {
      commonElements.push(item);
    }
  })

  return commonElements;
  // Пиши код выше этой строки
}

//   Task 4
// Пиши код ниже этой строки

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}



// Task 5
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

// Task 6
// Пиши код ниже этой строки
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => totalPrice += item);
  return totalPrice;
}


// Пиши код выше этой строки

// Task 7
// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}

//   Task 8
// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
}

//   Task 9
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArr = [];
  numbers.forEach(item => {
    if (item % 2 === 0) {
      newArr.push(item + value);
    } else {
      newArr.push(item);
    }

  })
  return newArr;
  // Пиши код выше этой строки
}


// Task 10
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(item => item.length);


// Task 11
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const titles = books.map(item => item.title);


//   Task 12
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика']
  }
];
// Пиши код ниже этой строки

const genres = books.flatMap(item => item.genres);


//   Task 13
// Пиши код ниже этой строки
const getUserNames = users => {
  return users.map(item => item.name);

};
// Пиши код выше этой строки

//   Task 14
// Пиши код ниже этой строки
const getUserEmails = users => {
  return users.map(item => item.email);

};
// Пиши код выше этой строки

// Task 15
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(element => element % 2 === 0);
const oddNumbers = numbers.filter(element => element % 2 !== 0);

// Task 16
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения']
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(item => item.genres);
const uniqueGenres = allGenres.filter((item, index, array) => array.indexOf(item) === index);


// Task 17
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter(item => item.rating >= MIN_RATING);
const booksByAuthor = books.filter(item => {
  if (item.author === AUTHOR) {
    return item.title
  }
});

// Task 18
// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
  return users.filter(item => item.eyeColor === color)

};
// Пиши код выше этой строки


// Task 19
// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(item => item.age > minAge && item.age < maxAge)

};
// Пиши код выше этой строки


// Task 20
// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  return users.filter(item => item.friends.includes(friendName))
};
// Пиши код выше этой строки


// Task 21
// Пиши код ниже этой строки
const getFriends = (users) => {
  return users.flatMap(item => item.friends)
    .filter((item, index, arr) => arr.indexOf(item) === index)
};
// Пиши код выше этой строки


// Task 22
// Пиши код ниже этой строки
const getActiveUsers = (users) => {
  return users.filter(item => item.isActive)
};
// Пиши код выше этой строки


// Task 23
// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
  return users.filter(item => !item.isActive)
};
// Пиши код выше этой строки


// Task 24
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find(item => item.title === BOOK_TITLE);
const bookByAuthor = books.find(item => item.author === AUTHOR);


// Task 25
// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  return users.find(item => item.email === email)
};
// Пиши код выше этой строки


// Task 26
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(item => item % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(item => item % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 !== 0);

// Task 27
// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
  return users.every (item => item.isActive) 
};
// Пиши код выше этой строки


// Task 28
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(item => item%2 === 0);
const anyElementInFirstIsOdd = firstArray.some(item => item%2 !== 0);

const anyElementInSecondIsEven = secondArray.some(item => item%2 === 0);
const anyElementInSecondIsOdd = secondArray.some(item => item%2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(item => item%2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(item => item%2 !== 0);


// Task 29
// Пиши код ниже этой строки
const isAnyUserActive = users => {
  return users.some(item => item.isActive) 
};
// Пиши код выше этой строки

// Task 30
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce ((previous,element) => previous+element,0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;


// Task 31
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce ((total,element) => total + element.playtime / element.gamesPlayed,0);


// Task 32
// Пиши код ниже этой строки
const calculateTotalBalance = users => {return users.reduce((sum,item) => sum + item.balance, 0)
   
};
// Пиши код выше этой строки

// Task 33
// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  return users.reduce ((previous,element) => previous + element.friends.length,0) 
};
// Пиши код выше этой строки

// Task 34
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// Task 35
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((first,second) => first-second);

const descendingReleaseDates = [...releaseDates].sort((first,second) => second - first);

// Task 36
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
  
  const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

  // Task 37
  const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort ((first,second) => first.author.localeCompare(second.author));
     

const sortedByReversedAuthorName =  [...books].sort ((first,second) => second.author.localeCompare(first.author));

const sortedByAscendingRating =  [...books].sort ((first,second) => first.rating - second.rating);

const sortedByDescentingRating = [...books].sort ((first,second) => second.rating - first.rating);
     

// Task 38
// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
  return [...users].sort ((first,second) => first.balance - second.balance) 
};
// Пиши код выше этой строки

// Task 39
// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
  return [...users].sort ((first,second) => second.friends.length - first.friends.length ) 
};
// Пиши код выше этой строки

// Task 40
// Пиши код ниже этой строки
const sortByName = users => {
  return [...users].sort ((first,second) => first.name.localeCompare(second.name)) 
};
// Пиши код выше этой строки


// Task 41
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books
.filter(item => item.rating > MIN_BOOK_RATING)
.sort((first,second) => first.author.localeCompare(second.author))
.map(name => name.author);


// Task 42
// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
  return [...users].sort((first,second) => first.friends.length - second.friends.length)
  .map(item => item.name)
};
// Пиши код выше этой строки

// Task 43
// Пиши код ниже этой строки
const getSortedFriends = users => {
  return [...users]
  .flatMap(item => item.friends)
  .filter((item,index,arr) => arr.indexOf(item) === index)
  .sort((first,second) => first.localeCompare(second))
};
// Пиши код выше этой строки


// Task 44
// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter(item => item.gender === gender)
    .reduce((total,item) => total+item.balance,0)
};
// Пиши код выше этой строки