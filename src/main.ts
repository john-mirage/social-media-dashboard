import "@styles/main.css";
import ThemeManager from "@scripts/theme-manager";
import socialMedias from "@data/social-medias";
import carretUpIcon from "@images/icon-up.svg";
import carretDownIcon from "@images/icon-down.svg";

interface Stat {
    value: string;
    type: string;
    update: number;
}

interface SocialMedia {
    name: string;
    account: string;
    logo: string;
    primary: Stat;
    secondary: Stat[];
}

const socialMediaGrid = document.querySelector("#social-media-grid") as HTMLDivElement;
const socialMediaTemplate = document.querySelector("#social-media-template") as HTMLTemplateElement;

const statGrid = document.querySelector("#stat-grid") as HTMLDivElement;
const statTemplate = document.querySelector("#stat-template") as HTMLTemplateElement;

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

socialMedias.forEach((socialMedia: SocialMedia) => {
    const socialMediaFragment = socialMediaTemplate.content.cloneNode(true) as HTMLElement;
    const statFragment = statTemplate.content.cloneNode(true);

    const socialMediaHeader = socialMediaFragment.querySelector(".social-media__header") as HTMLElement;
    const socialMediaLogo = socialMediaFragment.querySelector(".social-media__logo") as HTMLImageElement;
    const socialMediaAccount = socialMediaFragment.querySelector(".social-media__account") as HTMLParagraphElement;
    const socialMediaCount = socialMediaFragment.querySelector(".social-media__follower-count") as HTMLParagraphElement;
    const socialMediaType = socialMediaFragment.querySelector(".social-media__follower-type") as HTMLParagraphElement;
    const socialMediaCarretIcon = socialMediaFragment.querySelector(".social-media__carret-icon") as HTMLImageElement;
    const socialMediaUpdate = socialMediaFragment.querySelector(".social-media__update") as HTMLParagraphElement;
    socialMediaHeader.classList.add(`social-media__header--${socialMedia.name}`);
    socialMediaLogo.setAttribute("src", socialMedia.logo);
    socialMediaLogo.setAttribute("alt", socialMedia.name);
    socialMediaAccount.textContent = socialMedia.account;
    socialMediaCount.textContent = socialMedia.primary.value;
    socialMediaType.textContent = socialMedia.primary.type;
    socialMediaCarretIcon.setAttribute("src", socialMedia.primary.update > 0 ? carretUpIcon : carretDownIcon);
    socialMediaUpdate.classList.add(socialMedia.primary.update > 0 ? "social-media__update--increase" : "social-media__update--decrease");
    socialMediaUpdate.textContent = `${String(Math.abs(socialMedia.primary.update))} Today`;

    const socialMediaComment = document.createComment(socialMedia.name);
    socialMediaGrid.appendChild(socialMediaComment);
    socialMediaGrid.appendChild(socialMediaFragment);
});