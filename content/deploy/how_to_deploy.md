---
title: 배포방법 
linktitle: 배포방법 [Work In Progress]
description: 배포방법
weight: 801
disableToc: false
draft: false
date: 2020-02-04T14:13:11+09:00
tags: [deploy]
---

{{% notice note %}}
현재 문서는 작업중입니다.
{{% /notice %}}

## 스테이징 배포준비사항
---

#### <span style="color:blue">_1. 준비사항_</span>

**1) 특정 기능을 추가할 때는 해당 기능을 위한 브랜치를 만듭니다.**

{{<highlight js>}}
예)
//develop 브랜치에서 임시추가기능로직을 위한 브랜치(newfeature)를 생성
// on develop branch

git checkout -b newfeature

{{</highlight>}}

**2) 소스 작업을 진행합니다.**  

커밋이 여러개가 생길 수도 있고 아닐 수도 있습니다.  
여러 불필요한 커밋의 경우 하나의 커밋으로 합칠필요가 있을 때 사용하면 됩니다.  
해당 과정은 작업자 재량에 따라 진행하시면 됩니다.  
해당 명령어를 사용하기 위해서는 vi 입력방식을 알아둘 필요가 있습니다. 

{{<highlight js>}}
//git log를 그래프형태로 브랜치별 짧은 노드 단위로 보여준다.

git log --graph --oneline --branches
{{</highlight>}}

{{<highlight js>}}
//위에 그래프롤 확인해서 현재 HEAD에서 몇개의 노드가 합쳐질 필요가 있는지 계산 후에 합쳐준다.
//아래의 경우는 현재 위치 하나 아래노드까지 하나의 노드로 합쳐지게 된다.

git rebase -i HEAD~2
{{</highlight>}}

**3) 완료된 기능로직 소스라 생각되는경우**  
**frontend**의 경우 **<span class='colored'>package.json</span>**에 버저닝을 해줍니다.  
해당 버전은 git tag와 동일한 버전으로 합니다.

{{<highlight js "linenos=inline,hl_lines=3">}}
{
  "name": "testboard-module",
  "version": "0.0.2",
  "description": "testboard-module addon for CHIS",
  "keywords": [
    "ember-addon"
  ],
  ...
}
{{</highlight>}}

**backend**의 경우 **<span class='colored'>통합도메인의 yaml파일</span>**의 tag번호를 변경해야 합니다.  
해당 버전은 마찬가지로 git tag와 동일한 버전으로 합니다.

**<span class='colored2'>staging yaml파일:</span> integrateddomaintechnicalservice-staging.yaml.yaml**
{{<highlight js "linenos=inline,hl_lines=19">}}
apiVersion: apps/v1
kind: Deployment
metadata:
  name: integrateddomaintechnicalservice-deployment
spec:
 selector:
   matchLabels:
     app: integrateddomaintechnicalservice
 replicas: 1
 template:
  metadata:
    labels:
      app: integrateddomaintechnicalservice
  spec:
   imagePullSecrets:
   - name: chis-stg-was
   containers:
   - name: integrateddomaintechnicalservice
     image: chis-stg-was.kr.ncr.ntruss.com/stg-integrateddomaintechnicalservice:0.1
     imagePullPolicy: Always
     ports:
     - containerPort: 16001
     volumeMounts:
      - name: stg-k8s-storage
        mountPath: /box
   volumes:
    - name: stg-k8s-storage
      nfs:
        server: 10.250.53.73
        path: /n2540758_stgk8swas
{{</highlight>}}

**<span class='colored2'>develop yaml파일:</span> integrateddomaintechnicalservice-deployment.yaml**
{{<highlight js "linenos=inline,hl_lines=19">}}
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: integrateddomaintechnicalservice-deployment
spec:
 selector:
   matchLabels:
     app: integrateddomaintechnicalservice
 replicas: 1
 template:
  metadata:
    labels:
      app: integrateddomaintechnicalservice
  spec:
   imagePullSecrets:
   - name: chis-dev-registry
   containers:
   - name: integrateddomaintechnicalservice
     image: 10.0.2.20:5000/dev-integrateddomaintechnicalservice:0.1
     imagePullPolicy: Always
     ports:
     - containerPort: 16001
     volumeMounts:
     - mountPath: "/box"
       name: volume
   dnsPolicy: "None"
   dnsConfig:
     nameservers:
      - 10.0.0.12
   volumes:
    - name: volume
      persistentVolumeClaim:
        claimName: dotnet-volume
{{</highlight>}}

