
window.onload = () => {
    let btnTouch = document.getElementById("cta");
    let btnTouch2 = document.getElementById("cta2");

    
    btnTouch.addEventListener("touchstart", function(e) {
        overlayOpen('cu');
    }) 
    btnTouch.addEventListener("click", function(e) {
        overlayOpen('cu');
    })
    btnTouch2.addEventListener("click", function(e) {
        overlayOpen('cu');
    })
    btnTouch2.addEventListener("touchstart", function(e) {
        overlayOpen('cu');
    })
    let closeOverlay = document.getElementById("closeOverlay");
    closeOverlay.addEventListener("touchstart", function(e) {
        overlayClose();
    })
    closeOverlay.addEventListener("click", function(e) {
        overlayClose();
    })
    
}




function overlayOpen(check) {
    
    if (check == "cu") {
        console.log("Open Ov")
        let overlay = document.getElementById("overlayContactUs");
        let formOverlay = document.getElementById("div-form-overlay");
        overlay.style.width =  100 + "%";
        overlay.style.opacity = 0.8;
        overlay.style.position = "fixed";
        formOverlay.style.width =  100 + "%";
        formOverlay.style.opacity = 1;
        formOverlay.style.position = "fixed";
    } else if (check == "menu") {
        let formOverlay = document.getElementById("div-form-overlay");
        let overlay = document.getElementById("overlayContactUs");


        overlay.style.width = 0 + "px";
        overlay.style.opacity = 0;

        
        formOverlay.style.width =  100 + "%";
        formOverlay.style.opacity = 1;
        formOverlay.style.position = "fixed";
    }
    
}

function overlayClose() {
    let overlay = document.getElementById("overlayContactUs");
    overlay.style.width = 0 + "px";
    overlay.style.opacity = 0;
    let formOverlay = document.getElementById("div-form-overlay");
    formOverlay.style.width =  0 + "%";
    formOverlay.style.opacity = 0;

}

