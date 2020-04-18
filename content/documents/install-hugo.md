---
title: Install Hugo
linktitle: Install Hugo
description: hugo install 방법
weight: 701
disableToc: false
draft: false
date: 2019-11-11T09:16:45+09:00
tags: [hugo install]
---

공식 사이트로 부터 Hugo Install 하는 방법은 [이곳](https://gohugo.io/getting-started/installing/)을 참조 하면 됩니다.

## Windows
---
#### 1. choco package manager 설치

파워쉘 터미널을 관리자로 열어서 아래 커맨드를 실행한다.
```
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

![img](/documents/images/hugoinstall1_win.jpg)

#### 2. hugo 설치

터미널을 관리자로 열어서 아래 커맨드를 실행한다.
```
choco install hugo -confirm
```

![img](/documents/images/hugoinstall2_win.jpg)

## Linux
---
- [Centos에 hugo 설치하기](https://alanbarber.com/post/install-hugo-on-centos-with-cpanel/)   
- [Ubuntu에 hugo 설치하기](https://hostadvice.com/how-to/how-to-install-hugo-on-ubuntu-18-04/)

## Mac
---
brew로 hugo install 하면 됩니다.
```
brew install hugo
```