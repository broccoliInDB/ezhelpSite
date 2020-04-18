---
title: Rules for CHIS Frontend Code
linktitle: CHIS Rules
description: CHIS에서 커스터마이징한 esline rule 관련 문서입니다.
weight: 302
disableToc: false
draft: false
date: 2019-10-28T17:16:27+09:00
tags: [rules]
---

eslint 기본 룰을 제외한 CHIS 커스터마이징된 룰은 다음 아래와 같다. 

#### <span style="color:blue">_Overview_</span>
{{% notice note %}}
○ **chis/require-js-convention : <scan class='colored2'>Javascript 코딩 가이드 준수 여부 규칙</scan>**    
○ **chis/require-js-permitted-expression : <scan class='colored2'>Javascript 금지 구문 사용 여부 규칙</scan>**  
○ **chis/require-template-convention : <scan class='colored2'>템플릿 코딩 가이드 준수 여부 규칙</scan>**     
○ **chis/require-template-forced-expression : <scan class='colored2'>템플릿 강제 적용 구문 적용 여부 규칙</scan>**  
○ **chis/require-camelcase : <scan class='colored2'>Camel Case 적용 여부 규칙</scan>**  
○ **chis/avoid-memory-leak : <scan class='colored2'>메모리 누수 관련 가이드 준수 여부 규칙</scan>**
{{% /notice %}}

#### <span style="color:blue">_chis/require-js-convention_</span>
  - **메세지** : **_<scan class='colored2'>initProperties: DEFINE 'initProperties' INSTEAD OF 'init' hook</scan>_** 
    - 내용 : Component의 경우 init() 대신 initProperties() hook 사용 확인 규칙
    - **수정방법** : Component의 init() 대신 initProperties() hook 을 재정의한다.

  - **메세지** : **_<scan class='colored2'>Missing super():CALL 'this.\_super ...arguments)' at the first line in LifeCyle hook</scan>_**
    - 내용 : hook 재정의 시에 this._super(...arguments) 를 호출 확인 규칙
    - **수정방법** : 함수 Body 최 상단에 this._super(...arguments); 코드를 추가한다.

  - **메세지** : **_<scan class='colored2'>Prefix/Suffix: ADD SUFFIX '-mixin/-service' to mixin/service (file) name</scan>_**
    - 내용 : Mixin, Service 을 생성한 경우, 파일 명에 접미사 -mixin/-service 부여 확인 규칙
    - **수정방법** : Mixin 혹은 Service 생성 시 이름 끝에 -mixin 혹은 -service 접미사를 부여하여 생성한다.

#### <span style="color:blue">_chis/require-js-permitted-expression_</span>
  - **0.9.42에 Raw javascript 구문 금지에 대한 룰을 적용해제함.**
  - ~~**메세지** : **_<scan class='colored2'>Forbidden-Exp: '{{name}}..': DO NOT USE raw Javascript raw expression, Use JQuery or Ember Expression</scan>_**~~ 
    - ~~내용 : Raw Javascript 구문 금지 규칙~~
    - ~~**수정방법** : Raw Javascript 구문을 Ember 혹은 Jquery 구문으로 재작성한다.~~

  - **메세지** : **_<scan class='colored2'>Forbidden-Exp.: '{{name}}..': DO NOT USE 'controller.set' and 'ajax' directly</scan>_**
    - 내용 : 금지된 구문 : controller.set(), ajax 직접 호출 금지 규칙
    - **수정방법** : 해당 구문을 제거하고 CHIS Framework이 제시하는 가이드 대로 작성한다.

  - **메세지** : **_<scan class='colored2'>on/off Mismatch: The COUNTs of calling 'on()/off()' are NOT MATCHED</scan>_**
    - 내용 : 이벤트 등록/해제 불일치 확인 규칙
    - **수정방법** : 이벤트 등록/해제에 on()/off() 사용한 경우, on()에 대응하는 off()를 모두 호출하도록 변경

#### <span style="color:blue">_chis/require-template-convention_</span>
  - **메세지** : **_<scan class='colored2'>(Template) Prefix/Suffix: {{name}} action property SHOULD be named with ~CB or on~</scan>_**
    - 내용 : 템플릿 내 속성명 명명규칙, action 메서드를 값으로 가진(참조하는) Property 명은 on~으로 시작하거나, ~CB로 끝나야 하는 규칙
    - **수정방법** : 이벤트를 처리하기 위한 이벤트 핸들러 용 속성은 on~ 식으로 명명하고, 하위로 Action 메서드 참조를 전달하기 위한 속성은 ~CB 로 명명한다.

  - **메세지** : **_<scan class='colored2'>(Template) Forbidden-Tag:'{{name}}' DO NOT USE A/INPUT/BUTTON/TEXTAREA HTML tags directly</scan>_**
    - 내용 : 템플릿 내 금지된 태그 규칙 : A/INPUT/BUTTON/TEXTAREA 직접 사용 금지
    - **수정방법** : 해당 태그를 제거하고 CHIS Framework이 제공하는 컨트롤을 활용한다.

#### <span style="color:blue">_chis/require-template-forced-expression_</span>
  - **메세지** : **_<scan class='colored2'>(Template) StateId:'{{name}}' MAY have INCORRECT stateId property.<in case of HELPER, IGNORE it></scan>_**  
    - 내용 : 템플릿 StateId 부여 확인 규칙 : Component 사용 시에 정확한 stateId 속성을 부여했는지 확인해주는 규칙  
    - **수정방법** : stateId를 부여해야 하는데 누락되었는지 확인하고, 필요하다면 stateId='__chisstateid' 를 추가하고, 필요 없는 곳이라면 경고 무시  
  <i style="color:#82c91e;text-shadow: 1px 1px 1px #ccc; font-size: 1em;" class="fas fa-exclamation"></i><span style="color: #82c91e"> _강제화 되지 않는 경고 수준의 규칙, 정기적인 정적 분석에 포함되지 않음. 개발 시 템플릿 내 stateId 누락 여부 확인 용도로만 활용_ </span>

#### <span style="color:blue">_chis/require-camelcase_</span>
  - **메세지** : **_<scan class='colored2'>CamelCase: '{{name}}' SHOULD BE in camelCase and should not have '_'.</scan>_** 
    - 내용 : camelCase 준수 확인 규칙 - 이름 중간이나 끝에 언더바(_) 사용 시 에러 : Property, 함수, 변수
    - **수정방법** : Camel Case 준수 및 이름 중간/끝 언더바(_) 제거
  
#### <span style="color:blue">_chis/avoid-memory-leak_</span>
  - **메세지** : **_<scan class='colored2'>Memory-Leak: '{{name}}': ONLY primitive type or null/undefined/function are allowed as default property_** 
    - 내용 : 메모리 누수 방지 규칙 : 속성 선언과 동시에 (객체 타입) 값 할당 금지
    - **수정방법** : 컴포넌트/라우트 등 개발 시 속성 정의와 동시에 객체(배열 포함) 변수 값 할당 부분 제거. 속성 정의와 동시에 할당 가능한 값 : Primitive Type(string/number/bool) 값, null, function 함수
