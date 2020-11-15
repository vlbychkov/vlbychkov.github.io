function openOverlay(ground, form) {
    window.scrollTo(0, 1100)
    document.body.classList.add('disable-scroll');

    let test = document.getElementById("div-text-btn-close")

    test.style.opacity = 1;
    test.style.position = "";

    let btnClose = document.getElementById("btn-close");

    btnClose.addEventListener("click", () => {
        closeOverlay(ground, form);
    })

    ground.style.width = form.style.width = 100 + "%";
    ground.style.opacity = form.style.opacity = 1;
    ground.style.zIndex = 2;
 
    form.style.position = "fixed";  

}

function closeOverlay(ground, form) {
    ground.style.width = 0 + "%";
    ground.style.opacity = 0
    ground.style.zIndex = 0
    form.style.width = 0 + "%";
    form.style.opacity = 0;   

    form.style.position = "absolute";
}



function getDescriptionArticle() {
    

}




export {
    openOverlay,
    closeOverlay,
}