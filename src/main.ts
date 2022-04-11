import "@styles/reset.css";
import "@styles/variables.css";
import "@styles/globals.css";

import "@styles/components/page.css";
import "@styles/components/header.css";
import "@styles/components/toggle-button.css";
import "@styles/components/dashboard.css";
import "@styles/components/social-media.css";
import "@styles/components/stat.css";

import ThemeManager from "@scripts/theme-manager";

const themeButton = document.getElementById("theme-switcher") as HTMLInputElement;

const themeManager = new ThemeManager();

if (themeManager.theme === "light") themeButton.checked = true;

themeButton.addEventListener("change", () => {
    themeManager.toggleTheme()
});

themeButton.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        themeManager.toggleTheme();
        themeButton.checked = !themeButton.checked;
    }
});