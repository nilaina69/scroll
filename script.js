
/*const start = performance.now();*/



const blueLink = document.getElementById("blueLink");
const redLink = document.getElementById("redLink");
const greenLink = document.getElementById("greenLink");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const green = document.getElementById("green");

// Navigation

blueLink.addEventListener("click", () => {
    blue.scrollIntoView({ behavior: "smooth", block: "start" });
});

redLink.addEventListener("click", () => {
    red.scrollIntoView({ behavior: "smooth", block: "start" });
});

greenLink.addEventListener("click", () => {
    green.scrollIntoView({ behavior: "smooth", block: "start" });
});




/*const end = performance.now(); // Point final*/