// Quesion 1
// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function(e){
//     // console.log("clicked")
//     let data=new XMLHttpRequest();
//     console.log(data);
//     data.onload=function(){
//         // console.log("response")
//         console.log(data.response)
//     }
//     data.open('GET',"https://dummyjson.com/products");
//     data.send();
// })

// Question2
// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function(e){
//     // console.log("clicked")
//     let data=new XMLHttpRequest();
//     // console.log(data);
//     data.onload=function(){
//         // data.responseType="json";
//         let Data=JSON.parse(data.response);
//         //  console.log(Data.products[0].title);
//         let newData=Data.products.map((e)=>{
//             let obj={name:e.title}
//             return obj;
//         })
//         console.log(newData)
//     }
//     data.open('GET',"https://dummyjson.com/products");
//     data.send();
// })

// Question3
let btn = document.querySelector('#btn')

btn.addEventListener('click', function(e){
    // console.log("clicked")
    let data=new XMLHttpRequest();
    // console.log(data);
    data.onload=function(){
        let Data=JSON.parse(data.response);
        //  console.log(Data.products[0].title);
        let newData=Data.products.map((e)=>{
            let obj={name:e.title}
            return obj;
        })
        console.log(newData)
    }
    data.open('GET',"https://dummyjson.com/products");
    data.send();
})