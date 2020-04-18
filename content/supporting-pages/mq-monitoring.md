---
title: Message Queue Monitoring
linktitle: MQ Monitoring
description: Message Queue Monitoring의 사용법과 기능을 제공하는 문서입니다.
weight: 501
disableToc: false
draft: false
date: 2019-11-08T09:01:57+09:00
tags: [MQ Monitoring]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-engine) 로 이동

현재 개발기는 0.9.43-A 로 아래설명과 같은 기능이 있구요.
스테이징 운영기는 0.9.43으로 재송수신, 삭제 등 기존 기능만 있는 앞에 4개 탭만이 있습니다.

수신부로그, 송신부로그, 아카이브수신부로그, 아카이브송신부로그, 메시징 관리자 기능 페이지 총 5가지의 화면으로 구성되어 있습니다.

- 수신부로그 : 수신로그기준하면으로 조회를 통해 **메세지로그의 수신상태 확인**을 목적으로 합니다.
- 송신부로그 : 송신로그기준하면으로 조회를 통해 **메세지로그의 송신상태 확인**을 목적으로 합니다.
- 아카이브수신부로그 : **아카이브된 수신부**로그 리스트를 확인합니다.  
- 아카이브송신부로그 : **아카이브된 송신부**로그 리스트를 확인합니다.  
- 메시징 관리자 기능 : 해당화면은 **병원의** 메세징 처리 관련 관리자 기능입니다. 현재는 도메인별 만료된 재처리 카운트 초기화 기능만 있습니다.  
  **도메인별 만료된 재처리 카운트**는 도메인에서 송수신한 모든 메시지의 만료된 재처리 카운트를 일괄적으로 초기화 하는 기능입니다.  

  <i class="fas fa-info-circle"></i>**재처리 카운트** : 미완료 된 메시지는 Job Scheduler에 의해 주기적으로 처리가 재시도되며, 정해진 최대 재시도 횟수만큼 반복됨. 재처리 카운트는 재시도 된 횟수를 의미함.

## 화면
---

#### <span style="color:blue">_수신부로그 화면_</span>
![img](/supporting-pages/images/mqnew_1.png?width=800px)

#### <span style="color:blue">_수신부로그 화면에 따른 기능설명_</span>
| 구분 | 명칭 | 설명 | 비고 |
|-----|-----|-----|-----|
| 1 | 검색조건 | 필수검색조건 | - 기존 그룹ID는 제거<br>- 수신부의 한해 현재 SEQ조회가 있음.<br>- SEQ 조회시 다른 조건은 무시됨.<br>- 초기화버튼은 최초 디폴트조건으로 조건 초기화해줌 |
| 2 | 기간필터 | 기간필터 정보는 디폴터로 1일전으로 세팅되어 있음 | - 아카이브의 경우 10일 이전까지만 조회가능하도록 설정됨<br>- dashboard에서 보이는 시간은 모두 로컬시간으로 보임.<br>- 내부적으로 조회할때는 utc시간으로 변환되서 조회가 됨<br>-즉 실제 조회되는 시간은 화면에 보이는 시간에서 9시간을 뺀 utc시간임.<br>- 특정 사용자에 따라 조회시간이 00:00 혹은 24:00으로 보였겠지만 내부적으로는 모두 동일한 시간 [참고링크](http://viewer.c-his.com/development/i18n/#javascript-intl의-format-옵션).<br>- 현재는 모두 00:00로 보이도록 i18n-service 내부로직 수정. |
| 3 | 조회 해당 페이지 이벤트 필터기능 | 여러 이벤트명이 한 페이지에 조회된 경우 이벤트명을 필터링하여 로그 출력 | |
| 4 | 처리기능 | 옵션에 따른 처리기능 | 탭에따라 처리기능이 몇가지 추가됨.<br><br>**[수신부]**<br>- 재수신 : 기존과 동일, Completed 된 메세지 재수신 안됨.<br>- 삭제: 기존과 동일<br>- 재처리카운트초기화: 항목의 (만료된) 재처리 카운트를 0으로 다시 초기화 해줌.<br>- 강제완료: Completed가 아닌 수신부 메세지를 강제로 Completed 처리해줌. |
| 5 | 컨텐츠정보 복사 | 그리드 셀정보 및, 송신부 JSON, 에러, 사용자순서키정보 컨텐츠 복사 | |
| 6 | 수신부그리드시간정보 | 수신, 최종수신, 보류, 완료, 큐처리시간 |- 수신일시: 최초수신일시<br>- 최종수신일시: 최종수신일시<br>- 보류일시: 상위로그가 진행이 되지 않아 중단된 일시 <br>- 완료일시: 수신완료일시<br>- 큐처리시간: 완료일시 - 수신일시  |  
| 7 | 사용자순서키정보 | 추가된 수신로그정보 |- 관련 개념 [링크 참조](/supporting-pages/mq-monitoring/#span-style-color-blue-순서키정보란-span)<br>- 클릭시 우측 사용자순서키정보 탭에 정보 출려됨. |  
| 8 | 완료, 미완료 아이콘 | 완료, 미완료 정보 툴팁제공 | |  
| 9 | 송신부 Body | 송신부 Body 정보임. edit기능 있음.| 재송수신시 수정 Body 부분 1)저장후, 2)로그 재조회, 3)재송수신해야함.|
| 10 | 에러 | 각 로그의 에러에 Y버튼을 클릭 | 해당로그의 에러정보를 보여줌. 좌측상단에 "로그명칭" 있음 |
| 11 | 사용자순서키정보 | 각 로그의 순서키정보의 정보버튼을 클릭  | 해당 순서로그의 사용자순서키를 보여줌|
| 12 | 송신부 Body 수정버튼 | Body 수정시 edit선택 | 수정후 저장해야 수정완료됨. |

