---
title: Data Down Actions Up
linktitle: DDAU Principle
description: DDAU의 개념과 방법 이유의 대한 설명
weight: 303
disableToc: false
draft: false
date: 2019-10-28T09:50:00+09:00
tags: [ddau]
---

<i class="fas fa-exclamation-triangle chis-exclamation"></i> _<span style="color: red">CHIS에서는 라우트 내 업무 로직 개발이 없으므로, 아래 내용 중 컴포넌트에 관련된 내용만 적용됨</span>_

## 1. DDAU 의 개념
---
#### <span style="color:blue">_Overview_</span>
  - DDAU란 라우트와 컴포넌트 간, 혹은 부모 컴포넌트와 자식 컴포넌트 간 데이터(모델) 전달과 변경에 관련된 개발 원칙이다.

  - <span class="colored">데이터(모델) 전달</span>은 **라우트(부모 컴포넌트)에서 자식 컴포넌트로의 하위 방향**으로만 이루어지게 한다.
  
  - <span class="colored">데이터(모델)의 변경</span>은 **자식 컴포넌트에서 라우트(부모 컴포넌트)로의 상위 방향**으로 위임하여 원래의 데이터 생성자(조회자), 즉 Data Owner가 Data를 처리하게 한다.

#### <span style="color:blue">_Data Down_</span>
  - <span class="colored">데이터(모델) 전달</span>은 **라우트(부모 컴포넌트)에서 자식 컴포넌트로의 하위 방향**으로만 이루어지게 한다.
  
  - UI 영역과 데이터 간의 바인딩은 **one-way 바인딩**이 기준이다.

  - 자식 컴포넌트가 또 다른 자식 컴포넌트를 포함하는 경우에도 같은 방식으로 data의 흐름을 유지한다.

  - 라우트 혹은 부모 컴포넌트부터 전달받은 데이터를 자식 컴포넌트 자식 컴포넌트 내에서 변경하지 않는다. **그러나, 자식 컴포넌트 내부에서 정의한 데이터(속성)은 자식 컴포넌트 내에서 변경할 수 있다.**

#### <span style="color:blue">_Actions Up_</span>
  - <span class="colored">데이터(모델)의 변경</span>은 **자식 컴포넌트에서 라우트(부모 컴포넌트)로의 상위 방향**으로 위임하여 원래의 데이터 생성자(조회자), 즉 Data Owner가 Data를 처리하게 한다.

  - 부모 컴포넌트가 또 다른 부모 컴포넌트에 포함되는 경우에도 같은 방식으로 actions의 흐름을 유지한다. 
  
  - 상위로부터 전달받은 데이터를 컴포넌트 내부에서 변경하지 않는다. <i class="fas fa-exclamation-triangle chis-exclamation"></i><span style="color: red"> 단, 자식 컴포넌트 내부에서 정의한 데이터는 자식 컴포넌트 내에서 변경할 수 있다. </span>
  
  - (예외적으로) CRUD 시나리오 상에서, **<span class="colored2">서버저장 전</span>** 데이터를 임시로 생성하거나 기존 데이터를 변경하는 작업은 자식 컴포넌트에서 수행할 수 있다. **그러나 그 생성/변경을 위한 <span class="colored2">서버 호출</span>은 반드시 Data Owner로 위임해서 수행해야 한다.**

## 2. DDAU 의 구조
---
데이터를 조회해 오거나 수정하는 작업은 보통 라우터에서 구현을 하지만 CHIS는 전반적으로 라우터를 사용하지 않기 때문에 라우트가 하는 동작을 **부모 컴포넌트에서 구현**하도록 함.

![img](/development/images/ddau.png?width=600px)


## 3. DDAU 의 장점
---
  - 협업시 유지보수하는데 용이하다.
    - DDAU에 익숙한 사람이라면 다른 사람이 작업한 소스를 협업해야 할 경우 데이터 변형이 이루지는 것이 무엇이고 어디에서 일어나는지 신속히 파악할 수 있다.
  - 컴포넌트 재사용
    - 데이터의 변형이 이루어지는 곳이 분리되어있으므로 자식 컴포넌트를 재사용해야 할 경우 반복적으로 사용이 가능하다.
  - 복잡한 데이터 루프를 피함으로써 예기치 못한 버그를 피할 수 있다.
    - 데이터의 흐름을 일정하게 가져가기 때문에 데이터 흐름으로 부터 발생하는 예상치 못한 버그를 방지함.
  - [참고링크](https://discuss.emberjs.com/t/readers-questions-what-is-meant-by-the-term-data-down-actions-up/15311) : 엠버 커뮤니티 원문 

## 4. DDAU 활용 예시
---
  - 참고 소스 [testboard ddau 브랜치](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard?version=GBddau)
  - 실행 방법은 [README](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard?path=%2FREADME.md&version=GBddau&_a=preview) 를 확인하시기 바랍니다.
  
<div class='path'> testboard/module/addon/components/child-comp/component.js </div>
<br>
{{< highlight javascript "linenos=inline,hl_lines=1 6,linenostart=9">}}
    checked : computed('selectedOption', function(){
      return this.get('value') === this.get('selectedOption') ? 'checked' : '';
    }),

    actions: {
      onRadioClicked() {
        //부모 컴포넌트(Data Owner)의 Action 호출
        this.get('changeOptionCB')(this.get('value'));
      },
    }
{{< /highlight >}}
  
<div class='path'> testboard/module/addon/components/child-comp/template.hbs </div>
<br>
{{< highlight html "linenos=inline,hl_lines=1-5,linenostart=1">}}
  <input type="radio"  
        checked={{checked}}  
        onclick={{action 'onRadioClicked'}}  
        value='{{value}}' 
  /> {{value}}
{{< /highlight >}}

<div class='path'> testboard/module/addon/components/parent-comp/component.js </div>
<br>
{{< highlight javascript "linenos=inline,hl_lines=2,linenostart=7">}}
    actions: {
      changeOption(option){
        // 데이터 변경 : 자식 컴포넌트의 속성에 바인딩 되므로 자동으로 전파됨
        this.set('selectedOpt', option);
      }
    }
{{< /highlight >}}
  
<div class='path'> testboard/module/addon/components/parent-comp/template.hbs </div>
<br>
{{< highlight html "linenos=inline,hl_lines=2 3,linenostart=2">}}
  <span class="ml-15">
    {{child-comp class="ml-5" selectedOption=selectedOpt value='option1' changeOptionCB=(action 'changeOption') }}
    {{child-comp class="ml-5" selectedOption=selectedOpt value='option2' changeOptionCB=(action 'changeOption') }}
  </span>
{{< /highlight >}}