import path from "path";
import fs from "fs";

export default function mp3ResolverPlugin() {
  return {
    resolveId(source, importer) {
      if (source.endsWith(".mp3")) {
        return path.resolve(path.dirname(importer), source);
      }
    },
    load(id) {
      if (id.endsWith(".mp3")) {
        const referenceId = this.emitFile({
          type: "asset",
          name: path.basename(id),
          source: fs.readFileSync(id),
        });
        return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`;
      }
    },
  };
}
