export const companyInfo = {
  name: "Grow More Solution",
  tagline: "Smarter Collections. Stronger Recovery. Better Outcomes.",
  owner: "Najmul Huda",
  description: "Grow More Solution is a brand owned by Najmul Huda, an asset resolution company specializing in comprehensive debt recovery solutions through strategic legal interventions, technology integration, and ethical field operations.",
  email: "growmore168@gmail.com",
  phone: "+91 95355 49889",
  location: "Bangalore, India",
  stats: [
    { label: "Years of Combined Experience", value: 30, suffix: "+", highlight: "Industry Expertise" },
    { label: "Field Agents", value: 50, suffix: "+", highlight: "On-Ground Reach" },
    { label: "Native Language Callers", value: 50, suffix: "+", highlight: "Regional Engagement" },
    { label: "PIN Codes Planned", value: 600, suffix: "+", highlight: "Expansion Goal", disclaimer: "Planned Expansion" },
    { label: "Urban Centres", value: 78, suffix: "", highlight: "Key Hubs Planned", disclaimer: "Planned Expansion" }
  ]
};

export const differentiators = [
  {
    id: "expert-team",
    title: "Expert Team",
    description: "Combined leadership and operational experience exceeding 30 years serving top banks and non-banking financial institutions.",
    icon: "Users"
  },
  {
    id: "tech-led",
    title: "Technology-Led Collection",
    description: "Powered by Advanced Collection Management Systems (ACS), proprietary skip modules, and real-time mobile apps for field operations.",
    icon: "Cpu"
  },
  {
    id: "presence",
    title: "Extensive Tele-calling & Field Presence",
    description: "Deploying 50+ trained field agents and 50+ native language callers for synchronized digital and ground operations.",
    icon: "PhoneCall"
  },
  {
    id: "recovery-rates",
    title: "Improved Recovery Rates",
    description: "Source-reported performance metrics showing an improvement of over 30% in NPA and late-payment categories across portfolios.",
    icon: "TrendingUp",
    statNote: ">30% NPA & Late-Payment Improvement (Source Reported)"
  },
  {
    id: "efficiency",
    title: "Enhanced Operational Efficiency",
    description: "Optimized sourcing strategies, intelligent resource allocation, high agent utilization rates, and ongoing rigorous compliance training.",
    icon: "Zap"
  },
  {
    id: "standardization",
    title: "Process Standardization",
    description: "Standardized, audit-ready collection processes designed for consistent performance while strictly adhering to statutory guidelines.",
    icon: "ShieldCheck"
  }
];

export const capabilities = [
  {
    title: "Debt Recovery",
    description: "End-to-end resolution strategies for early-stage delinquencies to complex Non-Performing Assets (NPA) under strict statutory guidelines.",
    icon: "ShieldAlert"
  },
  {
    title: "Tele-calling",
    description: "Structured multi-lingual voice outreach driven by 50+ native language callers to resolve customer payment roadblocks effectively.",
    icon: "Headphones"
  },
  {
    title: "Field Collections",
    description: "Professional door-to-door customer engagement managed through real-time field tracking apps and digital payment receipts.",
    icon: "MapPin"
  },
  {
    title: "Analytics & Segmentation",
    description: "Data-driven risk profiling, contractability scoring, and behavioral segmentation to deploy optimal recovery channels.",
    icon: "BarChart3"
  },
  {
    title: "Campaign Management",
    description: "Automated, multi-touch engagement engines coordinating SMS, IVR, inbound, outbound, and physical field interventions.",
    icon: "Send"
  },
  {
    title: "Debt Management & Resolution",
    description: "Structured debt settlement frameworks, dispute mediation, and long-term financial restructuring for sustainable outcomes.",
    icon: "CheckCircle2"
  }
];

export const acsModules = [
  { id: "allocation", title: "Account Allocation", desc: "Automated distribution of portfolio cases based on agent skill & geography" },
  { id: "tele-field", title: "Tele-caller + Field Collections", desc: "Synchronized dual-channel outreach with real-time updates" },
  { id: "mobile-app", title: "Mobile Collection App", desc: "Real-time location, digital receipt generation, and offline field support" },
  { id: "target-mgmt", title: "Target Management", desc: "Dynamic monthly recovery goals and performance threshold tracking" },
  { id: "debt-mgmt", title: "Debt Management", desc: "Comprehensive borrower case history, notes, and payment arrangements" },
  { id: "payment-track", title: "Payment Tracking", desc: "Instant digital payment confirmation via UPI, NetBanking & cards" },
  { id: "reconciliation", title: "Reconciliation", desc: "Automated ledger matching and institution bank statement alignment" },
  { id: "mis-analytics", title: "MIS & Performance Tracking", desc: "Real-time portfolio dashboards, roll-rate analysis, and yield metrics" }
];

