---
title: Host
linktitle: Host
description: Host는 CHIS Frontend app을 boost 하는 application 입니다.
weight: 202
disableToc: false
draft: false
date: 2019-11-01T13:40:01+09:00
tags: [host, package.json]
---
Host는 CHIS App을 Boost 하는 Container App 입니다. 

따라서 HOST 내부에 존재해야 하는 로직들은 다음 사항이 지켜져야 합니다.

- 전역적으로 적용되어야 하는 로직

- 종속 addon에 영향을 끼치거나 받지 않는 로직

다음 사항이 지켜지지 않은 로직들은 추후 유지 보수를 통해 이미 해당 로직을 사용중인 부분에 영향을 주지 않도록 수정이 되어야합니다. 

아래 트리는 현재 ( 2019-11-07 ) Host의 폴더링 구조를 시각화 한 것이다.

## Overview
---
```
HOST
├── app
│   ├── application
│   ├── authenticators
│   ├── components
│   ├── helpers
│   ├── index 
│   ├── instance-initializers
│   ├── login
│   ├── mixins
│   ├── modules
│   ├── notfound
│   └── session-stores
├── config
├── lib
├── mirage
├── public
│   └── assets
├── supportings
│   ├── bin
│   ├── container
│   └── snippets
├── tests
│   ├── helpers
│   ├── integration
│   └── unit
├── vendor
│   ├── sign
│   └── shims
├── .ember-cli
├── ember-cli-build.js
└── package.json
```

## app
---
이 부분에는 여러 폴더들이나, 컴포넌트, 라우트, 스타일 등 host app에 필요한 코드를 작성하는 부분들이다.  

현재 Authenticators, main화면에 필요한 컴포넌트, 로그인, notfound 등의 메인화면으로 존재해야 하는 로직들이 구현되어 있음.

## config
---
CHIS app의 설정을 세팅할 수 있는 부분이다.

- environment.js : 
  - app 설정을 세팅하는 부분. 
  - 각 빌드 환경별로 설정을 세팅하고 있으며 development, devdeployment, cross, staging, production 현재 총 5개의 환경이 있음.
- optional-feature.json : 현재 jQuery 포함 옵션이 있음.
- targets.js : 타겟 브라우저의 대한 정보가 있음.

## lib
---
oneSignalAppId를 index.html에 바인딩 하기 위해 넣은 로직

