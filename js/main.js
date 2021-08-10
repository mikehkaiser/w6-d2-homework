// codewars
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5/solutions/javascript
// Remove String Spaces
// given a string, remove all empty spaces and return the string
function noSpace(x){
    return x.split(' ').join('')
}

//#2 Square(n)sum
// https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript
function squareSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length;i++){
        sum += numbers[i]**2
    }
    return sum
}

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Shamrock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

for(let i=0; i<Object.keys(person3).length; i++){
        console.log(`This person's favorite ${Object.keys(person3)[i]}: 
        ${Object.values(person3)[i]}`)
}




//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class
class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo(){
        return `Nom de plum: ${this.name} \nRevolutions: ${this.age}`
    }
    addAge(){
        console.log('Another revolution!')
        return this.age++
    }
};   

let mike = new Human('Mike', 0)
let katie = new Human('Katie', 0)
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
console.log(katie.printInfo())
console.log(mike.addAge())
console.log(mike.addAge())
console.log(mike.addAge())
console.log(mike.addAge())


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkLength = (word) =>{
    return new Promise((resolve, reject) =>{
        if(word.length >= 10){
            resolve('Big word')
        }else{
            reject('Small word')
        }
    })
};

console.log(checkLength('uh-oh'))
console.log(checkLength('holy guacamole'))

