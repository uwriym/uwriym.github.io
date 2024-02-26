---
title: Ubuntu 23.10 기본 설정
date: 2024-01-20 00:00:00 +09:00
modified: 2023-03-25 00:00:00 +09:00
tags: [ raspberry pi, ubuntu ]
categories: [라즈베리파이]
---

## 📌 앱 삭제 방법

```bash
sudo apt-get remove --purge {PROGRAM_NAME}
```

---

# 📌 solaar

solaar는 로지텍 무선 마우스나 키보드를 연결하기 위한 GUI를 제공하는 프로그램이다.

### 설치 방법

우분투 20.04 또는 22.04 LTS 이상 버전에서는 다음 명령어를 먼저 입력하자.
```bash
sudo add-apt-repository ppa:solaar-unifying/stable
```
이후 다음 명령어로 solaar를 설치한다.
```bash
sudo apt install solaar
```

설치 후 수신기가 나타나지 않는다면 수신기를 뺐다가 꽂아주자.

---

# 📌 한글 입력 설정

1. 설정에서 Region & Language > Manage Installed Languages를 선택
2. The language support is not installed completely 창이 뜨면 Install 선택
3. Language Support 창에서 Install/Remove Languages 선택
4. Korean 선택, English 선택 해제 후 Apply
5. Language for menus and windows에서 한국어를 최상단에 놓고 Apply System-Wide 선택
6. Formats에서 "대한민국" 선택 후 Done
7. 재부팅
8. 설정에서 Keyboard > Input Sources에서 + 버튼을 눌러 Korean(Hangul) 추가

이제 Shift + Space를 누르면 한글 입력이 가능하다.
한/영 전환 키는 사진의 Preferences에서 설정할 수 있다.

# 📌 cURL 설치

```bash
sudo apt install curl
```
