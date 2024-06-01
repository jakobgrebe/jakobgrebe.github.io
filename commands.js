document.addEventListener('DOMContentLoaded', () => {
  const aboutMe = [
      "<br>",
      "Welcome👋 My name is Jakob Grebe!",
      "<br>",
      "I am currently a Software Engineering Student at Colorado State University!",
      "<br>",
      "I love the world of technology and am very eager to enter the workforce quickly after graduation, in May 2025!",
      "<br>",
      "I currently work as a Kitchen Leader at Chipotle Mexican Grill—yes, I'm a certified burrito master! 🌯 Every moment here has been a blast.",
      "Chipotle has transformed me into a teamwork ninja, a problem-solving guru, a time-management wizard, and a leadership champ",
      "(you know, those skills everyone claims they have, but mine come with extra guac).",
      "<br>",
      "I also had a summer job as a Door-to-Door Salesman for Alder Home Protection.",
      "It was a spontaneous adventure with friends that turned into a crash course in life skills.",
      "This job wasn't just about knocking on doors;",
      "it sharpened my communication, resilience, and negotiation skills in ways I never imagined.",
      "Plus, I now have some great stories about convincing people to trust their homes to a stranger on their doorstep!",
      "<br>",
      "I've always wanted to create an online portfolio website and decided that this would be a cool, unique way to approach it!",
      "With a bunch of time, and some help from coding YouTube gurus, I was able to create this Terminal Portfolio Website!",
      "<br>",
      "I hope you like it!",
      "<br>"
  ];

  const social = [
      "<br>",
      'linkedin       <a href="https://www.linkedin.com/in/jakobgrebe/" target="_blank">linkedin/jakobgrebe</a>',
      'instagram      <a href="https://www.instagram.com/jakobgrebe/" target="_blank">instagram/jakobgrebe</a>',
      'github         <a href="https://github.com/jgrebe/" target="_blank">github/jgrebe</a>',
      "<br>"
  ];

  const projects = [
      "<br>",
      "",
      "<br>"
  ];

  const education = [
      "<br>",
      "",
      "<br>"
  ];

  const help = [
      "<br>",
      '<span class="command">whois</span>          Who is Jakob Grebe?',
      '<span class="command">summary</span>        The hardcore stuff!',
      '<span class="command">education</span>      Where I go everyday!!',
      '<span class="command">resume</span>         Ooo so professional',
      '<span class="command">social</span>         Display social networks',
      '<span class="command">projects</span>       View my awesome projects',
      '<span class="command">history</span>        View command history',
      '<span class="command">help</span>           This has gotta be self explanatory right?',
      '<span class="command">email</span>          Best form of contact!!!',
      '<span class="command">clear</span>          Clear terminal',
      '<span class="command">banner</span>         Display the header',
      "<br>",
  ];

  const banner = [
      "   __        _         _         ___          _              ___           _    __       _ _        ",
      "   \\ \\  __ _| | _____ | |__     / _ \\_ __ ___| |__   ___    / _ \\___  _ __| |_ / _| ___ | (_) ___   ",
      "    \\ \\/ _` | |/ / _ \\| '_ \\   / /_\\/ '__/ _ \\ '_ \\ / _ \\  / /_)/ _ \\| '__| __| |_ / _ \\| | |/ _ \\  ",
      " /\\_/ / (_| |   < (_) | |_) | / /_\\\\| | |  __/ |_) |  __/ / ___/ (_) | |  | |_|  _| (_) | | | (_) | ",
      " \\___/ \\__,_|_|\\_\\___/|_.__/  \\____/|_|  \\___|_.__/ \\___| \\/    \\___/|_|   \\__|_|  \\___/|_|_|\\___/  ",
      '<span class="color2">Welcome to my interactive Terminal Portfolio.</span>',
      '<span class="color2">For a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
  ];

  function injectContent(contentArray) {
      const container = document.createElement('div');
      container.classList.add('ascii-art');
      contentArray.forEach(line => {
          container.innerHTML += line + '\n';
      });
      document.body.appendChild(container);
  }

  injectContent(banner);
});