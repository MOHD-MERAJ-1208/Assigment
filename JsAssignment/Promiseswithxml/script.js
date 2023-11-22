// let btn = document.querySelector("#btn")

// btn.addEventListener('click', function(e) {
//     console.log("jai telangan")
    
// })

// function apiPromise(url){
//     let data=new XMLHttpRequest();
//    // console.log(data);
//     let promise = new Promise((resolve, reject) => {
//        data.responseType="json"
//        data.onload=function(){
//         if(data.response!=null){
//             resolve(data.response)
//         }else{
//             reject("error")
//         }
//     }
//     })
//     data.open('GET',url);
//     data.send();
//     return promise;
// }
//  apiPromise("https://dummyjson.com/carts/1")
//  .then((resdata)=>{
//     console.log(resdata)
//     return apiPromise("https://dummyjson.com/carts/2")
// })  
// .then((resdata2)=>{console.log(resdata2)})
//  .catch((rejerr)=>{
//     console.log(rejerr)
//  })


 //Question3

// let totalAmt=0;
// apiPromise("https://dummyjson.com/carts/1")
// .then((resdata)=>{
//     totalAmt+=resdata.total;
//     return apiPromise("https://dummyjson.com/carts/2")
// })
// .then((resdata2)=>{
//     totalAmt+=resdata2.total;
//     return totalAmt;
// }).then((amt)=>{
//     console.log("Sum of the amount of carts",amt )
// }).catch((err)=>{
//     console.log(err)
// })


//Question 4

// fetch('https://restcountries.com/v2/all').then((countries)=>{
//     // console.log(resdata)
//     return countries.json();
// }).then((resdatasjson)=>{

//   console.log(resdatasjson)
//   console.log(resdatasjson[0].name)
//   console.log(resdatasjson[0].capital)
//   console.log(resdatasjson[0].languages[0].name)
//   console.log(resdatasjson[0].population)
// }).catch((err)=>{
//     console.log(err)
// })

// //Question 5
// let table = document.querySelector('tbody')
// fetch('https://restcountries.com/v2/all').then((countries)=>{
//     // console.log(resdata)
//     return countries.json();
// }).then((resdatasjson)=>{

//   let arr=resdatasjson.map(e => {
//     let item=`<tr>
//     <td>${e.name}</td>
//     <td>${e.capital}</td>
//     <td>${e.languages[0].name}</td>
//     <td>${e.population}</td>
//   </tr>`
//   return item;
//   });
//   table.innerHTML=arr.join("");
//   console.log(resdatasjson)
//   console.log(resdatasjson[0].name)
//   console.log(resdatasjson[0].capital)
//   console.log(resdatasjson[0].languages[0].name)
//   console.log(resdatasjson[0].population)
// }).catch((err)=>{
//     console.log(err)
// })

//Question 6

let btn = document.querySelector("#btn")
let table = document.querySelector('tbody')

btn.addEventListener('click', function(e) {
    console.log("uyguj")
    fetch('https://restcountries.com/v2/all').then((countries)=>{
      // console.log(resdata)
      return countries.json();
  }).then((resdatasjson)=>{
    // console.log(resdatasjson)
   let c=resdatasjson.sort((a,b)=>{
    return b.area-a.area;
   })
   let arr2=[]
   for(let i=0;i<10;i++){
     let item=`<tr>
     <td>${c[i].name}</td>
 
   </tr>`
   arr2.push(item)
   }
   console.log(arr2)
  table.innerHTML=arr2.join('')
  // console.log(arr)
  // console.log(arr1)
  
    }).catch((err)=>{
      console.log(err)
  })
  
    
})



// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("demo1").innerHTML = points;

// points.sort(function(a, b){return b - a});
// document.getElementById("demo2").innerHTML = points;