// ************** Fonctions de manipulation de chaînes ***************** //

/// Fonction 1 - Inverser une chaîne : écrivez une fonction qui inverse une chaîne donnée.
function inverserChaine(chaine) {
  // variable locale initialise au ""
  var s = "";
  // parcourir la chaine à l'envers
  for (var i = chaine.length - 1; i >= 0; i--) {
    // remplir la chaine s à partir de la chiane donnée
    s = s + chaine[i];
  }
  // retourne la chaine à l'envers
  return s;
}
//var maChaine = "Bonjour!";
//console.log(inverserChaine(maChaine));

//----------------------------------------------------------------------------------
/// Fonction 2 - Compter les caractères : créez une fonction qui compte le nombre de caractères dans une chaîne.
function nmbreCar(chaine) {
  return chaine.length;
}
//console.log(nmbreCar("Hello on est entrain d'apprendre le JS"));
//var x = nmbreCar("Hello on est entrain d'apprendre le JS");
//console.log(x);

//----------------------------------------------------------------------------------
/// Fonction 3 - Mettre les mots en majuscule : implémentez une fonction qui met en majuscule la première lettre de chaque mot d'une phrase.
function majMot(chaine) {
  var str = chaine[0].toUpperCase(); //l'exception du premier car

  for (var i = 1; i < chaine.length; i++) {
    if (chaine[i - 1] === " ") {
      str += chaine[i].toUpperCase();
    } else {
      str += chaine[i];
    }
  }
  return str;
}
//console.log(majMot("bonjour javascript"));

// ************** Fonctions de tableau ***************** //

// fonction 1 - Rechercher le maximum et le minimum : écrivez des fonctions pour trouver les valeurs maximales et minimales dans un tableau de nombres.
function MaxMin(tab) {
  var min = tab[0];
  var max = tab[0];
  for (var i = 1; i < tab.length; i++) {
    if (min > tab[i]) min = tab[i];
    if (max < tab[i]) max = tab[i];
  }
  return `le maximum de ce tableau est ${max} et le minimum est ${min}`;
}
//console.log(MaxMin([4, 1, 8, 5, -10, 27]));

//----------------------------------------------------------------------------------
// Foncrtion 2 - Somme d'un tableau : créez une fonction qui calcule la somme de tous les éléments d'un tableau.
function sumArray(tab) {
  var sum = 0;
  for (var i = 0; i < tab.length; i++) {
    sum = sum + tab[i];
  }
  return sum;
}
//console.log(sumArray([4, 7, 8, 2]));

//----------------------------------------------------------------------------------
// Fonction 3 - Filtrer le tableau : implémentez une fonction qui filtre les éléments d’un tableau en fonction d’une condition donnée.
// la condition : les nombre impaires
function filterArray(tab) {
  //créer un autre arr
  var arr = [];
  // for pour parcourir
  for (var elt of tab) {
    //tester ? pair ou non si oui on va remplir le arr
    if (elt % 2 != 0) arr.push(elt);
  }
  return arr;
}
//console.log(filterArray([2, 5, 7, 10]));

// ************** Fonctions mathématiques ***************** //

// Fonction 1 - Factorielle : Écrivez une fonction pour calculer la factorielle d'un nombre donné.
function factoriel(n) {
  if (n < 0)
    return `Le factoriel de ${n} n'existe pas: c'est un nombre négatif`;
  else {
    if (n === 0 || n === 1) return `le factoriel de ${n} est ${fact}`; //l'exception;
    // n n'est pa négatif et n != 0 et de 1
    var fact = 1; //initialisation du factoriel
    var m = n;
    while (n > 1) {
      fact = fact * n;
      n--;
    }
    return `le factoriel de ${m} est ${fact}`;
  }
}
//console.log(factoriel(5));

//----------------------------------------------------------------------------------
// Fonction 2 - Vérification des nombres premiers : créez une fonction pour vérifier si un nombre est premier ou non.

function premier(n) {
  if (n === 1) return "1 est un nombre premier";
  for (var i = 2; i < n; i++) {
    if (n % i === 0) return `${n} n'est pas un nombre premier`;
  }
  return `${n} est un nombre premier`;
}
//console.log(premier(23));

//----------------------------------------------------------------------------------
// Fonction 3 - Suite de Fibonacci : Implémenter une fonction pour générer la suite de Fibonacci jusqu'à un nombre donné de termes. (recherche sur le net)

// Fibonnacci
// u0 = 0;
// u1 = 1;
// un = un-1+ un-2
// u2 = u0 + u1;
// 0, 1, 1, 2, 3, 5;
function Fibonnacci(n) {
  var arr = [0, 1];
  //execptions
  // le cas où n=0 ou n=1
  if (n === 0) return [0];
  if (n === 1) return arr;

  //le cas général: à partir de 2
  for (var i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
//console.log(Fibonnacci(10));
