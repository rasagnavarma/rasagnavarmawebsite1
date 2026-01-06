# Seed data for MongoDB

hero_data = {
    "name": "Buddharaju Rasagna Varma",
    "role": "Escalation Manager | Operations Senior",
    "tagline": "Red Accounts & Employee Impact India Lead at Salesforce",
    "metrics": [
        {"label": "Years Experience", "value": 7, "suffix": "+"},
        {"label": "Speaking Sessions", "value": 10, "suffix": "+"},
        {"label": "Team Members Led", "value": 40, "suffix": "+"},
        {"label": "Uptime Maintained", "value": 98, "suffix": "%"}
    ]
}

bio_data = {
    "title": "Who is Rasagna Varma?",
    "narrative": [
        "A visionary leader who transforms chaos into clarity and drives innovation at scale.",
        "With 7+ years at Salesforce, Rasagna has mastered the art of managing critical incidents while keeping customers at the heart of every decision.",
        "His leadership philosophy centers on empowering teams, embracing data-driven insights, and fostering continuous learning cultures.",
        "From managing red account escalations to leading Employee Impact initiatives across India, he thrives in high-pressure environments where strategic thinking meets empathy.",
        "As an AI researcher and innovator, Rasagna explores cutting-edge technologies to solve complex business challenges and create systems that scale.",
        "He believes in building cultures of inclusion, driving technical excellence, and creating meaningful impact through technology."
    ],
    "values": [
        {"icon": "Users", "label": "Team Empowerment", "description": "Leading 40+ professionals across India with 60% CSAT increase"},
        {"icon": "Award", "label": "8 Certifications", "description": "PMP + Scrum Master + 6 Salesforce certifications including AI"},
        {"icon": "Shield", "label": "Crisis Management", "description": "98% uptime maintained across Salesforce platform"},
        {"icon": "Target", "label": "Customer-Centric", "description": "Transformed team performance with strategic escalation management"},
        {"icon": "Brain", "label": "AI Innovation", "description": "Researching AI applications for operational excellence"},
        {"icon": "Globe", "label": "Global Impact", "description": "UN India collaborator and international speaker"}
    ]
}

experiences = [
    {
        "id": 1,
        "company": "Salesforce",
        "role": "Escalate Manager (Operations Senior)",
        "team": "Critical Incident Center, Red Accounts",
        "dates": "June 2024 - Present",
        "color": "#00FFD1",
        "achievements": [
            "Lead executive escalations with strategic guidance and stakeholder communication",
            "Manage red account escalations across APAC region",
            "Drive process improvements for Basecamp and red account management",
            "Mentor APAC peers on investment requests and executive communications"
        ],
        "impact": "Strategic Leadership",
        "order": 1
    },
    {
        "id": 2,
        "company": "Salesforce",
        "role": "Employee Impact India Program Manager",
        "team": "Employee Impact India",
        "dates": "November 2023 - Present",
        "color": "#6FD2C0",
        "achievements": [
            "Lead national Employee Impact initiatives across multiple offices",
            "Oversee organization-wide events with cross-functional teams",
            "Manage team of 40+ hub leads and members",
            "Champion employee-centric initiatives building culture of inclusion"
        ],
        "impact": "National Leadership",
        "order": 2
    },
    {
        "id": 3,
        "company": "Salesforce",
        "role": "Duty Manager",
        "team": "B2B Commerce Cloud",
        "dates": "May 2023 - June 2024",
        "color": "#FFD700",
        "achievements": [
            "Managed 5 critical cases per shift maintaining 99% uptime",
            "Led team of 16 technical support professionals",
            "Increased team's average CSAT score by 60%",
            "Delivered performance reviews and mentoring programs"
        ],
        "impact": "60% CSAT Increase",
        "order": 3
    },
    {
        "id": 4,
        "company": "Salesforce",
        "role": "Technical Support Engineer",
        "team": "Core Developer Support",
        "dates": "March 2021 - June 2024",
        "color": "#00FFD1",
        "achievements": [
            "Built credibility as mentor and escalation point",
            "Raised multiple product bugs for B2B Commerce Cloud",
            "Published knowledge articles for user education",
            "Led CI/CD implementation initiatives using SFDX"
        ],
        "impact": "Technical Excellence",
        "order": 4
    },
    {
        "id": 5,
        "company": "Docmation Technologies",
        "role": "Salesforce Engineer",
        "team": "Implementation Team",
        "dates": "March 2019 - March 2021",
        "color": "#6FD2C0",
        "achievements": [
            "Worked on Salesforce implementation projects for B2B customers",
            "Led end-to-end project implementation",
            "Gained hands-on production support experience"
        ],
        "impact": "Foundation Building",
        "order": 5
    }
]

