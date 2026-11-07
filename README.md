# 학급경영 허브

바이브 코딩으로 만드는 학급경영 도구 모음. 모든 도구는 서버 없이 브라우저에서만 작동하며,
학생 명단 등 데이터는 사용하는 기기의 `localStorage`에만 저장됩니다.

## 구조
```
index.html                    허브 메인 (도구 카드 목록)
assets/style.css              공통 디자인 토큰·컴포넌트
assets/apps.js                앱 등록부 — 새 도구는 여기에 한 항목 추가
apps/student-picker/          🎲 학생 뽑기
```

## 새 도구 추가하기
1. `apps/<도구-id>/index.html` 을 만들고 `../../assets/style.css` 를 불러옵니다.
2. `assets/apps.js` 의 `HUB_APPS` 에 항목을 추가합니다 (`status: "live"`, `path: "apps/<도구-id>/"`).

## 배포 (GitHub Pages)
`main` 브랜치의 루트(`/`)가 그대로 게시됩니다 → https://yewon35.github.io/classroom-hub/
`main`에 올리면 1~2분 뒤 자동 반영됩니다. 별도 빌드 과정은 없습니다.
