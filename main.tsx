/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  author: "Stephen Farmer",
  title: "majorcode",
  description: 'Why "major?" No reason, really.',
  avatar: "major.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:sfarmer@majorcode.com" },
    { title: "GitHub", url: "https://github.com/majorcode" },
    { title: "Twitter", url: "https://twitter.com/majorcode" },
  ],
  lang: "en",
  // dateFormat: (date: Date) => date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
  canonicalUrl: "https://www.majorcode.com",
  theme: "light",
  favicon: "major.svg",
});
