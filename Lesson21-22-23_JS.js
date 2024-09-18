//1

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num);


//2

// let n = 100;
// let sum = (n * (n + 1)) / 2;
// console.log(sum);


//3

// for(let i = 2; i <= 20; i += 2){
//     console.log(i);
// }


//4

// let n = 5;
// let factorial = 1;

// for(let i = 1; i <= n; i++){
//     factorial *= i;
// }

// console.log(factorial);


//5

// let number = prompt("Назовите число: ");
// let sum = 0;
// let digits = String(number).split('');

// for(let i = 0; i < digits.length; i++){
//     sum += Number(digits[i]);
// }
// console.log(sum); 


//6

// let str = "Привет123!";
// let letters = '';

// for(let i = 0; i < str.length; i++){
//     if(/[a-zA-Zа-яА-Я]/.test(str[i])){
//         letters += str[i];
//     }           // /[a-zA-Zа-яА-Я]/ - это регулярное выражение, что-то новое для меня)
// }
// console.log(letters);


//7

// let limit = prompt("Назовите число: ");
// let multiples = [];

// for(let i = 1; i <= limit; i++){
//     if(i % 3 === 0) {
//         multiples.push(i);
//     }
// }
// console.log(multiples);


//8

// let myString = prompt("Ваше слово сэр:");
// let count = 0;

// for(let i = 0; i < myString.length; i++){
//     count++;
// }
// console.log(count);


//9

// let array = [1, 2, 3, 4, 5];

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }


//10

// let arraySum = [1, 2, 3, 4, 5];
// let sumElements = 0;

// for(let i = 0; i < arraySum.length; i++){
//     sumElements += arraySum[i];
// }
// console.log(sumElements); 


//11

// let arrayCheck = [1, 2, 3, 4, 5];  // если добавить число с минусом ответ изменится
// let allPositive = true;

// for(let i = 0; i < arrayCheck.length; i++){
//     if(arrayCheck[i] <= 0){
//         allPositive = false;
//         break;
//     }
// }
// if(allPositive){
//     console.log("Все элементы положительные");
// } else{
//     console.log("Есть отрицательные элементы");
// }


//12

// let arrayAvg = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sumAvg = 0;

// for(let i = 0; i < arrayAvg.length; i++){
//     sumAvg += arrayAvg[i];
// }
// let avg = sumAvg / arrayAvg.length;
// console.log(avg);


//13

// let arrayMin = [3, 1, 4, -1, 5];
// let minElement = arrayMin[0];

// for(let i = 1; i < arrayMin.length; i++){
//     if(arrayMin[i] < minElement){
//         minElement = arrayMin[i];
//     }
// }
// console.log(minElement);


//14

// let arrayEvenOdd = [1, 2, 3, 4, 5];
// let evenCount = 0;
// let oddCount = 0;

// for(let i = 0; i < arrayEvenOdd.length; i++){
//     if(arrayEvenOdd[i] % 2 === 0){
//         evenCount++;
//     } else{
//         oddCount++;
//     }
// }
// console.log("Четных:", evenCount); 
// console.log("Нечетных:", oddCount); 


//15

// let arrayRemoveNegatives = [1, -2, 3, -4, 5, -6, 7, -8, 9];
// let positiveArray = [];

// for(let i = 0; i < arrayRemoveNegatives.length; i++){
//     if(arrayRemoveNegatives[i] >= 0){
//         positiveArray.push(arrayRemoveNegatives[i]);
//     }
// }
// console.log(positiveArray);
