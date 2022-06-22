String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); }

var palabras = ["hola", "casa","perro","carro", "gato", "piano"];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");

let contadorFallos = 0;

let refresh = document.getElementById("refresh");
refresh.addEventListener("click", () => {
            location.reload();
})

function visitPlayGame(){
    window.location.href = "hangmanGame.html";
}

function visitAddWord(){
    window.location.href = "addWord.html";
}



document.querySelector("#calcular").addEventListener("click", _ => {

    const letra = document.querySelector("#letra").value;
    let haFallado = true;
     for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            haFallado = false;
        }
     }
     if(haFallado){
        contadorFallos++;
        document.querySelector("#ahorcado").style.backgroundPosition = -(205*contadorFallos) + "px 0";
        if(contadorFallos == 5){
            alert("Game Over");
        }
        
        }else{
            if(palabraConGuiones.indexOf("_")<0){
                document.querySelector("#ganador").style.display = "flex";
            }
     }
     document.querySelector("#output").innerHTML = palabraConGuiones;
     document.querySelector("#letra").value = "";
     document.querySelector("#letra").focus();

})

function agregarPalabra(){
    var newWord = document.querySelector("#newWord").value;
    palabras.push(newWord);

    

}
