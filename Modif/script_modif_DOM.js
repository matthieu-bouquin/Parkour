function changeTitles() {
    document.getElementsByClassName("jumbotron-heading")[0].innerHTML = "Ce que j'ai appris à THP";
    document.getElementsByClassName("lead text-muted")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changeTitles();


function changeCallToActions(){
    document.getElementsByClassName("btn btn-primary my-2")[0].innerHTML = "OK je veux tester !";
    document.getElementsByClassName("btn btn-primary my-2")[0].href = "http://www.thehackingproject.org";
    document.getElementsByClassName("btn btn-secondary my-2")[0].innerHTML = "Non Merci";
    document.getElementsByClassName("btn btn-secondary my-2")[0].href = "https://www.pole-emploi.fr/accueil/";
}
changeCallToActions();


function changeLogoName(){
    document.getElementsByClassName("navbar-brand d-flex align-items-center")[0].innerHTML = "The THP Experience";
    document.getElementsByClassName("navbar-brand d-flex align-items-center")[0].style.fontSize = "2em";
}
changeLogoName();


function populateImages(){
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    let img = document.getElementsByClassName("card-img-top");
    for(let i = 0; i < img.length; i++){
        img[i].src = imagesArray[i];
    }
}
populateImages();


function deleteLastCards(){
    let cards = document.getElementsByClassName("col-md-4");
    for(let i = 0; i <= 2; i++){
        cards[cards.length - 1].remove();
    }
}
deleteLastCards();


function changeCardsText(){                                                                                                                                                                                                   
    let cardTextNew = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web.", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
    let cardTextArray = document.getElementsByClassName("card-text")
    for(let i = 0; i < 3; i++){
        cardTextArray[i].innerHTML = cardTextNew[i]
    }
}
changeCardsText();


function changeViewButtons(){
    let buttons = document.getElementsByClassName("btn-group");
    for(let i = 0; i < 6; i++){
        buttons[i].getElementsByTagName("button")[0].classList.remove("btn-outline-secondary");
        buttons[i].getElementsByTagName("button")[0].classList.add("btn-success");
    }
}
changeViewButtons();


function pyram (){
    let div = document.createElement("div");
    div.className = "row";
    let element = document.getElementsByClassName("row")[1];
    element.after(div)
    let js = document.getElementsByClassName("col-md-4")[2];
    div.appendChild(js);
}
pyram ();
