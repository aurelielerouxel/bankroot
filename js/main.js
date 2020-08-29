// creation of the layer
let main = document.getElementsByTagName("main")[0];
let background = document.getElementById("background");
let layer = document.getElementById("layer");

layer.setAttribute("background", "id", "layer");
main.appendChild(layer);

let buttonWarningLayer = document.createElement("button");
main.appendChild(buttonWarningLayer);

// AJAX request
let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE){

        if(httpRequest.status === 200){

            //  store the json file in a variable
            layer.innerText = httpRequest.responseText;
        }
        else {
            // there was a problem with the request,
            console.log("une erreur est survenue");
        }
    } 
    else {
        // not ready yet,
        console.log("en attente de réponse");
    }
}

// opening and sending of the request,
httpRequest.open("GET", "warning.txt", true);
httpRequest.send();

// button function
buttonWarningLayer.addEventListener("click", function(){
    layer.style.display = "none";
    buttonWarningLayer.style.display = "none";
});

// style of background layer
// background.style.backgroundColor = "black";
// background.style.width = "100%";
// background.style.height = "100%";
// background.style.position = "absolute";

// style of layer
layer.style.width = "80%";
layer.style.height = "auto";
layer.style.position = "absolute";
layer.style.textAlign = "center";
layer.style.top = "10%"
layer.style.opacity = "90%";
layer.style.fontSize = "2em";
layer.style.backgroundColor = "red";
layer.style.color = "white";

// style of button 
buttonWarningLayer.innerText = "J'accepte les conditions d'utilisation.";
buttonWarningLayer.style.padding = "1em";
buttonWarningLayer.style.borderRadius = "25px";
buttonWarningLayer.style.position = "relative";
buttonWarningLayer.style.top= "90%";
buttonWarningLayer.style.left = "25%";
buttonWarningLayer.style.backgroundColor = "black";
buttonWarningLayer.style.color = "white";