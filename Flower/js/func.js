function openOverlay(ground, form) {
    window.scrollTo(0, 1100)
    document.body.classList.add('disable-scroll');

    let pFirst = document.createElement("p");
    pFirst.className="div-p--p-card";

    let pSecond = document.createElement("text-overlay-info");
    let formSecond = document.getElementById("div-text-btn-close");

    let btnClose = document.createElement("button");
    btnClose.className="div-overlay-close";
    btnClose.innerText="CLOSE";
    btnClose.id="div-overlay-close";


    formSecond.appendChild(pFirst);
    formSecond.appendChild(pSecond);
    formSecond.appendChild(btnClose);

    btnClose.addEventListener("click", () => {
        closeOverlay(ground, form, pFirst,pSecond , btnClose, formSecond);

    })

    ground.style.width = form.style.width = 100 + "%";
    ground.style.opacity = form.style.opacity = 1;
    ground.style.zIndex = 2;
 
    form.style.position = "fixed";  

    // setTimeout(() => {
    //     closeOverlay(ground, form)
    // }, 5000)
}

function closeOverlay(ground, form, pFirst, pSecond, btnClose, formSecond) {
    document.body.classList.remove('disable-scroll');
    formSecond.remove(pFirst);
    formSecond.remove(pSecond);
    formSecond.remove(btnClose);
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