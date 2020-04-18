---
title: CHIS Services
linktitle: CHIS Services
description: CHIS Framework, Common내 제공되는 Services를 취합 정리한 문서입니다.
weight: 207
disableToc: false
draft: false
date: 2019-11-07T09:02:00+09:00
tags: [services]
---
## econsent-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-interface) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_Methods_</span>

**1. setInit**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

setInit()
{{</highlight>}}

**2. setEventName**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

setEventName(eventName)
{{</highlight>}}

**3. newForm**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

newForm(jsonObj)
{{</highlight>}}

**4. addForm**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

addForm(jsonObj)
{{</highlight>}}

**5. commandForm**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

commandForm(jsonObj)
{{</highlight>}}

**6. exitForm**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

exitForm()
{{</highlight>}}

**7. changePatientForm**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

changePatientForm()
{{</highlight>}}

**8. closeSocket**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

closeSocket()
{{</highlight>}}

## installation-check-service [TA]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-interface) 로 이동

통합 설치 페이지의 모듈 설치 여부의 대한 로직 구현

#### <span style="color:blue">_Variables_</span>
```
/*
 * 라이브업데이트 모듈 설치 여부
 * @return {boolean}
*/
isLiveUpdateInstalled

/*
 * kmi 모듈 업데이트 필요 여부
 * @return {boolean}
*/
needKmiUpdate
```

#### <span style="color:blue">_Methods_</span>

**1. pkikmiServiceCheck**

{{<highlight javascript>}}
/*
 * kmi connection check
 * 통합설치화면 로드되어있는 한 소켓통신 안되면 kmi 모듈 설치시까지 5초간 계속 연결시도함.
 * @return : 없음.
*/

pkikmiServiceCheck()
{{</highlight>}}

**2. liveUpdateCheck**

{{<highlight javascript>}}
/*
 * liveUpdate connection check
 * 통합설치화면 로드되어있는 한 소켓통신 안되면 liveupdate 모듈 설치시까지 5초간 계속 연결시도함.
 * @return : 없음
*/

pkikmiServiceCheck()
{{</highlight>}}

## interface-websocket-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-interface) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_Methods_</span>

**1. sendPacket**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

sendPacket(viewId, deviceType, packet)
{{</highlight>}}


## interface-websocket-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-interface) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_Methods_</span>

**1. sendPacket**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

sendPacket(viewId, deviceType, packet)
{{</highlight>}}

**1. closeSocket**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

closeSocket(deviceType)
{{</highlight>}}

## patient-manager-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-patient) 로 이동

환자 세션 관리를 위한 서비스

#### <span style="color:blue">_Variables_</span>

```
/*
 * 최초 환자 선택 하였는지 여부
 * @return {boolean} : 최초 환자 선택시 true 업데이트.
*/
firstTimePatientSelected

/*
 * 환자 선택 변경 로깅 여부
 * @return {boolean} : audit용 logger를 남길지 여부 값.
*/
patientChangeLogEnable

/*
 * 선택된 환자 세션 정보
 * @return {object} : 선택된 환자 정보.
*/
selectedPatient

/*
 * 환자 선택 변경 진행중 여부
 * @return {boolean} : 환자를 선택하는 이벤트가 발생하면 true가 되고 모든 화면의 변경 수락이 진행되어 변경되면 false가 됨.
*/
isPatientChaning

/*
 * 환자 세션 공유 local storage key
 * @return {string} : 환자 세션 정보를 다른 브라워저 화면에서 공유하는 경우에 사용되는 Local storage key 값.
*/
patient_storage_key
```

#### <span style="color:blue">_Methods_</span>

**1. selectPatient**

{{<highlight javascript>}}
/*
 * 환자 선택
 * @param
 *  1.patient {object} 환자 정보 조회를 위한 파라미터 값
 *  2.openMenus {object} 환자 선택 후 오픈할 메뉴 목록
 * @return 없음.
*/

selectPatient(patient, openMenus = null)
{{</highlight>}}

**2. changePatient**

{{<highlight javascript>}}
/*
 * Access control 서비서에서 환자 선택 사유 입력 후 호출하는 함수
 * @param
 *  1.patient {object} 환자 정보 조회를 위한 파라미터 값
 * @return {Promise} : 환자 변경 결과 반환.
*/

changePatient(patient)
{{</highlight>}}

**3. clearSelectedPatient**

{{<highlight javascript>}}
/*
 * 현재 선택된 환자 세션 종료
 * 메시지 박스에서 진행 취소 선택 할 수 있음.
 * 환자 세션 종료 프로세스는 cm팀 요구에 의해 없는 것으로 정리됨.
 * @param
 * @return 없음.
*/

clearSelectedPatient()
{{</highlight>}}

**4. changePatientContents**

{{<highlight javascript>}}
/*
 * 환자 세션 정보 내용 변경
 * @param
 *  1.patient {object} 변경된 환자 세션 정보 class instance
 * @return 없음.
*/

changePatientContents(patient)
{{</highlight>}}

**4. initService**

{{<highlight javascript>}}
/*
 * 환자 세션 관리 서비스 초기화
 * @param
 * @return 없음.
*/

initService()
{{</highlight>}}

**5. clearService**

{{<highlight javascript>}}
/*
 * 환자 세션 관리 서비스 해제
 * @param
 * @return 없음.
*/

clearService()
{{</highlight>}}

**6. clearSelectedPatientHistory**

{{<highlight javascript>}}
/*
 * 선택된 환자 이력 초기화
 * 사용하지 않음.
 * @param
 * @return 없음.
*/

clearSelectedPatientHistory()
{{</highlight>}}

**7. getPatientSessionSyncConfig [TA]**

{{<highlight javascript>}}
/*
 * 사용자 환경 설정에 따른 환자 공유 설정
 * @param
 * @return 없음.
*/

getPatientSessionSyncConfig()
{{</highlight>}}

**8. setFirstTimePatientSelection**

{{<highlight javascript>}}
/*
 * 첫 환자 선택 후 메뉴 오픈
 * @param
 * @return 없음.
*/

setFirstTimePatientSelection()
{{</highlight>}}

**9. reselectPatient**

{{<highlight javascript>}}
/*
 * 폐기 메소드 - 사용하지 않음.
*/

reselectPatient()
{{</highlight>}}

## authentication-service [TA]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-security) 로 이동

사용자 인증 및 권한 관리를 위한 서비스

#### <span style="color:blue">_Variables_</span>
```
/*
 * 로그인 사용자가 접근할 수 있는 모든 뷰 컴포넌트 목록
 * @return {array} : 권한이 있는 컴포넌트 목록.
*/
viewComponents

/*
 * 로그인 사용자가 접근할 수 있는 모든 기능 목록
 * @return {array} : 권한이 있는 기능 목록.
*/
authorizedServices

/*
 * 병원 정책 정보
 * @return {objcet} : 로그인 사용자의 병원 정책 정보 값.
*/
hospitalPolicy

/*
 * 사용자 암호 변경 필수 여부
 * @return {boolean} : 반드시 암호를 변경해야 하는지 여부 값.
*/
requiredPasswordChange

/*
 * 암호 변경 팝여 보여주기 여부
 * @return {boolean} : true|false.
*/
requiredPasswordChange
```

#### <span style="color:blue">_Methods_</span>

**1. initService**

{{<highlight javascript>}}
/*
 * 서비스 초기화
 * {사용자에게 할당된 메뉴 목록
 * 사용자에게 할당된 뷰 컴포넌트 목록
 * 사용자에게 할당된 기능 목록
 * 사용자 병원 정책}
 * @param
 *  없음
 * @return {Promise} : resolve().
*/

initService()
{{</highlight>}}

**2. clearService**

{{<highlight javascript>}}
/*
 * 서비스 해제
 * @param
 *  없음
 * @return 없음.
*/

clearService()
{{</highlight>}}

**3. getViewComponentInfo**

{{<highlight javascript>}}
/*
 * 뷰 컴포넌트 정보 조회
 * @param
 *  1.viewId {string} 뷰 아이디
 * @return {objcet}} : 뷰 컴포넌트 정보.
*/

getViewComponentInfo(viewId)
{{</highlight>}}

**4. getAuthorizedServices**

{{<highlight javascript>}}
/*
 * 사용자 권한 목록 조회
 * @param
 *  1.viewId {string} 뷰 아이디
 * @return {array}} : 권한 목록.
*/

getAuthorizedServices(viewId)
{{</highlight>}}

**5. checkAccessTimePolocy**

{{<highlight javascript>}}
/*
 * 로그인 사용자가 시스템에 접근이 가능한 시간인지 확인
 * @param
 *  없음
 * @return {boolean} : true|false.
*/

checkAccessTimePolocy()
{{</highlight>}}

**6. checkAccessWorkStationPolocy**

{{<highlight javascript>}}
/*
 * 로그인 사용자 IP가 시스템에 접근이 가능한지 확인
 * @param
 *  없음
 * @return {boolean} : true|false.
*/

checkAccessWorkStationPolocy()
{{</highlight>}}

**7. checkPasswordChange**

{{<highlight javascript>}}
/*
 * 로그인 사용자의 암호 변경이 필요한지 여부 확인
 * @param
 *  없음
 * @return {boolean} : true|false.
*/

checkPasswordChange()
{{</highlight>}}

**8. checkPasswordHistory**

{{<highlight javascript>}}
/*
 * 로그인 사용자의 암호 변경 이력 조회
 * @param
 *  1.newPassword {string} 새 암호
 *  2.historyCount {number} 동일 암호가 있는지 확인할 이전 암호 수
 * @return {boolean} : true|false.
*/

checkPasswordHistory(newPassword, historyCount)
{{</highlight>}}

## inactivity-monitor-service [TA]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-security) 로 이동

사용자 세션 타임 아웃 관리를 위한 서비스

