---
title: CHIS Component Life Cycle
linktitle: CHIS Component Life Cycle
description: CHIS Component의 Life Cycle의 대한 문서입니다.
weight: 306
disableToc: false
draft: false
date: 2019-11-26T16:41:30+09:00
tags: [component-life-cycle]
---
컴포넌트의 생성-렌더링-소멸의 생명주기 단계 별로 아래의 hook 오버라이딩을 통해 개입이 가능하다.  

Ember Component의 기본 Life Cycle과 동일한 단계로 구성되며 추가된 Hook은 **onPropertyInit** , **onLoaded Hook** 두개가 있습니다.

- Life Cycle Hook은 필요한 경우에만 오버라이드 합니다.
- Life Cycle Hook을 오버라이드 할 시에는 반드시 상단에 

```
this._super(...arguments)를 호출합니다.
```

## onPropertyInit
---
이 Hook은 stateful-component-mixin에 구현되어 있습니다. 로드되는 각 화면이 팝업창으로 띄워지고 다시 타일형태가 될 때 또는 그 반대일때 존재하던 페이지의 데이터를 그대로 상태유지 하기 위해서 포함된 hook 입니다.  

따라서 상태유지가 필요한 데이터는 해당 hook에서 초기값을 할당을 해야합니다.

해당 hook은 stateful-component-mixin 의 init hook에서 호출이 됩니다.

사용방법은 아래와 같습니다.

{{<highlight javascript>}}
  onPropertyInit(){
    this._super(...arguments);
    //Set Stateful properties
    this.setStateProperties(['prop1', 'prop2', 'serverModel']);
    if (this.hasState() === false) {
      //Initialize Stateful properties
      this.set('prop1', '');
      this.set('prop2', false);
    }
    //Initialize Stateless properties
    this.set('_privateProp3', '');
  },
{{</highlight>}}

## onLoaded
---
해당 hook은 component-core에 구현되어 있습니다.
서버호출을 통해 데이터를 가져오는데 사용할 CHIS 정의 hook 입니다.  

해당 hook은 component-core의 didInsertElement hook에서 호출이 됩니다.

사용방법은 아래와 같습니다.

{{<highlight javascript>}}
  onLoaded(){
    this._super(...arguments);
    if (this.hasState() === false) {
      let url = this.get('fr_HostConfigService').getEnvConfig('ServerCallConfig', 'localServerUrl') + 'mr/biz1/patient/';
      this.getItem(url, null, null).then(function(result){
        this.set('serverModel', result);
      }.bind(this));
    }
  },
{{</highlight>}}

## Ember Component Life Cycle
---

#### <span style="color:blue">_On Initial Render_</span>

|Hooks| 설명 | 권장사용 |
|---|---|---|
|init|가장 처음 호출됨. mixin과 mutable objec를 초기화하는 부분인데 chis에서는 onPropertyInit hook에서 동일한 역할을 한다.|mixins, mutable object 초기화|
|didReceiveAttrs|- Init 다음에 수행되고 Rendering 이전에 수행이 된다.<br>- render 혹은 re-render의 이전 컴포넌트의 property가 갱신될 때 마다 call됨.||
|willRender|컴포넌트가 init render나 re-render 되기전에 call 됨||
|didInsertElement|- DOM의 HTML element가 성공적으로 render 된 이후에 call 됨.<br>- 컴포넌트가 init render 될 때만 한번 call 됨.<br>- 3rd party js/library 를 바인딩하거나 해당 컴포넌트의 element를 초기화 하기 좋은 hook<br>- this.element 로 DOM 객체에 접근 가능함. 따라서 set 도 가능함.<br>- 만약 nested componen가 있다면 그것이 먼저 didRender 된 다음 didInsertElement hook이 실행된다.<br>- eventlistener를 넣기에 권장되는 hook<br>- 만약 set property가 있다면 re-render를 trigger하기 때문에 performance 위해서는 set 하지 않는것이 좋음.|- this.element 사용 for DOM 접근<br>- eventlistener 사용 권장 hook|
|didRender|Template이 render, re-render 되고 DOM이 update 된 이후에 call 됨.따라서 컴포넌트 DOM의 업데이트 이후의 사후처리를 하고자 할 때 사용할 수 있음.||

#### <span style="color:blue">_On Re Render_</span>

|Hooks| 설명 | 권장사용 |
|---|---|---|
|didUpdateAttrs|- re-render이전에 컴포넌트 속성이 변경되면 call 된다.<br>- 컴포넌트가 re-render 됐을 때는 call 안됨|- render 이전에 property를 초기화 하는데 사용 권장|
|didReceiveAttrs|- Init 다음에 수행되고 Rendering 이전에 수행이 된다.<br>- render 혹은 re-render의 이전 컴포넌트의 property가 갱신될 때 마다 call됨.||
|willUpdate|컴포넌트가 막 update, re-render 하기 전에 한번 call 됨. init render에 call 안됨||
|willRender|컴포넌트가 init render나 re-render 되기전에 rendering 시작전에 call 됨||
|didUpdate|컴포넌트가 update 되거나 re-render 되었을 때 한번 call 됨. init render에는 call 안됨.||
|didRender|Template이 render, re-render 되고 DOM이 update 된 이후에 call 됨. 따라서 컴포넌트 DOM의 업데이트 이후의 사후처리를 하고자 할 때 사용할 수 있음||

#### <span style="color:blue">_On Component Destroy_</span>

|Hooks| 설명 | 권장사용 |
|---|---|---|
|willDestroyElement|- 컴포넌트가 destroy 할 예정 일 때 call 됨, 만약 event listener를 등록했다면 여기서 해지 해주는 것을 권장함<br>- [template의 if else 조건에 의해서나 route 벗어날 때]|off method 사용|
|willClearRender|re-render 전 어떤 것도 참조해지 되지 않았을 때 에 call 됨. 만약 observer가 있다면 여기서 없애면 된다.  ||
|didDestroyElement|컴포넌트가 destroy 된 이후에 call 됨.||