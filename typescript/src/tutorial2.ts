// let tax: number | string = 10;
// tax = 100;
// tax = "$10";

// let requsttStatus: "pending" | "success" | "error" = "pending" 
// requsttStatus = "pending"

// let notSure : any = 4;
// notSure = 'maybe a string instead';
// notSure = false;

// let random; //Automatically it type any

// const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

// let foundBook:string | undefined;
// for(let book of books){
//     if(book === '1984'){
//         foundBook = book;
//         foundBook = foundBook.toUpperCase()
//         break;
//     }
// }

// console.log(foundBook?.length);

let discount: number | string = 20;
discount = "20";
//discount = true

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';

                //Arrays          
let prices: number[] = [100, 75, 42]
//prices.push('hello')

let fruit:string[] = ['apple', 'orange'];

// let randomValues:[] = ['hello'];  Not assignable to the empty array without declaring the type
let emptyValues: number[] = [];


let names = ['peter', 'susan', 1];
let array:(string | boolean)[] = ["apples", true, 'orange', false];

let temperatures:number[] = [20, 25, 30];
// temperatures.push("hot")

let colors: string[] = ['red', 'green', 'blue'];
// colors.push(true);

let mixedArray:(number | string)[] = [1, 'two', 3]