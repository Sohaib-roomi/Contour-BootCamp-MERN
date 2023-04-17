
let n = 10;
let arr = [];
let i = 0;



for( i ; i<n; i++){

    //arr.push(i);
    arr[i] = i
}

function square(arr){
     return arr * arr    
}


let oddArr = arr.filter((num) => num % 2 !== 0);

let squareArr = oddArr.map(square)

console.log(arr);
console.log(oddArr);
console.log(squareArr);

