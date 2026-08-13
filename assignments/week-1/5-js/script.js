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
    addToResults(text_task_count, "p");

    addToResults("Tasks (task, priority, status):", "p");

    for (let i = 0; i < tasks.length; i++)
    {
        let data = tasks[i];
        let text_task = `${data["task"]}, ${data["priority"]}, ${data["status"]}`;
        addToResults(text_task, "p");
    }
}

function addToResults(message, tag) {
    const new_element = document.createElement(tag);
    new_element.textContent = message;
    results.appendChild(new_element);
}

taskForm.addEventListener("submit", updateOutput);

console.log("End of script.js.");
