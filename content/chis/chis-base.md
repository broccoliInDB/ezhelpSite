---
title: CHIS Component Base
linktitle: CHIS Component Base
description: CHIS Component Base의 대한 관련 문서 입니다.
weight: 206
disableToc: false
draft: false
date: 2019-11-12T11:24:07+09:00
tags: [component-base]
---

[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-core) 로 이동

CHIS Component Core에 patient-context-mixin이 extend 된 컴포넌트이다. CHIS 블루프린트로 component 생성시 가장 Base가 된다.

```
Component-Core
└── PatientContextMixin
```

- [component-core](/chis/chis-core/): Ember 기본 Component에 아래 Mixin들을 extend 하여 구현한 컴포넌트
- [patient-context-mixin](/chis/chis-mixins/#patient-context-mixin) : 환자관련 이벤트 핸들러 구현

## Variables
---

```
/*
 * 메뉴 컨텐츠 정보
 * @return {object} : 메뉴 컨텐츠 class instance.
*/
contentSource

/*
 * 풀화면 모드 여부
 * @return {boolean} : true|false.
*/
isWide

/*
 * 메뉴 width 클래스 명
 * @return {string} : defaut 값 'w680'.
*/
menuClass
```