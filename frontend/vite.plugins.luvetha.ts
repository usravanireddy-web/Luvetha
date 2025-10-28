import type { Plugin } from "vite";

export type LuvethaTaggerOptions = {
  enabled?: boolean;
};

// Simple Vite plugin that injects a small meta tag for verification/debugging
export function luvethaTagger(options: LuvethaTaggerOptions = {}): Plugin {
  const enabled = options.enabled ?? true;

  return {
    name: "luvetha-tagger",
    // Apply during dev server; change to "build" or remove to apply in both
    apply: "serve",

    transformIndexHtml(html) {
      if (!enabled) return html;
      const meta = '<meta name="luvetha" content="enabled" />\n';
      return html.includes("</head>")
        ? html.replace("</head>", `  ${meta}</head>`)
        : `${meta}${html}`;
    },
  };
}