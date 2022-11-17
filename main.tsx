/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  author: "Stephen Farmer",
  title: "majorcode",
  description: 'Why "major?" No reason, really.',
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "major.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:sfarmer@majorcode.com" },
    { title: "GitHub", url: "https://github.com/majorcode" },
    { title: "Twitter", url: "https://twitter.com/majorcode" },
  ],
  lang: "en",
  dateStyle: "long",
  favicon: "major.svg",
});
