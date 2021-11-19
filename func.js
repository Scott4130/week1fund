// const pressGrindBeans = () => {
//     console.log("grinding for 20 secs");
// }
// pressGrindBeans();

// ---------


// let coffeeIsGrinding = false

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
    
// }
// pressGrindBeans();

// --------


// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));

// -------

// ACTIVITY 1 

function factorial (n) {
    if ((n === 0) || (n ===1)){
        return 1;
    } else {
        return (n *factorial (n-1));
    }
}

console.log(factorial(33));

// ------

// ACTIVITY 2


const takeOrder = (topping1, topping2) => {
    console.log (`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
}
takeOrder("Pepperoni", "spicySausage")



//----------------

//ACTIVITY 3

const ATM = (requestedAmount, PINEntered) => {
    //setting balance and correct PIN variables to check against
    let balance = 1000;
    let correctPIN = 1945;
  
    //function to check balance and return true or false
    const balanceCheck = () => {
      if (requestedAmount <= balance) {
        return true;
      } else {
        return false;
      }
    };
    // taking balance check boolean and assigning to variable
    let permissionToWithdrawAmount = balanceCheck();
  
    //function to check PIN entered against correct PIN and return boolean
    const pinCheck = () => {
      if (PINEntered == correctPIN) {
        return true;
      } else {
        return false;
      }
    };
    // assigning the result of that function to a variable
    let isPINCorrect = pinCheck();
  
    //function to check all elements are ok to withdraw, print out message and update balance
    const withdrawing = () => {
        if (permissionToWithdrawAmount == true && isPINCorrect == true) {
        balance -= requestedAmount;
        console.log("Here is £${requestedAmount}, your balance now is £${balance}");
      } else if (permissionToWithdrawAmount == true && isPINCorrect == false) {
        console.log("Your PIN is incorrect please try again");
      } else if (permissionToWithdrawAmount == false && isPINCorrect == true) {
        console.log("Insufficient funds");
      } else {
        console.log("Wrong PIN, please try again");
      }
    };
    //calling all functions in order
    balanceCheck();
    pinCheck();
    withdrawing();
  };
  //calling function with appropriate arguments
  ATM(1005, 1945);