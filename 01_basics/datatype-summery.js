//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// null => not value assigned
  
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // output => false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// type of val                //Result


// undefined                    undefined
// Null                          Objects
// Number                        number
// string                        string
// object (not emplement)        object
// object (emplement)            function