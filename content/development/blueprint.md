---
title: Blueprint
linktitle: Blueprint
description: CHIS Blueprint 의 대한 사용법의 대한 문서입니다.
weight: 305
disableToc: false
draft: false
date: 2019-11-28T09:40:32+09:00
tags: [blueprint]
---
Ember Command Line Interface는 특정한 커맨드를 제공해서 사용자가 필요로하는 app structure를 명령어로 생성하게 해준다.

이때 기본적으로 생성되는 구조의 템플릿 번들을 블루프린트라고 칭한다. 

CHIS app에서 제공하는 몇가지 custom blueprint 사용법은 아래와 같다.

## chis-app
---
업무모듈 addon 생성

```
//명령위치 : host
//ex : testboard 도메인

ember g chis-app ../testboard/engine
```

## chis-addon
---
업무모듈 engine 생성

```
//명령위치 : host
//ex : testboard 도메인

ember g chis-addon ../testboard/module
```

## component
---
component 생성
component는 생성시 항상 kebab-case로 생성해준다.

```
//명령위치 : 도메인/module
//ex : test-board component

ember g component test-board
```

## service
---
서비스 생성
서비스는 생성시 항상 -service라는 접미사를 붙인다.

```
//명령위치 : 도메인/module

ember g service test-service
```

## model
---
model 생성

```
//명령위치 : 도메인/module

ember g model test-model
```