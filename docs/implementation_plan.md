# 로그인 컴포넌트 연구 계획 (Vanilla JS)

## 목표 설명
React로 넘어가기 전, Vanilla JS를 사용하여 컴포넌트 기반 구조를 학습합니다.
각 화면 요소를 별도의 JS 파일(모듈)로 분리하고, 부모-자식 관계 및 상태(State)에 따른 화면 갱신 원리를 이해하는 것이 목표입니다.

## 사용자 검토 필요
> [!NOTE]
> React와 같은 라이브러리 없이 순수 JavaScript로 "컴포넌트" 개념을 흉내 냅니다.
> 각 컴포넌트는 HTML 요소를 반환하거나 특정 DOM 요소에 렌더링하는 함수/클래스 형태로 구현됩니다.

## 변경 제안

### Git 작업
1. `develop` 브랜치 생성 및 체크아웃.
2. `feature/login` 브랜치 생성 및 체크아웃.

### 프로젝트 구조 (신규 파일)
- `index.html`: 앱의 뼈대 (Root Element 포함)
- `css/style.css`: 기본 스타일
- `js/main.js`: 진입점. 전체 레이아웃 구성.
- `js/components/TopComponent.js`: 상단 헤더 렌더링.
- `js/components/CenterComponent.js`:
    - 중앙 영역을 관리하며, 상태(State)에 따라 자식 컴포넌트(`LoginReady`, `LoginForm`, `MainDashboard`)를 교체하여 보여줍니다.
- `js/components/LoginReady.js`: "로그인해주세요" UI.
- `js/components/LoginForm.js`: ID 입력 UI.
- `js/components/MainDashboard.js`: 대시보드 UI.

### 구현 로직
1. **상태 관리**: `CenterComponent`가 현재 보여줄 화면(`ready` -> `login` -> `dashboard`) 상태를 관리하거나, `main.js`에서 관리하여 `CenterComponent`에 전달합니다.
2. **이벤트 처리**: 버튼 클릭 시 상태를 변경하고, 변경된 상태에 따라 `innerHTML`을 비우고 새로운 컴포넌트를 렌더링(Append)합니다.

## 검증 계획
### 수동 검증
- 앱 실행 (`npm start`).
- 상단: "First App System" 표시 확인.
- 중앙: "로그인해주세요" 문구 확인.
- 클릭 시: ID 입력 폼으로 전환 확인.
- ID 입력 후 확인: "Main Dashboard" 문구 표시 확인.
