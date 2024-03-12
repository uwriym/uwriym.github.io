---
title: Linux 스크립트 실행하기
date: 2024-03-01 00:00:00 +09:00
modified: 2024-03-01 00:00:00 +09:00
tags: [ linux, raspberry pi, ubuntu ]
categories: [ 리눅스 ]
---

우리 파이에서 Crontab으로 실행할 스크립트를 만들어보자.<br>
curl 요청을 보내는 스크립트를 만들어 볼 생각이다.

## 📌 스크립트 생성

### 1. 디렉토리 생성

나는 `scripts` 디렉토리를 만들어서 스크립트를 저장하려고 한다.

```bash
mkdir ~/scripts
```

### 2. 스크립트 생성

`~/scripts` 디렉토리로 이동하여 스크립트를 생성한다.

```bash
cd ~/scripts

# nano 에디터로 스크립트 생성
nano ~/scripts/send_request.sh
```

스크립트를 다 작성했다면 `Ctrl + O`로 저장하고 `Ctrl + X`로 종료한다.

### 3. 스크립트 실행 권한 부여

```bash
chmod +x ~/scripts/send_request.sh
```

> `chmod`: Change Mode 약자로, 파일이나 디렉토리의 권한을 변경하는 명령어<br>
> `+x`: 실행 권한을 추가(add)한다는 의미 / 여기서 x는 실행(executable) 권한을 의미

---

## 📌 스크립트 실행

```bash
# `~/scripts` 디렉토리로 이동
cd ~/scripts

# send_request.sh 스크립트 실행
./send_request.sh
```

스크립트 실행 중 발생하는 출력은 모두 터미널에 직접 표시된다.







