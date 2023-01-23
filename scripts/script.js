document.addEventListener('DOMContentLoaded', function () {

    //boutons 

    document.getElementById("bouton__qui").addEventListener("click", pageQui)
    document.getElementById("bouton__contact").addEventListener("click", pageContact)

    //Transforme le tableau d'element HTML des classes en array, puis ajoute l'event sur chacun d'eux
    let arrowLeft = document.getElementsByClassName("arrow-left")
    arrowLeft = Array.from(arrowLeft)
    arrowLeft.forEach(element => {
        element.addEventListener("click", pageAccueil)
    });
   
    function pageQui() {
        document.querySelector("main").setAttribute("class", "hide")
        document.getElementById("about").style.display = "flex"
        document.getElementById("about").setAttribute("class", "about--clicked")
    }

    function pageContact(){
        document.querySelector("main").setAttribute("class", "hide")
        document.getElementById("contact").style.display = "flex"
        document.getElementById("contact").setAttribute("class", "about--clicked")
        //Reload Openmapstreet pour avoir le bon zoom
        setTimeout(() => {
            let buggyid = document.getElementById("map");
            buggyid.src = buggyid.src;
        }, 500);        
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

//Reload en fonction de l'id



