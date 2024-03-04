let leftNumber = '';
let rightNumber = '';
let Score = 0;

function reset() {
    updateNumbers();
}
// justerer på numbrene
function updateNumbers() {
    leftNumber = generateRandomNumber();
    rightNumber = generateRandomNumber();
    document.getElementById("leftNumber").innerHTML = leftNumber;
    document.getElementById("rightNumber").innerHTML = rightNumber;
    document.getElementById("scoreBoard").innerHTML = Score;
    document.getElementById("userInput").value = '';
}
// gir score på inputten
function submit() {
    if (document.getElementById("userInput").value == "=" && leftNumber == rightNumber) {
        Score++;
    }
    else if (document.getElementById("userInput").value == ">" && leftNumber > rightNumber) {
        Score++;
    }
    else if (document.getElementById("userInput").value == "<" && leftNumber < rightNumber) {
        Score++;
    }
    else {
        Score--;
    }
    updateNumbers()
}
function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

