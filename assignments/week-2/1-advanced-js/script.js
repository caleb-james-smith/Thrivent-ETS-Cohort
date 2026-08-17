const toggleLoginButton = document.getElementById("toggle-login");
const changeThemeButton = document.getElementById("change-theme");
const loginStatusElement = document.getElementById("login-status");
const welcomeElement = document.getElementById("welcome");
const nicknameElement = document.getElementById("nickname");
const addressElement = document.getElementById("address");
const hobbiesElement = document.getElementById("hobbies");

const user = {
    name: "Caleb Smith",
    age: 33,
    isLoggedIn: true,
    address: {
        city: "Lawrence",
        state: "Kansas"
    },
    preferences: {
        theme: "dark-mode",
        nickname: "Jimmy"
        // nickname: null
    },
    hobbies: ["ultimate frisbee", "swing dancing", "speedcubing", "chess", "StarCraft II"]
    // hobbies: []
};

function displayUserProfile(user) {
    displayLoginStatus(user.isLoggedIn);
    if (user.isLoggedIn) {
        displayWelcome(user.name);
        displayNickname(user.preferences.nickname);
        displayAddress(user.address.city, user.address.state);
        displayHobbies(user.hobbies);
    }
}

function displayLoginStatus(isLoggedIn) {
    if (isLoggedIn) {
        loginStatusElement.innerHTML = `<b>You are logged in.</b>`;
        loginStatusElement.style.color = "green";
    } else {
        loginStatusElement.innerHTML = `<b>You are not logged in.</b>`;
        loginStatusElement.style.color = "red";
    }
}

function displayWelcome(name) {
    welcomeElement.textContent = `Hello, ${name}!`;
}

function displayNickname(nickname) {
    if (nickname) {
        nicknameElement.textContent = `Nickname: ${nickname}`;
    } else {
        nicknameElement.textContent = `Nickname: Guest`;
    }
}

function displayAddress(city, state) {
    addressElement.textContent = `Address: ${city}, ${state}`;
}

function displayHobbies(hobbies) {
    if (hobbies) {
        hobbiesElement.textContent = `Hobbies: ${hobbies.join(", ")}`;
    } else {
        hobbiesElement.textContent = `Hobbies: None`;
    }
}

function toggleLogin() {
    if (user.isLoggedIn) {
        user.isLoggedIn = false;
    } else {
        user.isLoggedIn = true;
    }
    displayUserProfile(user);
}

function changeTheme() {
   document.body.classList.toggle("dark-mode");
}

displayUserProfile(user);

toggleLoginButton.addEventListener("click", toggleLogin);
changeThemeButton.addEventListener("click", changeTheme);