missions = [
    {
        "id": 1,
        "title": "Red Account Critical Escalation",
        "status": "Resolved",
        "priority": "Critical",
        "problem": "Major enterprise client experiencing platform downtime affecting 10,000+ users during peak business hours",
        "actions": [
            "Initiated immediate executive escalation protocol",
            "Coordinated cross-functional war room with product, engineering, and support",
            "Provided real-time updates to C-level stakeholders",
            "Implemented temporary workaround within 2 hours"
        ],
        "stakeholders": ["VP Customer Success", "Product Engineering Lead", "Account Executive", "Customer CTO"],
        "outcome": "Platform restored in 4 hours. Customer retained with 99.9% SLA credit. Implemented preventive measures.",
        "resolutionTime": "4 hours",
        "impact": "$2M+ ARR saved"
    },
    {
        "id": 2,
        "title": "APAC Regional Investment Optimization",
        "status": "Resolved",
        "priority": "High",
        "problem": "Inefficient SCI investment request process causing delays in resource allocation across APAC region",
        "actions": [
            "Analyzed existing investment workflow bottlenecks",
            "Developed streamlined approval process with clear escalation paths",
            "Created documentation and enablement resources",
            "Mentored APAC peers on new investment request procedures"
        ],
        "stakeholders": ["APAC Operations Lead", "Resource Management Team", "Regional Managers"],
        "outcome": "Reduced investment approval time by 40%. Improved resource allocation efficiency across region.",
        "resolutionTime": "2 weeks",
        "impact": "40% faster approvals"
    },
    {
        "id": 3,
        "title": "Commerce Cloud Platform Stability",
        "status": "Resolved",
        "priority": "Critical",
        "problem": "Series of critical incidents threatening 99% uptime SLA for B2B Commerce Cloud customers",
        "actions": [
            "Served as Duty Manager coordinating 24/7 incident response",
            "Managed average of 5 critical cases per shift",
            "Led Deputy Swarm response for APAC regions",
            "Implemented proactive monitoring and early warning systems"
        ],
        "stakeholders": ["Commerce Cloud Product Team", "Engineering", "Customer Support Leadership"],
        "outcome": "Maintained 99% uptime across all shifts. Zero SLA breaches during management period.",
        "resolutionTime": "Ongoing",
        "impact": "99% uptime maintained"
    },
    {
        "id": 4,
        "title": "Team CSAT Transformation",
        "status": "Resolved",
        "priority": "High",
        "problem": "Support team experiencing declining customer satisfaction scores and low morale",
        "actions": [
            "Conducted comprehensive CSAT analysis and root cause investigation",
            "Implemented targeted training programs for soft skills and technical excellence",
            "Established regular feedback loops and 1-on-1 coaching sessions",
            "Set clear KPIs aligned with customer experience goals"
        ],
        "stakeholders": ["Team of 16 Support Engineers", "Support Operations Lead", "Training Team"],
        "outcome": "Increased team CSAT by 60% within 6 months. Improved team morale and retention.",
        "resolutionTime": "6 months",
        "impact": "60% CSAT increase"
    },
    {
        "id": 5,
        "title": "National Employee Impact Scale-Up",
        "status": "Active",
        "priority": "High",
        "problem": "Need to scale Employee Impact initiatives across multiple Indian offices with diverse teams",
        "actions": [
            "Recruited and trained 40+ hub leads across India",
            "Coordinated with executive leadership for high-profile events",
            "Orchestrated UN India collaboration and national VTO programs",
            "Built cross-site collaboration frameworks"
        ],
        "stakeholders": ["Executive Leadership", "40+ Hub Leads", "HR Teams", "UN India Partners"],
        "outcome": "Successfully launched nationwide initiatives. High participation rates and positive employee feedback.",
        "resolutionTime": "Ongoing",
        "impact": "40+ leads managed"
    },
    {
        "id": 6,
        "title": "Executive Communication Crisis",
        "status": "Resolved",
        "priority": "Critical",
        "problem": "Miscommunication between customer executive team and Salesforce leadership threatening partnership",
        "actions": [
            "Established direct communication channel with customer C-suite",
            "Facilitated joint sessions between technical and business stakeholders",
            "Developed transparent escalation communication framework",
            "Provided strategic guidance on expectation management"
        ],
        "stakeholders": ["Customer CEO", "Salesforce VP", "Account Team", "Product Leadership"],
        "outcome": "Restored trust and communication. Partnership strengthened with renewed contract.",
        "resolutionTime": "3 weeks",
        "impact": "Partnership saved"
    }
]