#### <span style="color:blue">_Variables_</span>
```
/*
 * 로그인 사용자의 세션 타임 설정 값
 * @return {number} : ['10분', '20분', '30분', '40분', '50분', '1시간', '2시간', '3시간', '4시간', '사용안함'].
*/
inactivityTimeout

/*
 * 사용자 이벤트 목록
 * ['mousemove', 'touchmove', 'keydown']
 * @return {array} : 이벤트 발생시 경과 시간 초기화.
*/
userEvents

/*
 * 세션 경과 시간
 * @return {number} : 최종 사용자 이벤트 후 경과된 시간 (ms).
*/
timeoutTimer

/*
 * 반복적인 이벤트
 * @return {object} : 세션 타임 아웃 시간 확인을 위한 이벤트.
*/
throttleAction

/*
 * 세션 타임 아웃 alert 창 보여주기 여부
 * @return {boolean} : true|false.
*/
sessionTimerPopShow

/*
 * 다중 브라우저 이벤트를 처리를 위한 local storage key
 * @return {string} : 'session_timer_popup'.
*/
session_timer_storage_key

/*
 * 서비스 활성화 여부
 * @return {boolean} : true|false.
*/
isServiceRunning

/*
 * 세션 타임 아웃 alert 창에 보여지는 남은 초에 대한 값
 * @return {number} : 기본 30초에서 0이 되면 세션 종료 됨.
*/
popShowTimeSeconds
```

#### <span style="color:blue">_Methods_</span>

**1. setUserSessionTimeout**

{{<highlight javascript>}}
/*
 * 사용자에게 설정된 세션 타임 아웃 값 설정
 * @param
 *  1.minute {number} 설정 값
 * @return 없음.
*/

setUserSessionTimeout(minute)
{{</highlight>}}

**2. userSessionTimeoutUpdate**

{{<highlight javascript>}}
/*
 * 사용자 세션 경과 시간 업데이트
 * @param
 *  없음
 * @return 없음.
*/

userSessionTimeoutUpdate()
{{</highlight>}}

**3. initService**

{{<highlight javascript>}}
/*
 * 서비스 초기화
 * @param
 *  없음
 * @return 없음.
*/

initService()
{{</highlight>}}

**4. clearService**

{{<highlight javascript>}}
/*
 * 서비스 해제
 * @param
 *  없음
 * @return 없음.
*/

clearService()
{{</highlight>}}

## pki-kmi-service [TA]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-security) 로 이동

공인인증서 관련 처리를 위한 서비스

#### <span style="color:blue">_Variables_</span>

```
/*
 * KMI 모듈 소켓 통신 연결을 위한 서비스
 * @return {object} : 소켓 오브젝스 class instance.
*/
webSocketService

/*
 * HOST 설정 정보를 조회할 수 있는 서비스.
 * @return {object} : 서버연결 정보 및 환경설정 정보를 조회하는 class instance.
*/
hostConfigService

/*
 * 국제화 서비스
 * @return {object} : Locale, 언어 포멧, 다국어등 국제화를 위한 class instance.
*/
i18nService

/*
 * 사용자 서비스
 * @return {object} : 사용자 세션 정보 class instance.
*/
currentUserService

/*
 * 환자 서비스
 * @return {object} : 환자 세션 정보 class instance.
*/
patientManagerService

/*
 * toast 서비스
 * @return {object} : toast 메시지 class instance.
*/
toast

/*
 * 공인인증서 서비스 지원 여부
 * @return {boolean} : 공인인증서 서비스 지원 가능 여부에 대한 true|false.
 * environment.js - ENV['pki-kmi-sign'].enabled 설정 값
*/
certificateServiceEnable

/*
 * 공인인증서 서비스를 시작하기 위한 초기값 설정 완료 여부
 * @return {boolean} : 완료 여부 true|false.
*/
serviceIninalized

/*
 * 웹소켓을 이용하여 연결할 KMI 소켓정보
 * @return {object} : KMI 소켓 연결 class instance.
*/
kmi_websoket

/*
 * 공인 인증서 서비스 지원 여부
 * @return {boolean} : 공인인증서 서비스 지원 가능 여부에 대한 true|false.
 * environment.js - ENV['pki-kmi-sign'].enabled 설정 값.
*/
pkiServiceEnable

/*
 * KMI 서비스에 필요한 client script 위치 정보
 * @return {string}} : 경로 위치 정보.
 * environment.js - ENV['pki-kmi-sign'].kmiAssetUrl 설정 값.
*/
kmiAssetUrl

/*
 * Health Checker Back-End Host URL
 * @return {string}} : Health Checker 서버통신을 위한 url 정보.
 * environment.js - ENV['ServerCallConfig'].aliveHealthChecker URL.
*/
aliveHealthChecker

/*
 * KMI Back-End Host URL
 * @return {string}} : KMI 서버통신을 위한 url 정보.
 * environment.js - ENV['ServerCallConfig'].kmiServiceUrl URL.
*/
defaultKmiUrl

/*
 * KMI 소켓 연결을 위한 문자열
 * @return {string}} : PKI 소켓 연결 문자열.
 * 'ws://127.0.0.1:8889/KMIClientNA'
*/
kmiClientHost

/*
 * KMI 설치 파일 버전 정보
 * @return {string}} : KMI 서버통신을 위한 url 정보.
 * environment.js - ENV['pki-kmi-sign'].kmiVersion 설정 값.
*/
kmiVersion

/*
 * 공인인증서 Data
 * @return {object} : client에 내려받은 공인인증서 정보.
*/
sertificateData

/*
 * PKI 소켓 연결 여부
 * @return {boolean} : 소켓 연결 여부 값 true|false.
*/
isKmiSoketOpen

/*
 * KMI 설치 필요 정보
 * @return {boolean} : client에 KMI script 다운 완료 여부 값 true|false.
*/
needKmiDown

/*
 * KMI 설치 가이드 정보에 보여줄 버전 정보
 * @return {string} : KMI 버전 정보 값.
*/
kmiVersionDescription

/*
 * KMI 모듈 정보를 체크하였는지 여부
 * @return {boolean} : client에 kmi 모듈 버전 체크가 진행되었는지 여부 값 true|false.
*/
isCheckedKmiModule

/*
 * PKI 설치 필요 정보
 * @return {boolean} : client에 PKI 관리 설치 필요 여부 값 true|false.
*/
needPkiDown

/*
 * PKI 설치 가이드 정보에 보여줄 정보
 * @return {string} :PKI 버전 정보 값.
*/
pkiDescription

/*
 * PKI 모듈 정보를 체크하였는지 여부
 * @return {boolean} : client에 pki 모듈 버전 체크가 진행되었는지 여부 값 true|false.
*/
isCheckedPkiModule

/*
 * PKI, KMI 모듈 중 한개라도 설치가 필요한 경우에 대한 정보
 * @return {boolean} : client에 pki 모듈및 kmi 모듈 설치가 필요한지 여부 값 true|false.
*/
neetInstall

/*
 * PKI, KMI 모듈 설치 여부를 체크 하였는지 여부 정보
 * @return {boolean} : client에 pki 모듈및 kmi 모듈 설치가 필요한지 체크하였는지 여부 값 true|false.
*/
checkModuleStateComplted

/*
 * PKI또는 KMI 모듈 설치를 위한 가이드 보여주기 정보
 * @return {boolean} : 설치 가이드를 필요 여부 값 true|false.
*/
showInstallGudie

```

#### <span style="color:blue">_Methods_</span>

**1. initService**

{{<highlight javascript>}}
/*
 * PKI, KMI 서비스를 위한 초기화 진행
 * @param
 *  없음
 * @return {Promise} : client sript가 모두 다운되면 resolve() 반환.
*/

initService()
{{</highlight>}}

**2. clearService**

{{<highlight javascript>}}
/*
 * PKI, KMI 서비스 해제 진행
 * client에 다운로드된 인증서 파일을 삭제하고 열린 소켓을 닫는다.
 * @param
 *  없음
 * @return 없음.
*/

clearService()
{{</highlight>}}

**3. kmiServiceStart**

{{<highlight javascript>}}
/*
 * KMI 클라이언트 프로그램 실행
 * @param
 *  없음
 * @return 없음.
*/

kmiServiceStart()
{{</highlight>}}

**4. connectKmiWebSocket**

{{<highlight javascript>}}
/*
 * KMI 클라이언트 프로그램과 soket연결 진행.
 * @param
 *  없음
 * @return {Promise} : 연결이 진행되면 resolve().
*/

connectKmiWebSocket()
{{</highlight>}}

**5. closeKmiWebSocket**

{{<highlight javascript>}}
/*
 * KMI 클라이언트 프로그램과의 soket 연결 닫기 진행
 * @param
 * 없음
 * @return {Promise} : 연결이 해제되면 resolve().
*/

closeKmiWebSocket()
{{</highlight>}}

**6. sendMessageToSoket**

{{<highlight javascript>}}
/*
 * KMI에 연결된 소켓에 메시지 보내기
 * @param
 *  1.str {string} 메시지 정보
 * @return 없음.
*/

sendMessageToSoket(str)
{{</highlight>}}

**7. certificateLogin**

{{<highlight javascript>}}
/*
 * 공인인증서 로그인 진행
 * @param
 *  1.email {string} 사용자 email
 *  2.tenantId {string} 테넌트 아이디
 * @return {Promise} : resolve(sertificateData)로 인증서 파일 반환.
*/

certificateLogin(email, tenantId)
{{</highlight>}}

**8. getCertificateData**

{{<highlight javascript>}}
/*
 * 인증서 데이터 받기
 * @param
 *  1.email {string} 사용자 email
 *  2.tenantId {string} 테넌트 아이디
 * @return {Promise} : resolve(sertificateData)로 인증서 파일 반환.
*/

getCertificateData(email, tenantId)
{{</highlight>}}

**9. verifyCertificateData**

{{<highlight javascript>}}
/*
 * 인증서 파일에 대한 유효성 체크
 * @param
 *  1.data {JSON} 공인인증서 파일 정보
 *  2.tenantId {string} 테넌트 아이디
 * @return {Promise} : 유효성 체크 결과.
*/

verifyCertificateData()
{{</highlight>}}

**10. saveLocalCertificate**

{{<highlight javascript>}}
/*
 * 내려받은 인증서를 사용자 PC에 저장
 * @param
 *  1.dnData {JSON} 공인인증서 정보 json
 * @return {타입} : 정보도 적으면 좋음.
*/

saveLocalCertificate(dnData)
{{</highlight>}}

**11. deleteLocalCertificate**

