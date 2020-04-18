---
title: Trouble Shooting
linktitle: Trouble Shooting
description: 개발과정에서 보편적으로 발생했거나 발생하고 있는 문제의 해결방법을 제공하는 문서입니다.
weight: 398
disableToc: false
draft: false
date: 2019-10-28T19:47:27+09:00
tags: [trouble shooting]
---

## <span style="color:red">에러명 : Modified Twice In A Single Render</span>
---
말 그대로 한번의 렌더 과정에 동일한 프로퍼티가 두번 수정이 발생할 때 해당 오류가 발생한다.

보통 해당 오류는 **set 함수**가 두번째 일어나는 순간 발생하니 해당 프로퍼티와 관련된 로직을 수정해야한다.

디버깅을 진행하며 **Computed Property**, **didReceiveAttrs hook**, **Evented mixin** 로직 속의 **Set 함수**에서 호출도 같이 확인해 줄 필요가 있다.

#### <span style="color:blue">_[ 결론 ] : 해당 로직은 논리적 버그가 있는 코드 이기에 수정이 필요함_</span>


## <span style="color:red">에러명 : [Meta-issue] Intl operations returning incompatible results on Windows: investigate whether causes are strictly</span>
---
현재 파악된 내용은 1912년 1월 1일 이전 날자 선택시 디스플레이 되는 텍스트에서 하루의 오차가 발생

관련 이슈는 리눅스 OS 동일함.

