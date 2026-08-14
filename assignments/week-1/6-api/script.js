const loadUsersButton = document.getElementById("load-users");
const results = document.getElementById("results");

async function loadData() {
    console.log("Loading user data...");

    // URL for HTTP request
    // const url = "FAKE_URL"; // Test fake URL
    const url = "https://jsonplaceholder.typicode.com/users";
    const user_data = await getData(url);

    updateResults(user_data);
    
    console.log("Done!");
}

async function getData(url) {
    let data = [];
    try {
        // Send HTTP request to URL using fetch()
        const response = await fetch(url);
        console.log(`response status: ${response.status}`);
        if (!response.ok) {
            throw new Error(`Response was not OK; response status: ${response.status}`);
        }

        // Get data from response in JSON format
        data = await response.json();
    } catch (error) {
        console.error(error.message);
    }
    return data;
}

function updateResults(user_data) {
    // Remove all children (nodes).
    results.replaceChildren();

    const num_users = user_data.length;
    const text_num_users = `Number of users: ${num_users}`;
    addToResults(text_num_users, "p");
    console.log(text_num_users);

    for (let i = 0; i < num_users; i++) {
        const name = user_data[i]["name"];
        const email = user_data[i]["email"];
        const text_results = `${i}: ${name}, ${email}`;
        addToResults(text_results, "p");
        console.log(text_results);
    }
}

function addToResults(message, tag) {
    const new_element = document.createElement(tag);
    new_element.textContent = message;
    results.appendChild(new_element);
}

loadUsersButton.addEventListener("click", loadData);
