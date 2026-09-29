export const site = {
  brand: "FIANDEV",
  author: "Aliffian Alham Maesanjaya",
  role: "Informatics Undergraduate / Developer",
  domain: "Data Analysis & Client Systems",
  inquiry: "Data Science / SQL",
  affiliation: "Informatics Candidate",
  timezone: "UTC+7",
  location: "Jakarta, Indonesia",
  kernel: "2026.04",
  year: 2026,
} as const;

export const profile = {
  name: "Aliffian Alham Maesanjaya",
  handle: "FIANDEV",
  photo: "/profile-photo.jpg",
  email: "aliffianmsj@gmail.com",
  github: "https://github.com/fiannnn9090",
  githubHandle: "fiannnn9090",
  linkedin: "https://linkedin.com/in/aliffianmsj",
} as const;

export const navigation = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
] as const;

export const specSheet: ReadonlyArray<{ label: string; value: string; accent?: boolean }> = [
  { label: "OPERATOR", value: "ALIFFIAN ALHAM MAESANJAYA" },
  { label: "AFFILIATION", value: "INFORMATICS CANDIDATE" },
  { label: "DOMAIN", value: "DATA ANALYSIS & CLIENT SYSTEMS" },
  { label: "CURRENT INQUIRY", value: "DATA SCIENCE / SQL", accent: true },
  { label: "PARADIGM", value: "BAUHAUS MINIMALISM + CODE" },
];

export const aboutMetrics = [
  { value: "04+", label: "YEARS CODING", accent: false },
  { value: "100%", label: "DETERMINISTIC", accent: true },
  { value: "UTC+7", label: "JAKARTA BASE", accent: false },
] as const;

export const process = [
  {
    phase: "PHASE 01",
    focus: "INPUT DOMAIN",
    title: "UNDERSTAND",
    body: "Deconstruct problem invariants, data schemas, constraints, and operational requirements prior to committing code.",
    accent: false,
  },
  {
    phase: "PHASE 02",
    focus: "SYSTEM SCHEMA",
    title: "DESIGN",
    body: "Architect state machines, verification paths, clean API contracts, and typed domain entities.",
    accent: false,
  },
  {
    phase: "PHASE 03 // CORE",
    focus: "ZERO REDUNDANCY",
    title: "BUILD",
    body: "Implement strictly typed, isolated modules with distinct boundaries, high testability, and deterministic outputs.",
    accent: true,
  },
  {
    phase: "PHASE 04",
    focus: "VERIFICATION",
    title: "TEST",
    body: "Run invariant checks, boundary cases, data validation, and latency benchmarking.",
    accent: false,
  },
  {
    phase: "PHASE 05",
    focus: "TELEMETRY",
    title: "ITERATE",
    body: "Ingest real execution metrics, eliminate bottlenecks, refine ergonomics, and compact the codebase.",
    accent: false,
  },
] as const;

export const toolGroups = [
  { index: "01", label: "WEB", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { index: "02", label: "DATA", items: ["SQL", "PostgreSQL", "MySQL", "Pandas", "Data Cleaning"] },
  {
    index: "03",
    label: "BACKEND",
    items: ["Node.js", "Express", "Laravel", "REST API", "Supabase"],
  },
  {
    index: "04",
    label: "MOBILE",
    items: ["Flutter", "Dart", "Android", "Capacitor", "Local-First Storage"],
  },
  { index: "05", label: "TOOLS", items: ["Git & GitHub", "Docker", "Linux CLI", "VS Code", "Postman"] },
] as const;

export const focusDomains = [
  { title: "DATA ANALYSIS", detail: "Cleaning, aggregation, descriptive statistics" },
  { title: "SQL & DATABASES", detail: "Relational modelling, query optimisation" },
  { title: "SOFTWARE ARCHITECTURE", detail: "System modularity, boundary enforcement" },
  { title: "DISTRIBUTED SYSTEMS", detail: "Ledger models, state replication" },
] as const;

export const contactLinks = [
  {
    index: "01",
    label: "EMAIL // DIRECT",
    handle: profile.email,
    action: "TRANSMIT",
    href: `mailto:${profile.email}`,
    icon: "arrow_forward",
  },
  {
    index: "02",
    label: "GITHUB // REPOSITORIES",
    handle: `github.com/${profile.githubHandle}`,
    action: "INSPECT",
    href: profile.github,
    icon: "arrow_forward",
    external: true,
  },
  {
    index: "03",
    label: "LINKEDIN // NETWORK",
    handle: profile.linkedin.replace("https://", ""),
    action: "CONNECT",
    href: profile.linkedin,
    icon: "arrow_forward",
    external: true,
  },
  {
    index: "04",
    label: "CURRICULUM VITAE // PDF",
    handle: "REQUEST VIA EMAIL",
    action: "REQUEST",
    href: `mailto:${profile.email}?subject=${encodeURIComponent("Request: Curriculum Vitae")}`,
    icon: "download",
  },
] as const;
