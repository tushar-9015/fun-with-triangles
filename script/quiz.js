const quizForm = document.querySelector(".quiz-form");
const buttonSubmitAnswer = document.querySelector("#submit-answers");
const outputMessage = document.querySelector("#output-message");

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°"
];

console.log(correctAnswers.length);

function  calculateScore() {
    let score = 0;
    let index = 0;
    const numAnswered = [];
    const formResults = new FormData(quizForm);
    // console.log(formResults.values().size);

    // if (formResults.values().size !== 10) {
    //     console.log("lost");
    //     outputMessage.innerText = "You must answer all the questions";
    // } else {
    for (let value of formResults.values()) {

        numAnswered.push(1);
        console.log(value);
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index +1;
    }

    if (numAnswered.length != 10) {
        console.log("lost");
        outputMessage.innerText = "You must answer all the questions";
    } else {
        outputMessage.innerText = `Your score is ${score}`;
    }
    console.log("score", score);        
}




buttonSubmitAnswer.addEventListener("click", calculateScore);