let TextoFinal = "Mateo Coumas";

let Errores = "@#!$%&€/?Ç"

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function escribiendo(texto) {
    let escribir = "";
    let i = 0;
    let equivocado = false
    while (i < TextoFinal.length) {
        if (Math.random() < 0.1 && equivocado === false) {
            let error =  Errores[Math.floor(Math.random() * Errores.length)];
            escribir = escribir + error
            document.getElementById("miTitulo").textContent = escribir;
            await esperar(100);

            escribir = escribir.slice(0, -1);
            document.getElementById("miTitulo").textContent = escribir;
            await esperar(100);
            equivocado = true
        }
        else {
            let letra = TextoFinal[i]
            escribir = escribir + letra;
            document.getElementById("miTitulo").textContent = escribir;
            await esperar(100);
            i++
            equivocado = false
        }
    }
}


escribiendo(TextoFinal);
