// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
// import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/js.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
// import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
// import springbootLogo from "./assets/tech_logo/springboot.png";
// import nodejsLogo from "./assets/tech_logo/nodejs.png";
// import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import jwtLogo from "./assets/tech_logo/jwt.png";
import apiLogo from "./assets/tech_logo/restapi.png";
// import cLogo from "./assets/tech_logo/c.png";
// import cppLogo from "./assets/tech_logo/cpp.png";
// import javaLogo from "./assets/tech_logo/java.png";
// import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/ts.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import phpLogo from "./assets/tech_logo/PHP.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import laravelLogo from "./assets/tech_logo/laravel.png";
// import csharpLogo from "./assets/tech_logo/csharp.png";


// Experience Section Logo's
import webverseLogo from "./assets/company_logo/ask.png";
import agcLogo from "./assets/company_logo/osiyatech.png";
// import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
// import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/tgp.png";
import vpsLogo from "./assets/education_logo/sunflower.png";

// Project Section Logo's
import githubdetLogo from "./assets/proejct_logo/delivron.png";
import fineduLogo from "./assets/proejct_logo/finduquest.png";
import nutrihealthLogo from "./assets/proejct_logo/nutrihealth.png";
import perfectimpressionLogo from "./assets/proejct_logo/perfectimpresstion.png";
import swarsadhanaLogo from "./assets/proejct_logo/swarsadhana.png";
import rocketAgarbattiLogo from "./assets/proejct_logo/rocketagrbatti.png";
import srcaLogo from "./assets/proejct_logo/srca.png";
import kailtechLogo from "./assets/proejct_logo/kailtech.png";
import nagardasLogo from "./assets/proejct_logo/nagardas.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel", logo: laravelLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "REST API", logo: apiLogo },
      { name: "JWT", logo: jwtLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java Script", logo: javascriptLogo },
      { name: "Type Script", logo: typescriptLogo },
      { name: "PHP", logo: phpLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Post man", logo: postmanLogo },
      
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      // { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Ask Innovations",
    date: "August 2025 - Present",
    desc: "Developed dynamic and scalable web applications handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "MySQL",
      "Redux",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Frontend Developer (Internship)",
    company: "Osiyatech",
    date: "Jan 2022 - Jun 2022 (6 months)",
    desc: "Contributed to innovative projects as a Frontend Developer Intern, leading frontend technologies such as HTML, CSS, and JavaScript. Developed high-performance web applications and improved user experience through seamless integration of various technologies.",
    skills: ["JavaScript", "HTML", "CSS", "Bootstrap"],
  },
];


