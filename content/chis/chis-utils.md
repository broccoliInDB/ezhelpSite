---
title: CHIS Utils
linktitle: CHIS Utils
description: CHIS Framework내 Utils 성 제공 함수를 취합 정리한 문서입니다.
weight: 210
disableToc: true
draft: false
date: 2019-11-08T18:18:12+09:00
---
## Date Prototype Override
---
date 객체의 Prototype을 재정의 한 부분입니다.

**1. addDays**

{{<highlight javascript>}}
/*
 * 일자 더하기
 * @param
 *  1.days {number} 더해질 날짜
 * @return {date Object} : 일자 더해진 날짜 객체
*/

addDays(days)
{{</highlight>}}

**2. addMonths**

{{<highlight javascript>}}
/*
 * 월수 더하기
 * @param
 *  1.months {number} 더해질 월수
 * @return {date Object} : 월 더해진 날짜 객체
*/

addMonths(months)
{{</highlight>}}

**3. addYears**

{{<highlight javascript>}}
/*
 * 년수 더하기
 * @param
 *  1.years {number} 더해질 년수
 * @return {date Object} : 년 더해진 날짜 객체
*/

addYears(years)
{{</highlight>}}

**4. addHours**

{{<highlight javascript>}}
/*
 * 시간 더하기
 * @param
 *  1.hours {number} 더해질 시간
 * @return {date Object} : 시간 더해진 날짜 객체
*/

addHours(hours)
{{</highlight>}}

**5. addMinutes**

{{<highlight javascript>}}
/*
 * 분 더하기
 * @param
 *  1.minutes {number} 더해질 시간
 * @return {date Object} : 분 더해진 날짜 객체
*/

addMinutes(minutes)
{{</highlight>}}

**6. toStandardDateString**

{{<highlight javascript>}}
/*
 * 'YYYY-MM-DD' 로 리턴하기
 * @return {string} : YYYY-MM-DD
*/

toStandardDateString()
{{</highlight>}}

**7. Equals**

{{<highlight javascript>}}
/*
 * 값자체가 동일한지 비교
 * @param {date Object} : 비교할 date
 * 1. compareDate
 * @return {boolean} 
*/

Equals(compareDate)
{{</highlight>}}

**8. getDisplayMonth**

{{<highlight javascript>}}
/*
 * 현재 월 넘버 타입으로 리턴
 * @return {number} 
*/

getDisplayMonth()
{{</highlight>}}

**9. toAge**

{{<highlight javascript>}}
/*
 * 만 나이 리턴
 * @param {date Object} : 오늘날짜
 * today
 * @return {number} 
*/

toAge(today)
{{</highlight>}}

**10. toString**

{{<highlight javascript>}}
/*
 * 'YYYY-MM-DD HH:mm:ss'
 * @return {string} 
*/

toString()
{{</highlight>}}

**11. toUTCISOString**

{{<highlight javascript>}}
/*
 * ex: '2019-11-13T07:50:51.903Z'
 * return toISOString()
 * @return {string} 
*/

toUTCISOString()
{{</highlight>}}

**12. toFormatString**

{{<highlight javascript>}}
/*
 * 조건의 따른 포맷 string 형태로 리턴
 * @param {boolean} : 
 * param1: dateOnly
 * param2: displayMilliseconds
 * @return {string} 
*/
//no params -> '2019-11-13T16:52:25'
//dateOnly true -> '2019-11-13'
//displayMilliseconds true -> '2019-11-13T16:52:57.794000'

toFormatString(dateOnly, displayMilliseconds)
{{</highlight>}}

**13. toJSON**

{{<highlight javascript>}}
/*
 * return this.toFormatString(false, true);
 * @return {string} 
*/

toJSON()
{{</highlight>}}

**14. Subtract**

{{<highlight javascript>}}
/* 현재시간에서 date1을 빼서 unit 단위로 리턴함
 * @param : 
 * param1{date object}
 * param2{string}: 현재 'minute'밖에 없음 
 * @return {number} 
*/

Subtract(date1, unit)
{{</highlight>}}

**15. convertToUTC**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

convertToUTC(offsetMinutes)
{{</highlight>}}

**16. convertToLocal**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

convertToLocal(offsetMinutes)
{{</highlight>}}

## String Prototype Override
---
string 객체의 Prototype을 재정의 한 부분입니다.

**1. padLeft**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

padLeft(n, str)
{{</highlight>}}

**2. padRight**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

padRight(n, str)
{{</highlight>}}

**3. startsWith**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

startsWith(prefix)
{{</highlight>}}

**4. endsWith**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

endsWith(suffix)
{{</highlight>}}


## objects-are-equal
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/common/#co-patient) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_사용방법_</span>

**1. objectsAreEqual**

{{<highlight javascript>}}
/*
 * Definition
 * @param
 *  1.param1 {타입} 정보도 적으면 좋음
 *  2.parma2 {타입} 정보도 적으면 좋음
 * @return {타입} : 정보도 적으면 좋음.
*/

objectsAreEqual(a, b)
{{</highlight>}}


## Utility
---
[ <i class="fas fa-arrow-up"></i> 상위 카테고리](/chis/framework/#framework-cross-cutting) 로 이동

목적에 대한 간단 설명

#### <span style="color:blue">_사용방법_</span>

**1. getStringCount**

{{<highlight javascript>}}
/*
 * string length 리턴
 * @param 
 *  1. str {string} 
 * @return : number
*/

getStringCount(str)
{{</highlight>}}

**2. getCopy**

{{<highlight javascript>}}
/*
 * object deep Copy
 * @param 
 *  1. obj {object} 
 * @return : object
*/

getCopy(obj)
{{</highlight>}}

<!-- **2. getCurrentEngineName**

{{<highlight javascript>}}
/*
 * engineName 
 * @param 
 *  1. caller {class} 컴포넌트 클래스
 * @return : object
*/

getCurrentEngineName(caller)
{{</highlight>}} -->

**3. toFileSize**

{{<highlight javascript>}}
/*
 * 파일 사이트 리턴
 * @param 
 *  1. size {number} 
 * @return {string} file size
*/

toFileSize(size)
{{</highlight>}}