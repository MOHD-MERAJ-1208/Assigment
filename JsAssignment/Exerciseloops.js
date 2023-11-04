// for(var i=0; i<=100; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------

// for(var i=0; i<100; i++){
//     if(i%2){
//         console.log(i)
//     }
// }

// ---------------------------------------------------------------------------------------------------------------------------------------------

// var sum = 0
// for(var i=0; i<=100; i++){
//     sum += i 
// }
// console.log("sum of all numbers : " , sum)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// var evenSum = 0
// var oddSum = 0
// for(var i=1; i<=100; i++){
//     if(i%2 == 0){
//         evenSum += i
//     }
//     else{
//         oddSum += i
//     }
// }

// console.log("sum of all evens : ", evenSum)
// console.log("sum of all odds : ", oddSum)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// var evenSum = 0
// var oddSum = 0

// for(var i=1; i<=100; i++){
//     if(i%2 == 0){
//         evenSum += i
//     }
//     else{
//         oddSum += i
//     }
// }
// var arr = []
// arr.push(evenSum)
// arr.push(oddSum)
// console.log(arr)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// var arr = ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

// var newArr = []
// for(var i=0; i<=arr.length-1; i++){
//     var val = arr[i].length
//     newArr.push(val)
// }
// console.log(newArr)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// var arr = ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

// var biggestNum = 0
// var country;
// for(var i=0; i<=arr.length-1; i++){
//     var len = arr[i].length

//     if(len > biggestNum){
//         biggestNum = len;
//         country=arr[i]   
//     }

// }
// console.log(country)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// var arr = ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']

// var arr1 = []
// for(var i=0; i<=arr.length-1; i++){
//     var len = arr[i].length

//     if(len == 5){
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// var arr = ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
// var arr1 =[]
// for(var i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
//     arr1.push(arr[i])
// }
// console.log(arr1)


var sum=0;

for( let i = 0; i < 100; i++)
{
    if(i % 2 == 0)
    sum += i;
}

console.log(sum)

