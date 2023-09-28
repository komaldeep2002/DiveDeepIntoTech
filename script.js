document.getElementById("next-button").addEventListener("click", function () {
    var currentPage = window.location.pathname;
    var currentPageNumber = extractPageNumber(currentPage);

    if (currentPageNumber !== null) {
        var nextPageNumber = currentPageNumber + 1;
        var nextPageURL = "lesson" + nextPageNumber + ".html";
        window.location.href = nextPageURL;
    }
});

document.getElementById("previous-button").addEventListener("click", function () {
    var currentPage = window.location.pathname;
    var currentPageNumber = extractPageNumber(currentPage);

    if (currentPageNumber !== null && currentPageNumber > 1) {
        var previousPageNumber = currentPageNumber - 1;
        var previousPageURL = "lesson" + previousPageNumber + ".html";
        window.location.href = previousPageURL;
    }
});

document.getElementById("quiz-button").addEventListener("click", function () {
    var currentPage = window.location.pathname;
    var currentPageNumber = extractPageNumber(currentPage);

    if (currentPageNumber !== null && currentPageNumber > 1) {
        var previousQuizPageNumber = currentPageNumber - 1;
        var quizPageURL = "quiz" + previousQuizPageNumber + ".html";
        window.location.href = quizPageURL;
    }
});

function extractPageNumber(url) {
    var match = url.match(/lesson(\d+)\.html/);
    if (match && match[1]) {
        return parseInt(match[1], 10);
    }
    return null;
}

// JavaScript to toggle the navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navbar = document.querySelector(".navbar");

    toggleButton.addEventListener("click", function () {
        navbar.classList.toggle("open");
        toggleButton.classList.toggle("active");
    });
});


// Get all menu links by their class name
const menuLinks = document.querySelectorAll('.menu-bar a');

// Add click event listeners to each menu link
menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent the default behavior of anchor links (preventing page reload)
        event.preventDefault();

        // Get the href attribute of the clicked link
        const href = link.getAttribute('href');

        // Navigate to the selected page
        window.location.href = href;
    });
});

