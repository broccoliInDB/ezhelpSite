---
title: Component
linktitle: Component
description: CHIS app에서 컴포넌트 개발시 참고사항에 대한 문서 입니다.
weight: 304
disableToc: false
draft: false
date: 2019-10-29T11:50:47+09:00
tags: [yield, component life cycle]
---
**CHIS app**은 컴포넌트 베이스구조 입니다. 그리고 CHIS 컴포넌트는 Ember Compnent에 기능에 <span class="colored">**몇가지 편의 서비스와 mixin**</span>을 extends하여 제공됩니다.

따라서 기본적인 Ember Component의 대한 기능은 CHIS Component에도 동일하게 동작합니다. 개발과정 중 **Ember Framework**에서 제공하는 로직들의 확인이 필요한 경우 공식사이트를 통해 확인 바랍니다.

현재 CHIS app의 

{{% notice tip %}}
Ember Framework 버전은 **3.10.2** 입니다.
Ember CLI 버전은 **3.10.1** 입니다.
<i class="fas fa-info-circle"></i> [공식 api 문서](https://api.emberjs.com/ember/release)

{{% /notice %}}

아래 사항들은 CHIS에서 수정된 부분이나 Ember Component의 기본 컨텐츠가 담겨있습니다.
필요한 내용의 컨텐츠만 취사 선택해서 읽으시면 됩니다.  

## 1. 컴포넌트 개발 가이드
---
[Ember Component 공식 문서](https://guides.emberjs.com/release/components/)는 이곳을 참조하시면 됩니다.

#### <span style="color:blue">_Tips_</span>
{{% notice note %}}
○ **tagName** : 속성으로 원하는 tag 지정가능 [ default : div ] [예제](https://guides.emberjs.com/release/components/customizing-a-components-element/#toc_customizing-the-element)   
○ **attributeBindings** : DOM element Custom 된 속성을 바인딩 할 수 있음. [예제](https://guides.emberjs.com/release/components/customizing-a-components-element/#toc_customizing-attributes)  
○ **Lifecycle Hook** : 필요한 경우에만 오버라이드하고 반드시 <scan class='colored'>this._super(...arguments);</scan>를 가장 상단에 넣어준다.  
○ **jQuery를 사용하지 마세요** : 현재 CHIS 프로젝트내에 컨트롤을 포함한 많은 부분에서 jQuery가 사용되고 있습니다. jQuery를 프로젝트내에서 현재상황상 당장 제거하기는 어렵겠지만 더이상 jQuery 종속성을 확장시킬 필요는 없다고 판단합니다. [참고](https://flaviocopes.com/jquery/)  
○ **event Handler** : 브라우저상황이나 꼭 필요한 custom event가 아닌이상 <span class='colored'>built-in event handler</span>을 사용하세요. [참조](https://guides.emberjs.com/release/components/handling-events/#toc_event-names)  
○ **event Listener** : 브득이한 경우 custom event를 사용해야 하는 경우, 이벤트 등록과 해제는 <span class='colored'>didInsertElement()</span>, <span class='colored'>willDestroyElement()</span> hook 에서 진행 
[참고](https://guides.emberjs.com/release/components/the-component-lifecycle/)  
○ **this.element** : 현재 component class DOM에 접근할 수 있다. this.$()은 더이상 쓰지 않는다. vanila JS를 사용해서 DOM 객체에 접근할 때 <span class='colored'>this.element</span>를 사용해라. [참조](https://api.emberjs.com/ember/2.14/classes/Ember.Component/properties/element?anchor=element)  

{{% /notice %}}

#### <span style="color:blue">_component 생성_</span>

컴포넌트를 생성시에 CHIS에서 제공한 component 블루프린트를 활용하여 Command line으로 생성한다. 이때 컴포넌트 명칭은 **kebab-case**로 한다.

```
//작업도메인 : testboard
//현재위치 : testboard/module

ember g component <component-name>
```

생성하면 아래 트리 구조로 컴포넌트가 생성된다.

```
//component-name은 작업자가 입력한 컴포넌트 명칭
//testboard는 도메인명칭

testboard
├── engine
└── module
    └── addon
         └── component
              └── component-name 
                   ├── component.js
                   └── template.hbs 

```
위와 같이 js 와 template.hbs가 같이 생성되는 이유는 

```
"usePods":true
```
.ember-cli 라는 ember-cli 설정파일에 usePods라는 설정을 true로 했기 때문이다.
관련사항은 [이곳](https://ember-cli.com/generators-and-blueprints)을 확인하시고, 해당 설정은 변경하시지 마세요. 

#### <span style="color:blue">_component blueprint_</span>

명령어를 실행하면 아래의 템플릿이 생성된다.
만약 상단에 **import Ember from 'ember'** 가 있다면 삭제.

<i class="fas fa-info-circle"></i> 블루프린트 템플릿을 확인해서 수정진행예정

{{<highlight javascript >}}

import layout from './template';
import CHIS from 'framework/chis-framework';
//import { inject as service } from '@ember/service';

//if needed, import config object
//import config from 'testboard-module/app-config';
//if needed, import model class
//import Patient from 'testboard-module/models/patient';

export default CHIS.FR.Core.ComponentBase.extend(
  /* Only For Server-Call Component
  CHIS.FR.CrossCutting.ServerCallMixin,
  */
  {
    /* 1. Service define Area
     testService:service('test-service'),
    */
    layout,
    /* 2. Property Area
      prop1 : null,
      prop2 : null,
      _privateProp3 : null,
      serverModel : null,

      //Singline computed properties Area
      sortedData: computed.sort('someData', 'sortDefinition'),

      //Multiline computed properties Area
      sortDefinition: computed('sortBy', 'name', function() {
        ...code
      }),
    */

    /* 3. Lifecycle hooks Area
    //For State Management
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

    //Only For Server-Call Component
    onLoaded(){
      this._super(...arguments);
      if (this.hasState() === false) {
        let url = this.get('fr_HostConfigService').getEnvConfig('ServerCallConfig', 'localServerUrl') + 'mr/biz1/patient/';
        this.getItem(url, null, null).then(function(result){
          this.set('serverModel', result);
        }.bind(this));
      }
    },
    didInsertElement(){
      this._super(...arguments);
      code...
    }
    */

    /* 4. Actions Area
    actions: {
      onDeleteClick() {
        this.get('deletePatientCB')(this.get('model'));
      }
    },
    */
    /* 5. Private methods Area
    _processCols() {
      ...code
    }
    */
  });
{{</highlight>}}

<i class="fas fa-info-circle"></i> **import config from 'testboard-module/app-config';**

biz 해당 모듈의 공용으로 활용될 설정 정보가 있다면 이곳에 넣고 같이 참조하면 됨. 필요가 없다면 추가할 필요 없음. 

<i class="fas fa-info-circle"></i> **import Patient from 'testboard-module/models/patient';**

model이 필요한경우 model blueprint통해 생성 후 참조

<i class="fas fa-info-circle"></i> **CHIS.FR.CrossCutting.ServerCallMixin**

관련 믹스인은 CHIS app의 ajax 호출을 위한 함수들의 구현되어 있는 곳이다. 

자세한 사항은 [CHIS > CHIS MIXINS > server-call-mixin](/chis/chis-mixins/#server-call-mixin)에서 확인 할 수 있다.


<i class="fas fa-info-circle"></i> **Service define Area**

필요시 아래 참조를 component.js 상단에
```
import { inject as service } from '@ember/service'; 
```
추가후 사용

<i class="fas fa-info-circle"></i> **Property Area** 

해당 컴포넌트 클래스 내부에서 private 하게 사용하는 것들은 **`_`**를 붙여준다.
public으로 사용시에는 붙이지 않는다.

```
_privateProperty: null
publicProperty: null
```
<i class="fas fa-info-circle"></i> **Lifecycle hooks Area**

관련내용은 따로 [CHIS Component Life Cycle](/development/life-cycle/)에 작성내용을 확인 바람.

<i class="fas fa-info-circle"></i> **Actions Area**

CHIS에서 제공된 컨트롤 컴포넌트의 Events 프로퍼티에 action method를 바인딩 하여 이벤트가 트리거 될때의 핸들러 로직을 작성할 수 있다.  

action의 대한 활용방법은 [feature browser](/chis/framework/#framework-feature-browser)를 통해서 확인하시면 됩니다.

  - 참고 소스 [testboard actiontest 브랜치](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard/history?_a=history&itemVersion=GBactiontest)
  - 실행 방법은 [README](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard?path=%2FREADME.md&version=GBactiontest&_a=preview) 를 확인하시기 바랍니다.
  - [action과 javascript event의 차이의 대한 참고 자료](https://medium.com/@jordanvincent/ember-actions-best-practices-442be5eed88d)

<i class="fas fa-info-circle"></i> **Private methods Area**

해당 컴포넌트 클래스 내부에서 private 하게 사용하는 것들은 **`_`**를 붙여준다.
public으로 사용시에는 붙이지 않는다.

{{<highlight javascript>}}
  _privateFunction(){
  ...
  },
  publicFunction(){
  ...
  }
{{</highlight>}}



## 2. Wrapped Content
---
yield를 사용하려하시는 분이 아니면 읽지 않으셔도 됩니다.

[참고링크](https://guides.emberjs.com/release/components/wrapping-content-in-a-component/) : yield 헬퍼를 이용하면 html content를 전달받아 컴포넌트를 정의할 수 있다. 이 때 yield 부분에 바인딩되는 부분을 Wrapped Content라고 함. 

<div class='path'> components/wrapping-content.hbs </div>
<br>
{{< highlight html "linenos=inline,hl_lines=2,linenostart=1">}}
  <div>start</div>
    {{yield}}
  <div>end</div>
{{< /highlight >}}

<div class='path'> components/wrapped-content.hbs  </div>
<br>
{{< highlight handlebars "linenos=inline,hl_lines=2,linenostart=1">}}
  {{#wrapping-content}}
    <div>이게 wrapped content입니다.</div>
  {{/wrapping-content}}
{{< /highlight >}}

그럼 아래와 같이 렌더가 된다.

{{< highlight html "linenos=inline,hl_lines=2,linenostart=1">}}
  <div>start</div>
  <div>이게 wrapped content입니다.</div>
  <div>end</div>
{{< /highlight >}}

#### <span style="color:blue">_Sharing Component Data_</span>

<div class='path'> components/wrapping-content.hbs  </div>
<br>
{{< highlight html "linenos=inline,hl_lines=2-9,linenostart=1">}}
  <div>start</div>
    {{yield 
      (hash 
        sharingData=(
          component "sample-component"
          sampleParam="sample text"
        )
      )
    )}}
  <div>end</div>
{{< /highlight >}}

<div class='path'> components/wrapped-content.hbs  </div>
<br>
{{< highlight handlebars "linenos=inline,hl_lines=4,linenostart=1">}}
  // wrapped는 alias
  {{#wrapping-content as wrapped}}
    //block을 사용여부는 필요에 따라서.
    {{wrapped.sharingData}}
  {{/wrapping-content}}
{{< /highlight >}}

이때 전달한 sampletParam 은 sample-conponent 에서 get 함수를 통해 확인 할 수 있다. 자세한 사항은 공식 문서 [참고링크](https://guides.emberjs.com/release/components/wrapping-content-in-a-component/)를 확인바랍니다.

