import type { Metadata } from "next";
import { Dossier } from "@/components/Dossier";
import { GitHubStats } from "@/components/GitHubStats";
import { HowIBuild } from "@/components/HowIBuild";
import { Manifesto } from "@/components/Manifesto";
import { StillLearning } from "@/components/StillLearning";
import { ToolsStack } from "@/components/ToolsStack";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alham Maesanjaya (FIANDEV) — informatics undergraduate focused on data analysis, SQL, and building reliable client systems. Dossier, working method, tools, and learning timeline.",
  openGraph: {
    title: "About — FIANDEV",
    description: "Dossier, working method, tools, and learning timeline.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Dossier />
      <Manifesto />
      <HowIBuild />
      <ToolsStack />
      <StillLearning />
      <GitHubStats />
    </>
  );
}
