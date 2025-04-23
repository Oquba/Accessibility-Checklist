// Counter for the question
var qCount = 0;
// Variable for score
var score = 0;

var scorePercent = 0;

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
    {
        question: "Question 7",
        choices: yn
    },
    {
        question: "Question 8",
        choices: yn
    },
    {
        question: "Question 9",
        choices: yn
    },
    {
        question: "Question 10",
        choices: yn
    },
];

// Array to hold the responses given
let responses = [];

document.querySelector(".start-quiz").addEventListener("click", function() {
    qCount = 0;
    responses = [];
    document.querySelector(".view-results").style.display="none";
    document.getElementById("progress").textContent = "Question : " + (qCount+1) + "/" + questions.length;

    document.querySelector(".question").innerHTML = "<h1>" + questions[qCount].question + "</h1>";
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
    scorePercent = (score/questions.length) * 100;
    scorePercent = scorePercent.toFixed(2);
}

function getRemark() {
    if (scorePercent >= 90) {
        return "Excellent Accessibility: Your app is highly accessible! Great job ahearing to accessibility standards."
    } 
    else if (scorePercent >= 70) {
        return "Good Effort: Your app meets most accessibility criteria, but there is room for improvement";
    }
    else if (scorePercent >= 50) {
        return "Needs Improvement: Several key accessibility areas need attention.";
    }
    else if (scorePercent >= 30) {
        return "Low Accessibility: Many issues found.";
    }
    else {
        return "Inaccessible: Your app currently does not meet accessibility standards.";
    }
}

document.querySelector(".view-results").addEventListener("click", function() {
    calculateScore();
    document.querySelector(".results-score").innerHTML="Accessibility Score : " + scorePercent + "%";
    document.querySelector(".yes-count").innerHTML="You answered yes to " + score + " question(s).";
    remark = getRemark();
    document.querySelector(".remark").innerHTML = remark;
});

document.getElementById("restart").addEventListener("click", function() {
    location.reload();
});