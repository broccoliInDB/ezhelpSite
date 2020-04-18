---
title: CHIS Overview
linktitle: CHIS Overview
description: CHIS Frontend App Structure Overview
weight: 201
disableToc: false
draft: false
date: 2019-10-24T16:13:30+09:00
tags: [chisoverview]
---

CHIS는 framework- 로 시작하는 프레임워크 모듈과 co-로 시작하는 공통업무기능 구성을 위한 공통 모듈로 구분할 수 있다.

## 1. 프레임웍 구성
---
**CHIS Framework**은 **Core**, **Cross-Cutting**, **Control**의 세 모듈로서 구성되고, 각 모듈은 개별적인 역할을 담당하여 업무  영역의 어플리케이션으로 투명하게 혹은 명시적으로 서비스 된다.

#### <span style="color:blue">_구성 트리_</span>
```
Host
├── Framework                   // core, cross-cutting, control의 네임스페이스
├── Framework-core              // Component를 Extends한 ComponentCore 및 ComponentBase 구현
├── Framework-cross-cutting     // 전역적인 사용을 위한 서비스 container mixin 제공
└── Framework-control           // control 제공

Framework: CHIS.FR
├── Core                     // import Core from 'framework-core/core';
├── CrossCutting             // import CrossCutting from 'framework-cross-cutting/cross-cutting';
└── Control                  // import Control from 'framework-control/control';

Core: CHIS.FR.Core
├── ComponentCore
├── ComponentBase
├── ServiceBase
├── RouteBase
├── ModelBase
├── FoldedContentMixin
├── FoldedModuleMixin
├── CCMPRouteBase
└── CCMPComponentBase

CrossCutting: CHIS.FR.CrossCutting
├── Utility
├── ServerCallMixin
├── GlobalServiceContainerMixin
├── StatefulComponentMixin
├── StatefulRouteMixin
├── MenuContextMixin
├── PatientContextMixin
├── PersonalizationSettingMixin
└── _PrivateServerCallService

Control : CHIS.FR.Control
```

#### <span style="color:blue">_Core_</span>
  - 업무를 구성하는 라우트/컴포넌트/서비스/모델 요소등의 부모 클래스를 제공한다.
  - 업무 혹은 다른 Framework 요소에 필요한 핵심 기능을 제공한다.
  - 주로 상속(extend)을 통해 업무 영역에 제공된다.

#### <span style="color:blue">_Cross-Cutting_</span>
  - 업무의 전역적인 서비스를 제공한다.
  - 공통적으로 사용하는 유틸리티성 기능을 제공한다.
  - 기타 전역적인 기능을 제공한다.
  - 주로 의존성 주입을 통해 업무 영역에 제공된다.

#### <span style="color:blue">_Control_</span>
  - 그리드나, 차트, 버튼 등 공용적으로 필요한 컨트롤을 제공한다.


## 2. 공통 업무 기능 구성
---
공통업무 영역은 engine, interface, 환자, 보안, 사용자, UI 등의 모듈로 구성된다.

각 모듈은 서비스 및 컴포넌트를 포함하며, 업무 engine/module에 제공되거나 독립적으로 작동/표시된다.

Framework 영역으로 부터 요소 별로 상속 받고, 서비스, 컴포넌트를 제공받는다.

