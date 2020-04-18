---
title: 도움말 사이트 문서 작성방법
linktitle: Ways to Document v1.0
description: 도움말 사이트의 문서 작성 방법의 표준 v1.0
weight: 702
disableToc: false
draft: false
date: 2019-11-02T16:20:24+09:00
tags: [way to document]
---

문서작성 방법의 정답은 없지만 기본적인 통일성을 위해 간단한 **문장 정렬 규칙**을 정하려고 한다.

설명하지 않은 사항은 [markdown](/documents/markdown) 기본 문법에서 의도하는 방법으로 작성을 하면 된다.

이곳에서 정하는 규칙은

> 대주제, 하위주제, 소주제, 항목으로 진행될 때의 구문 정렬 규칙만 정하려고 한다.

문서의 기본배경이 되는 설명이 필요하다면 이곳에 적으면 된다.

## 가장 큰 주제1
---
#### <span style="color:blue">_주제 1의 하위 주제1_</span>
**<span class="colored2">하위 주제1의 소주제1</span>**  

**markdown**은 문법의 표준이 정해지지 않았기 때문에 띄어쓰기 하나 위아래 간격 한칸에도 화면상 다르게 표현될 수 있다.  

따라서 꼭 아래 규칙에 맞춰서 의도에 맞게 명시적으로 표현을 해주길 권장한다.

- 의도하지 않았는데 원하는 결과로 표출 되어 그냥 두거나 하지 말자.
- 꼭 명시적으로 표현되는 방식으로 의도된 방향으로 표현하길 권장한다.
- 앞선 사람이 작성한 문장 중 표준을 맞추지 않은 부분을 발견한다면 표준을 맞춰 준다.

#### <span style="color:blue">_주제 1의 하위 주제2_</span>

소주제도 없고 항목을 나눌 필요 없이 그냥 문장을 나열해야 할 때는 \-을 붙이지 않고 쓴다.

소주제는 없지만 항목을 나열해야 할 때는 아래와 같이 \-을 붙이고 쓴다.

- 소주제가 없을 때 항목 1
- 소주제가 없을 때 항목 2
- 소주제가 없을 때 항목 3
  - \`음역넣기\` 하면 `음영넣기`가 된다. 
  - 단 `이건 6글자 넘는다.` 6글자가 되면 복사버튼이 생긴다.
  - 복사버튼이 싫은 경우는 **class="colored"**를 사용하면 된다.
  - 그럼 <span class="colored">이건 6글자 넘는다.</span> 음영만 생기고 복사버튼 안생긴다. 

## 가장 큰 주제2
---
#### <span style="color:blue">_주제 2의 하위 주제1_</span>
**<span class="colored2">하위 주제1의 소주제1</span>**  

- 항목 1: 들여쓰고 싶을 때는 `-`를 맨 앞에 붙인다.   
  - 세부사항

**<span class="colored2">하위 주제1의 소주제2</span>**  

항목 1: 들여쓰고 싶지 않은 소주제 항목일 때는 `-`를 붙이지 않는다.  
**- 항목 1 들여쓰고 싶지 않은 소주제 항목일 때 `-`를 붙이고 싶다면 \*\*내부에  '\-'을 붙인다.\*\***  
_- 항목 1 들여쓰고 싶지 않은 소주제 항목일 때 `-`를 붙이고 싶다면 \_내부에 '-'을 붙인다.\__

**<span class="colored2">하위 주제1의 소주제3</span>**  

- **Bold** : 글자를 진하게 표현할 때는  \*\*이 사이에 글자를 넣어라\*\*  
  - 결론 : 그러면 **이사이에 글자를 넣어라** 처럼 글자가 진해진다. 

- _Italic_ : 글자를 눞힐 때는  \_이 사이에 글자를 넣어라\_  
  - 결론 : 그러면 _이사이에 글자를 넣어라_ 처럼 이탤릭 글자체가 된다. 

- newline : \<br\>역할을 하기 위해서는 글자 마지막에 **공백2자**를 넣으면 된다.   
  - 결론 : 그러면 new line이 된다. <br> 태그를 써도 되지만 가급적 쓰지 않길 권고한다.

**<span class="colored2">하위 주제1의 소주제4</span>**  

- 정보성격의 문장은 앞에 <i class="fas fa-info-circle"></i> 아이콘을 붙여준다.
  - <i class="fas fa-info-circle"></i> 이 정보는 정보다.
- 예외성격의 문장은 앞에 <i class="fas fa-exclamation-triangle chis-exclamation"></i> 아이콘을 붙여준다.
  - <i class="fas fa-exclamation-triangle chis-exclamation"></i> 단, 이 정보는 정보다.
- git 브랜치 표현시에는 <i class="fas fa-code-branch"></i> 아이콘을 붙여준다.
  - <i class="fas fa-code-branch"></i> develop

**<span class="colored2">하위 주제1의 소주제5</span>**  

**_1. 일반적인 command_**

<i class="fas fa-info-circle"></i> 일반적인 command라인을 넣고 싶을 때는 \`\`\`command내용\`\`\` 하면 

**아래와 같이 렌더 된다.**

```
git log --graph --oneline --branches 
```

**_1. html_**

<i class="fas fa-info-circle"></i> html을 작성하고 싶을 때는  

\`\`\`html  
html 태그  
\`\`\`

**아래와 같이 렌더 된다.**

```html
<ul>
  <li>항목1</li>
  <li>항목2</li>
  <li>항목3</li>
