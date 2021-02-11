
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: check
2. Auswahl Rechenart :: check
3. Fkt. Grundrechenarten :: check
4. Ausgabe in Konsole :: check
*/

// Modul: Gesamtfunktionalität | Test:
//start()
function start() {
    ausgabe(rechner(getOp(),getZahl("1"),getZahl("2")));
}

// Modul: Operand eingeben | Test:
//ausgabe(getOp());
function getOp() {
    let op = prompt("Bitte +|-|*|/ eingeben.")
    while (!checkOp(op)) {
        op = prompt("Bitte einen korrekten Operator eingeben.") 
    }
    return op;
}

// Modul: Operand überprüfen | Test:
// ausgabe(checkOp("+"));
// ausgabe(checkOp("-"));
// ausgabe(checkOp("*"));
// ausgabe(checkOp("/"));
// ausgabe(checkOp("kglöfdkgdüoü#"));
function checkOp(checkStr) {
    // ODER (OR) - Verknüpfung
    return  (checkStr =="+") || 
            (checkStr =="-") || 
            (checkStr =="*") || 
            (checkStr =="/");
}

// Modul: Zahl 1 eingeben | Test:
//ausgabe(getZahl("1"));
//ausgabe(getZahl("2"));
function getZahl(numStr) {  
    let zahl = parseInt(prompt("Bitte Zahl " + numStr + " eingeben."));
   while (isNaN(zahl)) {
        zahl = parseInt(prompt("Das ist keine Zahl. Bitte nochmal:"));
   }
    return zahl;
}

// Modul: Rechenart auswählen | Test:
//ausgabe(rechner("+",10,4));
// ausgabe(rechner("-",10,4));
//ausgabe(rechner("*",10,4));
// ausgabe(rechner("/",10,4));
// ausgabe(rechner("/",10,0));
// ausgabe(rechner("#!?",10,0));
function rechner(op,a,b) {
    switch (op) {
        case "+":
            return addieren(a,b);
        case "-":
            return subtrahieren(a,b);
        case "*":
            return multiplizieren(a,b);
        case "/":
            return dividieren(a,b);
        default:
            return "Irgendwas ging schief!"; 
    }
}

// Modul: Division a / b |  Test:
// ausgabe(dividieren(1,2));
// ausgabe(dividieren(1,-2));
// ausgabe(dividieren(10,0));
function dividieren(a,b) {
    if (b == 0) {return "Division durch 0 nicht OK!";}
    return a/b;
}

// Modul: Multiplikation a * b |  Test:
//ausgabe(multiplizieren(10,2));
function multiplizieren(a,b) {
   return a * b;
}

// Modul: Subtraktion a - b |  Test:
//ausgabe(subtrahieren(0,2));
function subtrahieren(a,b) {
    return a - b;
}

// Modul: Addition a + b |  Test:
//ausgabe(addieren(3,2));
function addieren(a,b) {
    return a + b;
}

// Modul: Konsolenausgabe |  Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}