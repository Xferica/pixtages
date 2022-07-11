// carga inicial para funcionamiento de interfaz de usuario

// animación de menú desplegable leftmenu
var posTouchStartX = 0;

var el = document.getElementById("leftmenu");
el.addEventListener("touchstart", handleStart, false);
el.addEventListener("touchmove", handleMove, false);

function handleStart(ev) {
    touches = ev.changedTouches; 
    posTouchStartX = touches[0].clientX;
}
function handleMove(ev) {
    ev.preventDefault();
    touches = ev.changedTouches;
    if (touches[0].clientX > posTouchStartX + 30) {
        document.getElementById("leftmenu").classList.remove("leftMenuSlideLeft");
        document.getElementById("leftmenu").classList.add("leftMenuSlideRight");
    }else{
        if (touches[0].clientX < posTouchStartX - 30) {
            document.getElementById("leftmenu").classList.remove("leftMenuSlideRight");
            document.getElementById("leftmenu").classList.add("leftMenuSlideLeft");
        }
    }
}