// Buttons
const toggleLoginButton = document.getElementById("toggle-login");
const changeThemeButton = document.getElementById("change-theme");

// Containers
const userInfoContainer = document.getElementById("user-info-container");

// Elements
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
        theme: "light-mode",
        nickname: "Jimmy"
        // nickname: ""
    },
    hobbies: ["ultimate frisbee", "swing dancing", "speedcubing", "chess", "StarCraft II"]
    // hobbies: []
};

function displayUserProfile(user) {
    displayLoginStatus(user.isLoggedIn);
    displayWelcome(user.name);
    displayNickname(user.preferences.nickname);
    displayAddress(user.address.city, user.address.state);
    displayHobbies(user.hobbies);

    // Only show user info if the user is logged in
    if (user.isLoggedIn) {
        userInfoContainer.style.display = "block";
    } else {
        userInfoContainer.style.display = "none";
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
    const nickname_text = nickname ? nickname : "Guest";
    nicknameElement.textContent = `Nickname: ${nickname_text}`;
}

function displayAddress(city, state) {
    addressElement.textContent = `Address: ${city}, ${state}`;
}

function displayHobbies(hobbies) {
    const hobbies_text = hobbies.length > 0 ? hobbies.join(", ") : "None";
    hobbiesElement.textContent = `Hobbies: ${hobbies_text}`;
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

// If theme preference is set to dark mode, change theme.
(() => {
    if (user.preferences.theme === "dark-mode") {
        changeTheme();
    }
})();

displayUserProfile(user);

toggleLoginButton.addEventListener("click", toggleLogin);
changeThemeButton.addEventListener("click", changeTheme);