{{<highlight javascript>}}
/*
 * 사용자 PC에 저장된 공인인증서 파일 삭제
 * 특정 경로에 있는 전체 인증서 파일을 모두 삭제함.
 * @param
 *  없음
 * @return 없음.
*/

deleteLocalCertificate()
{{</highlight>}}

**12. certificateUnsetMatched**

{{<highlight javascript>}}
/*
 * PC에 캐싱되어 있는 인증서 해제
 * @param
 *  없음
 * @return {Promise} : 해제시 resolve().
*/

certificateUnsetMatched()
{{</highlight>}}

**13. saveCertificatePassword**

{{<highlight javascript>}}
/*
 * 비번이 변경된 인증서 서버 저장
 * @param
 *  1.data {JSON} 인증서정보
 * @return 없음.
*/

saveCertificatePassword(data)
{{</highlight>}}

**14. uploadCertificate**

{{<highlight javascript>}}
/*
 * 공인인증서 서버 저장
 * @param
 *  1.data {JSON} 인증서정보
 * @return 없음.
*/

uploadCertificate(data)
{{</highlight>}}

**15. kmiAliveHealthChecker**

{{<highlight javascript>}}
/*
 * KMI 서비스 Health Checker
 * @param
 *  없음
 * @return {Promise}} : 서비스 상태 여부.
*/

kmiAliveHealthChecker()
{{</highlight>}}

**16. checkKmiSetupFileInstalled**

{{<highlight javascript>}}
/*
 * KMI 클라이언트 설치 여부 확인
 * @param
 *  없음
 * @return 없음.
*/

checkKmiSetupFileInstalled()
{{</highlight>}}

**17. checkPkiSetupFileInstalled**

{{<highlight javascript>}}
/*
 * PKI 클라이언트 client file 다운 여부 확인
 * @param
 *  없음
 * @return 없음.
*/

checkPkiSetupFileInstalled()
{{</highlight>}}

**18. changeCertificatePassword**

{{<highlight javascript>}}
/*
 * 공인인증서 암호 변경
 * @param
 *  1.email {JSON} 인증서 정보
 *  2.tenantId {string} 테넌트 아이디
 * @return {타입} : 정보도 적으면 좋음.
*/

changeCertificatePassword(email, tenantId)
{{</highlight>}}

## common-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-ui) 로 이동

제공되는 API중에서 공통으로 제공할 추가적인 기능 모음

#### <span style="color:blue">_Variables_</span>

```
/*
 * 병원정보
 * @return {json} : 현재 사용자 병원 정보.
*/
hospitalInfo

/*
 * 타임존 아이디
 * @return {string} : 현재 사용자 병원 타임존 아이디.
*/
timezoneId

/*
 * 테넌트 아이디
 * @return {string} : 현재 사용자 테넌트 아이디.
*/
tenantId

/*
 * 병원 아이디
 * @return {string} : 현재 사용자 병원 아이디.
*/
hospitalId

/*
 * 테넌트 정보
 * @return {json} : 현재 사용자 테넌트 정보.
*/
tenantInfo

/*
 * ML 레포트 설치 여부 정보 [TA]
 * @return {boolean} : 설치 여부 정보 값 true|false.
*/
webReportInfo

```

#### <span style="color:blue">_Methods_</span>

**1. getUTCNow**

{{<highlight javascript>}}
/*
 * 현재 사용자의 병원 UCT 시간 조회
 * @param
 *  없음
 * @return {datetime} : UTC 시간.
*/

getUTCNow()
{{</highlight>}}

**2. getTimeZone**

{{<highlight javascript>}}
/*
 * 타임존 조회
 * @param
 *  1.targetDate {datetime} 시간
 *  2.isTargetDateUTC {boolean} UTC 시간 여부
 * @return {object} : 타임존 object instance.
*/

getTimeZone(targetDate=null, isTargetDateUTC=false)
{{</highlight>}}

**3. getNow**

{{<highlight javascript>}}
/*
 * 사용자 현재 시간 조회
 * @param
 *  없음
 * @return {datetime} : 사용자 로컬 시간.
*/

getNow()
{{</highlight>}}

**4. getWebReportInfo [TA]**

{{<highlight javascript>}}
/*
 * ML 레포트 설치 여부 조회
 * @param
 *  없음
 * @return {boolean} : 설치 여부 정보 값 true|false.
*/

getWebReportInfo()
{{</highlight>}}

**5. checkDSTChangingMode**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.targetLocalDate {datetime} DST 변경 시간대인지 확인을 위한 datetime
 * @return {string} : none(0), repeat(1), skip(2).
*/

checkDSTChangingMode(targetLocalDate)
{{</highlight>}}

**6. convertToUTC**

{{<highlight javascript>}}
/*
 * 로컬 시간을 타임존에 해당하는 UTC 시간으로 변환
 * @param
 *  1.localDate {datetime} local datetime
 *  2.timeZoneId {string} 타임존 아이디
 * @return {datetime} : UTC 시간.
*/

convertToUTC(localDate, timeZoneId)
{{</highlight>}}

**7. convertToLocal**

{{<highlight javascript>}}
/*
 * UTC 시간을 사용자 병원 로컬 시간으로 변환
 * @param
 *  1.utcDate {datetime} UTC 시간
 * @return {datetime} : 사용자 병원 로컬 시간.
*/

convertToLocal(utcDate)
{{</highlight>}}

**8. setTenantInformation**

{{<highlight javascript>}}
/*
 * 테넌트 정보 설정
 * @param
 *  1.tenant {object} 테넌트 정보 class instance
 * @return 없음.
*/

setTenantInformation(tenant)
{{</highlight>}}

**9. setWebReportInfo [TA]**

{{<highlight javascript>}}
/*
 * ML 레포트 설치 여부
 * @param
 *  1.webReport {boolean} 설치 여부 정보 값 true|false
 * @return 없음.
*/

setWebReportInfo(webReport)
{{</highlight>}}

**10. getLanguageResource**

{{<highlight javascript>}}
/*
 * 다국어 정보
 * @param
 *  1.domainName {string} 리소스가 포함된 도메인 정보
 *  2.key {string} 리소스 Key
 *  3.resType {string} 반환할 리소스 유형 F: full 리소스, S: sort 리소스
 *  4.paramValues {string} 리소스에 변환될 파라미터 string array
 *  5.description {string} 리소스 설명
 * @return {string} : 다국어 처리된 문자열.
*/

getLanguageResource(domainName, key, resType='F', paramValues=null, description='')
{{</highlight>}}

**11. getConfigurationSettingInfo**

{{<highlight javascript>}}
/*
 * 설정 정보 조회
 * 병원 기준으로 목적에 따라 설정해 둔 설정 정보 조회
 * @param
 *  1.settingType {string} 그룹 분류 예) 'USER', 'HOSPITAL', 'DEPARTMENT', ...
 *  2.settingOwner {string} 그룹 분류에 대한 owner key  예) employeeId
 *  3.settingKey {string} 설정 정보에 대한 unique key 예) GUID 처럼. 해당 설정에 대한 유니크 키 값
 * @return {object}} : Key에 해당하는 설정 정보.
*/

getConfigurationSettingInfo(settingType, settingOwner, settingKey)
{{</highlight>}}

**12. setConfigurationSettingInfo**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.settingType {string} 그룹 분류 예) 'USER', 'HOSPITAL', 'DEPARTMENT', ...
 *  2.settingOwner {string} 그룹 분류에 대한 owner key  예) employeeId
 *  3.settingKey {string} 설정 정보에 대한 unique key 예) GUID 처럼. 해당 설정에 대한 유니크 키 값
 *  4.settingValue {object} 설정 정보. 값 정보는 null 값일 수 없으며 string 값 임. json 구조인 경우 JSON.stringify(settingValue) 사용.
 *  5.description {string} 설정 정보에 대한 설명
 * @return {타입} : 정보도 적으면 좋음.
*/

setConfigurationSettingInfo(settingType, settingOwner, settingKey, settingValue, description = null)
{{</highlight>}}

## content-message-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-ui) 로 이동

화면과 화면사이의 이벤트를 주고 받을 수 있는 서비스

#### <span style="color:blue">_Variables_</span>

```
/*
 * 이벤트 목록
 * @return {array} : 수신등록된 이벤트 목록.
*/
eventList
```

#### <span style="color:blue">_Methods_</span>

**1. subscribeMessage**

{{<highlight javascript>}}
/*
 * 메시지 수신 등록
 * @param
 *  1.eventName {string} 이벤트 명
 *  2.menuId {string} 화면 메뉴 아이디
 *  3.target {object} 호출 대상 화면 class instance 예) this
 *  4.func {string} 호출 대상 이벤트 명
 * @return 없음.
*/

subscribeMessage(eventName, menuId, target, func)
{{</highlight>}}

**2. unsubscribeMessage**

{{<highlight javascript>}}
/*
 * 메시지 수신 해제
 * @param
 *  1.eventName {string} 이벤트 명
 *  2.menuId {string} 화면 메뉴 아이디
 *  3.target {object} 호출 대상 화면 class instance 예) this
 * @return 없음.
*/

unsubscribeMessage(eventName, menuId, target)
{{</highlight>}}

**3. unsubscribeAllMenuMessage [TA]**

{{<highlight javascript>}}
/*
 * 특정 메뉴에 등록된 모든 이벤트 수신 해제
 * 메뉴 화면이 destroy될 때 이벤트 발생
 * @param
 *  1.menuId {string} 화면 메뉴 아이디
 * @return 없음.
*/

unsubscribeAllMenuMessage(menuId)
{{</highlight>}}

**4. sendMessage**

{{<highlight javascript>}}
/*
 * 이벤트 명으로 수신 등록된 화면에 이벤트 호출
 * @param
 *  1.eventName {string} 이벤트 명
 *  2.data {object} 이벤트 호출 함수에 전달할 데이터
 * @return 없음.
*/

sendMessage(eventName, data)
{{</highlight>}}

## contents-manager-service [TA]
---

[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-ui) 로 이동

메뉴 화면 컨텐츠 관리를 위한 서비스

#### <span style="color:blue">_Variables_</span>

