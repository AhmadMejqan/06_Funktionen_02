
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: check
*/

// Modul: Division a / b |  Test:
ausgabe(dividieren(1,2));
ausgabe(dividieren(1,-2));
ausgabe(dividieren(10,0));
function dividieren(a,b) {
    
    if (b == 0) {
        return "Division durch 0 nicht OK!";
    }

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