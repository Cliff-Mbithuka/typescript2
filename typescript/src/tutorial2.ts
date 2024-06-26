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

// let discount: number | string = 20;
// discount = "20";
// //discount = true

// let orderStatus: "processing" | "shipped" | "delivered" = "processing";

// //Arrays
// let prices: number[] = [100, 75, 42];
// //prices.push('hello')

// let fruit: string[] = ["apple", "orange"];

// // let randomValues:[] = ['hello'];  Not assignable to the empty array without declaring the type
// let emptyValues: number[] = [];

// let names = ["peter", "susan", 1];
// let array: (string | boolean)[] = ["apples", true, "orange", false];

// let temperatures: number[] = [20, 25, 30];
// // temperatures.push("hot")

// let colors: string[] = ["red", "green", "blue"];
// // colors.push(true);

// let mixedArray: (number | string)[] = [1, "two", 3];

//objects
let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
car.brand = "ford";
// car.color = "blue" not defined in the string

let car1: { brand: string; year: number } = { brand: "merc", year: 2022 };

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
//items[0].title = 'new book'

//object example
let bike: {brand: string; year: number} = {brand: "yamaha", year: 2010};
//bike.year = 'old

let laptop: {brand: string; year: number} = {brand: "Dell", year: 2020};
// let laptop2: {brand: string; year: number} = {brand: "Dell"};

let product1 = { title: "shirt", price: 20};
let product2 = {title: 'pants'};
let products: {title: string; price?: number}[] = [product1, product2 ]