```
/*
 * UI에 보이는 모든 메뉴 컨텐츠 목록
 * @return {array} : 메뉴 컨텐츠 목록.
*/
allContentList

/*
 * 활성화된 메뉴 아이디
 * @return {string} : 메뉴아이디.
*/
activeMenuId

/*
 * 고정 영역에 있는 컨텐츠 목록
 * @return {array} : 메뉴 컨텐츠 목록.
*/
fixedContentList

/*
 * host 상단 탭에 있는 모든 컨텐츠 목록
 * @return {array} : 메뉴 컨텐츠 목록.
*/
visitedContentList

/*
 * 스크롤이 가능한 영역에 있는 모든 컨텐츠 목록
 * @return {array} : 메뉴 컨텐츠 목록.
*/
scrollableContentList

/*
 * 레이어 팝업으로 있는 모든 컨텐츠 목록
 * @return {array} : 메뉴 컨텐츠 목록.
*/
popupedContentList
```

#### <span style="color:blue">_Methods_</span>

**1. refreshContent**

{{<highlight javascript>}}
/*
 * 화면 컨텐츠 새로고침
 * @param
 *  1.menuId {string} 메뉴 아이디
 * @return {Promise} : 새로고침이 완료되면 해당 컨텐츠 class instance 반환.
*/

refreshContent(menuId)
{{</highlight>}}

**2. updateStateType**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠 위치 상태값 변경
 * ['fixed','scrollable','popuped','dimmed']
 * @param
 *  1.menuId {string} 메뉴 아이디
 *  2.stateType {string} 상태값
 * @return {Promise} : 업데이트 후 resolve().
*/

updateStateType(menuId, stateType)
{{</highlight>}}

**3. openContentNextTo**

{{<highlight javascript>}}
/*
 * 특정 메뉴 오른쪽에 메뉴 열기
 * @param
 *  1.menu {object} 메뉴 class instance
 *  2.targetMenuId {string} 메뉴아이디
 * @return {array}} : 전체 메뉴 컨텐츠 목록.
*/

openContentNextTo(menu, targetMenuId)
{{</highlight>}}

**4. openContent**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠 열기
 * @param
 *  1.menu {object} 메뉴 class instance
 * @return {object} : 열린 메뉴 컨텐츠 class instance.
*/

openContent(menu)
{{</highlight>}}

**5. openSpecialContents**

{{<highlight javascript>}}
/*
 * 여러 메뉴 열기
 * @param
 *  1.menus {array} 열고자 하는 메뉴 목록
 * @return {타입} : 정보도 적으면 좋음.
*/

openSpecialContents(menus)
{{</highlight>}}

**6. openContentList [TA]**

{{<highlight javascript>}}
/*
 * 브라우저 refresh(F5)시에 기존 메뉴 전체 다시 열기
 * @param
 *  1.menus {array} 메뉴 목록
 * @return {Promise}} : 전체 메뉴 컨텐츠 목록 반환.
*/

openContentList(menus)
{{</highlight>}}

**7. closeContent**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠 닫기
 * @param
 *  1.menuId {string} 메뉴 아이디
 * @return {object} : 현재 활성화 된 메뉴 컨텐츠 class instance.
*/

closeContent(menuId)
{{</highlight>}}

**8. closeAllOpenedContents**

{{<highlight javascript>}}
/*
 * 모든 메뉴 컨텐츠 닫기
 * @param
 * @return {Promise} : 모든 메뉴 컨텐츠 닫은 후 resolve().
*/

closeAllOpenedContents()
{{</highlight>}}

**9. getOpenContentParams**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠의 파라미터값 조회
 * @param
 *  1.menuId {string} 메뉴 아이디
 * @return {any} : 설정되어 있는 파라미터 값 반환.
*/

getOpenContentParams(menuId)
{{</highlight>}}

**10. setOpenContentParams**

{{<highlight javascript>}}
/*
 * 특정 메뉴 컨텐츠 파라미터 설정
 * @param
 *  1.menuId {string} 메뉴 아이디
 *  2.parameters {any} 설정하고자 하는 파라미터 값
 * @return {Promise} : 메뉴 아이디에 해당하는 컨텐츠 class instance 반환.
*/

setOpenContentParams(menuId, parameters)
{{</highlight>}}

**11. setActiveContent**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠 활성화 설정
 * 해당 메뉴가 활성화 되고 포커스가 이동한다.
 * @param
 *  1.menuId {string} 메뉴 아이디
 * @return 없음.
*/

setActiveContent(menuId)
{{</highlight>}}

**12. getContentOriginSourceList**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠의 원본 메뉴 정보 목록 조회
 * @param
 *  1.menuId {string} 메뉴 아이디
 * @return {array} : 메뉴 목록.
*/

getContentOriginSourceList(menuId)
{{</highlight>}}

**13. checkContentOpened**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠 오픈 여부 조회
 * @param
 *  1.menuId {string} 메뉴 아이디
 * @return {boolean} : true|false.
*/

checkContentOpened(menuId)
{{</highlight>}}

**14. getContentStateType**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠 오픈 상태 값 조회
 * @param
 *  1.menuId {string} 메뉴 아이디
 * @return {string} : ['fixed','scrollable','popuped','dimmed'].
*/

getContentStateType(menuId)
{{</highlight>}}

**15. setFullSizeMode**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠 전체 화면 모드 설정
 * @param
 *  1.menuId {string} 메뉴 아이디
 * @return 없음.
*/

setFullSizeMode(menuId)
{{</highlight>}}

## language-resource-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-ui) 로 이동

미구현 삭제 필요 by hans.jjk

#### <span style="color:blue">_Methods_</span>

**1. loadMenus**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

loadMenus(menus)
{{</highlight>}}

## menu-manager-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-ui) 로 이동

메뉴 관리 서비스로 메뉴 열기, 닫기, 상태 관리 등을 위한 서비스

#### <span style="color:blue">_Variables_</span>

```
/*
 * 권한이 있는 메뉴 목록
 * @return {array} : 메뉴 목록.
*/
menus

/*
 * 오픈을 할 수 있는 메뉴 목록
 * @return {array} : 메뉴 목록.
*/
realMenus
```

#### <span style="color:blue">_Methods_</span>

**1. loadMenus**

{{<highlight javascript>}}
/*
 * 메뉴 컨텐츠 목록 열기
 * @param
 *  1.menus {array} 메뉴 목록
 * @return {타입} : 정보도 적으면 좋음.
*/

loadMenus(menus)
{{</highlight>}}

**2. openMenu**

{{<highlight javascript>}}
/*
 * 메뉴 열기
 * @param
 *  1.viewId {string} 뷰 아이디
 *  2.parameters {any} 메뉴에 적용되는 파라미터 값
 * @return 없음.
*/

openMenu(viewId, parameters = null)
{{</highlight>}}

**3. openSpecialMenus**

{{<highlight javascript>}}
/*
 * 여러 메뉴 열기
 * @param
 *  1.items {array} 뷰 아이디 목록
 *  const _menus = Ember.A([]);
 *  _menus.pushObject(Ember.Object.create({displayCode: 'feature-browser'}));
 *  _menus.pushObject(Ember.Object.create({displayCode: 'application-catalog-view-component-registration', stateType: 'fixed'}));
 *  _menus.pushObject(Ember.Object.create({displayCode: 'security/global-policy'}));
 *  _menus.pushObject(Ember.Object.create({displayCode: 'general-record-viewer'}));
 *  
 *  this.get('co_MenuManagerService').openSpecialMenus(_menus);
 *  
 *  메뉴에 전달할 수 있는 파라미터 값 정보는 다음과 같습니다.
 *  displayCode : '메뉴로 등록된 조각 UI의 viewcomponent view id'
 *  stateType : host main의 메뉴가 열리게 되는 영역 정보 입니다. 
 *      • "fixed"  or "scrollable" or "popuped"  --> null 값이 셋팅되면 scrollable 가 됩니다.
 *      • 메뉴 상태 값으로 "fixed"는 고정영역, "scrollable"은 오른쪽 스크롤이 가능한 영역, "popuped" 팝업영역으로 관리되고 있습니다.
 *  parameters : null or { … }  --> null인 경우 기본 메뉴 등록시에 파라미터 설정한 값이 설정됩니다.  
 * @return 없음.
*/

openSpecialMenus(items)
{{</highlight>}}

**4. openPopupMenu**

{{<highlight javascript>}}
/*
 * 레이어 팝업 영역 메뉴 열기
 * @param
 *  1.viewId {string} 뷰 아이디
 *  2.parameters {any} 메뉴에 적용되는 파라미터 값
 * @return 없음.
*/

openPopupMenu(viewId, parameters = null)
{{</highlight>}}

**4. openFixedMenu**

{{<highlight javascript>}}
/*
 * 고정 영역 메뉴 열기
 * @param
 *  1.viewId {string} 뷰 아이디
 *  2.parameters {any} 메뉴에 적용되는 파라미터 값
 * @return 없음.
*/

openFixedMenu(viewId, parameters = null)
{{</highlight>}}

**5. openMenuNextTo**

{{<highlight javascript>}}
/*
 * 특정 메뉴 오른쪽에 메뉴 열기
 * @param
 *  1.viewId {string} 뷰 아이디
 *  2.targetDisplayCode {string} 뷰 아이디
 *  3.parameters {any} 메뉴에 적용되는 파라미터 값
 * @return 없음.
*/

openMenuNextTo(viewId, targetDisplayCode, parameters = null)
{{</highlight>}}

**6. menuOpenAfterAccessControl [TA]**

{{<highlight javascript>}}
/*
 * access control 확인 이후 오출되는 메뉴 오픈 메소드
 * @param
 *  1.callInfo {object} 열고자 하는 메뉴 정보
 * @return 없음.
*/

menuOpenAfterAccessControl(callInfo)
{{</highlight>}}

**7. closeMenu**

{{<highlight javascript>}}
/*
 * 메뉴 닫기
 * @param
 *  1.viewId {string} 뷰 아이디
 * @return 없음.
*/

closeMenu(viewId)
{{</highlight>}}

**8. closeAllOpenedMenus**

{{<highlight javascript>}}
/*
 * 전체 메뉴 닫기
 * @param
 *  없음
 * @return 없음.
*/

closeAllOpenedMenus()
{{</highlight>}}

**9. closePatientRelatedMenus**

