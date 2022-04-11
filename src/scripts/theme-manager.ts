class ThemeManager {
    theme?: string;

    /**
     * @constructor
     */
    constructor() {
        const localStorageHasTheme = "theme" in localStorage;
        const operatingSystemThemeIsLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        if (localStorageHasTheme) {
            const localTheme = localStorage.getItem("theme");
            switch (localTheme) {
                case "light":
                    this.setLightTheme();
                    break;
                case "dark":
                    this.setDarkTheme();
                    break;
                default:
                    throw new Error("The theme is invalid");
            }
        } else if (operatingSystemThemeIsLight) {
            this.setLightTheme();
        } else {
            this.setDarkTheme();
        }
    }

    /**
     * Set the local storage theme.
     */
    setLocalTheme() {
        const localTheme = localStorage.getItem("theme");
        switch (this.theme) {
            case "light":
                if (localTheme !== "light") localStorage.setItem("theme", "light");
                break;
            case "dark":
                if (localTheme !== "dark") localStorage.setItem("theme", "dark");
                break;
            default:
                throw new Error("The theme is invalid");
        }
    }

    /**
     * Toggle the theme.
     */
    toggleTheme() {
        switch (this.theme) {
            case "light":
                this.setDarkTheme();
                break;
            case "dark":
                this.setLightTheme();
                break;
            default:
                throw new Error("The theme is invalid");
        }
    }

    /**
     * Set the light theme
     */
    setLightTheme() {
        this.theme = "light";
        if (!document.documentElement.classList.contains("light")) {
            document.documentElement.classList.add("light");
        }
        this.setLocalTheme();
    }

    /**
     * Set the dark theme.
     */
    setDarkTheme() {
        this.theme = "dark";
        if (document.documentElement.classList.contains("light")) {
            document.documentElement.classList.remove("light");
        }
        this.setLocalTheme();
    }

}

export default ThemeManager;