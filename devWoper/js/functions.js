function validateName(name) {
    const re = /[a-z]/g
    return re.test(String(name).toLowerCase());
}


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



// @param formf - form first, sendBtnForm - Send button in Form Contact Us, form - second form after send

function clickSend(formf, sendBtnForm, form) {
    
    sendBtnForm.style.marginBottom = 5 + "em";
    let fs = formf.style;
    fs.width = fs.height = fs.top = fs.left = 0;
    fs.position = "absolute";
    
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


function overlayOpen(overlay, formOverlay) {
        
    overlay.style.width =  100 + "%";
    overlay.style.opacity = 0.8;
    overlay.style.position = "fixed";
    formOverlay.style.width =  100 + "%";
    formOverlay.style.opacity = 1;
    formOverlay.style.position = "fixed";
    
}

function overlayClose(overlay, formOverlay) {
    overlay.style.width = 0 + "px";
    overlay.style.opacity = 0;
    formOverlay.style.width =  0 + "%";
    formOverlay.style.opacity = 0;

}


function checkValidateForm(name, email, txtarea, formf, sendBtnForm, form) {
    if (validateName(name.value) === true) {
        name.className = "input-name-overlay";
        if(validateEmail(email.value) === true){
            if (txtarea.value === "") {
                txtarea.className="txtarea-error"
                email.className = "input-email-overlay";
            } else {
                clickSend(formf, sendBtnForm, form);

                email.value = ""; 
                name.value = ""; 
                txtarea.value = "";
                email.className = "input-email-overlay";
                txtarea.className="txtarea-overlay";
            }    
        } else {
            email.className = "input-email-error";
        }
    } else {
        name.className = "input-name-error";
    }
}

function delimiter(countMore, words) {
    let h1 = document.getElementById("print-h1");
    setInterval(() => {
        if (countMore === 0){
          h1.textContent = words + "|";
          countMore = 1
        } else if (countMore = 1) {
          h1.textContent = words;
          countMore = 0;
        }
        
      }, 300)
}

export {
    overlayOpen,
    overlayClose,
    clickSend,
    checkValidateForm,
    delimiter
};
