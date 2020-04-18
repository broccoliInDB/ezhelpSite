---
title: Common
linktitle: Common
description: Common은 CHIS Frontend 소스내에 공통업무를 담당하는 Repo로써 사용자, 환자, 보안, 인터페이스, 공통 UI 관련 부분을 담당 하고 있습니다.
weight: 203
disableToc: false
draft: false
date: 2019-10-28T19:45:25+09:00
tags: [common]
---
일반적으로 `_`가 붙은 해당 **_내부페이지_** 에만 사용되는 변수나 함수들은 문서 api에 기입하실 필요 없습니다.

해당 private한 부분들은 내부 소스만 보고서도 분석이 가능하다고 판단합니다.

<i class="fas fa-info-circle"></i> **사용팀**

- **`BIZ`**는 업무사용자에게 제공하는 경우

- **`TA`**는 기술팀에서만 public으로 제공되어 사용되는 부분

- **<span class="colored">BIZ & TA</span>** 두개가 다 혼재 되어있는 경우

내부 링크를 따라가면 API 가 있는데 **Defintion, param, return** 의 대한 정리가 모두 마친 경우 **확인 완료**란에 Y 라고 입력 부탁드립니다.

## Overview
---

Common은 CHIS Frontend 소스내에 공통업무를 담당하는 Repo로써 현재 총 6가지의 addon으로 구성되어 있음

