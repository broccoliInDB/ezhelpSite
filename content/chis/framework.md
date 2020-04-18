---
title: Framework
linktitle: Framework
description: Framework은 CHIS Frontend의 Framework를 담당하는 Repo로써 전역적인 서비스, 컨트롤, mixins, helpers, utils 등의 제공을 담당하고 있습니다.
weight: 204
disableToc: false
draft: false
date: 2019-10-28T19:45:17+09:00
tags: [control]
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

CHIS App내에 프레임워크를 제공하는 Repository. 현재 총 9개의 영역으로 구분되어 있음.

| 구분 | 명칭 | 목적 |
|---|---|---|
|addon|[framework-blueprint](/chis/framework/#framework-blueprint)| CHIS Custom Blueprint |
|addon|[framework-control](/chis/framework/#framework-control)| control 및 helper 제공 |
|addon|[framework-core](/chis/framework/#framework-core)| Component를 Extends한 ComponentCore 및 ComponentBase 구현 |
|addon|[framework-cross-cutting](/chis/framework/#framework-cross-cutting)| - 전역적인 사용을 위한 서비스 container mixin 제공<br>- 전역적인 사용을 위한 service, mixin, helper 등 구현 |
|addon|[eslint-plugin-chis](/chis/framework/#eslint-plugin-chis)| CHIS Custom Rules |
|engine|[framework-feature-browser](/chis/framework/#framework-feature-browser)| Controls 사용법 및 API 제공 |
|addon|[framework-global-service](/chis/framework/#framework-global-service)| - ErrorHandler<br>- I18n 서비스<br>- 전역적인 사용을 위한 서비스의 container service 제공 |
|addon|[framework](/chis/framework/#framework)| Core, Crosscutting, Control의 네임스페이스 |
|engine|[framework-tutorial](/chis/framework/#framework-tutorial)| 튜토리얼용 모듈, 현재 사용 안함. |

## framework-blueprint
---
**Ember Command Line Interface**는 특정한 커맨드를 제공해서 사용자가 필요로하는 app structure를 명령어로 생성하게 해준다.

이때 기본적으로 생성되는 구조의 템플릿 번들을 **블루프린트**라고 칭한다.

**_framework-blueprint_** 는 Custom Blueprint로서 각 BIZ단의 engine과 module에 종속되어 BIZ 개발자에게 제공한다. 이곳에 없는 블루프린트는 엠버 default 블루프린트를 사용한다.

블루프린트를 이용한 템플릿의 생성 방법은 [development > blueprint](/development/blueprint/)를 참조

| 구분 | 명칭 | 목적 | 담당자 |
|-----|-----|-----|------|
|blueprint|chis-addon| 업무모듈 addon 생성 | 최용범|
|blueprint|chis-app| 업무모듈 engine 생성 | 최용범|
|blueprint|component| component 생성시 | 최용범|
|blueprint|service| 서비스 생성시 | 최용범|
|blueprint|model| model 생성시 | 최용범|

## framework-control
---
CHIS Framework 로 개발할 때 사용하는 컨트롤과 helpers 등이 있는 addon 입니다.

**_control component_**에 대한 사용법은 [**feature-browser**](/chis/framework/#framework-feature-browser)를 확인하시기 바랍니다.

|사용팀| 구분 | 명칭 | 목적 | 확인 담당자 | 확인 완료|
|---|-----|-----|-----|------|---|
||component|c-accordion| c-accordion 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-accordionitem| c-accordion 컨트롤의 아이템을 구현한 컴포넌트 | 김수민||
||component|c-accordionitem-content| c-accordion 컨트롤의 아이템 콘텐츠 영역을 구현한 컴포넌트 | 김수민||
||component|c-accordionitem-header| c-accordion 컨트롤의 아이템 헤더 영역을 구현한 컴포넌트 | 김수민||
||component|c-autocomplete| c-autocomplete 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-body| ... | 안병철||
||component|c-button| c-button 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-buttondividers| c-buttondividers 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-buttonitem| c-buttondividers의 아이템을 구현한 컴포넌트 | 김수민||
||component|c-calendar| c-calendar 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-chart-bar| ... | 안병철||
||component|c-chart-from-to| ... | 안병철||
||component|c-chart-io| ... | 안병철||
||component|c-chart-io-svg| ... | 안병철||
||component|c-chart-legend| ... | 안병철||
||component|c-chart-line| ... | 안병철||
||component|c-chart-min-max| ... | 안병철||
||component|c-chart-pie| ... | 안병철||
||component|c-chart-point| ... | 안병철||
||component|c-chart-svg| ... | 안병철||
||component|c-checkbox| c-checkbox 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-checkboxlist| c-checkboxlist 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-codesnippet| c-codesnippet 컨트롤을 구현한 컴포넌트 (feature-browser의 코딩 샘플 표시용도) | 김수민||
||component|c-codevalue| c-codevalue 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-combobox| c-combobox 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-contextmenu| c-contextmenu 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-contextmenu-container| c-contextmenu 컨트롤이 위치할 영역을 구현한 컴포넌트 | 김수민||
||component|c-contextmenu-item| c-contextmenu 컨트롤의 아이템을 구현한 컴포넌트 | 김수민||
||component|c-control| 모든 컨트롤이 공통으로 가져야할 속성을 구현한 기본 컴포넌트 | 김수민||
||component|c-drawer| ... | 안병철||
||component|c-drawer-body| ... | 안병철||
||component|c-drawer-nav| ... | 안병철||
||component|c-editor| c-editor 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-errormessage| 컨트롤의 에러 메세지를 표시하기 위한 공통 컴포넌트 | 김수민||
||component|c-expander| c-expander 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-expander-content| c-expander 컨트롤의 콘텐츠 영역을 구현한 컴포넌트 | 김수민||
||component|c-expander-header| c-expander 컨트롤의 헤더 영역을 구현한 컴포넌트 | 김수민||
||component|c-familytree| ... | 안병철||
||component|c-familytree-canvas| ... | 안병철||
||component|c-familytree-form| ... | 안병철||
||component|c-familytree-iconlist| ... | 안병철||
||component|c-familytree-toolbar| ... | 안병철||
||component|c-fileupload| c-fileupload 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-fromtopicker| c-fromtopicker 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-grid| c-grid 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-grid-body-cell-multiple| c-grid 컨트롤의 바디 셀 영역을 구현한 컴포넌트(셀병합) | 김수민||
||component|c-grid-body-cell-single| c-grid 컨트롤의 바디 셀 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-body-cell-template| c-grid 컨트롤의 바디 셀 템플릿 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-body-cell-templates-multiple| c-grid 컨트롤의 바디 셀 영역을 구현한 컴포넌트(템플릿용, 셀병합) | 김수민||
||component|c-grid-body-cell-templates-single| c-grid 컨트롤의 바디 셀 영역을 구현한 컴포넌트(템플릿용) | 김수민||
||component|c-grid-body-dcm| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(셀선택, 셀병합) | 김수민||
||component|c-grid-body-dcm-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(셀선택, 셀병합, 읽기전용) | 김수민||
||component|c-grid-body-dcn| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(셀선택) | 김수민||
||component|c-grid-body-dcn-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(셀선택, 읽기전용) | 김수민||
||component|c-grid-body-dim| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(아이템선택, 셀병합) | 김수민||
||component|c-grid-body-dim-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(아이템선택, 셀병합, 읽기전용) | 김수민||
||component|c-grid-body-din| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(아이템선택) | 김수민||
||component|c-grid-body-din-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(아이템선택, 읽기전용) | 김수민||
||component|c-grid-body-dnm| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(셀병합) | 김수민||
||component|c-grid-body-dnm-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(셀병합, 읽기전용) | 김수민||
||component|c-grid-body-dnn| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-body-dnn-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(읽기전용) | 김수민||
||component|c-grid-body-gcm| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 셀선택, 셀병합) | 김수민||
||component|c-grid-body-gcm-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 셀선택, 셀병합, 읽기전용) | 김수민||
||component|c-grid-body-gcn| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 셀선택) | 김수민||
||component|c-grid-body-gcn-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 셀선택, 읽기전용) | 김수민||
||component|c-grid-body-gim| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 아이템선택, 셀병합) | 김수민||
||component|c-grid-body-gim-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 아이템선택, 셀병합, 읽기전용) | 김수민||
||component|c-grid-body-gin| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 아이템선택) | 김수민||
||component|c-grid-body-gin-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 아이템선택, 읽기전용) | 김수민||
||component|c-grid-body-gnm| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 셀병합) | 김수민||
||component|c-grid-body-gnm-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 셀병합, 읽기전용) | 김수민||
||component|c-grid-body-gnn| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화) | 김수민||
||component|c-grid-body-gnn-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(그룹화, 읽기전용) | 김수민||
||component|c-grid-body-row-detail-template| c-grid 컨트롤의 바디 디테일 템플릿 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-body-row-gfoot-template| c-grid 컨트롤의 바디 그룹 풋터 템플릿 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-body-row-ghead-template| c-grid 컨트롤의 바디 그룹 헤더 템플릿 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-body-vcm| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 셀선택, 셀병합) | 김수민||
||component|c-grid-body-vcm-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 셀선택, 셀병합, 읽기전용) | 김수민||
||component|c-grid-body-vcn| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 셀선택) | 김수민||
||component|c-grid-body-vcn-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 셀선택, 읽기전용) | 김수민||
||component|c-grid-body-vim| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 아이템선택, 셀병합) | 김수민||
||component|c-grid-body-vim-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 아이템선택, 셀병합, 읽기전용) | 김수민||
||component|c-grid-body-vin| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 아이템선택) | 김수민||
||component|c-grid-body-vin-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 아이템선택, 읽기전용) | 김수민||
||component|c-grid-body-vnm| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 셀병합) | 김수민||
||component|c-grid-body-vnm-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 셀병합, 읽기전용) | 김수민||
||component|c-grid-body-vnn| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화) | 김수민||
||component|c-grid-body-vnn-readonly| c-grid 컨트롤의 바디 영역을 구현한 컴포넌트(가상화, 읽기전용) | 김수민||
||component|c-grid-foot| c-grid 컨트롤의 풋터 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-foot-cell| c-grid 컨트롤의 풋터 셀 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-foot-cell-template| c-grid 컨트롤의 풋터 셀 템플릿 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-head| c-grid 컨트롤의 헤더 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-head-cell-multiple| c-grid 컨트롤의 헤더 셀 영역을 구현한 컴포넌트(셀병합) | 김수민||
||component|c-grid-head-cell-single| c-grid 컨트롤의 헤더 셀 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-head-cell-template| c-grid 컨트롤의 헤더 셀 템플릿 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-menu| c-grid 컨트롤의 메뉴 영역을 구현한 컴포넌트 | 김수민||
||component|c-grid-menu-template| c-grid 컨트롤의 메뉴 템플릿 영역을 구현한 컴포넌트 | 김수민||
||component|c-htmltag| 일반 HTML태그의 컨트롤화를 위해 작성한 컴포넌트 | 김수민||
||component|c-image| ... | 안병철||
||component|c-image-editor| ... | 안병철||
||component|c-input| c-input 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-itemspanel| 컨트롤의 아이템 패널 영역을 구현한 공통 컴포넌트 | 김수민||
||component|c-jsonview| c-jsonview 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-listbox| c-listbox 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-loader| c-loader 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-maskedinput| c-maskedinput 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-materialinput| c-materialinput 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-modal| c-modal 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-modalbody| c-modal 컨트롤의 바디 영역을 구현한 컴포넌트 | 김수민||
||component|c-modalheader| c-modal 컨트롤의 헤더 영역을 구현한 컴포넌트 | 김수민||
||component|c-numericupdown| c-numericupdown 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-pagination| c-pagination 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-panel| c-panel 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-picker| c-picker 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-popover| c-popover 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-popover-content| c-popover 컨트롤의 콘텐츠 영역을 구현한 컴포넌트 | 김수민||
||component|c-popover-trigger| c-popover 컨트롤의 타겟 영역을 구현한 컴포넌트 | 김수민||
||component|c-popup| c-popup 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-positioned-container| 모든 팝업류 컨트롤의 위치를 설정하는 공통 컴포넌트 | 김수민||
||component|c-progressbar| c-progressbar 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-radiobutton| c-radiobutton 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-radiobuttonlist| c-radiobuttonlist 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-repeatbutton| c-repeatbutton 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-scheduler| c-scheduler 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-scheduler-item| c-scheduler 컨트롤의 아이템 영역을 구현한 컴포넌트 | 김수민||
||component|c-sign| ... | 김민식||
||component|c-slider| c-slider 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-splitter| c-splitter 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-splitter-primary| c-splitter 컨트롤의 주 영역을 구현한 컴포넌트 | 김수민||
||component|c-splitter-secondary| c-splitter 컨트롤의 두번째 영역을 구현한 컴포넌트 | 김수민||
||component|c-switch| c-switch 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-tabitem| c-tabs 컨트롤의 아이템 영역을 구현한 컴포넌트 | 김수민||
||component|c-tabitem-header| c-tabs 컨트롤의 헤더 영역을 구현한 컴포넌트 | 김수민||
||component|c-tabs| c-tabs 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-textarea| c-textarea 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-thumbnailslider| ... | 안병철||
||component|c-timeline| ... | 안병철||
||component|c-timeline-symbol| ... | 안병철||
||component|c-timepad| c-timepad 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-togglebutton| c-togglebutton 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-tooltip| c-tooltip 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-tree| c-tree 컨트롤을 구현한 컴포넌트 | 김수민||
||component|c-treeitem| c-tree 컨트롤의 아이템 영역을 구현한 컴포넌트 | 김수민||
||component|c-validationcontrol| 유효성 검사의 필요성이 있는 컨트롤이 상속 받는 공통 컴포넌트 | 김수민||
||component|c-viewer| ... | 안병철||
||component|c-viewer-image| ... | 안병철||
||component|c-viewer-pdf| ... | 안병철||
||component|c-viewer-svg| ... | 안병철||
||component|c-wormhole| 팝업 영역을 구성하는 공통 컴포넌트 | 김수민||
||helper|[fr-array-includes-helper](/chis/chis-helpers/#fr-array-includes-helper)| 배열의 포함 여부를 true/false로 반환하는 헬퍼 | 김수민||
||helper|[fr-array-statistics-helper](/chis/chis-helpers/#fr-array-statistics-helper)| 배열의 통계 값을 반환하는 헬퍼 | 김수민||
||helper|[fr-array](/chis/chis-helpers/#fr-array)| 알수없음/사용처 확인 후 삭제확인필요 | 김수민||
||helper|[fr-blank-convert-helper](/chis/chis-helpers/#fr-blank-convert-helper)| 문자열의 공백을 HTML 공백으로 변환하여 반환 헬퍼 | 김수민||
||helper|[fr-data-compare-helper](/chis/chis-helpers/#fr-data-compare-helper)| 데이터를 연산하여 true/false로 반환하는 헬퍼 | 김수민||
||helper|[fr-eq](/chis/chis-helpers/#fr-eq)| ... | 최용범||
||helper|[fr-equal](/chis/chis-helpers/#fr-equal)| ... | 최용범||
||helper|[fr-filter-style-helper](/chis/chis-helpers/#fr-filter-style-helper)| 필터에 포함된 문자열에 스타일을 적용하여 반환하는 헬퍼 | 김수민||
||helper|[fr-format-date](/chis/chis-helpers/#fr-format-date)| ... | 최용범||
||helper|[fr-format-result-helper](/chis/chis-helpers/#fr-format-result-helper)| 알수없음/사용처 확인 후 삭제확인필요 | 김수민||
||helper|[fr-grid-block-param-helper](/chis/chis-helpers/#fr-grid-block-param-helper)| c-grid 컨트롤의 template 블로 생성을 위한 헬퍼 | 김수민||
||helper|[fr-grid-display-helper](/chis/chis-helpers/#fr-grid-display-helper)| c-grid 컨트롤의 dropdown 타입 셀 표현을 위한 헬퍼 | 김수민||
||helper|[fr-grid-merge-height-helper](/chis/chis-helpers/#fr-grid-merge-height-helper)| c-grid 컨트롤의 병합된 셀의 높이를 계산하기 위한 헬퍼 | 김수민||
||helper|[fr-grid-merge-render-helper](/chis/chis-helpers/#fr-grid-merge-render-helper)| c-grid 컨트롤의 병합된 셀의 렌더링 여부를 반환하는 헬퍼 | 김수민||
||helper|[fr-grid-merge-rowspan-helper](/chis/chis-helpers/#fr-grid-merge-rowspan-helper)| c-grid 컨트롤의 병합된 셀의 rowspan 값을 반환하는 헬퍼 | 김수민||
||helper|[fr-grid-selected-cell-helper](/chis/chis-helpers/#fr-grid-selected-cell-helper)| c-grid 컨트롤의 셀 선택 여부를 반환하는 헬퍼 | 김수민||
||helper|[fr-grid-selected-row-helper](/chis/chis-helpers/#fr-grid-selected-row-helper)| c-grid 컨트롤의 아이템 선택 여부를 반환하는 헬퍼 | 김수민||
||helper|[fr-grid-unbound-style-helper](/chis/chis-helpers/#fr-grid-unbound-style-helper)| c-grid 컨트롤의 unbound 스타일을 반환하는 헬퍼 | 김수민||
||helper|[fr-html-safe-helper](/chis/chis-helpers/#fr-html-safe-helper)| 문자열을 안전한 HTML문자열로 반환하는 헬퍼 | 김수민||
||helper|[fr-inputmask-format-helper](/chis/chis-helpers/#fr-inputmask-format-helper)| Inputmask 포맷을 적용하여 반환하는 헬퍼 | 김수민||
||helper|[fr-inverse-boolean-helper](/chis/chis-helpers/#fr-inverse-boolean-helper)| ... | 최용범||
||helper|[fr-isodateformat-helper](/chis/chis-helpers/#fr-isodateformat-helper)| ... | 최용범||
||helper|[fr-numeric-addition-helper](/chis/chis-helpers/#fr-numeric-addition-helper)| ... | 최용범||
||helper|[fr-resource](/chis/chis-helpers/#fr-resource)| ... | 정재권||
||helper|[fr-service-code](/chis/chis-helpers/#fr-service-code)| 알수없음/사용처 확인 후 삭제확인필요 | 김수민||
||helper|[fr-template-select-helper](/chis/chis-helpers/#fr-template-select-helper)| 알수없음/사용처 확인 후 삭제확인필요 | 김수민||
||mixin|[calendar-binding-mixin](/chis/chis-mixins/#calendar-binding-mixin)| c-calendar 데이터 바인딩을 위한 Mixin | 김수민||
||mixin|[chart-computed-mixin](/chis/chis-mixins/#chart-computed-mixin)| ... | 안병철||
||mixin|[chart-graph-mixin](/chis/chis-mixins/#chart-graph-mixin)| ... | 안병철||
||mixin|[color-temp-mixin](/chis/chis-mixins/#color-temp-mixin)| ... | 안병철||
||mixin|[convert-blob-mixin](/chis/chis-mixins/#convert-blob-mixin)| ... | 안병철||
||mixin|[convert-datatype-mixin](/chis/chis-mixins/#convert-datatype-mixin)| ... | 안병철||
|BIZ|mixin|[econsent-mixin](/chis/chis-mixins/#econsent-mixin)| 전자동의서를 사용하기 위한 Methods를 제공하는 Mixin | 김민식|Y|
|TA|mixin|[familytree-contextmenu-mixin](/chis/chis-mixins/#familytree-contextmenu-mixin-ta)| ... | 안병철||
|TA|mixin|[grid-body-cell-mixin](/chis/chis-mixins/#grid-body-cell-mixin-ta)| c-grid 컨트롤 셀 영역의 공통 Mixin | 김수민||
|TA|mixin|[grid-body-mixin](/chis/chis-mixins/#grid-body-mixin-ta)| c-grid 컨트롤 바디 영역의 공통 Mixin | 김수민||
||mixin|[joint-expand-mixin](/chis/chis-mixins/#joint-expand-mixin)| ... | 안병철||
|BIZ|mixin|[reportview-mixin](/chis/chis-mixins/#reportview-mixin)| 서식에 기반을 둔 CLIPReport를 사용하기 위한 Methods를 제공하는 Mixin | 김민식|Y|
||mixin|[spell-checker-mixin](/chis/chis-mixins/#spell-checker-mixin)| Spell check 기능을 사용하기 위한 공통 Mixin | 김수민||
|TA|mixin|[svg-body-mixin](/chis/chis-mixins/#svg-body-mixin)| ... | 안병철||
|TA|mixin|[svg-icon-mixin](/chis/chis-mixins/#svg-icon-mixin)| ... | 안병철||
|BIZ|mixin|[webreportview-mixin](/chis/chis-mixins/#webreportview-mixin)| HTML 렌더링에 기반을 둔 MLReport를 사용하기 위한 Methods를 제공하는 Mixin | 김민식|Y|
||service|[color-temp-service](/chis/chis-services/#color-temp-service)| ... | 안병철||
||service|[d3-locale-service](/chis/chis-services/#d3-locale-service)| ... | 안병철||
||service|[family-icon-service](/chis/chis-services/#family-icon-service)| ... | 안병철||
||service|[locale-format-service](/chis/chis-services/#locale-format-service)| 컨트롤의 Locale 적용을 위해 필요한 함수등을 제공하는 서비스 | 김수민||
|TA|service|[toast-service](/chis/chis-services/#toast-service-ta)| 토스트 서비스 | 안병철||

## framework-core
---
Component를 Extends한 ComponentCore 및 ComponentBase 구현

|사용팀| 구분 | 명칭 | 목적 | 확인 담당자 |확인완료|
|---|---|---|---|---|---|
|BIZ|js|[component-base](/chis/chis-base/)| CHIS Component Core에 patient-context-mixin이 extend 된 컴포넌트 | 최용범 |Y|
|TA|js|[component-core](/chis/chis-core/)| Ember 기본 Component에 아래 Mixin들을 extend 하여 구현한 컴포넌트 | 최용범 |Y|
||mixin|[component-hook-mixin](/chis/chis-mixins/#component-hook-mixin)| ... | 정재권 ||
||mixin|[foldedcontent-mixin](/chis/chis-mixins/#foldedcontent-mixin-ta)| ... | 정재권 ||
||mixin|foldedmodule-mixin| 미구현되어있음 | 최용범 ||
||mixin|route-hook-mixin| 미구현되어있음. 확인 후 삭제필요 | 정재권 ||
|BIZ|js|model-base| hspTpCd, fsrStfNo, fsrDtm을 기본 Properties로 가지고 있는 EmberObject로 CHIS model base로써 활용됨 | 최용범||
|TA|js|route-base| [GlobalServiceContainerMixin](/chis/chis-mixins/#global-service-container-mixin), [AuthenticatedRouteMixin](https://ember-simple-auth.com/api/classes/AuthenticatedRouteMixin.html), [ServerCallMixin](/chis/chis-mixins/#server-call-mixin)을 상속받은 CHIS route base | 정재권 ||
|BIZ|js|service-base| [GlobalServiceContainerMixin](/chis/chis-mixins/#global-service-container-mixin)을 상속받은 CHIS 서비스 base | 최용범 ||

## framework-cross-cutting
---

전역적인 사용을 위한 서비스의 container mixin 제공. 전역적인 사용을 위한 service, mixin, helper 등 구현

|사용팀| 구분 | 명칭 | 목적 | 확인 담당자 |확인완료|
|---|-----|-----|-----|------|---|
|BIZ|helper|[fr-trigger-action](/chis/chis-helpers/#fr-trigger-action)| trigger Action을 helper로 구현 | 최용범 ||
||mixin|[accessable-component-mixin](/chis/chis-mixins/#context-menu-mixin)| 컴포넌트의 접근 제어를 위한 Mixin | 김수민 ||
|BIZ|mixin|[client-platform-info-mixin](/chis/chis-mixins/#client-platform-info-mixin)| client os와 브라우저 확인 로직 구현 | 최용범 ||
||mixin|[context-info-mixin](/chis/chis-mixins/#context-info-mixin)| 서광원책임이 만든로직, 사용처 확인 후 삭제확인필요 | 최용범 ||
||mixin|[context-menu-mixin](/chis/chis-mixins/#context-menu-mixin)| Contextmenu의 공통 설정을 위해 사용하는 Mixin | 김수민 ||
||mixin|[get-component-mixin](/chis/chis-mixins/#get-component-mixin-ta)| 컴포넌트에 jQuery 이벤트 정보 할당 | 김수민 ||
|BIZ|mixin|[global-service-container-mixin](/chis/chis-mixins/#global-service-container-mixin)| 전역적으로 사용할 서비스를 하나의 컨테이너로서 묶은 Mixin | 최용범||
||mixin|[menu-context-mixin](/chis/chis-mixins/#menu-context-mixin)| 메뉴 관련 이벤트 핸들러 구현 | 정재권 ||
|BIZ|mixin|[patient-context-mixin](/chis/chis-mixins/#patient-context-mixin)| 환자 관련 이벤트 핸들러 구현 | 정재권 ||
|TA|mixin|[personalization-settings-mixin](/chis/chis-mixins/#personalization-settings-mixin-ta)| ... | 정재권 ||
|BIZ|mixin|[server-call-mixin](/chis/chis-mixins/#server-call-mixin)| Ajax Call 구현 | 최용범 ||
|TA|mixin|[stateful-component-mixin](/chis/chis-mixins/#stateful-component-mixin-ta)| ... | 박득창 ||
||mixin|[stateful-route-mixin](/chis/chis-mixins/#stateful-route-mixin)| 예전에 사용했던거로 보임. 현재 사용처 보이지 않음. 삭제확인 | 박득창 ||
|TA|mixin|[tooltip-container-mixin](/chis/chis-mixins/#tooltip-container-mixin-ta)| tooltip message의 공통 설정을 위한 Mixin | 김수민 ||
|TA|mixin|[trigger-action-mixin](/chis/chis-mixins/#trigger-action-mixin-ta)| Action 호출시 depth 관계없이 자식에서 부모로 직접 호출 역할 목적의 로직 | 최용범 |Y|
||js|fr-logging| 서광원책임이 만든건데 활용하는곳 안보임 로깅쪽 문의 후 삭제확인 | 최용범 ||
||service|-server-call-service| 서비스 미구현 | 정재권 ||
|TA|service|[cache-service](/chis/chis-services/#cache-service-ta)| ... | 박득창 ||
|BIZ|service|[config-service](/chis/chis-services/#config-service)| App 설정 값 조회 | 최용범 ||
||service|[contextmenu-service](/chis/chis-services/#contextmenu-service)| Contextmenu의 이벤트 처리를 담당하는 서비스 | 김수민 ||
||service|[logger-manager-service](/chis/chis-services/#logger-manager-service)| ... | 정재권 ||
||service|[menu-event-service](/chis/chis-services/#menu-event-service)| ... | 정재권 ||
||service|[patient-event-service](/chis/chis-services/#patient-event-service)| ... | 정재권 ||
||service|[system-context-service](/chis/chis-services/#system-context-service)| 시스템정보 조회..ip는 확인필요.. | 정재권 ||
|BIZ|service|[upload-helper-service](/chis/chis-services/#upload-helper-service)| 파일 업로드 및 다운로드를 제공 하는 서비스 | 최용범 ||
|BIZ|utility|[Utility](/chis/chis-utils/#utility/)| Util성 함수 제공...getCurrentEngineName이건 안쓰는거 같은데.. | 박득창 ||

## eslint-plugin-chis
---
CHIS framework에서는 eslint룰을 Custom해서 몇가지 추가로 룰을 제공한다.

관련 사항은 [이곳](/development/chis-rules/)에서 확인할 수 있다.

## framework-feature-browser
---

CHIS framework에서는 [framework-control](/chis/framework/#framework-control)에서 제공하는 컨트롤들의 사용법과 API를 제공한다.

**메뉴 위치 화면**

![img](/chis/images/featurebrowser.png)

관련화면은 현재 개발기기준 **_메뉴 > 시스템관리 > UI Feature Browser1_** 이라는 메뉴명칭에 위치하고 있으며 로드화면은 아래와 같다.

**feature-browser 화면**

![img](/chis/images/featurebrowser2.png)

## framework-global-service
---

ErrorHandler, I18n 서비스, 전역적인 사용을 위한 서비스의 container service를 제공한다.

|사용팀| 구분 | 명칭 | 목적 | 확인담당자 |확인완료|
|---|-----|-----|-----|------|---|
|TA사용|mixin|errorhandler-config-mixin| ... | 정재권 ||
|TA사용|mixin|internal-error-mixin| ... | 정재권 ||
||js|hospital-timezone| 사용처확인 | 박득창 ||
|TA사용|service|errorhandler| 내부사용 | 정재권 ||
|BIZ|service|[global-service-container](/chis/chis-services/#global-service-container)| 전역적 사용목적 서비스 inject함 | 박득창 ||
|BIZ|service|[i18n-service](/chis/chis-services/#i18n-service)| ... | 박득창 ||
||service|local-db-service| 사용처 없으면 삭제 | 박득창 ||
|BIZ|service|[storage-service](/chis/chis-services/#storage-service)| 로컬 및 세션 스토리지 저장,삭제,조회 | 박득창 |Y|

## framework
---

Core, Crosscutting, Control의 네임스페이스를 제공한다.

```
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

Control

```

## framework-tutorial
---

**fr-** 컨트롤 사용시절 ( ~ v0.9.10 이전 )에 가이드 했던 로직들이 있습니다.

필요한 것들이 취합되는 데로 삭제할 예정입니다.