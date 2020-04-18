---
title: Frontend Version
linktitle: Frontend Version
description: Host, Common, Framework 버전정보의 대한 문서
weight: 402
disableToc: false
draft: false
date: 2020-01-02T15:42:22+09:00
tags: [frontend version]
---

Ember App의 경우 종속 addon들의 버전정보를 확인하는 여러 방법들 가운데 가장 쉬운방법은 크롬 extension인 <span class="black-stress">Ember Inspector</span> 를 설치하는 것이다.

![img](/release/images/emberinspector.png?width=400px)


설치 후 개발자 도구의 **`Ember`** tab을 통해 아래 그림과 같이 **`host`** 에 종속된 addon들의 버전정보를 확인 할 수 있다.

![img](/release/images/emberinspector2.png?width=800px)

만약 로컬에서 특정버전을 사용할 시에는 package.json에 원하는 버전의 모듈을 참조하도록 변경해서 사용하면 된다.

```
// 수정전
"framework-control": "http://development.c-his.com:6004/npm/framework-control-0.9.41.tgz",
// 수정후
"framework-control": "http://development.c-his.com:6004/npm/framework-control-0.9.41-A.tgz",
```
