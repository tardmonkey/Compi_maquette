window.addEventListener('load', function (){

    //boutons 

    document.getElementById("bouton__qui").addEventListener("click", pageQui)
    document.getElementById("bouton__contact").addEventListener("click", pageContact)
    document.getElementById("arrow-left").addEventListener("click", pageAccueil)


    function pageQui() {
        document.querySelector("main").setAttribute("class", "hide")
        document.getElementById("about").style.display = "flex"
        document.getElementById("about").setAttribute("class", "about--clicked")
    }

    function pageContact(){
        document.querySelector("main").setAttribute("class", "hide")
        document.getElementById("contact").style.display = "flex"
        document.getElementById("contact").setAttribute("class", "about--clicked")
    }

    function pageAccueil(){
        document.querySelector("main").removeAttribute("class", "hide")
        document.getElementById("about").style.display = "none"
        document.getElementById("about").removeAttribute("class", "about--clicked")
        document.getElementById("contact").style.display = "none"
        document.getElementById("contact").removeAttribute("class", "about--clicked")

        console.Log("arrow clicked")
    }

})