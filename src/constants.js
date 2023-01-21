import github from "./pages/Contact/assets/github.jpg";
import whatsapp from "./pages/Contact/assets/whatsapp.jpg";
import linkedIn from "./pages/Contact/assets/linkedIn.jpg";

const constants = {
  Introduction: `I’m a Senior Full Stack Engineer with 5 years of professional software
    development experience using JavaScript & TypeScript (React, Next.js
    and Node.js). Currently, I’m part of an agile development team where
    I’m in charge of developing highly scalable and reliable applications
    using React.js, Next.js, Node.js, Vue.js & AWS in multiple
    environments including microservices & monolithic.`,
  primaryServices: [
    {
      title: "Web-Design",
      description:
        "I can create your website using Html and Css, I can work well with Css3, Css5. I have nice knowledge of Css libraries like Mui, Bootstrap, Antd...",
      number: "01",
    },
    {
      title: "Frontend",
      description:
        "I can create your website using React and Vue, I can work well with Next. I have nice knowledge of Ssr/Scg which I can achieve with NextJS",
      number: "02",
    },
    {
      title: "Backend",
      description:
        "I can create your website using Node and GoLang, I can work well with both. I have nice knowledge of Database design i-e NoSQL/SQL",
      number: "03",
    },
  ],
  secondaryServices: [
    {
      title: "Cloud Services",
      description:
        "I can host and maintain your website, I can work well with Aws. I have nice knowledge of scaling and improving application performance",
      number: "04",
    },
    {
      title: "Gaming",
      description:
        "I love to play e-games. If you are stuck at a level or want to achieve a higher Rank in any game. Just ping me up. I am the right guy for that job.",
      number: "05",
    },
    {
      title: "Chess",
      description:
        "This is the only service that I don't charge for. I love to play chess. If you are bored. Ping me up, as per my availaiblity I can play chess with you",
      number: "06",
    },
  ],
  testimonials: {
    hammad:
      "Under the internship of Sir Babar khan I have mastered few skills of JS which helped in my career a lot, Currently I am earning six figures and living a happy life, The credit goes to Sir Babar Khan",
    muneed:
      "After three months of internship with Sir Babar khan I was able to tackle complex problems. Sir Babar khan not only helped me technically but also taught me how to act professionally",
    jawad:
      "After my graduation I got lucky to have 3 months of internship with Sir Babar Khan, Free of cost and not a single penny was charged, I groomed technically and professionally very well. All thanks to Sir Babar khan",
  },
  contact: [
    {
      title: "Whatsapp",
      username: "+923339402825",
      message: "send me a message...",
      image: whatsapp,
      src: "https://api.whatsapp.com/send?phone=923339402825",
    },
    {
      username: "babar-khan-b809a5193",
      message: "Add me to your connections..",
      image: linkedIn,
      src: "https://www.linkedin.com/in/babar-khan-b809a5193/",
    },
    {
      username: "babarkhan32",
      message: "Follow me up...",
      image: github,
      src: "https://github.com/Babarkhan32",
    },
  ],
};

export default constants;
