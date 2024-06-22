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