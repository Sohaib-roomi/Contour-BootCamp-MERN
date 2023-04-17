
let n = 5;
let result = 1; 

// function factLoop(n){

//     if(n === 1 || n===0){
//         console.log("Factorial of 0 is 1")
//     }
//     else{
//         for(let i=1; i<= n ; i++){
//             result = result*i;
//         }
//         console.log(`Factorial of ${n} is: ${result}`);
//     }

// }

// let num = 5;

// function factWhile(num){
//     let fact = num;
//     let temp = num
//     while(temp>1){
//         temp--;
//         fact *= temp;
    
//     }
//     return console.log(`Factorial of ${num} is ${fact}`);
// }



function factRec(n){
    if(n<0){
        return console.log(`Negative numbers cannot be factorialized`)
    }
    
    
    if(n == 0){
        return 1
    }
    else{
        return n * factRec(n-1);
    }

}

//factLoop(n);
//factWhile(5);

let answer = factRec(5);
console.log(`Factorial of ${n} is: ${answer}`);



