module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "react-hooks/exhaustive-deps": "off",
  },
  ignorePatterns: [
    ".next/",
    "out/",
    "build/",
    "next-env.d.ts",
    "sanity.cli.ts",
    "sanity.config.ts",
  ],
};
