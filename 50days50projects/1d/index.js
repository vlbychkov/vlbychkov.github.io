let allDiv = document.querySelectorAll('#div')
console.log(allDiv)
for (let div of allDiv) {
  div.addEventListener('click', () => clickChangeImg(allDiv, div))
}

function clickChangeImg(allDiv, div) {
  let pId = document.getElementsByClassName(div.childNodes[1].className)
  pId[0].style.opacity = '1'
  console.log(pId[0].style.opacity)
  //   console.log(pId[0])
  div.style.width = '70%'
  for (let i of allDiv) {
    if (i.className === div.className) {
      console.log(123)
    } else {
      let pIdAll = document.getElementsByClassName(i.childNodes[1].className)

      i.style.width = '7%'
      pIdAll[0].style.opacity = 0
    }
  }
}
