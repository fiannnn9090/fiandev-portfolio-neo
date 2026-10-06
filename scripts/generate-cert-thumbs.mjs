import { pdf } from "pdf-to-img";
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.join(process.cwd(), "public", "certificates");
const OUT = path.join(SRC, "thumbs");

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) => f.toLowerCase().endsWith(".pdf"));

for (const file of files) {
  const name = path.parse(file).name;
  const doc = await pdf(path.join(SRC, file), { scale: 1.5 });
  for await (const page of doc) {
    await writeFile(path.join(OUT, `${name}.png`), page);
    break; // first page only
  }
  console.log(`thumb: ${name}.png`);
}
