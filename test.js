// let myFilms = [
//      "Alien", 
//      "Aliens", 
//      "Alien3", 
//      "Promethus", 
//      "Alien Covenant"
//     ] ;
//     console.log(myFilms);

// if (myFilms == "") {
//     console.log("Its" (myFilms[i]))
// } else if (weather == "rainy") {
//     console.log("better grab an umbrella!")
// } else {
//     console.log("hmmm, it could go either way!")
// }



//     let myFilms = [
//                  "aliens",
//                  "alien",
//                  "terminator",
//                  "predator",
//                  "predator2"
//                ]
//         for (let i = 0; i < myFilms.length; i++){
//                      console.log(myFilms[i])
//                    }

// for (  i = 1; i <= 6; i++ ){
//     let num = (Math.round(Math.random()*30));
//     if (num % 7 == 0)
//     console.log(${num} is divisible by 7);
//     else {
//         console.log(${num} is not divisible by 7);
//     }
// }





let num=40
if (num % 3 == 0){
    console.log("This number is divisble by 3.");
} else if (num % 5 == 0){
    console.log("This number is divisble by 5.");
} else if (num % 3 == 0  && num % 5 == 0) {
    console.log("This number is divisible by both 5 and 3!");
} else {
    console.log("This number is indivisible by either 5 or 3!") ;
}