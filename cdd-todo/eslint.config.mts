// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default tseslint.config(// 1. 기본 JS 추천 설정
js.configs.recommended, // 2. 타입스크립트 추천 설정
...tseslint.configs.recommended, // 3. 리액트 추천 설정
pluginReact.configs.flat.recommended, // 4. 사용자 정의 설정 (커스텀 규칙 등)
{
  files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  // 필요한 경우 여기에 rules 추가
  rules: {
    "react/react-in-jsx-scope": "off", // 최신 리액트라면 필요함
  },
}, storybook.configs["flat/recommended"]);