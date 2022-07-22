function toggle() {
    buttonContent = document.getElementsByClassName("button")[0];
    a = buttonContent.textContent;
    if (a === "More") {
        buttonContent.textContent = "Less";
        document.getElementById("extra").style.display = "block";
    } else if (а = "Less") {
        buttonContent.textContent = "More";
        document.getElementById("extra").style.display = "none";
    }
}