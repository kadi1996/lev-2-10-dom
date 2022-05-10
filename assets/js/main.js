// console.log("text");

let headline = document.getElementById("headline");

function smallButton() {
    // console.log("smallButton()");
    headline.classList.remove("style2")
    headline.classList.remove("style3")
    headline.classList.add("style1")
}

function middleButton() {
    // console.log("smallButton()");
    headline.classList.remove("style1");
    headline.classList.remove("style3");
    headline.classList.add("style2");
}

function bigButton() {
    // console.log("bigButton");
    headline.classList.add("style3");
    headline.classList.remove("style1");
    headline.classList.remove("style2");
}