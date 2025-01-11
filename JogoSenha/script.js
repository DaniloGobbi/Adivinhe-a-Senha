let sequencia = gerarSequencia();

document.getElementById("botaojn").style.display = "none";

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.getElementById("botao1").addEventListener("click", mudarcor1);
document.getElementById("botao2").addEventListener("click", mudarcor2);
document.getElementById("botao3").addEventListener("click", mudarcor3);
document.getElementById("botao4").addEventListener("click", mudarcor4);
document.getElementById("botao5").addEventListener("click", mudarcor5);
document.getElementById("botao6").addEventListener("click", mudarcor6);
document.getElementById("botao7").addEventListener("click", mudarcor7);

function mudarcor1() {
    document.getElementById("botao1").style.backgroundColor = "#38b6ff";
    document.getElementById("botao1").setAttribute("disabled", "");
    document.getElementById("botao1").style.cursor = "default";
    let dicasaleat = teste(1, 2, 3, 4);
    for (let i = 0; i <= 3; i++){
        document.getElementById(`dica${i}`).style.backgroundColor = dicasaleat[i];
    }
}
function mudarcor2() {
    document.getElementById("botao2").style.backgroundColor = "#38b6ff";
    document.getElementById("botao2").setAttribute("disabled", "");
    document.getElementById("botao2").style.cursor = "default";
    let dicasaleat = teste(5, 6, 7, 8);
    for (let i = 4; i <= 7; i++){
        document.getElementById(`dica${i}`).style.backgroundColor = dicasaleat[i-4];
    }
}
function mudarcor3() {
    document.getElementById("botao3").style.backgroundColor = "#38b6ff";
    document.getElementById("botao3").setAttribute("disabled", "");
    document.getElementById("botao3").style.cursor = "default";
    let dicasaleat = teste(9, 10, 11, 12);
    for (let i = 8; i <= 11; i++){
        document.getElementById(`dica${i}`).style.backgroundColor = dicasaleat[i-8];
    }
}
function mudarcor4() {
    document.getElementById("botao4").style.backgroundColor = "#38b6ff";
    document.getElementById("botao4").setAttribute("disabled", "");
    document.getElementById("botao4").style.cursor = "default";
    let dicasaleat = teste(13, 14, 15, 16);
    for (let i = 12; i <= 15; i++){
        document.getElementById(`dica${i}`).style.backgroundColor = dicasaleat[i-12];
    }
}
function mudarcor5() {
    document.getElementById("botao5").style.backgroundColor = "#38b6ff";
    document.getElementById("botao5").setAttribute("disabled", "");
    document.getElementById("botao5").style.cursor = "default";
    let dicasaleat = teste(17, 18, 19, 20);
    for (let i = 16; i <= 19; i++){
        document.getElementById(`dica${i}`).style.backgroundColor = dicasaleat[i-16];
    }
}
function mudarcor6() {
    document.getElementById("botao6").style.backgroundColor = "#38b6ff";
    document.getElementById("botao6").setAttribute("disabled", "");
    document.getElementById("botao6").style.cursor = "default";
    let dicasaleat = teste(21, 22, 23, 24);
    for (let i = 20; i <= 23; i++){
        document.getElementById(`dica${i}`).style.backgroundColor = dicasaleat[i-20];
    }
}
function mudarcor7() {
    document.getElementById("botao7").style.backgroundColor = "#38b6ff";
    document.getElementById("botao7").setAttribute("disabled", "");
    document.getElementById("botao7").style.cursor = "default";
    let dicasaleat = teste(25, 26, 27, 28);
    for (let i = 24; i <= 27; i++){
        document.getElementById(`dica${i}`).style.backgroundColor = dicasaleat[i-24];
    }
    
    document.getElementById("botaojn").style.display = "flex";
}


