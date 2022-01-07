let resultat = document.getElementById("resultat");
let nombre = document.getElementById("nombre");
let operateur = document.getElementById("operateur");
let operationTerminee = false;

function ajoutChiffre(chiffre) {
  if (resultat.textContent === "0" || operationTerminee) {
    resultat.textContent = "";
    operationTerminee = false;
  }
  resultat.textContent += chiffre;
}

function effacerTout() {
  resultat.textContent = "";
  nombre.textContent = "";
  operateur.textContent = "";
}

function effacerEntree() {
  resultat.textContent = "";
}

function effacerDernier() {
  let newText = "";
  for (i = 0; i < resultat.textContent.length - 1; i++) {
    newText += resultat.textContent[i];
  }
  resultat.textContent = newText;
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
    alert("Vous ne pouvez effectuer qu'un opération à la fois!");
  } else {
    nombre.textContent = resultat.textContent;
    operateur.textContent = signe;
    resultat.textContent = "";
  }
}

function round(number) {
  return +(Math.round(number + "e+2") + "e-2");
}

function obtenirResultat() {
  let operation = operateur.textContent;
  let nombre1 = nombre.textContent;
  let nombre2 = resultat.textContent;
  if (operationTerminee) {
    alert("L'opération est terminée!")
  }
  else {
    nombre.textContent +=
    " " + operateur.textContent + " " + resultat.textContent + " = ";
    operateur.textContent = "";
    operationTerminee = true;
    switch (operation) {
      case "+":
      resultat.textContent = round( +nombre1 + +nombre2);
      break;
      case "-":
      resultat.textContent = round(+nombre1 - +nombre2);
      break;
      case "x":
      resultat.textContent = round(+nombre1 * +nombre2);
      break;
      case "/":
      resultat.textContent = round(+nombre1 / +nombre2);
      break;
      case "^":
      resultat.textContent = round((+nombre1) ** +nombre2);
      break;
    }
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
  let nb = resultat.textContent;
  nombre.textContent = resultat.textContent + "²";
  resultat.textContent = +nb * +nb;
  operationTerminee = true;
}

function inverse() {
  let nb = resultat.textContent;
  nombre.textContent = "1 / " + resultat.textContent;
  resultat.textContent = 1 / +nb;
  operationTerminee = true;
}

function puissanceDix() {
  let nb = resultat.textContent;
  nombre.textContent = "10 ^ " + resultat.textContent;
  resultat.textContent = 10 ** +nb;
  operationTerminee = true;
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
}
