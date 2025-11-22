# Changesets

이 폴더는 [changesets](https://github.com/changesets/changesets)에 의해 관리됩니다.

## Changesets란?

Changesets는 버전 관리와 릴리스를 자동화하는 도구입니다.

## 사용 방법

### 1. 변경사항 기록하기

코드를 수정한 후:

```bash
pnpm changeset
```

대화형으로 다음을 선택합니다:

- 어떤 패키지를 변경했나요? (스페이스바로 선택)
- 어떤 타입의 변경인가요? (patch/minor/major)
- 변경사항을 설명해주세요

이렇게 하면 `.changeset` 폴더에 변경사항이 기록됩니다.

### 2. 버전 업데이트 & 릴리스

main 브랜치에 머지되면 GitHub Actions가 자동으로:

1. "Version Packages" PR을 생성합니다
2. 이 PR을 머지하면 자동으로 npm에 배포됩니다

## 버전 타입

- **patch** (0.1.3 → 0.1.4): 버그 수정
- **minor** (0.1.3 → 0.2.0): 새 기능 추가
- **major** (0.1.3 → 1.0.0): Breaking changes

## 더 알아보기

- [Changesets 문서](https://github.com/changesets/changesets/blob/main/docs/intro-to-using-changesets.md)