</ul>
```

**_3. handlebars code_**

<i class="fas fa-info-circle"></i> handlebar code를 넣고 싶을 때는 아래와 같이 넣으면 

```html
{{</*highlight handlebars*/>}}
  {{#froala-editor}}
  {{/froala-editor}}
  {{#froala-content}}
  {{/froala-content}}
{{</*/highlight*/>}}
```
**아래와 같이 렌더 된다.**

{{<highlight handlebars>}}
  {{#froala-editor}}
  {{/froala-editor}}
  {{#froala-content}}
  {{/froala-content}}
{{</highlight>}}

**_4. javascript code_**

<i class="fas fa-info-circle"></i> javascript code를 넣고 싶을 때는 아래와 같이 넣으면 

```javascript
{{</*highlight javascript*/>}}
  //@param1: param1입니다.
  //@param2: param2입니다.
  var foo = function(param1, param2) {
    console.log('javascript code');
  }
{{</*/highlight*/>}}
```
**아래와 같이 렌더 된다.**

{{<highlight javascript>}}
  //@param1: param1입니다.
  //@param2: param2입니다.
  var foo = function(param1, param2) {
    console.log('javascript code');
  }
{{</highlight>}}

<i class="fas fa-info-circle"></i> code안에 number line을 넣고 싶으면  

```javascript
{{</*highlight javascript "linenos=inline,linenostart=1"*/>}}
  //@param1: param1입니다.
  //@param2: param2입니다.
  var foo = function(param1, param2) {
    console.log('javascript code');
  }
{{</*/highlight*/>}}
```
**아래와 같이 렌더 된다.**

{{<highlight javascript "linenos=inline">}}
  //@param1: param1입니다.
  //@param2: param2입니다.
  var foo = function(param1, param2) {
    console.log('javascript code');
  }
{{</highlight>}}

<i class="fas fa-info-circle"></i> code안에 특정 넘버와 라인 강조를 하고 싶으면  

```javascript
{{</*highlight javascript "linenos=inline,hl_lines=2,linenostart=10"*/>}}
  //@param1: param1입니다.
  //@param2: param2입니다.
  var foo = function(param1, param2) {
    console.log('javascript code');
  }
{{</*/highlight*/>}}
```
**아래와 같이 10번째 줄 부터 표기되고 2번째 줄이 강조된다.**

{{<highlight javascript "linenos=inline,hl_lines=2,linenostart=10">}}
  //@param1: param1입니다.
  //@param2: param2입니다.
  var foo = function(param1, param2) {
    console.log('javascript code');
  }
{{</highlight>}}

## 페이지 생성방법
---
#### <span style="color:blue">_Menu Depth_</span>

**메뉴는 2Depth로 만든다.**

![img](/documents/images/menuDepth.png)

- Depth1은 큰 Subject의 대한 주제르 가져간다.
- Depth2는 해당 주제의 Sub Subject를 가져간다.

#### <span style="color:blue">_페이지 만드는 방법_</span>

타 페이지의 복사붙여 넣기도 되지만 command line으로 페이지를 만들도록 한다.

페이지 명칭은 기본적으로 소문자로작성하며 해당명칭이 복합어일 경우 **kebab-case** 혹은 형태로 통일한다.

```
//ex : documents의 추가 페이지 만들때

hugu new documents/추가페이지명.md

```

```
//ex : documents와 같은 Depth의 Subject 추가시

hugu new documents/other-subject/_index.md

```

이 때 _index.md는 해당 subject의 기본 페이지가 된다.

#### <span style="color:blue">_Front Matter_</span>

Front Matter는 해당 페이지의 Meta 정보이다. 현 도움말 사이트의 기본 메타정보는 아래와 같다.

```
---
//ex) title: 도움말 사이트 문서 작성방법
//Definition : 해당페이지의 문서 타이틀
title: {{ replace .Name "-" " " | title }}

//ex) linktitle: Ways to Document v1.0
//Definition : 해당 페이지가 메뉴 위치에서 갖는 명칭
linktitle: {{ replace .Name "-" " " | title }}

//ex) description: 도움말 사이트의 문서 작성 방법의 표준 v1.0
//Definition : 각 Depth1의 _index.md 상에서 보여지게 될 페이지 설명
description: {{ replace .Name "-" " " | title }}

//ex) weight: 2
//Definition : 해당 페이지가 메뉴 위치상에서 갖는 순서
// Depth1은 각각의 Depth1 끼리의 1,2,...,N 순서대로 정보를 가지고 순서가 정해진다.
// Depth2는 각 상의 Depth1의 자식 페이지로서 각 아래 예제대로 진행하면된다.
// ex) Depth1이 1 인경우 Depth2는 101, 102, 103,...1NN 순서로 진행된다. 
// ex) Depth1이 2 인경우 Depth2는 201, 202, 203,...2NN 순서로 진행된다. 
weight: 201

//ex) disableToc: false
//Definition : 
// Depth2만 true로 입력한다. 각 메뉴 상단의 breadcrumb의 페이지 카테고리 리스트 아이콘에 마우스 오버시 리스트 정보를 보여준다.
// Depth1은 무조건 false!!!! 
disableToc: true

//ex) draft: false
//Definition : 값이 fasle시에 hugo server -D 했을 때에만 해당페이지가 화면에 노출됨.
// 배포하거나 hugo server 라는 명령때에는 화면이 노출이 되지 않음.
// 아직 완료되지 않은 경우에는 false로 해놓고 작업한다.  
draft: true

//ex) date: 2019-11-02T16:20:24+09:00
date: {{ .Date }}
---
```

총 7개의 메타정보를 기본적으로 가지고 있으며 아래 태그는 Depth2의 해당하는 페이지에만 추가로 작성하는 optional 메타정보이다.

```
tags: [way to document]
```
tags 메타정보는 페이지의 태깅기능을 해주며 무조건 Depth2 화면에만 추가한다. 

추가시 도움말 사이트 초기화면에 노출이 되고 클릭시 해당 태그가 노출되있는 화면 리스트로 연결된다.

## API 작성법
---
#### <span style="color:blue">_주석_</span>

메서드의 대한 정보를 입력시 항상 주석정보를 포함시킨다.

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

exampleMethod(param1, param2)
{{</highlight>}}

변수나 프로퍼티의 대한 정보를 입려시 항상 주석정보를 포함시킨다.

```
/*
 * Definition
 * @return {타입} : 정보도 적으면 좋음.
*/
exampleVariable
```

#### <span style="color:blue">_사용처 구분_</span>

일반적으로 `_`가 붙은 해당 **_내부페이지_** 에만 사용되는 변수나 함수들은 문서 api에 기입하실 필요 없습니다.  
해당 private한 부분들은 내부 소스만 보고서도 분석이 가능하다고 판단합니다. 

- 크게 BIZ, TA로 구분하는데 **BIZ의 경우**는 따로 구분값을 적을 필요 없음.

- 기술팀 내부에서 사용하는 부분의 경우만 **`[TA]`**라고 옆에 표기해 주시면 됩니다.

|상황|사용 예|비고|
|---|---|---|
|mixin이나 service **전체가 내부 목적**에 해당하는 경우<br>아래 그림과 같이 표기해줍니다.| familytree-contextmenu-mixin |![img](/documents/images/waytodocument1.png?width=600px)|
|mixin이나 service **전체가 BIZ에 제공**되는 경우<br> 아래 그림과 같이 표기해줍니다.| familytree-contextmenu-mixin |![img](/documents/images/waytodocument3.png?width=600px)|
|mixin이나 service **일부**가 BIZ 에 제공되는 경우<br> 아래 그림과 같이 표기해줍니다.| familytree-contextmenu-mixin |![img](/documents/images/waytodocument2.png?width=600px)|
|familytree-contextmenu-mixin [ta] 링크 걸때 | /chis/chis-mixins/#familytree-contextmenu-mixin-ta |![img](/documents/images/waytodocument4.png?width=600px)|

## 이미지 추가
---

- 이미지의 추가는 각 사용처 Depth1에 해당하는 **Subject/images** 폴더에 아래에 이미지를 넣는다. 추가로 생성한 Depth1의 경우는 images 폴더를 생성한 후 추가한다.

- 초기화면에 사용되어야 하거나 전역적으로 사용하는 이미지는 **static/images** 폴더 아래에 위치시킨다.

- 두군데 이상의 Depth에서 사용되는 이미지의 경우 주가되는 곳에 넣고 다른 곳에서는 해당 경로를 참조한다.