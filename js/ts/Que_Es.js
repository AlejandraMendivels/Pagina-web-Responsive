const buttHamb = document.getElementById("hamburger");
const navHam = document.getElementById('hamburger_items')
const body = document.getElementsByTagName('body')
const cerrar = document.getElementById('cerrar')
const imgCerrar = document.getElementById('cerrarImg')

buttHamb.addEventListener("click", () => {

  navHam.style.visibility = "visible"
  body[0].style.backgroundColor = "rgba(0, 0, 0, 0.5)"
  if (width <= 650) {
    navHam.style.width = "80vw";
    navHam.style.marginLeft = "20vw"
  } else {
    navHam.style.width = "50vw";
    navHam.style.marginLeft = "50vw"
    console.log('hola')

  }
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

//dropdown

document.querySelectorAll('.h2-drop').forEach(button => {
  button.addEventListener('click', () => {
    const menuId = button.getAttribute('data-target');
    const menu = document.getElementById(menuId);
    const arrow = button.querySelector('.arrow-1');
    arrow.classList.toggle('arrow-1-open')
    menu.classList.toggle('open');
  });
});

//scroll ID
// setTimeout(()=>{
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    id = window.location.hash.substring(1);

    if (id) {
      document.getElementById(id).scrollIntoView({
        block: 'center',
        inline: 'center'
      })
    }
  }, 200)

})



