document.querySelector("#blue").addEventListener("click", jeopardyBlue);
document.querySelector("#pink").addEventListener("click", jeopardyPink);
document.querySelector("#black").addEventListener("click", jeopardyBlack);
document.querySelector("#red").addEventListener("click", jeopardyRed);
document.querySelector("#green").addEventListener("click", jeopardyGreen);

function jeopardyBlue() {
    document.querySelector("body").style.backgroundColor = "rgb(15, 76, 129)";
    document.querySelector("body").style.color = "white";
}

function jeopardyPink() {
    document.querySelector("body").style.backgroundColor = "rgb(255, 192, 203)";
    document.querySelector("body").style.color = "white";
}

function jeopardyBlack() {
    document.querySelector("body").style.backgroundColor = "rgb(2, 2, 2)";
    document.querySelector("body").style.color = "white";
}

function jeopardyRed() {
    document.querySelector("body").style.backgroundColor = "rgb(219, 20, 20)";
    document.querySelector("body").style.color = "white";
}

function jeopardyGreen() {
    document.querySelector("body").style.backgroundColor = "rgb(29, 128, 9)";
    document.querySelector("body").style.color = "white";
}

0;