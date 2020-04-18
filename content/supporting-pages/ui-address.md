---
title: 주소 검색 화면
linktitle: 주소 검색 화면
description: 주소 검색 화면의 기능과 사용법을 제공하는 문서입니다.
weight: 503
disableToc: false
draft: false
date: 2019-11-08T09:02:21+09:00
tags: [주소 검색 화면]
---
[<i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-ui) 로 이동

대한민국의 우편번호 및 주소 조회를 할 수 있습니다.

## 기능
---

- 한국의 우편번호 및 주소 조회 기능
- 행정안전부의 open api서비스를 사용함.
  - 혹시 모를 서비스 중단사태를 대비한 **직접입력** 기능 제공함
- 3가지의 옵션을 제공
  - 지번 + 도로명
  - 영문 + 도로명
  - 도로명 주소 

## 화면
---

#### <span style="color:blue">_전체 화면_</span>
![img](/supporting-pages/images/uiAddress.png)

#### <span style="color:blue">_사용법 설명_</span>

| 구분 | 명칭 | 설명 | 비고 |
|-----|-----|-----|-----|
| 1 | 주소검색창 | 아래 검색어 예와 같이 구체적인 검색어를 입력해야함 | 조회건수가 1000건이 넘는경우 토스트 메세지 로드 됨 |
| 2 | 검색옵션 | - | - |
| 3 | 직접입력 체크박스 | 서비스가 동작하지 않을 경우 사용 |- |
| 4 | 주소 선택 | 클릭시 주소검색 결과 데이터 바인딩하는 콜백 호출됨 |- |

#### <span style="color:blue">_메세지_</span>

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

## 구현
---
popup으로 구현할 경우 popup컨트롤을 block해서 내부에 구현해 주면 됨. 

#### <span style="color:blue">_샘플 코드_</span>

<span class="path">handlebars</span>
<br>
{{<highlight handlebars>}}
{{ui-address/main-popup
  stateId='__chisstateid__'
  //"해당 callback을 통해 주소 정보 결과 얻음."
  fetchAddressCB=(action 'onTest')
}}
{{</highlight>}}

<span class="path">javascript</span>
<br>
{{<highlight javascript>}}
actions: {
  onTest(test){
    //콘솔창으로 주소관련 정보가 출력됨을 확인할 수 있음.
    console.log(test); 
    }
},
{{</highlight>}}

#### <span style="color:blue">_Callback params_</span>

|출력변수명|타입|설명|비고|추가여부|행안부출력변수명|
|---|---|---|---|---|---|
|zipCode|string|우편번호|-|-|zipCode|
|addrRoad|string|도로명주소|-|-|addrRoad|
|addrJibun|string|지번주소|-|-|addrJibun|
|addrEng|string|영문주소|-|-|addrEng|
|addrDetail|string|상세주소|-|추가 프로퍼티|-|
|addrOpt|string|선택옵션|R: 도로<br>J: 지번<br>E: 영문<br>X: 직접입력|추가 프로퍼티|-|
|addrDate|date Object|날짜정보|-|추가 프로퍼티|-|
|addrWritten|string|직접입력한 주소|-|추가 프로퍼티|-|

```
//예시

addrDate: 2019-11-07 16:20:06 {isDST: false}
addrDetail: "상세주소내용"
addrEng: "337, Toegye-ro, Jung-gu, Seoul"
addrJibun: "서울특별시 중구 광희동2가 73 토요코인 동대문운동장"
addrOpt: "E"
addrRoad: "서울특별시 중구 퇴계로 337 (광희동2가)"
addrWritten: ""
zipCode: "04565"
```
