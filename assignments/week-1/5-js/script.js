console.log("Start of script.js.");

const taskForm = document.querySelector("#task-form");
const task = document.querySelector("#task");
const priority = document.querySelector("#priority");
const status = document.querySelector("#status");
const taskList = document.querySelector("#task-list");

const tasks = [];

function updateOutput(event) {
    event.preventDefault();
    
    console.log("Updating output...");

    const data = {
        "task": task.value,
        "priority": priority.value,
        "status": status.value
    };
    tasks.push(data);
    
    /*
    for (let i = 0; i < tasks.length; i++)
    {
        showTask(data);
    }
    */
   showTask(`${data["task"]}, ${data["priority"]}, ${data["status"]}`);

    console.log("Done!");
}

function showTask(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    taskList.appendChild(paragraph);
}

taskForm.addEventListener("submit", updateOutput);

console.log("End of script.js.");
