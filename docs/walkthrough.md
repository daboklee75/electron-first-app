# 로그인 컴포넌트 구현 검토 (Vanilla JS)

Vanilla JS를 사용하여 컴포넌트 기반 아키텍처를 모방한 로그인 흐름을 구현했습니다.

## 변경 사항
- **구조 생성**:
    - `css/` 및 `js/components/` 디렉토리 생성.
    - `main` 브랜치 -> `develop` -> `feature/login` 브랜치 흐름 정리.
- **주요 파일**:
    - `index.html`: 앱의 루트 컨테이너 (`#app`) 정의.
    - `css/style.css`: 컴포넌트별 기본 스타일링.
    - `js/main.js`: 앱 진입점. `TopComponent`와 `CenterComponent`를 초기화.
- **컴포넌트 구현 (`js/components/`)**:
    - `TopComponent.js`: 상단 헤더 ("First App System").
    - `CenterComponent.js`: 화면 전환을 관리하는 중앙 컨테이너.
    - `LoginReady.js`: 초기 화면 ("로그인해주세요" 버튼).
    - `LoginForm.js`: 로그인 입력 폼 (ID 입력).
    - `MainDashboard.js`: 로그인 완료 후 대시보드 화면.

## 검증 방법
1. 터미널에서 앱을 실행합니다:
   ```bash
   npm start
   ```
2. **First App System** 헤더가 보이는지 확인합니다.
3. 중앙에 **로그인해주세요** 버튼을 클릭합니다.
4. **ID 입력** 화면으로 전환되는지 확인합니다.
5. ID를 입력하고 **확인**을 클릭합니다.
6. **Main Dashboard** 화면이 나타나는지 확인합니다.

> [!NOTE]
> React가 아닌 Vanilla JS 클래스로 컴포넌트 구조를 구현하여, 상태(State) 변경에 따른 DOM 조작 원리를 직접 확인할 수 있습니다.
