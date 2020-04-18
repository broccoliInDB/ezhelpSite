---
title: 환경구성 하기
linktitle: Environments
description: CHIS frontend app을 개발하기 위한 환경구성 방법
weight: 00011
disableToc: false
draft: false
date: 2019-10-17T09:25:25+09:00
tags: [environments]
---

환경구성은 크게 git, node.js, eslint, ember, yarn, visual code 설치로 구성되어 있습니다.

## 1. Git
---
#### <span style="color:blue">_Windows_</span>

- **[설치경로](http://git-scm.com/download/win)**: [http://git-scm.com/download/win](http://git-scm.com/download/win)
- 아래 설치 이미지는 참조용 (버전업이 되면서 이미지 변경될 수 있음.)
- 설치 마법사가 권장하는 디폴트로 설치하면 됨.

  ![img](/getting-started/images/git-install-01.png?width=600px)
  ![img](/getting-started/images/git-install-02.png?width=600px)
  ![img](/getting-started/images/git-install-03.png?width=600px)
  ![img](/getting-started/images/git-install-04.png?width=600px)
  ![img](/getting-started/images/git-install-05.png?width=600px)
  ![img](/getting-started/images/git-install-06.png?width=600px)
  ![img](/getting-started/images/git-install-07.png?width=600px)
  ![img](/getting-started/images/git-install-08.png?width=600px)
  ![img](/getting-started/images/git-install-09.png?width=600px)

#### <span style="color:blue">_Mac_</span>

- 방법 1. **[설치파일이용](https://git-scm.com/download/mac)**: [http://git-scm.com/download/mac](http://git-scm.com/download/mac)
- 방법 2. Homebrew 이용
  
  ```
  brew install git
  ```

#### <span style="color:blue">_Linux_</span>

- 안내경로 : [http://git-scm.com/download/linux](http://git-scm.com/download/linux)

#### <span style="color:blue">_Git 설치 확인 및 디폴트 세팅_</span>

  ```
  //버전확인
  git version
  
  git config --global user.name "John Doe"
  
  git config --global user.email johndoe@example.com
  
  // 설정확인
  git config --list
  ```

## 2. node.js
___
#### <span style="color:blue">_Windows_</span>

- **[설치경로](https://nodejs.org/ko/)**: [https://nodejs.org/ko/](https://nodejs.org/ko/)
- 설치는 무조건 **LTS 버전**을 설치해야함
- 아래 설치 이미지는 참조용 (버전업이 되면서 이미지 변경될 수 있음.)
- 설치 마법사가 권장하는 디폴트로 설치하면 됨.
  ![img](/getting-started/images/nodeinstall01.jpg?width=600px)
  ![img](/getting-started/images/nodeinstall02.jpg?width=600px)
  ![img](/getting-started/images/nodeinstall03.jpg?width=600px)
  ![img](/getting-started/images/nodeinstall04.jpg?width=600px)
  ![img](/getting-started/images/nodeinstall05.jpg?width=600px)

{{% notice info %}}
  재설치의 경우에는 제어판에서 node 제거 후 설치 진행  
  노드버전이 변경된 것을 확인이 되더라도 반드시 **재부팅**을 해야함.
{{% /notice %}}

#### <span style="color:blue">_Mac & Linux(Ubuntu)_</span>

설치방법 : **[nvm 이용](https://github.com/nvm-sh/nvm)**: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

<i class="fas fa-info-circle"></i> ubuntu의 경우만
```
sudo apt-get update
sudo apt-get install build-essential libssl-dev
```   

1. nvm 설치
```
sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

2. nvm 설치 확인

```
// 1.ubuntu일 경우
source ~/.bashrc

// 1.mac일 경우
source ~/.bash_profile

// 2.버전확인
nvm --version
```

3. node 설치
    
```
//무조건!!! 항상 node를 설치할 때는 최신버전이 아닌 **LTS버전**을 설치해야한다. ex) 10.x LTS 버전
nvm install 10.15.1
```

4. node 버전 확인
    
```
node --version
```

5. npm 버전 확인

```
npm --version
```

## 3. eslint
___
#### <span style="color:blue">_설치_</span>

```
npm install -g eslint
```
#### <span style="color:blue">_설치확인_</span>

```
eslint --version
```

## 4. Ember
___
#### <span style="color:blue">_설치_</span>

```
npm install -g ember-cli
```

#### <span style="color:blue">_설치확인_</span>

```
ember --version
```

## 5. Yarn
___
#### <span style="color:blue">_설치_</span>

```
npm install -g yarn
```

#### <span style="color:blue">_설치확인_</span>

```
yarn --version
```

## 6. Visual Studio Code
___
#### <span style="color:blue">_Windows & Mac_</span>

- **[설치경로](https://code.visualstudio.com)**: [https://code.visualstudio.com](https://code.visualstudio.com)
- 아래 설치 이미지는 참조용 (버전업이 되면서 이미지 변경될 수 있음.)
- 설치 마법사가 권장하는 디폴트로 설치하면 됨.

  ![img](/getting-started/images/vscode-01.png?width=600px)
  ![img](/getting-started/images/vscode-02.png?width=600px)
  ![img](/getting-started/images/vscode-03.png?width=600px)
  ![img](/getting-started/images/vscode-04.png?width=600px)
  ![img](/getting-started/images/vscode-05.png?width=600px)
  ![img](/getting-started/images/vscode-06.png?width=600px)
  ![img](/getting-started/images/vscode-07.png?width=600px)
  ![img](/getting-started/images/vscode-08.png?width=600px)

#### <span style="color:blue">_Linux(Ubuntu)_</span>
  
  1. curl 설치

  ```
  sudo apt-get install curl
  ```

  2. 마이크로소프트 GPG 키를 다운로드하여 /etc/apt/trusted.gpg.d/ 경로에 복사해줌.

  ```
  sudo sh -c 'curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > /etc/apt/trusted.gpg.d/microsoft.gpg'
  ```

  3. Visual Studio Code를 다운로드 받기 위한 저장소를 추가함.

  ```
  sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
  ```

  4. 추가한 저장소로부터 패키지 목록을 가져옴.

  ```
  sudo apt-get update
  ```

  5. Visual Studio Code를 설치.

  ```
  sudo apt-get install code
  ```

#### <span style="color:blue">_VS Code Setting_</span>

{{% notice info %}}
Visual Code 작업환경 Setting은 무분별한 줄간격 등을 일정하게 통일시키거나 사용자 편의를 위해 설정함을 권장함.
{{% /notice %}}

설정방법 : vs code 를 띄운 후 ````F1````를 친 후 ````>```` 키를 치면 나오는 input box에 원하는 키워드 ex) ````default setting```` 입력하면 키워드에 해당하는 원하는 vs 메뉴를 띄울 수 있다.

![img](/getting-started/images/userSettings.png)

빨간 박스를 클릭하면 json 포맷의 페이지가 나온다. 거기서 수동으로 입력해서 설정하는 것도 가능하다.

- Preferences: Open Default Setting 확인

```
// 대략 default setting 이라고 치면 검색됨
F1>default setting
```

- Preferences: Open User Setting 확인

```
// 대략 user setting 이라고 치면 검색됨
F1>user setting
```

- <span class="colored2">필수적으로 설정 권장 (default로 되어있지 않은 경우 **User Setting**에 설정 필요)</span>

```
// tab 대신 space 사용
"editor.insertSpaces": true,

// tab 키 선택시 space 간격 2로 잡음
"editor.tabSize": 2

```

{{% notice warning %}}
eslint rule 경로는 코딩패턴을 일정화 시키거나 코드 오류를 줄이기 위해서 반드시 참조해야함.
{{% /notice %}}

#### <span style="color:blue">_VS Code Extensions_</span>
- 설치하면 모두에게 공통적으로 유용한 extensions.

   - **<span class="colored">GitLens</span>** : 소스상에 작업자가 누구인지 알려줌. 소스상 누가 작업했는지 여부를 확인하여 문의해야 할 때 도움이 됨.
   - **<span class="colored">Path Intellisense</span>** : Package.json에 파일 Path를 지정할 때 유용함.