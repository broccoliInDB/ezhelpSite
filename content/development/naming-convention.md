---
title: Naming
linktitle: Naming
description: CHIS Naming 관련 문서입니다.
weight: 301
disableToc: false
draft: false
date: 2019-10-28T09:48:59+09:00
tags: [naming]
---

## 1. Naming Definition
---
CHIS 시스템 개발 시 사용할 코드 및 네임스페이스는 아래와 같이 정의한다.

#### <span style="color:blue">_Overview_</span>
{{% notice note %}}
○ **프로젝트 명칭 : <scan class='colored2'>CHIS</scan>**    
○ **업무코드 : <scan class='colored2'>FR, CO, ...</scan>** 업무분류에 따른 업무코드  
○ **클래스 네임스페이스 :  <scan class='colored2'>CHIS.업무코드.상위단위업무.(추가하위단위업무)클래스</scan>**     
○ **Framework / 공통업무 제공 컴포넌트 및 헬퍼 <scan class='colored2'>fr-, co-, c-</scan>** prefix  
○ **Framework / 공통업무 제공 서비스 유틸리티 ````fr_````, ````co_````** prefix  
○ **private 메서드 : <scan class='colored2'>_</scan>**  prefix  
○ **사용자 이벤트 핸들러 : <scan class='colored2'>on~</scan>**  prefix  
○ **Action 위임(전달)을 위한 속성 : <scan class='colored2'>CB</scan>**  suffix  
○ **업무 engine 명 : <scan class='colored2'>업무도메인소문자-engine</scan>**     
○ **업무 module 명 : <scan class='colored2'>업무도메인소문자-module</scan>**   
{{% /notice %}}

#### <span style="color:blue">_프로젝트 명칭_</span>
  - Frontend 내에서 사용할 Cloud HIS 프로젝트 코드(약어) : ````CHIS````

#### <span style="color:blue">_업무코드_</span> 
  - **_FR_** : Framework  
  - **_CO_** : Common
  - 대소문자는 사용차에 따라 달라짐.  
  <i class="fas fa-exclamation-triangle chis-exclamation"></i><span style="color: red"> _공통/프레임워크를 제외한 업무 도메인은 별도 규칙에 따라 정의됨_ </span>

#### <span style="color:blue">_클래스 네임스페이스_</span> 
  - <span class="colored2">CHIS.업무코드.상위단위업무.(추가하위단위업무)클래스</span>
  
```bash
ex)
CHIS.FR.Core : Base 클래스 제공
CHIS.FR.CrossCutting : 업무 전역에 적용될 서비스/유틸리티 등 제공
CHIS.FR.Control : UI Control 제공
```  
  > 특별한 경우를 제외하고, CHIS Framework 내에서만 Namespace 정의할 필요 있을 것으로 예상함. 업무 내에서 Class 정의 시 별도 Namespace 생성 없이 진행, 업무 간에 Class 정의를 공유할 필요 없을 것으로 예상. 따라서 위의 네임스페이스 구조를 가진 Full Name 정의는 Framework 내부에서만 필요하고, 업무 프로젝트 내에서는 Framework의 Class를 import 사용하는 경우(주로 상속을 받는 경우)를 제외하고는 Full Name을 사용할 필요가 없음.
  
#### <span style="color:blue">_Prefix & Suffix_</span> 
  - **_fr_**: Framework에서 제공할때 사용하는 prefix
  - **_co_**: 공통업무 프로젝트에서 제공할때 사용하는 prefix
  - **Framework / 공통업무 제공 컴포넌트 및 헬퍼 <span class="colored2">fr-, co-, c</span>**  
    ```bash
    ex)
    c-button
    fr-format-date 
    ```
  - **Framework / 공통업무 제공 서비스 유틸리티 ````fr_````, ````co_````**   

    ```bash
    ex)
    co_CommonService  
    fr_UploadHelperService   
    ```
