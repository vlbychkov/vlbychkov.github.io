import * as func from "/Flower/js/func.js";

window.onload = () => {
    let btnOpenOverlay = document.querySelectorAll(".btn-div");
    let overlay = document.getElementById("overlayGround");

    for (let i = 0; i < btnOpenOverlay.length; i++) {
        btnOpenOverlay[i].addEventListener("click", () => {
            func.openOverlay(overlay, 0)
        }, true)
    }
}
