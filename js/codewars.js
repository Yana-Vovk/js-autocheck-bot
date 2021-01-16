// Extra practice CodeWars
//  1
var isSquare = function(n){
  if ((Math.sqrt(n))%1 === 0) {
    return true;
  } else {
    return false;
  }
    // fix me
}

// 2
function digPow(n, p){
   const arrayOfSymbols = (n.toString()).split('');
  let summ = 0;

  for (let symbol of arrayOfSymbols) {    
     summ += Math.pow(Number(symbol), p);
    p += 1;
  }

   const result = (summ / n)%1 > 0? -1 : summ / n;
 
return result;
}

// 3
function findEvenIndex(arr)
{
  let sumLeft = 0;
  let sumRight = 0;

  for (let i = 1; i < arr.length; i += 1){
    sumRight += arr[i];
  }

  if (sumRight !== 0) {
  
    for (let i = 1; i < arr.length; i += 1) {
      sumRight -= arr[i];
      sumLeft += arr[i-1];

      if (sumRight === sumLeft) {
        console.log(i);
        return i;     
      }
    }
        console.log(-1);
        return -1;
}
  console.log(0);
  return 0;
}

// 4

function toCamelCase(str) {
  const arrOfWords = str.includes('-') ? str.split('-') : str.split('_');
  const newArray = [];
  newArray.push(arrOfWords[0]);

  for (let i = 1; i < arrOfWords.length; i += 1) {
   const arrOfLetters = arrOfWords[i].split('');
    arrOfLetters.splice(0, 1, arrOfLetters[0].toUpperCase());
    newArray.push(arrOfLetters.join(''));
  }
  console.log(newArray.join(''));
  
}

toCamelCase('mann_gegen_mann');
toCamelCase('Ohne-dich');


// 5
var moveZeros = function (arr) {
  // TODO: Program me
  let counter =0;
  const newArr = [];
  for (const value of arr) {
    if (value === 0) {
      counter +=1;
      continue;
    } else {
      newArr.push(value);
    }
  }
  for (let i=0; i<counter; i+=1){
    newArr.push(0);
  }
 console.log (newArr);
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);