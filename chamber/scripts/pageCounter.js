// Time stamp and visitor message
document.addEventListener("DOMContentLoaded", function () {
    const daysElement = document.querySelector(".visitor");
    const lastVisitDate = localStorage.getItem("lastVisitDate");

    if (!lastVisitDate) {
        daysElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const storedDate = new Date(lastVisitDate);

        const timeDifference = currentDate - storedDate;

        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 1) {
            daysElement.textContent = "You last visited 1 day ago.";
        } else if (daysDifference < 1) {
            daysElement.textContent = "Back so soon! Awesome!";
        } else {
            daysElement.textContent = `You last visited ${daysDifference} days ago.`;
        }
        // console.log(daysElement);
    }

    localStorage.setItem("lastVisitDate", currentDate.toString());
})


// Programs and tracks number of time page is visited
const visitsDisplays = document.querySelectorAll(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

visitsDisplays.forEach((visitsDisplay) => {
    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = `This is your first visit ❣`
        numVisits = 1;
    }
});

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);