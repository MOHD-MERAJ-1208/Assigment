let btn = document.querySelector("#btn")

btn.addEventListener('click', function(e) {
    console.log("kuch bhi matlab kuch bhi")
    apiPromise("https://dummyjson.com/carts/2").then((resdata)=>{
    console.log(resdata)
 }).catch((rejerr)=>{
    console.log(rejerr)
 })
})
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
 
