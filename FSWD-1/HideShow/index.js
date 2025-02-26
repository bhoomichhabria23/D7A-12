const content = document.getElementById("content");
const button = document.getElementById("toggleButton");

button.addEventListener("click", () => {
    if (content.style.display === "none" || content.classList.contains("hidden")) {
        content.style.display = "block";
        content.classList.remove("hidden");
        button.textContent = "Hide Paragraph";
    } else {
        content.style.display = "none";
        button.textContent = "Show Paragraph";
    }
});