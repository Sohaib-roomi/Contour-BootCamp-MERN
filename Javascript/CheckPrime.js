// let arr = [2,3,4,5,6,7,8,9,10];
// let arr2 = [];

// for(let i = 0; i<arr.length; i++){
  
//   if(arr[i] % 2 == 0 ){
//     // var arr2 = arr2 +' '+ [arr[i]];

//     arr2 = [arr2 +' '+ arr[i]];
//   }
  
// }
// console.log(arr2 + " is not a prime number");


// function checkPrimeNum(num){
//     if (num === 1) {
//         console.log("1 is neither prime nor composite number");
//     }

//     else if(num == 2){
//         console.log("It is a prime number");
//     }
//     else if(num % 2 == 0 || num % 3 == 0){
//         console.log("It is not a prime number");
//     } 
//     else
//     console.log( num + " is a prime number");
// }

// function checkPrimeNum(n) {
//      var i = 1;

//     if (n == 0 || n == 1) {
//         console.log("It is not a prime number");
//     }

//     // Checking Prime
//     if (n == i) 
//     console.log("It is a prime number");;

//     // base cases
//     if (n % i == 0) {
//         console.log("It is not a prime number");
//     }
//     i++;
//     return checkPrimeNum(n);
// }

// checkPrimeNum(7);

function isPrime(n) {
    // Corner case
    if (n <= 1)
        console.log("0 and 1 cannot be considered as prime number");

    else if(){
        console.log("It is a prime numberrrrrff");
    }

    // Check from 2 to n-1
    else{
        for (let i = 2; i < n; i++)
        if (n % i == 0)s
            console.log("It is not a prime number");

    }
    
}

// Driver Code

isPrime(1) 
    // ? console.log("true") 
    // : console.log("false");