{{<highlight javascript>}}
/*
 * 환자 관려 메뉴 닫기
 * @param
 *  없음
 * @return {Promise} : 모든 메뉴 닫힌 후 resolve().
*/

closePatientRelatedMenus()
{{</highlight>}}

**10. updateMenuStateType**

{{<highlight javascript>}}
/*
 * 메뉴 상태값 업데이트
 * @param
 *  1.viewId {string} 뷰 아이디
 *  2.stateType {string} ['fixed','scrollable','popuped','dimmed']
 * @return 없음.
*/

updateMenuStateType(viewId, stateType)
{{</highlight>}}

**11. getOpenMenuParams**

{{<highlight javascript>}}
/*
 * 메뉴 파라미터 값 조회
 * @param
 *  1.viewId {string} 뷰 아이디
 * @return {any} : 메뉴에 설정된 파라미터 값 반환.
*/

getOpenMenuParams(viewId)
{{</highlight>}}

**12. setOpenMenuParams**

{{<highlight javascript>}}
/*
 * 메뉴 파라미터 값 설정
 * @param
 *  1.viewId {string} 뷰 아이디
 *  2.parameters {any} 파라미터 값
 * @return 없음.
*/

setOpenMenuParams(viewId, parameters = null)
{{</highlight>}}

**13. refreshMenu**

{{<highlight javascript>}}
/*
 * 메뉴 새로고침
 * @param
 *  1.viewId {string} 뷰 아이디
 * @return 없음.
*/

refreshMenu(viewId)
{{</highlight>}}

**14. getEngineNameByDisplayCode**

{{<highlight javascript>}}
/*
 * 뷰 아이디의 도메인 명 조회
 * @param
 *  1.viewId {string} 뷰 아이디
 * @return {string} : 도메인 명.
*/

getEngineNameByDisplayCode(viewId)
{{</highlight>}}

**15. checkMenuOpened**

{{<highlight javascript>}}
/*
 * 메뉴가 열려 있는지 여부 조회
 * @param
 *  1.viewId {string} 뷰 아이디
 * @return {boolean}} : true|false.
*/

checkMenuOpened(viewId)
{{</highlight>}}

**16. checkActiveMenu**

{{<highlight javascript>}}
/*
 * 메뉴 활성화 상태 여부 조회
 * @param
 *  1.viewId {string} 뷰 아이디
 * @return {boolean}} : true|false.
*/

checkActiveMenu(viewId)
{{</highlight>}}

**17. setMenus [TA]**

{{<highlight javascript>}}
/*
 * 권한이 있는 메뉴 목록 설정
 * @param
 *  1.authorizedMenus {array} 권한이 있는 메뉴 목록
 * @return 없음.
*/

setMenus(authorizedMenus)
{{</highlight>}}

## spell-check-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-ui) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_Methods_</span>

**1. checkData**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

checkData(dataToSend)
{{</highlight>}}

## current-user-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-user) 로 이동

로그인된 현재 사용자 세션 관리를 위한 서비스

#### <span style="color:blue">_Variables_</span>

```
/*
 * 로그인 사용자 이메일
 * @return {string} : 이메일.
*/
loginEmail

/*
 * 사용자 세션
 * @return {object} : 현재 사용자 세션 정보 class instance.
*/
user

/*
 * 병원 정보
 * @return {object} : 현재 사용자의 병원 정보 class instance.
*/
hospital

/*
 * 타임존 아이디
 * @return {string} : 현재 사용자의 병원 타임존 아이디.
*/
timezoneId

/*
 * 타임존 목록 [TA]
 * @return {array} : 현재 사용자의 병원 타임존 목록.
*/
timeZoneList

/*
 * 현재 로그인 시간
 * @return {datetime} : 시간.
*/
loginTime

/*
 * 마지막 로그인 시간
 * @return {datetime} : 시간.
*/
lastLoginTime

/*
 * 현재 사용자 세션 패킷 정보 [TA]
 * @return {object} : 로그온 패킷 class instance.
*/
logonPacket
```
#### <span style="color:blue">_Methods_</span>

**1. initService [TA]**

{{<highlight javascript>}}
/*
 * 사용자 세션 설정
 * @param
 *  없음
 * @return {Promise} : 사용자 세션이 설정되면 resolve().
*/

initService()
{{</highlight>}}


## hospital-settings [TA]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-user) 로 이동

병원 환경 설정을 위한 서비스

#### <span style="color:blue">_Variables_</span>
```
/*
 * 사용자 그룹 코드 목록
 * @return {array} : 그룹 코드 목록.
*/
userGroups

/*
 * 환자 목록 설정 정보
 * @return {object} : 환자 목록중 기본 값 정보.
*/
patientListSettingInfo

/*
 * Work List 설정 정보
 * @return {object} : Work List 목록중 기본 값 정보.
*/
workListSettingInfo

/*
 * Brief View 설정 정보
 * @return {object} : Brief View 목록중 기본 값 정보.
*/
miniListSettingInfo

/*
 * 환자 선택 후 오픈할 메뉴 목록
 * @return {object} : 환자 선택 후 오픈할 메뉴 값 정보.
*/
loadMenusAfterSelectedPatient

/*
 * 기본 목록 설정 정보
 * [`PL`, `WL`]
 * @return {object} : 기본 목록 설정 값 정보.
*/
defaultListView

/*
 * Brief View Show 여부 설정
 * @return {object} : Brief View Show 값 정보.
*/
isBriefViewShow
```

#### <span style="color:blue">_Methods_</span>

**1. getPatientListSettingInfo**

{{<highlight javascript>}}
/*
 * Patient List 병원 설정 정보 값 조회
 * @param
 *  없음
 * @return {Promise} : 로그인 사용자의 병원 설정 값.
*/

getPatientListSettingInfo()
{{</highlight>}}

**2. getWorkListSettingInfo**

{{<highlight javascript>}}
/*
 * Working List 병원 설정 정보 값 조회
 * @param
 *  없음
 * @return {Promise} :  로그인 사용자의 병원 설정 값.
*/

getWorkListSettingInfo()
{{</highlight>}}

**3. getMiniListSettingInfo**

{{<highlight javascript>}}
/*
 * Brief View List 병원 설정 정보 값 조회
 * @param
 *  없음
 * @return {Promise} :  로그인 사용자의 병원 설정 값.
*/

getMiniListSettingInfo()
{{</highlight>}}

**4. getBriefViewShowSetting**

{{<highlight javascript>}}
/*
 * Brief View 보여 줄지 여부 값 조회
 * @param
 *  없음
 * @return {Promise} :  로그인 사용자의 병원 설정 값.
*/

getBriefViewShowSetting()
{{</highlight>}}

**5. getDefaultListViewSetting**

{{<highlight javascript>}}
/*
 * Patient List, Working List중 기본으로 보여주는 목록 값 조회
 * ['PL'|'WL'|'NONE']
 * @param
 *  없음
 * @return {Promise} : 로그인 사용자의 병원 설정 값.
*/

getDefaultListViewSetting()
{{</highlight>}}

**6. getLoadMenusSetting**

{{<highlight javascript>}}
/*
 * 환자 선택 후 오픈되는 메뉴 목록 값 조회
 * @param
 *  없음
 * @return {Promise} : 로그인 사용자의 병원 설정 값.
*/

getLoadMenusSetting()
{{</highlight>}}

**7. initService**

{{<highlight javascript>}}
/*
 * 현재 사용자 병원 설정 정보 조회
 * @param
 *  없음
 * @return {Promise} : 로그인 사용자 병원 환경 설정 정보 resolve().
*/

initService()
{{</highlight>}}

**8. getHospitalPatientListSettingInfo**

{{<highlight javascript>}}
/*
 * 병원 Patient List 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 병원 환경 설정 정보.
*/

getHospitalPatientListSettingInfo()
{{</highlight>}}

**9. setHospitalPatientListSettingInfo**

{{<highlight javascript>}}
/*
 * 병원 Patient List 값 설정
 * @param
 *  없음
 * @return {Promise} : 병원 환경 설정 정보.
*/

setHospitalPatientListSettingInfo()
{{</highlight>}}

**10. getHospitalWorkListSettingInfo**

{{<highlight javascript>}}
/*
 * 병원 Work List 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 병원 환경 설정 정보.
*/

getHospitalWorkListSettingInfo()
{{</highlight>}}

**11. setHospitalWorkListSettingInfo**

{{<highlight javascript>}}
/*
 * 병원 Work List 값 설정
 * @param
 *  없음
 * @return {Promise} : resolve().
*/

setHospitalWorkListSettingInfo()
{{</highlight>}}

**12. getHospitalMiniListSettingInfo**

{{<highlight javascript>}}
/*
 * 병원 Brief View List 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 병원 환경 설정 정보.
*/

getHospitalMiniListSettingInfo()
{{</highlight>}}

**13. setHospitalMiniListSettingInfo**

{{<highlight javascript>}}
/*
 * 병원 Brief View 값 설정
 * @param
 *  없음
 * @return {Promise} : resolve().
*/

setHospitalMiniListSettingInfo()
{{</highlight>}}

**14. getHospitalBriefViewShowSetting**

{{<highlight javascript>}}
/*
 * 병원 Brief View 보여주기 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 병원 환경 설정 정보.
*/

getHospitalBriefViewShowSetting()
{{</highlight>}}

**15. setHospitalBriefViewShowSetting**

{{<highlight javascript>}}
/*
 * 병원 Brief View 보여주기 값 설정
 * @param
 *  없음
 * @return {Promise} : resolve().
*/

setHospitalBriefViewShowSetting()
{{</highlight>}}

**16. getHospitalDefaultListViewSetting**

{{<highlight javascript>}}
/*
 * 병원 기본 목록 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 병원 환경 설정 정보.
*/

getHospitalDefaultListViewSetting()
{{</highlight>}}

**17. setHospitalDefaultListViewSetting**

{{<highlight javascript>}}
/*
 * 병원 기본 목록 설정 값 설정
 * @param
 *  없음
 * @return {Promise} : resolve().
*/

setHospitalDefaultListViewSetting()
{{</highlight>}}

**18. getHospitalLoadMenusSetting**

{{<highlight javascript>}}
/*
 * 병원 환자 선택 후 메뉴 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 병원 환경 설정 정보.
*/

