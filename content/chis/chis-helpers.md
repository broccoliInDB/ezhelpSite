---
title: CHIS Helpers
linktitle: CHIS Helpers
description: CHIS Framework, Common내 제공되는 Helpers를 취합 정리한 문서입니다. 
weight: 209
disableToc: false
draft: false
date: 2019-11-07T09:02:12+09:00
tags: [helpers]
---
## co-viewcomponent-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-ui) 로 이동

## fr-array-includes-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-array-statistics-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-array
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-blank-convert-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

{{<highlight javascript>}}
/*
 * 문자열에 포함된 공백을 html 공백 특수문자 '&nbsp'로 변환
 * @param
 *  str {string} : 변환 할 문자열 전달
 * @return {string} : 비교값 반환
*/
{{fr-blank-convert-helper str }}
{{</highlight>}}

## fr-data-compare-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

{{<highlight javascript>}}
/*
 * 첫번째 매개변수로 비교식을 전달하여 비교대상과의 비교값 반환
 * @param
 *  operator {string} : 'eq'|'not-eq'|'not'|'and'|'or'|'xor'|'gt'|'gte'|'lt'|'lte
 *  comp1 {object} 
 *  comp2 {object} 
 * @return {string} : 비교값 반환
*/
{{fr-data-compare-helper operator comp1 comp2 }}
{{</highlight>}}

## fr-eq
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-equal
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-filter-style-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-format-date
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-format-result-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-grid-block-param-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-grid-display-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-grid-merge-height-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-grid-merge-render-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-grid-merge-rowspan-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-grid-selected-cell-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-grid-selected-row-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-grid-unbound-style-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-html-safe-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

{{<highlight javascript>}}
/*
 * SafeString A string that will not be HTML escaped by Handlebars.
 * @param
 *  param1 {array} 
 * @return {string}
*/
{{fr-isodateformat-helper param1 }}
{{</highlight>}}

## fr-inverse-boolean-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

{{<highlight javascript>}}
/*
 * return reverse param into boolean
 * @param
 *  param1  
 * @return {boolean}
*/
{{fr-isodateformat-helper param1 }}
{{</highlight>}}

## fr-isodateformat-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

{{<highlight javascript>}}
/*
 * return 'YYYY-MM-DDTHH:mm:ss.SSS'
 * @param
 *  param1 {date object} 
 * @return {string}
*/
{{fr-isodateformat-helper param1 }}
{{</highlight>}}

## fr-numeric-addition-helper
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

{{<highlight javascript>}}
/*
 * return params.reduce(param1 + param2), params들을 축적해서 최종 합을 리턴시킴
 * @param
 *  param1 {number} 
 *  param2 {number} 
 *  ... 
 * @return {number}
*/
{{fr-numeric-addition-helper param1 param2 ... }}
{{</highlight>}}

```html
//ex

//15 return {number}
{{fr-numeric-addition-helper 1 2 3 4 5 }}

//12345 return {string}
{{fr-numeric-addition-helper '1' 2 3 4 5 }}
```

## fr-resource
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.key {string} : resource key
 *  2.resourceType {string} : F [Full] / S [Short] 
 *  3.description : 용어 설명
 *  4.target : this  
 * @return {}
*/
{{fr-resource key resourceType description target=this}}
{{</highlight>}}

```html
//ex
{{fr-resource 'tempkey' 'F' description='신규추가' target=this}}
```

## fr-service-code
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-control) 로 이동

## fr-trigger-action
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

[runTriggerAction](/chis/chis-mixins/#trigger-action-mixin-ta)을 헬퍼로 구현, Action 호출시 depth 관계없이 자식에서 부모로 직접 호출 역할 목적의 로직

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.owner {component} : owner component
 *  2.actionName {string} : Action name
 *  3.isBubbling {boolian} : false 직접 부모 action 호출, true step by step 일반적으로 CB 호출  
 *  4.param  : parameters
 * @return 없음.
*/
{{fr-trigger-action owner, actionName, isBubbling=true, ...params}}
{{</highlight>}}

```html
//ex
{{fr-trigger-action this 'onBubbling' isBubbling param1 param2 ... paramN}}
```

  - 참고 소스 [testboard triggerAction 브랜치](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard?version=GBtriggerAction)
  - 실행 방법은 [README](http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard?path=%2FREADME.md&version=GBtriggerAction&_a=preview) 를 확인하시기 바랍니다.