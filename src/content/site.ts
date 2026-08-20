// ---------------------------------------------------------------------------
// SITE CONTENT & CONFIGURATION
// ---------------------------------------------------------------------------
// This file centralizes every piece of *factual* content on the site:
// company details, navigation, services, team members, projects, etc.
//
// Anything wrapped in square brackets — e.g. InfoBridge — is a clearly
// marked placeholder. It is NOT real information and must be replaced with
// verified facts before launch. Nothing here has been invented as fact;
// placeholders exist purely so the layout can be reviewed with real content
// structure. Search this file for "[" to find every placeholder in one pass.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "InfoBridge",
  legalName: "[Legal InfoBridge], [Registration Type e.g. Ltd]",
  shortName: "[Short Name]",
  tagline:
    "Technology, research and strategy for institutions that can't afford to guess.",
  description:
    "InfoBridge is a multidisciplinary consultancy working across technology, research, public-sector advisory, and communications for government, NGO, academic and private-sector clients.",
  url: "https://www.example.org",
  ogImage: "/og-image.jpg",
  founded: "[Year Founded]",
  registrationNumber: "[Company Registration Number]",

  contact: {
    email: "[info@example.org]",
    projectsEmail: "[projects@example.org]",
    phone: "[+000 000 000 000]",
    address: {
      line1: "[Building / Street Address]",
      line2: "[City, Region, Postal Code]",
      country: "[Country]",
    },
    hours: "Monday – Friday, 8:30 – 17:30 [Timezone]",
  },

  social: {
    linkedin: "[LinkedIn URL]",
    twitter: "[X / Twitter URL]",
  },
} as const;

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Services", href: "/services" },
    { label: "Projects & Case Studies", href: "/projects" },
    { label: "Insights", href: "/insights" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
} as const;

// ---------------------------------------------------------------------------
// CAPABILITY AREAS — shown on the homepage as the multidisciplinary model
// ---------------------------------------------------------------------------
export const capabilities = [
  {
    id: "technology",
    label: "Technology & Engineering",
    description:
      "Software, data systems and applied AI, built to survive contact with real institutional constraints.",
  },
  {
    id: "research",
    label: "Research & Innovation",
    description:
      "Applied research in health and agriculture, designed to produce evidence that changes decisions.",
  },
  {
    id: "public-sector",
    label: "Public Sector & Institutional Advisory",
    description:
      "Strategy and delivery support for government and development programs, from design through implementation.",
  },
  {
    id: "communications",
    label: "Media & Communications",
    description:
      "Strategic communications that translate technical and research work into public understanding.",
  },
] as const;

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
export type ServiceDetail = {
  slug: string;
  category: string;
  icon: "code" | "landmark" | "flask" | "megaphone" | "cpu" | "sprout";
  name: string;
  shortDescription: string;
  valueProposition: string;
  problemStatement: string;
  overview: string;
  capabilities: string[];
  applications: string[];
  targetOrganizations: string[];
  approach: string[];
  outcomes: string[];
};

