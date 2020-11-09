import * as func from '/devWoper/js/functions.js'

window.onload = () => {

    let formf=document.getElementById('form-first');
    let sendBtnForm = document.getElementById("btn-overlay");
    let form=document.getElementById('form');
    let overlay = document.getElementById("overlayContactUs");
    let formOverlay = document.getElementById("div-form-overlay");
    let closeOverlay = document.getElementById("closeOverlay");
    let btnTouch = document.getElementById("cta");
    let btnTouch2 = document.getElementById("cta2");
    let email = document.getElementById("input-email-overlay");
    let name = document.getElementById("input-name-overlay");
    let txtarea = document.getElementById("txtarea-overlay");


    sendBtnForm.addEventListener("click", function(e) {    
        func.checkValidateForm(name, email, txtarea, formf, sendBtnForm, form)
    })

    btnTouch.addEventListener("touchstart", function(e) {
        func.overlayOpen(overlay, formOverlay);
    }) 
    btnTouch.addEventListener("click", function(e) {
        func.overlayOpen(overlay, formOverlay);
    })
    btnTouch2.addEventListener("click", function(e) {
        func.overlayOpen(overlay, formOverlay);
    })
    btnTouch2.addEventListener("touchstart", function(e) {
        func.overlayOpen(overlay, formOverlay);
    })

    
    closeOverlay.addEventListener("touchstart", function(e) {
        func.overlayClose(overlay, formOverlay);
    })
    closeOverlay.addEventListener("click", function(e) {
        func.overlayClose(overlay, formOverlay);
    })
    
}