getHospitalLoadMenusSetting()
{{</highlight>}}

**19. setHospitalLoadMenusSetting**

{{<highlight javascript>}}
/*
 * 병원 환자 선택 후 메뉴 설정
 * @param
 *  없음
 * @return {Promise} : resolve().
*/

setHospitalLoadMenusSetting()
{{</highlight>}}

## personalization-service [TA]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-user) 로 이동

사용자 환경 설정 관리를 위한 서비스

#### <span style="color:blue">_Variables_</span>

```
/*
 * 즐겨 찾기 목록
 * @return {array} : 즐겨찾기 메뉴 목록.
*/
favoriteMenus

/*
 * 직원 아이디
 * @return {string} : 로그인 사용자 직원 아이디.
*/
employeeId

/*
 * 로그인 사용자가 선택할 수 있는 환자 목록
 * @return {array} : 권한이 있는 환자 목록 리스트.
*/
patientListSources

/*
 * 로그인 사용자가 선택할 수 있는 Work List 목록
 * @return {array} : 권한이 있는 환자 목록 리스트.
*/
workListSources

/*
 * 로그인 사용자가 선택할 수 있는 Brief View 목록
 * @return {array} : 권한이 있는 Brief View 리스트.
*/
miniListSources

/*
 * Patient List 설정 값
 * @return {object} : 설정 정보 값.
*/
patientListSettingInfo

/*
 * Work List 설정 값
 * @return {object} : 설정 정보 값.
*/
workListSettingInfo

/*
 * Brief View List 설정 값
 * @return {object} : 설정 정보 값.
*/
miniListSettingInfo

/*
 * 개인 설정값 셋팅이 완료 되었는지 여부 값
 * @return {boolean} : true|false.
*/
isBindingPersonalListSettingInfo

/*
 * 언어 설정 값
 * ['ko-kr', 'en-us']
 * @return {string} : 설정 정보 값.
*/
languageValue

/*
 * 디폴트 목록 설정 값
 * ['PL', 'WL', 'NONE']
 * @return {string} : 설정 정보 값.
*/
defaultListView

/*
 * Brief View 보여주기 여부 설정 값
 * @return {boolean} : 설정 정보 값.
*/
isBriefViewShow

/*
 * 환자 선택 후 메뉴 오픈 설정 값
 * @return {array} : 설정 정보 값.
*/
loadMenusAfterSelectedPatient

/*
 * 세션 타임 아웃 설정 값
 * ['10분', '20분', '30분', '40분', '50분', '1시간', '2시간', '3시간', '4시간', '사용안함']
 * @return {int} : 설정 정보 값.
*/
sessionTimeout

/*
 * 환자세션공유 설정 값
 * @return {boolean} : 설정 정보 값.
*/
patientSessionSyncValue

/*
 * 환자정보화면 설정 값
 * ['PA', 'MI']
 * @return {string} : 설정 정보 값.
*/
patientInfoTypeValue
```

#### <span style="color:blue">_Methods_</span>

**1. getSettingInfo**

{{<highlight javascript>}}
/*
 * Key값에 해당하는 설정 정보 조회
 * @param
 *  1.settingKey {string} unique 개인 설정 key
 * @return {Promise}} : 설정 정보 값.
*/

getSettingInfo(settingKey)
{{</highlight>}}

**2. setSettingInfo**

{{<highlight javascript>}}
/*
 * Key값에 해당하는 설정 정보 저장
 * @param
 *  1.settingKey {string} 정보도 적으면 좋음
 *  2.settingValue {string} JSON.stringify(object)
 *  3.description {string} 설정 정보 설명
 * @return {Promise} : resolve().
*/

setSettingInfo(settingKey, settingValue, description = null)
{{</highlight>}}

**3. getPersonalLanguageSetting**

{{<highlight javascript>}}
/*
 * 언어 설정 값 조회
 * @param
 *  없음
 * @return {object} : 사용자 설정 정보 값.
*/

getPersonalLanguageSetting()
{{</highlight>}}

**4. setPersonalLanguageSetting**

{{<highlight javascript>}}
/*
 * 언어 설정 값 저장
 * @param
 *  1.settingValue {string} 설정 값
 *  2.description {string} 설명
 * @return {Promise} : resolve().
*/

setPersonalLanguageSetting(settingValue, description = null)
{{</highlight>}}

**5. addFavoriteMenu**

{{<highlight javascript>}}
/*
 * 즐겨찾기 추가
 * @param
 *  1.favoriteMenu {object} 메뉴 class instance
 * @return {Promise} : resolve().
*/

addFavoriteMenu(favoriteMenu)
{{</highlight>}}

**6. removeFavoriteMenu**

{{<highlight javascript>}}
/*
 * 즐겨찾기 삭제
 * @param
 *  1.favoriteMenu {object} 메뉴 class instance
 * @return {Promise} : resolve().
*/

removeFavoriteMenu(favoriteMenu)
{{</highlight>}}

**7. bindFavoriteMenus**

{{<highlight javascript>}}
/*
 * 사용자 메뉴에 즐겨찾기 값 업데이트
 * @param
 *  없음
 * @return 없음.
*/

bindFavoriteMenus()
{{</highlight>}}

**7. getLoadMenusSetting**

{{<highlight javascript>}}
/*
 * 환자 선택 후 메뉴 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 사용자 설정 정보 값.
*/

getLoadMenusSetting()
{{</highlight>}}

**8. setLoadMenusSetting**

{{<highlight javascript>}}
/*
 * 환자 선택 후 메뉴 설정 값 저장
 * @param
 *  1.settingValue {array} 메뉴 목록
 *  2.description {string} 설정 설명
 * @return {Promise} : resolve().
*/

setLoadMenusSetting(settingValue, description = 'personal load menus setting information')
{{</highlight>}}

**9. getPatientListSettingInfo**

{{<highlight javascript>}}
/*
 * Patient List 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 사용자 설정 정보 값.
*/

getPatientListSettingInfo()
{{</highlight>}}

**10. setPatientListSettingInfo**

{{<highlight javascript>}}
/*
 * Patient List 설정 값 저장
 * @param
 *  1.settingValue {object} 사용자 설정 정보 값
 *  2.description {string} 설정 값 설명
 * @return {Promise} : resolve().
*/

setPatientListSettingInfo(settingValue, description = 'personal patient list setting information')
{{</highlight>}}

**11. getWorkListSettingInfo**

{{<highlight javascript>}}
/*
 * Working List 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 사용자 설정 정보 값.
*/

getWorkListSettingInfo()
{{</highlight>}}

**12. setWorkListSettingInfo**

{{<highlight javascript>}}
/*
 * Working List 설정 값 저장
 *  1.settingValue {object} 사용자 설정 정보 값
 *  2.description {string} 설정 값 설명
 * @return {Promise} : resolve().
*/

setWorkListSettingInfo(settingValue, description = 'personal work list setting information')
{{</highlight>}}

**13. getMiniListSettingInfo**

{{<highlight javascript>}}
/*
 * Brief View List 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 사용자 설정 정보 값.
*/

getMiniListSettingInfo()
{{</highlight>}}

**14. setMiniListSettingInfo**

{{<highlight javascript>}}
/*
 * Briev View List 설정 값 저장
 *  1.settingValue {object} 사용자 설정 정보 값
 *  2.description {string} 설정 값 설명
 * @return {Promise} : resolve().
*/

setMiniListSettingInfo(settingValue, description = 'personal mini list setting information')
{{</highlight>}}

**15. savePatientListSetting**

{{<highlight javascript>}}
/*
 * Patient List 설정 개별 저장
 * @param
 *  없음
 * @return {Promise} : 변경 이벤트 발생 후 resolve().
*/

savePatientListSetting()
{{</highlight>}}

**16. saveWorkListSetting**

{{<highlight javascript>}}
/*
 * Work List 설정 개별 저장
 * @param
 *  없음
 * @return {Promise} : 변경 이벤트 발생 후 resolve().
*/

saveWorkListSetting()
{{</highlight>}}

**17. saveMiniListSetting**

{{<highlight javascript>}}
/*
 * Brief View List 설정 개별 저장
 * @param
 *  없음
 * @return {Promise} : 변경 이벤트 발생 후 resolve().
*/

saveMiniListSetting()
{{</highlight>}}

**18. getBriefViewShowSetting**

{{<highlight javascript>}}
/*
 * Brief View 보여 줄지 여부 값 조회
 * @param
 *  없음
 * @return {Promise} : 사용자 설정 정보 값.
*/

getBriefViewShowSetting()
{{</highlight>}}

**19. setBriefViewShowSetting**

{{<highlight javascript>}}
/*
 * Brief View 보여 줄지 여부 값 저장
 * @param
 *  1.settingValue {object} 사용자 설정 정보 값
 *  2.description {string} 설정 값 설명
 * @return {Promise} : resolve().
*/

setBriefViewShowSetting(settingValue, description = 'personal defalt brief view show setting information')
{{</highlight>}}

**20. getDefaultListViewSetting**

{{<highlight javascript>}}
/*
 * Patient List | Work List 중 어떤 것 보여 줄지 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 사용자 설정 정보 값.
*/

getDefaultListViewSetting()
{{</highlight>}}

**21. setDefaultListViewSetting**

{{<highlight javascript>}}
/*
 * Patient List | Work List 중 어떤 것 보여 줄지 설정 값 저장
 * @param
 *  1.settingValue {object} 사용자 설정 정보 값
 *  2.description {string} 설정 값 설명
 * @return {Promise} : resolve().
*/

setDefaultListViewSetting(settingValue, description = 'personal defalt list view setting information')
{{</highlight>}}

**22. getPersonalSessionTimeoutSetting**

{{<highlight javascript>}}
/*
 * 세션 타임 아웃 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 사용자 설정 정보 값.
*/

getPersonalSessionTimeoutSetting()
{{</highlight>}}

**23. setPersonalSessionTimeoutSetting**

{{<highlight javascript>}}
/*
 * 세션 타임 아웃 설정 값 저장
 * @param
 *  1.settingValue {object} 사용자 설정 정보 값
 *  2.description {string} 설정 값 설명
 * @return {Promise} : resolve().
*/

setPersonalSessionTimeoutSetting(settingValue, description = 'personal defalt session timeout setting information')
{{</highlight>}}

