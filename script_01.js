
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: check
2. Auswahl Rechenart :: check
3. Fkt. Grundrechenarten :: check
4. Ausgabe in Konsole :: check
*/

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div(a, b) {
    if (b == 0) {
        // throw new Error("Division durch Null nicht möglich.");
        return "Nicht möglich."
    }
    return a / b;
}

function multi(a, b) {
    return a * b;
}

function calc(no1, op, no2) {
    if (op == "+") {
        return add(no1, no2);
    } else if  (op == "-") {
        return sub(no1, no2);
    } else if  (op == "*") {
        return multi(no1, no2);
    } else { // == "/"
        return div(no1, no2);
    }
}

function outStr(no1, op, no2, res) {
    let gap = " ";
    return no1 + gap + op + gap + no2 + gap + "=" + gap + res;
}

function consoleOut(txt) {
    console.log(txt);
}

function getOp() {
    let re = /^[-+/*]$/ // arith. op. regex
    let op = prompt("Rechenzeichen (+ - * /):");
    while (re.test(op) != true) {
        op = prompt("Rechenzeichen (+ - * /):");
    }
    return op;
}
/*
function getOp() {
    let op;
    let ops = ["+", "-", "*", "/"];
    for (let i = 1; i < 21; i++) { // try 20 times | TODO: throw at 20
        // consoleOut(i);
        if (ops.includes(op) != true) {
            op = prompt("Rechenzeichen (+ - * /): -- Versuch: " + i + "/20");
        } else {
            return op;
        }
    }
}
*/
function getNo(n) {
    let re = /^-?\d+([\.,]\d+)?$/ // number regex
    let no = prompt("Zahl " + n + " :");
    while (re.test(no) != true) {
        no = prompt("Zahl " + n + " :");
    }
    return parseFloat(no.replace(",", "."));
}


let no1 = getNo("1");
let op = getOp();
let no2 = getNo("2");
let res = calc(no1, op, no2);
consoleOut(outStr(no1, op, no2, res));
