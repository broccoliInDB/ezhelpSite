---
title: Design Sample
linktitle: Design Sample
description: UX 팀의 Design Sample Repo 실행 방법 입니다. 일반 개발자 분들은 넘어가셔도 좋습니다.
weight: 00013
disableToc: false
draft: false
date: 2019-10-17T09:25:25+09:00
tags: [design sample]
---

이 부분은 UX 팀의 design sample을 로드하는 부분입니다. 다른 업무 개발자 분들은 넘어가셔도 됩니다.

## 1. design-sample clone
___

**design-sample** Repository를 clone 한다.

**<span class="colored2">http 사용시</span>** 
```
git clone http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/design-sample
```
**<span class="colored2">ssh 사용시</span>** 
```
git clone ssh://tfs.c-his.com:22/tfs/DefaultCollection/Source-FrontEnd/_git/design-sample
```


## 2. 파이썬 웹서버를 이용하자 
___

**design-sample**을 클론 받으면 이제 파이썬을 설치하자 파이썬이 설치가 되어 있다면 다음 단계로 넘어가면 된다.

#### <span style="color:blue">_파이썬 설치_</span>

  - 최신버전의 리눅스나 맥은 이미 설치가 되어 있을 것이다.
  - 윈도우에 파이썬 설치 방법 : **[설치경로](https://www.python.org/downloads/)**: [https://www.python.org/downloads/](https://www.python.org/downloads/)
  - 설치진행시 **환경변수** 포함 꼭 체크하기
  - 파이썬 3.x 버전을 설치 마법사가 권장하는 디폴트로 설치하면 됨.

  ![img](/getting-started/images/python1.png?width=600px)

#### <span style="color:blue">_파이선 설치 확인(Win, Linux, Mac 공통)_</span>
**<span class="colored2">windows</span>** 

```
python --version
```
**<span class="colored2">Mac, Linux</span>** 

```
python3 --version
```

#### <span style="color:blue">_웹서버 실행_</span>
**design-sample** 을 클론받게 되면 html, public폴더가 보일텐데, **html 폴더**로 가면 **_html\_list.html_** 이란 파일이 보일 것이다. 그곳이 있는 폴더 내에서 아래 명령어를 치면 된다.

**<span class="colored2">Windows</span>** 

```
python -m http.server 1234

//종료방법
ctrl + c 
```

**<span class="colored2">Mac & Linux</span>** 

```
//1234번 포트로 서버실행
python3 -m http.server 1234

//종료방법
ctrl + c or command +  c
```

#### <span style="color:blue">_웹서버 실행 후 화면_</span>

웹서버를 실행하면 **화면1**이 보일것이고 html_list.html을 클릭하면 **화면2**로 이동한다. 

이후 필요에 따라 **CHIS app host**를 빌드하면 끝이다.

**<span class="colored2">화면1</span>** 
![img](/getting-started/images/design-sample1.png)

**<span class="colored2">화면2</span>** 
![img](/getting-started/images/design-sample2.png)