**24. getPersonalPatientSessionSyncSetting**

{{<highlight javascript>}}
/*
 * 환자 세션을 브라우저 다른 탭과 공유할 지 여부 설정 값 조회
 * @param
 *  없음
 * @return {Promise} : 사용자 설정 정보 값.
*/

getPersonalPatientSessionSyncSetting()
{{</highlight>}}

**25. setPersonalPatientSessionSyncSetting**

{{<highlight javascript>}}
/*
 * 환자 세션을 브라우저 다른 탭과 공유할 지 여부 설정 값 저장
 * @param
 *  1.settingValue {object} 사용자 설정 정보 값
 *  2.description {string} 설정 값 설명
 * @return {Promise} : resolve().
*/

setPersonalPatientSessionSyncSetting(settingValue, description = 'personal defalt patient session sync setting information')
{{</highlight>}}

**26. getPersonalPatientInfoTypeSetting**

{{<highlight javascript>}}
/*
 * 환자 정보 창 유현 설정 값 조회
 * ['MI', 'PA']
 * @param
 *  없음
 * @return {Promise} : 사용자 설정 정보 값.
*/

getPersonalPatientInfoTypeSetting()
{{</highlight>}}

**27. setPersonalPatientInfoTypeSetting**

{{<highlight javascript>}}
/*
 * 환자 정보 창 유현 설정 값 저장
 * ['MI', 'PA']
 * @param
 *  1.settingValue {object} 사용자 설정 정보 값
 *  2.description {string} 설정 값 설명
 * @return {Promise} : resolve().
*/

setPersonalPatientInfoTypeSetting(settingValue, description = 'personal defalt patient information type setting information')
{{</highlight>}}

## contextmenu-service
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_Methods_</span>

**1. colorTemplate**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

colorTemplate(color)
{{</highlight>}}

## color-temp-service
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_Methods_</span>

**1. colorTemplate**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

colorTemplate(color)
{{</highlight>}}

## d3-locale-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_Methods_</span>

**1. getLocale**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getLocale(lang)
{{</highlight>}}

## family-icon-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_Methods_</span>

**1. getIcon**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getIcon(icon)
{{</highlight>}}

## locale-format-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

해당 서비스는 i18n-service를 inject하고 있습니다. 중복 로직의 경우를 확인 후 필요없는 로직인 경우 선별해서 제거할 예정입니다.

목적에 대한 간단 설명

#### <span style="color:blue">_Methods_</span>

**1. formatDate**

{{<highlight javascript>}}
/*
 * 18n-service의 중복입니다. 삭제여부 확인필요
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

formatDate(raw, options)
{{</highlight>}}

**2. getLocaleDayNames**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getLocaleDayNames(index)
{{</highlight>}}

**3. getLocaleDayNamesShort**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getLocaleDayNamesShort(index)
{{</highlight>}}

**4. getLocaleDayNamesMin**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getLocaleDayNamesMin(index)
{{</highlight>}}

**5. getLocaleMonthNames**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getLocaleMonthNames(index)
{{</highlight>}}

**6. getLocaleMonthNamesShort**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getLocaleMonthNamesShort(index)
{{</highlight>}}

**7. getEnMonthNames**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getEnMonthNames(index)
{{</highlight>}}

**8. getLocaleFormatName**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getLocaleFormatName(format)
{{</highlight>}}

**9. getMaskISOFormat**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getMaskISOFormat(format)
{{</highlight>}}

**10. getMaskLocaleFormat**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getMaskLocaleFormat(format)
{{</highlight>}}

**11. getMomentLocaleFormat**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getMomentLocaleFormat(format)
{{</highlight>}}

**12. getMaskCurrencyOption**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getMaskCurrencyOption(min, max)
{{</highlight>}}

## toast-service[TA]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

토스트 서비스
//외부에 노출된게 무엇이고 내부페이지에서만 쓰는게 무엇인지 구분이 안가있음......확인 후 수정 필요

#### <span style="color:blue">_Methods_</span>

**1. toastr**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

toastr(key)
{{</highlight>}}

## cache-service[TA]
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

cache 서비스, 상태관리에서 해당 서비스 활용

#### <span style="color:blue">_Methods_</span>

**1. deleteCache**

{{<highlight javascript>}}
/*
 * delete cache
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

deleteCache(key)
{{</highlight>}}

**2. hasCache**

{{<highlight javascript>}}
/*
 * cache 소유 여부 확인
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

hasCache(key)
{{</highlight>}}

**3. setCache**

{{<highlight javascript>}}
/*
 * set cache
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

setCache(key, value)
{{</highlight>}}

**4. getCache**

{{<highlight javascript>}}
/*
 * get cache
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getCache(key)
{{</highlight>}}

**5. clearCache**

{{<highlight javascript>}}
/*
 * clear cache
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

clearCache()
{{</highlight>}}

## config-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

설정 정보 서비스

#### <span style="color:blue">_Variables_</span>

```
/*
 * app 설정
 * @return {타입} : 정보도 적으면 좋음.
*/
config

/*
 * 환경
 * @return {타입} : 정보도 적으면 좋음.
*/
environment
```

#### <span style="color:blue">_Methods_</span>

**1. getEnvConfig**

{{<highlight javascript>}}
/*
 * get Environment Configuration. host의 config의 environment를 바라봄.
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getEnvConfig(configObjectName, configPropertyName)
{{</highlight>}}

**2. getfroalaKey**

{{<highlight javascript>}}
/*
 * get Froala Editor key
 * @return {string} : editor key
*/

getfroalaKey()
{{</highlight>}}

## contextmenu-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

컨텍스트 메뉴 서비스

#### <span style="color:blue">_Methods_</span>

**1. show**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

show()
{{</highlight>}}

**2. close**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

close()
{{</highlight>}}

## logger-manager-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

로깅 매니저 서비스

#### <span style="color:blue">_Methods_</span>

**1. resetEventTraceKey**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

resetEventTraceKey()
{{</highlight>}}

**2. getElapsedTime**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

getElapsedTime()
{{</highlight>}}

**3. setLoggingEmail**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

setLoggingEmail()
{{</highlight>}}

**4. saveAllLogList**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

saveAllLogList()
{{</highlight>}}

**5. assertLog**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

assertLog()
{{</highlight>}}

**6. normalLog**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

normalLog()
{{</highlight>}}

**6. serverCallLog**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

serverCallLog()
{{</highlight>}}

**7. errorLog**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

errorLog()
{{</highlight>}}

**8. auditLog**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

auditLog()
{{</highlight>}}

## menu-event-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

메뉴 이벤트 서비스

#### <span style="color:blue">_Methods_</span>

**1. subscribe**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

subscribe(eventName, menuId, target, func)
{{</highlight>}}

**2. unsubscribe**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

unsubscribe(eventName, menuId, target)
{{</highlight>}}

**3. publish**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

publish(eventName, menuId, data)
{{</highlight>}}

## patient-event-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

환자 이벤트 서비스

#### <span style="color:blue">_Methods_</span>

**1. subscribe**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

subscribe(eventName, menuId, target, func)
{{</highlight>}}

**2. unsubscribe**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

unsubscribe(eventName, menuId, target)
{{</highlight>}}

**3. publish**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

publish(eventName, menuId, data)
{{</highlight>}}

**3. publishAll**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

publishAll(orignEventName, data)
{{</highlight>}}

**4. publishSyncAll**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

publishSyncAll(orignEventName, data)
{{</highlight>}}

**5. taskCallbackUpdate**

{{<highlight javascript>}}
/*
 * 메서드 defintion
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

taskCallbackUpdate(menuId, returnValue)
{{</highlight>}}

## system-context-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

클라이언트 시스템 정보

#### <span style="color:blue">_Variables_</span>

```
/*
 * localIP Address
 * @return {string} : client local Ip
*/
localIPAddress

/*
 * localMAC Address
 * @return {string} : client local MAC
*/
localMacAddress

/*
 * browser
 * @return {string} : client 브라우저 정보
*/
browser

/*
 * os
 * @return {string} : client OS 정보
*/
os

/*
 *userAgent
 * @return {string} : client navigator.userAgent 정보
*/
userAgent

/*
 *fullVersion
 * @return {string} : client navigator.appVersion
*/
fullVersion

```

## i18n-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-global-service) 로 이동

국제화 관련 서비스

#### <span style="color:blue">_Variables_</span>

```

/*
 * ex: ko-kr, en-us
 * @return {타입} : 정보도 적으면 좋음.
*/
currentLocale

/*
 * ex: ko-kr, en-us
 * @return {타입} : 정보도 적으면 좋음.
*/
currencyFormat

