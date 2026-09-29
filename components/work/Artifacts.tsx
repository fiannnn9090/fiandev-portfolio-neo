import { Icon } from "../ui/Icon";
import { Tag } from "../ui/SectionHeader";

type BoxProps = {
  label: string;
  title: string;
  note: string;
  variant?: "plain" | "shadow" | "solid";
  accent?: boolean;
};

function FlowBox({ label, title, note, variant = "plain", accent = false }: BoxProps) {
  const shell =
    variant === "solid"
      ? "border-2 border-on-surface bg-on-surface text-surface"
      : variant === "shadow"
        ? "border-2 border-on-surface bg-surface text-on-surface shadow-[4px_4px_0px_0px_#111111]"
        : "border border-on-surface bg-surface text-on-surface";

  return (
    <div className={`p-3.5 ${shell}`}>
      <span
        className={`block text-[10px] uppercase ${accent ? "font-bold text-primary" : "text-secondary"}`}
      >
        {label}
      </span>
      <span className="text-sm font-bold uppercase">{title}</span>
      <span
        className={`mt-1 block text-[10px] ${variant === "solid" ? "text-secondary-bright" : accent ? "text-primary" : "text-secondary"}`}
      >
        {note}
      </span>
    </div>
  );
}

function Connector({ label, note }: { label: string; note: string }) {
  return (
    <div className="hidden flex-col items-center justify-center text-secondary md:flex">
      <span className="text-[10px] font-bold text-primary">{label}</span>
      <div className="relative h-0.5 w-full bg-on-surface">
        <span className="absolute top-1/2 right-0 size-1.5 -translate-y-1/2 bg-on-surface" />
      </div>
      <span className="text-[9px]">{note}</span>
    </div>
  );
}

function DiagramShell({
  header,
  status,
  children,
  footnote,
}: {
  header: string;
  status: string;
  children: React.ReactNode;
  footnote: [string, string];
}) {
  return (
    <div className="flex flex-col justify-between border-2 border-on-surface bg-plane p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-line pb-3 font-mono text-xs text-secondary">
        <div className="flex items-center gap-2">
          <span className="block size-2.5 bg-primary" aria-hidden="true" />
          <span className="font-bold text-on-surface">{header}</span>
        </div>
        <span className="bg-on-surface px-2 py-0.5 text-[10px] tracking-wider text-surface uppercase">
          {status}
        </span>
      </div>

      <div className="flex flex-col gap-8 py-10 font-mono">{children}</div>

      <div className="flex flex-wrap items-center justify-between border-t border-line pt-3 font-mono text-[11px] text-secondary">
        <span>{footnote[0]}</span>
        <span>{footnote[1]}</span>
      </div>
    </div>
  );
}

export function VotingArtifact() {
  return (
    <DiagramShell
      header="FLOW // CRYPTOGRAPHIC VERIFICATION"
      status="IMMUTABLE / VALIDATED"
      footnote={["LEDGER: APPEND-ONLY", "PAPER TARGET: SINTA 3 JOURNAL"]}
    >
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        <FlowBox variant="shadow" label="INPUT ARTIFACT" title="01 // VOTE" note="PAYLOAD: BALLOT_HASH" />
        <Connector label="[ECDSA]" note="ASYMMETRIC SIGN" />
        <FlowBox label="TRANSACTION" title="DIGITAL SIGNATURE" note="PUBKEY VERIFIED" />
      </div>

      <div className="flex items-center justify-center">
        <div className="h-6 w-0.5 bg-on-surface" />
      </div>

      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3">
        <FlowBox label="AGGREGATION" title="BLOCK" note="TIMELOCKED / BATCHED" />
        <Connector label="[HASH TREE]" note="SHA-256 ROOTS" />
        <FlowBox variant="solid" accent label="STATE VERIFICATION" title="MERKLE TREE ROOT" note="AUDIT LEDGER CONFIRMED" />
      </div>
    </DiagramShell>
  );
}

const transactions = [
  { name: "GAJI / BULANAN", amount: "+3.200.000", tone: "bg-primary", state: "MASUK" },
  { name: "BELANJA BULANAN", amount: "−425.000", tone: "bg-on-surface", state: "CATAT" },
  { name: "TRANSPOR", amount: "−150.000", tone: "bg-on-surface", state: "OFFLINE" },
  { name: "TAGIHAN", amount: "−350.000", tone: "border border-on-surface", state: "TERJADWAKAN" },
] as const;

