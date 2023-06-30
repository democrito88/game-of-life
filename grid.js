const linhas = 65;
const colunas = 120;

function iniciaGrid(){
    let grid = new Array(linhas);
    for(let i = 0; i < linhas; i++){
        grid[i] = new Array(colunas);
        grid[i].fill(0);
    }

    return grid;
}

function popula(grid){
    for(let i = 1; i < (linhas - 1); i++){
        for(let j = 1; j < (colunas - 1); j++){
            grid[i][j] = Math.floor(Math.random()*2);
        }
    }

    return grid;
}

function desenha(grid){
    $("body").html("");

    let desenhoGrid = "";
    for(let i = 0; i < linhas; i++){
        desenhoGrid += "<div class='linha'>";
        for(let j = 0; j < colunas; j++){
            if(grid[i][j] == 1){
                desenhoGrid += "<canvas class='quadrado branco'></canvas>";
            }else{
                desenhoGrid += "<canvas class='quadrado'></canvas>";
            }
        }
        desenhoGrid += "</div><br>";
    }

    $("body").append(desenhoGrid);
}

function vizinhos(grid, x, y){
    nVizinhos = 0;
    for(let i = (x-1); i <= (x+1); i++){
        for(let j = (y-1); j <= (y+1); j++){
            if(i == x && j == y){
                continue;
            }
            nVizinhos += grid[i][j];
        }
    }

    return nVizinhos;
}

function computa(grid){
    let novoGrid = iniciaGrid();

    console.log("foi");
    for(let i = 1; i < (linhas - 1); i++){
        for(let j = 1; j < (colunas - 1); j++){
            let nVizinhos = vizinhos(grid, i, j);
            if(grid[i][j] === 1 && nVizinhos < 2){
                novoGrid[i][j] = 0;
            }else if(grid[i][j] === 1 && (nVizinhos === 2 || nVizinhos === 3)){
                novoGrid[i][j] = 1;
            }else if(grid[i][j] === 1 && nVizinhos > 3){
                novoGrid[i][j] = 0;
            }else if(grid[i][j] == 0 && nVizinhos === 3){
                novoGrid[i][j] = 1;
            }else{
                novoGrid[i][j] = 0;
            }
        }
    }

    return novoGrid;
}
