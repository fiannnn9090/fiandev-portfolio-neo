import { existsSync } from "node:fs";
import path from "node:path";

export type CertificateCategory = "Data" | "Project Management" | "AI";

export type Certificate = {
  /** Stable record id, rendered as the header chip on the card */
  id: string;
  title: string;
  issuer: string;
  platform: string;
  /** ISO calendar date (YYYY-MM-DD) */
  issuedAt: string;
  category: CertificateCategory;
  /**
   * Public verification URL.
   * `undefined` = nothing to link to; the UI omits the VERIFY CREDENTIAL row entirely.
   */
  credentialUrl?: string;
  /**
   * Credential artwork under /public/certificates.
   * Optional — usually omitted so `withDerivedImage()` derives the generated
   * thumbnail from `pdf` (`/certificates/thumbs/<name>.png`, see `npm run thumbs`).
   */
  image?: string;
  /**
   * Scanned certificate PDF under /public/certificates (e.g. "/certificates/ibm-data-science.pdf").
   * Omitted = the VIEW PDF / DOWNLOAD actions are hidden, and the image is not linked.
   */
  pdf?: string;
};

const seed: Certificate[] = [
  {
    id: "CERT 01",
    title: "Google Project Management",
    issuer: "Google",
    platform: "Coursera",
    issuedAt: "2026-10-05",
    category: "Project Management",
    pdf: "/certificates/google-project-management.pdf",
  },
  {
    id: "CERT 02",
    title: "Google AI",
    issuer: "Google",
    platform: "Coursera",
    issuedAt: "2026-10-05",
    category: "AI",
    pdf: "/certificates/google-ai.pdf",
  },
  {
    id: "ibm-what-is-data-science",
    title: "What is Data Science?",
    issuer: "IBM",
    platform: "Coursera",
    issuedAt: "2026-09-01",
    category: "Data",
    pdf: "/certificates/ibm-what-is-data-science.pdf",
  },
  {
    id: "CERT 04",
    title: "IBM Data Science",
    issuer: "IBM",
    platform: "Coursera",
    issuedAt: "2026-09-01",
    category: "Data",
    pdf: "/certificates/ibm-data-science.pdf",
  },
  {
    id: "CERT 05",
    title: "IBM Data Science",
    issuer: "IBM",
    platform: "Coursera",
    issuedAt: "2026-09-01",
    category: "Data",
    pdf: "/certificates/ibm-data-science.pdf",
  },
  {
    id: "CERT 06",
    title: "IBM Data Science",
    issuer: "IBM",
    platform: "Coursera",
    issuedAt: "2026-09-01",
    category: "Data",
    pdf: "/certificates/ibm-data-science.pdf",
  },
];

/**
 * Single place where thumbnails are resolved: an explicit `image` always wins,
 * otherwise a certificate with a `pdf` points at its generated thumb PNG.
 * Build-time guard (node:fs): if the thumb was never generated, the certificate
 * is returned without an `image` so the card skips the image block entirely.
 */
function withDerivedImage(certificate: Certificate): Certificate {
  if (certificate.image || !certificate.pdf) return certificate;

  const file = certificate.pdf.slice(certificate.pdf.lastIndexOf("/") + 1);
  const name = file.replace(/\.pdf$/i, "");
  const image = `/certificates/thumbs/${name}.png`;

  if (!existsSync(path.join(process.cwd(), "public", image))) return certificate;
  return { ...certificate, image };
}

/** Newest first — ordering is enforced, not hand-authored. */
export const certificates: Certificate[] = [...seed]
  .map(withDerivedImage)
  .sort((a, b) => b.issuedAt.localeCompare(a.issuedAt));

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
] as const;

/** "2026-10-05" → "05 OCT 2026". Parsed as UTC so ISO dates never shift a day. */
export function formatIssueDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${day} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
