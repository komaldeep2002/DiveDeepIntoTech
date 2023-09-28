document.getElementById("quiz-back-button").addEventListener("click", function () {
    // Redirect back to Lesson 1
    window.location.href = "lesson4.html";
});

document.getElementById("quiz-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission (page reload)

    // Retrieve user's answers from radio buttons
    var answer1 = document.querySelector('input[name="question1"]:checked');
    var answer2 = document.querySelector('input[name="question2"]:checked');
    var answer3 = document.querySelector('input[name="question3"]:checked');
    var answer4 = document.querySelector('input[name="question4"]:checked');
    var answer5 = document.querySelector('input[name="question5"]:checked');
    var answer6 = document.querySelector('input[name="question6"]:checked');
    var answer7 = document.querySelector('input[name="question7"]:checked');
    var answer8 = document.querySelector('input[name="question8"]:checked');

    // Check answers and provide feedback
    var feedback = document.getElementById("quiz-feedback");
    feedback.innerHTML = ""; // Clear previous feedback

    var incorrectQuestions = []; // Store question numbers with incorrect answers
    var unansweredQuestions = []; // Store question numbers that weren't answered

    if (!answer1) {
        unansweredQuestions.push(1);
    } else if (answer1.value !== "B") {
        incorrectQuestions.push(1);
    }
    if (!answer2) {
        unansweredQuestions.push(2);
    } else if (answer2.value !== "D") {
        incorrectQuestions.push(2);
    }
    if (!answer3) {
        unansweredQuestions.push(3);
    } else if (answer3.value !== "B") {
        incorrectQuestions.push(3);
    }
    if (!answer4) {
        unansweredQuestions.push(4);
    } else if (answer4.value !== "C") {
        incorrectQuestions.push(4);
    }
    if (!answer5) {
        unansweredQuestions.push(5);
    } else if (answer5.value !== "D") {
        incorrectQuestions.push(5);
    }
    if (!answer6) {
        unansweredQuestions.push(6);
    } else if (answer6.value !== "C") {
        incorrectQuestions.push(6);
    }
    if (!answer7) {
        unansweredQuestions.push(7);
    } else if (answer7.value !== "C") {
        incorrectQuestions.push(7);
    }
    if (!answer8) {
        unansweredQuestions.push(8);
    } else if (answer8.value !== "D") {
        incorrectQuestions.push(8);
    }

    var feedbackMessage = "";

    if (incorrectQuestions.length === 0 && unansweredQuestions.length === 0) {
        feedbackMessage = '<p class="correct-answer">Congratulations! You got all the answers right.</p>';
    } else {
        if (incorrectQuestions.length > 0) {
            feedbackMessage += '<p class="incorrect-answer">You answered the following questions incorrectly:</p>';
            for (var i = 0; i < incorrectQuestions.length; i++) {
                feedbackMessage += `<p class="incorrect-answer">Question ${incorrectQuestions[i]}</p>`;
            }
        }
        if (unansweredQuestions.length > 0) {
            feedbackMessage += '<p class="incorrect-answer">You didn\'t answer the following questions:</p>';
            for (var i = 0; i < unansweredQuestions.length; i++) {
                feedbackMessage += `<p class="incorrect-answer">Question ${unansweredQuestions[i]}</p>`;
            }
        }
        feedbackMessage += '<p class="incorrect-answer">Please try again.</p>';
    }
    feedback.innerHTML = feedbackMessage;
});
