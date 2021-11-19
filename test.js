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

for (  i = 1; i <= 6; i++ ){
    let num = (Math.round(Math.random()*30));
    if (num % 7 == 0)
    console.log(${num} is divisible by 7);
    else {
        console.log(${num} is not divisible by 7);
    }
}