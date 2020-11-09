
window.onload = () => {
    // loadForm()
    let btnTouch = document.getElementById("cta");
    let btnTouch2 = document.getElementById("cta2");
    let sendBtnForm = document.getElementById("btn-overlay");

    sendBtnForm.addEventListener("click", function(e) {
        let inpEmail = document.getElementById("input-email-overlay");

        if(validateEmail(inpEmail.value) === true){
            clickSend();
            inpEmail.value = ""; 
        } else {
            inpEmail.className = "input-email-error";
        }
        
    })

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

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function clickSend() {
    let formf=document.getElementById('form-first');
    let sendBtnForm = document.getElementById("btn-overlay");
    sendBtnForm.style.marginBottom = 5 + "em";
    fs = formf.style;
    fs.width = fs.height = fs.top = fs.left = 0;
    fs.position = "absolute";
    let form=document.getElementById('form');
    form.style.padding = 15 + "%";
    form.style.fontSize = 64 + "px";
    
    setTimeout(function(e) {
        form.style.padding = "";
        form.style.fontSize = "";
        sendBtnForm.style.marginBottom = 2 + "em";
        fs.width = fs.height = fs.top = fs.left = "";
        fs.position = "";
        
    }, 3000)
    
}


function overlayOpen(check) {
    
    if (check == "cu") {
        let overlay = document.getElementById("overlayContactUs");
        let formOverlay = document.getElementById("div-form-overlay");
        overlay.style.width =  100 + "%";
        overlay.style.opacity = 0.8;
        overlay.style.position = "fixed";
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

