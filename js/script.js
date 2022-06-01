

let lowCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "v", "z", "y"];
let capitalCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "W", "V", "Z", "Y"];
let numberChars = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let simbolChars = [ "<", ">", "!", "#", "¤", "%", "&", "/", "(", ")", "=", "?", "+", "*", "@", "£", "$" ]
let passOne = document.getElementById("pass-1");
let passTwoo = document.getElementById("pass-2");
let passTree = document.getElementById("pass-3");
let passFour = document.getElementById("pass-4");
let allChars = lowCaseChars + capitalCaseChars + numberChars + simbolChars;


function getLowCaseChar() {

    let passwordLowChar = Math.floor(Math.random() * lowCaseChars.length);
    return lowCaseChars[passwordLowChar];
}

function getCapitalChar() {
    let passwordCapitalChar = Math.floor(Math.random() * capitalCaseChars.length);
    return capitalCaseChars[passwordCapitalChar];
}

function getNumberChar() {
    let passwordNumberChar = Math.floor(Math.random() * numberChars.length);
    return numberChars[passwordNumberChar];
}

function getSimbolChar() {
    let passwordSimbolChar = Math.floor(Math.random() * simbolChars.length);
    return simbolChars[passwordSimbolChar];
}


function generatePassword() {
    passOne.textContent = " "
    passOne.textContent += getNumberChar()
    passOne.textContent += getLowCaseChar()
    passOne.textContent += getCapitalChar()
    passOne.textContent += getSimbolChar()
    passOne.textContent += getLowCaseChar()
    passOne.textContent += getNumberChar()
    passOne.textContent += getCapitalChar()
    passOne.textContent += getSimbolChar()
    passOne.textContent += getLowCaseChar()
    passOne.textContent += getSimbolChar()
    passOne.textContent += getNumberChar()
    passOne.textContent += getLowCaseChar()
    passOne.textContent += getCapitalChar()
    passOne.textContent += getSimbolChar()
    passOne.textContent += getLowCaseChar()

    passTwoo.textContent = " "
    passTwoo.textContent += getSimbolChar()
    passTwoo.textContent += getLowCaseChar()
    passTwoo.textContent += getSimbolChar()
    passTwoo.textContent += getNumberChar()
    passTwoo.textContent += getLowCaseChar()
    passTwoo.textContent += getCapitalChar()
    passTwoo.textContent += getSimbolChar()
    passTwoo.textContent += getLowCaseChar()
    passTwoo.textContent += getNumberChar()
    passTwoo.textContent += getLowCaseChar()
    passTwoo.textContent += getCapitalChar()
    passTwoo.textContent += getSimbolChar()
    passTwoo.textContent += getLowCaseChar()
    passTwoo.textContent += getNumberChar()
    passTwoo.textContent += getCapitalChar()

    passTree.textContent = " "
    passTree.textContent += getSimbolChar()
    passTree.textContent += getLowCaseChar()
    passTree.textContent += getSimbolChar()
    passTree.textContent += getNumberChar()
    passTree.textContent += getLowCaseChar()
    passTree.textContent += getCapitalChar()
    passTree.textContent += getSimbolChar()
    passTree.textContent += getLowCaseChar()
    passTree.textContent += getNumberChar()
    passTree.textContent += getLowCaseChar()
    passTree.textContent += getCapitalChar()
    passTree.textContent += getSimbolChar()
    passTree.textContent += getLowCaseChar()
    passTree.textContent += getNumberChar()
    passTree.textContent += getSimbolChar()

    passFour.textContent = " "
    passFour.textContent += getNumberChar()
    passFour.textContent += getLowCaseChar()
    passFour.textContent += getCapitalChar()
    passFour.textContent += getSimbolChar()
    passFour.textContent += getLowCaseChar()
    passFour.textContent += getNumberChar()
    passFour.textContent += getCapitalChar()
    passFour.textContent += getSimbolChar()
    passFour.textContent += getLowCaseChar()
    passFour.textContent += getSimbolChar()
    passFour.textContent += getNumberChar()
    passFour.textContent += getLowCaseChar()
    passFour.textContent += getCapitalChar()
    passFour.textContent += getSimbolChar()
    passFour.textContent += getLowCaseChar()
}


