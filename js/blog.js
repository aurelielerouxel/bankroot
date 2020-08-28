
// objet de base pour gérer les requêtes et les réponses
 httpRequest = new XMLHttpRequest();

// code à exécuter
httpRequest.onreadystatechange = function() {
        // tout va bien, la réponse a été reçue
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                // la réponse est exploitable et valide
                // on affiche la réponse sur la page
                let articles = JSON.parse(httpRequest.responseText);
                console.log(articles);


                for (const property in articles) {

                }

            } 
            else {
                // il y a eu un problème avec la requête,
                console.log("une erreur est survenue");
            }
        } 
        else {
            // pas encore prête
            console.log("en attente de réponse");
        }
    };
    // ouverture et envoi de la requête
    // httpRequest.open('GET', 'blog.json', true);
    httpRequest.open('GET', 'https://oc-jswebsrv.herokuapp.com/api/articles', true);
    // httpRequest.open('GET', 'https://swapi.dev/api/people/1', true);
    httpRequest.send();