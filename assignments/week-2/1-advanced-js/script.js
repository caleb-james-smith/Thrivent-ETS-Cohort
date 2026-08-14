const changeThemeButton = document.getElementById("change-theme");

function changeTheme() {
   document.body.classList.toggle("dark-mode");
}

changeThemeButton.addEventListener("click", changeTheme);
