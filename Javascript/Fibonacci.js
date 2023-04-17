// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.....


let n1 = 0, n2 = 1, nextTerm = 0;


// function fib(num){
//     for(let i = 0; i<num; i++){

//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
        
//     }
// }

function fib(num){
    
        if(num>=1){
            
            nextTerm = n1 + n2;
            console.log(" "+n1);
            n1 = n2;
            n2 = nextTerm;
            fib(num-1);
            
        }
        
    }

fib(10);//first nth numbers of fib series will be printed








// function fibtillnum(n){
    
//     for(i = 1 ; nextTerm<=n; i++){
        
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
        
//     }
// }
// fibtillnum(5);

