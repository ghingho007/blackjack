let punteggio = document.getElementById("numero")
let testoVariabile = document.getElementById("txt-variabile")
document.getElementById("restart-btn").disabled = true
let images = [
    document.getElementById("imageuno"),
    document.getElementById("imagedue"),
    document.getElementById("imagetre"),
    document.getElementById("imagequattro"),
    document.getElementById("imagecinque"),
    document.getElementById("imagesei"),
    document.getElementById("imagesette"),
    document.getElementById("imageotto"),
    document.getElementById("imagenove"),
    document.getElementById("imagedieci")
]

let score = 0

function pesca() {
    let incremento = Math.floor(Math.random() * 10) + 1
    score += incremento
    punteggio.innerText = "TOTALE:" + " " + score


    nascondiTutteLeCarte()
    mostraCarta(incremento)

    if (score > 1 && score < 21) {
        testoVariabile.innerText = "VUOI CONTINUARE A PESCARE? 🤔"
        document.getElementById("restart-btn").disabled = false

    } else if (score === 21) {
        testoVariabile.innerText = "HAI FATTO BLACKJACK, COMPLIMENTI! 🥳"
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

function nascondiTutteLeCarte() {
    images.forEach(image => {
        image.style.display = "none"
        image.style.opacity = 0
    })
}

function mostraCarta(numero) {
    let image = images[numero - 1]
    if (image) {
        image.style.display = "block"
        image.style.opacity = 1
    }
}