/*
 * 타임존
 * @return {타입} : 정보도 적으면 좋음.
*/
currentTimeZone
```

#### <span style="color:blue">_Methods_</span>

**1. getUTCNow**

{{<highlight javascript>}}
/*
 * Get the UTC date/time of time zone
 * @return {date object}
*/

getUTCNow()
{{</highlight>}}

**2. getUTCNowAsync**

{{<highlight javascript>}}
/*
 * Get the UTC date/time of time zone
 * @return {date object}
*/

getUTCNowAsync()
{{</highlight>}}

**3. getTimeZone**

{{<highlight javascript>}}
/*
 * get time zone for the passed date or now(if targetDate is null)
 * @param
 *  1. targetDate {date object}
 *  2. isTargetDateUTC {boolean}
 * @return {string} : timezone
*/

getTimeZone(targetDate=null, isTargetDateUTC=false)
{{</highlight>}}

**4. getTimeZoneById**

{{<highlight javascript>}}
/*
 * get time zone by timezoneId
 * @param
 *  1. timeZoneId {string}
 * @return {string} : timezone
*/

getTimeZoneById(timeZoneId)
{{</highlight>}}

**4. getNow**

{{<highlight javascript>}}
/*
 * get hospital's current time
 * @param
 *  1. timezoneid {string}
 * @return {date object}
*/

getNow(timezoneid=null)
{{</highlight>}}

**5. checkDSTChangingMode**

{{<highlight javascript>}}
/*
 * check the passed time(local) is on the changing period of DST and the mode of chaning period
 * @param
 *  1. targetLocalDate {date obejct}
 * @return {string} :
 *  when mode 1 : repeat
 *  when mode 2 : skip
 *  when mode 0 : none
*/

checkDSTChangingMode(timezoneid=null)
{{</highlight>}}

**6. convertToUTC**
{{<highlight javascript>}}
/*
 * convert hospital's local date to UTC
 * @param
 *  1. localDate {date obejct}
 *  2. timeZoneId {string}
 * @return {date object} : // 무한루프같은데...
*/

convertToUTC(localDate, timeZoneId=null)
{{</highlight>}}

**7. convertToLocal**
{{<highlight javascript>}}
/*
 * convert UTC date to hospital's local date
 * @param
 *  1. utcDate {date obejct}
 * @return {date object} : // 무한루프같은데...
*/

convertToLocal(utcDate)
{{</highlight>}}

**[8. formatDate](#formatDate)**
{{<highlight javascript>}}
/*
 * convert hospital's local date to UTC
 * @param
 *  1. raw {date obejct}
 *  2. options {string} : c, d, D, f, F, g, G, m, M, t
 *  c : [en] Fri, 11/02/2018                          [ko] 2018-11-02 (금)
 *  d : [en] 11/02/2018                               [ko] 2018-11-02
 *  D : [en] Friday, 11/02/2018                       [ko] 2018-11-02 금요일
 *  f : [en] Friday, November 02, 2018, 3:22 PM       [ko] 2018년 11월 02일 금요일 오후 3:27
 *  F : [en] Friday, November 02, 2018, 3:22:01 PM    [ko] 2018년 11월 02일 금요일 오후 3:27:17
 *  g : [en] 11/02/2018, 15:22                        [ko] 2018-11-02 15:27
 *  G : [en] 11/02/2018, 15:22:01                     [ko] 2018-11-02 15:27:17
 *  m : [en] November 02                              [ko] 11월 02일
 *  M : [en] 11/02                                    [ko] 11-02
 *  t : [en] 15:22                                    [ko] 15:27
 *  T : [en] 15:22:01                                 [ko] 15:27:17
 *  u : [en] 11/02/2018, 15:22:01                     [ko] 2018-11-02 15:27:17
 *  U : [en] 11/02/2018, 15:22:01                     [ko] 2018-11-02 15:27:17
 *  y : [en] N 2018                                   [ko] 2018년 11월
 *  Y : [en] 11/2018                                  [ko] 2018-11
 *  w : [en] Fri                                      [ko] 금
 *  W : [en] Friday                                   [ko] 금요일
 * @return {string} :
*/

formatDate(raw, options)
{{</highlight>}}

**9. formatNumber**
{{<highlight javascript>}}
/*
 * 확인필요
 * @param
 * @return {date object} :
*/

formatDate(raw, options)
{{</highlight>}}

**10. getSupportedLocales**
{{<highlight javascript>}}
/*
 * 확인필요
 * @param
 * @return {} :
*/

getSupportedLocales()
{{</highlight>}}

**11. getRegional**
{{<highlight javascript>}}
/*
 * 확인필요
 * @param
 * @return {} :
*/

getRegional()
{{</highlight>}}

**13. getGlobalResource**
{{<highlight javascript>}}
/*
 * 확인필요
 * @param
 * @return {} :
*/

getGlobalResource()
{{</highlight>}}

**14. getResource**
{{<highlight javascript>}}
/*
 * 확인필요
 * @param
 * @return {} :
*/

getResource(engineName)
{{</highlight>}}

**15. getResourceValue**
{{<highlight javascript>}}
/*
 * 확인필요
 * @param
 * @return {} :
*/

getResourceValue(engineName, resourceKey, resType, params)
{{</highlight>}}

## global-service-container
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-global-service) 로 이동

전역적 사용목적 서비스 inject함
#### <span style="color:blue">_Injected Service List_</span>

|서비스명| 목적 | 설명 | 사용여부 |
|---|---|---|---|
|i18nService|||Y|
|localDbService||||
|storageService||||
|hostConfigService||||
|loggerManagerService||||
|systemContextService||||
|uploadHelperService||||
|commonService||||
|languageResourceService||||
|authenticationService||||
|patientManagerService||||
|currentUserService||||
|personalizationService||||
|inactivityMonitorService||||
|menuManagerService||||
|contentsManagerService||||
|contentMessageService||||

## storage-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-global-service) 로 이동

로컬 및 세션 스토리지에 세팅 및 아이템 삭제기능 제공 하는 서비스

#### <span style="color:blue">_Methods_</span>

**1. addItemToLS**

{{<highlight javascript>}}
/*
 * 로컬스토리지에 항목 추가
 * @param
 *  1. key {string}
 *  2. item {json object}
 * @return : 없음
*/

addItemToLS(key, item)
{{</highlight>}}

**2. deleteItemFromLS**

{{<highlight javascript>}}
/*
 * 로컬스토리지에 항목삭제
 * @param
 *  1. key {string}
 * @return : 없음
*/

deleteItemFromLS(key)
{{</highlight>}}

**3. getItemFromLS**

{{<highlight javascript>}}
/*
 * 로컬스토리지에 있는 아이템 얻기
 * @param
 *  1. key {string}
 * @return {json object}
*/

getItemFromLS(key)
{{</highlight>}}

**4. addItemToSS**

{{<highlight javascript>}}
/*
 * 세션스토리지에 항목 추가
 * @param
 *  1. key {string}
 *  2. item {json object}
 * @return : 없음
*/

addItemToSS(key, item)
{{</highlight>}}

**2. deleteItemFromSS**

{{<highlight javascript>}}
/*
 * 세션스토리지에 항목삭제
 * @param
 *  1. key {string}
 * @return : 없음
*/

deleteItemFromSS(key)
{{</highlight>}}

**3. getItemFromSS**

{{<highlight javascript>}}
/*
 * 세션스토리지에 있는 아이템 얻기
 * @param
 *  1. key {string}
 * @return {json object}
*/

getItemFromSS(key)
{{</highlight>}}

## upload-helper-service
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

파일 업로드 및 다운로드를 제공 하는 서비스

#### <span style="color:blue">_Methods_</span>

**1. getFileDownload**

{{<highlight javascript>}}
/*
 * 파일다운로드
 * @param
 *  1. filekey {string} fileKey or fileKey array
 *  2. isCommon {boolean}
 *   - true: common file [ 병원에 종속되지 않음 ]
 *   - false: 병원에 종속
 * @return : 없음
*/

getFileDownload(fileKey, isCommon)
{{</highlight>}}

**2. getFileView**

{{<highlight javascript>}}
/*
 * 이미지 로드
 * @param
 *  1. filekey {string} fileKey or fileKey array
 *  2. isCommon {boolean}
 *   - true: common file [ 병원에 종속되지 않음 ]
 *   - false: 병원에 종속
 * @return {Promise} : Promise object
 * @thenable Value {Array}
 *  1. [0] : Downloaded file Info Object
 *  2. [1] : url string
*/

getFileView(fileKey, isCommon)
{{</highlight>}}

**3. putFileObject**

{{<highlight javascript>}}
/*
 * 병원에 종속된 이미지 업로드 시
 * @param
 *  1. viewID {string} CCMP Display Code
 *  2. files {FileList}
 *  3. isPdfConvertToPng {boolean}
 *    - true : pdf 파일원본과 png convert 된 분할된 파일이 업로드됨
 *    - false : pdf 파일 그대로 업로드됨
 *  4. isToastOff {boolean}
 *    - true : 업로드 완료 토스트 로드됨.
 *    - false : 실패의 경우만 토스트 로드됨.
 * @return {Promise} : Promise object
 * @thenable Value {Array}
 *  1. [0] : Uploaded file Info Object
*/

putFileObject(viewID, files, isPdfConvertToPng, isToastOff)
{{</highlight>}}

**4. putCommonFileObject**

{{<highlight javascript>}}
/*
 * 병원에 종속되지 않는 common 이미지 업로드 시
 * @param
 *  1. viewID {string} CCMP Display Code
 *  2. files {FileList}
 *  3. folderName {string} 공통 파일 버킷 업로드시 중간 파일 경로명
 *  4. isPdfConvertToPng {boolean}
 *    - true : pdf 파일원본과 png convert 된 분할된 파일이 업로드됨
 *    - false : pdf 파일 그대로 업로드됨
 *  5. isToastOff {boolean}
 *    - true : 업로드 완료 토스트 로드됨.
 *    - false : 실패의 경우만 토스트 로드됨.
 * @return {Promise} : Promise object
 * @thenable Value {Array}
 *  1. [0] : Uploaded file Info Object
*/

putCommonFileObject(viewID, files, folderName, isPdfConvertToPng, isToastOff)
{{</highlight>}}

**5. putTempFileObject**

{{<highlight javascript>}}
/*
 * object storage가 아니라 Web Server로 업로드 된다.
 * @param
 *  1. viewID {string} CCMP Display Code
 *  2. files {FileList}
 *  3. isToastOff {boolean}
 *    - true : 업로드 완료 토스트 로드됨.
 *    - false : 실패의 경우만 토스트 로드됨.
 * @return {Promise} : Promise object
 * @thenable Value {Array}
 *  1. [0] : Uploaded file Info Object
*/

putTempFileObject(viewID, files, isToastOff)
{{</highlight>}}

**6. printOfficeFiles**

{{<highlight javascript>}}
/*
 * office file (word, pdf, excel) 프린트 기능
 * @param
 *  1.fileKeyList {array object} 출력하고자 하는 파일의 파일키들을 array형태로 전달
 *  2.isCommon {boolean} 병원에 종속되어있는 파일인지 여부,  
 * @return {Promise} : 웹소켓에 파일키가 전달된 이후 리턴받은 message
*/

printOfficeFiles(fileKeyList, isCommon)
{{</highlight>}}

**7. deleteFileObject**

{{<highlight javascript>}}
/*
 * soft 삭제
 * @param
 *  1.fileKey {string} 삭제하고자 하는 파일의 파일키
 *  2.isCommon {boolean} 병원에 종속되어있는 파일인지 여부,  
 * @return {Promise} : 성공시 thenableValue undefined, 실패시 jQuery jqXHR
*/

deleteFileObject(fileKey, isCommon)
{{</highlight>}}