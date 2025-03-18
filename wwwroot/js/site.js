

// Write your JavaScript code.

const subjects = [
    "my brother",
    "my sister",
    "my mom",
    "my dad",
    "my father",
    "my mother",
]

const predicates = [
    "is watching TV",
    "is cooking dinner",
    "is reading a book",
    "is driving to work",
    "is fixing the car",
    "is gardening",
];

function grabRandomFromArray(array) {
    if (array.length === 0) {
        return undefined;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
function generateSentence() {
    return grabRandomFromArray(subjects) + " " + grabRandomFromArray(predicates);
}

function displaySentence() {
    document.getElementById("sentenceOutput").innerText = generateSentence();
}

let timer = false
document.addEventListener("DOMContentLoaded", function() {
    let sentenceElement = document.getElementById("sentenceOutput");
    let readyButton = document.getElementById("Ready!");
    

    readyButton.addEventListener("click", function() {
        timer = true;
        console.log("Timer started:", timer);
        sentenceElement.style.color = "red"; // Change text color when clicked
    });
});