let weather = "sunny";

if (weather == "sunny") {
    console.log("well, i better wear some suncream!")
} else if (weather == "rainy") {
    console.log("better grab an umbrella!")
} else {
    console.log("hmmm, it could go either way!")
}
//
////
//
//
//

if (condition1) {
    //do this
}
else if (condition2) {
    //do this
}
else {
    //if nothing is matched do this
}
//
//
//
//
//
//
//!= not equal
//checks if the values are not equal regardless of type
//
//!== strict not equal
//
//
//
//
//
let place = "manc";
let weather = "sunny";

if (place == "manc" && weather == "sunny") {
    console.log("well, i better wear some suncream!")
} else if (place == "manc" && weather == "rainy") {
    console.log("standard")
} else {
    console.log("hmmm, it could go either way!")
}
//
//
//
//
//
// &&  and 
// both conditions have to be met in order to run the code
//
//
// || or 
// either condition can be met in order to run the code 
//
//
//
//
//
//
switch(expression){
    case x:
        // code here
    case y:
        //code here
        break;
    default:
        //code here
}
//
//
//
//
//
//
////
//
//
//
//
//
//
//
// ACTIVITY 1
//
//
let age = "18";

if (age == "18") {
    console.log("chug chug chug")
} else if (age == "16") {
    console.log("its a no from me")
} else {
    console.log("hmmm")
}
//
//
//STRETCH
//
//
//
let place = "UK";
let age = "18";

if (place == "UK" && age == "18") {
    console.log("CHUG CHUG CHUG")
} else if (place == "manc" && age == "16") {
    console.log("WHERES YA DAD AT?!")
} else {
    console.log("i dunno")
}
//
//
//
//
//
//ACTIVITY 2
//
//
//
//
let topping = "Pepperoni";

switch(topping){
    case Pepperoni:
        console.log("Pepperoni has been selected");
        break;
    case Ham:
        console.log("Ham has been selected");
        break;
    case x2Cheese:
            console.log("Double Cheese has been selected");
        break;
    case SpicyBeef:
            console.log("Spice Beef has been selected");
        break;
    case Sausage:
            console.log("Sausage has been selected");
        break;
    case Veg:
            console.log("Veg has been selected");
        break;
    default:
        console.log("You havent selected any toppings");
}
//
//
//
//
//
//
//
//
//ACTIVITY 3
//
//
//
//
let password = ('7');
if(password == 8) {
    console.log("password is long enough");
}
else {
    console.log("better make it longer");
}
//
//
//
//
//STRETCH
//
//
let num = 360
if(num % 3 == 0 || num % 5 == 0){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("you can divide this by 3 & 5")
    }
    else {console.log("you can divide this by 3 or 5")
    }
}

else{
    console.log("not divisible by 3 or 5!")
}
//
//
//
//
//ACTIVITY 4 
//
//
//
let num = 9
if(num % 3 == 0 || num % 5 == 0){
    if(num % 3 == 0){
        console.log("fizz")
        }
    if(num % 5 == 0){
        console.log("buzz")
    }
}
    else {console.log("fizzbuzz")
    }

//
//
//
//
//
//
//ACTIVITY 5
//
//
//
let num = 1337
let numString = num.toString(); 
let reverseNumString = numString.split('').reverse().join('');

if (num == reverseNumString){
    console.log(`${num} is a palindrome`)
} else {
    console.log(`${num} is not a palindrome`)
}
