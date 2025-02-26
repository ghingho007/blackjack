    let punteggio = document.getElementById("numero")
    let testoVariabile = document.getElementById("txt-variabile")
    document.getElementById("restart-btn").disabled = true
    
    let score = 0

    function pesca() {
        let incremento = Math.floor(Math.random() * 10) + 1
        score += incremento
        punteggio.innerText = "TOTALE:" + " " + score

        if (score > 1 && score < 21 ) {
        testoVariabile.innerText = "VUOI CONTINUARE A PESCARE? 🤔"
        document.getElementById("restart-btn").disabled = false

    } else if (score === 21) {
        testoVariabile.innerText = "HAI FATTO BLACKJACK, COMPLIMENTI! 🥳"
        punteggio.innerText = "TOTALE:" + " " + "0"
        document.getElementById("pesca").disabled = true
        document.getElementById("stai").disabled = true
        document.getElementById("restart-btn").disabled = true
        document.getElementById("restart-btn").disabled = false

    } else if (score > 21) {
        testoVariabile.innerText = "HAI PERSO! 😢"
        document.getElementById("pesca").disabled = true
        document.getElementById("stai").disabled = true
        document.getElementById("restart-btn").disabled = true
        document.getElementById("restart-btn").disabled = false
        }
    }

    function stai() {
        document.getElementById("pesca").disabled = true
        document.getElementById("stai").disabled = true
        document.getElementById("restart-btn").disabled = false
        
        testoVariabile.innerText = "HAI DECISO DI STARE, BRAVO! 🥳"
    }

    function reset() {
        location.reload()
    }

