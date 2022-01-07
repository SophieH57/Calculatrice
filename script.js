let resultat = document.getElementById("resultat");
let nombre = document.getElementById("nombre");
let operateur = document.getElementById("operateur");
let operationTerminee = false;
let operateurPrecedent;
let nombre2Precedent;
let nb;
let clavier_scientifique_ouvert = false;

function ajoutChiffre(chiffre) {
  if (resultat.textContent === "0" || operationTerminee) {
    resultat.textContent = "";
    operationTerminee = false;
  }
  resultat.textContent += chiffre;
}

function effacerTout() {
  resultat.textContent = "0";
  nombre.textContent = "";
  operateur.textContent = "";
}

function effacerEntree() {
  resultat.textContent = "0";
}

function effacerDernier() {
  resultat.textContent = resultat.textContent.slice(0, resultat.textContent.length-1);
  if (resultat.textContent.length == 0) {
    resultat.textContent = "0";
  }
  operationTerminee = false;
}

function ajoutVirgule() {
  let virgule = false;
  if (resultat.textContent == "" || resultat.textContent == "0") {
    resultat.textContent = "0.";
    operationTerminee = false;
  } else {
    for (i = 0; i < resultat.textContent.length; i++) {
      if (resultat.textContent[i] == ".") {
        virgule = true;
        break;
      }
    }
    if (virgule) {
      alert("Un nombre ne peut contenir qu'une virgule!");
    } else {
      resultat.textContent += ".";
    }
  }
}

function operation(signe) {
  if (operateur.textContent != "") {
    obtenirResultat();
  }
  nombre.textContent = resultat.textContent;
  operateur.textContent = signe;
  resultat.textContent = "";
}

function round(number) {
  return +(Math.round(number + "e+3") + "e-3");
}

function obtenirResultat() {
  let operateurActuel = operateur.textContent;
  let nombre1 = nombre.textContent;
  let nombre2 = resultat.textContent;
  if (!operationTerminee && operateurActuel.length == 0) {
    alert("Veuillez faire une opération!")
  }
  else if (operationTerminee) {
    nombre1 = resultat.textContent;
    nombre2 = nombre2Precedent;
    operateurActuel = operateurPrecedent;
    nombre.textContent = nombre1 + " " + operateurActuel + " " + nombre2Precedent + " =";
  }
  else {
    operateurPrecedent = operateur.textContent;
    nombre2Precedent = nombre2;
    nombre.textContent +=
    " " + operateur.textContent + " " + resultat.textContent + " = ";
    operateur.textContent = "";
  }
  operationTerminee = true;
  switch (operateurActuel) {
    case "+":
      resultat.textContent = round(+nombre1 + +nombre2);
      break;
    case "-":
      resultat.textContent = round(+nombre1 - +nombre2);
      break;
    case "x":
      resultat.textContent = round(+nombre1 * +nombre2);
      break;
    case "/":
      if (nombre2 == 0) {
        resultat.textContent = "La division par 0 est impossible!";
      }
      else {
        resultat.textContent = round(+nombre1 / +nombre2);
      }
      break;
    case "^":
      resultat.textContent = round((+nombre1) ** +nombre2);
      break;
    case "mod":
      resultat.textContent = round((+nombre1) % +nombre2);
      break;
  }
}

function modifSigne() {
  if (resultat.textContent[0] == "-") {
    let nouveauResultat = "";
    for (i = 1; i < resultat.textContent.length; i++) {
      nouveauResultat += resultat.textContent[i];
    }
    resultat.textContent = nouveauResultat;
  } else {
    resultat.textContent = "-" + resultat.textContent;
  }
}

function carre() {
  nb = resultat.textContent;
  nombre.textContent = resultat.textContent + "²";
  resultat.textContent = +nb * +nb;
  operationTerminee = true;
  operateurPrecedent = "";
  nombre2Precedent = "";
  nb = "";
}

function inverse() {
  nb = resultat.textContent;
  nombre.textContent = "1 / " + resultat.textContent;
  resultat.textContent = 1 / +nb;
  operationTerminee = true;
  operateurPrecedent = "";
  nombre2Precedent = "";
  nb = "";
}

function puissanceDix() {
  nb = resultat.textContent;
  nombre.textContent = "10 ^ " + resultat.textContent;
  resultat.textContent = 10 ** +nb;
  operationTerminee = true;
  operateurPrecedent = "";
  nombre2Precedent = "";
  nb = "";
}

function absolu() {
  if (resultat.textContent[0] == "-") {
    nombre.textContent = resultat.textContent;
    let nouveauResultat = "";
    for (i = 1; i < resultat.textContent.length; i++) {
      nouveauResultat += resultat.textContent[i];
    }
    resultat.textContent = nouveauResultat;
  } else {
    nombre.textContent = resultat.textContent;
  }
  operationTerminee = true;
  operateurPrecedent = "";
  nombre2Precedent = "";
}

function racine() {
  nb = resultat.textContent;
  nombre.textContent = "√" + resultat.textContent;
  resultat.textContent = Math.sqrt(nb);
  operationTerminee = true;
  operateurPrecedent = "";
  nombre2Precedent = "";
  nb = "";
}

function pi() {
  resultat.textContent = Math.PI;
}

function trigo(type) {
  nb = resultat.textContent;
  nombre.textContent = type + "(" + nb + ")";
  operationTerminee = true;
  switch(type) {
    case "cos" :
      resultat.textContent = Math.cos(+nb);
      break;
    case "sin" :
      resultat.textContent = Math.sin(+nb);
      break;
    case "tan" :
      resultat.textContent = Math.tan(+nb);
      break;
    case "ln" :
      resultat.textContent = Math.log(+nb);
      break;
  }
  nb = "";
}

function afficherClavierSci() {
  if (!clavier_scientifique_ouvert) {
    document.getElementById("clavier_scientifique").style.display = "block";
    clavier_scientifique_ouvert = true;
  }
  else {
    document.getElementById("clavier_scientifique").style.display = "none";
    clavier_scientifique_ouvert = false;
  }
}