//boutons 

let quiSommesNous = document.getElementById("bouton__qui")

quiSommesNous.addEventListener("click", pageQui)

console.log(document.getElementById("about"))

function pageQui() {
    document.querySelector("main").setAttribute("class", "hide")
    document.getElementById("about").style.display = "flex"
    document.getElementById("about").setAttribute("class", "about--clicked")
}