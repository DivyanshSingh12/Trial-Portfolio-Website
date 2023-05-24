function Right1(){
    document.getElementById("im").classList.add("inv");
    document.getElementById("im1").classList.remove("inv");
    document.getElementById("tex").classList.add("inv");
    document.getElementById("tex1").classList.remove("inv");
}


document.querySelector(".Right-arrow").addEventListener("click", Right1)

function Left1(){
    document.getElementById("im").classList.remove("inv");
    document.getElementById("im1").classList.add("inv");
    document.getElementById("tex").classList.remove("inv");
    document.getElementById("tex1").classList.add("inv");
}

document.querySelector(".left-arrow").addEventListener("click", Left1)