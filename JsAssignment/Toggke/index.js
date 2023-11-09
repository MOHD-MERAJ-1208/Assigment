
let container=document.querySelector(".container")
let button=document.querySelector(".btn");
let backTheme=true;
button.addEventListener("click",function(e){
 if(backTheme){
    container.classList.remove("backgorundtheme");
    backTheme=false;
 }else{
    container.classList.add("backgorundtheme");
    backTheme=true;

 }

})