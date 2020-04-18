---
title: Component State Management
linktitle: State Management
description: Component의 상태유지에 관련된 문서입니다.
weight: 307
disableToc: false
draft: false
date: 2019-11-27T17:03:33+09:00
tags: [state management]
---
**`상태관리`**는 로드된 페이지가 

```
타일형태 -> 팝업형태
팝업형태 -> 타일형태
```

로 변경될 때

기존에 유지하고 있던 데이터를 로드형태가 변경된 이후에도 **그대로 존속**하기 위해서 만들어진 로직입니다.

현재는 각 화면의 우측상단에 <i class="fas fa-thumbtack" style="color:blue"></i> 핀 과 <i class="fas fa-times" style="color:blue"></i> 종료 버튼만 존재하도록 되어 있기 때문에 

```
타일형태 -> 팝업형태
팝업형태 -> 타일형태
```

**로드 형태의 타입을 변경해서 재로드 하는 기능은 사용할 수 없습니다**.

## 상태적용방법
---

- 상단 컴포넌트로 부터 Data Down으로 전달받은 값들은 컴포넌트의 상태 유지 대상이 아님, <span class="colored">**필요시 상위 컴포넌트에서 관리 필요**</span>
- **_onPropertyInit_** Hook에서 초기화한다.
- 상태속성은 **_setStateProperties_** 메서드를 통해 등록한다. 
- Component 상태 존재 여부는 **_hasState_** 메서드로 확인
- template.hbs 사용 지점마다 아래와 같은 프로퍼티 속성 명시 **`필수`**

<div class='path'> template.hbs </div>
<br>
{{<highlight handlebars "linenos=inline,hl_lines=2">}}
{{#sample-test-comp
  stateId='__chisstateid__'
}}
...
{{/sample-test-comp}}
{{</highlight>}}

만약 loop내에 Component를 **`반복적`**으로 **`추가`**하는 경우에는 아래와 같이 작성해준다.

{{<highlight handlebars "linenos=inline,hl_lines=3">}}
{{#each list as |item index|}}
  {{sample-test-comp
    stateId=(concat '__chisstateid__' '_' index
  }}
{{/each}}
{{</highlight>}}

만약 사용할 컴포넌트의 상태유지가 필요 없는 경우 <span class="colored">**disableState=true**</span> 속성을 명시해 준다

{{<highlight handlebars "linenos=inline,hl_lines=3">}}
{{#sample-test-comp
  stateId='__chisstateid__'
  disableState=true
}}
...
{{/sample-test-comp}}
{{</highlight>}}

<div class='path'> component.js </div>
<br>
{{<highlight javascript "linenos=inline,hl_lines=6 11-12 15-16 18-19 21 26 ">}}
import layout from './template';
import CHIS from 'framework/chis-framework';

export default CHIS.FR.Core.ComponentBase.extend(
  {
    // 상위 컴포넌트로부터 전달된 속성은 상태유지 대상이 아님.
    layout,
    prop1 : null,
    prop2 : null,

    //For State Management
    onPropertyInit(){
      this._super(...arguments);
      
      //상태 속성 등록: 상태 유지가 필요한 속성만 등록
      this.setStateProperties(['prop1', 'prop2']);
      
      //기존 상태 존재 확인
      if (this.hasState() === false) {
        
        //상태 속성 초기화: 이전 컴포넌트 상태 정보가 없는 경우, 상태 속성들 초기화
        this.set('prop1', '');
        this.set('prop2', false);
      }

      //비상태 속성 초기화: 상태 유지가 필요없는 속성 초기화
      this.set('_privateProp3', '');
    },

    ...

  });
{{</highlight>}}

