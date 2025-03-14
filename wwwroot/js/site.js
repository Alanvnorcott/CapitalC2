// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

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
    var sentence = grabRandomFromArray(subjects) + " " +grabRandomFromArray(predicates)
    return sentence
}

function displaySentence() {
    document.getElementById("sentenceOutput").innerText = generateSentence();
}