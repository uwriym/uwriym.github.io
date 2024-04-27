---
title: 우분투 SSH 포트 변경 방법(22.10 이후)
date: 2024-03-09 00:00:00 +09:00
modified: 2024-03-09 00:00:00 +09:00
tags: [ linux, ubuntu, ssh ]
categories: [ 리눅스, 우분투 ]
---

서버 ssh 세팅 중 ssh 포트를 변경하기 위해 `/etc/ssh/sshd_config` 파일을 수정했다.<br>
근데 아무리 수정해도 포트가 변경되지 않는 것이다.<br>
찾아보니 우분투 22.10 버전 이후부터는 포트 수정을 하는 방법이 달라졌다.<br>
우분투 22.10 이후 버전에서 ssh 포트를 변경하는 방법을 정리해보았다.

---

## 📌 systemd 서비스 파일 수정

다음 명령로 설정 파일을 열자(nano 편집기 사용):

```bash
sudo nano /lib/systemd/system/ssh.socket
```

1. 파일을 열고 `[Socket]` 섹션에서 `ListenStream` 부분을 찾아 포트를 변경한다.<br>
```
# 예시
ListenStream=12345
```

2. `[Install]` 섹션에서 `WantedBy` 부분을 찾아 `multi-user.target` 아래에 다음 행을 추가한다:
```
# 예시
WantedBy=sockets.target
```

---

## 📌 포트 변경 확인

변경된 포트로 ssh 서비스를 재시작하자:

```bash
sudo systemctl restart ssh
```

변경된 포트로 ssh 서비스가 잘 작동하는지 확인해보자:

```bash
ssh -p 12345 user@[IP 주소] 
```