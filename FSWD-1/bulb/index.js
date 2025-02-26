const bulb = document.getElementById("bulb");
const button = document.getElementById("toggleButton");

button.addEventListener("click", () => {
    if (bulb.src.includes("bulb1.png")) {
        bulb.src = "bulb2.jpg";
        button.textContent = "Turn Off";
    } 
    else {
        bulb.src = "bulb1.png";
        button.textContent = "Turn On";
    }
});