import { profile } from "./site";

export type ProjectLink = {
  label: string;
  href: string;
  kind: "repository" | "paper";
};

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  /** URL segment for /work/[slug] */
  slug: string;
  /** Two-digit index numeral used across the editorial system */
  index: string;
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  status: string;
  /** One-paragraph summary used on cards */
  summary: string;
  /** Longer hook used on the detail page intro */
  intro: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  /** Short badges for compact cards (1-2 items) */
  featuredStack: string[];
  /** Complete badge list on the detail page */
  stack: string[];
  sections: ProjectSection[];
  /** Repository / paper links. Empty array means "not published yet". */
  links: ProjectLink[];
  /**
   * Public live build of the project.
   * `null` = there is nothing to link (no web build, store link, or download yet).
   * When set, the UI renders a LIVE DEMO button; when null, that button is omitted entirely.
   */
  liveUrl: string | null;
  /** Which constructed diagram to render alongside the case study */
  artifact: "voting" | "rapi" | "shift";
  accent: boolean;
};

export const projects: Project[] = [
  {
    slug: "e-voting-blockchain",
    index: "01",
    id: "CASE 01",
    title: "E-VOTING BLOCKCHAIN",
    subtitle: "INTEGRITY & AUDITABILITY PROTOCOL",
    category: "RESEARCH PROTOCOL",
    year: "2026",
    status: "IN REVIEW — TARGET SINTA 3",
    summary:
      "A verifiable electronic voting system where every ballot is hashed into a Merkle tree and signed asymmetrically, so results can be audited by the public without trusting the polling station.",
    intro:
      "A blockchain-based electronic voting protocol designed so that integrity is a property of the data structure itself, not of the trust placed in the administering body. The system is being prepared for publication in a SINTA 3 indexed journal.",
    image: {
      src: "/projects/e-voting-blockchain.webp",
      alt: "Blueprint of the cryptographic verification pipeline: ballot hash, ECDSA signature, and Merkle tree root tally",
      width: 1200,
      height: 900,
    },
    featuredStack: ["NODE.JS", "BLOCKCHAIN"],
    stack: [
      "Node.js",
      "Express",
      "Blockchain",
      "Merkle Tree",
      "ECDSA / secp256k1",
      "SHA-256",
      "PostgreSQL",
      "REST API",
      "React",
    ],
    sections: [
      {
        heading: "PROBLEM",
        body: "Conventional e-voting concentrates verification power in the central server that tallies the votes: if that server is compromised, the result is compromised with it and there is no residue left to prove what happened. Paper ballots are auditable but slow, geographically bounded, and expensive. The gap I set out to close is a ballot that is fast to count yet independently verifiable.",
      },
      {
        heading: "KEY FEATURES",
        body: "Voters authenticate once and receive a ballot credential; each submitted ballot is hashed (SHA-256) before it ever reaches the ledger. Votes are batched into blocks and sealed with an asymmetric ECDSA signature, so a ballot can be proven genuine without revealing who cast it. Any observer can rebuild the Merkle tree from the public chain and confirm that a specific ballot is included in the published root. Tallying happens on-chain, and the ledger is append-only: an entry cannot be edited or removed, only extended.",
      },
      {
        heading: "TECHNICAL DECISIONS",
        body: "The chain is implemented deliberately rather than pulled from a hosted network, because the point of the study is the protocol itself. Hashing before storage keeps raw ballot contents out of the ledger, limiting what an attacker can extract even with full read access. ECDSA was chosen over symmetric signing because verification must be possible with a public key that the verifier obtains independently. Merkle proofs were selected over storing every ballot in the tally, so verification cost stays logarithmic as the number of voters grows. The implementation is being documented as a full research paper for a SINTA 3 indexed venue.",
      },
    ],
    links: [
      {
        label: "GITHUB // FIANNNN9090",
        href: profile.github,
        kind: "repository",
      },
    ],
    liveUrl: null,
    artifact: "voting",
    accent: true,
  },
  {
    slug: "rapi",
    index: "02",
    id: "CASE 02",
    title: "RAPI",
    subtitle: "PERSONAL FINANCE TRACKER",
    category: "ANDROID APPLICATION",
    year: "2026",
    status: "SHIPPED",
    summary:
      "An Android personal finance tracker for recording daily transactions, organising them into categories, setting monthly budgets, and reviewing personal financial reports.",
    intro:
      "A personal finance tracker built for Android: record what goes in and out, keep it categorised, hold a monthly budget, and read the result back as a report you can actually act on.",
    image: {
      src: "/projects/rapi.webp",
      alt: "RAPI Android interface showing a balance readout, transaction list, and a monthly budget usage bar",
      width: 1200,
      height: 900,
    },
    featuredStack: ["FLUTTER", "SQLITE"],
    stack: [
      "Flutter",
      "Dart",
      "Android",
      "SQLite",
      "Clean Architecture",
      "Provider",
      "Charts",
      "CSV Export",
      "Offline-First",
    ],
    sections: [
      {
        heading: "PROBLEM",
        body: "Most people track spending with a notebook or a spreadsheet, which means the data is only as good as the habit behind it, and it is rarely available at the moment a purchase happens. Existing finance apps want an account, a network round trip, and a subscription before they will show you a number. I wanted an app that opens instantly, works on a plane or in a dead zone, and keeps the data on the device I already own.",
      },
      {
        heading: "KEY FEATURES",
        body: "Transactions are recorded in a few taps with an amount, a note, and a category. Categories are user-defined, so the taxonomy fits the way that person actually spends rather than a preset list. Each month carries a budget per category with a live usage bar, so overspending is visible while it is still happening rather than in a summary at the end. Reports roll the month up into income, expense, and net figures with per-category breakdowns, and the whole dataset can be exported to CSV for deeper analysis in a spreadsheet.",
      },
      {
        heading: "TECHNICAL DECISIONS",
        body: "SQLite is the primary store rather than a network backend, which makes every read and write local and removes the loading spinner from the critical path entirely. Clean Architecture separates the Flutter widget layer, the domain layer holding entities and use cases, and the data layer with its repository implementation, so the UI never talks to SQLite directly and the business rules stay testable in isolation. State is handled with Provider to keep the dependency surface small. Being offline-first is a constraint, not a fallback: the app is fully functional with the network disabled.",
      },
    ],
    links: [
      {
        label: "GITHUB // FIANNNN9090",
        href: profile.github,
        kind: "repository",
      },
    ],
    liveUrl: null,
    artifact: "rapi",
    accent: false,
  },
  {
    slug: "number-shift",
    index: "03",
    id: "CASE 03",
    title: "NUMBER SHIFT",
    subtitle: "MINIMALIST SLIDING ENGINE & MATRIX SOLVER",
    category: "PUZZLE ENGINE",
    year: "2026",
    status: "SHIPPED",
    summary:
      "A mobile sliding-tile puzzle for Android, built in Flutter with no game engine and no network calls: custom canvas rendering, a permutation matrix core, and solvability proven by parity.",
    intro:
      "A 15-puzzle game for Android where the sliding logic, the move history, and the solvability proof are all written from scratch — no game framework, no backend, no network calls.",
    image: {
      src: "/projects/number-shift.webp",
      alt: "Four by four sliding puzzle grid with one tile highlighted and a panel showing the inversion-parity solvability test",
      width: 1200,
      height: 900,
    },
    featuredStack: ["FLUTTER", "CANVAS"],
    stack: [
      "Flutter",
      "Dart",
      "Android",
      "Custom Canvas",
      "Matrix Engine",
      "Clean Architecture",
      "Undo Stack",
      "Local Persistence",
      "Offline-First",
    ],
    sections: [
      {
        heading: "PROBLEM",
        body: "The 15-puzzle looks trivial and is not: roughly half of all reachable tile arrangements are dead ends that cannot be solved, and a game that lets you reach one has no move history worth keeping. Writing it with an off-the-shelf engine would hide both the interesting part, which is the state machine, and the failure mode. I wanted a small game where the maths is the product.",
      },
      {
        heading: "KEY FEATURES",
        body: "Tiles slide with a gesture-velocity driven animation so a fast swipe and a slow drag both read correctly. Every move is pushed onto an undo stack, so a dead end is recoverable instead of fatal. The board can be re-scrambled to a guaranteed-solvable layout at any time. Progress and best move counts are stored locally and survive a restart. There is no network call anywhere in the app.",
      },
      {
        heading: "TECHNICAL DECISIONS",
        body: "Solubility is decided by the inversion-parity theorem of permutations rather than by search: the board state is stored as a permutation matrix and the inversion count is checked in constant time, which rules out half the state space before a move is ever applied. Rendering uses Flutter's canvas primitives directly instead of a game framework, keeping the dependency list short and the frame budget under control. Clean Architecture keeps the Cubie and Board entities in the domain layer, with the widget layer only responsible for presenting state and translating gestures into commands.",
      },
    ],
    links: [
      {
        label: "GITHUB // FIANNNN9090",
        href: profile.github,
        kind: "repository",
      },
    ],
    liveUrl: null,
    artifact: "shift",
    accent: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