export const education = [
  {
    id: 0,
    img: bsaLogo,
    school: "TGPCET College, Nagpur, (MH)",
    date: "Sept 2015 - Aug 2019",
    grade: "75%",
    desc: "I completed my Bachelor's degree in Computer Science & Engineering (B.E.) from TGPCET College, Nagpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at TGPCET College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Engineering - B.E. (Computer Science & Engineering)",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "Sunflower Eng & Hindi Higher Secondary School, Mohgaon Haveli (MP)",
    date: "Apr 2014 - March 2015",
    grade: "76%",
    desc: "I completed my class 12 education from Sunflower Eng & Hindi Higher Secondary School, Mohgaon Haveli, under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "MP(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Sunflower Eng & Hindi Higher Secondary School, Mohgaon Haveli (MP)",
    date: "Apr 2012 - March 2013",
    grade: "86.6%",
    desc: "I completed my class 10 education from Sunflower Eng & Hindi Higher Secondary School, Mohgaon Haveli, under the MP board, where I studied Science with Computer.",
    degree: "MP(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title:
      "Delivron Transporter – Complete Logistics & Financial Management Platform",
    description:
      "A full-stack logistics and transport management solution built with javascript, Laravel, and MySQL. Delivron integrates advanced APIs like Alkit (E-Waybill, GST) and ICICI NEFT voucher (Tally) to provide seamless delivery, financial, and compliance workflows. The system offers transporters and businesses an intuitive dashboard, secure API-driven processes, and reliable nationwide logistics services under Khandelwal Roadlines.",
    image: githubdetLogo,
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Laravel",
      "MySQL",
      "REST API",
      "Alkit API",
      "ICICI NEFT",
      "Tally ERP",
    ],
    webapp: "https://delivron.in/",
    features: [
      "Automated E-Waybill generation with Alkit API",
      "GST compliance & reporting",
      "ICICI NEFT voucher integration with Tally",
      "Intuitive JavaScript dashboard",
      "Real-time transport tracking & invoicing",
      "Secure REST API-driven workflows",
    ],
    role: "Full Stack Developer (JavaScript, Laravel, MySQL)",
    techlong: {
      frontend: ["JavaScript (ES6+)", "HTML5", "CSS3"],
      backend: ["Laravel", "REST APIs"],
      database: ["MySQL"],
      apis: ["Alkit E-Waybill", "Alkit GST", "ICICI NEFT Voucher (Tally)"],
    },
    database: {
      type: "MySQL",
      design:
        "Relational schema with optimized indexing for invoices, transport data & vouchers",
      features: [
        "Transactions",
        "Joins",
        "Stored Procedures",
        "Data Integrity Constraints",
      ],
    },
  },
  {
    id: 1,
    title:
      "Fin-Edu Quest – Financial Literacy Exam & School Management Platform",
    description:
      "A full-stack platform designed to integrate financial literacy into education from Class 1 onwards. Fin-Edu Quest empowers schools and students by conducting structured financial literacy exams, managing registrations, and tracking student progress. The system includes role-based dashboards for schools, channel partners, and administrators, making the process seamless and transparent.",
    image: fineduLogo,
    tags: [
      "Laravel",

      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "REST API",
    ],
    webapp: "https://fineduquest.com/",
    features: [
      "Student & school registration management",
      "Channel partner onboarding & code management",
      "Financial literacy exam scheduling & tracking",
      "Admin dashboard with approval workflows",
      "Real-time student progress reports",
      "Secure multi-role login (Admin, School, Channel Partner)",
    ],
    role: "Full Stack Developer (Laravel, PHP, MySQL)",
    techlong: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      backend: ["Laravel", "PHP"],
      database: ["MySQL"],
      apis: ["Custom REST APIs for data exchange & reporting"],
    },
    database: {
      type: "MySQL",
      design:
        "Normalized relational schema for students, schools, exams, and channel partners",
      features: [
        "Relational data integrity",
        "Role-based access",
        "Exam results & progress tracking",
        "Efficient search & filters for student data",
      ],
    },
  },
  {
    id: 2,
    title: "Nutrihealth Nourishers – Your Path to Lifelong Health & Happiness",
    description:
      "A full-stack health and wellness platform offering personalized nutrition programs, progress tracking, and community support. Nutrihealth Nourishers integrates structured meal plans, blood report analysis, WhatsApp support, and consultations with nutritionists, medical specialists, and psychologists. It also includes a shopping list generator and an e-commerce shop page for health products, enabling a complete digital health ecosystem.",
    image: nutrihealthLogo,
    tags: [
      "Laravel",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "REST API",
    ],
    webapp: "https://nutrihealthgenie.com",
    features: [
      "Personalized meal plans (1, 3, 6, 9, 12 months)",
      "Blood report analysis integration",
      "WhatsApp-based diet & health support",
      "Progress monitoring calls with nutritionists",
      "Consultations with medical specialists & psychologists",
      "Shopping list & healthy product recommendations",
      "Community and shop page for engagement",
    ],
    role: "Full Stack Developer (Laravel, PHP, MySQL)",
    techlong: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      backend: ["Laravel", "PHP"],
      database: ["MySQL"],
      apis: ["Custom REST APIs for progress tracking, reports & e-commerce"],
    },
    database: {
      type: "MySQL",
      design:
        "Relational schema for users, programs, consultations, and products",
      features: [
        "Meal plan scheduling & subscription tracking",
        "Progress tracking tables",
        "Shopping list & product catalog",
        "Role-based access for admins, users & specialists",
      ],
    },
  },
  {
    id: 3,
    title: "Perfect Impressions Factory – Smart Gifting & E-Commerce Platform",
    description:
      "An e-commerce gifting platform offering personalized hampers, festive gifts, decor items, and more. Built with modern web technologies, the platform integrates advanced features like coupons, referral codes, gift cards, and customer chat support. It provides a seamless shopping experience with user-friendly navigation, wishlist, and secure cart & checkout system.",
    image: perfectimpressionLogo,
    tags: ["vue.js", "HTML5", "CSS3", "MongoDB", "REST API", "E-commerce"],
    webapp: "https://perfectimpression.in/",
    features: [
      "Wide range of personalized gift hampers & festive collections",
      "Coupon system – worth up to ₹150",
      "Gift cards starting from ₹1000",
      "Referral system – Earn ₹150 per referral",
      "Wishlist & Add to Cart functionality",
      "Secure checkout & order management",
      "Customer chat support (11 AM – 7 PM)",
    ],
    role: "Full Stack Developer (Vue.js, MySQL)",
    techlong: {
      frontend: ["Vue.js", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      backend: ["Laravel"],
      database: ["MySQL"],
      apis: ["Custom REST APIs for cart, orders, referral, and coupon system"],
    },
    database: {
      type: "MySQL",
      design:
        "Document-based schema for products, coupons, gift cards, referrals, and orders",
      features: [
        "Coupon & referral tracking",
        "Gift card management",
        "Customer data & chat integration",
        "Shopping cart & order persistence",
      ],
    },
  },
  {
    id: 4,
    title:
      "Swar Sadhana Music Lovers Club – Music School & Event Management Platform",
    description:
      "A digital platform built for Swar Sadhana Music Lovers Club, a non-profit organization promoting Indian classical music since 2008. The system provides event ticket booking, membership management with annual renewals, and an online music school interface. It simplifies community engagement by enabling users to join as members, attend concerts, and renew memberships online.",
    image: swarsadhanaLogo,
    tags: [
      "Vue.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Event Management",
      "Payment Gateway",
    ],
    webapp: "https://www.swarsadhanamusicloversclub.com/",
    features: [
      "Online ticket booking for concerts and events",
      "Membership plans – valid for 1 year with renewal option",
      "Music school programs (Indian Classical Instrument & Vocal)",
      "Event calendar & updates for members",
      "Secure payment integration for tickets & memberships",
      "Admin panel to manage events, memberships, and renewals",
    ],
    role: "Full Stack Developer (Vue.js, Laravel, MySQL, Payment APIs)",
    techlong: {
      frontend: ["Vue.js", "Bootstrap", "CSS3", "JavaScript"],
      backend: ["Laravel"],
      database: ["MySQL"],
      apis: [
        "Payment Gateway APIs",
        "Custom REST APIs for events and membership renewal",
      ],
    },
    database: {
      type: "MySQL",
      design: "Schema for users, events, tickets, memberships, and renewals",
      features: [
        "Tracks active and expired memberships",
        "Stores ticket purchase history",
        "Event management with seat/ticket availability",
      ],
    },
  },
  {
    id: 5,
    title: "Rocket Agarbatti – E-Commerce Platform",
    description:
      "An online e-commerce platform developed for Rocket Agarbatti to showcase and sell their range of incense sticks, dhoop products, and room fresheners. The website features product categories, dynamic pricing with discounts, cart management, and secure checkout, providing customers a seamless online shopping experience.",
    image: rocketAgarbattiLogo,
    tags: [
      "HTML5",
      "JavaScript",
      "Bootstrap",
      "MySQL",
      "E-Commerce",
      "Payment Gateway",
    ],
    webapp: "https://rocketagarbatti.com/",
    features: [
      "Dynamic product catalog with categories (Dry Dhoop, Dhoop Zipper, Premium Wet Dhoop, Room Fresheners)",
      "Discounted pricing & promotional offers",
      "Cart and wishlist management",
      "Customer login / registration system",
      "Secure payment gateway integration",
      "Blog section for brand awareness",
      "Admin dashboard for managing products, stock, and offers",
    ],
    role: "Full Stack Developer (JavaScript, MySQL, API Integrations)",
    techlong: {
      frontend: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      backend: ['"PHP (Core)"'],
      database: ["MySQL"],
      apis: [
        "Payment Gateway APIs (Razorpay / Stripe)",
        "Custom REST APIs for cart & orders",
      ],
    },
    database: {
      type: "MySQL",
      design:
        "Schemas for products, categories, users, carts, orders, and discounts",
      features: [
        "Handles stock availability & inventory",
        "Stores order & customer purchase history",
        "Manages coupon codes & offers",
      ],
    },
  },
  {
    id: 6,
    title: "Shivika Rohilla Chess Academy – Learning Platform",
    description:
      "A professional web platform developed for Shivika Rohilla Chess Academy (SRCA), designed to promote chess learning and events. The platform allows students and parents to explore courses, register for classes, shop for chess-related products, and stay updated with academy activities. It combines learning management, event booking, and e-commerce in one solution.",
    image: srcaLogo,
    tags: ["Vue.js", "Laravel", "MySQL", "Payment Integration"],
    webapp: "https://srchessacademy.com/",
    features: [
      "Online course and academy information portal",
      "Student registration & login system",
      "Chess event booking & participation management",
      "E-commerce shop for chess boards, books, and accessories",
      "Blog & FAQs section for students and parents",
      "Gallery showcasing academy achievements",
      "Integrated payment system for course fees & product purchases",
      "Admin panel for managing courses, students, and shop products",
    ],
    role: "Full Stack Developer (React.js, Node.js, MongoDB, API Integration, Payments)",
    techlong: {
      frontend: ["Vue.js", "Bootstrap / TailwindCSS", "Framer Motion"],
      backend: ["Laravel"],
      database: ["MySQL"],
      apis: ["Payment Gateway API (Razorpay / Stripe)", "Custom REST APIs"],
    },
    database: {
      type: "MySQL",
      design:
        "Schemas for students, courses, events, shop products, orders, and transactions",
      features: [
        "Manages student enrollment & progress",
        "Stores order details for shop purchases",
        "Tracks event registrations & results",
        "Handles secure payment records",
      ],
    },
  },
  {
    id: 7,
    title: "Kailtech Lab Admin Panel – Calibration Management System",
    description:
      "An advanced admin panel built with React.js and Vite for managing calibration standards, equipment data, and lab processes. The backend is powered by Laravel APIs, ensuring secure data handling and smooth integration between frontend and database operations. The system allows admins to add, update, and manage calibration standards and related lab information efficiently.",
    image: kailtechLogo,
    tags: [
      "React.js",
      "Vite",
      "Laravel API",
      "REST API",
      "Admin Panel",
      "Bootstrap / TailwindCSS",
    ],
    webapp: "https://lab.kailtech.in/",
    features: [
      "Admin authentication and role-based access",
      "Dashboard for lab statistics and calibration tracking",
      "Calibration Standards List management (CRUD operations)",
      "Equipment and asset management",
      "API integration with Laravel backend",
      "Responsive and fast UI built using Vite and React",
      "Search, filter, and sort functionality for calibration data",
      "Export reports and records",
    ],
    role: "Frontend Developer (React.js, Vite) & API Integrator",
    techlong: {
      frontend: ["React.js", "Vite", "TailwindCSS / Bootstrap", "Axios"],
      backend: ["Laravel", "REST API"],
      database: ["MySQL"],
      apis: [
        "Custom Laravel APIs for calibration standards, assets, and users",
      ],
    },
    database: {
      type: "MySQL",
      design:
        "Relational schema for calibration standards, lab equipment, users, roles, and logs",
      features: [
        "Stores calibration standard details and history",
        "User and role management with access levels",
        "Tracks updates to equipment and calibration records",
        "Logs activity for security and compliance",
      ],
    },
  },

  {
    id: 8,
    title: "Nagardas CRM ",
    description:
      "A full-stack CRM platform developed for R. Nagardas & Co., designed to manage chemical distribution, testing workflows, and client relations. The system streamlines inward & outward entries, company & salesman management, status tracking, and reporting. With an intuitive dashboard, role-based access, and powerful reporting features, the CRM ensures efficiency in order handling, testing processes, and customer engagement.",
    image: nagardasLogo,
    tags: [
      "Laravel",
      "MySQL",
      "React.js",
      "JavaScript",
      "Bootstrap / TailwindCSS",
      "REST API",
    ],
    webapp: "https://scarbluu.com/crm/", 
    features: [
      "Inward Entry – Capture samples, consignor details, and testing requirements",
      "Outward Entry – Track delivery, status updates, and client reports",
      "Company, Group, Item, Courier & Salesman Master modules",
      "Status tracking – Approved, Rejected, Under Testing, Delivered, Stop Project",
      "Comprehensive report master with filters (date, company, item, city, salesman, status)",
      "Export & download reports for compliance and client sharing",
      "Role-based access for Admin, Salesman, and Staff",
    ],
    role: "Full Stack Developer (Laravel, JavaScript, MySQL)",
    techlong: {
      frontend: ["React.js", "Bootstrap / TailwindCSS", "JavaScript"],
      backend: ["Laravel", "REST API"],
      database: ["MySQL"],
      apis: [
        "Custom REST APIs for inward/outward entry",
        "Reporting APIs for master reports and status tracking",
      ],
    },
    database: {
      type: "MySQL",
      design:
        "Relational schema covering inward entries, outward entries, company masters, salesman masters, courier, and status logs",
      features: [
        "Normalized tables for masters (Company, Item, Salesman, Status)",
        "Logs to track history of entries and status updates",
        "Report tables for generating custom filters",
        "Data integrity with foreign key constraints",
      ],
    },
  },
];