#### <span style="color:blue">_구성 트리_</span>
```
Host
├── co-engine                 // 별도의 작은 application을 구현하기 위한 독립적인 성향의 모듈들을 구현한 곳이다.
├── co-interface              // Interface와 관련된 서비스나 mixin들의 구현이 집합된 곳이다.
├── co-patient                // 환자 정보 관련된 로직이 구현되어 있는 addon 이다.
├── co-security               // 보안관련한 로직이 구현되어 있는 addon 이다.
├── co-ui                     // UI 적인 부분의 로직 혹은 BIZ 개발자들이 사용할 화면중 내부 구현이 완료된 UI의 로직이 구현되어 있는 addon이다.
└── co-user                   // 사용자 혹은 병원과 관련된 로직이 구현된 addon 이다.

co-engine
├── messagequeue              // Message Queue 의 송수신 상태 확인. 그리고 필요시 재송신 및 재수신
└── jobscheduler              // 스케줄링이 필요한 Job을 병원별로 등록 및 삭제, Job 실행 히스토리 확인

co-interface
├── cdc-mixin                    //
├── drg-mixin                    //
├── local-resource-mixin         //
├── pacs-mixin                   //
├── van-mixin                    //
├── econsent-service             //
├── installation-check-service   // 통합설치 페이지에 관련된 웹소켓 연결 구현 서비스
└── interface-websocket-service  //

co-patient
├── patient-manager-service     //환자 세션 관리를 위한 서비스
└── objects-are-equal           //두 오브젝트가 동일한지 비교 helper

co-security
├── account-password-reset      //사용자 비밀 번호 변경 UI
├── global-policy               //병원 정책 설정 UI
├── login-time-policy           //사용자 로그인 가능 시간 관리 UI
├── workstation-policy          //사용자 로그인 가능 IP 관리 UI
├── kmi-sign-mixin              //공인인증서 관련 기능 제공 mixin
├── authentication-service      //사용자 권한관리 서비스
├── inactivity-monitor-service  //사용자 session timeout 시간 관리 서비스
└── pki-kmi-service             //공인인증서 기능 지원을 위한 서비스

co-ui
├── ui-address
├── ui-content                          //메뉴의 content로 view component를 load한다.
├── ui-content-container                //메뉴의 헤더와 controller, content를 구성하는 container.
├── ui-content-controller               //메뉴의 상단 기능 모음.
├── ui-content-sortable-container       //메뉴 중에서 스크롤 가능한 영역의 content를 담는 container.
├── ui-link-to-menu                     //메뉴를 오픈할 수 있는 component control.
├── ui-loading-content                  //메뉴 content가 로딩중에 표시되는 component.
├── ui-notfound-content                 //메뉴 content를 load할 수 없을 때 표시되는 component.
├── ui-notfound-engine                  //메뉴가 포함되어 있는 도메인을 찾을 수 없을 때 표시되는 component.
├── ui-tab-button                       //HOST 상단 탭 버턴으로 현재 화면에 표시된 모든 메뉴 정보를 탭 형식으로 보여주는 component.
├── co-viewcomponent-helper             //메뉴 content를 동적으로 load 해주는 helper.
├── ui-content-container-mixin          //메뉴를 담는 container의 공통적인 기능 담은 mixin.
├── ui-content-open-list-task-mixin     //다중 메뉴를 열어줄 때 동시성(concurrency)에 대한 처리를 해주는 기능 mixin.
├── ui-content-popup-mixin              //메뉴 중에서 팝업 영역에 보이는 content의 공통 기능 mixin.
├── ui-content-state-mixin              //메뉴의 상태값을 관리하기 위한 기능 mixin.
├── ui-engine-loader-mixin              //메뉴 component가 포함되어 있는 도메인 engine 소스 다운을 위한 mixin.
├── ui-message-mixin                    //메뉴 사이에 이벤트를 전달할 수 있는 기능이 담긴 mixin.
├── ui-opened-menus-mixin               //오픈된 메뉴 정보값을 local storage에 관리해주는 기능이 담긴 mixin.
├── common-service                      //많이 사용되는 기능을 제공을 하는 서비스.
├── content-message-service             //메뉴 사이에 이벤트 처리를 담당하는 서비스.
├── contents-manager-service            //메뉴의 content를 관리하는 서비스.
├── language-resource-service           //삭제 대상 by hans.jjk
├── menu-manager-service                //메뉴에 대한 lif-cycle을 관리하는 서비스.
└── spell-check-service                 //

co-user
├── current-user-service                //로그인 사용자 세션 관리 서비스.
├── hospital-settings-service           //병원 환경 설정 관리를 지원해 주는 서비스.
└── personalization-service             //사용자 환경 설정 관리를 지원해 주는 서비스.

Control : CHIS.FR.Control
```
#### <span style="color:blue">_co-engine_</span>
별도의 작은 application을 구현하기 위한 독립적인 성향의 모듈들을 구현한 곳이다.

#### <span style="color:blue">_co-interface_</span>
Interface와 관련된 서비스나 mixin들의 구현이 집합된 곳이다.

#### <span style="color:blue">_co-patient_</span>
환자 정보 관련된 로직이 구현되어 있는 addon 이다.

#### <span style="color:blue">_co-security_</span>
보안관련한 로직이 구현되어 있는 addon 이다.

#### <span style="color:blue">_co-ui_</span>
UI 적인 부분의 로직 혹은 BIZ 개발자들이 사용할 화면중 내부 구현이 완료된 UI의 로직이 구현되어 있는 addon이다.

#### <span style="color:blue">_co-user_</span>
사용자 혹은 병원과 관련된 로직이 구현된 addon 이다.

## 3. 프레임웍 및 공통 업무 적용 구조
---
개별 업무 영역(도메인)은 하나의 업무 engine(Ember Engine)과 하나의 업무 module(Ember Addon)로 구성된다.

- 현재 개발단위가 라우팅을 기반으로한 단위에서 컴포넌트 기반으로한 단위로 변경이 이루어졌음.
- engine 모듈은 추후 lazy loading을 구현하기 위해 유지하고 있는 상태이며 현재로써는 업무개발자 기준으로 진행해야할 작업은 없음.
- 따라서 업무개발은 module addon에서만 진행한다.

module 내에는 컴포넌트, 템플릿, 모델, 헬퍼 등의 요소가 포함된다.

- 요소 별로 Framework으로 부터 제공되는 부모 클래스를 상속 받고, 필요한 서비스, 컴포넌트 등을 이용한다.
- 공통업무 영역으로부터 제공되는 서비스, 컴포넌트 등을 활용하기도 한다.

#### <span style="color:blue">_구성_</span>

![img](/chis/images/chisoverview1.png)

## 4. 프로젝트 구조
---
전체 시스템은 아래의 폴더 구조를 가지며, 업무 개발자는 host와 해당하는 업무 module 폴더 내에서 작업한다.

#### <span style="color:blue">_프로젝트 트리 구조_</span>

```
Host
├── Framework                   // core, cross-cutting, control의 네임스페이스
├── Framework-core              // Component를 Extends한 ComponentCore 및 ComponentBase 구현
├── Framework-cross-cutting     // 전역적인 사용을 위한 서비스 container mixin 제공
├── Framework-control           // control 제공
├── co-engine                   // 별도의 작은 application을 구현하기 위한 독립적인 성향의 모듈들을 구현한 곳이다.
├── co-interface                // Interface와 관련된 서비스나 mixin들의 구현이 집합된 곳이다.
├── co-patient                  // 환자 정보 관련된 로직이 구현되어 있는 addon 이다.
├── co-security                 // 보안관련한 로직이 구현되어 있는 addon 이다.
├── co-ui                       // UI 적인 부분의 로직 혹은 BIZ 개발자들이 사용할 화면중 내부 구현이 완료된 UI의 로직이 구현되어 있는 addon이다.
├── co-user                     // 사용자 혹은 병원과 관련된 로직이 구현된 addon 이다.
├── biz1-engine
├── biz1-module
├── biz2-engine
├── biz2-module
├── ...
├── biz3-engine
├── biz3-module

```