**4) 이후 해당 기능 브랜치를 develop 브랜치와 머지합니다.**  
rebase를 사용할 수 있는 분은 rebase로 해도 무방합니다.

{{<highlight js>}}
//on develop
git merge newfeature
{{</highlight>}}

**5) 원격지에 push 합니다.**

{{<highlight js>}}
git push origin develop
{{</highlight>}}

**6) 개발기 확인 후에 이상이 없는 경우**

- newfeature 브랜치를 지웁니다.  
- tag를 답니다. 
- PR로 master 머지 요청을 합니다.

{{<highlight js>}}
//tag 방법
git tag v0.0.1
//원격지에 tag push
git push origin v0.0.1
{{</highlight>}}

[git tag 사용법](http://localhost:50439/technical-ref/git/#span-style-color-blue-tag-span)은 해당 링크를 참고 혹은 구글링참고하면 됨.

## TFS 스테이징 배포요청방법
---

#### <span style="color:blue">_방법 및 유의 사항_</span>

**[TFS 접근](http://tfs.c-his.com:8080/tfs/DefaultCollection/_projects) >  [Deploy Management > Shared Queries > Today > 정기배포(스테이징) 접근](http://tfs.c-his.com:8080/tfs/DefaultCollection/Deploy%20Management/_workitems?id=2047f339-feb7-4703-b22d-039d762f833f&_a=query)**

![img](/deploy/images/deployreq1.png?width=800px)
  
접근 후에 **당일 배포 계획 하단 depth 에 배포요청**을 해주시면 됩니다.

**<i class="fas fa-exclamation-triangle chis-exclamation"></i> 요청하실때 작성시 유의사항**은 

![img](/deploy/images/deployreq3.png?width=800px)

**링크**를 다실때 **반드시 올바른 브랜치의 커밋아이디**가 있어야 한다는 것입니다.

이 때 태그작업을 하신 분은 터미널에서 

{{<highlight js>}}
git show v0.0.1 
{{</highlight>}}

태그 확인 방법은 위에 **터미널로 확인**해도 되고 **TFS GUI**로 태그를 확인하셔도 됩니다.

이미 커밋아이디를 알고 계신 분은 확인안하셔도 됩니다.

<i class="fas fa-info-circle"></i>**올바른 브랜치의 올바른 커밋아이디를 링크에 추가해주세요.**


## 롤백작업
---

#### <span style="color:blue">_Application이 운영이 안되는 치명적인 상황에서 재빨리 일단 운영해야 하는 경우_</span>

![img](/deploy/images/deployreq4.png?width=800px)

#### <span style="color:blue">_Application이 운영은 되지만 버그가 발견되어 특정 도메인혹은 프론트엔드가 배포가 되어야 하는 경우_</span>

이경우는 **TFS 스테이징 배포요청방법** 에 따라 동일하게 요청하면 된다. 

- **원인을 모르는 경우 혹은 수정작업시간이 오래걸릴경우**  
이때 작업자는 태그로 인해 이전 배포된 지점이 어떤 것인지 본인이 잘 알고 있으므로
수정이 오래 걸리는 경우에는 **이전 배포지점의 태깅의 커밋아이디로 새로 요청**을 진행하면 된다. 

- **원인을 알고 수정이 빨리 진행될 수 있는 경우**  
배포된 해당 태깅지점의 master 브랜치에서 **새로 hotfix 브랜치를 따서 수정후 master에 머지**  
완료후에는 hotfix 브랜치 삭제, develop 브랜치에도 cherry-pick 해야한다.

소스 수정후 배포되는 과정은 **스테이징 배포준비사항**, **TFS 스테이징 배포요청방법**의 과정과 동일하게 진행하면 된다.

![img](/deploy/images/deployreq5.png?width=800px)


![img](/deploy/images/deployreq7.png?width=800px)