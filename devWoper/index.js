
window.onload = () => {
    let btnTouch = document.getElementById("cta");
    let btnTouch2 = document.getElementById("cta2");
    let sendBtnForm = document.getElementById("btn-overlay");
    
    

    sendBtnForm.addEventListener("touchstart", function(e) {
        let form=document.getElementById('form');
        
        // form.innerHTML='';
        setTimeout(function(e) {
            form.innerHTML = "";
            form.className = "form-send"
        }, 2000)
    })
    sendBtnForm.addEventListener("click", function(e) {
        let form=document.getElementById('form');
        
        form.innerHTML = "";
        form.className = "form-send";
        let p = document.createElement("p");
        p.textContent = "Sent. Thenks.";
        form.appendChild(p);
        setTimeout(function(e) {
            overlayClose();
            form.className = "form-overlay";
            form.innerHTML = `<input placeholder="Enter your name" 
            type="text" class="input-name-overlay" 
            id="input-name-overlay" >
            <input type="email" class="input-email-overlay"
            id="input-email-overlay"
            placeholder="Enter your email">
            <textarea placeholder="Enter your questions"
            class="txtarea-overlay" id="txtarea-overlay"></textarea>
            <button type="button" id="btn-overlay" class="btn-overlay" value="Send">Send</button>
            `;
        }, 4000);
        

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



function test() {
    let form=document.getElementById('form');
        
    form.innerHTML = "";
    form.className = "form-send";
    let p = document.createElement("p");
    p.textContent = "Sent. Thenks.";
    form.appendChild(p);
    setTimeout(function(e) {
        form.className = "form-overlay";
        form.innerHTML = `<input placeholder="Enter your name" 
        type="text" class="input-name-overlay" 
        id="input-name-overlay" >
        <input type="email" class="input-email-overlay"
        id="input-email-overlay"
        placeholder="Enter your email">
        <textarea placeholder="Enter your questions"
        class="txtarea-overlay" id="txtarea-overlay"></textarea>
        <button type="button" id="btn-overlay" class="btn-overlay" value="Send">Send</button>
        `;
    }, 4000);
    overlayClose();
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

