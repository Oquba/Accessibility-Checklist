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
        id: 1,
        question: "Is the text size scalable through device settings?",
        category: "Text and Typography"
    },
    {
        id: 2,
        question: "Do all text elements meet a minimum contrast ratio of 4.5:1 against their background?",
        category: "Text and Typography"
    },
    {
        id: 3,
        question: "Is there sufficient spacing between lines and paragraphs to improve readability?",
        category: "Text and Typography"
    },    
    {
        id: 4,
        question: "Are all fonts legible and not overly decorative?",
        category: "Text and Typography"
    },    
    {
        id: 5,
        question: "Are all touch targets (buttons, links, etc) at least 44x44 dp in size?",
        category: "Touch Targets and Navgation"
    },    
    {
        id: 6,
        question: "Can users navigate the app using only one hand?",
        category: "Touch Targets and Navgation"
    },
    {
        id: 7,
        question: "Are tappable elements placed far enough apart to avoid accidental taps?",
        category: "Touch Targets and Navgation"
    },
    {
        id: 8,
        question: "Can the app be navigated using only external keyboard or switch access?",
        category: "Touch Targets and Navgation"
    },
    {
        id: 9,
        question: "Is color never the only means used to convey information?",
        category: "Color and Visual Indicators"
    },
    {
        id: 10,
        question: "Are error states (e.g. invalid inputs) communicated with both color and text/icons?",
        category: "Color and Visual Indicators"
    },
    {
        id: 11,
        question: "Is there an option to enable high-contrast mode or dark mode?",
        category: "Color and Visual Indicators"
    },
    {
        id: 12,
        question: "Are animations or flashing elements disabled or limited to prevent seizures?",
        category: "Color and Visual Indicators"
    },
];

// Array to hold the responses given
let responses = [];

document.querySelector(".start-quiz").addEventListener("click", function() {
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

function togglePopup() {
    const popup = document.getElementById("popup");
    popup.classList.toggle("hidden");
  }
  