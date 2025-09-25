import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "colors": {
        "gray": {
          "bg-default": "oklch(21.78% 0 116.2)",
          "bg-hover": "oklch(23.93% 0 116.2)",
          "bg-active": "oklch(26% 0 118.64)",
          "border-default": "oklch(24% 0 118.64)",
          "border-hover": "oklch(26.5% 0 118.64)",
          "border-active": "oklch(43.5% 0 118.64)",
          "bg-hc": "oklch(57% 0 118.64)",
          "bg-hc-hover": "oklch(48.5% 0 118.64)",
          "secondary": "oklch(71.5% 0 118.64)",
          "primary": "oklch(89% 0 118.64)"
        },
        "blue": {
          "bg-default": "oklch(21.78% 0.062 243)",
          "bg-hover": "oklch(24.14% 0.0731 242.05)",
          "bg-active": "oklch(26.23% 0.0816 241.62)",
          "border-default": "oklch(24.21% 0.0734 242.02)",
          "border-hover": "oklch(26.74% 0.0839 241.47)",
          "border-active": "oklch(43.5% 0.246 241.06)",
          "bg-hc": "oklch(57.57% 0.1988 239.85)",
          "bg-hc-hover": "oklch(48.98% 0.226 239.83)",
          "secondary": "oklch(72.04% 0.1876 244.27)",
          "primary": "oklch(89.14% 0.0585 254.28)"
        },
        "red": {
          "bg-default": "oklch(21.78% 0.062 49.52)",
          "bg-hover": "oklch(24.48% 0.0819 44.64)",
          "bg-active": "oklch(26.7% 0.0975 41.27)",
          "border-default": "oklch(24.55% 0.082 44.43)",
          "border-hover": "oklch(27.24% 0.1014 40.57)",
          "border-active": "oklch(44.72% 0.2302 27.43)",
          "bg-hc": "oklch(59.5% 0.264 25)",
          "bg-hc-hover": "oklch(50.57% 0.2598 26)",
          "secondary": "oklch(73.37% 0.238 33.22)",
          "primary": "oklch(89.47% 0.0754 37.6)"
        },
        "amber": {
          "bg-default": "oklch(21.78% 0.0623 82.5)",
          "bg-hover": "oklch(24.01% 0.0743 80.89)",
          "bg-active": "oklch(26.12% 0.0829 78.84)",
          "border-default": "oklch(24.08% 0.0742 80.71)",
          "border-hover": "oklch(26.63% 0.0849 78.36)",
          "border-active": "oklch(43.18% 0.1374 64.73)",
          "bg-hc": "oklch(57.82% 0.1775 58.7)",
          "bg-hc-hover": "oklch(48.87% 0.1529 61.74)",
          "secondary": "oklch(72.56% 0.2177 56.48)",
          "primary": "oklch(89.16% 0.1175 67.92)"
        },
        "green": {
          "bg-default": "oklch(21.78% 0.0623 159)",
          "bg-hover": "oklch(23.16% 0.0688 159.02)",
          "bg-active": "oklch(25.14% 0.077 159.08)",
          "border-default": "oklch(23.23% 0.069 159.03)",
          "border-hover": "oklch(25.62% 0.0791 159.08)",
          "border-active": "oklch(41.14% 0.1365 159.05)",
          "bg-hc": "oklch(54.97% 0.1821 159.05)",
          "bg-hc-hover": "oklch(46.51% 0.1543 159.05)",
          "secondary": "oklch(68.96% 0.2286 159.05)",
          "primary": "oklch(86.09% 0.2607 159.08)"
        },
        "teal": {
          "bg-default": "oklch(21.78% 0.0623 186)",
          "bg-hover": "oklch(23.24% 0.0681 186.36)",
          "bg-active": "oklch(25.24% 0.0744 186.52)",
          "border-default": "oklch(23.3% 0.0686 186.37)",
          "border-hover": "oklch(25.73% 0.0761 186.53)",
          "border-active": "oklch(41.31% 0.1321 186.59)",
          "bg-hc": "oklch(55.21% 0.224 186.59)",
          "bg-hc-hover": "oklch(46.71% 0.1493 186.58)",
          "secondary": "oklch(69.25% 0.2214 186.59)",
          "primary": "oklch(86.44% 0.2516 186.51)"
        },
        "purple": {
          "bg-default": "oklch(21.78% 0.0623 307.5)",
          "bg-hover": "oklch(24.96% 0.076 307.08)",
          "bg-active": "oklch(27.15% 0.0844 306.93)",
          "border-default": "oklch(25.04% 0.0762 307.08)",
          "border-hover": "oklch(27.68% 0.0862 306.91)",
          "border-active": "oklch(44.74% 0.198 306.36)",
          "bg-hc": "oklch(49% 0.196 308.08)",
          "bg-hc-hover": "oklch(50.58% 0.1689 306.37)",
          "secondary": "oklch(72.7% 0.1019 310.48)",
          "primary": "oklch(89.39% 0.0354 312.29)"
        },
        "pink": {
          "bg-default": "oklch(21.78% 0.0623 340.5)",
          "bg-hover": "oklch(24.87% 0.076 340.52)",
          "bg-active": "oklch(27.04% 0.0842 340.52)",
          "border-default": "oklch(24.94% 0.0763 340.52)",
          "border-hover": "oklch(27.57% 0.0867 340.53)",
          "border-active": "oklch(44.53% 0.192 340.54)",
          "bg-hc": "oklch(59.5% 0.22 340.54)",
          "bg-hc-hover": "oklch(50.34% 0.1707 340.54)",
          "secondary": "oklch(73.79% 0.1873 340.48)",
          "primary": "oklch(89.69% 0.0585 340.32)"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
