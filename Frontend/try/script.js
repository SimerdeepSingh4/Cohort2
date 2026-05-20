document.addEventListener("click",(e)=>{
    const x = e.clientX;
    const y = e.clientY;
    console.log(x,y);
    const circle = document.createElement("div");
    const totalCircle = document.querySelectorAll("div");
    console.log(totalCircle.length);
    
    
    circle.classList.add("circle");
    circle.style.left = x + "px";
    console.log("circle left",circle.style.left );
    
    circle.style.top = y + "px";
    document.body.appendChild(circle);
})

let obj ={
    a:{
        b:undefined
    }
}

var abc = 25
if(function f(){}){
    abc= abc+ typeof f;
}

console.log(abc)