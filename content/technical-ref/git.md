---
title: Git
linktitle: Git
description: Git의 기본적인 명령어와 사용법의 관한 문서
weight: 601
disableToc: false
draft: false
date: 2019-10-24T11:17:28+09:00
tags: [git]
---
{{% notice tip %}}
협업을 진행함에 있어 깃을 통해서 소스관리를 한다면 다른 무엇보다 기본되는 사항이 하나있다.  
그것은 바로 특정 작업을 진행할 때  
1. 기본이되는 main 브랜치에서 따로 브랜치를 만들어서 작업을 진행한다.  
2. 해당 작업이 완료된 이후 main브랜치로 병합을 담당자가 직접 진행해야한다는 것이다.  
{{% /notice %}}

Git은 소스관리를 해주는 도구이며, Git이 생성된 이후 작성된 모든 소스의 대한 이력을 알 수 있게 도와 준다.

git 은 GUI를 통해서 사용할 수도 있고 터미널을 통해서 사용할 수도 있지만, 여러기능을 잘 활용하기 위해서는 터미널을 사용하는 것이 좋다. 


git 명령어가 익숙하지 않은 분들은
[온라인 git 연습 사이트](https://git-school.github.io/visualizing-git/)를 통해 기본적인 git 명령어를 숙지하면 좋다.

git 공식 문서는 [이곳](https://git-scm.com/doc)을 참조

## 기본 명칭
---
#### <span style="color:blue">_Remote_</span>

**`원격저장소`**를 의미한다.
즉 **`TFS`**나 **`깃허브`**와 같은 깃 프로젝트를 지원하는 웹 호스팅서비스에 위치한 `레파지터리`이다.

#### <span style="color:blue">_Repository_</span>

**`저장소`**를 의미하며 저장소가 가지고 있는 git을 통해 소스코드의 변경이력을 확인 할 수 있다. 각 저장소는 하나의 git을 가지고 있다.

#### <span style="color:blue">_Branch_</span>

**`git`**은 **commitId**를 통해 각각의 스냅샷이 구분된다. 이 각각의 snapshot들은 브랜치를 가지고 있을 수도 있고 없을 수 도 있는데, 

- 이때 **`브랜치`**는 각각의 작업단위로 구분되어 독립적인 작업을 할 수 있게 도와준다.
- default 브랜치는 master이고 필요에 따라서 여러 브랜치를 생성하고 삭제할 수 있다.

#### <span style="color:blue">_HEAD_</span>

HEAD는 현재 작업공간이 바라보고 있는 스냅샷의 위치를 가리킨다. 

#### <span style="color:blue">_Working Directory_</span>

git이 스탭샷으로 각각이 히스토리를 기억하기 위해서는 Commit 단계를 거쳐야한다. 

- 이 때 개발자가 git init()을 통해 생성한 코딩 **`작업공간`**을 말한다.

#### <span style="color:blue">_Index_</span>

**Working directory**에서 작업을 완료하고 commit을 할 때 `스테이징`에 먼저 올려야한다. 
commit은 스테이징에 올라간 항목들만 진행할 수 있는데,

- 이 때 이 staged된 항목들이 위치한 곳을 **`Index`** 하고 **staging area** 라고도 한다.

#### <span style="color:blue">_Local Repository_</span>

스테이징에 올라간 소스들은 commit 하게 되면 그 때서야 비로소 하나의 커밋이 완료된다.
이렇게 commit 된 소스들은 원격지저장소가 아닌 로컬저장소에 담기는데 

- 이 때 이 **`로컬저장소`**를 **Local Repository**라고 한다.

## .gitignore
---
git 버전관리 대상에서 제외해야 할 경우 제외 항목들을 이 숨김파일에 등록해둔다.

**.gitignore**는 **.git** 폴더와 동일한 depth에 위치한다. 

#### <span style="color:blue">_CHIS 프로젝트의 표준 .gitignore_</span>

```
# See https://help.github.com/ignore-files/ for more about ignoring files.

# compiled output
dist/
tmp/

# dependencies
node_modules/
bower_components/

# misc
/.sass-cache
/connect.lock
coverage/
/libpeerconnection.log
npm-debug.log*
yarn-error.log
testem.log
package-lock.json
yarn.lock
*.tgz

# ember-try
.node_modules.ember-try/
bower.json.ember-try
package.json.ember-try
```

#### <span style="color:blue">_.gitignore 설정후에 정상적으로 적용되지 않을때_</span>

.gitignore가 제대로 작동되지 않아서 ignore처리된 파일이 자꾸 changes에 나올때가 있다면

git의 캐시가 문제가 되는거라 아래 명령어로 캐시 내용을 전부 삭제후 다시 add All해서 커밋진행

```
git rm -r --cached .
git add .
git commit -m "fixed untracked files"
```


## Commit - Push - Pull 관계도
---
![img](/technical-ref/images/gitbasic.png)

간략하게 commit-push-pull의 관계도를 표현하면 위와 같다.

  - Working directory-Index-Local Repository 까지의 변경된 소스의 스냅샷은   작업자의 로컬에 위치한다.
  - Remote Repository에 Push를 함으로써 원격저장소까지 해당 스냅샷이 반영된다.
  - Clone, Pull, Fetch를 통해서 원격저장소로부터 로컬작업공간으로 소스의 변경사항을 가지고 올 수 있다.

## 기본 명령어
---

\-\-help 나 -h 옵션 사용시 명령어나 해당 명령어 옵션의 사용법을 확인 할 수 있다.

```
//도움
git --help

//명령어 도움
git remote -h
```

#### <span style="color:blue">_PUSH_</span>

의미: 리모트 저장소에 현재 브랜치를 올린다.

<i class="fas fa-info-circle"></i> [.gitignore](/technical-ref/git/#gitignore)를 통해 불필요한 파일들이 원격저장소에 올라가지 않도록 한다.

- default remote alias인 origin 생략 가능. 
- 즉, git push는 git push origin 과 같음

```
git push [remote] [branch_name]
```

#### <span style="color:blue">_PULL_</span>

의미: 리모트 저장소로 부터 현재 브랜치를 내려받고 병합한다

- default remote alias인 origin 생략 가능. 
- 즉, git pull은 git pull origin 과 같음
- git fetch + git merge가 합쳐진 개념

```
git pull [remote] [branch_name]
```

#### <span style="color:blue">_FETCH_</span>

의미: 리모트 저장소로 부터 현재 브랜치를 내려받기만 하고 소스에 반영하진 않는다.

- default remote alias인 origin 생략 가능. 
- 반영을 위해 병합을 하기 위해서는 git pull을 하면 됨.

```
git fetch
```

#### <span style="color:blue">_RESET_</span>

의미: 롤백, default 옵션은 \-\-mixed

- \-\-soft : staged 가 된 채로 롤백 된다.
- \-\-mixed : not staged 가 된 채로 롤백 된다.
- \-\-hard : 작업중이던것이 있으면 사라지고 해당 commit 스냅 샷 까지 롤백된다. 따라서 매우 매우 주의해서 써야한다.

```
// --mixied 방식으로 롤백 된다.
git reset

//마지막 커밋 직전으로 HEAD가 옮겨지게 됨을 의미한다.
git reset HEAD~1 

//리모트의 마스터 브랜치로 동일하게 로컬 소스가 변경이 된다. 이때 작업중인 소스는 모두 사라진다.
git reset --hard origin/master 
```

#### <span style="color:blue">_REVERT_</span>

의미: commit 된 컨텐츠의 내용만을 원복시켜서 새로운 스탭샷이 생성되도록 한다. reset은 만들어진 스냅샷을 없애준다면 revert는 그 위에 하나의 스냅샷을 더해서 컨텐츠만을 원복시켜준다. 

```
git revert <커밋아이디>

```

#### <span style="color:blue">_DIFF_</span>

의미: 커밋된 스냅샷을 비교한다.

```
// 전과 후의 커밋 스탭샷을 비교한다. 
git diff [비교대상1-commit-id] [비교대상2-commit-id] 

//리모트와 로컬의 커밋된 스냅샷을 비교한다. 
git diff origin/브랜치..브랜치 

//로컬의 develop브랜치와 master브랜치의 커밋된 스냅샷을 비교한다.
git diff develop..master 
```

#### <span style="color:blue">_LOG_</span>

의미: git commit history 확인

```
git log

//모든브랜치별 간략한 모양의 히스토리확인하기
git log --graph --oneline --branches
```

#### <span style="color:blue">_STASH_</span>

의미: commit 되지 않은 변경사항들을 없애 작업공간을 수정하기 이전으로 바꾼다.

```
// clear working directory
git stash

// 가장 최근 clear했던 작업들을 다시 소스에 반영할 때
git stash apply

// stash list를 확인할 때
git stash list

// 작업들을 다시 소스에 반영할 때
git stash apply [stash_id]
```

#### <span style="color:blue">_BRANCH_</span>

의미: 브랜치 생성, 브랜치명 옵션이 없으면 로컬의 브랜치 리스트를 조회한다.

```
//작업장소의 브랜치 리스트 보여준다.
git branch 

// 브랜치가 변경되지 않고 그냥 브랜치만 하나 생성한다.
git branch <만들브랜치명> 

//브랜치 삭제, 이때 삭제할 브랜치에 위치해선 안된다.
git branch -d <브랜치명>
git branch -D <브랜치명>
```

#### <span style="color:blue">_CHECKOUT_</span>

의미: 브랜치 이동. 이때 작업중인 것이 있다면 커밋을 해야 이동이 가능하다.

```
// 변경하려는 브랜치, commitId, tag로 이동한다.
git checkout <브랜치명 or commitId, tag> 

// 변경하려는 브랜치를 생성하면서 이동한다. 이때 커밋되지 않은 작업중 파일들은 잘라내기처럼 옮겨진 브랜치로 붙여진다.
git checkout -b <브랜치명> 
```

#### <span style="color:blue">_MERGE_</span>

의미: 병합

```
git merge <병합할브랜치>

ex) develop into master 의 경우. 단, 항상 소스가 최신인지 확인하고 진행해라.
git checkout master
git merge develop
```

#### <span style="color:blue">_REBASE_</span>

의미: 브랜치 병합의 또 다른 방식

```
git rebase <base로 삼을 브랜치>

ex) develop into master 의 경우. 단, 항상 소스가 최신인지 확인하고 진행해라.
git checkout develop
git merge master
```

#### <span style="color:blue">_CHERRY-PICK_</span>

의미: 다른 브랜치의 특정 스탭샷만을 선택적으로 현재 브랜치에 병합해줄때 사용

```
git cherry-pick <커밋아이디>
```

만약 error: commit cbab6bdc870748d449e68f91eeaf948d77eb0eb2 is **a merge but no -m option was given**.  
**fatal: cherry-pick failed**

이런 메세지를 본다면 아래와 같이 해주면 된다.

해당 옵션은 체리픽이 될 mainline(from 1) 브랜치를 명시적으로 지정하고 cherry-pick을 해주는 옵션이다.

```
git cherry-pick -m 1 <커밋아이디>
```



#### <span style="color:blue">_REMOTE_</span>
의미: 원격저장소 확인 및 관련 옵션을 위한 명령어

```
//원격저장소를 보여준다.
git remote -v 

//원격저장소 등록
git remote add <원격저장소 alias> <url>

//로컬에서 원격지 등록하기 ex) alias: origin url: http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard
git remote add origin http://tfs.c-his.com:8080/tfs/DefaultCollection/Source-FrontEnd/_git/testboard
```

#### <span style="color:blue">_TAG_</span>
의미: 태깅

```
//태깅
git tag <tagname>

//taging 상세확인
git show <tagname>

//로컬에서 tag 삭제
git tag -d <tagname>

//원격지 tag 삭제
git push origin :refs/tags/<tagname>

//원격지에 tag 올리기
git push origin <tagname>

//tag에 메세지달기
git tag -a <tagname> -m"메세지"

//tag에 메세지 수정하기
// 아래의 경우 vi가 생길텐데 기본적으로 vi 사용법을 숙지하면 git 사용할 때 도움이 된다.
git tag -a <tagname> <tagname> -f

```

- 기본적인 vi 옵션 edit 사용법
  - 입력옵션 i 
     - insert 라고 하단에 뜨면 메세지를 입력할 수 있다. 
  - 실행취소옵션 esc
  - 저장후 나가기 :wq
  - 저장안하고 나가기 :q
  - 저장안하고 강제로 나가기 :q!

## 병합 
---
#### <span style="color:blue">_머지하면 소스가 동일하다?_</span>

git merge 뿐만 아니라 git pull도 **`병합`**이 일어난다. **`병합`**은 <span class="colored">
**병합된 두개의 소스가 동일하다는 것을 의미하는 것이 아니다.**</span>

왜냐하면 충돌이 발생하고 조치 하는 과정에서 두개의 소스가 달라질 수 있고 만약 충돌해결 과정에서 두개의 소스 달라진다면

**병합은 완료되었지만 완전 동일한 소스가 아니게 된 것**이다. 

따라서 두개 브랜치의 소스가 완전히 동일해야할 경우는 병합이후 `diff` 명령어를 통해 변경사항여부를 확인 할 필요가 있다.

#### <span style="color:blue">_충돌_</span>

git workflow가 잘못 되거나, 두명이상의 작업자가 같은 부분을 수정한다면 충돌 혹은 conflict가 발생하는 것은 매우 흔할 수 있다. 

발생하는 원인은 분명하다.

**병합되는 쪽의 마지막 스냅샷을 기준**으로 병합하려고 하는쪽의 **반영 소스**중에 현재 병합되는 공간에서 **작업된 소스**와 같은 위치에 변경된 소스가 중복 될 때 뿐이다.

이 경우는 merge나 rebase를 통해서 병합할 때 뿐만 아니라 git pull 을 통해 소스를 가지고 올때도 발생 할 수 있다.

해결방법은 <span class="colored">**_적용할 소스를 고르고 아닌 부분을 제거_**</span>해주면 되는것이다.




