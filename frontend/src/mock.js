// Mock data for Rasagna Varma's personal website

export const heroData = {
  name: "Buddharaju Rasagna Varma",
  role: "Operations Senior | Critical Incident Centre Management",
  tagline: "Red Accounts & Employee Impact India Lead at Salesforce",
  metrics: [
    { label: "Years Experience", value: 7, suffix: "+" },
    { label: "Speaking Sessions", value: 15, suffix: "+" },
    { label: "Team Members Led", value: 40, suffix: "+" },
    { label: "Uptime Maintained", value: 99, suffix: "%" }
  ]
};

export const bioData = {
  title: "Who is Rasagna?",
  narrative: [
    "A results-oriented leader who transforms chaos into clarity.",
    "With 7+ years at Salesforce, I've mastered the art of managing critical incidents while keeping customers at the heart of every decision.",
    "My leadership philosophy? Empower teams, embrace data, and never stop learning.",
    "From managing red account escalations to leading Employee Impact initiatives across India, I thrive in high-pressure environments where strategic thinking meets empathy.",
    "I believe in building cultures of inclusion, driving technical excellence, and creating systems that scale."
  ],
  values: [
    { icon: "Target", label: "Customer-Centric", description: "60% increase in team CSAT scores" },
    { icon: "Users", label: "Team Empowerment", description: "Leading 40+ professionals across India" },
    { icon: "TrendingUp", label: "Continuous Growth", description: "8 Salesforce certifications + PMP + Scrum Master" },
    { icon: "Shield", label: "Crisis Management", description: "99% uptime on Commerce Cloud platform" }
  ]
};

export const timelineData = [
  {
    id: 1,
    company: "Salesforce",
    role: "Escalate Manager (Operations Senior Analyst)",
    team: "Critical Incident Center, Red Accounts",
    dates: "June 2024 - Present",
    color: "#00FFD1",
    achievements: [
      "Lead executive escalations with strategic guidance and stakeholder communication",
      "Manage red account escalations across APAC region",
      "Drive process improvements for Basecamp and red account management",
      "Mentor APAC peers on investment requests and executive communications"
    ],
    impact: "Strategic Leadership"
  },
  {
    id: 2,
    company: "Salesforce",
    role: "Employee Impact India Program Manager",
    team: "Employee Impact India",
    dates: "November 2023 - Present",
    color: "#6FD2C0",
    achievements: [
      "Lead national Employee Impact initiatives across multiple offices",
      "Oversee organization-wide events with cross-functional teams",
      "Manage team of 40+ hub leads and members",
      "Champion employee-centric initiatives building culture of inclusion"
    ],
    impact: "National Leadership"
  },
  {
    id: 3,
    company: "Salesforce",
    role: "Duty Manager",
    team: "B2B Commerce Cloud",
    dates: "May 2023 - June 2024",
    color: "#FFD700",
    achievements: [
      "Managed 5 critical cases per shift maintaining 99% uptime",
      "Led team of 16 technical support professionals",
      "Increased team's average CSAT score by 60%",
      "Delivered performance reviews and mentoring programs"
    ],
    impact: "60% CSAT Increase"
  },
  {
    id: 4,
    company: "Salesforce",
    role: "Technical Support Engineer",
    team: "Core Developer Support",
    dates: "March 2021 - June 2024",
    color: "#00FFD1",
    achievements: [
      "Built credibility as mentor and escalation point",
      "Raised multiple product bugs for B2B Commerce Cloud",
      "Published knowledge articles for user education",
      "Led CI/CD implementation initiatives using SFDX"
    ],
    impact: "Technical Excellence"
  },
  {
    id: 5,
    company: "Docmation Technologies",
    role: "Salesforce Engineer",
    team: "Implementation Team",
    dates: "March 2019 - March 2021",
    color: "#6FD2C0",
    achievements: [
      "Worked on Salesforce implementation projects for B2B customers",
      "Led end-to-end project implementation",
      "Gained hands-on production support experience"
    ],
    impact: "Foundation Building"
  }
];

