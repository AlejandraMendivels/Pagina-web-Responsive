const buttHamb = document.getElementById("hamburger");
const navHam = document.getElementById('hamburger_items')
const body = document.getElementsByTagName('body')
const cerrar = document.getElementById('cerrar')
const imgCerrar = document.getElementById('cerrarImg')

buttHamb.addEventListener("click", () => {

    navHam.style.visibility = "visible"
    body[0].style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    navHam.style.width = "60vw";
    navHam.style.marginLeft = "40vw"
    cerrar.style.visibility = "visible"
    imgCerrar.style.width = "36px"
    
    navHam.style.animation = ""
    navHam.style.animationName = ""
})

cerrar.addEventListener('click', () => {
    navHam.style.visibility = "hidden"
    body[0].style.transition = "all 1s"
    body[0].style.backgroundColor = "initial"
    imgCerrar.style.width = "0px"
    cerrar.style.visibility = "hidden"
    navHam.style.width = "20vw";
    navHam.style.marginLeft = "80vw"
    navHam.style.animation = "fadeOut 2s"
    navHam.style.animationName = "fadeOut"

})