export const services: ServiceDetail[] = [
  {
    slug: "software-engineering",
    category: "Technology & Software",
    icon: "code",
    name: "Software Engineering & Digital Systems",
    shortDescription:
      "Custom software and digital infrastructure built for institutional reliability, not just launch day.",
    valueProposition:
      "Systems that hold up under real operational load and real audits.",
    problemStatement:
      "Many institutions inherit software that was never designed for their scale, compliance requirements, or staff turnover — leaving critical processes dependent on tools nobody fully understands.",
    overview:
      "We design, build and maintain digital systems for organizations where downtime, data loss, or poor usability carry real institutional cost. This spans custom applications, internal tools, data platforms, and integration work across legacy and modern systems.",
    capabilities: [
      "Custom application development",
      "Systems integration and data migration",
      "Internal tools and workflow platforms",
      "Cloud infrastructure and DevOps",
      "Technical due diligence and audits",
    ],
    applications: [
      "Case management systems for public programs",
      "Data platforms for research and M&E teams",
      "Internal tools replacing spreadsheet-based workflows",
      "Modernization of legacy institutional software",
    ],
    targetOrganizations: [
      "Government agencies digitizing service delivery",
      "NGOs managing multi-site program data",
      "Research institutions with growing data operations",
    ],
    approach: [
      "Discovery and technical assessment of current systems and constraints",
      "Architecture and design reviewed with your technical and non-technical stakeholders",
      "Iterative delivery with working software from early milestones",
      "Documentation and handover built in from the start, not bolted on at the end",
    ],
    outcomes: [
      "Reduced reliance on informal, undocumented processes",
      "Systems your own staff can maintain after handover",
      "Clear audit trail for institutional and donor reporting",
    ],
  },
  {
    slug: "digital-transformation",
    category: "Technology & Software",
    icon: "cpu",
    name: "Digital Transformation & AI Solutions",
    shortDescription:
      "Practical roadmaps for modernizing operations — including where AI genuinely helps and where it doesn't.",
    valueProposition:
      "A transformation plan sequenced around what your organization can actually absorb.",
    problemStatement:
      "Digital transformation efforts often stall because the technology outpaces staff capacity, governance structures, or the underlying data quality needed to support it.",
    overview:
      "We help organizations modernize deliberately: assessing current digital maturity, identifying where automation and applied AI create genuine value, and sequencing change so it is adopted rather than abandoned.",
    capabilities: [
      "Digital maturity assessments",
      "AI feasibility and readiness studies",
      "Process automation",
      "Change management and staff training",
      "Technology strategy and roadmapping",
    ],
    applications: [
      "Assessing where applied AI can support — not replace — technical staff",
      "Automating repetitive reporting and compliance workflows",
      "Building institutional data governance ahead of new tooling",
    ],
    targetOrganizations: [
      "Government departments modernizing service delivery",
      "Development organizations scaling multi-country programs",
      "Academic institutions consolidating research data operations",
    ],
    approach: [
      "Assessment of current tools, workflows and staff digital capacity",
      "Prioritization based on impact and organizational readiness, not novelty",
      "Piloted rollout with clear success metrics before full deployment",
    ],
    outcomes: [
      "A sequenced roadmap instead of a scattered list of initiatives",
      "Staff who understand and trust the tools they are handed",
      "Reduced risk of stalled or abandoned digital projects",
    ],
  },
  {
    slug: "public-sector-advisory",
    category: "Public Sector & Institutional Consulting",
    icon: "landmark",
    name: "Public Sector & Institutional Advisory",
    shortDescription:
      "Strategy and delivery support for government and development programs, from design through implementation.",
    valueProposition:
      "Advisory grounded in delivery experience, not slideware.",
    problemStatement:
      "Institutional programs frequently struggle at the boundary between policy design and operational delivery — where good intentions meet procurement rules, staffing realities, and legacy systems.",
    overview:
      "We support government institutions, development partners and NGOs across program strategy, digital government initiatives, and institutional strengthening, with particular attention to what is realistically implementable.",
    capabilities: [
      "Program design and strategy",
      "Digital government advisory",
      "Institutional and organizational strengthening",
      "Monitoring, evaluation and learning (MEL) systems",
      "Policy implementation support",
    ],
    applications: [
      "Digital government strategy and service redesign",
      "Program design support for development partners",
      "Institutional capacity assessments",
    ],
    targetOrganizations: [
      "Government ministries and agencies",
      "Multilateral and bilateral development partners",
      "NGOs implementing government-adjacent programs",
    ],
    approach: [
      "Contextual diagnosis grounded in the institution's actual operating environment",
      "Collaborative design with the teams who will implement the work",
      "Attention to procurement, staffing and political-economy constraints",
    ],
    outcomes: [
      "Program designs that survive contact with implementation",
      "Stronger institutional ownership of the resulting systems",
      "Clearer reporting lines for donors and oversight bodies",
    ],
  },
  {
    slug: "applied-research",
    category: "Research & Innovation",
    icon: "flask",
    name: "Applied Research — Health & Agritech",
    shortDescription:
      "Research support in medical and agricultural domains, designed to produce evidence that changes decisions.",
    valueProposition:
      "Research designed from the start around the decision it needs to inform.",
    problemStatement:
      "Research that is methodologically sound but disconnected from the decisions it's meant to inform rarely changes practice — a particular risk in resource-constrained health and agricultural settings.",
    overview:
      "Our research team supports medical and agritech research programs across study design, data collection systems, statistical analysis, and translation of findings into implementable recommendations.",
    capabilities: [
      "Study design and protocol development",
      "Data collection and management systems",
      "Statistical and epidemiological analysis",
      "Agritech field trials and applied research",
      "Research-to-policy translation",
    ],
    applications: [
      "Clinical and public health research support",
      "Agricultural field trials and yield research",
      "Applied research paired with digital data collection tools",
    ],
    targetOrganizations: [
      "Academic and research institutions",
      "Health implementing partners",
      "Agricultural research and extension organizations",
    ],
    approach: [
      "Research questions defined jointly with the eventual decision-makers",
      "Rigorous methodology appropriate to field conditions",
      "Findings translated into formats usable by non-specialist audiences",
    ],
    outcomes: [
      "Evidence that is usable by program and policy teams, not just journals",
      "Stronger local research data infrastructure",
      "Reproducible methods documented for future studies",
    ],
  },
  {
    slug: "data-analysis",
    category: "Research & Innovation",
    icon: "flask",
    name: "Data Analysis & Innovation Programs",
    shortDescription:
      "Turning institutional data into decisions, and running structured programs to test new approaches.",
    valueProposition:
      "Analysis built around the questions your leadership actually needs answered.",
    problemStatement:
      "Institutions often collect substantial data without the analytical capacity or structured process to turn it into decisions — or a safe way to pilot new approaches before scaling them.",
    overview:
      "We provide applied data analysis and design structured innovation programs — from pilot design through evaluation — that let organizations test new approaches before committing institutional resources.",
    capabilities: [
      "Applied statistical and data analysis",
      "Dashboards and reporting systems",
      "Innovation pilot design and evaluation",
      "Data quality assessment",
    ],
    applications: [
      "Program performance dashboards for leadership",
      "Pilot testing of new service delivery models",
      "Data quality audits ahead of major reporting cycles",
    ],
    targetOrganizations: [
      "NGOs and development programs",
      "Government M&E units",
      "Research institutions",
    ],
    approach: [
      "Start from the decision the analysis needs to support",
      "Build reusable analytical tools, not one-off reports",
      "Pilot before scale, with clear evaluation criteria set in advance",
    ],
    outcomes: [
      "Leadership decisions grounded in current data, not annual reports",
      "Lower-risk path to testing new institutional approaches",
    ],
  },
  {
    slug: "strategic-communications",
    category: "Media & Communications",
    icon: "megaphone",
    name: "Strategic Communications & Media",
    shortDescription:
      "Communications that translate technical and research work into public and stakeholder understanding.",
    valueProposition:
      "Communications built by people who understand the underlying technical work.",
    problemStatement:
      "Technical, research and policy work often fails to reach the audiences it's meant to influence — not for lack of substance, but because it was never translated into a form they could use.",
    overview:
      "Our communications team works alongside our technical and research staff, which means campaigns, reports and public engagement materials are grounded in accurate understanding of the underlying work.",
    capabilities: [
      "Strategic communications planning",
      "Digital communications and content",
      "Knowledge dissemination and public engagement",
      "Report design and policy brief writing",
    ],
    applications: [
      "Public communications for government digital services",
      "Dissemination campaigns for research findings",
      "Institutional and donor-facing reporting materials",
    ],
    targetOrganizations: [
      "Government communications units",
      "Research institutions publishing for public audiences",
      "NGOs reporting to donors and the public",
    ],
    approach: [
      "Message development grounded in the underlying technical or research substance",
      "Audience-specific formats — from policy briefs to public campaigns",
      "Measurement of reach and understanding, not just output volume",
    ],
    outcomes: [
      "Research and program work reaching its intended audience",
      "Stronger public and stakeholder trust in institutional communications",
    ],
  },
];

