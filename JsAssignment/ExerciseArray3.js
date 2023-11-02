var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// i)
console.log("Sorted ages : " ,ages.sort())
console.log("Min age is : " , ages[0])
console.log("Max age is : " , ages[ages.length-1])
var min = ages[0]
var max = ages[ages.length-1]
console.log("Min age is : ", min)
console.log("Max age is : ", max)

// trying the min max with loops
for(var i=0; i<=length-1; i++){
    if(ages[i] < min){
        var min = i
    }
}
    // --------------------------------------------------------------
// ii) 
var ages = [1,2,3,4,5,6,7,8,9,10]
if(ages.length%2 == 0){
    console.log("median is : ", ages[Math.floor((ages.length/2)-1)], ",",  ages[Math.floor((ages.length/2))] )
}

else{
    console.log("median is : ", ages[Math.floor(ages.length/2)])
}
    // --------------------------------------------------------------
// iii)
            // Actual answer
let sum=ages.reduce((acc,currentValue)=>{
    return acc=acc+currentValue;
},0)
console.log(sum)
let avg = sum/ages.length
console.log("Sum of all ages is : ", avg)

            //  I tried to solve using below method
// var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// for(var i=0; i<=ages.length-1; i++){
//     sum += ages[i]
// }
// var avg = sum/ages.length
//     console.log("Average of all ages is : " , avg)


    // --------------------------------------------------------------
// iv)
console.log("Range of all the ages is : ", (max-min))
    // --------------------------------------------------------------
// v)
console.log("Comparing the values of min-average: ", Math.round(Math.abs(min-avg)))
console.log("Comparing the values of max-average: ", Math.round(max-avg))


// ----------------------------------------------------------------------------------------------------

var game = ['Apple', 'Banana', 'pet', 'it', 'chickoo']

for(var i=0; i<=length-1; i++){
    if(game[i].length > 3){
        var arr = []
        console.log(arr.push(game[i]))
        console.log(game[i])
        console.log(arr)
    }
    else{
        console.log("not found")
    }
}