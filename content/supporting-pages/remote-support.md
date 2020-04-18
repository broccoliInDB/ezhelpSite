---
title: 원격 지원
linktitle: 원격 지원
description: 원격 지원 관련 문서입니다.
weight: 508
disableToc: false
draft: false
date: 2020-03-18T15:23:07+09:00
---

원격지원 방법과 원격지원 프로그램 설치의 대한 설명을 담을 문서 입니다.

원격프로그램은 teamviewer의 Quicksupport라는 모듈로 Customized 된 EDGE&NEXT Support라는 명칭을 가지고 있습니다.  

![img](/supporting-pages/images/remote1.png?width=50px) 해당 아이콘은 메인창의 좌측하단에 있습니다. 

해당 아이콘을 클릭할 때 **라이브업데이트 모듈**이 이 **<span class='colored'>원격 모듈(EDGE&NEXT Support)</span>**의 설치여부를 판단합니다. 

라이브업데이트가 **설치하지 않아도** **<span class='colored'>원격 모듈(EDGE&NEXT Support)</span>**설치는 가능함.

원격모듈이 설치되었다면 더블클릭으로 파일을 실행함으로써 원격지원을 받을 수가 있다.

<i class="fas fa-exclamation-triangle chis-exclamation">LiveUpdate 모듈과 원격접속모듈(EDGE&NEXT Support)은 별개의 모듈입니다.</i>  

 단지 LiveUpdate 모듈은 로컬피씨의 원격모듈 설치여부를 판단하여 로컬에 재설치하는 일이 없도록 하기 위한 방편입니다. 
 
 로컬에 라이브업데이트모듈, 원격모듈 모두가 설치되어있다면 로컬의 설치된 원격모듈 프로그램을 바로 실행시켜줍니다.
 
 예외상황으로 라이브업데이트가 원격모듈을 실행시켜주지 못할 때에는 **메세지박스로 안내를 합니다.** 

## (병원관계자용)설치
---
해당 프로그램은 원격컨트롤을 받는사람 즉, 병원사용자용 프로그램입니다. 

<i class="fas fa-info-circle"></i> 관리자로서 원격컨트롤을 하는 프로그램은 [팀뷰어 공식사이트](https://www.teamviewer.com/en/teamviewer-automatic-download/)에서 다운받아서 부여받은 계정으로 로그인하여 사용합니다. 

어플리케이션 자체는 무료버전이나 비지니스버전이나 동일합니다. 라이센스는 사용하는 계정을 따라가기 때문에 무료버전 full application 다운받으시면 됩니다.

#### <span style="color:blue">_Windows_</span>

**<span class='colored2'>_1) 라이브 업데이트가 설치가 되어 있지 않은경우_**</span>
![img](/supporting-pages/images/remote4.jpg?width=300px)

위와 같은 메세지가 뜬다. remote 모듈과는 별도이기 때문에 No를 선택해서 바로 EDGE&NEXT Support만 다운받아도 된다.

**<span class='colored2'>_2) EDGE&NEXT Support가 설치가 되어 있지 않은경우_**</span>
![img](/supporting-pages/images/remote5.png?width=300px)

EDGE&NEXT Support가 설치가 되어있지 않은경우 파일을 다운받고, 실행하면 된다. 

**바탕화면에 옮기는 이유는 나중에 수동으로 실행할 때 실행파일을 찾기 편하게 하려고 하는 목적**입니다. 어디서든 실행할 수 있습니다.

**<span class='colored2'>_3) 라이브업데이트와 EDGE&NEXT Support가 모두 설치되어 있는경우_**</span>
![img](/supporting-pages/images/remote6.png?width=300px)

자동 실행이 됩니다

**<span class='colored2'>_4) 라이브업데이트와 EDGE&NEXT Support가 모두 설치되어 있는데 자동 실행이 되지 않은 경우_**</span>
![img](/supporting-pages/images/remote7.png?width=300px)

새로 다운을 받아도 되지만 이미 설치가 되어있으므로, **바탕화면에서 실행파일을 메뉴얼하게 실행해주세요.**

**<span class='colored2'>_5) 라이브업데이트와 EDGE&NEXT Support가 모두 설치되어 있는데 자동 실행이 되지 않았고, 다운여부를 No 라고 할 경우_**</span>
![img](/supporting-pages/images/remote8.png?width=300px)

설치여부를 No로 했을 경우, **바탕화면에서 실행파일을 메뉴얼하게 실행해주세요.**

