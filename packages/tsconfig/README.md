# @m1nsuppp/tsconfig

공용 TypeScript 설정 모음.

## 설치

```bash
npm i -D @m1nsuppp/tsconfig typescript
# or
pnpm add -D @m1nsuppp/tsconfig typescript
# or
yarn add -D @m1nsuppp/tsconfig typescript
```

## 사용법

프로젝트 루트에 `tsconfig.json`을 만들고 `extends`로 가져오면 됨.

### Browser (웹/프론트엔드)
```json
{
  "extends": "@m1nsuppp/tsconfig/browser",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

### Node (백엔드/라이브러리)
```json
{
  "extends": "@m1nsuppp/tsconfig/node",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

## 구성 파일
- `tsconfig.browser.json`: 브라우저/웹 앱을 위한 기본 설정 (DOM + JSX, Bundler 해석)
- `tsconfig.node.json`: Node 환경을 위한 기본 설정 (NodeNext 모듈 해석)

## 라이선스
MIT
