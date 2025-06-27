// Primitive datatypes
// 7 types : String , Number, Boolean, Undefined, Null, Symbol, BigInt


// Reference Type( Non primitive )

// Array, Objects, Functions 

// JavaScript is dynamically typed language variables types are checked at run time 
// its not needed so define its type of data at time of decalartion 

// Primitive Datatypes
const score = 100;
const value =100.3

const isLoggedIn = false
const temp = null
let email;

const id = Symbol('123')
const id_2 = Symbol('123')

//console.log(id===id_2);

///console.log(id==id_2);

const bignumber = 3456789456789765435678765434567897654n
//console.log(typeof(bignumber));


// Non primitive (Refernce) - Array, Object, Functions

const heros =["varun","akshay","ritik","saheer"]
let obj = {
      name :"Pratiksha",
      age :22
}

console.log(typeof heros);
//console.log(typeof(heros));
//console.log(typeof(obj));

const myfuction= function(){
    console.log("Hello World");
    
}

//console.log(typeof myfuction);
//console.log(typeof heros);


// +++++++++++++++++++++++++  +++++++++++++++++++++++++++++++++++++++++

// memory - stack (primitive) -copy , heap (non-primitive) - reference 

let myName ="Pratiksha"

let newName = myName

newName = "Sakshi"

console.log(myName);
console.log(newName);

let user1= {
    name : "Rudhav",
    age : 1

}

console.log(user1);

let user2 = user1
user2.name = "Prathmesh"

console.log(user2);
console.log(user1);


