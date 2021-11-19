// // EXAMPLE
// let offer = "none";
// let time = 1000;

// const cafe ={
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "cappuccino",
//         "latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],


//     breakfastOffer: "free croissant with coffee",
//     lunchOffer: "free drink with surprisingly priced sandwich",
//     noOffer: "computer says nooooooo"
// }

// if (time <1100){
//     offer = cafe.breakfastOffer;
//     console.log(offer)
//     } else if (time < 1500){
//         offer = cafe.lunchOffer;
//         console.log(offer);
//     }



// ----------------------------
// Activity
// const Person ={
//     name: "Bill",
//     age: 100,
//     male: true,
//     hairColour: [
//         "Blonde",
//         "Brunette",
//         "Black",
//         "Ginger",
//         "other"
//     ] 
       
// };
// person.favSongs = ["track1", "track2", "track3"];

// console.log(person.name)
// 

// activity

// let notification = {
//     weekendAlarm : "LAY IIIIIN",
//     weekdayAlarm : "WAKE UP AT SILLY OCLOCK"
// }

// const day = "Sunday"
// let alarm

// if (day == "Saturday" || day == "Sunday") {
//     alarm = notification.weekendAlarm;
// } else {
//     alarm = notification.weekdayAlarm;
// }

// console.log(alarm)


// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["Cappucino","latte","filtered Coffee", "tea", "Hot Chocolate"],
//     breakfastOffer: "free Croissant with coffee",
//     lunchOffer: "free drink with sandwich",
//     noOffer: "sorry no offer",

//     openCafe(){
//         if(this.hasSpecialOffers){
//             return "time for a special offer";
//         }
//     },
//     closeCafe(){
//         return "we are closed";
//     }
// };
// console.log(cafe.openCafe());


// Activity1

// const Person ={
//     name: "Bill",
//     age: 100,
//     male: true,
//     hairColour: [
//         "Blonde",
//         "Brunette",
//         "Black",
//         "Ginger",
//         "other"
//     ], 
//     openName(){
//         if(this.name){
//             return "Hello my name is ${this.name}";    
//         }
//     }   
// };
// person.favSongs = ["track1", "track2", "track3"];


    

// console.log(person.name)


// ACTIVITY2

// if (cat.name == "tigz" ) {
//     console.log("")
// } else if (cat.name == "who are you?") {
//     console.log("standard")
// } else {
//     console.log("hmmm, it could go either way!")
// }

// const cat ={
//     name: "tigz",
//     age: 2,
//     typeOfPet: "cat",
//     colour: [
//         "Blonde",
//         "Brunette",
//         "Black",
//         "Ginger",
//         "other"
//     ], 
//     feedCat(){
//         if(this.name){
//             return "${this.name} is eating/drinking";    
//         }
        
//     }   
// };
   
// console.log("${cat.name}, is eating/drinking")



// activity 3 

const coffeeShop = {
    branch: "Manc",
    drinks: ["Cappuccino", "Latte", "Flat White", "Hot Chocolate"],
    drinkPrices: [3.00, 3.20, 2.50, 2.00],
    food: ["Cake", "Crisps", "Sandwich"],
    foodPrices: [2.50, 1.15, 2.75],
        drinksOrdered(){
            return `Your drinks order is ${coffeeShop.drinks[0]} x2, ${coffeeShop.drinks[2]}. Drinks total is £${((coffeeShop.drinkPrices[0]*2)+coffeeShop.drinkPrices[2])}`;
        },
        foodOrdered(){
            return `Your food order is ${coffeeShop.food[2]} x3, ${coffeeShop.food[1]}. Food total is £${(coffeeShop.foodPrices[2]*3)+coffeeShop.foodPrices[1]}`;
        },
}

let totalPrice = coffeeShop.foodPrices[2]*3+coffeeShop.foodPrices[1]+(coffeeShop.drinkPrices[0]*2)+coffeeShop.drinkPrices[2]

console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());
console.log(`Your total bill is £${totalPrice}`);








// const exampleArray = {
//     ["line1", "line1a", "line1b" ],
//     ["line2", "line2a", "line2b" ],
//     ["line3", "line3a", "line3b" ],
// }
// console.log(exampleArray[1][2])