#### <span style="color:blue">_private 메서드_</span> 
  해당 파일 내부에서만 사용하는 메서드 명 앞에 ````_```` underscore를 붙인다.
  ```bash
  ex)
  _privateMethod()  
  ``` 
#### <span style="color:blue">_사용자 이벤트 핸들러_</span>  
  사용자 이벤트를 처리하는 핸들러 메서드는 앞에 on을 붙인다. : ````on~````
  ```bash
  ex)
  onButtonClick()  
  ```  
#### <span style="color:blue">_Action 위임(전달)을 위한 속성_</span>  
  상위로 Action을 전달(위임) 하기 위한 속성 이름은 Action명 뒤에 CB를 붙여 정의한다. ````~CB````  
  ```bash
  ex)
  changeOptionCB()  
  ```  
#### <span style="color:blue">_업무 engine, module 명_</span>  
  - **업무 engine 명 : <span class="colored2">업무도메인소문자-engine</span>**  
  - **업무 module 명 : <span class="colored2">업무도메인소문자-module</span>**  
  <i class="fas fa-exclamation-triangle chis-exclamation"></i><span style="color: red"> _CHIS Blueprint를 이용하면 engine, module 생성시 자동으로 위의 업무-engine, 업무-module로 명칭이 생성된다._ </span>

## 2. Naming Convention
---

#### <span style="color:blue">_Overview_</span>
{{% notice note %}}
○ **네임스페이스, 클래스 변수 : <scan class='colored2'>PascalCase</scan>**  
○ **Ember 요소(파일/디렉토리) : <scan class='colored2'>kebab-case</scan>**  
○ **변수, 속성, 함수 : <scan class='colored2'>camelCase</scan>**  
○ **사용자 이벤트 핸들러 메서드 명명 <scan class='colored2'>on + HTML요소식별자 + 이벤트종류</scan>**  
○ **Action 위임(전달)을 위한 속성명명 : <scan class='colored2'>Action명 + CB/scan>**  
○ **1탭 간격은 : <scan class='colored2'>space 2자리/scan>**    
○ **<scan class='colored2'>Eslint/scan>의 기본 규칙과 <scan class='colored2'>CHIS custom 규칙/scan> 준수**
{{% /notice %}}

#### <span style="color:blue">_공통 네이밍 규칙_</span> 
  - 일반적으로 단어를 생략하거나 **약어를 사용하지 않는다.** 
    <i class="fas fa-exclamation-triangle chis-exclamation"></i><span style="color: red"> 단, HTML,URL 등과 같은 범용적인 약어는 사용할 수 있다. **약어 사용시에는 모두 대문자**로 작성한다. </span>
  - 한글 발음을 **로마자로 표기하지 않는다.**
  - 일반적으로 **특수 문자는 사용하지 않는다.** 
    <i class="fas fa-exclamation-triangle chis-exclamation"></i><span style="color: red"> 단, 상수이름에서 단어구분이나 Private 지시자 표시를 위하여 **언더스코어(_)**를 사용한다.</span>
  - 2글자 이상 대문자를 연속해서 사용하지 않는다. 
    <i class="fas fa-exclamation-triangle chis-exclamation"></i><span style="color: red"> 단, **상수 이름이나 약어는 예외로 한다.** </span>
  - 상수 이름이나 약어 이름을 **대문자를 사용**한다.
  - 이름을 통해 역할과 목적을 할 수 있도록 **간결하고 명료**하게 작성한다.
  - **단일 문자로 명명금지.**

#### <span style="color:blue">_네임스페이스와 클래스 변수 정의:_</span>**<span class="colored2">PascalCase</span>**
  - 필요한 경우 클래스 변수 이름에 해당 클래스의 타입을 알 수 있도록 제공한다.