export const engineSteps = [
  { step: "01", name: "SEGMENT", desc: "Categorize portfolio accounts by risk, product, and historical payment pattern." },
  { step: "02", name: "ANALYZE", desc: "Evaluate contractability score and select the optimal engagement pathway." },
  { step: "03", name: "CONTACT", desc: "Initiate multi-channel digital outreach via SMS, IVR, and automated voice." },
  { step: "04", name: "ENGAGE", desc: "Native-language tele-callers connect to address customer dispute or difficulty." },
  { step: "05", name: "CAMPAIGN", desc: "Deploy scheduled escalation triggers for non-responsive accounts." },
  { step: "06", name: "FIELD / TELE-CALL", desc: "Dispatch 50+ field agents for face-to-face resolution where required." },
  { step: "07", name: "RESOLVE", desc: "Secure promise-to-pay (RTP) or structured settlement agreement." },
  { step: "08", name: "TRACK", desc: "Reconcile payment in ACS, generate receipt, and update bank MIS." }
];

export const languages = [
  { code: "HI", name: "Hindi", region: "North & Central India", nativeCallers: "Core Support" },
  { code: "EN", name: "English", region: "Pan-India Corporate", nativeCallers: "Enterprise Standard" },
  { code: "KA", name: "Kannada", region: "Karnataka Hub", nativeCallers: "Regional Expertise" },
  { code: "TE", name: "Telugu", region: "Andhra & Telangana", nativeCallers: "Regional Expertise" },
  { code: "TA", name: "Tamil", region: "Tamil Nadu & Puducherry", nativeCallers: "Regional Expertise" },
  { code: "ML", name: "Malayalam", region: "Kerala Region", nativeCallers: "Regional Expertise" }
];

export const campaignTimeline = [
  { time: "T", stage: "Initial Engagement", details: "Automated SMS, IVR notification & digital payment link dispatch." },
  { time: "T+2", stage: "Response & Follow-up", details: "Native language tele-caller outreach and contactability validation." },
  { time: "T+3", stage: "Optimization", details: "Behavioral re-segmentation, skip-tracing module deployment for unreachable accounts." },
  { time: "T+6", stage: "Resolution Intervention", details: "Field agent dispatch for physical visit, formal dispute resolution & settlement agreement." }
];

export const segmentationTabs = [
  {
    id: "credit",
    name: "Credit Profile",
    items: ["Prime & Subprime Borrowers", "Historical Bureau Scores", "Existing Debt Load", "Secured vs Unsecured Exposures"]
  },
  {
    id: "product",
    name: "Loan & Product History",
    items: ["Personal Loans & Credit Cards", "Two-Wheeler & Auto Loans", "BNPL & Micro-finance", "SME & Commercial Credit"]
  },
  {
    id: "behaviour",
    name: "Payment Behaviour",
    items: ["First-Pay Defaults", "Broken Promise-to-Pay (RTP)", "Roll-rate 30/60/90+ Days", "Hard Core NPA Categories"]
  },
  {
    id: "contactability",
    name: "Contactability",
    items: ["Verified Active Numbers", "Alternate/Work Place Contacts", "Address Verification Status", "Skip Tracing Candidates"]
  },
  {
    id: "dispute",
    name: "Dispute / Fraud",
    items: ["Statement Discrepancy Claims", "Technical Processing Delays", "Potential Fraud / Identity Misuse", "Hardship & Medical Relief Cases"]
  },
  {
    id: "rtp",
    name: "RTP & Recovery Segments",
    items: ["High-Intent Immediate Payers", "Structured Settlement Eligible", "Legal Escalation Candidates", "Write-off Recovery Portfolios"]
  }
];

export const teamStructure = {
  totalFieldAgents: "50+",
  totalCallers: "50+",
  departments: [
    {
      title: "Executive & Central Leadership",
      roles: [
        { name: "Brand Proprietor & Resolution Head", count: "Najmul Huda", detail: "Asset Resolution Specialist" },
        { name: "Operations Manager", count: "1", detail: "Overall Strategy & Delivery" },
        { name: "Central Strategy & IT Team", count: "2 Units", detail: "ACS Platform & Compliance" }
      ]
    },
    {
      title: "Tele-Calling Operations",
      roles: [
        { name: "Tele Callers", count: "50+", detail: "Multi-lingual Voice Outreach" },
        { name: "Native Language Callers", count: "50+", detail: "Specialized Regional Communicators" },
        { name: "Tele Calling Supervisors", count: "3", detail: "Quality Control & SLA Monitoring" }
      ]
    },
    {
      title: "Field Operations",
      roles: [
        { name: "Field Executives", count: "20+", detail: "Door-to-door Field Action" },
        { name: "Field Supervisor", count: "1", detail: "Territory Management" },
        { name: "Field Manager", count: "1", detail: "Ground Operational Command" }
      ]
    },
    {
      title: "Corporate Support",
      roles: [
        { name: "Accounts Team", count: "1 Unit", detail: "Reconciliation & Financial Audits" },
        { name: "Administration Team", count: "1 Unit", detail: "HR & Logistics Compliance" }
      ]
    }
  ]
};

export const clients = [
  {
    name: "Kissht",
    subtitle: "Leading Digital Lending Platform",
    tag: "Fintech & BNPL",
    accent: "#0057A8"
  },
  {
    name: "Bajaj",
    subtitle: "Bajaj Finance / Bajaj Finserv Ltd",
    tag: "Banking & NBFC",
    accent: "#0057A8"
  },
  {
    name: "Navi",
    subtitle: "Navi Technologies & Financial Services",
    tag: "Fintech & Digital Personal Loans",
    accent: "#42A51F"
  }
];