export const escalationMissions = [
  {
    id: 1,
    title: "Red Account Critical Escalation",
    status: "Resolved",
    priority: "Critical",
    problem: "Major enterprise client experiencing platform downtime affecting 10,000+ users during peak business hours",
    actions: [
      "Initiated immediate executive escalation protocol",
      "Coordinated cross-functional war room with product, engineering, and support",
      "Provided real-time updates to C-level stakeholders",
      "Implemented temporary workaround within 2 hours"
    ],
    stakeholders: ["VP Customer Success", "Product Engineering Lead", "Account Executive", "Customer CTO"],
    outcome: "Platform restored in 4 hours. Customer retained with 99.9% SLA credit. Implemented preventive measures.",
    resolutionTime: "4 hours",
    impact: "$2M+ ARR saved"
  },
  {
    id: 2,
    title: "APAC Regional Investment Optimization",
    status: "Resolved",
    priority: "High",
    problem: "Inefficient SCI investment request process causing delays in resource allocation across APAC region",
    actions: [
      "Analyzed existing investment workflow bottlenecks",
      "Developed streamlined approval process with clear escalation paths",
      "Created documentation and enablement resources",
      "Mentored APAC peers on new investment request procedures"
    ],
    stakeholders: ["APAC Operations Lead", "Resource Management Team", "Regional Managers"],
    outcome: "Reduced investment approval time by 40%. Improved resource allocation efficiency across region.",
    resolutionTime: "2 weeks",
    impact: "40% faster approvals"
  },
  {
    id: 3,
    title: "Commerce Cloud Platform Stability",
    status: "Resolved",
    priority: "Critical",
    problem: "Series of critical incidents threatening 99% uptime SLA for B2B Commerce Cloud customers",
    actions: [
      "Served as Duty Manager coordinating 24/7 incident response",
      "Managed average of 5 critical cases per shift",
      "Led Deputy Swarm response for APAC regions",
      "Implemented proactive monitoring and early warning systems"
    ],
    stakeholders: ["Commerce Cloud Product Team", "Engineering", "Customer Support Leadership"],
    outcome: "Maintained 99% uptime across all shifts. Zero SLA breaches during management period.",
    resolutionTime: "Ongoing",
    impact: "99% uptime maintained"
  },
  {
    id: 4,
    title: "Team CSAT Transformation",
    status: "Resolved",
    priority: "High",
    problem: "Support team experiencing declining customer satisfaction scores and low morale",
    actions: [
      "Conducted comprehensive CSAT analysis and root cause investigation",
      "Implemented targeted training programs for soft skills and technical excellence",
      "Established regular feedback loops and 1-on-1 coaching sessions",
      "Set clear KPIs aligned with customer experience goals"
    ],
    stakeholders: ["Team of 16 Support Engineers", "Support Operations Lead", "Training Team"],
    outcome: "Increased team CSAT by 60% within 6 months. Improved team morale and retention.",
    resolutionTime: "6 months",
    impact: "60% CSAT increase"
  },
  {
    id: 5,
    title: "National Employee Impact Scale-Up",
    status: "Active",
    priority: "High",
    problem: "Need to scale Employee Impact initiatives across multiple Indian offices with diverse teams",
    actions: [
      "Recruited and trained 40+ hub leads across India",
      "Coordinated with executive leadership for high-profile events",
      "Orchestrated UN India collaboration and national VTO programs",
      "Built cross-site collaboration frameworks"
    ],
    stakeholders: ["Executive Leadership", "40+ Hub Leads", "HR Teams", "UN India Partners"],
    outcome: "Successfully launched nationwide initiatives. High participation rates and positive employee feedback.",
    resolutionTime: "Ongoing",
    impact: "40+ leads managed"
  },
  {
    id: 6,
    title: "Executive Communication Crisis",
    status: "Resolved",
    priority: "Critical",
    problem: "Miscommunication between customer executive team and Salesforce leadership threatening partnership",
    actions: [
      "Established direct communication channel with customer C-suite",
      "Facilitated joint sessions between technical and business stakeholders",
      "Developed transparent escalation communication framework",
      "Provided strategic guidance on expectation management"
    ],
    stakeholders: ["Customer CEO", "Salesforce VP", "Account Team", "Product Leadership"],
    outcome: "Restored trust and communication. Partnership strengthened with renewed contract.",
    resolutionTime: "3 weeks",
    impact: "Partnership saved"
  }
];

