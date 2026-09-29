import type { SVGProps } from "react";

const paths = {
  arrow_forward: "M4 12h15m0 0-6-6m6 6-6 6",
  east: "M4 12h16m0 0-7-7m7 7-7 7",
  south: "M12 4v16m0 0 7-7m-7 7-7-7",
  north: "M12 20V4m0 0 7 7m-7-7-7 7",
  download: "M12 3v12m0 0 5-5m-5 5-5-5M4 21h16",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
