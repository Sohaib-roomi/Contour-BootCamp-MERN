const arr = [
        ["John", "Doe", 1],
        ["Arran", "Jon",2],
        ["Will", "Smith", 3]
]


let newarr = arr.map((element) => {

return {
    FirstName: element[0], 
    SecondName: element[1], 
    id: element[2]
} ;

}) 

console.log(newarr);

// let arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// let resArr = arr.map((element) => {
//     if(element[i] % 2 === 0){
//         return element[i];
//     }
    
// })

// console.log(resArr);