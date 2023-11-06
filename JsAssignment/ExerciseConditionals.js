//--------------------------------------------------------------------ExerciseConditionals-1--------------------------------------------------------------//

var a = 230
var b = 10
if(a>b){
    console.log("a is greater than b")
}
else{
    console.log("a is less than b")
}


// var num = prompt('Enter a number:');
// if(num%2==0){
//     alert(num+"is an Even Number")
// }
// else{
//     alert(num+"is an Odd Number")
// }


// var age = prompt('Enter Your Age:')
// var max=18
// if (age>=18) {
//     alert("You are Old enough to Drive")
// }
// else{
//     var number = max-age
//     alert("You are left with '+ number +' Years to Drive")
// }


// var a=3
// var b=20
// var c=54

// if (a>b && a>c) {
//     console.log("a is the Largest")
// }
// else{
    
// }

//--------------------------------------------------------------------ExerciseConditionals-2--------------------------------------------------------------//

var obj = {
    admin : ['create','update','delete'],
    user : ['Update','remove'],
    guest :['remove','update']
}

function checkPermission(userRole) {
    if (userRole == obj.admin ) {
       console.log(obj.admin) 
    }
    else if(userRole == obj.user){
        console.log(obj.user) 
    }
    else{
        console.log(obj.guest)
    }
}

checkPermission(obj.user)


function calculateDiscountPrice(price) {
   if (price>=50) {
      var discount = (10 * price)/100
      var Totalprice = price - discount
      console.log(Totalprice) 
   }
   else{
    console.log("No Discount is Applied.\n your Total Price Is: ", price)
   }
    
}
calculateDiscountPrice(30)