수신상태가 Completed가 아닌경우에만 재수신이 되는데, 상위로그가 먼저 수신되지 않는다면 하위로그에서 아무리 재수신을 해도 suspended 가 된다. 

#### <span style="color:blue">_수신부로그 미완료 조치사항 방법_</span>

1) 수신부로그의 미완료부분을 선택한 상태에서 조회  
2) 멀티체크박스에 전체를 선택  
3) 선택항목재수신 버튼 클릭   
4) 재조회 

이렇게 되면 먼저수신되어야할 것 부터 차례대로 수신이 진행이 되어 문제가 해결된다. 

코드 에러가 발생해서 수신이 미완료 된경우는 소스 재배포 이후 재수신을 진행해야한다.

#### <span style="color:blue">_순서키정보란?_</span>

순서키정보는 수신메세지의 상위로그의 순서정보를 담은 컨텐츠이다.  
순서키의 대한 정보는 업무도메인에서 제어를 하며 이것을 통해 message queue는 순서를 제어하게 된다. 

<i class="fas fa-info-circle"></i> **순서키 정보 예시**

아래 순서키정보는 seq.가 **200024081111**번의 수신부로그메세지가 가지고 있는 정보라고 가정한다.

{{<highlight javascript>}}
[
  0:{
    subscriberdomain: tutorials
    eventtypename: todoevent
    sequencekey: orderid
    sequencevalue: 202002023
  },
  1:{
    subscriberdomain: tutorials
    eventtypename: todoevent
    sequencekey: number
    sequencevalue: null
  },
  2:{
    subscriberdomain: tutorials
    eventtypename: todoevent2
    sequencekey: orderid
    sequencevalue: null
  }.
  3:{
    subscriberdomain: tutorials
    eventtypename: todoevent3
    sequencekey: orderid
    sequencevalue: 202002023
  },
  4:{
    subscriberdomain: tutorials
    eventtypename: todoevent3
    sequencekey: orderid
    sequencevalue: xxxx
  }
]
{{</highlight>}}

위의 순서키 정보 해석하면 일단,

**1) 200024081111 수신메세지 로그는 5개의 순서키 정보를 가지고 있다.**  
**2) 이 5개의 순서키정보는 미완료된 상위 메시지를 조회하기 위한 조건 정보이다.**  
**3) eventtypename을 기준으로 볼때, todoevent, todoevent2, todoevent3 이렇게 새개의 묶음으로 나뉘어지고 이 묶음들은 각각 `or`의 조건으로 순서를 제어한다.**

<i class="fas fa-info-circle"></i> 예제 결론!!!!

**200024081111 메세지 로그**는 

