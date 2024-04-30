---
title: sshd.service does not exist 오류 해결방법
date: 2024-03-09 00:00:00 +09:00
modified: 2024-03-09 00:00:00 +09:00
tags: [ linux, ubuntu, ssh ]
categories: [ 리눅스, 트러블슈팅 ]
---

서버 ssh 설정 중에 sshd 실행 상태를 보기 위해 다음 명령어를 입력했다:
```bash
sudo systemctl status sshd
```

그랬더니 `Unit sshd.service does not exist.`라며 오류가 발생했다.

---

## 📌 ssh 서비스 상태 확인

```bash
service ssh status
```

다음과 같이 출력되었다:

```
Loaded: loaded (/lib/systemd/system/ssh.service; disabled; preset: enabled)
Active: inactive (dead)
```

- `Active: inactive (dead)`라고 표시된 것을 보아 ssh 서비스가 비활성화되어 있는 것을 확인할 수 있다.

---

## 📌 `ssh.service` 활성화

`ssh.service`를 활성화하기 위해 다음 명령어를 입력했다:
```bash
sudo systemctl enable ssh.service
```

이후 다시 `systemctl status sshd` 명령어를 입력했더니 정상적으로 상태가 표시되었다.

```
Loaded: loaded (/lib/systemd/system/ssh.service; enabled; preset: enabled)
Active: active (running)
```