export function RapiArtifact() {
  return (
    <div className="relative flex items-center justify-center p-6 md:p-10">
      <div className="pointer-events-none absolute -top-4 -left-4 h-4/5 w-4/5 border border-line bg-plane-warm" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-4 -bottom-6 size-32 bg-primary/10" aria-hidden="true" />

      <div className="z-10 w-full max-w-md border-2 border-on-surface bg-surface p-6 shadow-[8px_8px_0px_0px_#111111]">
        <div className="flex items-center justify-between border-b border-line pb-3 font-mono text-[11px] text-secondary">
          <span className="font-bold text-on-surface uppercase">RAPI // FINANCE LEDGER</span>
          <span className="font-semibold text-primary">SYNC: OFFLINE</span>
        </div>

        <div className="space-y-4 py-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-display block text-lg font-bold text-on-surface uppercase">
                SEPTEMBER 2026
              </span>
              <span className="font-mono text-xs text-secondary">4 TRANSAKSI TERCATAT</span>
            </div>
            <div className="flex size-7 items-center justify-center bg-primary font-bold text-sm text-white">+</div>
          </div>

          <dl className="grid grid-cols-2 gap-2 font-mono text-xs">
            <div className="border border-line bg-surface-dim p-2.5">
              <dt className="text-[10px] text-secondary uppercase">SALDO</dt>
              <dd className="text-sm font-bold text-on-surface">1.275.000</dd>
            </div>
            <div className="border border-line bg-surface-dim p-2.5">
              <dt className="text-[10px] text-secondary uppercase">NETO / BULAN INI</dt>
              <dd className="text-sm font-bold text-primary">+2.275.000</dd>
            </div>
          </dl>

          <ul className="space-y-2 font-mono text-xs">
            {transactions.map((t) => (
              <li
                key={t.name}
                className="flex items-center justify-between border border-line bg-surface p-2.5"
              >
                <span className="flex items-center gap-2">
                  <span className={`block size-2.5 ${t.tone}`} aria-hidden="true" />
                  <span className="font-semibold text-on-surface uppercase">{t.name}</span>
                </span>
                <span className="text-[10px] text-secondary">
                  {t.amount} <span className="text-primary">/ {t.state}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-line pt-3 font-mono text-[11px]">
            <div className="mb-1 flex justify-between text-secondary">
              <span>ANGGARAN TERPAKAI</span>
              <span className="font-bold text-on-surface">62%</span>
            </div>
            <div className="h-2 w-full border border-line bg-surface-dim">
              <div className="h-full w-[62%] bg-primary" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-line pt-2 font-mono text-[10px] text-secondary">
          <span>STORAGE: SQLITE / LOCAL-FIRST</span>
          <span>EXPORT: CSV</span>
        </div>
      </div>
    </div>
  );
}

const tiles = Array.from({ length: 15 }, (_, i) => i + 1);

export function ShiftArtifact() {
  return (
    <DiagramShell
      header="PERMUTATION MATRIX [4x4 GRID]"
      status="INVERSIONS: N % 2 == 0"
      footnote={["GESTURE: CANVAS VELOCITY", "STATE: SOLVABLE / OFFLINE"]}
    >
      <div className="mx-auto grid w-full max-w-xs grid-cols-4 gap-2.5 py-2">
        {tiles.map((n) => (
          <div
            key={n}
            className={`flex aspect-square items-center justify-center border-2 font-display text-xl font-bold shadow-[2px_2px_0px_0px_#111111] ${
              n === 6
                ? "border-primary bg-primary text-white"
                : "border-on-surface bg-surface text-on-surface"
            }`}
          >
            {n}
          </div>
        ))}
        <div className="flex aspect-square items-center justify-center border-2 border-dashed border-secondary/40 bg-surface-dim font-mono text-xs text-secondary">
          NULL
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-line pt-4">
        <Tag>SWIPE</Tag>
        <Tag>UNDO STACK</Tag>
        <Tag>NO NETWORK CALLS</Tag>
      </div>
    </DiagramShell>
  );
}

export const artifacts = {
  voting: VotingArtifact,
  rapi: RapiArtifact,
  shift: ShiftArtifact,
} as const;

export function ArtifactLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 border-b-2 border-on-surface pb-1 font-mono text-xs font-bold tracking-widest text-on-surface uppercase transition-colors hover:text-primary"
    >
      <span>{label}</span>
      <Icon name="arrow_forward" className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
