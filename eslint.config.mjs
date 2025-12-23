import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, {
  rules: {
    "no-warning-comments": "off",      // Отключает ошибки из-за TODO, FIXME
    "no-unused-vars": "warn",          // Предупреждение вместо ошибки
    "no-unused-expressions": "warn",   // Предупреждение вместо ошибки
  },
}, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];

export default eslintConfig;
