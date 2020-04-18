---
title: Job Scheduler
linktitle: Job Scheduler
description: Job Scheduler의 사용법과 기능을 제공하는 문서입니다.
weight: 502
disableToc: false
draft: false
date: 2019-11-08T09:02:08+09:00
tags: [Job Scheduler]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-engine) 로 이동

스케줄링이 필요한 Job을 병원별로 등록 및 삭제할 수 있고, Job 실행 히스토리를 확인 할 수 있습니다.

## 기능
---

- Master , Details 의 Job을 생성, 수정 및 삭제가 가능함.
  - **Master**는 테넌트의 관계없이 말그대로 마스터적인 Job 스케줄을 의미함.  
  - **Details**는 병원에 종속된 Job 스케줄을 의미함.
- Monitoring 페이지를 통해 스케줄링 Job이 제대로 실행되어 성공했는지 상태 여부를 확인 할 수 있음.
- Master Job 정보와 Details Job 정보의 <i class="fas fa-exclamation-triangle chis-exclamation"></i> **크론값이 다른경우** **우선권은 Details Job이 가지고 있으며** 해당 크론 값이 비어있는 경우 Master Job의 크론값으로 실행이 된다.
- Master와 Details의 Enable이 모두 True 인 경우에만 실행이 된다.
- Details 그리드 항목에 **우클릭시** 보이는 **즉시실행** 버튼은 Enable 여부 Cron 값에 관계없이 즉시 1회 실행이 된다.  

## 화면
---

#### <span style="color:blue">_Management 화면_</span>
![img](/supporting-pages/images/jobscheduler.png)

#### <span style="color:blue">_Management 사용법 설명_</span>

| 구분 | 명칭 | 설명 | 비고 |
|-----|-----|-----|-----|
| 1 | Owner Domain | Job Scheduler Master 리스트 조회 조건 | Default : All Domain |
| 2 | Job Name Copy | Job 명칭 복사 기능 | Monitoring 검색 조건에 사용할 때 복사 용도 |
| 3 | Job Scheduler Master / Details 선택항목 삭제 기능 | 멀티 삭제 제공 안함, 삭제시 하위 Details Job도 삭제 됨. | |
| 4 | Job Scheduler Master / Details 선택항목 수정 기능 | 생성된 Job의 정보 수정 | 생성창과 동일한 팝업 화면 |
| 5 | Job Scheduler Master / Details 선택항목 생성 기능 | 생성된 Job의 정보 생성 | 수정창과 동일한 팝업 화면 |
| 6 | Enable | 동작여부 설정 | Master와 Details의 항목이 모두 true일 때 스케줄 동작함 |
| 7 | 즉시실행 | 1회성 즉시실행 | Enable, cron에 관계없이 1회 즉시 실행됨. |

#### <span style="color:blue">_Modify & Create 화면_</span>
![img](/supporting-pages/images/jobscheduler2.png)

#### <span style="color:blue">_Modify & Create 사용법 설명_</span>
| 구분 | 명칭 | 설명 | 비고 |
|-----|-----|-----|-----|
| 8 | Details Auto Creation | Master Job 생성시 하위 병원에 동일한 Job이 자동으로 생성 | - 현재 하위 병원의 Timezone 정보가 등록되어 있지 않음.<br>- 병원 생성시 타임존 정보 등록관련 로직의 담당자 정해지지 않아 구현되어 있지 않음.<br>- 현재 선택해제 후 Master Job 생성해야 Timezone 에러 발생 안함. |
| 9 | Job Name | Job 생성 필수 정보 | |
| 10 | Owner Domain | Job 생성 필수 정보 | |
| 11 | Generator | Cron 생성화면 open | |
| 12 | Cron Expression Input box | - 상단의 Cron 생성 옵션에 따라 자동으로 바인딩됨<br>- 수기로 입력 가능함 | |
| 13 | Analysis | 설정된 Cron Expression에 따라 예정 일시정보 하단 textarea에 출력 | |
| 14 | Select | 선택하면 좌측 Cron Input Box에 설정한 Cron 값 바인딩 됨 | |
| 15 | Schedule Expected Date | 출력 Plan일시를 설정하여 예상 스케줄일시 확인 가능 | |
| 16 | Schedule Expected Date Count | Plan일시의 출력 카운트를 설정할 수 있음 | |

#### <span style="color:blue">_Monitoring 화면_</span>
![img](/supporting-pages/images/jobscheduler3.png)

#### <span style="color:blue">_Monitoring 사용법 설명_</span>

| 구분 | 명칭 | 설명 | 비고 |
|-----|-----|-----|-----|
| 17 | Search Condition | 필수 검색 조건 | Fail-Filter의 경우 체크해제시 완료된 목록도 조회 됨. |
| 18 | Job Name, Tenant ID, Hospital ID, Domain, Context | 검색 필터 조건 | |
| 19 | 정보 복사 버튼 | 정보 복사 기능 | |
| 20 | Copy | 하단 Monitoring History에 우측 마우스 클릭시 data1~6의 정보를 복사 할 수 있음 | |