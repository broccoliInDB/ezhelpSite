---
title: 2 Factor Authentication
linktitle: 2 Factor Authentication
description: 인증코드로 인증절차를 한번 더 진행하는 2FA 로그인에 관한 문서입니다.
weight: 509
disableToc: false
draft: false
date: 2019-12-23T12:12:02+09:00
---

로그인페이지는 로그인하는 네트워크망이 병원망인지 아닌지에 따라 일반 로그인 화면이냐 2FA 화면이냐로 나뉘어집니다.

**/trustnet/v1/check** API를 통해 내부망일경우 true, 외부망일경우 false로 구분합니다.

**<span class='colored'>로그인 순서</span>**

**1.** 아이디, 비밀번호 입력  
**2.** 인증코드 발송  
**3.** 인증확인 (인증코드는 3분간 유효합니다.)  
**4.** 로그인  

## 화면설명
---
#### <span style="color:blue">_문제없이 2FA 로그인시 순서_</span>

**<span class='colored2'><i class="fas fa-info-circle"></i> _외부망일때 첫 화면_</span>**
![img](/supporting-pages/images/2fa1.png?width=500px)
<br><br>

**<span class='colored2'><i class="fas fa-info-circle"></i> _아이디 비밀번호 입력후 인증코드 발송시_</span>**
![img](/supporting-pages/images/2fa2.png?width=500px)
<br><br>

**<span class='colored2'><i class="fas fa-info-circle"></i> _인증코드 확인시_</span>**
![img](/supporting-pages/images/2fa3.png?width=500px)
<br><br>

#### <span style="color:blue">_예외의 경우_</span>

**<span class='colored2'><i class="fas fa-info-circle"></i> _등록된 아이디가 아닌경우_</span>**
![img](/supporting-pages/images/2fa4.png?width=500px)
<br><br>

**<span class='colored2'><i class="fas fa-info-circle"></i> _인증코드가 틀릴 경우_</span>**
![img](/supporting-pages/images/2fa5.png?width=500px)
<br><br>

**<span class='colored2'><i class="fas fa-info-circle"></i> _비밀번호가 틀릴 경우_</span>**
![img](/supporting-pages/images/2fa6.png?width=500px)
<br><br>

**<span class='colored2'><i class="fas fa-info-circle"></i> _로그인 비활성화 강제로 풀고 인증없이 아이디와 비번으로만 강제 접근시_</span>**
![img](/supporting-pages/images/2fa7.png?width=500px)
<br><br>

