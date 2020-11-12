import * as func from "/Flower/js/func.js";

window.onload = () => {

    let btnOpenOverlay = document.querySelectorAll(".btn-div");
    let overlay = document.getElementById("overlayGround");
    let infoOverlay = document.getElementById("infoOverlay");

    

    for (let i = 0; i < btnOpenOverlay.length; i++) {
        btnOpenOverlay[i].addEventListener("click", () => {

            func.openOverlay(overlay, infoOverlay);
            
        }, true)

        btnOpenOverlay[i].addEventListener("touchstart", () => {

            func.openOverlay(overlay, infoOverlay);
            
        }, true)
    }

    

}
