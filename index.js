function pop(){
    document.querySelector(".tw").style.visibility = "visible";
}

function unpop(){
    document.querySelector(".tw").style.visibility = "hidden";
}

if(".twitter:hover"){
    document.querySelector(".twitter").addEventListener("mouseover", pop);
    document.querySelector(".twitter").addEventListener("mouseout", unpop);
}

function pop1(){
    document.querySelector(".lin").style.visibility = "visible";
}

function unpop1(){
    document.querySelector(".lin").style.visibility = "hidden";
}

if(".linkedin:hover"){
    document.querySelector(".linkedin").addEventListener("mouseover", pop1);
    document.querySelector(".linkedin").addEventListener("mouseout", unpop1);
}

var nav = false;

function pop2(){
    document.querySelector(".centered").style.visibility = "visible";
    document.querySelector(".menu").style.color = "skyblue";
    nav = true;
}

function unpop2(){
    document.querySelector(".centered").style.visibility = "hidden";
    document.querySelector(".menu").style.color = "white";
    nav = false;
}

function toggleNav(){
    if(nav){
        unpop2();
    }
    else{
        pop2();
    }
}

document.querySelector(".menu").addEventListener("click", toggleNav);






