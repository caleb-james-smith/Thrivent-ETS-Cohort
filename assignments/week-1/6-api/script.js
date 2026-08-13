const loadUsersButton = document.getElementById("load-users");

async function loadData() {
    console.log("Loading user data...");

    // const url = "FAKE_URL"; // Test fake URL
    const url = "https://jsonplaceholder.typicode.com/users";
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const user_data = await response.json();
        const num_users = user_data.length;

        console.log(`Number of users: ${num_users}`);
        
        for (let i = 0; i < num_users; i++) {
            const name = user_data[i]["name"];
            const email = user_data[i]["email"];
            console.log(`${i}: ${name}, ${email}`);
        }

    } catch (error) {
        console.log("Start of catch().");
        console.error(error.message);
        console.log("End of catch().");
    }
    console.log("Done!");
}

loadUsersButton.addEventListener("click", loadData);
