import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "no-warning-comments": "off",      // Отключает ошибки из-за TODO, FIXME
      "no-unused-vars": "warn",          // Предупреждение вместо ошибки
      "no-unused-expressions": "warn",   // Предупреждение вместо ошибки
    },
  },
];

export default eslintConfig;
