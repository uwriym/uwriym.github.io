---
title: Linux Crontab 작동하지 않을 때
date: 2024-03-08 00:00:00 +09:00
modified: 2024-03-08 00:00:00 +09:00
tags: [ linux, ubuntu, cron ]
categories: [ 리눅스, 트러블슈팅 ]
---

# 🤦🏻 외않되

기껏 cron 세팅해놨는데 작동하지가 않는다..
리눅스 서버에 cron 스케줄을 설정했는데 작동하지 않을 때 해볼 만한 방법들을 정리해봤다.

---

## 📌 cron 서비스 작동 중인지 확인

**1. cron 서비스 확인**

```bash
systemctl status cron
```

- `Active: active (running)`이라고 표시되면 정상적으로 작동 중이다.

**2. cron 서비스 시작**

```bash
# cron 서비스 시작
sudo systemctl start cron
# cron 서비스 재시작
sudo systemctl restart cron
```

---

## 📌 `/var/log/syslog` 로그 확인

```bash
cat /var/log/syslog | grep CRON
```

- `grep CRON`을 사용하여 `CRON`이라는 문자열이 포함된 로그만 필터링한다.

나는 다음과 같은 로그를 확인했다:

```
2024-03-01T16:21:01.260037+09:00 uwriym-ubuntu CRON[2967]: (CRON) info (No MTA installed, discarding output)
```

- 이는 cron 작업이 실행되었지만 출력을 보낼 MTA(Mail Transfer Agent)가 설치되지 않아서 발생한 메시지이다.
- `sudo apt-get install postfix` 명령어로 MTA를 설치하면 해당 로그는 더이상 보이지 않게 된다.
- MTA 설정(Postfix Configuration)에 대한 자세한 내용은 [이 포스팅](https://tsy0668.tistory.com/11)을 참고하면 좋을 것 같다.

---

## 📌 스크립트 직접 실행해보기

cron에 등록한 명령어를 직접 실행해보면서 문제를 찾아보자.

**1. cron에 등록한 명령어 확인**

```bash
* * * * * /home/uwriym/scripts/send_request.sh >> /home/uwriym/scripts/log/path/send_request_$(date +\%Y-\%m-\%d).log 2>&1
```

**2. 명령어 직접 실행**

```bash
/home/uwriym/scripts/send_request.sh
```

여기서 문제였다.<br>
이 스크립트는 아무리 실행해도 문제가 없었다.<br>
문제는 로그를 남기는 명령어에 있었다.

```bash
# 스크립트 실행 명령어
/home/uwriym/scripts/send_request.sh

# 로그를 남기는 명령어
>> /home/uwriym/scripts/log/path/send_request_$(date +\%Y-\%m-\%d).log 2>&1
```

로그 명령어까지 전부 실행해 보았다.

```bash
# 실행 결과
/home/uwriym/scripts/log/path/send_request_2024-03-01.log: No such file or directory
```

아..해당하는 디렉토리가 없었던 것이다.<br>
로그 남기는 디렉토리에 `/path/`가 들어가 있었다...<br>
해당 디렉토리를 실제 존재하는 디렉토리로 수정해 주었고, cron이 정상적으로 실행되는 것을 확인했다!

> cron이 안될 때는 꼭 명령어 전체를 실행해보자.











