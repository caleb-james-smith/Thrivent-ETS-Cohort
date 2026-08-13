const loadUsersButton = document.getElementById("load-users");

async function loadData() {
    // const url = "FAKE_URL"; // Test fake URL
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    } catch (error) {
        console.log("Start of catch().");
        console.error(error.message);
        console.log("End of catch().");
    }
}

loadUsersButton.addEventListener("click", loadData);
