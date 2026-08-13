console.log("Start of script.js.");

const taskForm = document.querySelector("#task-form");

function updateOutput(event) {
    event.preventDefault();

    console.log("Updating output...");
    console.log("Done!");
}

taskForm.addEventListener("submit", updateOutput);

console.log("End of script.js.");