export const speakingEngagements = [
  {
    id: 1,
    event: "United Nations India",
    topic: "Technology for Social Impact",
    year: "2024",
    audience: "500+",
    type: "Keynote",
    description: "Represented Salesforce in collaboration with UN India on technology-driven social initiatives"
  },
  {
    id: 2,
    event: "Karma Asia Bangalore 2025",
    topic: "Leadership in Technology",
    year: "2025",
    audience: "300+",
    type: "Panel",
    description: "Discussed modern leadership approaches in fast-paced technology environments"
  },
  {
    id: 3,
    event: "Project Management Institute, Hyderabad",
    topic: "AI in Project Management",
    year: "2024",
    audience: "200+",
    type: "Workshop",
    description: "Led sessions on leveraging AI for project management excellence"
  },
  {
    id: 4,
    event: "Project Management Institute, Hyderabad",
    topic: "Agile Methodologies",
    year: "2024",
    audience: "200+",
    type: "Workshop",
    description: "Delivered practical Agile implementation strategies for teams"
  },
  {
    id: 5,
    event: "Sri Indhu College",
    topic: "AI and Career Development",
    year: "2024",
    audience: "150+",
    type: "Guest Lecture",
    description: "Inspired students on AI technologies and Salesforce career opportunities"
  },
  {
    id: 6,
    event: "KPRIT University",
    topic: "AI for Social Impact",
    year: "2024",
    audience: "250+",
    type: "Keynote",
    description: "Explored how AI can drive meaningful social change"
  },
  {
    id: 7,
    event: "MVGR College of Engineering",
    topic: "Salesforce Ecosystem",
    year: "2023",
    audience: "180+",
    type: "Tech Talk",
    description: "Introduced students to Salesforce platform and career pathways"
  }
];

export const certifications = [
  { name: "Project Management Professional (PMP)", issuer: "PMI", year: "2024", category: "Leadership" },
  { name: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org", year: "2023", category: "Agile" },
  { name: "Professional Scrum Product Owner (PSPO)", issuer: "Scrum.org", year: "2023", category: "Agile" },
  { name: "Salesforce Administrator (ADM 201)", issuer: "Salesforce", year: "2021", category: "Salesforce" },
  { name: "Salesforce App Builder", issuer: "Salesforce", year: "2021", category: "Salesforce" },
  { name: "Salesforce Platform Developer I (PD1)", issuer: "Salesforce", year: "2022", category: "Salesforce" },
  { name: "Salesforce B2B Commerce Administrator", issuer: "Salesforce", year: "2023", category: "Salesforce" },
  { name: "Salesforce Associate AI", issuer: "Salesforce", year: "2024", category: "AI" }
];

export const skills = {
  platforms: ["Service Cloud", "B2B Commerce Cloud", "Marketing Cloud", "Sales Cloud", "Experience Cloud"],
  programming: ["Apex", "Visualforce", "Lightning Web Components", "SOQL", "SOSL"],
  tools: ["Data Loader", "Workbench", "Salesforce Reports", "Dashboards", "Excel", "Tableau", "JIRA", "Confluence"],
  methodologies: ["Agile", "Scrum", "Incident Management", "Escalation Management", "Process Improvement"],
  leadership: ["Team Management", "Crisis Leadership", "Cross-functional Collaboration", "Stakeholder Management", "Strategic Planning"]
};

export const communityWork = [
  {
    title: "Employee Impact India Leader",
    organization: "Salesforce",
    description: "Leading multiple initiatives including UN India collaboration, Salesforce Adventure Club, VTO programs, and Women in Tech",
    team: "40+ hub leads and members"
  },
  {
    title: "Certified Trailblazer Guide Trainer",
    organization: "Salesforce",
    description: "Providing training and mentorship to empower individuals on the Salesforce platform",
    team: "100+ mentees"
  }
];

export const contactData = {
  email: "rasagnavarma@gmail.com",
  workEmail: "rasagna.varma@salesforce.com",
  phone: "+91 8985689997",
  linkedin: "https://www.linkedin.com/in/rasagnavarmasai/"
};