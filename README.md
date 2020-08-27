# Cahier des charges

Structurer ses données en JSON et les récupérer à l’aide d’AJAX


## Projet fil rouge : Une application de gestion de comptes bancaires

Vous êtes développeur junior au sein du service informatique d’une grande enseigne bancaire.
 
Le coeur de cible de cette banque était jusqu’à maintenant les épargnants âgés, qui utilisent peu internet.
  
Elle souhaite maintenant diversifier sa clientèle, entrer de plein pied dans l’ère du numérique et proposer
 
à ses usagers un service bancaire en ligne renouvelé afin d’attirer de nouveau utilisateurs.
 
Cependant la banque est un métier de confiance et c’est la sécurité des utilisateurs qui doit primer avant tout.
 
A ce titre, vous devez créer une application qui permet à l’utilisateur de créer et gérer des comptes bancaires.


### Spécifications fonctionnelles :

	- Sur l’accueil du site, l’utilisateur voit par défaut tous ses comptes bancaires.

	- A son arrivée sur l’accueil un layer s’affiche par dessus l’ensemble de la page et lui rappelle les règles de sécurité essentielles sur un site internet.
 
Les règles de sécurité sont stockées dans un fichier et récupérées par requête HTTP (AJAX).

	- Sur une page de statistiques l’utilisateur accède à des informations bancaires comme les taux d’emprunt, le cours de la bourse, ect…
 
Ces informations sont récupérées depuis un fichier via requête HTTP et présentées sous forme de tableau.
 
Ces informations sont stockées dans un fichier au format JSON.

	- Une page de blog, qui affichera des articles récupérés depuis l’API suivante : https://ocjswebsrv.herokuapp.com/api/articles


### Optionnel :

	- Sur une page dédiée, un formulaire lui permet de créer un nouveau compte bancaire avec minimum un type de compte (courant, livretA, PEL etc...) et
 
une somme par défaut supérieure à 50 euros.

	- Pour chaque compte l’utilisateur peut cliquer sur un lien qui par la suite lui permettra de supprimer le compte.

	- Pour chaque compte, l’utilisateur peut, via un formulaire faire un dépôt d’argent.

	- Pour chaque compte, l’utilisateur peut, via un formulaire faire un retrait d’argent.

	- Sur une page dédiée, à l’aide d’un formulaire, l’utilisateur peut réaliser un virement d’un compte à un autre.
 
Il peut donc sélectionner un compte A à débiter, indiquer un montant et sélectionner le compte B à créditer.
 
Il ne peut sélectionner que ses propres comptes.
 

### Pour aller plus loin :
	- Un formulaire de création et de connexion d’utilisateurs sur une page dédiée.

	- Rendre les formulaires fonctionnels en JavaScript. Par exemple si je remplis le formulaire de création de compte,
 
les informations rentrées sont traitées en JavaScript et permettent de créer un nouveau compte en HTML qui est ajouté à la page.
 
Pour cela vous devrez peut-être utiliser les sessions.

	- Valider les formulaires en JavaScript


### Spécifications techniques :

	- HTML5

	- CSS3

	- Framework Boostrap4

	- Base Boilerplate

	- JavaScript avec respect des normes ES6

	- Vous avez produit des maquettes de type wireframe simples pour au moins une des pages

	- Vous avez produit une arborescence fonctionnelle de l’application reprenant les cas d’utilisation possible de la page

	- Vos wireframes sont accessibles dans un dossier DOC

	- Votre interface est responsive sur tous les supports

	- Vous respectez le principe DRY

	- Votre code est commenté

	- Votre code est hébergé sur GitHub

	- Vous avez fait usage d’un logiciel de versionning

	- Votre site est hébergé via une GH-page:  https://aurelielerouxel.github.io/bankroot

	- Le repository contient un readme, une description et des tags

	- Vous utilisez un outil de gestion de projet de type KANBAN.
 
Idéalement pour chaque tâche vous estimez le temps et la priorité et vous vous mettez dans la peau de l’utilisateur.


