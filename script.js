// Counter for the question
var qCount = 0;
// Variable for score
var score = 0;

var displayScore = 0;

// Array to hold the "Yes" and "No" responses to avoid duplicate code
let yn = ["Yes", "No"];

// Array for questions, containing the quesiton itself as well as the the choice
let questions = [
    {
        question: "Test question 1",
        choices: yn
    },
    {
        question: "Question 2",
        choices: yn
    },
    {
        question: "Question 3",
        choices: yn
    },    
    {
        question: "Question 4",
        choices: yn
    },    
    {
        question: "Question 5",
        choices: yn
    },    
    {
        question: "Question 6",
        choices: yn
    },
];

// Array to hold the responses given
let responses = [];

document.querySelector(".start-quiz").addEventListener("click", function() {
    qCount = 0;
    responses = [];
    document.querySelector(".view-results").style.display="none";
    document.getElementById("progress").textContent="Question : "+(qCount+1)+"/"+questions.length;

    document.querySelector(".question").innerHTML="<h1>"+questions[qCount].question+"</h1>";
    for (i = 0; i < 2; i++) {
        document.getElementById("opt" + i).value=yn[i];
        document.getElementById("lb" + i).innerHTML=yn[i];
    };
});

document.querySelector(".go-next").addEventListener("click", function() {
    let selectedOption = document.querySelector('input[name="options"]:checked');

    if (!selectedOption) {
        alert("Please select an option before continuing");
        return;
    }

    responses.push(selectedOption.nextElementSibling.innerHTML);

    if (qCount < questions.length - 1) {
        qCount++;
    } 
    else {
        // Code for viewing results
        for(i = 0; i < responses.length; i++) {
            console.log(responses[i]);
        };
        document.querySelector(".go-next").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("progress").textContent="Question : " + (qCount+1 )+ "/" + questions.length;
    document.querySelector(".question").innerHTML="<h1>" + questions[qCount].question + "</h1>";
    for (i = 0; i < 2; i++) {
        document.getElementById("opt" + i).value = yn[i];
        document.getElementById("lb" + i).innerHTML = yn[i];
    };
});

function calculateScore() {
    score = 0;
    for (let i = 0; i < responses.length; i++) {
        if (responses[i] == "Yes") {
            score++;
        }
    }
    displayScore = (score/questions.length) * 100;
    displayScore = displayScore.toFixed(2);
}

document.querySelector(".view-results").addEventListener("click", function() {
    calculateScore();
    document.querySelector(".results-score").innerHTML="Accessibility Score : " + displayScore + "%";
    document.querySelector(".yes-count").innerHTML="You answered yes to " + score + " questions.";
});

document.getElementById("restart").addEventListener("click", function() {
    location.reload();
});