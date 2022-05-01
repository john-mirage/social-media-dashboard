import "@styles/main.css";
import ThemeManager from "@scripts/theme-manager";

const themeButton = document.getElementById("theme-switcher") as HTMLInputElement;

const themeManager = new ThemeManager();

if (themeManager.theme === "light") themeButton.checked = true;

themeButton.addEventListener("change", () => {
    themeManager.toggleTheme();
});

themeButton.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        themeManager.toggleTheme();
        themeButton.checked = !themeButton.checked;
    }
});