---
title: Linux Crontab 설정하기
date: 2024-03-01 00:00:00 +09:00
modified: 2024-03-01 00:00:00 +09:00
tags: [ linux, ubuntu ]
categories: [ 리눅스 ]
---

# 🚀 스케줄 작업을 위한 리눅스 Crontab 설정

리눅스 서버에 스케줄 작업을 설정해보자.

## 📌 Crontab이란?

Crontab은 리눅스에서 특정 시간에 특정 작업을 실행하기 위한 스케줄러이다.<br>
특정 시간에 특정 작업을 실행하고 싶을 때 사용한다.

---

## 📌 Crontab 설정하기

### 1.Crontab 편집

```bash
crontab -e
```

- 첫 번째 사용 시, 기본 편집기를 선택하라는 메시지가 표시될 수 있음(일반적으로 `nano`, `vim` 등이 사용됨)

### 2. 작업 스케줄 추가

#### 기본 형식

```
* * * * * command_to_execute
```

- 1번째 `*`: 분 (0 - 59)
- 2번째 `*`: 시 (0 - 23)
- 3번째 `*`: 일 (1 - 31)
- 4번째 `*`: 월 (1 - 12)
- 5번째 `*`: 요일 (0 - 7, 여기서 0과 7은 일요일을 의미)

**예시1**: 매일 자정 `backup.sh` 스크립트 실행

```
0 0 * * * /path/to/backup.sh
```

**예시2**: 매분 `every_minutes.sh` 스크립트 실행

```
* * * * * /path/to/every_minutes.sh
```

### 3. 변경사항 저장 및 종료

- `nano`: `Ctrl + O`(저장) → `Ctrl + X`(종료)
- `vim`: `:wq` → `Enter`

### 4. Crontab 리스트 확인

다음 명령어로 설정한 스케줄 리스트를 확인할 수 있다:

```
crontab -l
```

---

## 📌 Crontab 실행 결과 로그 남기기

Crontab으로 실행한 결과를 로그로 남기고 싶다면,<br>
스케줄러 뒤에 `>>`를 사용하여 로그 파일을 지정하면 된다.

**예시**: `every_minutes.sh` 스크립트 실행 결과를 `every_minutes.log` 파일에 저장

```
* * * * * /path/to/send_request.sh >> /path/to/every_minutes.log 2>&1
```

> `* * * * *`: 매분 실행<br>
> `/path/to/send_request.sh`: 실행할 스크립트<br>
> `>> /path/to/every_minutes.log`: 결과를 저장할 파일<br>
> `2>&1`: 에러 메시지도 함께 저장

### 로그 파일 관리

그 파일을 보다 체계적으로 관리하고 싶다면, 로그 파일명에 날짜를 포함시키는 방법이 있다.<br>
예를 들어, 다음과 같이 설정할 수 있다:

```
* * * * * /path/to/send_request.sh >> /path/to/script_$(date +\%Y-\%m-\%d).log 2>&1
```

> `$(date +\%Y-\%m-\%d)`: 현재 날짜를 `YYYY-MM-DD` 형식으로 출력하는 명령어<br>
> `crontab`에서 `%` 문자를 리터럴로 사용하기 위해 `\`로 이스케이프 처리가 필요