[Meta Issue 관련링크](https://github.com/Microsoft/ChakraCore/issues/3644)  
[Intl.DateTimeFormat 관련링크](https://github.com/Microsoft/ChakraCore/issues/1408)

#### <span style="color:blue">_[ 결론 ] : 현재 해결되지 않음_</span>


## <span style="color:red">에러명 : File cannot be loaded because the execution of scripts is disabled on this system. <br><br>한글 에러명 : 이 시스템에서 스크립트를 실행할 수 없으므로 파일을 로드할 수 없습니다.</span>
---
Windows 사용자의 경우 배치 파일을 돌릴 때 관련 에러를 확인 할 수 있다.  

해당 원인은 사용자의 권한문제로 Windows 에서 해당 스크립트를 실행하기 위한 권한이 적절치 못하다라고 판단이 되어 일어남.

![img](/development/images/powershell_policy_error.png?width=1000px)

[powershell execution_policy 관련 참고링크](http://wiki.wikisecurity.net/tips:powershell_execution_policy%EB%A5%BC_%EC%9A%B0%ED%9A%8C%ED%95%98%EB%8A%94_15%EA%B0%80%EC%A7%80_%EB%B0%A9%EB%B2%95)

#### <span style="color:blue">_[ 결론] : 아래 커맨드 참조_</span>

```
C:\chis\host\supportings>powershell

PS C:\chis\host\supportings>Set-ExecutionPolicy Unrestricted
```


## <span style="color:red">에러명 : A dependency mapping for 'services.session' must be declared on this engine's parent</span>
---

위에 에러메세지는 해당 도메인의 engine addon에 관련된 문제  
아래 **defaultEngineConfig** 변수의 디펜던시가 선언이 안 되었다는 의미.

<div class='path'> host > app > app.js </div>
<br>
{{<highlight javascript>}}
const defaultEngineConfig = {
  dependencies: {
    services: [
      'session',
      'intl',
      'contextmenu-service',
      'global-service-container'
    ],
    externalRoutes: {
    }
  }
};

App = Ember.Application.extend({
modulePrefix: config.modulePrefix,
podModulePrefix: config.podModulePrefix,
Resolver,
engines: {
  testEngine: defaultEngineConfig
}
{{</highlight>}}

#### <span style="color:blue">_[ 해결 ] : 아래 문서 참조_</span>

- 보통 engine의 노드 모듈이 없을 때 문의가 옴. 
  - 이럴 땐 해당하는 곳에 yarn install을 해준다.  
- 만약 yarn install 을 했는데도 위에 메세지가 뜨면?
  - 위에 예시로 든 testEngine의 명칭이 올바른지 확인 할 필요가 있음. 타 업무도메인과 비교하여 확인 필요


## <span style="color:red">에러명 : Assertion Failed: The route 도메인-engine.abort-route was not found</span>
---

![img](/development/images/abort_route.jpg?width=600px)

위에 에러메세지는 호스트에서 해당 엔진을 찾지 못했음을 알려줍니다. 

이 메세지가 뜨는 엔진은 호스트에 없음을 의미하고 다음에 해당하는 리스트에도 존재하지 않습니다.

![img](/development/images/librarylist.png?width=600px)

  위에 에러 메세지는 다음 frontend 에서 다음 3가지를 확인하면 됩니다. 

**<span class="colored2">1. host pacakage.json</span>**

{{<highlight javascript>}}
"ember-addon": {
    "paths": [
      //개발하려는 엔진 경로
      "../applicationcatalog/engine", 
      //개발하려는 모듈 경로
      "../applicationcatalog/module"  
      }
{{</highlight>}}

**<span class="colored2">2. host\app\app.js</span>**

{{<highlight javascript>}}
//예제
applicationcatalogEngine: defaultEngineConfig, 
{{</highlight>}}

**<span class="colored2">3. host\app\router.js</span>**
{{<highlight javascript>}}
//(예제)
'applicationcatalog-engine', 
{{</highlight>}}

- **대소문자 및 camelCase 등의 오타**가 없는지 여부, 
- **경로**를 잘 못 지정하지 않았는지 여부를 잘 확인하시기 바랍니다. 

**<span class="colored2">만약 여기에 이상이 없다면</span>**

**2가지를 더 확인해 볼 것이 있습니다.**

  **_중간에 도메인 명을 변경한 경우_**

  - **engine, module**의 **_index.js_**를 확인해보십시오.

{{<highlight javascript>}}
'use strict';
const EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
//여기 name이 잘못 된 경우에도 찾지 못합니다.
name: 'applicationcatalog-engine', 
isDevelopingAddon: function () {
 return true;
},
lazyLoading: true
});
{{</highlight>}}

**_chisbasic.applicationcatalog_viewcomponent_**

  - CCMP에서 관리하는 **chisbasic.applicationcatalog_viewcomponent** 의 테이블의 AbortRoute 컬럼을 확인해봐야합니다. 
  - 관련 부분에서는 CCMP에 문의해서 확인 하셔야 합니다.
  - 만약 잘못된 값이 입력되어 있다면 다른 메뉴와 확인하여 동일하게 변경 부탁드립니다.

#### <span style="color:blue">_[ 해결 ] : 아래 문서 참조_</span>

```
- 1) 1,2,3 과정을 잘 살피며 오타가 있는지 확인해본다.
- 2) 1)번과정이 문제가 없을 시 `만약 여기에 이상이 없다면` 과정을 확인해본다.
- 3) 1),2) 과정에서 문제를 발견하지 못했다면 새로 engine, module addon을 만들어서 테스트해보시가 바랍니다. 
- 4) 이상이 있거나 원인을 발견하시 못했을 시 기술팀에 문의 바랍니다.
```

## <span style="color:red">에러명 : Cannot find module './lib/dynamic-import'</span>
---
해당 오류와 같이 CHIS 자체 소스 이외의 종속 모듈의 버전업이 일어나는 경우 갑자기 빌드가 안되거나 런타임에서 에러가 발생할 수 있다.

![img](/development/images/dynamic_import1.jpg)

#### <span style="color:blue">_[ 해결 ] : 아래 문서 참조_</span>

```
  1. host의 node_modules 폴더 전체 삭제
  2. host의 yarn.lock 파일 삭제
  3. host의 yarn cache clean
  4. host의 yarn install
  5. ember s
```

## <span style="color:red">에러명 : Cannot find module 'ember-engines/lib/engine-addon'</span>
---
해당 오류는 보통 engine과 module의 노드 모듈을 설치하지 않고 host에 종속한 이후 ember s를 실행했을 때 많이 문의가 옴

#### <span style="color:blue">_[ 해결 ] : 아래 순서 참조_</span>

```
1. host에 종속을 걸어 놓은 addon에 yarn install을 해주었는지 확인필요
  1-1. 각 engine과 모듈의 yarn.lock 파일이 있는지 확인하면 된다.

2. 만약 찾기가 번거롭다면, host>supportings>startup.bat 맥이나 리눅스 사용자라면 host>supportings>container>startup.sh or startup_mac.sh 을 실행해주면 됨. 

3. ember s
```

## <span style="color:red">에러명 : ..which did not match the requested hash </span>
---
해당 오류는 hash 충돌이 일어난 경우입니다. 

- yarn은 동일 버전에 한해 이미 설치되어 있는 모듈을 다시 install하지 않습니다.
- yarn.lock 파일을 통해 해시 체크를 진행
- 버전이 동일한데 파일이 다른경우 위와 같은 에러가 발생 할 수 있습니다.

#### <span style="color:blue">_[ 해결 ] : 아래 순서 참조_</span>

```
1. host에서 yarn.lock 제거

2. host에서 yarn cache clean 

3. yarn install

4. ember s
```

## <span style="color:red">에러명 : 갑작스런 원인 모를 빌드 에러</span>
---
해당 오류는 CHIS 내부 소스의 문제라기 보단 종속된 모듈이 업그레이드 되면서 발생하는 버그가 일반적입니다.

만약 아래 순서로 진행시 계속 에러가 발생한다면 100% 입니다.

1. host의 yarn.lock 파일 제거
2. host의 yarn cache clean
3. yarn install
4. ember s

#### <span style="color:blue">_[ 해결 ] : 아래 순서 참조_</span>

```
1. 동료중에 잘 실행되는 분이 있다면 host의 yarn.lock파일을 받는다.

2. 본인의 host의 yarn.lock과 비교한다. 비교 프로그램이나 비교 사이트를 참고하면 용이하게 문제 모듈을 추릴 수 있다. 

3. 문제 모듈의 release 이력을 확인해서 이전 버전으로 노드모듈을 설치 후 host ember s를 진행해 본다.

```

## <span style="color:red">에러명 : Authentication failed for </span>
---
TFS 원격지에는 정상 접근 되나 git command 사용시 관련 에러가 나는 분들은 아래 링크를 참조해주시기 바랍니다.

#### <span style="color:blue">_[ 해결 ] : 아래 링크 참조_</span>

[링크 참조](http://sps.c-his.com/sites/2/_layouts/15/start.aspx#/Lists/QA/Flat1.aspx?RootFolder=%2Fsites%2F2%2FLists%2FQA%2Fgit%20pull%20%EC%8B%9C%20%EC%9D%B8%EC%A6%9D%20%EC%98%A4%EB%A5%98%EA%B0%80%20%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94%20%EA%B2%BD%EC%9A%B0%20%EC%9E%90%EA%B2%A9%20%EC%A6%9D%EB%AA%85%20%EC%A0%95%EB%B3%B4%EB%A5%BC%20%ED%99%95%EC%9D%B8%ED%95%98%EC%8B%AD%EC%8B%9C%EC%98%A4&FolderCTID=0x0120020072B9F702C5DB884E8F866CEFD4CFEC64)

## <span style="color:red">에러명 : calling set on destroyed object </span>
---
해당 에러는 object가 destroy된 후에 object 프로퍼티에 접근하여 set해줄 때 나타나고 에러메시지는 아래와 같습니다.

해당 에러를 해결하기 위한 소스를 프레임워크내에 적용하는 것은 완전한 해결이 될 수 없습니다.

비동기 응답은 완료시간을 예측할 수 없기 때문입니다.

에를 들면 응답을 받을 때까지 object가 살아 있다가 set하는 순간 해당 object가 없어질 수 있습니다. 

**<span class='colored2'>따라서 해당 component에서 제어 해야함</span>**

![img](/development/images/object-destroyed.png)

위에 에러를 해결하는 방법은 2가지입니다.

#### <span style="color:blue">_[ 해결 1. ] : set 해주는 곳위에 if 조건 추가_</span>
```
if(this.isDestroyed || this.isDestroying) {
  return;
}
this.set('sampleProperty', sampleProperty);
```

#### <span style="color:blue">_[ 해결 2. ] : ember-concurrency 적용_</span> 

**[ember-concurrecy 공식 문서 참고 링크](http://ember-concurrency.com/docs/introduction)**

일반적인 형태를 보면 async await와 사용법이 유사합니다. 참고링크는 ember-concurrency의 대한 공식 문서가 있는 사이트 입니다. 

ember-concurrency를 사용하신다면, 여러 사용법의 대한 설명이 있으니 공식 사이트로 가셔서 내용확인 후 적용하시기 바랍니다.

**BEFORE**
```
async sampleMethod() {
  const params = { a: 'test1', b: 'test2' };
  const rstInfo = await this.getItem(url, params, null, false);
  if(rstInfo) {
    this.set('property1', rstInfo.rst1);
    this.set('property2', rstInfo.rst2);
  }
},

test() {
  this.sampleMethod();
}

```

**AFTER**
```
import { task } from 'ember-concurrency';

...

sampleMethodTask: task(function* () {
  const params = { a: 'test1', b: 'test2' };
  const rstInfo = yield this.getItem(url, params, null, false);
  if(rstInfo) {
    this.set('property1', rstInfo.rst1);
    this.set('property2', rstInfo.rst2);
  }
}),

...

test() {
  this.get('sampleMethodTask').perform();
},

...

```