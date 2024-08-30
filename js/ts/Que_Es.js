const buttHamb = document.getElementById("hamburger");
const navHam = document.getElementById('hamburger_items')
const body = document.getElementsByTagName('body')
const cerrar = document.getElementById('cerrar')

buttHamb.addEventListener("click", () => {
    navHam.style.visibility = "visible"
    navHam.style.transition = "all 1s"
    body[0].style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    navHam.style.marginLeft = "40vw"
    cerrar.style.visibility = "visible"
    cerrar.style.transition = "all 1s"
    cerrar.style.left = "90vw"
    
})

cerrar.addEventListener('click',()=>{
    console.log('hola')
    navHam.style.visibility = "hidden"
    navHam.style.transition = "all 1s"
    body[0].style.transition = "all 2s"
    body[0].style.backgroundColor = "initial"
    cerrar.style.visibility = "hidden"
       cerrar.style.left = "100vw"
    navHam.style.marginLeft = "100vw"
})