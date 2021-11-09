/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

import { FaHtml5, FaAws, FaSnowflake, FaJava, FaPython, FaCode, FaDatabase } from "react-icons/fa";
import {
  SiApachekafka, SiApacheairflow, SiTerraform, SiAnsible, SiGnubash,
  SiJavascript, SiCplusplus, SiDbt, SiSaltstack, SiGithubactions, SiBamboo,
  SiBitbucket, SiSonarqube, SiApachemaven, SiTypescript, SiCss3, SiAngular,
  SiBootstrap, SiReact
} from "react-icons/si";



// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mayur Hadole",
  title: "Hi all, I'm Mayur",
  subTitle: emoji(
    "Software Developer with experience in event driven systems. Proficiency in operating multi-region distributed streaming platforms like Apache Kafka on AWS and On-premise. Ample software development life-cycle experience exercised from start to finish along with prominent communication skills and constructive attitude."
  ),
  resumeLink:
    "https://raw.githubusercontent.com/MayurHadole/awesome-cv/main/mayurhadole_cv_resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MayurHadole",
  linkedin: "https://www.linkedin.com/in/mayur-hadole/",
  gmail: "mayurhadole@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Programming",
  skills: [
    emoji("⚡ Kafka Admin"),
    emoji("⚡ Cloud Architect"),
    emoji("⚡ DevOps")
  ],

  /* Make Sure to include correct Icon name to view your icon
https://react-icons.github.io/react-icons */
  skillType: [{
    skillTypeName: "Programming",
    skills:
      [
        {
          skillName: "Java",
          iconName: FaJava
        },
        {
          skillName: "Python",
          iconName: FaPython
        },
        {
          skillName: "Bash",
          iconName: SiGnubash
        },
        {
          skillName: "JavaScript",
          iconName: SiJavascript
        },
        {
          skillName: "C/C++",
          iconName: SiCplusplus
        },
        {
          skillName: "VHDL",
          iconName: FaCode
        },
        {
          skillName: "Verilog",
          iconName: FaCode
        }
      ]
  },
  {
    skillTypeName: "Big Data",
    skills:
      [
        {
          skillName: "Kafka",
          iconName: SiApachekafka
        },
        {
          skillName: "Kafka connect",
          iconName: SiApachekafka
        },
        {
          skillName: "Airflow",
          iconName: SiApacheairflow
        },
        {
          skillName: "SQL",
          iconName: FaDatabase
        },
        {
          skillName: "Snowflake",
          iconName: FaSnowflake
        },
        {
          skillName: "DBT",
          iconName: SiDbt
        }
      ]
  },
  {
    skillTypeName: "DevOps Tools",
    skills:
      [
        {
          skillName: "Terraform",
          iconName: SiTerraform
        },
        {
          skillName: "Ansible",
          iconName: SiAnsible
        },
        {
          skillName: "SaltStack",
          iconName: SiSaltstack
        },
        {
          skillName: "GitHub Actions",
          iconName: SiGithubactions
        },
        {
          skillName: "Bamboo",
          iconName: SiBamboo
        },
        {
          skillName: "Maven",
          iconName: SiApachemaven
        },
        {
          skillName: "GitHub",
          iconName: SiDbt
        },
        {
          skillName: "BitBucket",
          iconName: SiBitbucket
        },
        {
          skillName: "SonarQube",
          iconName: SiSonarqube
        }
      ]
  },
  {
    skillTypeName: "Cloud",
    skills:
      [
        {
          skillName: "AWS EC2",
          iconName: FaAws
        },
        {
          skillName: "AWS S3",
          iconName: FaAws
        },
        {
          skillName: "Secrets Manager",
          iconName: FaAws
        },
        {
          skillName: "Lambda",
          iconName: FaAws
        },
        {
          skillName: "Managed Airflow",
          iconName: FaAws
        },
        {
          skillName: "SageMaker",
          iconName: FaAws
        },
        {
          skillName: "AWS IAM",
          iconName: FaAws
        },
        {
          skillName: "CloudFormation",
          iconName: FaAws
        },
        {
          skillName: "AWS SQS",
          iconName: FaAws
        },
        {
          skillName: "AWS SNS",
          iconName: FaAws
        },
        {
          skillName: "CloudWatch",
          iconName: FaAws
        },

      ]
  },
  {
    skillTypeName: "Web",
    skills:
      [
        {
          skillName: "HTML5",
          iconName: FaHtml5
        },
        {
          skillName: "CSS",
          iconName: SiCss3
        },
        {
          skillName: "JavaScript",
          iconName: SiJavascript
        },
        {
          skillName: "React",
          iconName: SiReact
        },
        {
          skillName: "Angular",
          iconName: SiAngular
        },
        {
          skillName: "Bootstrap",
          iconName: SiBootstrap
        },
        {
          skillName: "Typescript",
          iconName: SiTypescript
        },
        {
          skillName: "React",
          iconName: SiReact
        }
      ]
  },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Conestoga College",
      logo: require("./assets/images/conestogaLogo.png"),
      subHeader: "Post Grad Diploma in Embedded Systems Development",
      duration: "2016 - 2017",
      desc: "Dean's Honors List Recognition",
      descBullets: [
        "Relevant Courses: Operating Systems, Data Structures and Algorithms, Embedded Programming (C/C++)"
      ]
    },
    {
      schoolName: "Government Engineering College, Gandhinagar",
      logo: require("./assets/images/GECGlogo.png"),
      subHeader: "Bachelor in Electronics & Communication Engineering",
      duration: "2012 - 2015",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Relevant Courses: C/C++ Programming, Verilog, VSDL, Communication Skills "]
    },
    {
      schoolName: "N. G. Patel Polytechnic",
      logo: require("./assets/images/ngppLogo.png"),
      subHeader: "Diploma in Electronics & Communication Engineering",
      duration: "2009 - 2012",
      desc: "Silver Medal (Recognition for Academic Achievement )",
      descBullets: ["Relevant Courses: C/C++ Programming, Verilog, VSDL, Communication Skills "]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "BMO Financial Group",
      companylogo: require("./assets/images/BMOlogo.png"),
      date: "January 2020 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Design, build, secure, implement and maintain Multi-data-center Kafka infrastructure.",
        "Build automation to provision, maintain, and monitor all aspects of the Kafka environment via infrastructure as code.",
        "To meet stringent Recovery Point Objective (RPO), converted traditional Kafka clusters to multi region clusters.",
        "Helped build real-time streaming data pipelines to reliably get data between systems and applications.",
        "Identify bottlenecks and tune to optimize Kafka performance and throughput.",
        "Built real-time streaming applications Kafka streams that transform & react to streams of data.",
        "Conceived and wrote detailed software implementations while ensuring that their code adhere to the security, logging, error handling, and performance standards and non-functional requirements.",
        "Automating on-boarding of clients to Kafka by developing CI/CD pipelines for Kafka Streams, Topics, ACLs, Schemas, Kafka Connectors etc.",
        "Skills:Application Development(Java, KafkaStreams, KafkaConnect, JUnit), Other(JSON, AVRO, WSDL, HTML, CSS3, JavaScript, Angular, Git, Ansible, Bamboo, Jira, Confluence)."

      ]
    },
    {
      role: "Software Developer",
      company: "Orbis Communications",
      companylogo: require("./assets/images/orbisLogo.png"),
      date: "October 2019 – May 2019",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Enhancement & bug fixes in jQuery/Java based product.",
        "Skills:Application Development(Java, Spring, JSP, Hibernate, SQL, JUnit, jQuery, JavaScript, HTML/CSS), Scripting(Bash, Python), Other(BitBucket, Jira, HTML/CSS)."
      ]
    },
    {
      role: "Software Developer",
      company: "TD Bank",
      companylogo: require("./assets/images/TDbankLogo.jpeg"),
      date: "March 2018 – June 2019",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Design & Develop Spring Batch jobs in Java using dependency management and build tool Maven.",
        "Develop SQL stored procedures to perform data intensive logic and Shell Scripts for file manipulation, Job dependencies etc.",
        "Develop SQL stored procedures to perform data intensive logic.",
        "Excellent time-management skills through deadline driven projects and tasks.",
        "Skills:Application Development(Java, Spring Batch, JDBC, Hibernate, JUnit), Scripting (Bash, Python), Other(Jenkins, Bitbucket, SonarQube, Confluence, Jira, HTML/CSS)."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

const gitHubProfile = {
  display: true, // Set true or false to show Contact profile using Github, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  display: false,
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Reach out to me!",
  number: "+1 226 505 8235",
  email_address: "mayurhadole@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  gitHubProfile,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
