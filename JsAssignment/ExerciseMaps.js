var arr = ['html','css','js']
var newArray =arr.map((arr)=>arr.toUpperCase())
console.log(newArray);


var squareNumbers = [1,2,3,4,5,6,7,8,9]
var newArray = squareNumbers.map((squareNumbers)=>squareNumbers*squareNumbers)
console.log(newArray)


var students = [{name:"Zeshaan", age:25},{name:"Mateen", age:19},{name:"Adnan", age:10},]
var newArray=students.map((students)=>students)
console.log(newArray)


var productname = [{name:"ABCD", price:25},{name:"EFGH", price:19},{name:"IJKLM", price:30},]
var newArray=productname.map((productname)=>productname.name)
console.log(newArray)


var temperature = [10,20,30,40,45,50,55]
var newArray=temperature.map((temperature)=>temperature*9/5+32)
console.log(newArray)