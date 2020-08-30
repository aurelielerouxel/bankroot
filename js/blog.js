let card = document.getElementById("card");
// AJAX request
let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
         if (httpRequest.status === 200) {
            //  Store the json file in a variable
            let blog = JSON.parse(httpRequest.responseText);
            console.log(blog);
       
            // create a loop each object of the json
            for (let i of blog) {
                let article = document.createElement("section");
                // mais WTF
                card.appendChild(article);
                // card.style.

                let id = document.createElement("id");
                id.innerText = i.id;
                card.appendChild(id);
                // id.style.

                let titre = document.createElement("titre");           
                titre.innerText = i.titre;
                // cardTitle.style.

                let contenu = document.createElement("p");    
                contenu.innerText = i.contenu;
                // cardContent.style.

                id.appendChild(titre);
                id.appendChild(contenu);
            }
                                   
        } 
         else {
            // there was a problem with the request,
            console.log("ERROR");
         }
     } 
    else {
        // not ready yet,
        console.log("chargement en cours");
    }
};
// opening and sending of the request,
httpRequest.open('GET', 'https://oc-jswebsrv.herokuapp.com/api/articles', true);
httpRequest.send();