speaking_engagements = [
    {"id": 1, "event": "United Nations India", "topic": "Technology for Social Impact", "year": "2024", "audience": "500+", "type": "Host", "description": "Hosted Salesforce collaboration with UN India on technology-driven social initiatives and global impact"},
    {"id": 2, "event": "Karma Asia Summit 2025", "topic": "Leadership Excellence Award", "year": "2025", "audience": "300+", "type": "Award", "description": "Awarded for exceptional leadership and measurable impact in technology and community building"},
    {"id": 3, "event": "Salesforce Internal Sessions", "topic": "Agile & Knowledge Sharing", "year": "2024", "audience": "200+", "type": "Session Host", "description": "Regular host for Agile methodology sessions, knowledge sharing forums, and career enabler programs"},
    {"id": 4, "event": "Sri Indhu College", "topic": "AI and Career Development", "year": "2024", "audience": "150+", "type": "Guest Lecture", "description": "Inspired students on AI technologies and Salesforce career opportunities"},
    {"id": 5, "event": "KPRIT University", "topic": "AI for Social Impact", "year": "2024", "audience": "250+", "type": "Keynote", "description": "Explored how AI can drive meaningful social change"},
    {"id": 6, "event": "AVN College", "topic": "AI & Salesforce Ecosystem", "year": "2024", "audience": "180+", "type": "Tech Talk", "description": "Introduced students to AI applications and Salesforce platform career pathways"},
    {"id": 7, "event": "Multiple Engineering Colleges", "topic": "AI Innovation & Salesforce", "year": "2023-2024", "audience": "500+", "type": "Workshop Series", "description": "Conducted workshops on AI innovation and Salesforce ecosystem across various institutions"}
]

certifications = [
    {"name": "Project Management Professional (PMP)", "issuer": "PMI", "year": "2024", "category": "Leadership"},
    {"name": "Professional Scrum Master I (PSM I)", "issuer": "Scrum.org", "year": "2023", "category": "Agile"},
    {"name": "Professional Scrum Product Owner (PSPO)", "issuer": "Scrum.org", "year": "2023", "category": "Agile"},
    {"name": "Salesforce Administrator (ADM 201)", "issuer": "Salesforce", "year": "2021", "category": "Salesforce"},
    {"name": "Salesforce App Builder", "issuer": "Salesforce", "year": "2021", "category": "Salesforce"},
    {"name": "Salesforce Platform Developer I (PD1)", "issuer": "Salesforce", "year": "2022", "category": "Salesforce"},
    {"name": "Salesforce B2B Commerce Administrator", "issuer": "Salesforce", "year": "2023", "category": "Salesforce"},
    {"name": "Salesforce Associate AI", "issuer": "Salesforce", "year": "2024", "category": "AI"}
]

skills_data = {
    "platforms": ["Service Cloud", "B2B Commerce Cloud", "Marketing Cloud", "Sales Cloud", "Experience Cloud"],
    "programming": ["Apex", "Visualforce", "Lightning Web Components", "SOQL", "SOSL"],
    "tools": ["Data Loader", "Workbench", "Salesforce Reports", "Dashboards", "Excel", "Tableau", "JIRA", "Confluence"],
    "methodologies": ["Agile", "Scrum", "Incident Management", "Escalation Management", "Process Improvement"],
    "leadership": ["Team Management", "Crisis Leadership", "Cross-functional Collaboration", "Stakeholder Management", "Strategic Planning"]
}

community_work = [
    {"title": "Employee Impact India Leader", "organization": "Salesforce", "description": "Leading multiple initiatives including UN India collaboration, Salesforce Adventure Club, VTO programs, and Women in Tech", "team": "40+ hub leads and members"},
    {"title": "Certified Trailblazer Guide Trainer", "organization": "Salesforce", "description": "Providing training and mentorship to empower individuals on the Salesforce platform", "team": "100+ mentees"}
]
