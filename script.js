const body = document.querySelector("body");

let grid = popula(iniciaGrid());
//console.table(grid);

function loop(){
    setTimeout(function () {
        grid = computa(grid);
        desenha(grid);
        loop();
      }, 100);
}

loop();