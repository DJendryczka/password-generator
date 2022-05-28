let passwordChars = ["a", "A", "b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N"];
let passOne = document.getElementById("pass-1");


function getChar() {

    let passworChar = Math.floor(Math.random() * passwordChars.length)
    return passwordChars[passworChar]
}



function generatePassword() {
    passOne.textContent += getChar()
    console.log("click")
    console.log(getChar())
}


