function Right1(){
    document.getElementById("im").classList.add("inv");
    document.getElementById("im1").classList.remove("inv");
    document.getElementById("tex").classList.add("inv");
    document.getElementById("tex1").classList.remove("inv");
}

document.querySelector(".Right-arrow").addEventListener("click", Right1)
document.querySelector(".sv0").addEventListener("click", Right1)

function Left1(){
    document.getElementById("im").classList.remove("inv");
    document.getElementById("im1").classList.add("inv");
    document.getElementById("tex").classList.remove("inv");
    document.getElementById("tex1").classList.add("inv");
}

document.querySelector(".left-arrow").addEventListener("click", Left1)
document.querySelector(".sv1").addEventListener("click", Left1)

document.querySelector(".Imagee").addEventListener("touchstart", touchStart);

function touchStart(){
    document.querySelector(".Imagee").addEventListener("touchmove", navigateTo());
}

function navigateTo(){
    if(document.getElementById("im").classList.contains("inv")){
        Left1();
        return;
    }

    if(document.getElementById("im1").classList.contains("inv")){
        Right1();
        return;
    }
}
