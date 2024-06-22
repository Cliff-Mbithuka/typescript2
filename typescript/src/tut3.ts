function sayHi(name:string){
    console.log(`Hello there ${name.toUpperCase()}`);
    
}

sayHi('John');
// sayHi(3);

function calculateDiscount(price: number){
    const hasDiscount = true;

    if(hasDiscount){
        return price;
        //return "Discount Applied";
    }
    return price * 0.9;
}

const finalPrice = calculateDiscount(200);

//task
const names: string[] = ["John", 'Jane', 'fell', 'Tean'];

function isNameInList(name: string): boolean {
    return names.includes(name)
}

let nameToCheck = 'Jane';

if(isNameInList(nameToCheck)){
    console.log(`${nameToCheck} is in the list`);
    
}else{
    console.log((`${nameToCheck} is not in the list`));
    
}

//OPtional and default Parameters
function calculatePrice(price: number, discount?: number):number{
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(initialScore: number, penaltyPoints: number = 0):number{
    return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100,20)
let scoreWithoutPenalty = calculateScore(300)

//Rest Parameters
function sum(message:string, ...numbers:number[]):string{
const doubled = numbers.map((num) => num * 2);
console.log(doubled);


let total = numbers.reduce((previous, current) => {
    return previous + current;
}, 0);
return `${message}${total}`;
}

let result = sum('The total is : ',1,2,3,4,5)
console.log(result);
