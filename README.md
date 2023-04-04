# 원티드 프리온보딩 프론트엔드 - 선발 과제

이 레포지토리는 원티드 프리온보딩 프론트엔드 - 선발 과제 제출용 레포지토리입니다.

## 프로젝트 실행 방법

- 해당 레포를 로컬에 클론합니다. (위의 `code` 버튼 클릭 후 클론할 방식 선택)
- 터미널의 현재 위치를 클론한 해당 프로젝트의 디렉토리로 설정한 후 `npm install` 커맨드를 실행하여 프로젝트에 필요한 패키지들을 설치합니다.
- `npm start` 커맨드를 통해 해당 리액트 앱을 실행시킬 수 있습니다.
## 프로젝트 데모

### [데모 링크](wanted-pre-onboarding-frontend-sepia.vercel.app)

해당 프로젝트의 데모는 [vercel](https://vercel.com/dashboard)을 사용하여 배포되었습니다.

## 주의사항

`./src/utils/makeRequest.js` 에 api url이 설정되어 있습니다. 만약 api가 작동하지 않는다면, 
- [해당 서버 레포](https://github.com/walking-sunset/selection-task)를 클론하고 실행시킵니다.
- `makeRequest.js` 안의 주석처리된 로컬테스트용 `url`을 대신 사용하면 됩니다.