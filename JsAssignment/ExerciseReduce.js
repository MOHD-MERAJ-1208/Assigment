var arr = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20]
console.log("array of numbers ",arr)
var arr1 = arr.reduce((sum,num)=>{
    return sum + num;
})
console.log("Sum of numbers ",arr1);

var arr2 = ['Hello!','How','Are','You?']
console.log(arr2)
var arr3 = arr2.reduce((p,n)=>{
     return p + n;
})
console.log(arr3);


var arr4 = [
    {
        product:'bucket',
        Price:300
    },
    {
        product:'belt',
        Price:700
    },
    {
        product:'T-Shirt',
        Price:500
    },
    {
        product:'Shoes',
        Price:700
    },
    {
        product:'Jeans',
        Price:2000
    }
]

var arr5 = arr4.reduce((sum,n)=> sum + n.Price,0)
console.log("sum of all prices ",arr5);

// var temp = 1;
// for(var i=0; i<arr4.length; i++){
//     temp = temp+arr4[i].Price;
// }
// console.log(temp);


var arr6 = [
    {
        type:"credit",
        amount:500
    },
    {
        type:"debit",
        amount:50
    },
    {
        type:"debit",
        amount:100
    },
    {
        type:"credit",
        amount:250
    },
    {
        type:"credit",
        amount:120
    }
]

var arr7 = arr6.reduce((p,c)=>
//     if(c.type=="credit"){
//         return p+c.amount;
// }
// else{
//     return p-c.amount;
// }
c.type == "credit"?p+c.amount:p-c.amount
,0)

console.log("Remaining Total amount after debited ",arr7);
// console.log(object);