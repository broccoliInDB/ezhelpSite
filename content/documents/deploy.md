---
title: Deploy
linktitle: Deploy
description: 배포과정에 대한 설명 문서
weight: 705
disableToc: true
draft: false
date: 2019-11-14T13:05:32+09:00
tags: [helpsite deploy]
---

해당 도움말 사이트 [frontendhelpsite](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/frontendhelpsite)의 master 브랜치로 PR 요청후 병합됬을 때 자동으로 배포가 된다.

문제 발생시 [jenkins 개발기](http://jenkins.c-his.com/)의 helpSiteBuild Job Console output을 확인해 보면 된다.

## Deploy 순서
---

{{% notice tip %}}
배포시에 텔레그램으로 어떤 스탭샷들이 배포가 되었는지 공지가 됩니다 따라서 commit message 저장시 어떤 내용의 commit인지 `메세지`를 `명확하게` 작성 부탁드립니다. 
{{% /notice %}}

#### <span style="color:blue">_1. PR 요청 및 요청 생성_</span>
![img](/documents/images/pr1.png?width=700px)

#### <span style="color:blue">_2. PR 승인_</span>
![img](/documents/images/pr2.png?width=700px)

#### <span style="color:blue">_3. merge_</span>
![img](/documents/images/pr3.png?width=700px)

#### <span style="color:blue">_4. 자동 배포: PR이 완료되면 자동으로 배포된다._</span>
![img](/documents/images/pr4.png?width=700px)