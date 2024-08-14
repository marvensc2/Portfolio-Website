const showcaseDiv = document.getElementById("showcase");

function riseShowcase() {
  showcaseDiv.style.transform = "translateY(-25px)";
  showcaseDiv.style.opacity = 0.2;// Adjust the value for the height you want
  setTimeout(() => {
    showcaseDiv.style.transform = "translateY(0)"; showcaseDiv.style.opacity = "1"; // Reset the transform after a delay
  }, 500); // Adjust the delay as needed
}

// Call the riseShowcase function when the page loads
window.onload = riseShowcase;

const aboutDiv = document.getElementById("about-us");
const missionDiv = document.getElementById("mission");
const servicesDiv = document.getElementById("services");

function keepDiv(element){
  element.style.opacity = 1;
}