// ---------------------------------------------------------------------------
// TEAM
// ---------------------------------------------------------------------------
export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  category:
    | "Leadership"
    | "Technology"
    | "Public Sector"
    | "Research"
    | "AI"
    | "Media & Communications"
    | "Agriculture";
  expertise: string;
  bio: string;
  qualifications: string[];
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    slug: "team-member-1",
    name: "[Team Member Name]",
    title: "[Title, e.g. Managing Director]",
    category: "Leadership",
    expertise: "[Area of expertise]",
    bio: "[Short professional biography — background, focus areas, and relevant experience to be provided by the company.]",
    qualifications: [
      "[Qualification / Degree]",
      "[Professional certification]",
    ],
    linkedin: "[LinkedIn URL]",
  },
  {
    slug: "team-member-2",
    name: "[Team Member Name]",
    title: "[Title, e.g. Director of Technology]",
    category: "Technology",
    expertise: "[Area of expertise, e.g. Software Architecture]",
    bio: "[Short professional biography to be provided by the company.]",
    qualifications: ["[Qualification / Degree]"],
    linkedin: "[LinkedIn URL]",
  },
  {
    slug: "team-member-3",
    name: "[Team Member Name]",
    title: "[Title, e.g. Head of Public Sector Advisory]",
    category: "Public Sector",
    expertise: "[Area of expertise, e.g. Digital Government]",
    bio: "[Short professional biography to be provided by the company.]",
    qualifications: ["[Qualification / Degree]"],
  },
  {
    slug: "team-member-4",
    name: "[Team Member Name]",
    title: "[Title, e.g. Lead Research Scientist]",
    category: "Research",
    expertise: "[Area of expertise, e.g. Epidemiology]",
    bio: "[Short professional biography to be provided by the company.]",
    qualifications: [
      "[Qualification / Degree]",
      "[Publications / research interests]",
    ],
  },
  {
    slug: "team-member-5",
    name: "[Team Member Name]",
    title: "[Title, e.g. AI Research Lead]",
    category: "AI",
    expertise: "[Area of expertise, e.g. Applied Machine Learning]",
    bio: "[Short professional biography to be provided by the company.]",
    qualifications: ["[Qualification / Degree]"],
  },
  {
    slug: "team-member-6",
    name: "[Team Member Name]",
    title: "[Title, e.g. Agritech Research Lead]",
    category: "Agriculture",
    expertise: "[Area of expertise, e.g. Agronomy]",
    bio: "[Short professional biography to be provided by the company.]",
    qualifications: ["[Qualification / Degree]"],
  },
  {
    slug: "team-member-7",
    name: "[Team Member Name]",
    title: "[Title, e.g. Director of Communications]",
    category: "Media & Communications",
    expertise: "[Area of expertise, e.g. Strategic Communications]",
    bio: "[Short professional biography to be provided by the company.]",
    qualifications: ["[Qualification / Degree]"],
  },
];

