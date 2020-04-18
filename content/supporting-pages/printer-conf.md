---
title: 개인별 프린터 설정
linktitle: 개인별 프린터 설정
description: 개인별 프린터 설정 관련 문서입니다.
weight: 507
disableToc: false
draft: false
date: 2019-12-10T15:16:12+09:00
---

개인별 프린터 설정값 저장 화면 사용법 및 관련 내용의 대한 문서입니다.

**프린터 리스트를 조회해오기 위해서는 Live Update**의 설치가 필수입니다!!!!!!!!!! 

현재 프린터 설정값 저장은 
 
  - Radiology, Pathology, Blood, Laboratory, Billing, Pharmacy, Clinic, Inpatient, Outpatient
  
의 대한 콤보항목만 있고 이 리스트를 조회하는 api는 없기 때문에 하드코딩되어 있는 상황입니다. 

- 개인 피씨의 IP 혹은 MAC Address를 조회하여 해당 피씨의 해당 로그인 사용자가 설정한 값이 있는경우 해당 값을 조회함  
- 그 외의 경우는 각 업무파트가 각 파트에서 등록한 프린터리스트 마스터항목을 조회해온다. 

## 마스터항목 조회
---

<i class="fas fa-info-circle"></i> **프린터 마스터 항목이 필요한 파트는 아래 포맷에 맞게 데이터를 조회해 오도록 마스터 항목 조회 서비스를 만들어야 한다.** 
```
[
  {
    "printSettingCode": "프린터마스터항목1에 매핑되는 Code",
    "printSettingName": "프린터마스터항목1",
    "printerName": null
  },
  {
    "printSettingCode": "프린터마스터항목2에 매핑되는 Code",
    "printSettingName": "프린터마스터항목2",
    "printerName": null
  }
]
```

## 저장 데이터 조회시
---

CHIS에서 제공된 함수는 

{{<highlight js>}}
/*
 * 프린터설정에서 저장된 데이터 조회방법
 * @param
 *  1.category {string} // 콤보박스 항목 키값 Blood, Pathology, Laboratory, Radiology, Parmarcy, Billing, Clinic, Inpatient, Outpatient 있음.
 *  2.settingType {string} // 현재 `print` 값만 입력되고 있음.
 * @return {object}
*/
this.get('co_PersonalizationService').getPersonalPrinterSetting(category, settingType)
{{</highlight>}}


[technical Swagger](https://integrateddomaintechnicalservice.c-his.com/swagger/index.html) 의 

/operationsupport/pcenvironmentsettingcontroller/v0/pcenvironmentsetting/getpcenvironment 

서비스를 확인하면 아래와 같은 리턴값을 확인할 수 있음.

```
//1. 리턴값
   [
     {
      "id":  //저장시 backend에서 자동 생성됨. guid
      "settingType": // 현재 `print` 값만 입력되고 있음.
      "category": // 콤보박스 항목 키값 Blood, Pathology, Laboratory, Radiology, Parmarcy, Billing, Clinic, Inpatient, Outpatient 있음.
      "settingValue": //개인별설정값인 json정보가 stringfy됨.
      "tenantId": //테넌트 ID
      "hospitalId": //병원 ID
     }
   ]

//2. "settingValue" json 예
   
   "settingValue": 
     "{
       "autoPrintType":null, //영상검사에서만 사용됨. 01: 일반, 02: 라벨프린터
       "defaultLabelPrinter":"OneNote", //default 라벨프린터가 있는경우 사용됨
       //마스터 항목들은 item 프로퍼티에 array 형태로 할당된다.
       "item":
         [
            {
              "printSettingCode":"0001", //마스터항목
              "printSettingName":"교차시험 검체라벨" //마스터항목
              "printerName":"NPI3A1DAA (HP LaserJet 400 M401n)" //마스터항목에 선택한 프린터명 할당된 값
              "labelPrinterName": 일반프린터, 라벨프린터 각각 필요한경우 선택된 라벨프린터명
              "trayName":선택한 트레이명 //트레이가 필요하다면 선택된 트레이 값
              "trayId:":선택한 트레이의 rawkind 값 // 트레이의 키값으로 활용
            }
          ]
      }"
```

## 기본화면
---

#### <span style="color:blue">_프린터 항목 리스트 없을 때_</span>
`영상검사`의 경우 마스터 항목을 가지고 올때 `사번`에 따라 마스터가 있을 수도 없을 수도 있음.

![img](/supporting-pages/images/printconf1.png?width=800px)

#### <span style="color:blue">_프린터 항목 리스트 있을 때_</span>
**마스터 항목**을 가지고 있거나 개인별 프린터 설정값이 이미 저장 되어 있다면 해당 데이터를 조회해 온다.

- 초기화 버튼은 마스터항목만을 조회해온다.

![img](/supporting-pages/images/printconf2.jpg?width=800px)