function gerarSequencia() {
    let max = 10;

    let aleat1 = Math.floor(Math.random() * max);
    let aleat2;
    let aleat3;
    let aleat4;
    
    do {
        aleat2 = Math.floor(Math.random() * max);
    } while (aleat2 === aleat1 || aleat2 === aleat3 || aleat2 === aleat4);

    do {
        aleat3 = Math.floor(Math.random() * max);
    } while (aleat3 === aleat1 || aleat3 === aleat2 || aleat3 === aleat4);

    do {
        aleat4 = Math.floor(Math.random() * max);
    } while (aleat4 === aleat1 || aleat4 === aleat3 || aleat4 === aleat2);

    return [String(aleat1),String(aleat2),String(aleat3),String(aleat4)];

}



function teste(n1, n2, n3, n4) {
    let contA1 = 0;
    let contA2 = 0;
    let contA3 = 0;
    let contA4 = 0;
    let contB1 = 0;
    let contB2 = 0;
    let contB3 = 0;
    let contB4 = 0;   

    let resposta1;
    let resposta2;
    let resposta3;
    let resposta4;

    var a = String(n1);
    var b = String(n2);
    var c = String(n3);
    var d = String(n4);

    let numero1 = document.getElementById(a).value;
    let numero2 = document.getElementById(b).value;
    let numero3 = document.getElementById(c).value;
    let numero4 = document.getElementById(d).value;
    
    if (sequencia.includes(numero1)){
        contA1 = 1;
        if (numero1 === sequencia[0]){
            contB1 = 1;
        } else {
            contB1 = 0;
        }
    } else {
        contA1 = 0;
    }

    if (contA1 === 1 && contB1 === 1){
        resposta1 = "green";
    } else if (contA1 === 1 && contB1 === 0){
        resposta1 = "yellow";
    } else {
        resposta1 = "red";
    }
    

    if (sequencia.includes(numero2)){
        contA2 = 1;
        if (numero2 === sequencia[1]){
            contB2 = 1;
        } else {
            contB2 = 0;
        }
    } else {
        contA2 = 0;
    }

    if (contA2 === 1 && contB2 === 1){
        resposta2 = "green";
    } else if (contA2 === 1 && contB2 === 0){
        resposta2 = "yellow";
    } else {
        resposta2 = "red";
    }

    
    if (sequencia.includes(numero3)){
        contA3 = 1;
        if (numero3 === sequencia[2]){
            contB3 = 1;
        } else {
            contB3 = 0;
        }
    } else {
        contA3 = 0;
    }

    if (contA3 === 1 && contB3 === 1){
        resposta3 = "green";
    } else if (contA3 === 1 && contB3 === 0){
        resposta3 = "yellow";
    } else {
        resposta3 = "red";
    }
    

    if (sequencia.includes(numero4)){
        contA4 = 1;
        if (numero4 === sequencia[3]){
            contB4 = 1;
        } else {
            contB4 = 0;
        }
    } else {
        contA4 = 0;
    }

    if (contA4 === 1 && contB4 === 1){
        resposta4 = "green";
    } else if (contA4 === 1 && contB4 === 0){
        resposta4 = "yellow";
    } else {
        resposta4 = "red";
    }

    if (resposta1 === "green" && resposta2 === "green" && resposta3 === "green" && resposta4 === "green") {
        document.getElementById("input1").value = sequencia[0];
        document.getElementById("input2").value = sequencia[1];
        document.getElementById("input3").value = sequencia[2];
        document.getElementById("input4").value = sequencia[3];

        document.getElementById("input1").style.backgroundColor = "#e2e2e2";
        document.getElementById("input2").style.backgroundColor = "#e2e2e2";
        document.getElementById("input3").style.backgroundColor = "#e2e2e2";
        document.getElementById("input4").style.backgroundColor = "#e2e2e2";

        document.getElementById("botaojn").style.display = "flex";
    }

    console.log(resposta1, resposta2, resposta3, resposta4);
    
    let lista1 = [resposta1, resposta2, resposta3, resposta4];

    return embaralhar(lista1);
}

function atualizar() {
    location.reload();
}