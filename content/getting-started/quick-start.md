---
title: 로컬호스트 Quick Start
linktitle: Quick Start
description: Biz 엔진 및 Biz 모듈을 통해 Quick start 환경 만들어보기 
weight: 00012
disableToc: false
draft: false
date: 2019-10-17T09:25:25+09:00
tags: [quick start]
---
Quick start는 로컬환경에서 업무개발자가 개발을 진행할 때 필요한 부분만 요약정리한 문서입니다.
## 1. Overview
---
#### <span style="color:blue">_준비사항_</span>

**1. 계정생성 (git 허브 역할을 해줄 원격지로 [TFS](http://tfs.c-his.com:8080/tfs/DefaultCollection/_projects)를 사용하고 있습니다.)**

  - 계정 생성 방법: 이메일, 영문이름을 강혜경부장님께 메세지를 통해 전달해주시면 계정생성 후 계정과 비번을 전달받으실 수 있습니다.

```
이메일 : gildong1234@ezcaretech.com
영문이름(로마자) : honggildong
```

**2. 업무도메인 레포지터리를 원격지에 등록 (작업할 업무도메인 명이 원격지에 이미 있다면 무시)** 

  - 업무도메인 레포지터리 등록 방법 : 강혜경부장님께 신규 도메인 생성요청 드리면 됨. 

#### <span style="color:blue">_업무개발 필요 모듈 트리구조_</span>
  아래 트리구조를 통해 업무개발자는 개발을 하기위해 원격지로 부터 클론할 레포지터리가 단순히 **1. <span class="colored">_host_</span>, 2. <span class="colored">_design_</span>** 그리고 **3. <span class="colored">_본인이 개발에 필요한 엄무도메인 레포지터리</span>**라는 것을 알 수 있다.

    host
    ├──design
    ├── ... // 종속 모듈
    ├──biz1-engine
    ├──biz1-module
    ├──biz2-engine
    ├──biz2-module
    ├── ...
    ├── ...
    ├──bizn-engine 
    └──bizn-module 
   
{{% notice note %}}
  ○ host : <i class="fas fa-code-branch"></i> master  
  ○ design : <i class="fas fa-code-branch"></i>  develop  
  ○ biz 도메인 : <i class="fas fa-code-branch"></i>  develop [개발기 및 로컬], <i class="fas fa-code-branch"></i> staging [스테이징]   
{{% /notice %}}


## 2. Host Repository Clone
___
**<span class="colored">_host_</span>**는 chis 모듈들의 main container app으로써 존재하는 레포지터리

  - 프로젝트로 사용할 폴더를 하나 만든다 가령 `chis`라는 폴더를 만들면 해당 폴더 안에 host를 clone 한다.  

  ```
  git clone -b master http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/host
  ```

  <i class="fas fa-info-circle"></i> host 관련 상세는 [여기][host]에서 확인

[host]: /chis/host/

## 3. Design Repository Clone
___
**<span class="colored">_design_</span>**는 chis 모듈들의 모든 디자인이 관리되는 레포지터리
  
  ```
  git clone -b develop http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/design
  ```

## 4. Biz Domain Clone
___
#### <span style="color:blue">_작업도메인 repo 등록이후_</span>
작업할 특정 도메인을 클론한다.
  
  ```
  git clone http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/작업도메인
  ```

#### <span style="color:blue">_작업도메인 repo 등록전_</span>
작업도메인이 원격지에 아직 등록이 안되었다면 로컬에서 git생성 후 먼저 작업을 진행하고 [나중에 원격지 정보만 git remote에 등록](/technical-ref/git/#span-style-color-blue-remote-span-1)해주면 된다.

git 관련 정보는 [여기][git] 혹은 [공식 문서](https://git-scm.com/doc)를 참조

  - 작업순서
    - 4-1 진행
    - 4-2 진행
    - [git 원격지 정보 등록하기](/technical-ref/git/#addremote) 

[git]: /technical-ref/git/

## 4-1. Biz engine
___

이미 **_업무도메인명_** 아래 **_engine_** 이라는 폴더가 있으면 이 과정은 **넘어가도 된다.** 

#### <span style="color:blue">_Biz engine 생성_</span>

- 예시
   - 업무도메인명 : **_testboard_**
   - 엔진명 : **_testboard-engine_**

- 작업 순서
   1. engine 생성 : 이때 engine을 생성하는 아래의 명령어는 반드시 **<span class='colored'>_host repository_**</span> 아래에서 진행한다.

```
ember g chis-app ../도메인명/engine

//예시
ember g chis-app ../testboard/engine
```

   2. node_modules 생성 : **<span class='colored'>_testboard-engine_</span>** 아래에서 **_yarn install_** 진행

```
yarn install
```

   <i class="fas fa-info-circle"></i> 진행시 참고
     ![img](/getting-started/images/engine1.png?width=600px)
     ![img](/getting-started/images/engine2.png?width=600px)

## 4-2. Biz module
___

이미 **_업무도메인명_** 아래 **_module_** 이라는 폴더가 있으면 이 과정은 **넘어가도 된다.** 

#### <span style="color:blue">_Biz module 생성_</span>
- 예시
   - 업무도메인명 : **_testboard_**
   - 모듈명 : **_testboard-module_**

- 작업 순서
   1. module 생성 : 이때 module 생성하는 아래의 명령어는 반드시 **<span class='colored'>_host repository_**</span> 아래에서 진행한다.

```
ember g chis-addon ../도메인명/module

//예시
ember g chis-addon ../testboard/module
```

   2. node_modules 생성 : **<span class='colored'>_testboard-module_</span>** 아래에서 **_yarn install_** 진행

```
yarn install
```
   <i class="fas fa-info-circle"></i> 진행시 참고
     ![img](/getting-started/images/engine3.png?width=600px)
     ![img](/getting-started/images/engine4.png?width=600px)

#### <span style="color:blue">_Biz module component 생성_</span>

컴포넌트를 만든 이후에 이곳에 작업할 코드를 작성하면 된다. 관련 작업 방법은 [development > component 문서](/development/component/)를 참고.

- 예시
   - 업무도메인명 : **_testboard_**
   - 모듈명 : **_testboard-module_**
   - component 명 : **_test-board_**

- 명령어

```
// 모듈경로로 이동
cd testboard/module
// 컴포넌트 생성 ex) test-board
ember g component test-board
```    

#### <span style="color:blue">_Biz module component 삭제_</span>
 
잘못 만들었을 경우 삭제는 아래와 같이 진행한다.

- 예시
   - 업무도메인명 : **_testboard_**
   - 모듈명 : **_testboard-module_**
   - component 명 : **_test-board_**

- 명령어

```
// 모듈경로로 이동
cd testboard/module
// 컴포넌트 삭제 ex) test-board
ember d component test-board
```   

## 5. Host에 종속성 추가
___

{{% notice info %}}
  Biz 개발자의 경우 host Repository는 master 브랜치를 바라보도록 한다.
{{% /notice %}}

#### <span style="color:blue">_관련 경로 : host > app.js_</span>
- App.engines에 해당 도메인엔진이 추가되었는지 확인 후 추가 안되어 있을시 아래와 같이 추가한다. 
![img](/getting-started/images/addedenginemodule1.png?width=400px)

#### <span style="color:blue">_관련경로 : host > router.js_</span>
- engineRouter에 해당 도메인엔진이 추가되었는지 확인 후 추가 안되어 있을시 아래와 같이 추가한다.
![img](/getting-started/images/addedenginemodule2.png?width=200px)

#### <span style="color:blue">_관련 경로 : host > pagekage.json_</span>
- ember-addon에 해당 도메인엔진, 모듈이 추가되었는지 확인 후 추가 안되어 있을시 아래와 같이 추가한다.
![img](/getting-started/images/addedenginemodule3.png?width=200px)

## 4. startup 스크립트 실행
---
startup 스크립트는 내용을 확인하면 알겠지만 별게 아니라 그냥 프로젝트(ex: chis)내에 package.json 파일을 node_modules이 설치가 안된 곳이 있다면 **<span class='colored'>_재귀적으로 yarn install_</span>**을 해주는 스크립트이다.
#### <span style="color:blue">_Windows_</span>
- 스크립트 위치 host > supportings > startup.bat
```bash
startup.bat
```

#### <span style="color:blue">_Linux_</span>
- 스크립트 위치 host > supportings > container > startup.sh
```bash
sh startup.sh
```

#### <span style="color:blue">_Mac_</span>
- 스크립트 위치 host > supportings > container > startup_mac.sh
```bash
sh startup_mac.sh
```

## 5. eslint rule 경로 지정
---
visual code 의 [User Settings에 환경설치시 설정했던 것](/getting-started/installing/#span-style-color-blue-vs-code-setting-span)이 기억난다면

이번엔 추가로 eslint rule 경로를 지정하면 된다.

startup 스크립트를 실행하면 프로젝트 폴더 바깥쪽에 .eslintrc.js 가 있을 건데 그것을 

```
// tab 대신 space 사용
"editor.insertSpaces": true,

// tab 키 선택시 space 간격 2로 잡음
"editor.tabSize": 2

// eslint rule 경로 지정
"eslint.options": {
  "configFile": "프로젝트경로/.eslintrc.js"
  //예시
  //"configFile": "/Users/choiyongbum/chis/dev/.eslintrc.js"
},
```

## 6. 안티바이러스 프로그램 실시간 검사 제외 설정
---
윈도우즈로 개발할 때 엠버의 빌드속도는 엄청 느리다. [관련링크](https://ember-cli.com/user-guide/#windows)

- Lack of enabled-by-default symlinks
- Generally slower FS operations on NTFS

CHIS app는 사이즈가 클 뿐만 아니라 위에 두가지요소로 인해 윈도우즈로 엠버를 빌드시에는 맥과 리눅스로 개발할 때에 비해 많이 느리다.

따라서 Windows로 개발하고 있는 경우 아래 몇가지 사항을 더 수행해줘야 한다. 

아래 조치를 통해 속도가 확연히 더 빨라지는 것은 아니지만 하는것이 안하는것에 비해 빠르다.

- 안티바이러스 실시간 검사 제외 설정: Defender, V3 etc... 이때 검사예외 항목은 프로젝트 tmp를 해도 좋고 프로젝트 전체를 해도 좋다.

- [관련링크](https://github.com/adopted-ember-addons/ember-cli-windows)를 확인 후 아래 명령어를 실행 후 로컬호스트를 실행.

```
npm install -g ember-cli-windows
ember-cli-windows
```

## 7. 인증서 설치
---
개발기는 *.c-his.com 도메인을 사용하는데 해당 도메인은 사설인증서를 사용하고 있다. 따라서 사설인증서를 개별 로컬 시스템에 신뢰할 수 있는 루트인증기관에 등록을 진행해야한다.

인증서 설치 방법은 [여기](http://sps.c-his.com/sites/2/TS/_layouts/15/start.aspx#/SitePages/Home.aspx?RootFolder=%2Fsites%2F2%2FTS%2FShared%20Documents%2F10000%2E%20%EA%B3%B5%EC%9C%A0%2F14%2E%20Naver%20Cloud%2F2%2E%20SSL%EC%9D%B8%EC%A6%9D%EC%84%9C%EA%B4%80%EB%A0%A8&FolderCTID=0x0120002EC637CA379B954CAB5EA63C92BC08FA&View=%7BB1F4166B%2D82DB%2D4BD6%2D842D%2D1B381D224C3A%7D)에서 확인하면 된다.

인증서는 chis.cer만 등록하면 된다.

스테이징용인 ezcaretech.com.cer는 무시해도 됨.

인증서를 브라우저에 등록하는 방법도 있다. 해당 방법은 각 브라우저의 설정에서 인증서 혹은 certificate라고 검색하면 등록화면이 나옴.

## 8. 로컬호스트 시작 및 메뉴 확인
---
#### <span style="color:blue">_로컬호스트 시작_</span>
```
ember s
```

#### <span style="color:blue">_메뉴확인_</span>
- 예시
   - 업무도메인명 : **_testboard_**
   - 모듈명 : **_testboard-module_**
   - component 명 : **_test-board_**
   - 메뉴 : 시스템관리 > test > 테스트페이지1 

#### <span style="color:blue">_메뉴등록_</span>
- 위의 예시로 든 test-board 페이지에 경우 해당 컴포넌트 path로 메뉴를 이미 등록을 완료한 경우
- 새로 메뉴를 등록하기 위해서는 메뉴등록 문서 [클라우드 메뉴등록 가이드](http://sps.c-his.com/sites/2/BS/_layouts/15/start.aspx#/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2F2%2FBS%2FShared%20Documents%2FWorking%20Folder%2FCCMP&FolderCTID=0x0120003CAE78B88A63D943AAEA36826FCC24BA&View=%7BDA5BAD04-1A30-4379-A61C-67CC0665A00D%7D) 을 확인 바람.


