// let btn = document.querySelector("#btn")

// btn.addEventListener('click', function(e) {
//     console.log("jai telangan")
    
// })

function apiPromise(url){
    let data=new XMLHttpRequest();
   // console.log(data);
    let promise = new Promise((resolve, reject) => {
       data.responseType="json"
       data.onload=function(){
        if(data.response!=null){
            resolve(data.response)
        }else{
            reject("error")
        }
    }
    })
    data.open('GET',url);
    data.send();
    return promise;
}
 apiPromise("https://dummyjson.com/carts/1")
 .then((resdata)=>{
    console.log(resdata)
    return apiPromise("https://dummyjson.com/carts/2")
})  
.then((resdata2)=>{console.log(resdata2)})
 .catch((rejerr)=>{
    console.log(rejerr)
 })


 //Question3

let totalAmt=0;
apiPromise("https://dummyjson.com/carts/1")
.then((resdata)=>{
    totalAmt+=resdata.total;
    return apiPromise("https://dummyjson.com/carts/2")
})
.then((resdata2)=>{
    totalAmt+=resdata2.total;
    return totalAmt;
}).then((amt)=>{
    console.log("Sum of the amount of carts",amt )
}).catch((err)=>{
    console.log(err)
})