#### <span style="color:blue">_Ember 요소(파일/ 디렉토리)_</span>: </span>**<span class="colored2">kebab-case</span>**
  - Ember g 명령을 통해 생성하는 모든 요소(라우트/컴포넌트/서비스/템플릿 등)의 이름은 **kebab-case**를 따른다.
  - 개발자에 의해 **임의로 생성하는 파일/폴더도 kebab-case**에 따라야 한다.
  - 특히 Service와 Mixin Ember 요소 이름 뒤에 **-service, -mixin** 접미사를 붙인다.

#### <span style="color:blue">_변수, 속성, 함수, 모듈:_</span>**<span class="colored2">camelCase</span>**
  - **일반 변수 & 속성 이름**
    - 변수 이름은 명사를 사용하여 작성한다
    - 객체내에서 사용하는 private 영역 속성일 경우 변수 이름 앞에 **언더스코어(_)** 를 사용한다. 함수 내의 지역변수는 해당하지 않는다.
    - 변수 이름의 첫 글자로 **연속된 두 개의 언더스코어(_) 기호와 달러 기호($)는 사용하지 않는다.**
    - 변수 이름은 한 글자 이상으로 사용 의도를 충분히 알 수 있을 만큼 간결하고 명확하게 작성한다. <i class="fas fa-exclamation-triangle chis-exclamation"></i><span style="color: red">단, 임시 변수는 한 글자 이름을 사용할 수 있다.</span>

  - **일반 메서드(또는 Action) 명명 : <span class="colored2">동사 + 명사</span>**
    - **동사 선택** : **아래의 동사를 기본적으로 사용**하고, 그 외의 의미에 대해서는 적절한 동사를 선택 사용한다.
      - 가져오다: **_get_**
      - 추가하다 : **_add_**
      - 삭제하다 : **_delete_**
      - 변경하다 : **_update_**
      - 검색하다 : **_search_**
    
    - **명사 선택** : 작업이 모델에 대한 것일 경우, 모델명을 그대로 사용하고, 그렇지 않을 경우 적절한 명사를 선택 사용한다. 복수 개의 모델에 대한 것일 경우 **<span class="colored2">모델명+List</span>** 로 명명한다.
      - 단일 건 조회 : **_get+모델명_**
      - 여러 건 조회 : **_get+모델명+List_**
    
    ```
    ex)
    getUser()
    searchPatientList()
    updateDoctor()
    ```

  - **사용자 이벤트 핸들러 메서드 명명** : **<span class="colored2">on + HTML요소식별자 + 이벤트종류</span>**
    - HTML 요소 식별자 : 화면 내에서 해당 **요소를 유일하게 식별할 수 있는 값** 사용
    - 이벤트 종류 : HTML DOM **이벤트 이름 그대로 사용**

    ```
    ex)
    onButtonClick
    onChangePatientDoubleClick
    onOptionMouseEnter
    ```

  - **Action 위임(전달)을 위한 속성 명명** : **<span class="colored2">Action명 + CB</span>**

    ```
    ex)
   {{child-component 
     selectedOption=selectedOption 
     value='option1' 
     changeOptionCB=(action 'changeOption') 
    }}
    ```

#### <span style="color:blue">_코드 작성/편집 규칙_</span>
  - 들여쓰기는 1탭 간격을 사용한다. **1탭 간격은 space 2자리**이다.
  - 코드 작성 규칙은 CHIS의 Front-End 용 정적 분석 도구로 채택된 Eslint의 기본 규칙과 CHIS 용 커스텀 규칙 규칙을 그대로 따른다. 
  //참조경로 뿌리자

#### <span style="color:blue">_주석 작성_</span>
  - 각 함수나 모듈은 jsdoc-tookit 의 형식을 참고하여 함수의 역할, 인자와 반환값에 대한 주석을 표기한다
  - 소스 코드가 길어지는 경우 함수 중간에도 주석을 추가하여 협업하는 개발자들을 배려한다.
  - //jsdoc-tookit snitpet 만들기