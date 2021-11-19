let name = `Scott`;
let age = `33`;
let favdrink = `irnbru`;
console.log (`My name is ${name}. i am ${age} and my favourite drink is ${favdrink}.`)
name = `Bill`;
age = `18`;
favdrink = `redbull`;
console.log (`My name is ${name}. i am ${age} and my favourite drink is ${favdrink}.`)
//
//
let space1 = ` x |`;
let space2 = `   |`;
let space3 = `    `;
let space4 = `----`;
let space5 = `   |`;
let space6 = ` o |`;
let space7 = ` x  `;
let space8 = `   |`;
let space9 = ` x |`;
let space10 = ` o  `;
//
//
console.log (`${space1} ${space2} ${space3}`)
console.log (`${space4} ${space4} ${space4}`)
console.log (`${space5} ${space6} ${space7}`)
console.log (`${space4} ${space4} ${space4}`)
console.log (`${space8} ${space9} ${space10}`)
//
//
let todayDate = Date.parse("2021-11-16");
let birthday = Date.parse("2022-09-28");
let difference = new Date(birthday - todayDate);
let days = difference/1000/60/60/24;
console.log(days);

//let upright = ['   |   |   '];
//let dashes = ['-----------'];


//function grid() {
//    for (let i = 0; i < 3; i++)
//    console.log(upright);
//    console.log(dashes);
//}

//let n = 0;

//while (n < 3){
//    n++;
//    grid();
//}

