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

const config = {
    word: "We're an independent development agency.",
    count : 0,
    reverseCount : 1,
    words : "",
    course : "up",
    countMore: 0,
  }
  
  let interval = setInterval(function(e) {
    if (config.word[config.count] === undefined) {
        let h1 = document.getElementById("print-h1");
      
      if (typeof h1.textContent !== "undefined") {
        h1.textContent = config.words + "|";
      } else {
        h1.innerHTML = config.words;
      }
      config.word = "";
      config.count = 0;
      clearInterval(interval);
      func.delimiter(config.countMore,config.words);

    } else { 
      config.words += config.word[config.count];

      let h1 = document.getElementById("print-h1");
      
      if (typeof h1.textContent !== "undefined") {
        h1.textContent = config.words + "|";
      } else {
        h1.innerHTML = config.words;
      }
      config.count+=1;
    }
      
  }, 75)

