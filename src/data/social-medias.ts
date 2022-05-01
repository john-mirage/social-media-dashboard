import facebookLogo from "@images/icon-facebook.svg";
import twitterLogo from "@images/icon-twitter.svg";
import instagramLogo from "@images/icon-instagram.svg";
import youtubeLogo from "@images/icon-youtube.svg";

const socialMedias = [
  {
    name: "facebook",
    account: "@nathanf",
    logo: facebookLogo,
    order: "first",
    primary: {
      value: "1987",
      type: "followers",
      update: 12,
    },
    secondary: [
      {
        value: "87",
        type: "Page Views",
        update: 3,
      },
      {
        value: "52",
        type: "Likes",
        update: -2,
      }
    ],
  },
  {
    name: "twitter",
    account: "@nathanf",
    logo: twitterLogo,
    order: "third",
    primary: {
      value: "1044",
      type: "followers",
      update: 99,
    },
    secondary: [
      {
        value: "117",
        type: "Retweets",
        update: 303,
      },
      {
        value: "507",
        type: "Likes",
        update: 553,
      }
    ],
  },
  {
    name: "instagram",
    account: "@realnathanf",
    logo: instagramLogo,
    order: "second",
    primary: {
      value: "11k",
      type: "followers",
      update: 1099,
    },
    secondary: [
      {
        value: "5462",
        type: "Likes",
        update: 2257,
      },
      {
        value: "52k",
        type: "Profile Views",
        update: 1375,
      }
    ],
  },
  {
    name: "youtube",
    account: "Nathan F.",
    logo: youtubeLogo,
    order: "fourth",
    primary: {
      value: "8239",
      type: "subscribers",
      update: -144,
    },
    secondary: [
      {
        value: "107",
        type: "Likes",
        update: -19,
      },
      {
        value: "1407",
        type: "Total Views",
        update: -12,
      }
    ],
  }
];

export default socialMedias;