sequencekey가 orderid, sequencevalue 202002023 `and` sequencekey number를 가지는 todoevent

`or`

sequencekey가 orderid를 가지는 todoevent2

`or`

sequencekey가 orderid, sequencevalue 202002023 `or` xxxx 를 가지는 todoevent3

조건에 해당하는 상위 메시지보다 **<span class='colored2'>먼저 실행되서는 안된다.</span>**



#### <span style="color:blue">_송신부로그_</span>
![img](/supporting-pages/images/mqnew_2.png?width=800px)

| 구분 | 명칭 | 설명 | 비고 |
|-----|-----|-----|-----|
| 13 | 처리기능 | 옵션에 따른 처리기능 | 탭에따라 처리기능이 몇가지 추가됨.<br><br>**[송신부]**<br>- 재송신 : Sent 된 메세지도 재송신 가능. 다만, 수신부에서 이미 완료(Completed)가 된 경우, 재수신되지는 않음.<br>- 삭제: 기존과 동일<br>- 재처리카운트초기화: 항목의 (만료된) 재처리 카운트를 0으로 다시 초기화 해줌.<br>- 강제완료: Completed가 아닌 수신부 메세지를 강제로 Completed 처리해줌..<br>- 재송신 타멧 도메인: 타겟도메인을 지정하면 지정된 도메인에만 재송신됨. 지정하지 않을경우 전체 도메인에 재송신됨. | 
| 14 | 구독자수, 수신자수 카운트 | - 구독자수: 토탈구독자수<br>- 수신자수: 구독중 수신하고있는 도메인수<br>- 미수신/아카이브수: 구독도메인이지만 수신하지 않거나 이미완료되어 아카이브된 수<br> - 미완료수: 수신자수에 포함된 도메인으로 수신을 했지만 아직완료못한 도메인 | 토탈수체크는 구독자수 = 수신자수 + 미수신/아카이브수 입니다.<br> 수신자수가 구독자수보다 많은경우는 구독자에 포함되있던 도메인이 더이상 구독하지 않는경우에 발생.|

#### <span style="color:blue">_아카이브송신,수신부 로그_</span>

- 기능은 기존 송수신부 로그와 동일하며 재송수신 기능, 삭제, 송신부 body 수정 및 저장 기능이 없음.
- 디폴트 조회기간이 10일이전부터임.

#### <span style="color:blue">_메시징 관리자 기능_</span>

![img](/supporting-pages/images/mqnew5.png?width=800px)

| 구분 | 명칭 | 설명 | 비고 |
|-----|-----|-----|-----|
| 15 | 처리기능 | 만료재처리카운트 초기화 | **[메시징 관리자 기능]**<br>- 만료재처리 카운트 초기화 : **도메인별 만료재처리 카운트**는 도메인에서 송수신한 모든 메시지의 만료된 재처리 카운트를 일괄적으로 초기화 | 

![img](/supporting-pages/images/mqnew6.png?width=800px)

![img](/supporting-pages/images/mqnew7.png?width=800px)

| 구분 | 명칭 | 설명 | 비고 |
|-----|-----|-----|-----|
| 16 | 처리기능 | 활성화 | **[메시징 관리자 기능]**<br>- 활성화 : **모든병원적용!! 선택된 이벤트타입과 도메인의 메세지 송신과 수신을 다시 활성화함.** <br>- 선택된 도메인이 없는경우 해당 이벤트를 구독한 모든 도메인에 적용됨. | 
| 17 | 처리기능 | 비활성화 | **[메시징 관리자 기능]**<br>- 비활성화 : **모든병원적용!! 선택된 이벤트타입과 도메인의 메세지 송신과 수신을 일시중단함.** <br>- 선택된 도메인이 없는경우 해당 이벤트를 구독한 모든 도메인에 적용됨. |

이벤트타입리스트는 도메인과 이벤트가 검색조건에 없을 때 전체조회가 된다. 이때의 조회결과에는 구독도메인, 구독여부, 활성여부, 구독시작일시 등의 정보가 모두 없다.  

활성화, 비활성화는 모든병원에 적용되기 때문에 신중하게 사용해야한다.

활성화, 비활성화 처리를 할 경우 비구독중인 도메인의 경우에는 해당처리가 적용이 되지 않는다. 
