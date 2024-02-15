let bigcontainer = document.getElementById("bigcontainer");
let container =document.getElementById("container");
let nigth =document.getElementById("nigth");
let flag_us = document.getElementById("flag_us");
let flag_es = document.getElementById("flag_es");


bigcontainer.addEventListener("click",function(){
    if(container.classList.contains("container-1")){
    container.classList.add("container-2");
    container.classList.remove("container-1");
    bigcontainer.classList.add("main-box-on");
    bigcontainer.classList.remove("main-box-off");
    nigth.classList.add("nigth");
    nigth.classList.remove("day")
    
    }
    else{
        container.classList.remove("container-2")
        container.classList.add("container-1")
        bigcontainer.classList.remove("main-box-on");
        bigcontainer.classList.add("main-box-off");
        nigth.classList.remove("nigth");
        nigth.classList.add("day");
     
    }
    })
   
    flag_us.addEventListener("click",function(){
        window.location.href = "index_en.html";
    })
    flag_es.addEventListener("click",function(){
        window.location.href = "index.html";
    })