#### <span style="color:blue">_Mac_</span>

macOS에서는 현재 라이브업데이트 모듈을 사용할 수 없기 때문에 로컬의 설치여부는 판단할 수 없습니다. 따라서 아래와 같은 메세지로 안내합니다.
![img](/supporting-pages/images/remote3.png?width=300px)

설치후 압축을 풀면 아래 그림처럼 보입니다.

![img](/supporting-pages/images/remote2.png?width=300px)

우측의 TeamViewer QuickSupport로 실행하시면 원격상담이 가능합니다.

#### <span style="color:blue">_그 외 OS_</span>

그 외의 경우는 [원본설치파일링크](https://get.teamviewer.com/edgennext_support)에서 설치파일을 바로 다운받습니다.
해당 url은 서버가 해외에 있어서 한국에서 다운로드시 속도가 매우 오래 걸릴수도 있습니다. 

따라서 클라이언트 피씨가 Windows, macOS의 경우 회사에서 관리하는 서버에 파일을 올려 다운로드 하도록 하였습니다. 

## 실행
---
TeamViewer Full Application과 QuickSupport(EDGE&NEXT Support) 두개모듈이 동시에 실행이 되지는 않습니다. 

따라서 이미 기존 피씨에 TeamViewer Full Application 모듈이 실행중이라면 해당 프로그램을 종료하고 QuickSupport(EDGE&NEXT Support)를 실행해주시기 바랍니다. 

![img](/supporting-pages/images/remote9.png?width=300px)

EDGE&NEXT Support를 실행하면 위에 이미지와 같이 실행이 됩니다. 따로 원격관리자에게 Session code를 알려줄 필요는 없습니다. 

세션이 등록된 어플리케이션이기 때문에 실행만 시켜주면 원격관리자가 해당 사용자가 원격지원을 요청했음을 알 수 있습니다.

## 사용자(병원관계자)입장 원격프로그램 사용법
---

![img](/supporting-pages/images/remote10.png?width=1000px)

|구분| 명칭 | 목적 | 비고 |
|---|---|---|---|
| 1 | Your name | 요청자 | 요청자 명은 변경 가능합니다.|
| 2 | Description | 요청상세설명 | 필요시 기입하면 됩니다. 기입시 관리자는 해당 상황을 보다 명확히 알 수 있습니다.|
| 3 | Chat | 원격관리자와 채팅시 사용하시면 됩니다.||
| 4 | Cancel | 종료버튼||

## 관리자입장(원격컨트롤쪽) 원격프로그램 사용법
---
관리자가 TeamViewer Full Application을 사용할 때를 가정하여 설명합니다. 

해당 어플리케이션은 [공식사이트](https://www.teamviewer.com/en/teamviewer-automatic-download/)에서 다운받으세요. 

계정은 이중기부장님이 생성하시고, 인증 및 비밀번호도 마찬가지로 이중기 부장님이 관리하십니다. 

권한 부여는 super admin계정이 sub admin계정들에게 권한을 부여해야 원격컨트롤을 할 수 있습니다.

요청자가 EDGE&NEXT Support 프로그램을 실행하면, full application으로 로그인한 관리자는 OS 플랫폼에 따라 위치는 다르지만 우측상단 혹은 하단으로 토스트메세지로 요청자가 있음을 노티 받습니다.

full application 자체로도 모든기능을 실행할 수 있지만 원격관리자용 사이트(Management console)<a id='management-console'></a>에 접근해서 사용하는것이 시각적으로 쉽습니다.

원격관리자용 사이트(Management console)는 아래이미지를 참고하여 접근바랍니다.

|구분| 명칭 | 목적 | 비고 |
|---|---|---|---|
| 1 | Your name | 요청자 | 요청자 명을 실시간으로 확인할 수 있습니다. 요청자가 요청자명을 변경했어도 code 값인 키값은 유지됩니다. **( 사용자 원격지원 사용의 1에 해당함. )**|
| 2 | Description | 요청상세설명 | 요청자가 요청상세를 입력하면 실시간으로 변경내용을 확인 할 수 있습니다. **( 사용자 원격지원 사용의 2에 해당함. )**|
| 5 | Design & Deploy | QuickSupport를 생성하고 배포할 수 있습니다. | |
| 6 | Group 관리 | 관리하는 그룹을 공유할 수 있습니다. |  QuickSupport를 생성하면 해당 EDGE&NEXT Support와 같은 실행파일이 생성이 되는데 이것은 이미 세션등록이 완료된 실행파일이기 때문에 생성자와 요청자간에 세션만 존재한다.<br><br> 따라서 모든 관리자가 요청자와 세션을 유지하기 위해서는 QuickSupport를 생성한 Super관리자가 본인이 관리하는 세션을 다른 관리자들과 공유해야한다.<br><br>공유하는 방법은 해당 부분을 클릭하고 조회된 그룹표의 설정에서 수정하면 된다.<br> 그렇게 되면 해당 요청자들로부터의 세션을 모든 관리자가 분할하여 관리할 수 있다. |
| 7 | Assignee | 요청자의 세션을 할당받은 관리자를 확인할 수 있다. | 할당방법은 Assign to me를 클릭하면 되고, 요청이 마무리된 세션은 Close session을 통해 종료해준다. |
| 8 | 설정 | 서비스큐(각각의 요청세션)의 수정, 할당, 할당취소, 종료를 할 수 있다. | |

![img](/supporting-pages/images/remote12.png?width=1000px)

위에 이미지와 같이 관리자 계정을 통해 TeamViewer Full Application에 로그인하면 위의 빨간 박스를 통해서 Management Console에 접근할 수 있습니다.

![img](/supporting-pages/images/remote11.png?width=1000px)

Management Console에 접근하면 위와 같이 이미지를 볼 수 있습니다.

## 원격지원시 논의점
---
<span class='black-stress'>🔖 teamviewer 사용관련 종료버튼 관련 정정</span>

사용자프로그램의 cancel버튼을 클릭하라는 목적을 제가 착각해서 잘못 설명드렸습니다.

📌 time자체는 관리자가 아래그림처럼 close세션을 하면 초기화됩니다. 따라서 관리자가 session만 종료하면 time 컬럼을 통해 누가 가장 오래 있었는지 알 수 있습니다.

![img](/supporting-pages/images/remote18.png?width=1000px)

📌 사용자프로그램을 종료해달라 말씀 드린이유는 session을 종료하게되면 사용자쪽 프로그램이 아래 그림과 같이 s00-000-000의 세션으로 변경됩니다.
  해당 세션은 사용할 수 없는 세션입니다. 
  
  하지만 프로그램자체는 아직 작동중이기에 아래 버튼을 종전처럼 클릭한다고 해서 세션이 다시 생성되거나 하진 않습니다. 그래서 이상태로는 원격을 할 수 없습니다.

![img](/supporting-pages/images/remote1.png?width=50px)

![img](/supporting-pages/images/remote19.png?width=200px)

이때는 프로그램을 매뉴얼하게 종료해야 합니다.

아니면 관리자가 세션을 생성한 후 생성된 세션을 사용자에게 알려줘야 합니다.

<br><br>

<span class='black-stress'>🔖 11번째 순번에 대한 것이 굳이 중요하지 않다면</span>  

아무나 중간에 끼어들어가도 된다고 하면 세션을 종료하실 필요는 없습니다. 

그럼 사용자 프로그램을 종료하라 말라 말할 필요도 없습니다.

<i class="fas fa-info-circle"></i>  11번째 사용자가 누군지 알아야 하는지의 여부는 경험후에 사용방식을 결정하는 게 좋겠다고 생각합니다.

## 원격지원 기타정보
---
#### <span style="color:blue">_사용자 등록_</span>

1. 계정이 없는경우는 Company administrator가 등록을 해준다. 
2. 이미 등록된 free 계정을 사용할 경우는 free계정으로 팀뷰어 어플리케이션에 로그인한 후 [join company](https://login.teamviewer.com/cmd/joincompany)로 이동한다.  
이때 사용한 free계정의 모든 권한은 company adminstrator가 가져간다.
3. 마지막으로 company adminstrator는 management console의 User management 탭에서 해당 사용자의 요청을 받아주면 아래와 같이 free 사용자가 coporate사용자로 변경된다.

**<span class='colored'>free</span>**
![img](/supporting-pages/images/remote_access2.png?width=1000px)

**<span class='colored'>coporate</span>**
![img](/supporting-pages/images/remote_access3.png?width=1000px)

<i class="fas fa-info-circle"></i> 사용자 등록은 하나의 company adminstrator 당 최대 200개의 계정이 등록가능하다. 따라서 관리자중 퇴사자가 발생하는경우 관리자는 해당 계정을 삭제해야한다.

#### <span style="color:blue">_라이센스 관련_</span>
팀뷰어는 상업적인 이용을 할 때는 원격통신 양자간 어느 한쪽이 라이센스를 가지고 있어야한다. 

따라서 원격지원을 해주는 쪽이 라이센스를 가지고 있는 계정을 사용하면 상대방이 라이센스가 없어도 전혀 문제가 없다.  

#### <span style="color:blue">_Quick Support_</span>
현재 개발기 및 운영기 스테이징에 원격아이콘에 링크된 모듈은 Quick Support라는 실행파일이다. 해당 파일은 원격지원만을 목적으로한 작은 app입니다.

사용하고자 하는 pc에 full application 과 작은 app 여러개가 모두 있어도 괜찮지만 실행은 하나밖에는 할 수가 없습니다.

full application 은 팀뷰어가 제공하는 모든 작은 app들이 가진 기능을 사용할 수 있지만 특화된 기능이 필요로할 때는 Quick Support와 같은 작은 app을 사용하는 것이 좋습니다.

- Quick Support는 생성시 세션이 이미 등록된 모듈이기에 사용하는 세션값이나 비밀번호 등을 원격통제쪽에 알릴 필요가 없습니다.
- 원격지원에 필요한 부분만 뽑아 만든 실행파일이라 설치할 필요도 사이즈가 불필요하게 크지도 않습니다.

#### <span style="color:blue">_Quick Support 생성 및 배포_</span>
Quick Support는 무료계정이든 유료계정이든 누구나 [management console](/supporting-pages/remote-support/#management-console)을 통해 만들수 있습니다. 

단지 무료계정의 경우 추후 테스트기간이 끝나면 5분간만 유지되는 세션시간 제한이 생기고, 유료계정의 경우는 Company administrator로 부터 모든 권한을 부여받았을 때 권한이 생긴다.

Quick support를 통해 생성한 모듈은 생성시 세션 및 사용자의 그룹을 등록 후 만들기 때문에 해당 그룹의 대한 공유가 이루어져야만 모든 관리자에게 원격 요청이 공유된다.

공유 작업은 management console 에서도 되고, full application 에서도 됩니다.

**<span class='colored'>생성 툴</span>**
![img](/supporting-pages/images/remote13.png?width=1000px)

**<span class='colored'>customized</span>**
![img](/supporting-pages/images/remote15.png?width=1000px)

아래 빨간 박스 부분이 수정되면 기존에 배포된 실행파일이 제대로 동작하지 않을 수 있습니다. <i class="fas fa-exclamation-triangle chis-exclamation"></i> 유의바랍니다.

그 밖에 여러 다른 요소들이 수정될 수 있으나 수정되게 되면 당연히 배포도 모두 다시 이루어져야 합니다.

**<span class='colored'>사용자그룹 권한 공유</span>**
![img](/supporting-pages/images/remote14.png?width=1000px)

#### <span style="color:blue">_세션 생성_</span>
팀뷰어 full application을 통해서도 세션을 생성할 수 있습니다.
![img](/supporting-pages/images/remote16.png?width=1000px)
![img](/supporting-pages/images/remote17_1.png?width=1000px)

병원관계자에게 두번째 이미지의 빨간박스의 세션코드를 넘겨주면 s00-000-000으로 되어있는 세션코드를 수정하여 원격을 진행 할 수 있습니다.

#### <span style="color:blue">_troble shooting_</span>

**<span class='colored'>Mangement Console의 Quicksupport 모듈 생성 및 배포 화면</span>**
![img](/supporting-pages/images/error1.png?width=1000px)

**<span class='colored'>Quick Support 모듈 실행시</span>**
![img](/supporting-pages/images/error2.png?width=1000px)

해당에러가 테스트간 발생했었는데, 발생 원인은 팀뷰어에 문의한 상태입니다.

1번의 대한 부분은 답변을 아직 받지 못했습니다. 추후 공유할게요.

2번은 해당시간대(3월24일)에 서버이슈가 있었다고 합니다. [팀뷰어 서버상태](https://status.teamviewer.com/) 는 해당 링크에서 확인 가능합니다. 타임존은 중부유럽 표준시입니다.

<i class="fas fa-info-circle"></i> 팀뷰어 기술지원센터 전화번호 : 070-7488-3982 (한국시간 15:30~16:30 분에 전화통화가 쉽습니다.);