---
title: History
linktitle: Release History
description: Release History를 확인 할 수 있는 문서
weight: 401
disableToc: false
draft: false
date: 2019-11-02T16:20:24+09:00
tags: [Release]

---
## v1.0.1 [2020.03.25]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. framework-control_**
  
  - c-sign 서명패드연결 로직 추가 [(사용법 링크)](/supporting-pages/signpad/)

  **_2. common-ui_**
  
  - ember-sortable 1.12.1 -> 2.1.3 변경 

## v1.0.0 [2020.03.24]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-grid_**

  - loading 스타일 수정

#### <span style="color:blue">_[main-contents-scrollable]_</span>

  - 상단 메뉴 목록을 클릭하였을 때 스크롤이 해당 메뉴로 이동하지 않는 오류 수정

#### <span style="color:blue">_[server-call-mixin]_</span>

  - headers 정보에 'isBuiltInEmployee' 값 추가 

#### <span style="color:blue">_[MQ Monitoring]_</span>
  - 메시징 관리자 탭 처리기능 추가. [관련링크](http://viewer.c-his.com/supporting-pages/mq-monitoring/#span-style-color-blue-%EB%A9%94%EC%8B%9C%EC%A7%95-%EA%B4%80%EB%A6%AC%EC%9E%90-%EA%B8%B0%EB%8A%A5-span)

#### <span style="color:blue">_[shortcut-mixin]_</span>

  **<span class="colored2">오류</span>**
  
  - 메모리 leak 조치 완료

  **<span class="colored2">수정</span>**

  - [입력키값 확인 방법](/development/hotkey/#onkeydowninfo) 수정

#### <span style="color:blue">_[2fa]_</span>

  - 해당 기능은 병원외부에서 접근시에 로그인페이지에서 체크하게 되는데, 추후 사용하지 않을 수 있으나 현재 적용중이므로 기재합니다. [관련문서링크](/supporting-pages/2fa/) 

## v0.9.44 [2020.03.12]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">오류</span>**

  **_1. c-familytree_**

  - 저장 후 불러오기 할 때 사람타입 아이콘 일부 구현 안되는 현상 수정

  
  **<span class="colored2">추가</span>**

  **_1. c-viewer-image_**

  - showToolList(화면에 사용할 기능 툴 리스트 정의) property 추가
  - scrollMode(true일 경우, canvas가 아닌 html img 태그를 통해 이미지를 로드하는 기능) property 추가

  **_2. c-autocomplete_**

  - enableEnterKeyCommit(Enter key를 이용한 커밋 활성화 여부 설정) property 추가

  **<span class="colored2">수정</span>**

  **_1. c-image_**

  - 개발자가 img 태그에 스타일 직접 지정할 수 있도록 수정

  **_2. c-chart_**

  - 차트 배경 rect 및 x축이 차트 크기에 따라 유동적으로 변하도록 수정

#### <span style="color:blue">_[MQ Monitoring]_</span>
  - 송신부 메세지가 Sent여도 전송이 되도록 수정.
  - 수신부에 위치한 송신로그 생성일시, 송신일시 display 시간타임 utc로 보이던 것 로컬시간으로 수정

## v0.9.43 [2020.02.17]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">오류</span>**

  **_1. c-body_**

  - 욕창 건수 표시할 경우 말풍선이 중복 형성되는 오류 수정
  - 욕창 건수 표시할 경우 더블클릭 이벤트가 발생하지 않는 오류 수정

  **<span class="colored2">수정</span>**

  **_1. c-familytree_**

  - 가계도 크기를 동적으로 변경할 수 있도록 수정

#### <span style="color:blue">_[오류창]_</span>
  **<span class="colored2">기능추가</span>**

  **_1. 오류 창을 메시지 박스로 대체_**

  - 개발기의 경우 기존과 동일하게 오류창 표시
  - 스테이징, 운영기의 경우 오류 창 대신 메시지 박스 표시

#### <span style="color:blue">_[shortcut-mixin]_</span>
  - 단축키 요구사항으로 인해 component-core 에 shortcut-mixin이 주입됨.
  - shortcut-mixin은 framework-cross-cutting에 위치하고 있고, ember-keyboard를 활용함.
  - 사용법 및 관련사항은 다음 [링크](/development/hotkey/) 참조
  - 샘플소스 : 
  
  ```
  git clone -b shortcut http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard
  ```
  ```
  //host package.json
    "ember-addon": {
    "paths": [
      ...
      "../testboard/engine",
      "../testboard/module",
      ...
    ]
  ```

  - 가이드대로 사용시 eslint rule의 chis/avoid-memory-leak에 체크될텐데, 해당 부분인 **hotkey:on(keydown('...'))** 부분은 변수에 함수를 할당한 것이므로 룰에 체크되는것은 잘 못된 것이다. blueprint 0.9.43 버전내부의 eslint 모듈에는 off로 되어있음.
    따라서 해당 룰은 수정이 될지, off 처리 유지할지 여부는 논의후 결정예정  
  - chis/avoid-memory-leak 룰은 아래 테스트 링크의 경우처럼 미러링이 발생하여 가비지처리가 제대로 되지 않아 메모리 릭이 발생할 것을 염려하여 생긴 룰이다.  
    [테스트 링크](https://ember-twiddle.com/8ec9b9cce9ceea640f7b71cbb61e7a68?openFiles=twiddle.json%2Ctemplates.components.basic-form.hbs)

#### <span style="color:blue">_[i18n]_</span>
  - [참고링크](/development/i18n/#javascript-intl의-format-옵션)
  - chis 내부 서비스인 i18n-sevice의 **<span class='colored'>formatDate 함수</span>** 내부 javascript 부분 수정. [format 자체는 기존 리턴 형태와 동일한 리턴포맷을 리턴함](/development/i18n/)
    - 기존에는 ember-intl을 활용하였으나 **hourCycle** 옵션사용을 위해 javascript 표준내장객체의 intl을 활용함.

#### <span style="color:blue">_[Live Update 문구변경]_</span>
  - AsIs: LiveUpdate의 다운로드가 필요합니다. 진행하시겠습니까?
  - ToBe: LiveUpdate의 다운로드 및 설치가 필요합니다. 진행하시겠습니까?

  다운로드만 하고 설치를 진행하지 않는 경우가 있을 수 있다고 하여 문구 변경함.

#### <span style="color:blue">_[개인별 프린터 설정]_</span>
  - 약제 프린터 마스터 추가
  - Parmacy-> Pharmacy 로 오타 수정
  - 영상검사과 기능검사의 경우 자동출력의 라디오버튼만 선택되어도 저장되도록 수정(프린터리스트가 조회되지 않아도 자동출력 옵션선택시 저장됨.)
  
#### <span style="color:blue">_[필요없는 domain 정보 host에서 삭제]_</span>
  - AdmissionAppointment
  - PatientLocation
  - PatientSubstitution

  관련부분 host package.json, router.js, environment.js에서 삭제함.

#### <span style="color:blue">_[regjsparser 버전 0.6.2로 고정]_</span>
  - 지난주 엠버 내부 종속 모듈중 regjsparser가 0.6.3 버전이 올라가면서 빌드시 정규화 패턴에 `{}` 부분에서 에러가 발생함.
  - 해당 에러는 `\{\}`로 좀더 엄격히 정규화패턴을 정의하면 발생하지 않지만 기존 코드에 영향도가 있어 0.6.2로 버전을 고정함.
  - 추후 정규화를 사용하는 부분에서는 `\{\}` 패턴을 사용바랍니다.

## v0.9.42 [2020.02.03]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">추가</span>**

  **_1. c-codevalue_**

  - codeNameBoxStyle(코드명칭 박스의 인라인 스타일) 프로퍼티 추가
  - codeValueBoxStyle(코드값 박스의 인라인 스타일) 프로퍼티 추가

  **_2. c-body_**

  - 툴팁에 건수 표시 기능 추가
  - 선없는 툴팁 추가 기능

  **<span class="colored2">오류</span>**

  **_1. c-tree_**

  - onEditModeEnded 이벤트가 중복으로 발생하는 오류 수정

  **_2. c-chart_**

  - 차트 series의 name이 null이더라도 에러 발생하지 않도록 조치

  **<span class="colored2">수정</span>**

  **_1. c-familytree_**

  - 자동생성 기능 레이아웃 변경

#### <span style="color:blue">_[MQ Monitoring]_</span>
  - 로그 그리드 로우, 정보, 에러 Y 버튼 클릭시 Log Info 익스펜더 로드되지 않는 버그 수정

#### <span style="color:blue">_[i18n]_</span>
  - fr-formate-date 헬퍼, this.get('fr_I18nService').formatDate 에서 **d옵션** 사용시 불필요한 ' ' 스트링 제거

#### <span style="color:blue">_[require-js-permitted-expression]_</span>
  - 해당 custom rule 중 **DO NOT USE raw Javascript raw expression, Use JQuery or Ember Expression** 제외함.

#### <span style="color:blue">_[login page]_</span>
  - 공지사항 반영.

#### <span style="color:blue">_[OAuth refresh token]_</span>
  **<span class="colored2">추가</span>**

  - 새로고침 후 토큰 재 갱신 스케줄 로직 추가

  **<span class="colored2">오류</span>**

  - 토큰 정보 재 갱신 후 세션 값 업데이트 버그 수정
  - 멀티 탭 환경에서 토큰 재 갱신 로직 추가

#### <span style="color:blue">_[공인인증서]_</span>
  **<span class="colored2">추가</span>**

  - 인증서 서명시 현재 signKorea에 캐시된 인증서와 다른경우 다시 인증서 로그인 팝업 호출

  >  PC에 캐쉬되는 인증서는 하나만 존재할 수 있는데 사이트 접속을 DEV, STAG, PROD 번갈아 하는 경우 마지막 로그인 사용자의 인증서가 signKorea tool ket에 로드 되어 서명 진행 안되는 겨우가 발생하는데 인증서 재 로그인하도록 변경.

  **<span class="colored2">로직 활성화</span>**

  - 로그인 후 미서명된 데이터를 일괄 처리하는 팝업 노출

## v0.9.41 [2020.01.06]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-familytree-canvas_**

  - 가계도 툴바 드래그 기능 개선
  - 가계도 리사이징 드래그 기능 개선

## v0.9.40 [2019.12.23]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-body-injection_**

  - c-body-injection 툴팁 기능 개선.

  **_2. c-chart-io_**

  - 우측 마우스 드래그 확대/축소 기능 개선.

  **_3. c-chart_**

  - 차트 최초 로딩 시, 범례 위치 어긋나는 현상 수정.
  - 차트 멀티y축 생성 시, 흰색 라인 생성되는 것 제거.

  **_3. c-image-editor_**

  - undo/redo 기능 개선.
  - image와 shape 툴바 기능 분리.
  - 라인 드래그할 경우 라인과 라인 핸들이 분리되는 현상 수정.

  **<span class="colored2">추가</span>**

  **_1. c-viewer-pdf_**

  - enablePrint(프린트버튼 옵션) 프로퍼티 추가

#### <span style="color:blue">_[개인별 프린터 설정]_</span>

- billing 마스터 추가 및 ui 구현 완료
- [getPersonalPrinterSetting](/chis/chis-mixins/#getPersonalPrinterSetting) : 저장된 개인 프린터 설정값 조회 서비스

```
//ex
this.get('co_PersonalizationService').getPersonalPrinterSetting('Radiology', 'print')
```

#### <span style="color:blue">_[마우스 우클릭 disable]_</span>

- 마우스 우클릭 disable

## v0.9.39 [2019.12.09]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-editor, c-textarea_**

    - enableSpellCheck 속성이 실시간으로 on/off 가능 하도록 수정

  **_2. c-grid_**

    - body cell template에서 style 속성을 적용할 수 있도록 수정

  **_3. c-picker, c-fromtopicker_**

    - displayDate 속성을 별도로 바인딩하지 않으면 selectedDate 속성값이 변경될 때 displayDate도 함께 변경되도록 수정

  **_4. c-input, c-materialinput_**

    - textMode "alphabet" 사용 시 한글이 입력되면 입력값을 무시하도록 변경 (기존 자동 영문 변환은 Chrome 입력 버그로 인해 사용 불가)

  **_5. c-timeline, c-chart_**

    - 범례 영역 스크롤 기능 개선

  **<span class="colored2">추가</span>**

  **_1. c-picker, c-fromtopicker_**

    - displayFormat 속성 추가 - Picker에 focus가 되지 않았을 때 보여주는 날짜 포맷 설정.

#### <span style="color:blue">_[KMI 1.0.0.3]_</span>
  - 인증서 로그인시 필요한 모듈중 하나인 kmi 모듈이 1.0.0.3 됨.

  - 변경 및 수정사항 : 서명이 등록되어 `V3`에 whitelist에 포함됨. [관련링크](/supporting-pages/total-installation/#kmi-1-0-0-3-업그레이드)

  **<span class="colored2">추가</span>**

  **_1.인증서 비밀번호 갱신 기능 추가_**

  - 병원 비밀번호 갱신 주기 정책에 기준하여 비밀 번호 갱신 팝업 호출.
  - 갱신 3일전에 비밀번호 갱신 유도 팝업 보이기.
  - 갱신 주기가 지나후에는 비번 갱신을 하지 않을 시 자동 로그아웃.

  **_2.미서명 데이터 일괄서명 기능 추가_**

  - 로그인 후 미서명 데이터가 존재하는 경우 일괄 서명 팝업 보이기.
  - 일괄 서명을 취소하는 경우 다음 로그인 시에 다시 팝업.

  **<span class="colored2">수정</span>**

  **_1.서명 데이터 정합성 확인을 위한 필드 필수 값 체크_**

  - 사유: 2019/10/1일 framework에서 signKey를 자동 생성 해주는 로직 적용 이후 서명 데이터에 signKey값이 존재하지 않는 데이터값이 DB 저장된 것이 확인 됨.
  - 적용: signDocument.signKey 값을 required 값으로 개발기에 적용 함.
  - 해결방법: 개발기에서 서명시 오류 발생하면 서명 로직 점검 필요 함.

#### <span style="color:blue">_[MQ Monitoring]_</span>
  - mq monitoring sender 상태표시 제거 : received log 페이지의 sender log status는 의미가 없다라고 하여 제거함.

## v0.9.38 [2019.11.25]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-checkbox, c-radiobutton_**

    - 내부 스타일 구조 수정, text-overflow: ellipsis 적용 샘플 추가(feature-browser>c-checkbox>Checkbox with long text)

  **_2. c-timeline_**

    - 마우스 휠 확대/축소 기능 복원
    - 범례 요소를 선택하면 선택한 요소의 데이터만 보이도록 수정

  **<span class="colored2">추가</span>**

  **_1. c-grid_**

    - autoHeaderHeight 속성 추가 - 그리드 헤더 높이 자동 증가 여부. (해당 기능 사용 시 헤더 타이틀 자동 개행)

  **_2. c-popup_**

    - blockParentClick 속성 추가 - 팝업 컨트롤이 호출된 부모 영역 클릭에 대한 차단 여부 설정

  **_3. c-body-injection_**

    - 주사 부위 컨트롤 신규 제작

  **_4. c-chart_**

    - chart data에 isFixOpacityButton 속성 추가 - 범례 클릭했을때 opcity 고정되는 기능에 대해서 off 여부 설정

  **_5. c-body_**

    - onDblClickTextBox 이벤트 추가 - 말풍선 더블 클릭 시 발생하는 이벤트

#### <span style="color:blue">_[Upload-helper-service]_</span>
  **<span class="colored2">추가</span>**

  **_printOfficeFiles_** 추가

#### <span style="color:blue">_[MQ Monitoring]_</span>
  **<span class="colored2">수정</span>**

  - 화면로드시 로그인 사용자에 따른 병원정보 자동 바인딩
  - 요구사항에 따른 expander 화면 폰트 및 마진 패딩 수정 및 화면 폭 확대

  **<span class="colored2">추가</span>**

  - 조회 조건 초기화 버튼 추가: 화면 초기 로드시 조회 조건상태 세팅으로 초기화

#### <span style="color:blue">_[환경 설정 기능]_</span>
  **<span class="colored2">추가</span>**

  - 사용자 그룹코드 값을 기준으로 병원 환경 설정을 할 수 있는 기능 추가
  - 환경설정 적용 순서
    - 병원 환경 설정 < 개인 환경 설정으로 적용됩니다.
    - 병원 사용자 그룹에도 속하지 않고 개인 설정이 없는 경우에는 시스템 디폴트 값이 적용 됩니다.

|기능|병원 설정 기능|개인 설정 기능| 시스템 디폴트 값|
|---|---|---|---|
|환자리스트| 가능| 가능| 선택할 수 있는 목록 중 첫번째 값|
|워크리스트| 가능| 가능| 선택할 수 있는 목록 중 첫번째 값|
|Brief View| 가능| 가능| 선택할 수 있는 목록 중 첫번째 값|
|로그인 후 화면설정| 가능| 가능| 디폴트 값 없음 |
|환자선택 후 화면설정| 가능| 가능| 디폴트 값 없음 |
|Session Timeout| 없음| 가능| 사용 안함 |
|환자 세션 공유| 없음| 가능| 예 |
|환자정보 화면설정| 없음| 가능| 진료용 |

## v0.9.37 [2019.11.11]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-timeline_**

    - 마우스 우측 버튼으로 타임라인 확대/축소 기능 복원

## v0.9.36 [2019.10.28]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-familytree_**

    - 자식 추가시 위치 틀어짐 현상 수정

  **_2. c-grid_**

    - exportToExcel 기능에 컬럼별 format을 적용 가능하도록 수정
     : (feature-browser>c-grid>Basic 참고)

  **<span class="colored2">추가</span>**

  **_1. c-familytree_**

    - 출산순서 불명 표시 기능 추가

  **_2. c-chart_**

    - chart data에 eventGroupLegend(이벤트 그룹 관리 기능) 추가

## v0.9.35 [2019.10.14]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-textarea_**

    - background-color 스타일을 적용할수 있도록 개선

  **<span class="colored2">오류</span>**

  **_1. c-textarea_**

    - enableAutoHeight 사용 시 verticalAlign 속성이 적용되지 않는 오류 수정

  **_2. c-picker_**

    - required 속성이 적용되지 않는 오류 수정

#### <span style="color:blue">_[통합설치페이지]_</span>
  **<span class="colored2">수정</span>**

  **_1. 웹소켓연결_**

    - 설치페이지가 로드되어있는경우 **연결이 안된경우** 5초간격으로 재연결진행.
    - 현재 kmi 모듈의 경우는 브라우저 종료후 브라우저 재시작해야 웹소켓 연결이 진행됨 : 담당자 전달. 1.0.0.3 버전에 수정 예정

  **<span class="colored2">추가</span>**

  **_1. 새로고침_**

    - 모듈 삭제시 설치여부 리로드를 위한 새로고침

#### <span style="color:blue">_[클라이언트 플랫폼 확인 mixin]_</span>

  **<span class="colored2">클라이언트 os 및 브라우저 확인</span>**

```
//위치
import clientPlatformMixin from 'framework-cross-cutting/mixins/client-platform-info-mixin';

//메서드
//OS Info
var osInfo = this.getOSInfo();
// Browser Info
var browserInfo = this.getBrowserInfo();
```

## v0.9.34 [2019.10.02]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-autocomplete, c-codevalue_**

    - 아이템 패널 내부에 c-grid 컨트롤 등 포커스가 이동되는 컨트롤을 넣어도 닫히지 않도록 수정
    - autocomplete feature-browser에 그리드 사용 샘플 추가

  **_2. c-chart_**

    - 범례 토글아이콘 기능 제거
    - 차트 숨김 처리 시, 아이콘 남아 있는 현상 수정
    - 차트 강조 처리 시, 아이콘은 강조되지 않는 현상 수정
    - x축 데이터에 null 값이 있는 경우 차트에 표시되지 않도록 수정

  **<span class="colored2">오류</span>**

  **_1. c-textarea, c-codevalue_**

    - enableAutoHeight 기능 사용시 minAutoHeight, maxAutoHeight 적용값이 정확히 적용되지 않는 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-textarea_**

    - verticalAlign 속성 추가
      : 세로 텍스트 정렬 'top'|'middle'|'bottom'
    - onSizeChanged 이벤트 추가
      : 컨트롤의 사이즈가 변경될 때 발생하는 이벤트

  **_2. c-modal_**

    - verticalOffset, horizontalOffset 속성 추가
      : offset 설정 속성 추가
    - position 옵션 추가 { 'top' | 'middle' | 'start' | 'end' }

  **_3. c-grid_**

    - fixedOrder 컬럼 속성 추가 : 해당 컬럼의 Sorting 기능을 허용하지 않는다.

  **_4. c-popup_**

    - showBorderLine : 테두리 표시여부 설정
    - blockOutsideClick 속성 추가 : 콘텐츠 외부 영역 클릭에 대한 차단 여부 설정

  **_5. c-popover_**

    - blockOutsideClick 속성 추가 : 콘텐츠 외부 영역 클릭에 대한 차단 여부 설정

  **_6. c-chart_**

    - legendPadding 속성 추가 (차트 범례 여백 지정 기능)
    - offsetX, offsetY 속성 추가(차트 내부 여백 지정 기능)

#### <span style="color:blue">_[환경설정]_</span>
  **<span class="colored2">환경 설정 값 저장 조회 서비스 추가</span>**

  **_1. 서비스 위치_**

    - component 에서 사용하는 경우
      : this.get('co_CommonService') 서비스 사용
    - 이 외는 서비스 주입 필요
      : commonService: Ember.inject.service('common-service')

  **_2. 환경 설정 정보 조회_**

    @settingType : 그룹 분류 예) 'USER', 'HOSPITAL', 'TENANT', 'DEPARTMENT', ...
    @settingOwner : 그룹 분류에 대한 owner key 예) employeeId
    @settingKey : 설정 정보에 대한 unique key 예) GUID 처럼. 해당 설정에 대한 유니크 키 값
  <div class='path'> javascript </div>
  <br>
  {{< highlight javascript >}}
    getConfigurationSettingInfo(settingType, settingOwner, settingKey){
      return this._getConfiguration(settingType, settingOwner, settingKey);
    }
  {{</ highlight >}}

  **_3. 환경 설정 저장_**

    @settingType : 그룹 분류 예) 'USER', 'HOSPITAL', 'TENANT', 'DEPARTMENT', ...
    @settingOwner : 그룹 분류에 대한 owner key 예) employeeId
    @settingValue : 값 정보는 null 값일 수 없으며 string 값 임. json 구조인 경우 JSON.stringify(settingValue) 사용
  <div class='path'> javascript </div>
  <br>
  {{< highlight javascript >}}
  setConfigurationSettingInfo(settingType, settingOwner, settingKey, settingValue, description = null){
    return this._setConfiguration(settingType, settingOwner, settingKey, settingValue, description);
  },
  {{</ highlight >}}

  **_4. 환자 세션 공유 설정 추가_**

    - 멀티로 열린 탭에서 한곳에서 선택한 환자를 공유할 지 여부에 대한 옵션 설정

#### <span style="color:blue">_[요구 사항 기능 추가]_</span>
  **<span class="colored2">멀티 브라우저</span>**

  **_1. 사용자 세션_**

    - 사용자 세션 타임아웃과 동기화 되어 처리 되게끔 처리
    - 사용하지 않음 기능인 경우에는 모든 브라우저가 닫히면 세션은 종료 됨.
    - 메뉴에서 외부 사이트를 새탭에 열 수 있는 기능 추가
  **_2. 개인화 설정 추가_**

    -멀티로 열린 탭에서 한곳에서 선택한 환자를 공유할 지 여부에 대한 옵션 설정

  **<span class="colored2">타임라인</span>**

  **_1. 타임라인 open 상태값_**

  - 타임 라인 open 상태 값 메세지 추가
  <div class='path'> javascript </div>
  <br>
  {{< highlight javascript >}}
  //닫기
  this.get('co_ContentMessageService').sendMessage('main-time_line_openState', false);
  {{</ highlight >}}

#### <span style="color:blue">_[인증서]_</span>
  **<span class="colored2">인증서 로직 수정</span>**

  **_1. 서명저장시_**

    - 인증서 서명시에 성공 콜백을 받지 못하는 경우 모든 분기에서 실패 콜백이 발생하게 끔 수정
    - 성공 콜백: onCertificateSignSucess(data, callerKey='')
      @data : 서명 데이터
      @callerKey : 서명 호출시에 전달 받은 키 값
    - 실패 콜백: onCertificateSignFail(code, msg, callerKey='')
      @code : 실패 코드
      @msg : 실패 메시지
      @callerKey : 서명 호출시에 전달 받은 키 값

  {{< highlight javascript >}}
  //성공시 서명 데이터 json 내용
  const data = {
        "signData": signdata,
        "isIncludeSign": isIncludeSign,
        "isResign":'N',
        "isIntegrity": 'N',
        "signKey": 'guid로 생성된 key',
        "callerKey": callerKey
      };
  {{</ highlight >}}

  - signKey에 대한 front_end 작업은 진행은 완료되었음.
  - 서명 저장시 Back_End에서 signKey에 대한 처리는 테스트 후 추후 배포 예정.
  - signKey에 대한 적용 시점 공지 추후 예정

#### <span style="color:blue">_[MQ Monitoring]_</span>
  **<span class="colored2">추가</span>**

    - Receiver 기준 로그 화면 추가
    - 큐 처리시간 컬럼 추가
    - event 검색으로 조회 옵션 기능 추가
  ![img](/release/images/event.png?width=600px)
  <i class="fas fa-info-circle"></i> 이벤트를 검색 조건으로 할 때 위 사진의 빨간 박스형태의 event 부분으로 검색해야함. **like 검색 아님!**

  **<span class="colored2">수정</span>**

    - 검색 조회 기능 수정 : 병원, 도메인, 검색날짜 or group ID 등 **필수정보**를 통해 조회
    - 에러로그 UI 수정

#### <span style="color:blue">_[Finger Print 적용]_</span>
  **<span class="colored2">js 적용</span>**

    - 개발기, 스테이징, 운영기
      - css, png, jpg, gif, map 기존 적용 형태에 js까지 적용 완료
      - 적용예외 : kmi, pki 관련 부분

## v0.9.33 [2019.09.02]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-grid_**

    - onSelectionChanged 이벤트가 모든 selection 관련 이벤트 발생 후에 발생하도록 수정

  **_2. c-editor_**

    - image 업로드 시 자동으로 서버 경로에 업로드 되도록 수정

  **<span class="colored2">오류</span>**

  **_1. c-grid_**

    - currency 타입에서 min, max 속성이 정상동작하지 않는 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-popover_**

    - stayOpen 속성 추가

## v0.9.32 [2019.08.05]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-chart, c-chart-io, c-timeline_**

    - Local, UTC Time, TimeZoneId 설정 기능 추가

  **_2. c-grid_**

    - enableColumnVirtualization 속성 기본값 false 변경
    - enableRowVirtualization 속성 기본값 false 변경

  **_3. c-combobox_**

    - focus 스타일 적용

  **_4. c-picker, c-fromtopicker_**

    - 날짜 포맷 및 현재 버튼 표시 상태에 따른 기본 넓이 사이즈 적용

  **_5. c-chart_**

    - yAxisPosition(y축 위치) 속성 default 값 설정

  **<span class="colored2">오류</span>**

  **_1. c-viewer-pdf_**

    - pdf파일 동적 교체시, 화면에 검은색 배경 생성되는 문제 수정
    - pdf파일 동적 교체시, 스크롤 작동 안되는 문제 수정

  **<span class="colored2">추가</span>**

  **_1. c-image-editor_**

    - 클립보드 이미지 복사/붙여넣기(ctrl+c/v) 기능 추가

  **_2. c-fromtopicker_**

    - sliderMode 속성 추가 (슬라이더 모드 여부 설정)
    - showSliderToggleButton 속성 추가 (슬라이더 토글 버튼 표시여부 설정
    - ticks 속성 추가 (슬라이더 틱 설정)

  **_3. c-numericupdown_**

    - inputReadOnly 속성 추가 (입력 필드를 읽기 전용으로 설정합니다.)

  **_4. c-panel_**

    - enableDomManagement 속성 추가 (Panel 내부 영역의 컨트롤에 대한 Dom 관리 여부를 설정합니다.)

  **_5. c-autocomplete, c-codevalue_**

    - ignoreControlFilter 속성 추가 : 컨트롤 내부 필터를 무시하도록 설정 (현재 바인딩 된 소스를 모두 표시합니다.)

  **_6. c-chart_**

    - isXAxisBrush 차트 스크롤 on/off 기능

#### <span style="color:blue">_[eslint rules]_</span>
  **<span class="colored2">수정</span>**

  **_1. new-cap rule적용시 A() 제외_**

    - new-cap rule에서 A() 의 경우 소나뷰브 검출에서 제외 하도록 설정함

  **_2. console.log rule 적용으로 변경_**

    - 소스에 console.log가 있으면 소나큐브에 검출됨.

  **_3. 적용방법_**

    host > supportings > .eslintrc.js 의 해당 파일을
    -> 프로젝트 폴더 depth 아래에 있는 .eslintrc.js에 덮어쓰기

#### <span style="color:blue">_[MQ monitoring]_</span>

  **_multi resend, multi re-receive 기능 추가_**

#### <span style="color:blue">_[사이트 타이틀 수정]_</span>
  **<span class="colored2">수정</span>**

  ![img](/release/images/title.jpg?width=200px)

  **_로컬 : LOCAL-Cloud HIS_**
  **_개발기 : DEV-Cloud HIS_**
  **_스테이징 : Cloud HIS_**

#### <span style="color:blue">_[개인화 서비스]_</span>
  **<span class="colored2">수정</span>**
  **_1. 통테 적용사항 반영 및 세션 타임아웃 적용_**
  **_2. 개인화 서비스 UI 변경_**
  ![img](/release/images/personalization.jpg?width=500px)

#### <span style="color:blue">_[메뉴]_</span>

  **_메뉴 검색 기능 추가_**

#### <span style="color:blue">_[다국어 처리 서비스]_</span>

  **_1. 서비스 추가_**

 ```
 import { inject as service } from '@ember/service';
 commonService: service('common-service')
 ```

  **_2. API 호출_**

```
@domainName: 다국어 리소스 사용할 도메인명 예) patientlist

this.get('commonService').getLanguageResource('domainName', 'tempkey', 'F', null, 'remark');
```

## v0.9.31 [2019.07.23]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-grid_**

    - exportToExcel 사용 시 하위 depth의 속성도 바인딩 가능하도록 수정

  **_2. c-chart_**

    - 범례 텍스트 영역 수정
    - 같은 위치에 여러 개의 y축 사용 가능토록 기능 변경

  **<span class="colored2">오류</span>**

  **_1. c-body_**

	- 욕창 데이터 변경 시, 배경색 제때 변경 안되는 현상 수정
	- 빈 욕창 데이터 설정 시, 말풍선 사라지지 않는 현상 수정

  **<span class="colored2">추가</span>**

  **_1. c-picker, c-fromtopicker_**

    - pickerType 속성값 'longDateTime', 'longTime' 추가

  **_2. c-timepad_**

    - enableSeconds 속성 추가 : 초(second)단위 설정 사용 여부.

#### <span style="color:blue">_[Frontend Framework Changes]_</span>

**공통 업무 개발가이드 링크 [경로](http://sps.c-his.com/sites/2/TS/_layouts/15/start.aspx#/SitePages/Home.aspx?RootFolder=%2Fsites%2F2%2FTS%2FShared%20Documents%2F10000%2E%20%EA%B3%B5%EC%9C%A0%2F26%2E%20%28Front%2Dend%29%20%EA%B3%B5%ED%86%B5%20%EC%97%85%EB%AC%B4%20%EA%B0%9C%EB%B0%9C%20%EA%B0%80%EC%9D%B4%EB%93%9C&FolderCTID=0x0120002EC637CA379B954CAB5EA63C92BC08FA&View=%7BB1F4166B%2D82DB%2D4BD6%2D842D%2D1B381D224C3A%7D)**

**<span class="colored2">Date 객체 변환 관련 수정가이드</span>**

![img](/release/images/date_extentions.png)

  - ~~**_공통 업무 개발가이드의 6page 참조_**~~  <i class="fas fa-info-circle"></i> 관련사항은 기약없이 연기됨.

**<span class="colored2">uuid 참조방식 변경</span>**

![img](/release/images/uuid.png)

  - **_공통 업무 개발가이드의 19page 참조_**

**<span class="colored2">Ember Framework upgrade to 3.10.2</span>**

  - **_공통 업무 개발 가이드 11Page 참조_**
    - 기존 open된 visual code나 파일탐색기를 종료한 후 관리자모드로 돌려주시기 바랍니다.
    - 이미 사용중이 파일(ex: node_modules 내부 파일들)이 있다면 참조중이므로 <span class="colored">스크립트 진행과정(모듈 설치,변경 및 삭제)이 원할히 진행되지 않을 수 있음</span>
    - 작업자 프로젝트 폴더에 있는 모든 engine, module에 동작하므로 시간이 걸립니다. <span class="colored">따라서 퇴근 전에 스크립트를 진행하는 것을 추천</span>
    - 참고로 업무도메인내부 모듈들의 버전이 host와 달라도 빌드 및 런은 잘 됩니다. <i class="fas fa-exclamation-triangle chis-exclamation"></i><span style="color: red">하지만 호스트 및 업무도메인 모듈버전을 통일하는데 목적이 있으니 가급적 빠른 시일내에 조치 바랍니다.</span>

**<span class="colored2">동기 ajax</span>**

  - **_공통 업무 개발 가이드 16Page 참조_**
    - 동기 호출은 사용중지 요청.
    - 해당 이슈에 대해 좀 더 상세한 사항은 [ (Front-end) 동기, 비동기 호출 상세 ](http://sps.c-his.com/sites/2/TS/_layouts/15/start.aspx#/SitePages/Home.aspx?RootFolder=%2Fsites%2F2%2FTS%2FShared%20Documents%2F10000%2E%20%EA%B3%B5%EC%9C%A0%2F26%2E%20%28Front%2Dend%29%20%EA%B3%B5%ED%86%B5%20%EC%97%85%EB%AC%B4%20%EA%B0%9C%EB%B0%9C%20%EA%B0%80%EC%9D%B4%EB%93%9C&FolderCTID=0x0120002EC637CA379B954CAB5EA63C92BC08FA&View=%7BB1F4166B%2D82DB%2D4BD6%2D842D%2D1B381D224C3A%7D) 파일에 있습니다.


## v0.9.30 [2019.07.15]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-picker, c-fromtopicker_**

    - placeholder 폰트 색상 수정

  **_2. c-grid_**

    - exportToExcel 메소드에 logging을 위한 parameter 추가
    @fileName: 파일명
    @component: 현재 콤포넌트
    @functionName: 함수명
    @reason: 다운로드 사유
    @params: 추가 정보

  **<span class="colored2">오류</span>**

  **_1. c-popup, c-modal_**

    - 위치를 이동했을때, 특정 위치에서 내부의 레이어 콘트롤이 표시되지 않는 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-grid_**

    - enableColumnVirtualization 속성 추가
      : 그리드 Column UI 가상화 사용 여부.
    - lazyLoadingTimeOut 컬럼 속성 추가
      : 렌더링의 속도 지연 시간 설정.

## v0.9.29 [2019.07.01]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-picker, c-fromtopicker_**

    - onDateUpdated 이벤트가 today버튼, navigaiton버튼에 의한 날짜 변경에도 발생하도록 수정.
    - calendar를 이용한 날짜 변경 시 calendar가 닫힐때 selectedDate가 최종적으로 업데이트 되도록 수정.

  **_2. c-chart, c-timeline_**

    - 차트 컬러샘플 수정

  **<span class="colored2">추가</span>**

  **_1. c-input_**

    - min, max 속성 추가 - 최소값, 최대값 *currency type only.

#### <span style="color:blue">_[WebReportView Mixin]_</span>
  **<span class="colored2">추가</span>**

  **_1. viewWebReport & printWebReport Callback_**

    - 미리보기를 닫는 시점 혹은 인쇄가 종료되는 시점에 전체페이지수에 대한 값을 리턴

  **_2. addHTML_**

    - 렌더링되어 있지 않지만 프린트하기를 원하는 HTML을 출력할 때 사용

  **_3. addWatermark_**

    - 프린트할 때에 워터마크를 사용하고자 할 때 url을 통해서 호출하여 사용

#### <span style="color:blue">_[fingerprint]_</span>
  **<span class="colored2">수정</span>**

  **_1. 로컬호스트, 개발기 환경 구분_**

    - 로컬호스트 : fingerprint 적용 안함.
    - 개발기, 스테이징, 현재 js파일을 제외한 'css', 'png', 'jpg', 'gif', 'map'에 fingerprint 적용됨

## v0.9.28 [2019.06.17]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-slider_**

    - ticks 사용 시 tooltip message에 label text 적용
    - label 위치 개선

  **_2. c-image-editior_**

    - onSaveEditor events 인수 변경
      @editedImageDataUri: 편집된 이미지 data-uri
      @editedImageArrayBlob: 편집된 이미지 Blob
      @originImage: 원본 이미지
    - 툴바 크기 및 디자인 변경
    - 툴바 드래그 및 접기/펼치기 기능 추가

  **<span class="colored2">오류</span>**

  **_1. c-grid_**

    - flex 그리드가 특정 상황에서 컬럼 사이징이 어긋나는 오류 수정

  **_2. c-editor_**

    - image upload시 spellchecker 위치가 어긋나는 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-grid_**

    - groupHeaderLineHeight 속성 추가
     : 그리드 그룹 HEADER 템플릿 높이 설정.
    - groupFooterLineHeight 속성 추가
     : 그리드 그룹 FOOTER 템플릿 높이 설정.

  **_2. c-image-editor_**

    - METHOD
      @insertImage : 개발자가 직접 dynamic하게 이미지 추가
      @saveEditor : 개발자가 직접 편집된 이미지 저장
    - PROPERTY
      @hideTool : 사용하지 않을 툴 리스트
      @isTitlePop : 편집된 이미지 저장시, JSON 데이터에 title 지정하는 팝업 실행 여부

  **_3. c-chart-pie_**

    - series.data 에 fill 추가 : 파이차트 배경 색상 지정 기능

  **_4. c-veiewer_**

    - 섬네일 슬라이더에 가상스크롤 기능 추가

#### <span style="color:blue">_[Job Scheduler]_</span>

  **<span class="colored2">수정</span>**

    - 버튼 클릭 이벤트에 debounce 적용
    - id 컬럼 추가 [ 이벤트 추적 용도 ]

#### <span style="color:blue">_[우편번호 조회, MQ Monitoring]_</span>

  **<span class="colored2">수정</span>**

    - 버튼 클릭 이벤트에 debounce 적용

#### <span style="color:blue">_[Fingerprint]_</span>

  **<span class="colored2">추가</span>**

    - css, png, jpg, gif, map 에 Fingerprint적용

## v0.9.27 [2019.06.03]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-autocomplete, c-codevalue, c-input, c-maskedinput, c-materialinput, c-numericupdown_**

    - 엔터키 입력 시 변경내용이 있을경우 onChanged 이벤트가 발생하도록 변경

  **_2. ​c-viewer, c-viewer-image_**

    - selectedItem 을 최초 로드시 뿐만 아니라, 동적으로도 변경할 수 있도록 조정

  **<span class="colored2">오류</span>**

  **_1. c-input_**

    - enableAutoCommit 상태에서 casing과 같은 옵션 설정이 적용되지 않는 오류 수정

  **_2. c-tabs_**

    - tabitem에 적용된 class 설정이 disabled와 같은 옵션에 의해 사라지는 오류 수정

  **_3. c-control_**

    - Layer 위치 계산 시 absolute 포지션으로 인한 위치 계산 오류 수정

  **_4. c-viewer-image, c-viewer-svg_**

    - 화면 확대 후, 드래그 시 초기에 튀는 현상 수정

  **<span class="colored2">추가</span>**

  **_1. c-numericupdown_**

    - nullable 속성 추가 - 빈값 허용 여부 (허용하지 않는 경우 0 또는 최소값 적용)

  **_2. c-body_**

    - c-body(욕창) 컨트롤러 추가

#### <span style="color:blue">_[MQ Monitoring]_</span>

  **<span class="colored2">추가</span>**

  **_1. senderbody 수정로직 및 검색_**

  ![img](/release/images/jsoneditor.png?width=400px)

    - json파일의 특정 프로퍼티 및 value값을 검색할 수 있음
    - sender log의 senderbody의 value값을 수정 후 저장할 수 있음
    - 전송시 잘못된 데이터로인해 뒷단의 업무가 지연되지 않도록 원인이 된 데이터를 빠르게 수정하여 재전송함을 목적으로 만들어진 `긴급수정로직`
    - 긴급수정로직은 `일반적인 목적으로 사용되어서는 안됨`

#### <span style="color:blue">_[Upload-helper-service]_</span>

  **<span class="colored2">추가</span>**

  **_1. isToastOff 옵션 추가_**

  - [옵션 요청참조경로](http://sps.c-his.com/sites/2/_layouts/15/start.aspx#/Lists/QA/Flat1.aspx?RootFolder=%2Fsites%2F2%2FLists%2FQA%2Ffr_UploadHelperService%20%EC%9D%98%20putFileObject%EB%A1%9C%20%ED%8C%8C%EC%9D%BC%20%EC%97%85%EB%A1%9C%EB%93%9C%EC%8B%9C%20%ED%86%A0%EC%8A%A4%ED%8A%B8%20%EB%A9%94%EC%8B%9C%EC%A7%80%EB%A5%BC%20%EC%95%88%20%EB%B3%BC%20%EC%88%98%20%EC%9E%88%EA%B2%8C%20%ED%95%98%EB%8A%94%20%EC%98%B5%EC%85%98%20%EC%B6%94%EA%B0%80%20%EA%B2%80%ED%86%A0%20%EB%B6%80%ED%83%81%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4&FolderCTID=0x0120020072B9F702C5DB884E8F866CEFD4CFEC64)
  - 실패 토스트는 옵션의 유무와 관계없이 항상 호출됨
  - 토스트 옵션을 수정할 필요 없는경우 기존 로직 수정 필요 없음

{{< highlight javascript>}}
@isPdfConvertToPng
: true -> pdf파일의 경우 pdf, png 형태로 모두 업로드됨.
: false -> pdf파일은 pdf로만 업로드 됨.
@isToastOff
: true -> 업로드 성공시 토스트 호출안됨
: false -> 업로드 성공시 토스트 호출됨

//For Upload file
putFileObject(viewID, files, isPdfConvertToPng, isToastOff)

//For Upload hospital independent files
putCommonFileObject(viewID, files, folderName, isPdfConvertToPng, isToastOff)

//사용 예시는 feature browser를 확인하시면 됩니다.
{{</ highlight>}}

#### <span style="color:blue">_[Ecosent Mixin]_</span>

  **<span class="colored2">수정</span>**

  **_1. response message_**

    - esponse message에서 connection에 대한 내용은 제외하고 반환

#### <span style="color:blue">_[devhost 고도화]_</span>

  [관련자료링크](http://sps.c-his.com/sites/2/TS/_layouts/15/start.aspx#/SitePages/Home.aspx?RootFolder=%2Fsites%2F2%2FTS%2FShared%20Documents%2F10000%2E%20%EA%B3%B5%EC%9C%A0%2F22%2E%20%28Front-end%29%20Main%20Host&FolderCTID=0x0120002EC637CA379B954CAB5EA63C92BC08FA&View=%7BB1F4166B-82DB-4BD6-842D-1B381D224C3A%7D)

  **<span class="colored2">수정</span>**

  **_1. data 정보(json data)를 화면 로드시에 전달할 수 있는 기능 추가_**

    - 메뉴 화면에서 오픈시에 전달할 파라미터 값 설정 기능 추가

  **_2. 최적화된 work list 화면 개발 방안 모색 (해당 업무팀과 협의)_**

    - 미진행

  **_3. 로드된 components를 트리구조로 제공하고 선택하여 화면 열수 있는 화면 제공_**

    - 메뉴 제공

  **_4. 열어있던 화면 새로고침 후 재 로드 기능 추가_**

    - 단순 새로고침의 경우 열렸던 화면 유지

  **_5. 메뉴가 아닌 열린 화면에서 HIS Message가 되도록 기능 추가_**

    - 화면 사이에 메시지 기능 추가

  **_6. 사용 가이드 업데이트_**

    - 반영된 내용 가이드

## v0.9.26 [2019.05.20]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-picker, c-fromtopicker_**

    - pickerType이 dataTime, time 일때 캘린터 선택 시 기존 시간에 대한 값을 유지하도록 변경

  **_2. c-checkbox, c-radiobutton_**

    - onClick 이벤트 발생 시 label 클릭에 의한 버블링으로 이벤트 순서가 뒤섞이는 현상 수정

  **_3. c-viewer-pdf_**

    - pdf뷰어를 기존 브라우저 기본 플러그인 방식에서 mozilla의 pdf.js로 변경

  **_4. c-viewer_**

    - 디자인 개선

  **_5. c-chart_**

    - time area 설정 시, time area 날짜 표시가 차트의 양 끝에 위치할 경우, 날짜가 잘려 보이지 않도록 위치 강제 조정

  **<span class="colored2">오류</span>**

  **_1. c-slider_**

    - range 슬라이더에서 lowerValue, highValue 값이 모두 max일 때 슬라이더를 이동할수 없는 오류 수정

  **_2. c-tooltip_**

    - tooltip이 화면을 벗어날때 위치조정 오류로 인해 툴팁이 깜빡거리는 오류 수정

  **_3. c-popup_**

    - useAreaTemplate가 true 일 때 상태관리가 안되는 오류 수정

  **_4. c-contextmenu_**

    - contextmenu 우클릭시 브라우져 기본 contextmenu가 표시되는 오류 수정

  **_5. c-image_**

    - component destroy 체크 로직 추가

  **_6. c-chart_**

    - x축이 날짜일 경우, x축 표시데이터가 너무 많으면 오류 내는 현상 수정
  **<span class="colored2">추가</span>**

  **_1. c-buttondividers_**

    - buttonStyle 속성 추가 - Button에 대한 HTML style 설정

  **_2. c-grid_**

    - disableEmptyMerging 컬럼 속성 추가
      : 컬럼 병합시 빈 데이터(blank, null, undefined)를 병합하지 않음

#### <span style="color:blue">_[View Component 정보 조회 방법 변경]_</span>
  **<span class="colored2">수정</span>**

  **_1. 로그인시에 전체 view component 정보를 조회하여 메모리에 올리는 방식으로 변경_**

    - view component 생성시에 해당 정보를 조회하는 방식에서 로그인시에 가져온 정보에서 조회하는 방식으로 변경

  **_2. view component 서비스 권한 정보를 로그인시에 가져오는 방법으로 변경_**

    - 화면오픈시에 서비스 권한 정보 조회용으로 사용

#### <span style="color:blue">_[MQ Monitoring]_</span>
  **<span class="colored2">수정</span>**

  **_1. ui 상의 시간_**

    - 내부적으로는 기존처럼 utc로 조회됨.
    - 화면상으로 보이는 시간은 로컬시간으로 확인할 수 있음.

  **_2. event의 정보 필터 조회_**

    - event의 대한 정보로 필더 조회 가능

  **_3. sender body 및 error정보_**

    - sender body 및 error정보 확인은 expender 창을 통해 확인 가능

  **_4. 0.9.27 업데이트 예정_**

    - sender body 수정 후 resend 하는 로직 추가
    - 추가 발견되는 버그 및 수정사항 반영 예정

## v0.9.25 [2019.05.07]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. messagebox_**

    - max-height값 증가 300px -> 600px

  **_2. c-control_**

    - 모든 Layer 팝업에서 타겟요소가 화면에서 사라지는 경우 동작 변경 - (기존) 0, 0 위치로 이동 -> (변경) 팝업을 숨김 처리

  **_3. c-chart_**

    - y축 레이블 사용자 직접 지정시, 소수점까지 표현

  **_4. c-chart-minmax_**

    - 데이터가 null일 경우, 툴팁 안뜨도록 조치

  **<span class="colored2">오류</span>**

  **_1. c-autocomplete_**

    - 엔터키입력 또는 포커스아웃이 일어날 때, display 요소가 중복되는 경우 첫번째 아이템만 선택되는 오류 수정

  **_2. c-accordion_**

    - accordion의 아이템소스에 변경이 일어날 때, 기존에 펼쳐져있던 아이템을 유지하는 동작에서 발생하는 오류 수정

  **_3. c-chart-io, c-timeline_**

    - 마우스 드래그로 차트 이동 기능 보완.
    - 차트 드래그와 x축 브러시 연동

  **_4. c-viewer_**

    - 이미지를 제대로 불러오지 못한 상태에서 컴포넌트 종료 시, 에러 발생하는 현상 수정

  **<span class="colored2">추가</span>**

  **_1. c-textrea_**

    - maxAutoHeight 속성 추가
      : 자동 높이 증감 설정시 최대 높이값
    - enableAutoCommit 속성 추가
      : 텍스트 입력과 동시에 Commit 여부

  **_2. c-expander_**

    - expanderSize 속성 추가
      : Expander의 헤더 사이즈를 설정합니다.

  **_3. c-picker, c-fromtopicker_**

    - todayButtonTitle 속성 추가
      : 오늘 날짜 설정 버튼의 툴팁 타이틀

  **_4. c-chart, c-chart-io, c-timeline_**

    - onSaveAsImage 이벤트 추가
      : 차트를 이미지로 변환할 때 발생하는 이벤트

#### <span style="color:blue">_[target object 소멸 여부 체크 로직 추가]_</span>
  **<span class="colored2">추가</span>**

  **_1. Front framework 내부에서 사용하는 서비스 및 helper에서 target object의 소멸 여부 체크 로직이 추가_**

    - view-component-helper
    - Patient event service
    - Menu event service

#### <span style="color:blue">_[MQ Monitoring]_</span>
  **<span class="colored2">수정</span>**

  **_1. resend_**

    - resend 보내고픈 도메인을 지정해서 보낼경우 autoComplete에 해당 도메인을 검색해서 resend 를 보내면 됨.
    - 모든 도메인에 resend를 하려고 할 경우 modal창에 resend 버튼만 클릭하면 됨.

  **_2. 0.9.26 반영 예정_**

   [이벤트 검색 필터 요구사항 참조 경로](http://sps.c-his.com/sites/2/_layouts/15/start.aspx#/Lists/QA/Flat1.aspx?RootFolder=%2Fsites%2F2%2FLists%2FQA%2FDash%20Board%20EventType%20Filter%20%EA%B8%B0%EB%8A%A5%20%EC%9A%94%EC%B2%AD%20%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4&FolderCTID=0x0120020072B9F702C5DB884E8F866CEFD4CFEC64)

    - UX및 CSS변경 반영
    - 이벤트에 대한 정보 노출
    - 실제조회는 UTC로 하되 UI상 보이는 시간정보는 로컬시간으로 보이도록 반영

#### <span style="color:blue">_[Upload-helper-service]_</span>
  **<span class="colored2">추가</span>**

  [백엔드 api 참조](https://development.c-his.com:16001/swagger/index.html)

  **_1. delete_**

  ![img](/release/images/deletefile.png)

  **<span class="colored2">수정</span>**

  **_1. filekey_**

    - fileId가 없어진것은 아님. guid정보로 파일을 조회하던 방식을 암호화한 정보인 `fileKey를 사용하여 조회하는 방식으로 변경`
    - 로드시에는 기존에 사용하시던 프로퍼티인 Id 값이 아닌 `fileKey` 값을 사용하시기 바랍니다.
    - 기존 업로드된 파일 조회시 위와 같은 에러가 날것입니다.
      : 벡엔드 서비스가 v3 -> v4로 대체되면서 파일의 호출 주소가 변경이 되었으므로 `기존파일을 사용하실 수 없습니다.`
      : `파일을 새로 업로드 후 사용바랍니다.`

```
//asis
getFileView(fileID, isCommon)
getFileDownload(fileID, isCommon)

//tobe
getFileView(fileKey, isCommon)
getFileDownload(fileKey, isCommon)
```

![img](/release/images/fileupload.png)

  **_2. isPdfConvertToPng_**

    - PDF 파일의 경우 png로 나뉘어 업로드 될 수 있는 구분자가 `추가됨`
    - pdf파일을 png로도 올리고 싶을경우 `isPdfCovertToPng값에 true 값을 추가`하면 됨.
    - 기존 로직대로 PDF를 그대로 PDF로만 올리고 싶은 경우는 `기존로직 유지`하거나 `isPdfCovertToPng값에 false 값`을 추가하면 됨.

```
//asis
putFileObject(viewID, files)
putCommonFileObject(viewID, files, folderName)

//tobe
putFileObject(viewID, files, isPdfCovertToPng)
putCommonFileObject(viewID, files, folderName, isPdfCovertToPng)
```

## v0.9.24 [2019.04.22]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-control_**

    - disabled, readOnly 스타일 변경 (개선 이후 문제가 된 스타일에 대해 추가적인 수정 작업)

  **_2. c-viewer-svg_**

    - Object Storage 변경에 따른, svg 로드/드래그/확대 기능 변경

  **_3. c-viewer_**

    - Object Storage 변경으로 인한, FileName 제대로 표시되지 않는 현상 수정

  **_4. c-image-editor_**

    - Object Storage 변경에 따른 이미지 불러오기/구현기능 변경

  **<span class="colored2">오류</span>**

  **_1. c-fromtopicker_**

    - 'year', 'yearMonth' 타입에서 더블클릭시 이벤트 오류 수정

  **_2. c-timepad_**

    - minute input 입력 시 오후에서 오전으로 전환되는 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-tree_**

    - iconClassMemberPath 속성 추가
      : 노드 아이콘의 클래스명 설정

  **_2. c-tabs_**

    - hideDefaultTooltip 속성 추가
      : 탭 헤더 텍스트가 잘릴때 기본으로 뜨는 툴팁 기능을 숨길지 여부를 설정합니다.

  **_3. c-tooltip_**

    - style 속성 추가
      : tooltip 박스내에 스타일을 적용

  **_4. excel client side import/export_**

    - feature-browser excel client side import & export 샘플 추가

  **_5. c-image-editor_**

    - 텍스트 추가/편집 기능
    - 라인 추가/편집 기능
    - polyline(다각선) 추가/편집 기능
    - polygon(다각형) 추가/편집 기능
    - 호 추가/편집 기능
    - 각도계 추가/편집 기능

#### <span style="color:blue">_[KMI 인증 서명]_</span>
  **<span class="colored2">추가</span>**

  **_1. KMI 인증서명 API사용 방법_**

{{<highlight javascript>}}
//Mixin 주입
import KmiSgin from 'co-security/mixins/kmi-sign-mixin';

export default CHIS.FR.Core.ComponentCore.extend( KmiSgin, {

…
});

//서명 데이터 저장
this.saveSignData(plaintext);
{{</highlight>}}

## v0.9.23 [2019.04.08]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-control_**

    - disabled, readOnly 스타일 개선

  **_2. c-image-editor_**

    - 도형/텍스트/이미지/드로잉 선택 시, 해당 개체의 색상/선/위치 정보 등을 툴바에 표시

  **_3. c-codevalue_**

    - code input박스에 포커스가 입력되지 않도록 수정

  **<span class="colored2">오류</span>**

  **_1. c-image-editor_**

    - coontextmenu 관련 버그 수정
    - 여러 개의 도형이나 이미지를 추가할 때, 재대로 추가 안되는 현상 수정

  **_2. c-slider_**

    - value, lowerValue, highValue 동기화가 정상적으로 이루어지지 않는 오류 수정

  **_3. c-combobox_**

    - 콤포박스 스타일이 깨지는 오류 수정

  **_4. c-modal_**

    - footer 영역을 사용하지 않을때 footer영역이 표시되는 현상 수정

  **<span class="colored2">추가</span>**

  **_1. c-image-editor_**

    - 텍스트 기능 추가

  **_2. c-fileupload_**

    - enableExcelExport, worksheetsJson 속성 추가

  **_3. c-switch_**

    - swichOnText, swichOffText 속성 추가

#### <span style="color:blue">_[Job Scheduler]_</span>
  **<span class="colored2">수정</span>**

  **_1. Copy Monitoring History_**

    - context menu 에 copy기능 추가

  - copy 기능 캡쳐
  ![img](/release/images/jobscheduler1.png)

  **_2. Display 로컬시간_**

    - UI상에 보여지는 datetime은 로컬시간으로 보이도록 함

  - 로컬시간 표기 예1
  ![img](/release/images/jobscheduler2.png)

  - 로컬시간 표기 예2
  ![img](/release/images/jobscheduler3.png)


  **_3. Monitoring History status tooltip_**

    - 상태별 의미성명하는 툴팁 추가

  - 툴팁 표기 예
  ![img](/release/images/jobscheduler4.png)

#### <span style="color:blue">_[file Upload / download flow]_</span>
  **<span class="colored2">수정</span>**

  **_1. Up/Download flow 변경_**

    - 아래 그림과 같이 Upload 와 Download의 `flow가 변경`되었음
    - asis
      : `클라이언트 -> object storage`로 upload/download가 진행
    - tobe
      : `WAS -> object storage` 로 upload/download가 진행
    - `소스 수정 필요 없음.` 기존소스의 input params 및 output은 변경된 것 없습니다.
    - 파일이 올라간 object Storage의 버킷[경로가 다름]이 다르므로 `기존 파일은 찾지 못함`

  - Upload
  ![img](/release/images/fileupdownload1.png)

  - Download
  ![img](/release/images/fileupdownload2.png)

## v0.9.22 [2019.03.25]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-grid_**

    - firefox, edge 등의 브라우저에서 스크롤 스타일이 깨지는 현상 수정
    - merge grid 에서의 오퍼레이션 개선

  **_2. c-combobox_**

    - firefox 에서 event 개체없음 오류가 발생하는 현상 수정

  **_3. c-input, c-materialinput_**

    - current locale값이 ko-kr일때 textMode속성 값이 korean 또는 alphabet 이면 한영 자동전환

  **_4. c-viewer_**

    - 뷰어창 개수를 4개에서 1개로 변경했을때 썸네일에 이미지가 여러개 선택된 내역이 남아 있지 않도록 수정
    - 뷰어창 개수가 4개일 때 중복 선택할 경우, 이미지가 중복해서 로드되지 않고, 선택이 취소되도록 변경

  **_5. c-timeline_**

    - 툴팁이 브라우저 가장자리에서 열릴 경우, 화면에서 잘리는 현상이 없도록 위치 자동 조정
    - 타임라인 타이틀이 길 경우 잘려보이지 않도록 자동 개행

  **<span class="colored2">오류</span>**

  **_1. c-tabs_**

    - canUseHeaderTempate 속성 사용 시 탭 타이틀이 표시되지 않는 오류 수정

  **_2. c-chart_**

    - Y축의 기준데이터 벗어날을때 깨지는 현상 수정.

  **<span class="colored2">추가</span>**

  **_1. c-grid_**

    - "enableGotFocusAutoSelect", "textMode" 컬럼 속성 추가

  **_2. c-tabs_**

    - "enableKeepSelectedTabName" 속성 추가

  **_3. c-sign_**

    - "isDrawn" 속성 추가

  **_4. c-chart_**

    - "legendPosition" 속성 추가(레이블 위치 설정 기능)
    - "axisViewMode" 속성 추가(x축 설정 옵션)
    - axisViewMode.isSync 옵션 추가(true로 설정 시, x축에 스크롤 생성)
    - customXAxisValue 프라퍼티 추가(x축에 사용할 label 값을 개발자가 직접 지정)

  **_5. c-chart-minmax_**

    - 심볼 자동 상하반전 기능 추가
    - material-icons-keyboard_arrow_down​ 아이콘 추가

  **_6. c-timeline_**

    - "data.tooltipTemplate" 속성 추가(각 데이터별 툴팁 템플릿 별도 설정 기능)

  **_7. c-viewer_**

    - "selectedItem" 속성 추가(뷰어 로드와 동시에 선택되어 질 아이템 설정)
    - "showImageSaveButton" 속성 추가(이미지 뷰어의 저장 버튼을 보일 지 말지를 설정)

  **_8. c-viewer-image_**

    - "showImageSaveButton" 속성 추가(이미지 뷰어의 저장 버튼을 보일 지 말지를 설정)

  **_9. c-image-viewer_**

    - undo/redo 기능 추가
    - 개체 위치 및 크기 설정 기능 추가
    - 키보드 상/하/좌/우 기능 추가
    - contextmenu 추가
    - 개체 앞으로 보내기/뒤로 보내기 기능

  **_10. c-image_**

    - 컨트롤러 신규 추가

#### <span style="color:blue">_[Mixin]_</span>
**<span class="colored2">수정</span>**

  **_1. c-reportview-mixin_**

    - 다중 서식으로 프린트 요청이 가능하도록 로직 변경

**<span class="colored2">추가</span>**

  **_1. reportview-mixin_**

    - "setContents" 함수 추가

  **_2. webrportview-mixin_**

    - <prnon> 사용에 있어서 스타일 클래스 추가

  **_3. econsent-mixin_**

    - "getResponse" Hook 추가

  **_4. cdc-mixin_**

    - "예방접종 등록 페이지 호출을 위한 mixin추가
    - "Import from 'co-interface/mixins/cdc-mixin'

**<span class="colored2">삭제</span>**

  **_1. reportview-mixin_**

    - "setFieldParameters" 함수 삭제
    - "setFiles" 함수 삭제
    - "setItemsSource" 함수 삭제

#### <span style="color:blue">_[MLReport 프린트 기능 속도 개선]_</span>
  **_일부 영역만 Document Parameter로 넘어감_**

#### <span style="color:blue">_[환자선택 UI 프로세스 고도화 반영]_</span>
  [관련문서 링크](http://sps.c-his.com/sites/2/TS/_layouts/15/start.aspx#/SitePages/Home.aspx?RootFolder=%2Fsites%2F2%2FTS%2FShared%20Documents%2F10000%2E%20%EA%B3%B5%EC%9C%A0%2F22%2E%20%28Front-end%29%20Main%20Host&FolderCTID=0x0120002EC637CA379B954CAB5EA63C92BC08FA&View=%7BB1F4166B-82DB-4BD6-842D-1B381D224C3A%7D)

## v0.9.21 [2019.03.11]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-combobox_**

    - 높이값이 작을때 디자인이 깨지는 현상 수정

  **_2. c-popup, c-popover_**

    - 위치 계산 방식 개선

  **_3. c-viewer_**

    - 이미지 및 svg, pdf 불러올 시 id 값만 parameter로 제공하도록 변경

  **_4. c-timeline_**

    - date 타입 x축의 경우, 확대/축소 시 date 간격이 너무 촘촘하게 들러붙지 않도록 자동 간격 조절 기능 추가

  **_5. c-chart_**

    - imeAxis가 아닌 경우에도, 데이터가 많을 경우 x축을 기울이지 않고, x축 label의 개수를 조절해 서로 overlap 되지 않도록 조정

  **<span class="colored2">오류</span>**

  **_1. c-tabs_**

    - 탭순서 변경시 발생하는 오류 수정
    - "onTabSorted" 이벤트 API 수정

  **_2. c-input_**

    - type currency 에서 0보다 작은 값을 넣었을때 발생하는 입력 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-picker, c-fromtopicker_**

    - "inputReadOnly" 속성 추가

  **_2. c-tree_**

    - "showNodeIcon" 속성 추가

  **_3. c-reportview_**

    - c-reportview 추가
    - exeDirectPrint 진행 전에 Client에 파일이 설치되었는지 확인하는 내용 추가

  **_4. c-image-editor(이미지 편집기)_**

    - c-image-editor 추가

  **_5. c-timeline-symbol 추가_**

    - c-timeline-symbol(타임라인의 아이콘 설정을 도와주는 콘트롤) 추가

#### <span style="color:blue">_[econsent-mixin]_</span>
  **<span class="colored2">추가</span>**

- **Application > UI Feature Browser(Interface) > econsent 참고**

  **_1. addForm_**

    - 전자동의서 추가를 요청하는 메서드
    - METHOD : addForm
      @parameter : {
        'employeeDisplayIdId': '10009',
        'patientId': '2fed7051-3662-4733-8cf1-ed4c88c9ea49',
        'encounterId': '18486849-d771-429f-b6a0-b753ed538894',
        'encounterClassCode': 'I',
        'docSheetId': '2000326'
        }

  **_2. updateForm_**

    - 전자동의서 작성을 요청하는 메서드
    - METHOD : updateForm
      @parameter : {
        'employeeDisplayIdId': '10009',
        'patientId': '2fed7051-3662-4733-8cf1-ed4c88c9ea49',
        'encounterId': '18486849-d771-429f-b6a0-b753ed538894',
        'encounterClassCode': 'I',
        'docSheetId': '2000326'
        }

#### <span style="color:blue">_[webreportview-mixin]_</span>
  **<span class="colored2">추가</span>**

- **Application > UI Feature Browser(Interface) > webreportview 참고**

  **_viewWebReport_**
    - HTML로 프린트 하기를 원하는 영역을 출력하는 메서드

#### <span style="color:blue">_[Active menu 이벤트]_</span>
  **<span class="colored2">추가</span>**

  **_1. 현재 화면이 activated 되면 발생하는 이벤트 Hook_**

{{<highlight javascript>}}
export default CHIS.FR.Core.ComponentBase
//에서 상속받은 component에 해당 메뉴가 active 되면 발생하는 메소드
//해당 이벤트는 하위 컴포넌트에서 발생합니다.

onMenuActivated(){
this._super(...arguments);
alert('active');
},
//메뉴 component 여부를 확인 하는 방법은
if (this.get('hasContentSource') === true) { .... }
//조건을 주시면 됩니다.
{{</highlight>}}

  **_2. view Id 값으로 active 된 메뉴인지 확인 할 수 있는 메서드_**
{{<highlight javascript>}}
this.get('co_MenuManagerService').checkActiveMenu(viewId);
{{</highlight>}}

#### <span style="color:blue">_[Session Timeout 알림창]_</span>
  **<span class="colored2">추가</span>**

 - host/config/environment.js 파일에 설정값 있습니다.

![img](/release/images/logonsession.png)

 ```
  ENV.APP.sessionInactivityTimeout = 1000 * 60 * 10,
  //switch off value. ==> null, minimun value : 1000 * 60 * 10 (10 min)
 ```

#### <span style="color:blue">_[Audit 버튼]_</span>
  **<span class="colored2">추가</span>**

  - host/config/environment.js 파일에 설정값 있습니다.

 ```
   //개발기의 경우
   if(environment === 'development') {
     ENV.securityMode = true
   }
 ```

  - Audit 버턴은 viewComponent 정보에서 감사 여부 Yes 선택 되어야 보입니다.
  - 모드가 false 인 경우 권한 확인을 하지 않습니다.
  - 모드가 true이면 해당 화면에 audit 권한이 설정 되어 있어야 합니다.
    - **권한 서비스 코드 명명 rule** : _도메인명/register-audit_
    - 권한이 없으면 audit 버튼은 안보이게 됩니다.

    ![img](/release/images/audit2.png)
  - 권한 버턴이 보이면 해당 화면에는 onAudit() 이벤트 hook 을 오버라이드 하여 업무 로직을 구현합니다.
    ![img](/release/images/audit3.png)

#### <span style="color:blue">_[Upload-helper-service]_</span>
  **<span class="colored2">Upload</span>**

  **_1. Upload Result Data_**
  ```
  //thenable value for Upload (commonFiles and unCommonFiles)

  결과 data: 업로드한 파일정보 object 배열
    ex)
    [
      {uploaded_file1}, {uploaded_file2}...
    ]
  ```

  **_2. Common File Upload_**
  {{<highlight javascript>}}
  // Common File: Tenant에 무관한 File
  // cf) 일반적인 파일의 upload는 stroagePath가 연월/도메인/fileID
  // Parameter Infomation
  @viewID: 파일의 도메인확인을 위한 파라미터
  @fileList: upload 할 파일리스트
  @filefoldering: storagePath가 도메인/filefoldering/fileID 가 된다.
  this.get('fr_UploadHelperService').putCommonFileObject(viewID, fileList , filefoldering);

  var rst = this.get('fr_UploadHelperService').putCommonFileObject(this.get('viewId'), this.get('multipleCommonFiles') , 'test');
  rst.then((data)=>{
    console.log('upladed S');
    console.log(data);
    console.log('upladed E');
  });
  {{</highlight>}}

   **_3. File Upload_**
  {{<highlight javascript>}}
  //cf) 일반적인 파일의 upload는 stroagePath가 연월/도메인/fileID
  //Parameter Infomation
  @viewID: 파일의 도메인확인을 위한 파라미터
  @fileList: upload 할 파일리스트
  this.get('fr_UploadHelperService').putFileObject(viewID, fileList);

  var rst = this.get('fr_UploadHelperService').putFileObject(this.get('viewId'), this.get('multipleFiles'));
  rst.then((data)=>{
    console.log('upladed S');
    console.log(data);
    console.log('upladed E');
  });
  {{</highlight>}}

  **<span class="colored2">Download</span>**

  **_1. Download Result Data_**
  ```
  //1. download는 thenable value 없음
  //2. thenable value for Image Load (commonFiles and unCommonFiles)

  결과 data: 다운로드된 파일정보 object 배열
  ex)
  data[0]: 다운받은 이미지 파일의 정보 object
  data[1]: 다운받은 이미지의 Blob url or 이미지로드하는 backend api url for recordcomponent
  ```

  **_2. Common File Download_**
  {{<highlight javascript>}}
  // Common File의 경우 저장되는 버킷이 다르기 때문에 CommonFile 인지 여부를 구분해야합니다.
  //Common File의 경우
  //Parameter Infomation
  @fileID: 파일 고유 ID
  @isCommonFile: boolean [true: commonFile]

  //파일 다운로드 : thenable value 없음
  this.get('fr_UploadHelperService').getFileDownload(fileID, isCommonFile);

  //이미지 로드
  var caller = this;
  var rst = this.get('fr_UploadHelperService').getFileView(fileID, isCommonFile);
  rst.then((data)=>{
    var el = caller.$().find('.testImg')[0];
    el.src = data[1];
  });
  {{</highlight>}}

   **_3. File Download_**
  {{<highlight javascript>}}
  //Common File이 아닌 경우
  //Parameter Infomation
  @fileID: 파일 고유 ID

  //파일 다운로드 : thenable value 없음
  this.get('fr_UploadHelperService').getFileDownload(fileID);

  //이미지 로드
  var caller = this;
  var rst = this.get('fr_UploadHelperService').getFileView(fileID);
  rst.then((data)=>{
    var el = caller.$().find('.testImg')[0];
    el.src = data[1];
  });
  {{</highlight>}}

## v0.9.20 [2019.02.25]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-timeline_**

    - 아이콘 컬러 사용자가 지정 가능토록 수정
    - 그룹 내 series data가 없을 경우, y축에서 그룹명 제거

  **_2. c-viewer_**

    - Object Storage 환경에 맞게 이미지/svg/pdf 데이터 불러오기 방식 변경

  **_3. c-accordion, c-expander_**

    - 내부 스크롤 초기화 소스 추가

  **_4. c-expander_**

    - style 속성에 대한 컨트롤 적용

  **_5. c-contextmenu_**

    - 메뉴의 하위 메뉴 생성이 가능하도록 수정

  **<span class="colored2">오류</span>**

  **_1. c-calendar, c-combobox, c-autocomplete_**

    - scrollable 영역에서 아이템패널이 숨는 문제 수정

  **<span class="colored2">추가</span>**

  **_1. c-grid_**

    - "showTodayNavigation" 속성 추가

  **_2. c-sign_**

    - c-sign 추가

#### <span style="color:blue">_[Upload-helper-service]_</span>
  **<span class="colored2">수정</span>**

  **_1. putFileObject_**

    - object storage로 파일을 업로드 하는 메서드

    - 업로드 경로는 : object storage host/bucket/yyyymm/도메인/fileId
      : ex) https://kr.object.ncloudstorage.com/chis-dev-storage-10000/201902/testboard/001d087f-3e1f-45f8-910d-5d9641e9736e 가 됩니다.

    - upload 요청하는 주체의 도메인을 파악하기 위해 viewId 와 upload 대상인 FileList 만 파라미터로 넘기시면 됩니다.
      @multipleFiles : 선택한 파일들의 FileList를 의미합니다.

{{<highlight handlebars>}}
//아래 template.hbs는 구현을 위한것이 아니라 this.get('multipleFiles) 이 무엇인지 가리키려고 추가한 부분입니다.
//c-fileupload 활용법은 피처브라우저를 참고 바랍니다.


{{c-fileupload
  style='width:400px;'
  multiple=true
  files=multipleFiles
}}
{{</highlight>}}

{{<highlight javascript>}}
//파일전송용 버튼을 구현한 action 쪽 바디에 구현하시면 됩니다.
var result = this.get('fr_UploadHelperService').putFileObject(this.get('viewId'), this.get('multipleFiles'))
result.then((data) => {
 //업로드한 파일의 file ID를 확인할 수 있습니다.
 console.log(data);
});
{{</highlight>}}

  **_2. putFileObject_**

    - object storage에서 파일을 로컬에 다운로드 하는 메서드

{{<highlight javascript>}}
var result = this.get('fr_UploadHelperService').getFileDownload(fileId)
{{</highlight>}}

  **_3. getFileView_**

    - object storage의 이미지 파일(jpg,svg,pdf 등)의 url을 리턴받는 메서드

{{<highlight javascript>}}
var result = this.get('fr_UploadHelperService').getFileView(fileId)
result.then((data) => {
  //data : 이미지 파일의 url이라고 생각하시면 됩니다.
  //img tag 등의 src 프로퍼티에 바인딩을 하시면 화면에 이미지가 로드됩니다.
});
{{</highlight>}}

  **_4. 기존 upload 서비스 관련_**

    - uploadFiles 로직은 0.9.21 업데이트 때 없애도록 하겠습니다. 현재는 아직 유지되고 있습니다.

    - emrFile, userSignImage 관련한 폴더링은 따로 예정이 없습니다.

    - 현재는 chis-dev-storage-10000 이라는 버킷아래 년월/도메인/ 의 경로만이 존재하고 파일들은 모두 해당경로상의 플랫한 구조로 저장됩니다.

    - 수정사항이 생기면 관련 설명을 담은 파일로 쉐어포인트의 공지함은 물론 및 도움말 게시판에 따로 게시하도록 하겠습니다.

#### <span style="color:blue">_[개인화 설정 정보 업데이트]_</span>

  **<span class="colored2">수정</span>**

  **_1. 개인화 설정 정보 업데이트 이벤트_**

    - 해당 UI에서 수신 등록하고 content 새로 셋팅 해주면 됩니다

{{<highlight javascript>}}
this.get('contentMessageService').sendMessage('__co_personalizationService_list_setting_update', {
  patientList: this.get('patientListSettingInfo'),
  workList: this.get('workListSettingInfo'),
  miniList: this.get('miniListSettingInfo')
});
{{</highlight>}}

  **_2. 로그인 정책 적용_**

    - 패스워드 실패에 대한 한계치 적용
    - 허용 아이피에 대한 적용 - 이메일 계정
    - 허용 시간에 대한 정책 적용 - 병원 사용자 계정
    - 패스워드 사용 기간에 대한 설정

## v0.9.19-A [2019.02.19]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-tooltip_**

    - "text" 속성 바인딩

  **_2. c-tree_**

    - 포커스 스타일 적용

  **_3. c-expander_**

    - 렌더링 방식 개선

  **_4. c-timeline_**

    - fromto 차트 중복 표시 아이콘 제거. 색상 및 opacity로 구분

  **<span class="colored2">오류</span>**

  **_1. c-chart_**

    - 포인트 차트에서 infinite render 발생하는 현상 수정
    - line 시리즈 n개 사용시 커스텀 y축을 지정하지 않아도 y축이 변경되는 현상 수정

  **_2. c-timeline_**

    - 범례 항목 리스트와 y축의 레이블 순서가 서로 반대 반향으로 나오는 현상 수정

  **<span class="colored2">추가</span>**

  **_1. c-checkbox_**

    - "required", "groupName" 속성 추가

  **_2. c-radiobutton_**

    - "required" 속성 추가

  **_3. c-calendar_**

    - 속성 및 이벤트 추가 (API 참고)

  **_4. c-popup_**

    - "useAreaTemplate" 속성 추가

  **_5. c-chart_**

    - y축 텍스트 및 라인 커스텀 색상 지정 기능 추가

  **_6. c-timeline_**

    - fromto 차트에 텍스트 및 아이콘 추가 기능
    - fromto 차트에 데이터별로 변경된 색상 입력 기능 추가
    - y축 레이블을 그룹으로만 표시하는 기능 추가

## v0.9.19 [2019.02.11]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-popup_**

    - 하단 스크롤 영역 내에서 popup이 콤포넌트 아래로 숨는 현상 수정
    - 팝업 내부 콘텐츠의 상태관리용 stateId가 적용되지 않던 현상 수정

  **_2. c-fromtopicker_**

    - readonly 상태에서 캘린더 버튼 숨김처리

  **_3. c-chart_**

    - 차트 x축 텍스트가 지나치게 긴 경우, x축 텍스트를 45도 기울여 화면에 표시

  **_4. c-viewer_**

    - 통합뷰어에 svg 뷰어 추가
    - 이미지 뷰어 상하/좌우반전 기능 추가
    - 통합뷰어 화면 분할 기능 추가
    - 섬네일 클릭 시, 화면에 선택 여부 표시

  **<span class="colored2">오류</span>**

  **_1. c-tooltip_**

    - tooltip을 포함한 컨트롤이 disabled 될 때 tooltip이 사라지지 않는 오류 수정

  **_2. c-picker_**

    - onDateBlur 이벤트가 발생하지 않는 오류 수정

  **_3. c-chart_**

    - 사용자 지정 event 세로바 작동 안하는 현상 수정

  **<span class="colored2">추가</span>**

  **_1. c-autocomplete_**

    - enableGotFocusAutoSearch 속성 추가
      : 포커스 이벤트 발생 시 현재 필터값을 만족하는 아이템 자동탐색 여부

  **_2. c-viewer-svg_**

    - c-viewer-svg 추가

## v0.9.18 [2019.01.21]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-calendar, c-picker, c-fromtopicker_**

    - calendar UX 스타일 개선

  **_2. c-radiobutton, c-radiobuttonlist_**

    - enableUncheck 속성 추가
      : 선택된 상태에서 누르면 선택을 해제하는 기능을 활성화

  **_3. c-grid_**

    - 멀티헤더 기능 사용 시 컬럼 가상화를 기능 보완

  **_4. c-modal_**

    - enableKeyDownClose 속성 추가
      : ESC 키 다운을 이용하여 모달이 닫힐 지 여부를 설정합니다.

  **_5. c-textarea_**

    - clearPadding 속성 추가
      : textarea영역의 기본 패딩 제거 여부

  **_6. c-codevalue_**

    - UX 스타일 개선

  **_7. c-picker, c-fromtopicker_**

    - showTodayButton 속성 추가
      : 오늘 날짜를 설정할 수 있는 버튼을 화면할지 표시여부 설정합니다.

  **_8. c-autocomplete, c-buttondividers, c-codevalue, c-combobox, c-fromtopicker, c-grid, c-modal, c-picker, c-popover, c-popup, c-scheduler_**

    - placeInArea 속성 추가
      : layer 콘텐츠의 확장 범위를 제한할지 여부 설정
    - useParentWormhole 속성 추가
      : layer 콘텐츠를 바로 위 부모 콘텐츠 영역에서 열지 여부를 설정

  **_9. c-chart_**

    - offset 옵션 추가
      : offset으로 차트의 내부 여백 설정
    - scalePoint 옵션 추가
      : 차트 x축 형식 지정. 기존에는 x축이 Number나 Date 객체만 가능했지만, scalePoint을 통해 string도 x축으로 설정 가능.
    - true일 경우, data의 x축 값이 모두 표시. 차트의 x축이 Number나 Date 객체가 아닌 string 타입이라면 scalePoint를 true로 설정
    - showLegend 옵션 추가 - Legend가 필요없을 경우, false로 설정해서 Legend 영역 화면에서 감춤
    - y축 컬러값 사용자가 직접 설정할 수 있는 기능 추가

  **<span class="colored2">오류</span>**

  **_1. c-pagination_**

    - 첫페이지로 돌아가는 버튼을 누르면 발생하는 오류 수정

  **_2. c-timepad_**

    - input박스에 직접 입력시 발생하는 오류 수정

  **_3. c-timeline_**

    - y축이 제대로 표시되지 않는 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-viewer_**

    - c-viewer 추가

#### <span style="color:blue">_[Login 계정]_</span>

  **_ID: P10001@ezcaretech.com_**
  **_PW: 기존과 동일_**

#### <span style="color:blue">_[Ember-Keyboard]_</span>

  **_1. 전역으로 등록시 에러발생_**
  **_2, 사용 원하는 해당 도메인 module에 개별적으로 추가 사용하면 됨_**

```
ember insall ember-keyboard
```

#### <span style="color:blue">_[Van Interface]_</span>

**<span class="colored2">수정</span>**

  **_Van사에서 전달하는 Return값을 Json으로 변환해서 전달하도록 기능을 수정하였습니다_**

**<span class="colored2">오류</span>**

  **_취소시 ApprovalDate가 8자리 이상일때 정상취소 안되는 오류 수정_**

#### <span style="color:blue">_[Job Secheduler]_</span>

**<span class="colored2">신규</span>**

  **_Management_**

  - Jobscheduler의 master , details 별 리스트 조회
  - Jobscheduler의 master , details 별 생성, 수정, 삭제가능
  - **Enable** : **Master, Details**의 **enable이 모두 true** 인 경우에만 scheduler 수행예약이 된다.
![img](/release/images/enable.png)
  - **Cron Generator**
    - cron 생성후 Analysis 버튼을 통해 예정일자를 확인후 선택하면 Cron input에 바인딩됨.
    - Manually 크론을 만든후 선택할 수도 있음.
![img](/release/images/generator.png?width=600px)
  - **Auto Creation**
    - 체크된 체로 create 버튼을 클릭하면 **마스터 jobscheduler 생성**과 함께 **hospital별 scheduler 자동생성**됨. <i class="fas fa-exclamation-triangle chis-exclamation"></i><span style="color: red">단, hospital 별 timeZone이 등록이 되지 않은 경우에는 사용할 수 없다. 현재 관련 부분은 담당자도 정해지지 않았고, 계획도 없음</span>
    - 자동생성으로 만들어진 **hospital별 스케줄러의 cron이 null**이면 **master의 cron**을 바라봄.
![img](/release/images/create.png?width=600px)
  - **Trigger Now**
    - Details 우클릭시 보이는 Trigger Now 클릭시에 Enable 여부, cron값의 관계없이 **즉시 1회 실행**이 된다.
![img](/release/images/trigger.png?width=600px)

  **_Monitoring_**

  - Job Scheduler의 **진행상태**와 **로그 정보** 확인가능
  - Copy ContextID
    - 조회조건중 Context 에 붙여넣을 ID copy 버튼
![img](/release/images/contextId.png?width=600px)

## v0.9.18-A
---
#### <span style="color:blue">_[hotfix]_</span>

  - 상단 탭선택시 해당화면으로 이동안되는 현상.(수정완료)
  - 에러메세지 모달화면 떴을 때 infinite rendering 오류 확인 및 수정(수정완료)
  - c-codevalue 컨트롤의 onChanged 이벤트에 item속성 추가 전달 (수정완료)
  - froala editor 관련 z-index 보정 (z-index:20000권장) (수정완료)

## v0.9.18-B
---
#### <span style="color:blue">_[hotfix]_</span>

**<span class="colored2">수정</span>**

  **1. _c-viewer_**

    - 파일 타입 기준을 Mime 타입으로 변경
    - data에 fileName항목 추가완료
    - 섬네일 슬라이더 위치 옵션(left/right/top/bottom) 추가완료

  **2. _c-codevalue_**

    - "onCodeValueChanged" 이벤트 추가

  **3. _c-popup, c-popover, c-modal, c-grid, c-tabs, c-scheduler_**

    - "placeInArea" 속성의 기본값을 true로 변경

  **4. _c-picker, c-fromtopicker_**

    - 컨트롤에 input박스내의 텍스트 정렬을 위한 "textAlign" 속성 추가

**<span class="colored2">오류</span>**

  **1. _c-chart_**

    - chart의 name이 빈 문자열이고, no가 1일 때, y축의 1값이 사라지는 오류 (수정완료)

  **2. _c-grid_**

    - c-grid 멀티헤더 고정시 중복컬럼 발생 문제 (수정완료)
    - c-grid 메뉴템플릿이 표시되지 않던 문제 (수정완료)
    - c-grid 그리드를 포커스히여 스크롤이 이동될 때 오류가 발생하는 문제 (수정완료)

  **3. _c-popup_**

    - c-popup이 열리지 않은 상태에서 최초 onClosed 이벤트가 발생하는 문제 (수정완료)
    - c-popup이 중복으로 열려있을때 부모창이 닫히면서 발생하는 오류(수정완료)

## v0.9.18-C
---
#### <span style="color:blue">_[hotfix]_</span>

  **<span class="colored2">수정</span>**

  **1. _c-chart_**

    - 범례 표시 여부를 동적으로 할당할 수 있도록 변경

  **2. _c-viewer_**

    - 이미지 뷰어 상하/좌우 반전 기능 추가
    - PDF 뷰어 추가

  **<span class="colored2">오류</span>**

  **1. _개인화 설정 부분_**

    - 즐겨찾기 bug fix
    - 환자선택 후 로드메뉴설정 bug fix

  **2. _c-chart_**

    - x축이 string이고, 데이터가 2개 미만일 경우, 차트가 범위를 벗어나는 현상 수정

## v0.9.17 [2019.01.07]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">오류</span>**

  **_1. c-chart_**

    - series를 빈 배열로 초기화 할 때 infinite Render 발생 현상 수정

  **_2. c-control_**

    - 'removeElement' 관련 오류 수정

  **_3. c-scheduler_**

    - onSelectionChanged 이벤트에서 selectedDate가 정상적으로 전달되지 않는 오류 수정

#### <span style="color:blue">_[Van Interface Mixin]_</span>
  **<span class="colored2">요청 전문 작성 방법</span>**
  ![img](/release/images/van3.jpg?width=800px)
  **<span class="colored2">호출방법</span>**
  ![img](/release/images/van2.jpg?width=800px)
  **<span class="colored2">응답 전문 확인 방법</span>**
  ![img](/release/images/van1.jpg?width=800px)

#### <span style="color:blue">_[환자 속성값 변경 이벤트]_</span>
  **<span class="colored2">changePatientContents</span>**
{{<highlight javascript>}}
// 환자 속성값 변경이 발생할 경우 **changePatientContents** API를 호출하면
this.get('co_PatientManagerService').changePatientContents(patient);
// CHIS.FR.Core.ComponentBase를 상속받은 Component에서 아래의 이벤트 핸들러가 호출된다.
onPatientContentsChanged(patient);
{{</highlight>}}

## v0.9.16 [2018.12.24]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-timeline_**

    -  외곽선만 표시되는 fromto 그래프 형태 추가

  **_2. c-chart-io_**

    -  io 차트에 bar, line 차트 추가 가능하도록 변경

  **_3. c-popup_**

    -  onOpend 이벤트의 발생시기를 popup화면의 렌더링이 완료되어 사용자에게 표시되는 시점에 발생하도록 변경

  **_4. c-popover_**

    -  onShown 이벤트의 발생시기를 popover화면의 렌더링이 완료되어 사용자에게 표시되는 시점에 발생하도록 변경

  **<span class="colored2">오류</span>**

  **_1. c-chart_**

    - y축을 공유하는 다량의 차트가 있을 경우, 시리즈에 마우스 오버하면 표시 값과 y축값의 편차가 커지는 현상 수정
    - 커스텀 y축을 사용하지 않을 경우, y축 1개로 단일화

  **_2. c-timeline_**

    -  종료날짜를 9999-12-31로 주었을 때 타임라인 차트가 영역을 벗어나는 현상 수정

#### <span style="color:blue">_[Menu]_</span>
  **<span class="colored2">수정</span>**

  **_1. Menu open API_**

    - menuId 값에 대한 로직은 삭제예정
    - `asis : menuId` -> `tobe : displayCode [ viewID와 같은 표현 ]` 을 넘길시에 해당 view component object가 메뉴에 load되도록 변경됨.
{{<highlight javascript>}}
this.get('co_MenuManagerService').openMenu(viewId, parameters);
this.get('co_MenuManagerService').openPopupMenu(viewId, parameters);
this.get('co_MenuManagerService').openFixedMenu(viewId, parameters);
this.get('co_MenuManagerService').openMenuNextTo(viewId, parameters);
{{</highlight>}}

  **<span class="colored2">추가</span>**

  **_1. co-viewcomponent-helper_**

    - view component의 유니크 값 displayCode 값을 기준으로 동적으로 component view object를 load 해주는 helper가 추가 됨.

  **_2. co-viewcomponent-helper 사용법_**
{{<highlight handlebars>}}

{{component
  (co-viewcomponent-helper 'endcoding-decoding')
  property01='4444'
}}

{{component
  (co-viewcomponent-helper 'view component displayCode')
  변수명1=변수값1
  변수명2=변수값2
}}

{{</highlight>}}

## v0.9.15 [2018.12.10]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-popup, c-popover_**

    - 오픈시 크기변경으로 인한 위치 이동 현상 개선

  **_2. c-tree_**

    - onItemsSourceChanged 이벤트 추가
      : itemsSource 가 변경 되었을때 발생하는 이벤트

  **_3. c-grid_**

    - onScroll 이벤트 수정 - 기존 left, top 정보와 함께 maxLeft, maxTop 정보를 추가 제공
    - 편집모드 전환 시 콤보박스에 포커스가 가는 경우에는 자동으로 아이템을 오픈하도록 수정

  **_4. c-timeline_**

    - onDataDoubleClick 이벤트 추가
      : 타임라인의 데이터 더블클릭시 발생하는 이벤트
    - width 100% 지원
    - 타임라인 아이콘 변경
    - 스크롤 변경(css 스크롤 --> jquery scrollbar로 교체)
    - 마우스 우측 드래그 확대 기능 추가

  **_5. c-chart_**

    - onDataDoubleClick 이벤트 추가
      : 타임라인의 데이터 더블클릭시 발생하는 이벤트
    - x축이 시간일 때, 배경 세로선 지정하는 기능 추가
    - tooltipProperty 와 tooltipTemplate 기능 분리
    - 차트가 정상 렌더링 된 후, 빈 series를 담은 JSON을 던지면, 차트 내용 사라지도록 수정

  **<span class="colored2">오류</span>**

  **_1. c-picker, c-fromtopicker_**

    - required가 정상적으로 동작하지 않는 현상 수정

  **_2. c-chart-io_**

    - 스크롤 줌인 아웃후 x축 일부 사라지는 현상 수정

  **_3. c-chart_**

    - y축 데이터를 변경하고 chart 에 던지면 틀린 정보가 표시되는 현상 수정
    - timepointer가 데이터 밖에서 렌더링되는 현상 수정

  **<span class="colored2">추가</span>**

  **_1. c-codevalue_**

    - Code Value control 추가

  **_2. c-editor_**

    - Editor control 추가 (Froala Editor 기반)

  **_3. fr-report_**

    - 대용량 데이터 처리 기능 추가
    - METHOD
      @setJsonData 추가 (Parameter : JsonType)
      @viewBigReport 추가
      @printBigReport 추가

## v0.9.14-C [2018.11.22]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-timeline_**

    - 그룹 차트 기능 추가
    - timeline legend에 스크롤 추가

  **_2. c-grid_**

    - 그리드 세로라인 설정 시 마지막 칼럼도 표시
    - 그리드 number 타입의 컬럼 속성에 'allowDecimal' 추가

  **_3. c-checkbox, c-checkboxlist, c-radiobutton, c-radiobuttonlist_**

    - 클릭이벤트 발생 범위 수정 (input 영역에 영향을 주는 경우만 발생)

  **_4. c-scheduler_**

    - minDate, maxDate 속성 추가
      : 선택 가능한 날짜 최소값 및 최대값
    - templateItemCount 속성 추가
      : 템플릿 사용 시 표시될 최대 아이템수를 임의로 변경 *설정 하지 않는 경우 기본값 사용
    - template 영역 수정
      : Feature-browser Template Sample 참고

  **<span class="colored2">오류</span>**

  **_1. c-chart_**

    - timePointer 가 데이터 영역 밖에서 렌더링되는 현상 수정

  **_2. c-modal_**

    - ESC키다운, backdropClose 사용시 발생하는 오류 수정

  **_3. c-fromtopicker_**

    - prev, next 버튼 사용시 현재날짜를 기준으로 동작하는 오류 수정
    - onDateUpdated 가 발생하지 않는 현상 수정

#### <span style="color:blue">_[다국어 API 반환값 bug fix]_</span>
  **Ember.String.htmlSafe** [참고사이트](https://github.com/emberjs/ember.js/issues/12524)

  - helper `fr-resource`
  - function `getLanguageResource`
  에서 리턴값이 string으로 도출되었던 것은 내부적인 auto conversion의 결과로 올바른 리턴값이 아님.

  [참고링크](https://github.com/emberjs/ember.js/issues/12524)를 확인해보면 알겠지만 본래 리턴값은 object임.
  **따라서 string의 리턴값이 필요한 경우 명시적으로 타입변환을 시켜야함.**

## v0.9.14-B [2018.11.16]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-chart**

    - isSortedData 기능 구현
    - 날짜 데이터 영역에 Date 객체 아닌 타입이 대입될 경우 Date 객체로 타입 변환
    - 그래프 clipping path 영역 설정
    - 날짜 포맷 변경 가능하도록 수정
    - pie차트 라운드 효과 제거
    - pie차트 배경 axis 제거

  **_2. c-timeline_**

    - 날짜 데이터 영역에 Date 객체 아닌 타입이 대입될 경우 Date 객체로 타입 변환

  **_3. c-popover_**

    - 높이 상속 구조 변경
    - destroyOnHide 속성 추가 (c-popup) 속성과 동일

  **_4. c-accordion, c-expander_**

    - Header template 사용시 내부의 버튼에서 클릭 이벤트 버블링을 막을수 있도록 수정

  **_5. c-accordion_**

    - 초기 selectedName을 인식하지 못하는 현상 수정

  **<span class="colored2">오류</span>**

  **_1. c-chart_**

    - 차트 두 개 이상 로드 시 y축 안보이는 현상 수정

  **_2. c-timeline_**

    - Infinite Render 현상 수정

  **_3. c-popup_**

    - 드래그로 팝업 이동시 초기 영역 아래로 마우스 다운이 안되는 현상 수정

  **_4. c-autocomplete_**

    - 한글 입렵시 입력상태에 따라 이벤트가 중복발생하는 현상 수정

  **_5. c-picker_**

    - yearMonth 타입에서 displayDate를 바인딩 하지 않은경우 오류가 나는 현상 수정

## v0.9.14-A [2018.11.12]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-timeline_**

    - d3.js 버전 업그레이드 적용(3.5 -> 5.5)
    - 피처브라우저 현행화
    - 중복 아이콘 및 돋보기 아이콘 기능 복원

  **_2. c-chart_**

    - 멀티 y축 지표 텍스트 인위적 변경 기능

  **_3. c-picker, c-fromtopicker_**

    - selectedDate, today 등의 Calender 표시

  **_4. c-slider, c-fromtopicker_**

    - 슬라이더 간격을 일정하게 고정

  **_5. c-popover_**

    - isOpen속성을 실제 show, hide 기능에 바인딩

  **_6. c-popup, c-popover, c-modal_**

    - showCloseButton 속성 추가 - 닫기버튼 표시여부 설정

  **<span class="colored2">오류</span>**

  **_1. c-picker, c-fromtopicker_**

    - MIN, MAX 기능 대응에 대한 오류 수정
    - FORMAT 변환 관련 오류 수정
    - onDateUpdated 이벤트가 불필요하게 발생하는 오류 수정

  **_2. c-popup_**

    - placementTarget 속성의 변경을 동적으로 감지하지 않던 오류 수정

#### <span style="color:blue">_[우편번호 주소 조회]_</span>
  **<span class="colored2">수정</span>**

  **_1. 구현방법_**

<div class='path'> template.hbs </div>
<br>
{{<highlight handlebars>}}
{{ui-address/main-popup
  stateId='__chisstateid__'
  fetchAddressCB=(action 'onTest')
}}
{{</highlight>}}

<div class='path'> component.js </div>
<br>
{{<highlight javascript>}}
onTest(test){
 console.log(test); //콘솔창으로 주소관련 정보가 출력됨을 확인할 수 있음.
}
{{</highlight>}}

  **_2. 특징_**

    - 서비스가 중단되는경우 사용자가 주소를 `직접 입력 가능`
    - 주소 선택시 `영문, 도로명, 구주소` 별로 선택할 수 있으며 `각각의 프로퍼티값으로 바인딩`됨.
    - 주소리스트는 `50개씩` 한 페이지에 조회됨.
    - 기존 행안부 `OPEN API의 프로퍼티명을 그대로 사용`하였고 `필요한 프로퍼티 추가`하였음.

  **_3. 러턴 값_**
![img](/release/images/postAddrReturn.png)

## v0.9.14 [2018.11.05]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-combobox, c-autocomplete, c-picker, c-fromtopicker_**

    - 팝업 영역 오픈 시 초기 잔상이 남는 현상 수정

  **_2. c-timpad_**

    - 기본 동작에 대한 전반적인 기능 개선 (오류 수정 등)

  **_3. c-fileupload_**

    - Template 작성 기능 추가

  **_4. c-tabs_**

    - Prev, Next 버튼 마우스 다운을 이용한 Tab이동 기능 추가

  **_5. c-modal_**

    - 풋터영역을 작성하지 않는 경우 풋터 숨김처리

  **_6. c-picker, c-fromtopicker_**

    - today 영역을 더블클릭하면 팝업영역을 닫도록 변경

  **_7. c-chart_**

    - d3.js 버전 업그레이드 적용(3.5 --> 5.5)
    - 피처브라우저 현행화
    - 멀티 Y축 기능 추가
    - 날짜 변경 세로선 기능 추가

  **_8. control_**

    - 컨트롤 애니메이션 효과 제거

  **<span class="colored2">오류</span>**

  **_1. c-picker, c-fromtopicker_**

    - 처음 팝업 오픈시 화면이 잘리는 오류 수정

  **_2. c-numericupdown_**

    - onChanged 이벤트가 발생하지 않는 현상 수정

  **_3. c-grid_**

    - 컬럼잠금 상태에서 특정기능 활성화 시 컬럼이 밀리는 현상 수정

  **_4. c-tabs_**

    - 탭리스트 오픈시 화면영역을 벗어나는 현상 수정

  **<span class="colored2">추가</span>**

  **_1. c-loader_**

    - Loader 컨트롤 추가

  **_2. c-scheduler_**

    - Scheduler 컨트롤 추가

#### <span style="color:blue">_[SSL(Secure Sockets Layer) 적용]_</span>
  **<span class="colored2">인증서 설치</span>**

  **_1. 인증서 다운 경로_**
  [인증서 다운 경로 및 가이드 문서](http://sps.c-his.com/sites/2/TS/_layouts/15/start.aspx#/SitePages/Home.aspx?RootFolder=%2Fsites%2F2%2FTS%2FShared%20Documents%2F10000.%20%EA%B3%B5%EC%9C%A0%2F14.%20Naver%20Cloud&FolderCTID=0x0120002EC637CA379B954CAB5EA63C92BC08FA&View=%7BB1F4166B-82DB-4BD6-842D-1B381D224C3A%7D)

  **_2-1. 설치방법 For Windows_**

    - CHIS.Backend.Utility.zip 파일을 압축 푼 후에 `CHIS.Backend.Utility.exe 를 실행`해주시면 됩니다.

  **_2-2. 설치방법 For Others_**

    - 각 브라우저 설정창을 통해 인증서를 등록해주면 된다.
    - *.c-his.com 인증서를 신뢰할 수 있는 루트 인증기관(Root certificate authority)에 등록.

  **_3. 아래와 같은 메세지가 보일 때_**
```
net::ERR_CERT_AUTHORITY_INVALID
```
  - 열려있는 브라우저를 모두 닫고 혹시 작업관라지의 해당 브라우저 프로세스가 떠 있다면 마찬가지로 모두 종료 한 후 브라우저를 다시 오픈.

#### <span style="color:blue">_[날짜 포맷]_</span>
  **<span class="colored2">fr-format-date</span>**

  - locale info가 **ko-kr** 일 경우 아래와 같이 보이도록 구현된 helper
  - **날짜 정보를 YYYY-MM-DD 형태**로 보이도록 기존 **_format-date_** helper를 override 함.

{{<highlight handlebars>}}
//표준 날짜 및 시간 서식 지정자 예제 handlebar
{{fr-format-date date format='d'}}                     // 2018-11-02
{{</highlight>}}


| 형식 지정자 |  설명  |  예제(en-us: format-date , fr-format-date)  | 예제(ko-kr: format-date) | 예제(ko-kr: fr-format-date) |
|----------|-------|--------------------------------------------|-------------------------|----------------------------|
|    "d"   | 간단한 날짜 패턴  | 10/25/2018 | 2018. 10. 25. | 2018-10-25|
|    "D"   | 자세한 날짜 패턴  | Thursday, 10/25/2018 | 2018. 10. 25. 목요일 |  2018-10-25 목요일
|    "f"   | 전체 날짜/시간 패턴(간단한 시간)  | Thursday, October 25, 2018, 3:41 PM | 2018년 10월 25일 목요일 오후 3:31 | 2018년 10월 25일 목요일 오후 3:31
|    "F"   | 전체 날짜/시간 패턴(자세한 시간)  | Thursday, October 25, 2018, 3:41:38 PM | 2018년 10월 25일 목요일 오후 3:31:58 | 2018년 10월 25일 목요일 오후 3:31:58
|    "g"   | 일반 날짜/시간 패턴(간단한 시간)  | 10/25/2018, 15:41 | 2018. 10. 25. 15:31 |  2018-10-25 15:31
|    "G"   | 일반 날짜/시간 패턴(자세한 시간)  | 10/25/2018, 15:41:38 | 2018. 10. 25. 15:31:58 | 2018-10-25 15:31:58
|    "m"   | 월/일 패턴  | October 25 | 10월 25일 | 10월 25일
|    "t"   | 간단한 시간 패턴  | 15:41 | 15:31 | 15:31
|    "T"   | 자세한 시간 패턴  | 15:41:38 | 15:31:58 | 15:31:58
|    "u"   | 정렬 가능한 유니버설 날짜/시간 패턴  | 10/25/2018, 15:41:38 | 2018. 10. 25. 15:31:58 | 2018-10-25 15:31:58
|    "U"   | 유니버설 전체 날짜/시간 패턴입니다.  | 10/25/2018, 15:41:38 | 2018. 10. 25. 15:31:58 | 2018-10-25 15:31:58
|    "y"   | 연도 월 패턴  |  Oct 2018 | 2018년 10월 | 2018년 10월


**<span class="colored2">fr_I18nService</span>**

  - locale 정보가 **ko-kr**일 때 날짜 정보를 YYYY-MM-DD 형태로 보이도록 로직 수정함.
{{<highlight javascript>}}

//en-us
this.get('fr_I18nService').formatDate(new Date(), 'c') // Fri, 11/02/2018
this.get('fr_I18nService').formatDate(new Date(), 'd') // 11/02/2018
this.get('fr_I18nService').formatDate(new Date(), 'D') // Friday, 11/02/2018
this.get('fr_I18nService').formatDate(new Date(), 'f') // Friday, November 02, 2018, 3:22 PM
this.get('fr_I18nService').formatDate(new Date(), 'F') // Friday, November 02, 2018, 3:22:01 PM
this.get('fr_I18nService').formatDate(new Date(), 'g') // 11/02/2018, 15:22
this.get('fr_I18nService').formatDate(new Date(), 'G') // 11/02/2018, 15:22:01
this.get('fr_I18nService').formatDate(new Date(), 'm') // November 02
this.get('fr_I18nService').formatDate(new Date(), 'M') // 11/02
this.get('fr_I18nService').formatDate(new Date(), 't') // 15:22
this.get('fr_I18nService').formatDate(new Date(), 'T') // 15:22:01
this.get('fr_I18nService').formatDate(new Date(), 'u') // 11/02/2018, 15:22:01
this.get('fr_I18nService').formatDate(new Date(), 'U') // 11/02/2018, 15:22:01
this.get('fr_I18nService').formatDate(new Date(), 'y') // N 2018
this.get('fr_I18nService').formatDate(new Date(), 'Y') // 11/2018
this.get('fr_I18nService').formatDate(new Date(), 'w') // Fri
this.get('fr_I18nService').formatDate(new Date(), 'W') // Friday

//ko-kr
this.get('fr_I18nService').formatDate(new Date(), 'c') // 2018-11-02 (금)
this.get('fr_I18nService').formatDate(new Date(), 'd') // 2018-11-02
this.get('fr_I18nService').formatDate(new Date(), 'D') // 2018-11-02 금요일
this.get('fr_I18nService').formatDate(new Date(), 'f') // 2018년 11월 02일 금요일 오후 3:27
this.get('fr_I18nService').formatDate(new Date(), 'F') // 2018년 11월 02일 금요일 오후 3:27:17
this.get('fr_I18nService').formatDate(new Date(), 'g') // 2018-11-02 15:27
this.get('fr_I18nService').formatDate(new Date(), 'G') // 2018-11-02 15:27:17
this.get('fr_I18nService').formatDate(new Date(), 'm') // 11월 02일
this.get('fr_I18nService').formatDate(new Date(), 'M') // 11-02
this.get('fr_I18nService').formatDate(new Date(), 't') // 15:27
this.get('fr_I18nService').formatDate(new Date(), 'T') // 15:27:17
this.get('fr_I18nService').formatDate(new Date(), 'u') // 2018-11-02 15:27:17
this.get('fr_I18nService').formatDate(new Date(), 'U') // 2018-11-02 15:27:17
this.get('fr_I18nService').formatDate(new Date(), 'y') // 2018년 11월
this.get('fr_I18nService').formatDate(new Date(), 'Y') // 2018-11
this.get('fr_I18nService').formatDate(new Date(), 'w') // 금
this.get('fr_I18nService').formatDate(new Date(), 'W') // 금요일
// ISO 포멧 가져오기
let isostring = new Date().toString() ; //yyyy-MM-ddTHH:mm:ss.fffZ
{{</highlight>}}

## v0.9.13 [2018.10.24]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-slider_**

    - ticks label 을 다이나맥하게 변경할 수 있도록 수정

  **_2. c-picker, c-fromtopicker_**

    - 날짜 값을 모두 지워 null 값으로 만들었을 경우에도 onDateUpdated 이벤트가 발생하도록 수정

  **_3. c-timpad_**

    - 분 값이 0일 경우, down 버튼을 클릭하면 분 값이 59로 변경

  **_4. c-toast_**

    - closeButton 옵션을 true로 설정했을 경우에는 timeOut 설정과 무관하게 토스트가 닫히지 않도록 수정. 사용자가 close 버튼을 클릭해야만 닫히도록.

  **<span class="colored2">오류</span>**

  **_1. c-picker, c-fromtopicker_**

    - showTodayNavigation 작동 에러 수정

  **_2. c-timepad_**

    - 일부 down 버튼이 작동 안하는 현상 수정

  **_3. c-popup_**

    - 팝업이 브라우저 스크롤 영역 밖으로 나가는 현상 수정

  **_4. c-tooltip_**

    - 툴팁 텍스트가 null이거나 undefined일 경우, 에러메시지 팝업이 뜨는 현상 수정

  **_5. c-input_**

    - currency 타입에서 onChange 이벤트가 발생하지 않는 오류 수정

  **_6. c-input, c-materialinput, c-maskedinput, c-combobox, c-autocomplete_**

    - readOnly 상태에서 클리어버튼이 동작하는 오류 수정

#### <span style="color:blue">_[우편번호 주소 조회]_</span>
  **<span class="colored2">신규</span>**

  **_1. 구현방법_**

<div class='path'> template.hbs </div>
<br>
{{<highlight handlebars>}}
{{ui-address/main-popup
  stateId='__chisstateid__'
  fetchAddressCB=(action 'onTest')
}}
{{</highlight>}}

<div class='path'> component.js </div>
<br>
{{<highlight javascript>}}
onTest(test){
 console.log(test); //콘솔창으로 주소관련 정보가 출력됨을 확인할 수 있음.
}
{{</highlight>}}

  **_2. 메세지_**

- 검색수가 1000건이 넘는 경우 :
![img](/supporting-pages/images/postAddr3.png)
  - 검색예제를 따라서 다시 검색하는 것을 권장함.
- API 서버에러:
![img](/supporting-pages/images/postAddr5.png)
  - 1000건 이상의 다수 결과 조회 후 page 번호를 100번째나 그에 상응하는 높은 페이지로 호출하는 경우 발생함
  - API를 제공하는 행안부 담당쪽으로 부터 발생하는 에러, 과도하게 이런 에러를 발생하는 경우 연락올 수 있음.
- 한글자만 입력시
![img](/supporting-pages/images/postAddr4.png)
- Ajax 통신 오류의 경우
![img](/supporting-pages/images/postAddr6.png)

  **_3. 화면정보_**

- 초기화면
![img](/release/images/postAddr.png)
- 검색후 주소리스트 화면
![img](/release/images/postAddr8.png)
- 전체화면
![img](/release/images/postAddr2.png)
- 바인딩결과
![img](/release/images/postAddr10.png)
- 리턴값
![img](/release/images/postAddr9.png)

#### <span style="color:blue">_[Date/Time & Time Zone API]_</span>

  **<span class="colored2">Date/Time & Time Zone Development 관련 사항 문서</span>**

- Time Zone Related Development Guide_V1.2.pptx
  - [관련문서 경로](http://sps.c-his.com/sites/2/TS/_layouts/15/start.aspx#/SitePages/Home.aspx?RootFolder=%2Fsites%2F2%2FTS%2FShared%20Documents%2F10000%2E%20%EA%B3%B5%EC%9C%A0%2F8%2E%20%28Back-end%29%20Framework&FolderCTID=0x0120002EC637CA379B954CAB5EA63C92BC08FA&View=%7BB1F4166B-82DB-4BD6-842D-1B381D224C3A%7D)

- API 변경 사항
![img](/release/images/date1.png?width=800px)

## v0.9.12-D [2018.10.18]
---
#### <span style="color:blue">_[개인화 설정]_</span>
  **<span class="colored2">수정</span>**

  **_1. List Setting 영역_**

    - `Patient List` 설정
      : 선택 가능한 view 중에서 하나만 default 선택이 되빈다.
      : Default 선택은 하나만 가능 합니다.

    - `Work List` 설정
      : 선택 가능한 view 중에서 하나만 defalut 선택이 됩니다.
      : Default 선택은 하나만 가능 합니다.

    - `Mini List` 설정
      : Select는 목록에서 하나만 선택이 되며 선택된 view가 최상단에 위치합니다.

    - 저장은 하단에 있는 `저장 버튼을 클릭`해서 적용합니다.

  **_2. Application Setting 영역_**

    - Language : 다국어 적용 언어를 선택한 후 선택 드롭다운옆에 있는 저장 버튼을 클릭합니다.

  **<span class="colored2">API</span>**

{{<highlight javascript>}}
@settingKey : 개인화 설정을 위한 unique key를 셋팅합니다.
@settingValue : 기본은 string값이며 JSON 형식으로 값을 저장할 경우에는 JSON.stringify(settingValue)로 사용하면 됩니다.

this.get('co_PersonalizationService').setSettingInfo(settingKey, settingValue, description);
//return 값 promise

this.get('co_PersonalizationService').getSettingInfo(settingKey);
//return promise

this.get('co_PersonalizationService').setSettingInfo(settingKey, JSON.stringify(settingValue), description);
{{</highlight>}}

![img](/release/images/personalSetting.jpg?width=800px)

  **<span class="colored2">List Setting 저장 후 발생 이벤트</span>**

<i class="fas fa-info-circle"></i> Key 값 : '__co_personalizationService_list_setting_update' 으로 메시지 서비스 subscribe 하면 됩니다.

{{<highlight javascript>}}
//수신쪽 sample code 입니다
didInsertElement() {
    this._super(...arguments);
    this.get('co_ContentMessageService').subscribeMessage('__co_personalizationService_list_setting_update', this.get('currentMenuId'), this, this.updateListSettingInfo);
}

willDestroyElement() {
    this._super(...arguments);
    this.get('co_ContentMessageService').unsubscribeMessage('__co_personalizationService_list_setting_update', this.get('currentMenuId'), this);
}

updateListSettingInfo(settingValue){
    this.set('listSettingInfo', settingValue);
},

//파라미터로 들어오는 값은 다음의 내용입니다.
settingValue :
{
    patientList: this.get('co_PersonalizationService.patientListSettingInfo'),
    workList: this.get('co_PersonalizationService.workListSettingInfo'),
    miniList: this.get('co_PersonalizationService.miniListSettingInfo')
}
{{</highlight>}}

## v0.9.12-C [2018.10.16]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-tabs_**

    - c-tabs의 itemsSource에서 탭 추가시 탭 추가 위치 지정할 수 있도록 변경
    - c-tabs의 itemsSource 데이터 clone 제거

  **<span class="colored2">오류</span>**

  **_1. c-tabs_**

    - c-tabs의 itemsSource 변경 시 탭도 변경되도록 수정

#### <span style="color:blue">_[개인화 설정]_</span>
  **<span class="colored2">수정</span>**

  **_개인별 List Setting값 정보 전달을 위해 추가된 내용_**

- main-common-container 에 property값이 추가됨
- listSettingInfo 값이 셋팅 되었습니다. 값 정보는 아래와 같습니다.

```
{
  patientList :
    Ember.Object(
      defalult : Ember.Object(),
      selected: Ember.A(),
      origins : Ember.A()
    ),
  workList :
    Ember.Object(
      defalult : Ember.Object(),
      selected: Ember.A(),
      origins : Ember.A()
    ),
  miniList :
      Ember.Object(
      selected: Ember.Object(),
      origins : Ember.A()
    ),
};
```
각 Obejct 값은 CCMP에서 변환하는 값 정보 그대로 담습니다.

```
{
 "id": "2ed79421-58d8-4b67-b3f0-749185b4bae5",
 "classificationId": null,
 "displayCode": "specimen-check-in-work-list",
 "name": "specimen-check-in-work-list",
 "engineName": null,
 "componentPath": "specimen-check-in-work-list",
 "defaultServiceId": null,
 "isMenu": true,
 "isPopup": false,
 "isMedicalRecord": false,
 "configurationPath": null,
 "arguments": null,
 "displaySequence": 0,
 "serviceIds": null,
 "description": "specimen-check-in-work-list",
 "embeddedViewComponents": [],
 "services": []
}
```

## v0.9.12-B [2018.10.12]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-tabs_**

    - 탭 header에 추가된 개체가 string 타입이 아닐 경우 string타입으로 강제 형변환
    - itemsSource 에 데이터 추가시 탭이 자동으로 추가되도록 처리

  **<span class="colored2">오류</span>**

  **_1. c-tabs_**

    - c-tabs에 탭추가시 기존의 tab 컨텐츠 변경 사항이 취소되는 문제 수정

  **<span class="colored2">추가</span>**

  **_1. c-popover_**

    - isOpen 프로퍼티 추가

#### <span style="color:blue">_[다국어 언어 설정]_</span>

- GNB영역에서 설정 아이콘을 누르시면 언어설정 컨텐츠를 볼수 있습니다.
- 현재 영어, 한국어 두가지 언어만 지원
- 언어를 선택 후 새로고침하거나 로그아웃 후 다시 로그인하면 설정한 언어기준으로 다국어가 적용됩니다.

![img](/release/images/languageResource1.jpg?width=400px)

## v0.9.12-A [2018.10.11]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">오류</span>**

  **_1. c-tabs_**

    - 다국어 처리했을 경우, _getName() 에러 및 undifined split 에러 수정

## v0.9.12 [2018.10.08]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-grid_**

    - 스크롤 동기화 관련 개선

  **_2. c-autocomplete_**

    - 아이템소스 검색 필터링시 공백, 콤마등이 포함된 문자열을 검색결과에 포함
    - 검색 결과가 한개인 경우 엔터키 입력시 자동 선택되도록 변경
    - selectedItem을 바인딩하지 않는경우에도 displayMemberPath 속성 동작 가능하도록 수정

  **_3. c-combobox_**

    - 검색기능 사용시 방향키 엔터키등의 단축키 기능 추가

  **_4. c-switch_**

    - 템플릿 작성기능 추가

  **_5. c-popup_**

    - c-input의 search버튼으로도 팝업을 열 수 있도록 조치

  **_6. c-timepad_**

    - am 00:00, pm 00:00 표현 개선 --> am12:00, pm 12:00로 수정

  **_7. c-picker, c-fromtopicker_**

    - 데이터가 string 으로 들어올 때 Date객체로 재처리 하도록 수정

  **<span class="colored2">오류</span>**

  **_1. c-grid_**

    - 템플릿 사용시 특정조건에서 편집모드로 전환될때 onEditEnd 이벤트가 바로 발생하던 문제 수정

  **_2. c-input_**

    - currency 타입에서 enableAutoCommit 속성이 true일때 오류 수정

  **_3. c-tabs_**

    - 탭 중첩해서 넣었을 경우 infinite load 에러 발생하는 경우 수정

  **_4. c-splitter_**

    - splitter 넓이가 부모 dom element의 넓이를 제때 상속하지 못하는 현상 수정

  **_5. c-fromtopicker_**

    - minDate를 today로 설정했을 경우 데이터 바인딩 잘 안되는 현상 수정

  **_6. c-picker_**

    - rselectedDate 를 로 설정했을 경우, required 상태로 보이는 현상 수정
    - 키보드로 날짜 바꿨을 때 timepad에 바뀐 날짜 반영 안되는 문제 수정

  **_7. c-expander_**

    - 초기값 isExpanded true로 셋팅 안되는 문제 수정

  **_8. c-slider_**

    - disable true 설정 후. 다시 disable false로 설정했을 경우 디자인 깨지는 현상 수정

  **_9. c-materialinput_**

    - readOnly, disabled 속성이 true 일때 디자인이 깨지는 현상 수정

  **<span class="colored2">추가</span>**

  **_1. c-grid_**

    - showVerticalLine (그리드 세로 라인 표시 여부) 속성 추가

  **_2. fr-report_**

    - PROPERTIES
      : language 추가 (다국어 기능)
    - METHOD
      : setLanguage 추가 (다국어 기능)

#### <span style="color:blue">_[Ember-froala-editor]_</span>

  **<span class="colored2">신규</span>**

  **_사용방법_**

  - 현재 임시적인 사용이므로 기록팀이외는 사용 불가
  - 추후 정식사용일때 공지 예정
  - 사용 [Docs 링크](https://www.froala.com/wysiwyg-editor/docs/events)

{{<highlight handlebars>}}
// event 관련 로직 조작 예제
{{froala-editor
  on-paste-after=(froala-method "commands.undo")
}}// 카피하면 undo 동작 시행함
{{</highlight>}}

{{<highlight handlebars>}}
//사용방법
//해당 컴포넌트 안 template.hbs 파일안에 다음과 같이 사용가능함.
{{froala-editor}}
{{froala-content}}
{{</highlight>}}

![img](/release/images/froalaImage.png?width=800px)

#### <span style="color:blue">_[MQ Monitoring]_</span>

  **<span class="colored2">수정</span>**

- 컨트롤 -> **c 컨트롤**로 변경
- Send / Receive Del.dev 버튼 멀티 **삭제 가능**
- 더블클릭시 sendor body 팝업이 되도록 수정

#### <span style="color:blue">_[다국어]_</span>

- Description 갑 변환

#### <span style="color:blue">_[환자 정보 호출]_</span>

```
const data = {
  patientChoicePath: Ember.get(patient, 'patientChoicePath'),
  patientGlobalPathType: Ember.get(patient, 'patientGlobalPathType'),
  patientId: Ember.get(patient, 'patientId'),
  encounterId: Ember.get(patient, 'encounterId'),
  sureryId: Ember.get(patient, 'sureryId')
};
```

#### <span style="color:blue">_[Menu Open API]_</span>

  **<span class="colored2">수정</span>**

  **_1. 대상 API_**

{{<highlight javascript>}}
openMenu(viewId, parameters = null)
openPopupMenu(viewId, parameters = null)
openFixedMenu(viewId, parameters = null)
openMenuNextTo(viewId, targetDisplayCode, parameters = null)
{{</highlight>}}

  **_AS IS_**

- 열려고 하는 화면이 존재하지 않으면 해당 화면이 열리게 되고 만약 기존에 열려 있으면 해당 화면에 포커스만 주게 됩니다.

  **_TO BE_**

- 열려고 하는 화면이 존재하지 않으면 해당 화면이 열리게 되고 만약 기존에 열려 있는 화면의 경우에는 **API 사용시에 전달한 parameter값을 새로 셋팅하면서 해당 화면에 포커스를 주게 됩니다.**

  **_2. 오픈 된 메뉴의 파라미터 변경 활용_**

{{<highlight javascript>}}
//이벤트 hook in component
onOpenMenuParamsChanged(params){
  this._super(...arguments);
  console.log('changed parameters :', params);
},
{{</highlight>}}

#### <span style="color:blue">_[Error screen]_</span>

- 클립보드 기능 추가

#### <span style="color:blue">_[Notification Service 적용]_</span>

- 필수 종속 모듈
- host package.json에 종속 필요함.

{{<highlight javascript>}}
"notificationcenter-engine" : "http://support.c-his.com:9091/npm/notificationcenter-engine-0.0.1.tgz",
"notificationcenter-module" : "http://support.c-his.com:9091/npm/notificationcenter-module-0.0.1.tgz"
{{</highlight>}}

## v0.9.11-D [2018.09.20]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-picker, c-fromtopicker_**

    - 최초 실행 시, 값이 바인딩 될 때 onSelectionChanged 이벤트 트리거 되지 않도록 수정
    - 캘린더에서 날짜를 선택할 때, date 값이 변하지 않으면 onSelectionChanged가 실행되지 않도록 수정
    - pickerType이 date일 때는 날짜 선택시 시간은 00:00으로만 설정되도록 수정
    - 컨트롤의 포커스를 잃었을 때 자식 팝업창을 닫도록 수정

  **_2. c-timepad_**

    - 최초 실행시 값이 null이면 현재 시간이 아닌, 00:00으로 표기되도록 수정

  **_3. c-slider_**

    - 최초 실행시 onValueChanged 이벤트 트리거 되지 않도록 수정,
    - 설정된 범위로 range 이동 가능하게 추가

  **_4. c-combobox_**

    - 컨트롤의 포커스를 잃었을 때 자식 팝업창을 닫도록 수정
    - 삭제버튼 위치 수정, 포커스 스타일 추가, tabindex 설정을 하지 않아도 tab으로 선택 가능한 컨트롤로 변경

  **_5. c-autocomplete, c-buttondividers_**

    - 컨트롤의 포커스를 잃었을 때 자식 팝업창을 닫도록 수정

  **_6. c-chart_**

    - d3 버전업 후 x축이 TimeLine 일 때 x축 value가 문자열이라면 Date 객체로 변경
    - d3 버전업 후 y축이 안 그려지는 문제 개선

  **<span class="colored2">오류</span>**

  **_1. c-expander_**

    - left/right 모드에서 한글 방향 정렬 안되는 문제 수정

  **_2. c-popover_**

    - button disable 상태에서도 실행되는 오류 수정
    - right 모드로 열었을 때, 때때로 화면 맨 오른쪽으로 밀리는 현상 수정

  **_3. c-togglebutton_**

    - 버튼 이미지 깨짐 현상 수정

  **_4. c-popup_**

    - infinite render 오류 수정

  **_5. c-fromtopicker_**

    - minDate, maxDate 잘못 표기되는 현상 수정

  **_6. c-picker_**

    - yearMonth, year 모드에서 날짜 더블클릭 선택 시, onSelectChange 이벤트 두 번 발생하는 문제 수정

  **_7. c-checkboxlist_**

    - checkValuePath 속성 사용시 발생하는 오류 현상 수정

  **_8. c-tree_**

    - selectedItem 속성 사용시 발생하는 오류 현상 수정

  **_9. c-messageBox_**

    - 다국어 관련 표시 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-picker, c-fromtopicker_**

    - onDateUpdated 이벤트 추가

  **_2. c-combobox, c-checkboxlist, c-radiobuttonlist, c-listbox_**

    - enableKeepSelectedValue 속성 추가 (기본값: false)
    - 해당 속성이 true인 경우 아이템소스가 변경될 때 selectedValue 값을 초기화하지 않고 유지한다.

  **_3. c-autocomplete_**

    - onValueChanged 이벤트 추가, value 변경될 때 일어나는 이벤트

  **_4. c-grid_**

    - enableManualSorting 속성 추가, 수동정렬 활성화

  **_5. c-tree_**

    - onSelectionChanged 이벤트에 parentItem 추가

  **_6. c-pagination_**

    - changed 이벤트를 onChanged로 수정

## v0.9.11-C [2018.09.12]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-popover_**

    - [c-popover] 팝오버 내 컨트럴 작동 안하는 현상 수정(구조 변경)
    - 팝오버 오프너 버튼에 {{popover.trigger}} 추가
    - Html Popover의 content를 외부 div 요소에서 내부 컴포넌트 형식으로 변경
    - Html Popover의 content 부분에 {{popover.content}} 추가

  **_2. c-picker_**

    - dateTime 모드에서 초기값이 없을 때 현재 시간이 아닌, null 값이 바인딩 되도록 수정

  **_3. c-contextmenu_**

    - 중복된 콘텍스트 메뉴 사용시 현재위치에서 가까운 콘텍스트 메뉴가 열리도록 수정

  **_4. c-combobox_**

    - template yield 매개변수에 선택여부 속성 추가
    - 싱글선택모드에서 selectedValue를 바인딩 하고 있을때 아이템소스를 변경하면 selectedValue를 초기화 하기전에 해당하는 값이 있는지 확인 후 없을 경우에만 초기화 하도록 변경

  **_5. c-listbox, radiobuttonlist, c-checkboxlist_**

    - template yield 매개변수에 선택여부 속성 추가

  **_6. c-chart_**

    - c-chart-bar 샘플 추가
    - c-chart-line 샘플 추가
    - c-chart-min-max 샘플 추가
    - c-chart-pie 샘플 추가
    - c-chart-io 샘플 추가
    - c-chart-timeline 샘플 추가
    - 캡쳐를 위한 foreignObject 제거
    - 캡쳐를 위한 SVG Icon들 추가
    - 캡쳐를 위한 Style 속성 제거 및 json 기반 SVG 관리 기능 추가
      : 캡쳐를 위한 기본적인 개선사항을 작업 했으며 캡쳐 테스트 진행 후 샘플을 추가하도록 하겠습니다.
    - 툴팁 위치 오류 개선
    - infinity rendering 오류 개선
    - Chart에 사용된 d3 버전 v3 to v5.5 개선

  **<span class="colored2">오류</span>**

  **_1. c-timepad_**

    - 타임패드 현재 시간이 멈춰 있는 오류 수정
    - pickerType='time'시 AM, PM display 버그 수정

  **_2. c-popup_**

    - 팝업 내 콤보박스/picker 선택 시 팝업 닫히는 오류 수정

  **_3. c-checkbox, c-checkboxlist, c-radiobutton, c-radiobuttonlist_**

    - onClick 이벤트 중복 발생하는 현상 수정

  **_4. c-grid_**

    - drag 불가 현상 수정

  **_5. c-fromtopicker_**

    - 데이터 조건이 충족돼도 reruired 표시가 사라지지 않는 현상 수정
    - minDate, maxDate 작동 안하는 현상 수정

  **_6. c-picker_**

    - 캘린더 더블클릭시 onSelectedChanged 이벤트가 중복 발생하는 현상 수정
    - dataTime 모드에서 캘린더 더블클릭 시 time이 00:00 으로 변경되는 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-tabs_**

    - onTabAdding 추가
    - nameMemberPath 추가
    - itemSource => itemsSource로 명칭 정정

  **_2. c-popup_**

    - destroyOnHide 추가

  **_3. c-tree_**

    - getParentItem 메소드 추가

  **_4. c-combobox_**

    - enableMultipleFilter, searchMemberPaths 속성 추가

  **_5. c-autocomplete_**

    - enableIncompleteValue, selectedItem 속성 추가

  **_6. c-grid_**

    - onSortingColumnsChanged 이벤트 추가

#### <span style="color:blue">_[메뉴컴포넌트 사이즈 세팅]_</span>

  **<span class="colored2">사이즈 조절 방법</span>**

```
//사이즈 참조 style
.box-module {  //콘텐츠 영역 사이즈
 &.w340 {width:340px;}
 &.w400 {width:400px;}
 &.w500 {width:500px;}
 &.w680 {width:680px;}
 &.w1000 {width:1000px;}
 &.w1180 {width:1180px;}
 &.w1360 {width:1360px;}
 &.w1450 {width:1450px;}
 &.w1880 {width:1880px;}
}
```

```
// onLoaded
this.set('menuClass', 'w1450');
```

#### <span style="color:blue">_[다국어]_</span>

  **<span class="colored2">오류</span>**

    - 현재 다국어 적용시.. 폴더 명칭에. 'domainName-engine'처럼 도메인 명칭에 따라 폴더 구조가 되어 다국어 배포 요청시 혼란이 있었음
    - '-engine'이 빠진 도메인명 폴더 구조로 용어 locale.json file을 찾을 수 있도록 수정함

## v0.9.11-B [2018.09.05]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-tooltip_**

    - htmlSafe 기능 쓸 수 있도록 개선

  **_2. c-expander_**

    - showHeader 옵션 default를 true로 설정

  **_3. c-loader_**

    - 크기 및 속도 조절

  **_4. c-input_**

    - font style 상속 가능하도록 개선

  **_5. c-autocomplete_**

    - onChanged 이벤트 개선

  **_6. c-radiobutton_**

    - uncheck될때 groupValue값 동기화

  **_7. c-grid_**

    - 체크박스 스타일 변경

  **_8. c-combobox_**

    - onSelectionChanged 이벤트에서 selectedValue의 싱크가 맞지 않는 문제 수정

  **_9. c-listbox_**

    - onSelectionChanged 이벤트에서 selectedValue의 싱크가 맞지 않는 문제 수정

  **_10. c-checkboxlist_**

    - onSelectionChanged 이벤트에서 selectedValue의 싱크가 맞지 않는 문제 수정

  **_11. c-radiobuttonlist_**

    - onSelectionChanged 이벤트에서 selectedValue의 싱크가 맞지 않는 문제 수정

  **_12. c-combobox_**

    - dropdown영역이 화면 범위를 벗어나는 현상 개선

  **_13. c-autocomplete_**

    - dropdown영역이 화면 범위를 벗어나는 현상 개선

  **_14. c-buttondividers_**

    - dropdown영역이 화면 범위를 벗어나는 현상 개선

  **_15. c-expander_**

    - 높이값 설정시, content 박스 안에 있는 개체들의 높이값 상속 되도록 개선

  **_16. report 컨트롤_**

    - default button: 도움말과 닫기 버튼 삭제

  **<span class="colored2">오류</span>**

  **_1. c-picker_**

    - 타임패드에서 키보드 입력 후, 외부 영역 클릭하면 에러 발생하는 문제 수정

  **_2. c-popover_**

    - 팝오버 최초 생성 시 display가 none 처리되지 않는 문제 수정

  **_3. c-pagination_**

    - Pagination에서 맨 끝자리가 하나 더 생성되는 문제 수정

  **_4. c-tab_**

    - 빈 툴팁 생성되는 문제 수정

  **_5. c-modal_**

    - modal 로드될 때 onClose 이벤트가 트리거되는 문제 수정

  **_6. c-popup_**

    - onClosed 이벤트가 트리거 되지 않는 문제 수정

  **_7. c-tooltip_**

    - 툴팁의 부모 element가 사라지거나 disable 되면 tooltip도 사라지도록 처리
    - grid 내에 툴팁 사용시 텍스트가 밀리는 현상 수정

  **_8. c-slider_**

    - tick의 value, 또는 min이 0부터 시작하지 않으면 slider가 오작동하는 문제 해결

  **_9. c-switch_**

    - 2개이상의 switch사용시 발생하는 오류 수정

  **_10. c-radiobutton_**

    - 초기값 설정 오류 수정

  **<span class="colored2">추가</span>**

  **_1. c-popup_**

    - [properties] draggable 추가(Drag on/off 기능)

  **_2. c-button_**

    - table button 스타일 'btn-success' 추가

  **_3. c-tabs_**

    - [events] onTabSorted 추가(tab sorting 후 실행되는 이벤트)

  **_4. c-input_**

    - [properties] enableAutoCommit 추가

  **_5. c-listbox_**

    - [events] onDoubleClick 추가

  **_6. c-tree_**

    - [events] onDoubleClick 추가

  **_7. c-autocomplete_**

    - [properties] displayMemberPath 추가

#### <span style="color:blue">_[Framework 종속성 제거]_</span>

- 업무도메인의 package.json의 **종속되어있던 framework를 제거**
- 기존에 route 방식에 따라 각 도메인별 프레임워크가 종속되어있었는데, 개발 방식이 변경되어 blueprint만 제외하고 나머지는 제거됨.
- 도메인 engine과 module을 배포신청시 아래와 같이 framework 종속부분은 제거하고 종전처럼 tgz로 배포 신청하면 됩니다.

```
//Appointment engine 예시
"dependencies": {
 "ember-cli-htmlbars": "*",
 "ember-cli-babel": "*"
},
"devDependencies": {
 "broccoli-asset-rev": "^2.7.0",
 "ember-ajax": "^3.1.0",
 "ember-cli": "3.0.0",
 "ember-cli-dependency-checker": "^2.1.0",
 "ember-cli-eslint": "^4.2.3",
 "ember-cli-htmlbars": "^2.0.3",
 "ember-cli-htmlbars-inline-precompile": "^1.0.2",
 "ember-cli-inject-live-reload": "^1.7.0",
 "ember-cli-qunit": "^4.3.2",
 "ember-cli-shims": "^1.2.0",
 "ember-cli-sri": "^2.1.1",
 "ember-cli-uglify": "^2.1.0",
 "ember-disable-prototype-extensions": "^1.1.3",
 "ember-engines": "^0.5.18",
 "ember-export-application-global": "^2.0.0",
 "ember-load-initializers": "^1.0.0",
 "ember-resolver": "^4.5.5",
 "ember-source": "3.0.0",
 "loader.js": "^4.6.0",
 "framework-blueprint": "http://support.c-his.com:9091/npm/framework-blueprint-0.9.11-B.tgz"
},

//Appoinment module 예시
 "dependencies": {
 "ember-cli-babel": "*",
 "ember-cli-htmlbars": "*"
},
 "devDependencies": {
 "broccoli-asset-rev": "^2.7.0",
 "ember-ajax": "^3.1.0",
 "ember-cli": "3.0.0",
 "ember-cli-dependency-checker": "^2.1.0",
 "ember-cli-eslint": "^4.2.3",
 "ember-cli-htmlbars": "^2.0.3",
 "ember-cli-htmlbars-inline-precompile": "^1.0.2",
 "ember-cli-inject-live-reload": "^1.7.0",
 "ember-cli-qunit": "^4.3.2",
 "ember-cli-shims": "^1.2.0",
 "ember-cli-sri": "^2.1.1",
 "ember-cli-uglify": "^2.1.0",
 "ember-disable-prototype-extensions": "^1.1.3",
 "ember-export-application-global": "^2.0.0",
 "ember-load-initializers": "^1.0.0",
 "ember-resolver": "^4.5.5",
 "ember-source": "3.0.0",
 "loader.js": "^4.6.0",
 "framework-blueprint": "http://support.c-his.com:9091/npm/framework-blueprint-0.9.11-B.tgz"
},
```

## v0.9.11-A [2018.08.30]
---
#### <span style="color:blue">_[Control]_</span>
  **<span class="colored2">수정</span>**

  **_1. c-tabs_**

    - tabClassType oneDepth 타입을 기본 타입으로 변경
    - tabClassType='oneDepth' 기재 안해도 됨

  **_2. c-picker, c-fromtopicker_**

    - 달력에서 navigation 버튼 이동 후 날짜 선택 시 calendar 상단에 날짜 안바뀌는 문제 수정

  **_3. c-modal_**

    - 특정 페이지에서 레이아웃 css와 충돌하는 현상 해결

  **<span class="colored2">오류</span>**

  **_1. c-checkboxlist, c-listbox, c-combobox_**

    - onChanged, onSelectionChanged 이벤트 전달인자중 selectedItems의 싱크가 맞지 않는 부분 수정

  **<span class="colored2">추가</span>**

  **_1. c-panel_**

    - 신규 c컨트롤 추가

  **_2. c-tabs_**

    - sortable 속성 추가 : drag & drop true, false(default)
    - enableSortable > sortable (속성명 변경) *기본값 false로 변경
    - onSelectedChanged > onSelectionChanged (이벤트명 변경)

  **_3. input type 컨트롤_**

    - display:inline-block
    - 적용컨트롤 : autocomplete, fileupload, fromtopicker, input, makedinput, materialinput, numericupdown, picker, textarea

  **_4. c-picker_**

    - onSelectedDateChanged > onSelectionChanged (이벤트명 변경)

  **_5. c-fromtopicker_**

    - onSelectedDateChanged > onSelectionChanged (이벤트명 변경)

  **_6. c-drawer_**

    - open > isOpen (속성명 변경)

  **_7. c-drawer-container_**

    - open > isOpen (속성명 변경)
    - isLoading (속성 삭제)

  **_8. c-radiobutton_**

    - checked (속성 추가)

  **_9. c-tree_**

    - onSelectionChanged (이벤트 추가)

## v0.9.11 [2018.08.28]
---
#### <span style="color:blue">_[CHIS Naming 변경사항]_</span>
  **<span class="colored2">수정</span>**

- initProperties() -> _**onPropertyInit()**_
- getENVConfig -> _**getEnvConfig**_
- 해당 업무도메인의 dependencies가 타 업무도메인과 연관이 없으면 정상적으로 로딩이 됩니다.
- 타 도메인의 연관이 있을 경우 **연관된 도메인도 같이 수정이 되어야 정상적으로 로딩이 됩니다.**

- 만약 같이 수정이 이루어지지 않는경우
```
ex ) Compile Error: 예시헬퍼 is not a helper
같은 에러가 발생합니다.
```

#### <span style="color:blue">_[Screen Indicator]_</span>

  **<span class="colored2">popup 화면 전체의 대한 indicator</span>**

- 반드시 Indicator를 Show하면 **Hide를 해주어야 합니다.**
- Indicator 화면이 보이는 중에 오류가 catch되면 오류창이 오픈되고 오류창을 닫게되면 Indicator도 함께 닫히게 됩니다.

```
//Indicator 보이기
해당 서비스는 삭제되었습니다.
~~this.get('co_IndicatorService').show(this);~~
//Indicator 숨기기
~~this.get('co_IndicatorService').hide(this);~~
```

## v0.9.7 ~ v0.9.10

#### <span style="color:blue">_[Control]_</span>

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**

## v0.9.6 [2018.05.16]

- **Ember 3.0 upgrade**
- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**

## v0.9.5 [2018.04.23]

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**

#### <span style="color:blue">_[co_PatientManagerService]_</span>

**<span class="colored2">reSelectPatient</span>**

환자 선택 후 메뉴의 데이터를 저장한 후 계속해서 환자 선택 이벤트가 진행될 수 있도록 해 줄 때 사용합니다.

```
this.get('co_PatientManagerService').reSelectPatient();
```

{{<highlight javascript>}}
/*If you do not want the patient to change, you must return false.*/
/*This method is called only when it is a menu content. */
onChangePatient(canChange) {
  this._super(...arguments);
  if (canChange === false) {
    this._canChangePatient().then(function (result) {
      if (result) {
        this.set('canClose', true);
        this.get('co_PatientManagerService').reSelectPatient();
      }
    }.bind(this));
  }

  return canChange;
},
{{</highlight>}}

#### <span style="color:blue">_[co_MenuManagerService]_</span>

**<span class="colored2">setMenuOpenParams</span>**

해당 method의 초기화 내용은 open되어 있는 메뉴에 대해서만 초기화되며 메뉴목록에서 다시 open을 하게 되면 DB에서 셋팅한 값으로 초기화 됩니다.

```
this.get('co_MenuManagerService').setMenuOpenParams(this.get('currentMenuId'), {myProp: "value"});
```

## v0.9.4 [2018.04.09]

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**

#### <span style="color:blue">_[co_MenuManagerService]_</span>

**<span class="colored2">checkMenuOpened</span>**

'co_MenuManagerService'의 'checkMenuOpened' API를 통해 메뉴 Open 여부를 체크 할 수 있습니다.

```
// return bool
this.get('co_MenuManagerService').checkMenuOpened(menuId);
```

## v0.9.3 [2018.03.22]

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**

#### <span style="color:blue">_[Services]_</span>

**<span class="colored2">선택된 환자 정보 조회</span>**

```
this.get('co_PatientManagerService.selectedPatient')
```

**<span class="colored2">선택된 사용자 정보 조회</span>**

```
this.get('co_CurrentUserService.user')
```

**<span class="colored2">ContentsMessageSevervice</span>**

화면과 화면 간의 메시지 보내기, 받기 서비스

 - 예제에서는 'messageTest' 이벤트 명으로 메시지를 보내고 받는다.

<div class='path'> 수신화면_이벤트 등록 </div>
<br>
{{<highlight javascript>}}
didInsertElement() {
  this._super(...arguments);
  this.get('co_ContentMessageService').subscribeMessage('messageTest', this.get('currentMenuId'), this, this.messageTest);
},

willDestroyElement() {
  this._super(...arguments);
  this.get('co_ContentMessageService').unsubscribeMessage('messageTest', this.get('currentMenuId'), this, this.messageTest);
},

messageTest(params){
  console.log(' ** encoding-decoding messageTest called with message', params);
},
{{</highlight>}}

<div class='path'> 송신화면 </div>
<br>
{{<highlight javascript>}}
onSendMessageClick(){
  this.get('co_ContentMessageService').sendMessage('messageTest', 'hello~~~ ');
}
{{</highlight>}}

## v0.9.2 [2018.03.09]

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**

## v0.9.1 [2018.02.26]

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**

#### <span style="color:blue">_[Services]_</span>

**<span class="colored2">환자 관리 서비스</span>**

  **_Method_**

- 환자 선택 : 환자 ID가 동일 할 경우 발생되지 않는다. (추후에 조건이 빠질 수 있습니다.)

  **_Syntax_**

```
@param1: 환자 조회 조건
this.get('co_PatientManagerService').selectPatient(param1)
```
  **_Example_**
{{<highlight javascript>}}
//환자선택
onPatientChangeClick(){
  const patient = {
    patientId: '1',
    encounterId: '1',
    patientChoicePath: 'menu-service-main'
  };

  this.get('co_PatientManagerService').selectPatient(patient);
}
{{</highlight>}}

```
//현재 선택된 환자
const currentPatient = this.get('co_PatientManagerService.selectedPatient');
```

  **_Hook_**

- Deprecated : ~~**_beforeChangePatient_**~~ : 환자가 변경 되기 전에 발생한다.
<i class="fas fa-info-circle"></i> 환자가 변경되는 것을 막고싶다면, 'false'를 반환한다.
(Menu Component 및 하위 Component 전체 발생)

{{<highlight javascript>}}
/*If you do not want the patient to change, you must return false.*/
/*This method is always called when implemented from CHIS.FR.Core.ComponentBase.*/
beforeChangePatient(){
  this._super(...arguments);

  return false;
}
{{</highlight>}}

- **_onChangePatient_** : 환자가 변경 될 때 발생한다.
<i class="fas fa-info-circle"></i> 환자가 변경되는 것을 막고싶다면, 'false'를 반환한다.
<i class="fas fa-info-circle"></i> 'false'를 반환 할 경우, **_onPatientChanged Hook_**은 발생하지 않는다.
(Menu Component만 발생)

{{<highlight javascript>}}
/*If you do not want the patient to change, you must return false.*/
/*This method is called only when it is a menu content. */
onChangePatient(canChange) {
  this._super(...arguments);

  return false;
}
{{</highlight>}}

- **_onPatientChanged_** : 환자가 변경되고 난 후 발생한다.
(Menu Component 및 하위 Component 전체 발생)

{{<highlight javascript>}}
/*This method is always called when implemented from CHIS.FR.Core.ComponentBase.*/
onPatientChanged(patient){
  this._super(...arguments);

  console.log('Patient Changed..');
}
{{</highlight>}}

#### <span style="color:blue">_[Error screen]_</span>

**<span class="colored2">에러팝업 사용</span>**

```
//환경별로
if (environment === 'development') {
  ENV['Errorhandler'] = {
    handlerEnable: true
  }
}
```

## v0.9.0 [2018.02.09]

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**
- **UX Migration PPT 참고**
[관련 참고 링크](http://sps.c-his.com/sites/2/TS/_layouts/15/start.aspx#/SitePages/Home.aspx?RootFolder=%2Fsites%2F2%2FTS%2FShared%20Documents%2F10000%2E%20%EA%B3%B5%EC%9C%A0%2F3%2E%20Migration%20for%20UX&FolderCTID=0x0120002EC637CA379B954CAB5EA63C92BC08FA&View=%7BB1F4166B%2D82DB%2D4BD6%2D842D%2D1B381D224C3A%7D)

## v0.8.10 [2018.01.05]

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**
- **정적 분석 수행 가이드**
[관련 참고 링크](/development/static-analysis)
- **CHIS Custom Rules 내용**
[관련 참고 링크](/development/chis-rules)

## v0.8.6 ~ v0.8.9

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**

## v0.8.5 [2017.11.10]

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**

#### <span style="color:blue">_[Response Header]_</span>

**<span class="colored2">사용방법</span>**

- 서버 호출 시 Response Header Return 여부를 'true'로 설정한다. (Get, Post, Put, Patch, Delete 가이드 참고)
- 서버로 부터 받아 온 Data 의 정보는 아래와 같다.

| Property | Description |
|----------|-------------|
| response | Response Data|
| textStatus | Text 상태 값|
| jqXHR | XMLHttpRequest 객체의 상위집합 ([jQuery.ajax참조](http://api.jquery.com/jquery.ajax/))|

<i class="fas fa-info-circle"></i> Response Header Return 여부를 'false'로 설정 할 경우 'Response Data' 단일 객체만 넘어오지만 **'true'**로 설정 할 경우 위 형태의 객체로 값이 넘어온다.

**<span class="colored2">예시</span>**

{{<highlight javascript>}}
import Ember from 'ember';
import layout from './template';
import CHIS from 'framework/chis-framework';

export default CHIS.FR.Core.ComponentBase.extend(CHIS.FR.CrossCutting.ServerCallMixin, {
  layout,

  defaultUrl: null,

  initProperties(){
    this._super(...arguments);
    //Set Stateful properties
    this.setStateProperties(['defaultUrl']);
    if (this.hasState() === false) {
      //Initialize Stateful properties
      this.set('defaultUrl', this.get('fr_HostConfigService').getENVConfig('ServerCallConfig', 'localServerUrl'));
    }
    //Initialize Stateless properties
  },

  actions: {
    createCode(createData) {
      const path = this.get('defaultUrl') + 'commoncode';

      this.create(path, null, createData, true).then(function(data) {
        alert(data.jqXHR.getResponseHeader('location'));
      }.bind(this));
    }
  },

  _success() {
    alert('create success');
  }
});
{{</highlight>}}

```
//Header 정보 전체
data.jqXHR.getAllResponseHeaders()
```

```
//Header 정보(Key값)
data.jqXHR.getResponseHeader('Key값')
```

## v0.8.2 ~ v0.8.4

- **FR 컨트롤 및 현재 사용 안하는 컨트롤 및 서비스에 대해서 기재 하지 않음**