| 구분 | 명칭 | 목적 |
|---|---|---|
|engine|[co-engine](/chis/common/#co-engine)| 별도의 작은 application을 구현하기 위한 독립적인 성향의 모듈들을 구현한 곳이다. |
|addon|[co-interface](/chis/common/#co-interface)| Interface와 관련된 서비스나 mixin들의 구현이 집합된 곳이다.  |
|addon|[co-patient](/chis/common/#co-patient)| 환자 정보 관련된 로직이 구현되어 있는 addon 이다. |
|addon|[co-security](/chis/common/#co-security)| 보안관련한 로직이 구현되어 있는 addon 이다. |
|addon|[co-ui](/chis/common/#co-ui)| UI 적인 부분의 로직 혹은 BIZ 개발자들이 사용할 화면중 내부 구현이 완료된 UI의 로직이 구현되어 있는 addon이다. |
|addon|[co-user](/chis/common/#co-user)| 사용자 혹은 병원과 관련된 로직이 구현된 addon 이다. |

## co-engine
---
향후 운영기 내부에 따로 메뉴로 구성되지 않고 독립적인 환경에서 사용될 모듈들이 이곳에 속하게 된다.

|사용팀| 구분 | 명칭 | 목적 | FE 담당자 | BE 담당자|
|---|---|---|---|---|---|
|BIZ|component|[messagequeue](/supporting-pages/mq-monitoring)| Message Queue 의 송수신 상태 확인. 그리고 필요시 재송신 및 재수신 | 최용범| 박득창|
|BIZ|component|[jobscheduler](/supporting-pages/job-scheduler)| 스케줄링이 필요한 Job을 병원별로 등록 및 삭제, Job 실행 히스토리 확인 | 최용범|박길선|
|BIZ|component|interface| 외부 모듈의 사용 예제를 개발자들에게 제공하는 화면 | 김민식|X|

## co-interface
---
CHIS의 모든 Interface와 관련된 서비스나 mixin들의 구현이 집합된 곳이다.

|사용팀| 구분 | 명칭 | 목적 | 확인 담당자 |확인 완료|
|---|-----|-----|-----|------|---|
||mixin| [cdc-mixin](/chis/chis-mixins/#cdc-mixin) | ... | 소태훈||
||mixin| [drg-mixin](/chis/chis-mixins/#drg-mixin) | ... | 소태훈||
||mixin| [local-resource-mixin](/chis/chis-mixins/#local-resource-mixin) | ... | 소태훈||
||mixin| [pacs-mixin](/chis/chis-mixins/#pacs-mixin) | ... | 소태훈||
||mixin| [van-mixin](/chis/chis-mixins/#van-mixin) | ... | 소태훈||
|BIZ|service| [econsent-service](/chis/chis-services/#econsent-service) | 전자동의서를 사용을 위해 제공하는 서비스 | 김민식||
|TA|service| [installation-check-service](/chis/chis-services/#installation-check-service-ta) | 통합설치 페이지에 관련된 웹소켓 연결 구현 서비스 | 최용범|Y|
|TA|service| [interface-websocket-service](/chis/chis-services/#interface-websocket-service) | 인터페이스에서 mixin에서 사용되는 웹소켓 연결 서비스 | 김민식||

## co-patient
---
환자 정보 관련된 로직이 구현되어 있는 addon 이다.

|사용팀| 구분 | 명칭 | 목적 | 확인 담당자 | 확인 완료 |
|---|-----|-----|-----|------|---|
|BIZ|service| [patient-manager-service](/chis/chis-services/#patient-manager-service) | 환자 세션 관리를 위한 서비스 | 정재권|Y|
|TA|utils| [objects-are-equal](/chis/chis-utils/#objects-are-equal) | ... | 정재권||

## co-security
---
사용자의 보안관련한 로직이 구현되어 있는 addon 이다.

|사용팀| 구분 | 명칭 | 목적 | 확인 담당자 | 확인 완료 |
|---|-----|-----|-----|------|---|
||component| account-password-reset | ... | 정재권||
||component| global-policy | ... | 정재권||
||component| login-time-policy | ... | 정재권||
||component| workstation-policy | ... | 정재권||
|TA|mixin| [kmi-sign-mixin](/chis/chis-mixins/#kmi-sign-mixin-ta) | ... | 정재권||
|TA|service| [authentication-service](/chis/chis-services/#authentication-service-ta) | 사용자 인증 및 권한 관리를 위한 서비스 | 정재권|Y|
|TA|service| [inactivity-monitor-service](/chis/chis-services/#inactivity-monitor-service-ta) | 사용자 세션 타임 아웃 관리를 위한 서비스 | 정재권|Y|
|TA|service| [pki-kmi-service](/chis/chis-services/#pki-kmi-service-ta) | 공인인증서 관련 처리를 위한 서비스 | 정재권|Y|

## co-ui
---
CHIS app의 UI 적인 부분 혹은 BIZ 개발자들이 사용할 화면중 내부 구현이 완료된 UI의 로직이 구현되어 있는 addon이다.

|사용팀| 구분 | 명칭 | 목적 | 확인 담당자 |확인 완료|
|---|-----|-----|-----|------|---|
|BIZ|component| [ui-address](/supporting-pages/ui-address/) | 대한민국의 우편번호 및 주소 조회 | 최용범|Y|
||component| ui-content | ... | 정재권||
||component| ui-content-container | ... | 정재권||
||component| ui-content-controller | ... | 정재권||
||component| ui-content-sortable-container | ... | 정재권||
||component| ui-link-to-menu | ... | 정재권||
||component| ui-loading-content | ... | 정재권||
||component| ui-notfound-content | ... | 정재권||
||component| ui-notfound-engine | ... | 정재권||
||component| ui-tab-button | 메뉴상단 탭 | 정재권||
||helper| [co-viewcomponent-helper](/chis/chis-helpers/#co-viewcomponent-helper) | ... | 정재권||
||mixin| [ui-content-container-mixin](/chis/chis-mixins/#ui-content-container-mixin) | ... | 정재권||
||mixin| [ui-content-open-list-task-mixin](/chis/chis-mixins/#ui-content-open-list-task-mixin) | ... | 정재권||
||mixin| [ui-content-popup-mixin](/chis/chis-mixins/#ui-content-popup-mixin) | ... | 정재권||
||mixin| [ui-content-state-mixin](/chis/chis-mixins/#ui-content-state-mixin) | ... | 정재권||
||mixin| [ui-engine-loader-mixin](/chis/chis-mixins/#ui-engine-loader-mixin) | 미구현 삭제 여부 확인 후 삭제 필요 | 정재권||
|BIZ|mixin| [ui-message-mixin](/chis/chis-mixins/#ui-message-mixin) | 토스트나 메세지를 직접 호출하면 불필요하게 반복작업이 되어 mixin으로 wrapping함 | 최용범| Y |
||mixin| [ui-opened-menus-mixin](/chis/chis-mixins/#ui-opened-menus-mixin) | ... | 정재권||
|BIZ|service| [common-service](/chis/chis-services/#common-service) | 제공되는 API중에서 공통으로 제공할 추가적인 기능 모음 | 정재권|Y|
|BIZ|service| [content-message-service](/chis/chis-services/#content-message-service) | 화면과 화면사이의 이벤트를 주고 받을 수 있는 서비스 | 정재권|Y|
|TA|service| [contents-manager-service](/chis/chis-services/#contents-manager-service-ta) | 메뉴 화면 컨텐츠 관리를 위한 서비스 | 정재권|Y|
||service| [language-resource-service](/chis/chis-services/#language-resource-service) | 미구현 삭제 여부 확인 후 삭제 필요 | 정재권||
|BIZ|service| [menu-manager-service](/chis/chis-services/#menu-manager-service) | 메뉴 관리 서비스로 메뉴 열기, 닫기, 상태 관리 등을 위한 서비스 | 정재권|Y|
||service| [spell-check-service](/chis/chis-services/#spell-check-service) | ... | 김수민||


## co-user
---
CHIS의 사용자 혹은 병원과 관련된 로직이 구현된 addon 이다.

|사용팀| 구분 | 명칭 | 목적 | 확인 담당자 |확인 완료|
|---|---|---|---|---|---|
|BIZ|service| [current-user-service](/chis/chis-services/#current-user-service) | 로그인된 현재 사용자 세션 관리를 위한 서비스 | 정재권|Y|
|BIZ|service| [hospital-settings](/chis/chis-services/#hospital-settings-ta) | 병원 환경 설정을 위한 서비스 | 정재권|Y|
|BIZ|service| [personalization-service](/chis/chis-services/#personalization-service-ta) | 사용자 환경 설정 관리를 위한 서비스 | 정재권|Y|
