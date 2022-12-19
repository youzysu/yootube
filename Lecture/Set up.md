## NodeJS

> https://nodejs.org/en/

- **JavaScript runtime** built on Chromes'V8 JavaScript engine.
- 기존에 브라우저에서만 작동하던 자바스크립트를 브라우저에서 분리하여 브라우저 밖에서도 작동하도록 만든 **자바스크립트 런타임 환경**을 의미한다.
- 활용: React Native, Electron 등 (VScode, Slack, Figma...)

### npm

- **a package manager** for the JavaScript Programming language.
- Node.js의 기본 패키지 관리자로 다른 사람들이 미리 만들어놓은 개발에 필요한 패키지를 다운로드받아 사용할 수 있다.
  - ex. express

### package.json

- json: nodeJS 프로젝트 관련 정보를 입력 및 저장하기 위한 방식(format)의 파일
- package.json: 현재 프로젝트에 관한 정보와 패키지 매니저를 통해 설치한 모듈들의 의존성을 관리하는 파일
- `npm init`으로 파일 생성
- `npm install`으로 `dependencies`에 있는 모듈을 설치
  - 프로젝트 소스코드 관리 시 `node_modules`와 `pakage-lock.json`를 별도로 관리할 필요 없다.
  - `dependencies` 정보만으로 프로젝트에 필요한 모듈을 모두 설치할 수 있기 때문
- 즉, **1. main 스크립트 파일 (index.js)** **2. package.json 파일** 두 파일만으로 프로젝트를 공유할 수 있다.

#### scripts

- `npm run {command name}` 특정 command에 대해 특정 스크립트를 실행하도록 설정할 수 있다.

  - 예시: build, test, ...

    ```json
      "scripts": {
        "win": "node index.js"
      },
    ```

    - `npm run win`으로 index.js를 실행한다.

#### dependencies

- **프로젝트를 실행하기 위해 필요한 모듈에 대한 정보**를 의미한다.
- 설치하는 패키지가 의존하고 있는 패키지도 함께 설치된다.
  - 의존하는 패키지가 의존하는 패키지들도 함께 설치된다.

```
npm i express
```

```json
// package.json
  "dependencies": {
    "express": "^4.18.2"
  }
```

#### devdependencies

- **프로젝트 개발에 도움이 되는(개발자의 작업을 돕는) 모듈에 대한 정보**

### node.modules

- npm으로 설치한 모든 패키지가 저장되는 폴더

### package-lock.json

- 패키지를 안전하게 관리하기 위해 필요한 정보가 담긴 파일
  - 패키지 수정 여부를 해시값으로 체크

<br />

## Babel

> https://babeljs.io/

- JavaScript compiler
- 최신 문법으로 작성한 JS를 버전에 맞게 호환되는 이전 문법으로 컴파일해준다.

```
npm install --save-dev @babel/core
npm install @babel/node --save-dev
npm install @babel/preset-env --save-dev
npm i nodemon --save-dev
```

```json
// package.json
  "devDependencies": {
    "@babel/core": "^7.20.5",
    "@babel/node": "^7.20.5",
    "@babel/preset-env": "^7.20.2",
    "nodemon": "^2.0.20"
  }
```

### babel.config.json

> https://babeljs.io/docs/en/presets/

```json
{
  "presets": ["@babel/preset-env"]
}
```

### Example

```json
  "scripts": {
    "dev": "nodemon --exec babel-node index.js"
  },
```

- nodemon이 babel-node command로 index.js 파일을 실행
  - nodemon은 파일의 변경 사항을 트래킹하고 자동으로 command를 재실행한다.
