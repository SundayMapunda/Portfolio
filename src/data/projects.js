const projects = [
  {
    title: "Agricultural Inputs Marketplace",
    type: "SYSTEM",
    status: "Completed",
    featured: true,

    description:
      "A digital marketplace connecting farmers with legitimate, government-registered agricultural input sellers.",

    problem:
      "Farmers can face difficulties finding trusted agricultural inputs locally, while unnecessary middlemen and long-distance travel can increase costs and inconvenience.",

    solution:
      "The platform allows farmers to discover and purchase seeds, fertilizers, pesticides and other agricultural inputs directly from registered sellers, with delivery options.",

    impact:
      "The system has been used by farmers across five regions in Tanzania's Southern and Eastern zones.",

    technologies: [
      "Python",
      "Django",
      "Web Application"
    ],

    image: null,

    links: {
      github: null,
      demo: null,
      playStore: null
    }
  },

  {
    title: "BodaLink",
    type: "Featured Project",
    status: "In Development",
    featured: true,

    description:
      "A ride-hailing platform designed to connect passengers with nearby bodaboda riders.",

    problem:
      "Finding an available and nearby bodaboda can be difficult, while passengers may have limited information about the rider, destination and expected fare before starting a trip.",

    solution:
      "BodaLink is designed to connect passengers with verified riders based on their availability and location, while providing trip and fare information through a digital platform.",

    impact:
      "The project is being developed as a practical digital solution for improving how passengers connect with local bodaboda services.",

    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST API"
    ],

    image: null,

    links: {
      github: "https://github.com/SundayMapunda",
      demo: null,
      playStore: null
    }
  },

{
  title: "WealthWise",
  type: "Mobile Application",
  status: "Published",
  featured: true,

  description:
    "An offline-first personal finance app that helps users track expenses, manage budgets, monitor financial goals, and understand their spending.",

  problem:
    "Manual expense tracking through notes and spreadsheets can make it difficult to monitor spending, review financial progress, and recognize when budget limits are approaching.",

  solution:
    "WealthWise provides expense tracking, budgeting, financial goals, reports, and alerts in a downloadable mobile app. It works offline and stores users' financial data locally on their devices.",

  impact:
    "Published on Google Play, with more than 500 downloads.",

  technologies: [
    "Flutter",
    "SQLite",
    "SharedPreferences",
    "Android Studio"
  ],

  image: "/images/wealthwise.png",

  links: {
    github: "/images/wealthwise",
    demo: "/images/wealthwise",
    playStore: "/images/wealthwise"
  }
}

];

export default projects;
