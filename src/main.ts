const arrayOfNumbers: number[] = [131, 256, 389, 417, 587, 622, 709, 821];
const arrayOfNumbers2: number[] = arrayOfNumbers.map((number) => (number * 2));

console.log(arrayOfNumbers);
console.log(arrayOfNumbers2);

const arrayOfWords: string[] = ["1984", "teapot", "television", "five5"];
const arrayOfWords2: string[] = arrayOfWords.filter((word)=> word.length>5);
console.log("Words longer than 5 letters are: ", arrayOfWords2);

const numbers: number[] =[1,2,3,4,5,6];
const sum = numbers.reduce((acc, curr) => acc + curr,0);
console.log("Sum of numbers is: " ,sum);

const hasNumberGreaterThan10: boolean = numbers.some((number) => number > 10);
console.log("Has a number greater than 10? The answer is: ", hasNumberGreaterThan10);


//Bonus:
const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];


//GPT use '[...list].sort' instead of 'list.sort'
//const sortedListInDescendingOrder = list.sort((a, b)=> b-a);
const sortedListInDescendingOrder = [...list].sort((a, b)=> b-a);

console.log(sortedListInDescendingOrder);

const listWithSquaredNumber: number[] = sortedListInDescendingOrder.map((number) => number*number );
console.log(listWithSquaredNumber);

const listWithRemovedNumber = listWithSquaredNumber.slice(4, -2);
console.log(listWithRemovedNumber);

const listWithNoDivisibleBy4 = listWithRemovedNumber.filter((number)=> number%4 !== 0);
console.log("List without numbers divisible by 4: ", listWithNoDivisibleBy4);

const sumOfList = listWithNoDivisibleBy4.reduce((acc, curr) => acc + curr, 0 );
console.log("The sum of the list is: ", sumOfList)