export const teamCategories = [
  "All",
  "Leadership",
  "Technology",
  "Public Sector",
  "Research",
  "AI",
  "Media & Communications",
  "Agriculture",
] as const;

// ---------------------------------------------------------------------------
// PROJECTS / CASE STUDIES — placeholders only; do not populate with
// invented clients or outcomes.
// ---------------------------------------------------------------------------
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  challenge: string;
  approach: string;
  outcomes: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-1",
    title: "[Project Title]",
    client: "[Client / Organization Name, where permitted]",
    sector: "[Sector, e.g. Public Health]",
    challenge: "[Description of the challenge the client faced.]",
    approach: "[Description of the approach and methodology used.]",
    outcomes: "[Description of measurable outcomes, once available.]",
  },
  {
    slug: "case-study-2",
    title: "[Project Title]",
    client: "[Client / Organization Name, where permitted]",
    sector: "[Sector, e.g. Digital Government]",
    challenge: "[Description of the challenge the client faced.]",
    approach: "[Description of the approach and methodology used.]",
    outcomes: "[Description of measurable outcomes, once available.]",
  },
  {
    slug: "case-study-3",
    title: "[Project Title]",
    client: "[Client / Organization Name, where permitted]",
    sector: "[Sector, e.g. Agritech]",
    challenge: "[Description of the challenge the client faced.]",
    approach: "[Description of the approach and methodology used.]",
    outcomes: "[Description of measurable outcomes, once available.]",
  },
];

// ---------------------------------------------------------------------------
// INSIGHTS / PUBLICATIONS — placeholders only.
// ---------------------------------------------------------------------------
export type Insight = {
  slug: string;
  title: string;
  category:
    | "Research Publication"
    | "Policy Brief"
    | "Technical Report"
    | "Article";
  date: string;
  summary: string;
};

export const insights: Insight[] = [
  {
    slug: "insight-1",
    title: "[Publication / Article Title]",
    category: "Policy Brief",
    date: "[Publication Date]",
    summary:
      "[Short summary of the publication, to be provided by the company.]",
  },
  {
    slug: "insight-2",
    title: "[Publication / Article Title]",
    category: "Research Publication",
    date: "[Publication Date]",
    summary:
      "[Short summary of the publication, to be provided by the company.]",
  },
  {
    slug: "insight-3",
    title: "[Publication / Article Title]",
    category: "Technical Report",
    date: "[Publication Date]",
    summary:
      "[Short summary of the publication, to be provided by the company.]",
  },
];

// ---------------------------------------------------------------------------
// TRUST INDICATORS — clearly marked placeholders. No real logos, names or
// figures are to be inferred from this structure.
// ---------------------------------------------------------------------------
export const trustStats = [
  { label: "[Years of Operation]", value: "[—]" },
  { label: "[Projects Completed]", value: "[—]" },
  { label: "[Countries / Regions Served]", value: "[—]" },
  { label: "[Sectors Served]", value: "[—]" },
] as const;

export const values = [
  {
    title: "Evidence before opinion",
    description:
      "We form recommendations from data and field experience, not institutional habit or convenient assumptions.",
  },
  {
    title: "Built to be handed over",
    description:
      "Every system, report or program we build is documented and structured so your team can own it, not just use it.",
  },
  {
    title: "Context first",
    description:
      "Technology and policy solutions are shaped by the operating environment they'll live in — procurement rules, staffing, connectivity, all of it.",
  },
  {
    title: "Disciplinary range, one team",
    description:
      "Technologists, researchers, policy advisors and communicators work on the same problem together, not in sequential handoffs.",
  },
  {
    title: "Say what we don't know",
    description:
      "We flag uncertainty and limitations directly rather than smoothing them over in the final deliverable.",
  },
];
