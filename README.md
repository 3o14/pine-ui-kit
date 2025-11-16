# 🥧 Pie UI

**React + TypeScript 기반의 모던 UI 컴포넌트 라이브러리**

디자인 토큰 우선 접근 방식으로 구축된 확장 가능하고 접근성 있는 UI 컴포넌트 라이브러리입니다.

## ✨ 특징

- 🎨 **토큰 기반 디자인 시스템** - 일관된 디자인 언어
- 🌗 **라이트/다크 모드** - 내장 테마 지원
- ♿ **접근성 우선** - WCAG 2.1 준수
- 📦 **Tree-shakeable** - 최적화된 번들 크기
- 🔧 **TypeScript** - 완벽한 타입 지원
- 🎭 **Vanilla Extract** - Zero-runtime CSS-in-JS

## 📚 문서

**전체 문서는 Storybook에서 확인하세요:**

```bash
pnpm install
pnpm run storybook
```

Storybook에서 다음을 확인할 수 있습니다:
- 📖 **Introduction** - 프로젝트 소개
- 🚀 **Getting Started** - 설치 및 사용법
- 📝 **Changelog** - 버전 히스토리
- 🧩 **Components** - 모든 컴포넌트 문서 및 예제

## 🧩 컴포넌트

- **Badge** - 상태, 레이블, 카운트 표시
- **Button** - 다양한 variant와 상태
- **Checkbox** - 체크박스 입력
- **Dialog** - 모달 대화상자
- **Switch** - 토글 스위치
- **TextField** - 텍스트 입력 필드

## 🚀 빠른 시작

```tsx
import { Button, Badge } from 'pie-ui';

function App() {
  return (
    <>
      <Button intent="primary" size="md">
        Click me
      </Button>
      <Badge variant="subtle" intent="success">
        New
      </Badge>
    </>
  );
}
```

## 🛠️ 개발

```bash
# 의존성 설치
pnpm install

# Storybook 실행
pnpm run storybook

# Lint 검사
pnpm run lint

# Storybook 빌드
pnpm run build-storybook
```

## 📦 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vanilla Extract** - CSS-in-JS (Zero-runtime)
- **Vite** - 빌드 도구
- **Storybook 8** - 문서화 및 개발 환경
- **ESLint** - 코드 품질

## 🎯 프로젝트 목표

이 프로젝트는 **디자인 시스템 역할로의 전환**을 목표로 하는 학습 프로젝트입니다:

- ✅ React + TypeScript 기반 컴포넌트 개발
- ✅ 디자인 토큰 관리 및 적용
- ✅ Storybook을 통한 문서화
- ✅ 접근성(A11y) 고려
- 🔄 npm 배포 및 버전 관리 (예정)

## 📄 라이선스

MIT License
