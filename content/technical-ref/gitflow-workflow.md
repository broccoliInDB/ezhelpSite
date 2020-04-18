---
title: GitFlow WorkFlow
linktitle: GitFlow WorkFlow
description: Git을 이용한 WorkFlow
weight: 602
disableToc: false
draft: false
date: 2019-10-24T11:17:28+09:00
tags: [기술팀 Frontend git workflow]
---
**`기술팀` Frontend Git WorkFlow**는 빈센트 드리센이 제안한 **GitFlow WorkFlow**를 참고함.

- <span class='black-stress'>master</span> 브랜치는 릴리즈 이력관리를 위해서 사용한다.
- <span class='black-stress'>hotfix</span> 브랜치는 배포이후 버그발생시 이를 release 브랜치에서 생성한다.  
수정패치를 master, release, develop브랜치에 병합해준다.
- <span class='black-stress'>release</span> 브랜치는 develop 브랜치를 병합 및 hotfix 관리를 위해 사용한다.
- <span class='black-stress'>develop</span> 브랜치는 기능 개발을 위한 브랜치들을 병합하기 위해 사용한다.
- <span class='black-stress'>feature</span> 브랜치는 기능 개발을 위해 개별적으로 develop 브랜치에서 생성하여 사용한다.  
개별기능개발들을 마치면 develop에 병합후 삭제한다.  
공통으로 작업이 필요한 경우에는 해당 feature 브랜치를 원격지까지 push 해서 작업진행.  
해당 기능개발이 종료되면 원격지와 로컬에 있는 브랜치 모두 삭제한다.  

## hotfix가 발생하지 않은 경우 WorkFlow
---
![img](/technical-ref/images/gitflow1.png?width=800px)

## hotfix가 발생한 경우 WorkFlow
---

![img](/technical-ref/images/gitflow2.png?width=800px)

## hotfix가 발생한 경우 조치사항
---

{{% notice note %}}
아래 열거한 순서는 step by step을 기재하여 TMI가 될 수 있음. 아래 요지만 작성하자면,   
**1.** release에서 hotfix를 따서 작업한다. 있으면 hotfix pull 받아서 그곳에 작업한다.  
**2.** 확인 및 모든 수정 작업이 끝나면, 버저닝 수정후 commit  
**3.** 해당 addon release, master, develop에 머지한다.   
**4.** 해당 addon master 브랜치에 tagging 후 소스 및 tag push  
**5.** host master브랜치에 수정된 addon 버전 수정 [ 각 환경유념해서 모두 바꾼다. ]  
**6.** commit, taging 작업, 소스 및 tag push  
**7.** 추가로 아래순서의 10번 과정 진행    
{{% /notice %}}

1) <span class='black-stress'>HEAD : release</span> on **버그**있는 **`addon`**  

- 해당 작업자는 원격지에 hotfix 브랜치가 있다면 클론, 없다면 release브랜치에서 hotfix 브랜치를 생성한다.

2) <span class='black-stress'>HEAD : hotfix</span> on **버그**있는 **`addon`**  

- 소스를 수정하기 전 해당 package.json의 version에 -A, -B, -C 순서대로 버저닝을 수정해준다.

```
//ASIS
 "version": "0.9.41",
//TOBE
  "version": "0.9.41-A",
```

3) <span class='black-stress'>HEAD : hotfix</span> on **버그**있는 **`addon`**  

- 소스를 수정하여 테스트를 진행한다.  

4) <span class='black-stress'>HEAD : hotfix</span> on **버그**있는 **`addon`**  

- 테스트 완료후 해당 addon 을 각각 relese, master, develop 브랜치에 병합 혹은 cherry-pick을 해준다.

5) <span class='black-stress'>HEAD : master</span> on **버그**있는 **`addon`**  

- 해당 repository의 master 브랜치에 [태그정보](/technical-ref/git/#span-style-color-blue-tag-span)를 넣어준다.   
- git tag 사용법을 모른다면 태그정보의 링크를 참조한다.   
- 이 때 반드시 `-a` `-m` 옵션을 사용하여 어떤 부분이 hotfix 된것인지 반드시 작성해 준다.

```
git tag -a v0.9.41-A -m"framework-control v0.9.41-A로 수정"
```

6) <span class='black-stress'>HEAD : master</span> on **버그**있는 **`addon`**  

- **버그**가 수정된 **`addon`**을 원격지에 push 해준다.
- **버그**가 수정된 **`addon`**을 tgz로 팩킹해서 개발기, 스테이징쪽에 ftp로 전달해준다. 
- 이후 tag를 원격지에 push 한다.

```
git push origin <tag명>
```

7) <span class='black-stress'>HEAD : master</span> on **`host`**  

- host master 브랜치의 각환경에 맞는 package.json에 변경이 발생한 종속 addon을 수정버전으로 변경해준다.  **참고**로 <i class="fas fa-info-circle"></i> host 의 버저닝은 호스트를 hotfix해줄때 해주는 것이다. **헷갈리면 안된다.**  

![img](/technical-ref/images/gitflow3.png?width=500px)

```
// 버그 있는 addon의 ASIS 예시) framework-control
"framework-control": "http://development.c-his.com:6004/npm/framework-control-0.9.41.tgz",
// 버그 있는 addon의 TOBE 예시) framework-control
"framework-control": "http://development.c-his.com:6004/npm/framework-control-0.9.41-A.tgz",
```

- 이후 변경사항을 commit 해준다. 

8) <span class='black-stress'>HEAD : master</span> on **`host`**  

- host master tag추가한다.

```
git tag -a v0.9.41-A -m"framework-control v0.9.41-A로 수정"
```

9) <span class='black-stress'>HEAD : master</span> on **`host`**

- 이때 각 환경의 맞는 package.json이 잘 적용된건지 push전 확인해준다.
- 수정된 host master를 원격지에 push 한다.  
- 이후 tag를 원격지에 push 한다.

```
git push origin <tag명>
```

10) [이곳](/release/version/#최신-chis-frontend-framework-버전정보)에 변경된 버전정보 수정후 [배포](/documents/deploy/)한다.