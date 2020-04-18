---
title: CHIS Component Core
linktitle: CHIS Component Core
description: CHIS Component Core의 대한 관련 문서 입니다.
weight: 205
disableToc: false
draft: false
date: 2019-11-12T11:24:02+09:00
tags: [component-core]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-core) 로 이동

Ember 기본 Component에 아래 Mixin들을 extend 하여 구현한 컴포넌트

```
Component
├── GlobalServiceContainerMixin
├── StatefulComponentMixin
├── HookMixin
├── TriggerActionMixin
├── TooltipContainerMixin
├── ContextMenuMixin
└── GetComponentMixin
```

- [global-service-container-mixin](/chis/chis-mixins/#global-service-container-mixin): 전역적으로 사용할 서비스를 하나의 컨테이너로서 묶은 Mixin
- [stateful-component-mixin](/chis/chis-mixins/#stateful-component-mixin-ta): 컴포넌트 상태 관리 mixin
- [hook-mixin](/chis/chis-mixins/#component-hook-mixin) : 로깅관련 mixin
- [trigger-action-mixin-ta](/chis/chis-mixins/#trigger-action-mixin-ta): CB Action 호출시 자식에서 부모로 직접 호출하도록 하는 trigger action mixin
- [tooltip-container-mixin](/chis/chis-mixins/#tooltip-container-mixin-ta): 툴팁 관련 mixin
- [context-menu-mixin](/chis/chis-mixins/#context-menu-mixin): Contextmenu 핸들러 구현 mixin
- [get-component-mixin](/chis/chis-mixins/#get-component-mixin-ta): 컴포넌트에 jQuery 이벤트 정보 할당 mixin

## Variables
---

```
/*
 * 소스가 포함되어 있는 엔진 명
 * @return {string} : 도메인 명.
*/
engineName

/*
 * 화면에 포함된 리소스 소스 도메인 명
 * @return {string} : 도메인 명.
*/
mountedResource

/*
 * 컴포넌트 명
 * @return {string} : 뷰 컴포넌트에 등록된 컴포넌트 명.
*/
componentName

/*
 * 권한 서비스 목록
 * @return {array} : 뷰 컴포넌트에 등록된 권한 서비스 기능 목록.
*/
serviceCodeList

/*
 * 메뉴 컨텐츠 소스 소유 여부
 * 메뉴에 해당하는 root 컴포넌트인 경우 true
 * @return {boolean} : true|false.
*/
hasContentSource

/*
 * 뷰 아이디
 * @return {string} : 뷰 컴포넌트 Key 값.
*/
viewId

/*
 * 메뉴 명
 * @return {string} : 뷰 컴포넌트에 등록된 화면 명.
*/
menuTitle

/*
 * 클래스 고유 아이디
 * @return {string} : GUID 값.
*/
componentGuid
```

## Methods
---

**1. onMenuClose**

{{<highlight javascript>}}
/*
 * 메뉴가 닫힐 때 발생하는 이벤트 Hook
 * @param
 *  1.canClose {boolean} 메뉴를 닫을 수 있는지 여부
 * @return 없음.
*/

onMenuClose(canClose)
{{</highlight>}}

**2. onMenuRefresh**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠가 새로고침될 때 발생하는 이벤트 Hook
 * @param
 *  없음
 * @return 없음.
*/

onMenuRefresh()
{{</highlight>}}

**3. onLoaded**

{{<highlight javascript>}}
/*
 * 메뉴가 로드 될 때 발생하는 이벤트 Hook
 * @param
 *  없음
 * @return 없음.
*/

onLoaded()
{{</highlight>}}

**4. triggerAction**

{{<highlight javascript>}}
/*
 * 하위 컴포넌트에서 상위 컴포넌트 action을 실행
 * @param
 *  1.actionName {string} CB할 action 이름
 *  2.isBubbling {boolean} 상위 컴포넌트로 순차적으로 action을 시킬지 여부 {default: true}
 *  3.args {object} 상위 컴포넌트 action에 전달할 파라미터 값
 * @return : 없음
*/

triggerAction(actionName, isBubbling = true, ...args)
{{</highlight>}}

  - 참고 소스 [testboard triggerAction 브랜치](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard?version=GBtriggerAction)
  - 실행 방법은 [README](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard?path=%2FREADME.md&version=GBtriggerAction&_a=preview) 를 확인하시기 바랍니다.

**5. raiseEvents**

{{<highlight javascript>}}
/*
 * 이벤트 등록
 * @param
 *  1.argument {object} arguments object
 * @return 없음.
*/

raiseEvents()
{{</highlight>}}

**6. getLanguageResource**

{{<highlight javascript>}}
/*
 * 리소스 조회
 * @param
 *  1.key {string} 리소스 Key
 *  2.resType {string} F: fulle, S: short
 *  3.paramValues {array} 파라미터 string array
 *  4.description {string} 리소스 설명
 *  5.mountedResource {타입} 정보도 적으면 좋음
 * @return {string} : 리소스 명.
*/

getLanguageResource(key, resType = 'F', paramValues = null, description='', mountedResource=null)
{{</highlight>}}

**7. refreshMenu**

{{<highlight javascript>}}
/*
 * 메뉴 화면 새로고침
 * @param
 *  없음
 * @return 없음.
*/

refreshMenu()
{{</highlight>}}

**8. closeMenu**

{{<highlight javascript>}}
/*
 * 메뉴 화면 닫기
 * @param
 *  없음
 * @return 없음.
*/

closeMenu()
{{</highlight>}}

**9. getOpenMenuParams**

{{<highlight javascript>}}
/*
 * 메뉴 파라미터 조회
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getOpenMenuParams()
{{</highlight>}}

**10. checkServiceCode**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  없음
 * @return {object} : 메뉴 파라미터 값.
*/

checkServiceCode(serviceCode)
{{</highlight>}}

**11. checkAuditService**

{{<highlight javascript>}}
/*
 * Audit 확인
 * @param
 *  1.serviceCode {string} 서비스 코드
 * @return {boolean} : true|false.
*/

checkAuditService(serviceCode)
{{</highlight>}}

**12. onAudit**

{{<highlight javascript>}}
/*
 * Audit 이벤트 발생시 Hook
 * @param
 *  없음
 * @return 없음.
*/

onAudit()
{{</highlight>}}

**13. enableAudit**

{{<highlight javascript>}}
/*
 * Audit 버턴 활성화 여부 조회
 * @param
 * 없음
 * @return {boolean} : true|false.
*/

enableAudit()
{{</highlight>}}

**14. setActivate**

{{<highlight javascript>}}
/*
 * 현재 화면 활성화 설정
 * 활성화 되면 해당 메뉴가 선택되어 포커스가 가게 됨.
 * @param
 *  없음
 * @return 없음.
*/

setActivate()
{{</highlight>}}