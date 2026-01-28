import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default tseslint.config(
  // 1. 기본 자바스크립트 권장 설정
  js.configs.recommended,
  
  // 2. 타입스크립트 권장 설정 (배열로 제공됨)
  ...tseslint.configs.recommended,
  
  // 3. 리액트 권장 설정
  pluginReact.configs.flat.recommended,

  // 4. 프로젝트 커스텀 설정
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // 여기에 추가하고 싶은 규칙을 적습니다.
      "react/react-in-jsx-scope": "off", // React 17+ 사용 시 필수
    },
  },
);