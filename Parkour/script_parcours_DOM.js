console.log("nombre de <p> : "+document.getElementsByTagName('p').length);
  
console.log("Contenu de l'id 'coucou' : "+document.getElementById("coucou").textContent);
  
console.log("le 3eme <a> pointe l'url: "+ document.getElementsByTagName('a')[2]);
  
console.log("il y a " + document.getElementsByClassName("compte-moi").length + " éléments de la classe 'compte-moi'");
  
console.log("il y a "+ document.querySelectorAll('li.compte-moi').length + " éléments <li> portant la classe 'compte-moi'");
  
console.log("il y a "+ document.querySelectorAll("ol.li, li.compte-moi").length + " éléments <li> situé dans <ol> portant la classe 'compte-moi'");
  
console.log(document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0].textContent);
