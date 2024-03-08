    function cifra(texto, chave) {
        const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  
        let resultado = "";
  
        for (let i = 0; i < texto.length; i++) {
          const char = texto[i];
          const indice = alfabeto.indexOf(char);
  
          if (indice !== -1) {
            const novoIndice = (indice + chave + 26) % 26; 
            resultado += alfabeto[novoIndice];
          } else {
            resultado += char;
          }
        }
        return resultado;
      }


    function criptografar(){
        let textoLocal = document.getElementById("texto").value;

        if(!textoLocal || textoLocal === ""){
            const campoVazio = document.getElementById("campoVazio");
            campoVazio.innerText = "Nenhum texto digitado."
        }

        const chave = 7;
        const criptografado = cifra(textoLocal, chave);
        document.getElementById("texto").value = criptografado;

        console.log(criptografado);

    }


    function descriptografar(){
        let criptografado = document.getElementById("texto").value;

        if (!criptografado.trim()) {
            const campoVazio = document.getElementById("campoVazio");
            campoVazio.innerText = "Digite algo para ser descriptografado."
        }
    
        const chave = -7;
        const descriptografado = cifra(criptografado, chave);
    
        document.getElementById("texto").value = descriptografado;
        console.log(descriptografado);

    }  

document.addEventListener("DOMContentLoad", function(){

    document.getElementById("criptografar").addEventListener("click", criptografar);
    document.getElementById("descriptografar").addEventListener("click", descriptografar);
});