- contentFor [참고링크](https://ember-cli.com/extending/) 

>If you want to add content to a page directly, you can use the content-for tag. An example of this is {{content-for 'head'}} in app/index.html, which Ember CLI uses to insert it’s own content at build time. Addons can access the contentFor hook to insert their own content.

```
// index.js
module.exports = {
  name: 'ember-cli-display-environment',

  contentFor(type, config) {
    if (type === 'environment') {
      return '<h1>' + config.environment + '</h1>';
    }
  }
};
```
>This will insert the current environment the app is running under wherever {{content-for 'environment'}} is placed. The contentFor function will be called for each {{content-for}} tag in index.html.

## mirage
---
Backend APIs를 흉내내는 가짜 Backend api. 실제 Backend를 구성하지 않고 Frontend 개발자가 개발을 진행하게끔 해주는 역할.  
//사용법은 추후에 정리

## public
---
일반적으로 이미지나 폰트 데이터와 같은 정적파일들이 위치하는 곳이다.

## supporitngs
---
개발하는데 편의를 줄 만한 스크립트 파일과 snippet파일들이 담겨 있다.

- Windows 사용자의 경우 : supportings에서 *.bat, *.ps1을 사용하면 됨
- Linux나 Mac 사용자의 경우 : supportings>container에서 *.sh 파일들을 사용하면 됨.
- 각 스크립트정보는 [이곳](/development/script)에서 참고 바람.

## tests
---
Test를 위한 자동생성 폴더.

현재 component, helper, mixin, service 등의 -test 블루프린트가 구현되어있지 않아서 Ember Qunit Unit Test 는 동작하지 않음.

## vendor
---
npm으로 관리되지 않는 종속 모듈을 전역적으로 사용하기 위해서 관리되는 폴더.

전역으로 사용되지 않거나, 전역으로 사용될 필요가 없는 소스라 css가 이곳에 포함 되어있다면 수정이 될 필요가 있음.

## .ember-cli
---
Ember CLI 설정을 위한 숨김파일. 이곳에는 여러가지 Ember Command Line 설정을 세팅할 수 있다. 

 - port
 - usePods
 - liveReload
 - ...
 - [참고링크](https://cli.emberjs.com/release/appendix/configuration/)

## ember-cli-build.js
---
Ember CLI 가 어떤식으로 빌드가 되어야 하는지의 관한 설정을 세팅하는 파일

- [참고링크1](https://ember-cli.com/user-guide/)
- [참고링크2](https://cli.emberjs.com/release/)

## package.json
---
빌드시 node_modules라는 폴더에 생성될 종속 모듈. 

로컬을 바라보고 종속시키는 모듈의 경우 package.json depth에 있는 모든 모듈은 yarn이나 npm을 이용해서 node_modules을 생성해 주어야 함.


- devDependencies: 일반적으로 개발 과정에서 사용되어 종속되어야 하는 모듈
- dependencies: 개발과정 뿐만 아니라 런타임에서도 필요로하여 종속되어야 하는 모듈
  - 어떤 모듈이 dependencies 에 포함되어야 하고 어떤게 devDependencies 에 포함되어야 하는지는 해당 모듈의 README.md나 Install 방법을 통해 확인 할 수 있다.
- resolutions: 동일한 모듈이 여러 종속 모듈간에 사용되어 충돌이 일어 나거나 업그레이드 버전이 버그를 동반했을 때 해당모듈의 버전정보를 fix하여 줌.
- ember-addon: 특정 모듈이 로컬을 바라보도록 할 때 패스를 지정함.

아래에서는 BIZ 엔진, 모듈 addon은 길이가 너무 길어서 제외함. 

원본파일은 직접 호스트 Repo에서 확인 바람.

{{<highlight javascript>}}
//2020-04-16 기준

"devDependencies": {
    "@ember/jquery": "^0.6.0",
    "@ember/optional-features": "^0.7.0",
    "broccoli-asset-rev": "^3.0.0",
    "ember-ajax": "^5.0.0",
    "ember-changeset": "^1.4.1",
    "ember-changeset-validations": "^1.2.11",
    "ember-cli": "~3.10.1",
    "ember-cli-addon-versions": "^1.0.1",
    "ember-cli-app-version": "^3.2.0",
    "ember-cli-babel": "^7.7.3",
    "ember-cli-cjs-transform": "^2.0.0",
    "ember-cli-dependency-checker": "^3.1.0",
    "ember-cli-eslint": "^5.1.0",
    "ember-cli-favicon": "^1.0.0-beta.4",
    "ember-cli-htmlbars": "^3.0.1",
    "ember-cli-htmlbars-inline-precompile": "^2.1.0",
    "ember-cli-inject-live-reload": "^1.8.2",
    "ember-cli-mirage": "^0.4.3",
    "ember-cli-moment-shim": "^3.6.0",
    "ember-cli-replace": "^0.5.0",
    "ember-cli-shims": "1.2.0",
    "ember-cli-sri": "^2.1.1",
    "ember-cli-uglify": "^2.1.0",
    "ember-cli-windows": "^2.2.0",
    "ember-concurrency": "^1.0.0",
    "ember-cp-validations": "^4.0.0-beta.7",
    "ember-engines": "^0.8.0",
    "ember-export-application-global": "^2.0.0",
    "ember-font-awesome": "^4.0.0-rc.4",
    "ember-froala-editor": "^2.8.5",
    "ember-intl": "^2.33.1",
    "ember-load-initializers": "^2.0.0",
    "ember-material-design-icons-shim": "^0.1.12",
    "ember-math-helpers": "^2.5.0",
    "ember-maybe-import-regenerator": "^0.1.6",
    "ember-moment": "^7.6.0",
    "ember-qunit": "^4.4.1",
    "ember-resolver": "^5.0.1",
    "ember-responsive": "^2.0.4",
    "ember-simple-auth": "^1.6.0",
    "ember-simple-auth-token": "^3.0.0",
    "ember-sortable": "2.1.3",
    "ember-source": "~3.10.0",
    "ember-truth-helpers": "^2.0.0",
    "ember-websockets": "^7.1.1",
    "framework-blueprint": "http://development.c-his.com:6004/npm/framework-blueprint-1.0.0.tgz",
    "loader.js": "^4.6.0",
    "uuid": "3.2.1"
  },
  "engines": {
    "node": "8.* || >= 10.*"
  },
  "private": true,
  "ember-addon": {
    "paths": [
      "lib/chis-index-module"
    ]
  },
  "dependencies": {
    "ember-cli-sass": "^7.0.0",
    ...

  },
  "resolutions": {
    "ember-cli-sass": "^7.0.0",
    "ember-sortable": "1.12.1",
    "pdfjs": "2.2.0",
    "fabric": "3.2.0",
    "portfinder": "1.0.21",
    "regjsparser": "0.6.2"
  },
{{</highlight>}}

## host 종속 모듈 History
---

| 종속 모듈 | At 3.10.2 | At 3.0.0 | 목적 | defalut ember app 모듈 | chis app 추가 모듈 | <font color=green>사용 여부</font> | <font color=red>삭제 여부</font> | 비고 |
|---|:---:|:---:|---|:---:|:---:|:---:|:---:|---|
|**@ember/jquery**| ^0.6.0 | | decouples jquery and use this when jquery accepted to use  | N | Y | <font color=green>**Y**</font> | N ||
|**@ember/optional-feature**| ^0.7.0 | | adds optional feature on App | N | Y | <font color=green>**Y**</font> | N ||
|**broccoli-asset-rev**| ^3.0.0 | ^2.7.0 | adds fingerprint checksums to your files and updates the source to reflect the new filenames | Y | | <font color=green>**Y**</font> | N ||
|**ember-ajax**| ^5.0.0 | ^3.1.0 | makes ajax requests in App | N | Y | <font color=green>**Y**</font> | N ||
|**ember-changeset**| - | ^1.4.1 | prevents weird interaction from two-way binding on object | N | Y | <font color=green>**Y**</font> | N | |
|**ember-changeset-validation**| - | ^1.2.11 | one of ember-changeset plug-in | N | Y | <font color=green>**Y**</font> | N ||
|**ember-cli**| ~3.10.1 | 3.0.0 | command line interface | Y | N | <font color=green>**Y**</font> | N ||
|**ember-cli-addon-versions**| - | ^1.0.1 | Check the Info section of Ember Inspector extension to see addon versions | N | Y | <font color=green>**Y**</font> | N ||
|**ember-cli-app-versions**| ^3.2.0 | ^3.1.3 | Check the Info section of Ember Inspector extension to see app version | N | Y | <font color=green>**Y**</font> | N ||
|**ember-cli-babel**| ^7.7.3 | ^6.12.0 | ES6 to ES5 translator | Y | N | <font color=green>**Y**</font> | N ||
|**ember-cli-dependency-checker**| ^3.1.0 | ^2.1.0 | Check missing npm and bower dept before running ember | N | Y | <font color=green>**Y**</font> | N ||
|**ember-cli-eslint**| ^5.1.0 | ^4.2.3 | linter | N | Y | <font color=green>**Y**</font> | N ||
|**ember-cli-favicon**| - | ^1.0.0-beta.4 | Take a single favicon source file at public/favicon.png, and convert to the various formats and sizes required for popular devices and platforms | N | Y | <font color=green>**Y**</font> | N ||
|**ember-cli-htmlbars**| ^3.0.1 | ^2.0.3 | hbs template compiler | Y | N | <font color=green>**Y**</font> | N ||
|**ember-cli-htmlbars-inline-precompile**| ^2.1.0 | ^1.0.2 | Precompile HTMLBars template strings within the tests of an Ember-CLI project via ES6 tagged template strings | Y | N | <font color=green>**Y**</font> | N ||
|**ember-cli-inject-live-reload**| ^1.8.7 | ^1.7.0 | live reload | Y | N | <font color=green>**Y**</font> | N ||
|**ember-cli-mirage**| - | ^0.4.3 | A client-side server to develop, test and prototype your Ember CLI app. | N | Y | <font color=green>**Y**</font> | N ||
|**ember-cli-moment-shim**| - | ^3.6.0 | ember-cli ES6 module shim for momentjs and moment timezone within your Ember applications. | N | Y | <font color=green>**Y**</font> | N ||
|~~ember-cli-qunit~~| | ^4.3.2 | QUnit testing package for ember-cli applications. | N | N | N | <font color=red>**Y**</font> | chis 3.10.2 upgrade시에 삭제함. |
|**ember-cli-replace**| - | ^0.5.0 | stateId 변경하는데 사용함.  replace text patterns in files | N | Y | <font color=green>**Y**</font> | N | |
|**ember-cli-shims**| - | ^1.2.0 | Ember CLI Shims (ECS) contain all the shims used in Ember CLI. | N | Y | <font color=green>**Y**</font> | N | mliresourcemanagement-module 에러나서 아직 제거 못함. |
|**ember-cli-sri**| ^2.1.1 | ^2.1.1 | The reason to add this to your application is to protect against poisoned CDNs breaking JavaScript or CSS subresources. | N | Y | <font color=green>**Y**</font> | N | |
|**ember-cli-uglify**| ^2.1.0 | ^2.1.0 | it will automatically hook into the build pipeline and minify your JS files in production builds | N | Y | <font color=green>**Y**</font> | N | |
|**ember-cli-windows**| - | ^2.2.0 | Dramatically improve build speed during ember build and ember serve! | N | Y | <font color=green>**Y**</font> | N | |
|**ember-concurrency**| ^1.0.0 | ^0.8.18 | Tasks, unlike promises, support cancelation | N | Y | <font color=green>**Y**</font> | N | |
|**ember-engines**| ^0.8.0 | ^0.5.18 | Engines allow multiple logical applications to be composed together into a single application from the user's perspective. | N | Y | <font color=green>**Y**</font> | N | |
|**ember-export-application-global**| ^2.0.0 | ^2.0.0 | export app on global in development by defalut | N | Y | <font color=green>**Y**</font> | N | |
|**ember-font-awesome**| - | ^4.0.0-rc.4 | froala editor font | N | Y | <font color=green>**Y**</font> | N | |
|**ember-froala-editor**| - | ^2.8.5 | froala editor | N | Y | <font color=green>**Y**</font> | N | |
|**ember-intl**| - | ^2.33.1 | The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting | N | Y | <font color=green>**Y**</font> | N | |
|**ember-load-initializers**| ^2.0.0 | ^1.0.0 | A tiny add-on to autoload your initializer files in ember-cli. | Y | N | <font color=green>**Y**</font> | N | |
|**ember-material-design-icons-shim**| - | ^0.1.12 | take care of adding the appropriate CSS and icon fonts into your app's asset pipeline | N | Y | <font color=green>**Y**</font> | N | |
|**ember-math-helpers**| - | ^2.5.0 | math helper | N | Y | <font color=green>**Y**</font> | N | |
|**ember-maybe-import-regenerator**| ^0.1.6 | |  | Y | N | <font color=green>**Y**</font> | N | |
|**ember-moment**| - | ^7.6.0 | moment | N | Y | <font color=green>**Y**</font> | N | |
|**ember-qunit**| ^4.4.1 | | q unit 테스트 | Y | N | <font color=green>**Y**</font> | N | |
|**ember-resolver**| ^5.0.1 | ^4.5.5 | Ember’s dependency injection system is driven by a resolver | Y | N | <font color=green>**Y**</font> | N | |
|**ember-responsive**| - | ^2.0.4 | ember-responsive is an ember-cli addon that give you a simple, Ember-aware way of dealing with media queries. | N | Y | <font color=green>**Y**</font> | N | |
|**ember-simple-auth**| - | ^1.6.0 | 로그인시 사용 | N | Y | <font color=green>**Y**</font> | N | |
|**ember-simple-auth-token**| - | ^3.0.0 | 로그인시 사용 | N | Y | <font color=green>**Y**</font> | N | |
|**ember-sortable**| - | 2.1.3 | ui sortable | N | Y | <font color=green>**Y**</font> | N | |
|**ember-source**| ~3.10.0 | 3.0.0 | ember.js | Y | N | <font color=green>**Y**</font> | N | |
|**ember-truth-helpers**| - | ^2.0.0 | truth helpers | N | Y | <font color=green>**Y**</font> | N | |
|~~ember-uuid-shim~~| | 0.1.1 | truth helpers | N | Y | N | <font color=red>**Y**</font> | chis 3.10.2 upgrade시에 삭제함. |
|**ember-websockets**| - | ^7.1.1 | websocket | N | Y | <font color=green>**Y**</font> | N | |
|**loader.js**| ^4.7.0 | ^4.6.0 | resource loader | Y | N | <font color=green>**Y**</font> | N | |
|~~mock-socket~~| | 7.1.0 | websocket | N | Y | N | <font color=red>**Y**</font> | chis 3.10.2 upgrade시에 삭제함. |
|~~showdown~~| | ^1.8.6 | markdown to html converter | N | Y | N | <font color=red>**Y**</font> | chis 3.10.2 upgrade시에 삭제함. |
|**uuid**| - | 3.2.1 | uuid generator | N | Y | <font color=green>**Y**</font> | N | |

## 그밖에 파일들
---
|default 생성 파일 여부 |파일명|설명|
|---|---|---|
|N|.dockerignore|Dockerfile생성하면서 같이 생성함.|
|N|Dockerfile|- Ember는 빌드속도가 너무 느려서 Window에 맞지 않는 개발 환경임.<br>- docker 위에서 개발할 때 개발환경을 만들어줄 Dockerfile. 테스트당시 live reload의 효율성 개선이 높지 않아 관련진행 중단함. Dockerfile은 테스트당시의 것을 수정하지 않은채 그대로 둠. |
|N|.gitignore| git ignore 파일 |
|N|package.dev.json| 기술팀 개발용 환자리스트 종속 모듈 제거된 package.json: 참조용 |
|N|package._master.json| BIZ 개발자용 환자리스트 종속 모듈 포함된 package.json: 참조용 |
|N|package.deploy-jenkins.json| 개발기 빌드용 종속 모듈 포함된 package.json |
|N|package.nbp-jenkins.json| 스테이징 빌드용 종속 모듈 포함된 package.json |
|N|package.prod-jenkins.json| 운영기 빌드용 종속 모듈 포함된 package.json |
|N|package.cross-jenkins.json| cross browsing 테스트를 위한 종속 모듈 포함된 package.json |
|Y|.editorconfig| - |
|Y|.travis.yml| - |
|Y|.watchmanconfig| - |