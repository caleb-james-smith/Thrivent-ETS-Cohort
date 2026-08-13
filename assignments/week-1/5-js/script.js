console.log("Start of script.js.");

const taskForm = document.querySelector("#task-form");
const task = document.querySelector("#task");
const priority = document.querySelector("#priority");
const status = document.querySelector("#status");
const results = document.querySelector("#results");

const tasks = [];

function updateOutput(event) {
    console.log("Updating output...");
    
    // Prevent default form submission behavior.
    event.preventDefault();
    
    const data = {
        "task": task.value,
        "priority": priority.value,
        "status": status.value
    };
    
    tasks.push(data);

    // Remove all children (nodes).
    results.replaceChildren();

    showResults(tasks);

    console.log("Done!");
}

function showResults(tasks) {
    let text_task_count = `Number of tasks: ${tasks.length}`;
    addParagraph(text_task_count, results);

    addParagraph("Tasks:", results);

    for (let i = 0; i < tasks.length; i++)
    {
        let data = tasks[i];
        let text_task = `${data["task"]}, ${data["priority"]}, ${data["status"]}`;
        addParagraph(text_task, results);
    }
}

function addParagraph(message, element) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    element.appendChild(paragraph);
}

taskForm.addEventListener("submit", updateOutput);

console.log("End of script.js.");
