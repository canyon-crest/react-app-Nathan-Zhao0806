const button = document.getElementById("button");
if (button) {
    button.addEventListener("click", () => {
        const para =document.getElementById(para);
        if (para) {
            para.toggleAttribute("hidden");
        }
    })
}