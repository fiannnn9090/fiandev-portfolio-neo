import Image from "next/image";
import type { Certificate } from "@/lib/certificates";
import { formatIssueDate } from "@/lib/certificates";
import { Icon } from "./ui/Icon";
import { Tag } from "./ui/SectionHeader";

/**
 * Compact tile used on /certificates (1 / 2 / 3 columns).
 * Same substrate as WorkCard: hairline frame, mono header chip, vermilion action row.
 * External links are plain <a> siblings — never nested inside an inner link.
 * Every action (image link, VIEW PDF, DOWNLOAD, VERIFY CREDENTIAL) is conditional
 * on its field existing; the image frame only becomes a link when a PDF exists too.
 */
export function CertificateCard({
  certificate,
  priority = false,
}: {
  certificate: Certificate;
  /** First-row cards only: eager + high fetch priority for the LCP image. */
  priority?: boolean;
}) {
  const imageSrc = certificate.image;
  const pdf = certificate.pdf;
  const imageLinked = Boolean(imageSrc) && Boolean(pdf);
  const hasActions = Boolean(pdf) || Boolean(certificate.credentialUrl);
  const imageFrame = imageSrc ? (
    <>
      <Image
        src={imageSrc}
        alt={`${certificate.title} credential`}
        width={1200}
        height={900}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        className="aspect-4/3 w-full border border-line object-cover"
      />
      <span className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-wider text-secondary uppercase">
        <span>
          FIG. {certificate.id} {"//"} {certificate.title}
        </span>
        {imageLinked ? (
          <span className="flex items-center gap-2 font-bold text-primary">
            OPEN PDF
            <Icon name="east" className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        ) : null}
      </span>
    </>
  ) : null;

  return (
    <article className="group flex h-full flex-col border border-line bg-surface transition-colors hover:bg-surface-dim">
      {/* technical header bar */}
      <span className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-5 py-3 font-mono text-[11px] text-secondary sm:px-7">
        <span className="flex items-center gap-3">
          <span className="bg-on-surface px-2 py-0.5 font-bold text-surface">{certificate.id}</span>
          <span aria-hidden="true">/</span>
          <span className="tracking-wider uppercase">{certificate.platform}</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="uppercase">{formatIssueDate(certificate.issuedAt)}</span>
          <span className="block size-3 bg-primary" aria-hidden="true" />
        </span>
      </span>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-7">
        {/* credential artwork — only when a file exists; linked when a PDF exists too */}
        {imageFrame ? (
          imageSrc && pdf ? (
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certificate.title} certificate PDF`}
              className="block border border-line bg-plane p-3 transition-colors hover:border-primary"
            >
              {imageFrame}
            </a>
          ) : (
            <div className="relative border border-line bg-plane p-3">{imageFrame}</div>
          )
        ) : null}

        <span className="flex flex-col gap-1.5">
          <h3 className="font-display text-2xl font-bold tracking-tight text-on-surface uppercase">
            {certificate.title}
          </h3>
          <span className="font-mono text-xs font-bold tracking-wider text-primary uppercase">
            {certificate.issuer}
          </span>
        </span>

        <span className="mt-auto border-t border-line pt-4">
          <Tag>{certificate.category}</Tag>
        </span>
      </div>

      {/* ── Action row: each action renders only when its field exists ── */}
      {hasActions ? (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line px-5 py-4 font-mono text-[11px] sm:px-7">
          {pdf ? (
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${certificate.title} certificate PDF`}
              className="flex items-center gap-2 font-bold tracking-widest text-primary uppercase transition-colors hover:text-on-surface"
            >
              <span className="block size-2 bg-primary" aria-hidden="true" />
              <span>VIEW PDF</span>
              <Icon name="east" className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          ) : null}

          {pdf ? (
            <a
              href={pdf}
              download
              aria-label={`Download ${certificate.title} certificate PDF`}
              className="flex items-center gap-2 font-bold tracking-widest text-primary uppercase transition-colors hover:text-on-surface"
            >
              <span className="block size-2 bg-primary" aria-hidden="true" />
              <span>DOWNLOAD</span>
              <Icon name="download" className="size-3.5" />
            </a>
          ) : null}

          {certificate.credentialUrl ? (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${certificate.title} credential`}
              className="flex items-center gap-2 font-bold tracking-widest text-primary uppercase transition-colors hover:text-on-surface"
            >
              <span className="block size-2 bg-primary" aria-hidden="true" />
              <span>VERIFY CREDENTIAL</span>
              <Icon name="east" className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
