p1 = document.querySelector("p")
p1.style.backgroundColor = "darkgreen";


p2 = document.querySelector("#b");
p2.style.backgroundColor = "#e7e7e7";
p2.style.color = "orange";

p3 = document.querySelectorAll("p");
console.log(p3);
p3[2].style.backgroundColor = "grey";
// p3[3].style.backgroundColor = "green";

var p4 = document.querySelector("#d");
// p4.textContent = "fourth Paragraph";

p3[3].style.backgroundColor = "lightgreen";
p3[3].textContent = "fourth Para";

// method 1 using setAttribute function
// setting same class to all paragraphs; 
for(var i=0; i<4; i++){
    p5 = document.querySelectorAll("p")[i];
    p5.setAttribute("class","cls")
   
}
  //setting id's to individually to all paragraphs;

var p5 = document.querySelectorAll("p");
p5[0].setAttribute("id","id1");
p5[1].setAttribute("id","id2");
p5[2].setAttribute("id","id3");
p5[3].setAttribute("id","id4");


// method 2 usiing id[] to set id's

var p6 = document.querySelectorAll("p");
p6[0].id = "idd1";
p6[1].id = "idd2";
p6[2].id = "idd3";
p6[3].id = "idd4";

// method 3 using class[] to set class's

var p7 = document.querySelectorAll("p");
p7[0].className = "cls1";
p7[1].className = "cls2";
p7[2].className = "cls3";
p7[3].className = "cls4";

// method 4 using classList[] to set class's

var p8 = document.querySelectorAll("p");
p8[0].classList.add("clss1");
p8[1].classList.add("clss2");
p8[2].classList.add("clss3");
p8[3].classList.add("clss4");


var p9 = document.querySelectorAll("p");

p9[0].style.fontFamily="cursive";
p9[1].style.fontFamily=" fantasy";
p9[1].style.border="2px solid red";

p9[2].style.fontFamily="cursive";

p9[3].style.fontFamily=" fantasy";
p9[3].style.color="#F875AA";



var i = 0;
var color = ["red", "green", "blue", "yellow", "#7882A4", "purple"]
setInterval(()=>document.querySelector("h1").style.color = color[i<color.length?i++:i=0],100)