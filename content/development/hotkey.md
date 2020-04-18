---
title: Hotkey
linktitle: Hotkey
description: CHIS 내부에서 제공하는  HOTKEY에 대한 문서입니다.
weight: 308
disableToc: false
draft: false
date: 2020-02-07T14:23:30+09:00
---

CHIS에서 사용되는 HOTKEY의 대한 문서입니다.

## 단축키종류
---

#### <span style="color:blue">_적용 단축키_</span>

| 분류 | 기능 | 비고 | <span style="color:blue;font-weight:bold">특수키</span> 분류 | <span style="color:blue;font-weight:bold">조합</span> 키 |
|---|---|---|---|---|
| GNB | 메뉴 | <span style="color:red;font-weight:bold">M</span>enu | Alt or Meta | M |
| GNB | 사용자로그인정보 | <span style="color:red;font-weight:bold">U</span>ser | Alt or Meta | U |
| GNB | Inbox | <span style="color:red;font-weight:bold">I</span>nbox | Alt or Meta | I |
| GNB | 쪽지함 | m<span style="color:red;font-weight:bold">E</span>ssage | Alt or Meta | E |
| GNB | 환자리스트 | <span style="color:red;font-weight:bold">P</span>atien list | Alt or Meta | P |
| GNB | 워크리스트 | wo<span style="color:red;font-weight:bold">R</span>klist | Alt or Meta | R |
| GNB | 브리프뷰 | <span style="color:red;font-weight:bold">B</span>riefview | Alt or Meta | B |
| GNB | 게시판 | noticeboar<span style="color:red;font-weight:bold">D</span> | Alt or Meta | D |
| GNB | 환경설정 | settin<span style="color:red;font-weight:bold">G</span>s | Alt or Meta | G |
| GNB | 새탭 | new T<span style="color:red;font-weight:bold">A</span>b | Alt or Meta | A |
| GNB | 로그오프 | <span style="color:red;font-weight:bold">L</span>og off | Alt or Meta | L |
| GNB | Journey Map | <span style="color:red;font-weight:bold">J</span>ourney map | Alt or Meta | J |
| GNB | 메뉴초기화 | Menu Initiali<span style="color:red;font-weight:bold">Z</span>e | Alt or Meta | Z |
| 전체공동 | 화면도움말 | 도움말구현시 추가예정 | - | - |
| 전체공동 | 즐겨찾기 | 즐겨찾기구현시 추가예정 | - | - |
| 전체공동 | 환자검색 | 환자검색구현시 추가예정 | - | - |
| 화면공통 | 저장 | <span style="color:red;font-weight:bold">S</span>ave | Ctrl | S |
| 화면공통 | 삭제 | <span style="color:red;font-weight:bold">D</span>elete | Ctrl | D |
| 화면공통 | 조회/검색 | <span style="color:red;font-weight:bold">F</span>ind | Ctrl | F |
| 화면공통 | 프린트 | new <span style="color:red;font-weight:bold">P</span>rint | Ctrl | P |
| 화면공통 | 엑셀 | <span style="color:red;font-weight:bold">E</span>xcel | Ctrl | E |
| 화면공통 | 새로고침 | <span style="color:red;font-weight:bold">R</span>efresh | Ctrl | R |
| 화면공통 | 서명 | si<span style="color:red;font-weight:bold">G</span>n | Ctrl | G |
| 화면공통 | 최대화 | <span style="color:red;font-weight:bold">M</span>zximize | Ctrl | M |
| 화면공통 | 닫기 | e<span style="color:red;font-weight:bold">X</span>it | Ctrl | X |
| 화면공통 | 복사 | 브라우저 기본키 Ctrl + C | - | - |
| 화면공통 | 붙이기 | 브라우져 기본키 Ctrl + V | - | - |
| 화면공통 | 실행취소 | 브라우져 기본키 Ctrl + Z | - | - |

#### <span style="color:blue">_참고_</span>

