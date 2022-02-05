const btn = document.getElementById("btn");
let body = document.getElementsByTagName("body")[0];
let disp = document.getElementsByTagName("h2")[0];

btn.onclick=()=>{
    disp.innerText="#"+(((Math.random()*0xfffff*1048575).toString(16).slice(0,6)).toUpperCase());
    body.style.background=disp.innerText;
    if(disp.innerText==="#000000"){
        body.style.color="white";
    }
}