---
title: 통합 설치 화면
linktitle: 통합 설치 화면
description: CHIS app에서 설치해야할 필수 프로그램의 통합 설치 페이지의 관련된 문서입니다.
weight: 505
disableToc: false
draft: false
date: 2019-11-08T09:02:40+09:00
tags: [통합 설치 화면]
---

현재 통합 설치 페이지에 설치는 자동설치로직이 구현이 되어있지 않습니다. 수동으로 다운로드 한 후에 진행바랍니다.

- Live Update : 인터페이스 관련 모듈들의 최신 버전 설치를 위한 프로그램입니다.

- SignKorea NA 모듈 : 인증서 로그인을 위한 프로그램입니다.

- KMI NA 모듈 : 인증서 로그인을 위한 프로그램입니다.

## Mac / Linux 플랫폼
---

위에 3 프로그램 모두 **Windows 기반 플랫폼**에서 설치가 가능합니다. 맥이나 리눅스 기반의 환경에서는 아래 사진과 같이 **설치불가** 정보가 출력됩니다.

![img](/supporting-pages/images/total-installation.png?width=600px)

맥이나 리눅스 기반의 환경에서는 일반로그인으로 접근 바랍니다.

## Windows
---

<i class="fas fa-info-circle"></i> 통합 설치 페이지 화면은 **인증서 모듈 2개**만 설치하면 로드되지 않습니다. 

**Live Update 모듈**은 app 내부 인터페이스 관련 모듈을 위해서는 반드시 설치해야 하지만 **인증서 로그인시** 설치하지 않아도 괜찮습니다.

#### <span style="color:blue">_인증서 모듈 2개 모두 설치시_</span>
해당 화면은 **<span class="colored">SignKorea NA 모듈</span>**, **<span class="colored">KMI NA 모듈</span>**이 모두 설치가 되어있고 웹 소켓통신이 정상적으로 이루어지면 

![img](/supporting-pages/images/total-installation3.png?width=400px)

사진과 같이 로드 됩니다.

#### <span style="color:blue">_인증서 모듈 1개만 설치시_</span>

![img](/supporting-pages/images/total-installation2.png?width=600px)

위와 같이 설치화면이 뜹니다. 따라서 미설치된 모듈을 다운로드 후 설치 진행 바랍니다. 설치는 설치마법사가 권장하는데로 진행하시면 됩니다. 

현재 **KMI NA 모듈**의 경우 설치 후에도 **`미설치`**라고 뜨며 통합설치 화면이 계속 로드 되는 경우가 있을 수 있습니다. 

- 해당 현상은 해당 모듈 담당자가 인지하고 있는 상태이며 KMI NA 모듈과의 웹소켓 통신이 정상적으로 되지 않아 발생합니다.
- 그런 경우 **켜져있는 모든 브라우저를 종료**하고 다시 브라우저를 로드해보시기 바랍니다.

## KMI NA 모듈 미설치 Trouble shooting
---
브라우저를 재로드해도 해당 현상을 지속되는경우 **작업 관리자** 화면에 세부정보에 KMIClientNA.exe가 실행 중인지 확인 해주시기 바랍니다. 

![img](/supporting-pages/images/kmina.jpg?width=600px)

사진과 같이 정상적으로 실행중이라면 브라우저를 종료후 재로드 할 때 인증서 로그인 창이 로드됩니다.

정상적으로 실행중이지 않다면 기술팀에 문의 주시기 바랍니다.

## kmi 1.0.0.3 업그레이드
---
- 변경사항 : KMI 프로그램 **전자서명이 된 버전이라는 것**

![img](/supporting-pages/images/kmi_1.jpg?width=400px)

전자서명이 되면 안티바이러스 프로그램에서 해당 프로그램을 안전하다고 판단을 내리게 해준다.

**다만,** 현재 KMI 프로그램은 어디에서도 사용된 적이 없기 때문에 여전히 안티바이러스 프로그램들은 KMI 프로그램을 malware의심 파일로 볼 수 있다.

- **`V3`** 프로그램에 경우, 일단 whitelist등록 완료상태, 따라서 V3에서는 안전한파일로 인식됨.  
- **타 안티바이러스 프로그램**의 경우 여전히 malware 의심파일로 여겨질 수 있음. 

<i class="fas fa-info-circle"></i> CHIS를 브라우저에 실행하고 있는 상태에서 프로그램의 **삭제나 설치가 제대로 동작이 되지 않았던것**은 **아직 개선 되지 않았음**.