- [os별 일반적인 단축키](https://en.wikipedia.org/wiki/Table_of_keyboard_shortcuts)  
- [browser별 일반적인 단축키](http://dmcritchie.mvps.org/firefox/keyboard.htm)
- 한글로 키가 되어있을때는 동작을 하지 않습니다.

## 구현방법
---

#### <span style="color:blue">_사용 라이브러리_</span>

- [ember-keyboard](https://github.com/briarsweetbriar/ember-keyboard)  
- [ember-keyboard 기본 사용방법](http://briarsweetbriar.github.io/ember-keyboard/#/usage)
- **mixin 주입** : **component-core <i class="fas fa-arrow-right"></i> shortcut-mixin <i class="fas fa-arrow-right"></i> ember-keyboard**

따라서 각 **CHIS Component**는 내부에 **`주입된`** **shortcut-mixin** 프로퍼티및 메서드를 활용하여 **ember-keyboard**의 기능을 활용할 수 있음. 

#### <span style="color:blue">_ember-keyboard 기본 구현방법_</span>

{{<highlight js "linenos=inline,hl_lines=1-3 6-11 14">}}
import { EKMixin } from 'ember-keyboard';
import { keyUp, keyDown } from 'ember-keyboard';
import { on } from '@ember/object/evented';

export default Component.extend(EKMixin, {
  aFunction: on(keyUp('KeyS'), function() {
    console.log('`KeyS` was pressed');
  }),
  anotherFunction: on(keyDown('ctrl+shift+KeyA'), function() {
  console.log('`ctrl+shift+KeyA` is being held');
  }),
  init(){
    this._super(...arguments);
    this.set('keyboardActivated', true);
  },
});
{{</highlight>}}

#### <span style="color:blue">_CHIS내부 구현 배경설명_</span>

ember-keyboard 사용에 앞서 알고가야할 사항 2가지가 있다.

{{% notice tip %}}
1) keyboardActivated : keyboardActivated는 Boolean 값으로 true값일 때 입력된 키보드 이벤트가 트리거가 된다.  
2) [KeyboardEvent.code value](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values) : 
어떤 키보드값을 입력하여 트리거를 일으킬 때 해당 키보드의 입력값을 아래와 같이 전달하는데 이때 KeyboardEvent.code value값을 입력한다.
{{% /notice %}}

따라서 **활성화된 메뉴**가 무엇인지 판단해서 **해당 메뉴만 keyboardActivated 값을 true로 해줘야하고** 이 역할은 **shortcut-mixin** 내부에서 하고 있다.  

아래 이미지는 CHIS app에서 조회된 메뉴리스트이다. 이때 **테스트페이지1 메뉴**처러 주황색으로 박스가 된 메뉴가 **활성화 된 메뉴**이다.

![img](/development/images/hotkey.png)

<i class="fas fa-exclamation-triangle chis-exclamation"></i> 단, **keyboardActivated** 가 true가 된 메뉴는 해당 메뉴의 **부모 container component 뿐만 아니라 내부의 자식 component들도 모두 활성화가 된다**. 

따라서 부모자식 모두의 컴포넌트에 **동일한 키보드 키로 이벤트를 트리거**하는 경우는 **keyboardActivated** 프로퍼티의 true, false를 set하여 어떤것을 호출할지 특정지을 필요가 있다. 그렇지 않으면 두개 모두 호출이 된다.

<i class="fas fa-info-circle"></i> **동일하지 않은 키보드키의 경우는 문제 없다.** 

#### <span style="color:blue">_CHIS내 구현방법_</span>

**<span class='colored2'>DefaultHotKeyEvent 종류</span>**

아래 이벤트 등록은 필요한 것들만 한다. hotkey 이벤트 등록이 필요없는 부분을 등록 및 해지할 필요가 없음.

| 이벤트종류 | 비고 |
|---|---|
|_saveDefaultHotkey| 저장 hotkey를 위한 이벤트 |
|_deleteDefaultHotkey| 삭제 hotkey를 위한 이벤트 |
|_findDefaultHotkey| 조회/검색 hotkey를 위한 이벤트 |
|_printDefaultHotkey| 프린트 hotkey를 위한 이벤트 |
|_excelDefaultHotkey| excel hotkey를 위한 이벤트 |
|_refreshDefaultHotkey| 새로고침 hotkey를 위한 이벤트 |
|_signDefaultHotkey| 서명 hotkey를 위한 이벤트 |
|_maximizeDefaultHotkey| 최대화 hotkey를 위한 이벤트|
|_exitDefaultHotkey| 종료 hotkey를 위한 이벤트 |

**<span class='colored2'>구현예시</span> : shortcut-mixin에 구현된 기본 hotkey : _saveDefaultHotkey 활용의 경우**

{{<highlight js "linenos=inline,hl_lines=10-13 22-24">}}
/*
 * 디폴트 저장 hotkey 등록 및 구현 방법
 * @param
 *  1.이벤트명 {string} 디폴트 이벤트에 등록되 이벤트 명
 *  2.component class {object} : this로 넘기면 된다.
 *  3.메서드 {function} : hotkey를 통해 구현하고자하는 메서드를 넘기면 된다. _save 함수 이건 그냥 예시입니다. 해당 이벤트의 대해 구현한 핸들러 부분을 넘겨주면 됩니다.
 *  4.메서드 파라미터 {array object} : 3의 메서드에 넘기고자하는 파라미터가 있다면 array 형태로 넘기면된다.  
 * @return 없음.
*/
onLoaded() {
  this._super(...arguments);
  this.addHotKeyEvent('_saveDefaultHotkey', this, this._save, this.get('params'));
}
...
/*
 * 디폴트 저장 hotkey 해제 및 구현 방법
 * @param
 *  1.이벤트명 {string} 디폴트 이벤트에 등록되 이벤트 명
 *  2.component class {object} : this로 넘기면 된다.
 * @return 없음.
*/
willDestroyElement() {
  this._super(...arguments);
  this.removeHotKeyEvent('_saveDefaultHotkey', this);
},
{{</highlight>}}


**<span class='colored2'>구현예시</span> : shortcut-mixin에 구현되지 않은 커스텀 구현 hotkey : customHotkey 구현**

이때 유의할 점은 동일한 shortcut내부에 디폴트로 구현된 프로퍼티명과 동일한 명으로 구현하지 말것과, keycode사용시 이미사용중인 기존 디폴트hotkey와 동일한 키로 호출 하지 않도록 유의, 

{{<highlight js "linenos=inline,hl_lines=1-2 5">}}
import { keyUp, keyDown } from 'ember-keyboard';
import { on } from '@ember/object/evented';

export default CHIS.FR.Core.ComponentBase.extend(CHIS.FR.CrossCutting.ServerCallMixin, {
  layout,
  customHotkey: on(keyUp('KeyS'), function() {
    console.log('`KeyS` was pressed');
  }),
});
{{</highlight>}}

**<span class='colored2'>구현참고 레포지터리</span> : testboard shortcut 브랜치**

- [testboard shortcut 브랜치 링크](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard#version=GBshortcut&_a=contents) 
- testboard clone 후 shortcut 브랜치로 이동해서 engine, module을 yarn install 한다.
- host의 package.json 에 아래와 같이 추가한다.

```
  "ember-addon": {
    "paths": [
      "../design",
      "lib/chis-index-module",
      "../testboard/engine",
      "../testboard/module"
    ]
  },
```

- ember s 후 메뉴에서 시스템관리 > test > 테스트페이지1 로 확인할 수 있다.

**<span class='colored2'>입력키값 확인 방법</span><a id='onkeydowninfo'></a>**

아래 샘플코드가 있는데, custom hotkey 구현한것처럼 해당 페이지에 구현하면 됩니다.

{{<highlight js "linenos=inline,hl_lines=1">}}
  //sample code
  import { keyUp, keyDown } from 'ember-keyboard';
  import { on } from '@ember/object/evented';
  
  export default CHIS.FR.Core.ComponentBase.extend(CHIS.FR.CrossCutting.ServerCallMixin, {
    layout,
    onKeyDownInfo: on(keyDown(), function(event) {
      console.log(this.getInputKeyInfo(event));
    }),
  })
{{</highlight>}}

```
/*
 * 입력키값 확인 메서드
 * @param event: {keyboardEvent obejct}
 * @return {array object} : 입력된 key Code Value 값
*/

this.getInputKeyInfo(event);
```