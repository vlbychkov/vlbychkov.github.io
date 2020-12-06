let allAppP = document.querySelectorAll('.App__p')
let btnNext = document.getElementById('btn_next')
let btnBack = document.getElementById('btn_back')
let count = 0

document.getElementById('check1').style.setProperty('--cb', '#3498DB')

btnNext.addEventListener('click', () => changeStep(1))
btnBack.addEventListener('click', () => changeStep(0))

function changeStep(idStep) {
  if (idStep === 0) {
    if (count > 0) {
      let line1 = document.getElementById(count)
      count--
      line1.style.setProperty('--test', '0%')
      document
        .getElementById('check' + (count + 2))
        .style.setProperty('--cb', '#E0E0E0')
    }
  } else if (idStep === 1) {
    if (count < allAppP.length - 1) {
      count++
      let line1 = document.getElementById(count)
      line1.style.setProperty('--test', '100%')
      document
        .getElementById('check' + count)
        .style.setProperty('--cb', '#3498DB')
      document
        .getElementById('check' + (count + 1))
        .style.setProperty('--cb', '#3498DB')
    }
  }
}
