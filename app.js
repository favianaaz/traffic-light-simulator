// Get Variable
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const switchBtn = document.getElementById("switchBtn");

// Initial Value
redLight.style.background = "red";
let current = "red";

//Reset Lights
function resetLight() {
    redLight.style.background = "black";
    yellowLight.style.background = "black";
    greenLight.style.background = "black";
}

//Switch Lights
function switchLight() {
    switchBtn.disabled = true;
    resetLight();
    yellowLight.style.background = "yellow";

    console.log(current);
    setTimeout (() => {
        resetLight();
        if (current == "red") {
            current = "green";
            greenLight.style.background = "green";
        } else {
            current = "red";
            redLight.style.background = "red";
        }
    }, 1000);

    switchBtn.disabled = false;
}

switchBtn.addEventListener("click", switchLight);