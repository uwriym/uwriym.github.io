---
title: 브라우저 속도가 느려졌으면 좋겠어
date: 2023-03-25 00:00:00 +09:00
modified: 2023-03-25 00:00:00 +09:00
tags: [ DevTools, WebScraping ]
categories: [ 개발 ]
---

<figure style="text-align: center;">
  <img width="500" alt="트위터 progress bar" src="https://user-images.githubusercontent.com/96712692/227718118-9fe4db32-366d-4c3b-8f3d-e35d22e2330a.png">
  <figcaption>트위터 progress bar</figcaption>
</figure>

트위터 크롤러를 만들던 중, 위처럼 스크롤되다가 로딩될 때 나타나는 progress bar 때문에 수집이 종료되는 문제가 있었다.

때문에 이 element가 나타날 때 잠깐 쉬었다가 Nokogiri로 다시 HTML을 파싱하려고 했는데

**금방 사라져버리는 저놈에 대한 정보를 얻을 수가 없다**

이처럼 로딩될 때만 나타나는 요소에 대해 접근하고 싶을 때,

progress bar와 같은 것은 로딩 후 빠르게 사라지기 때문에 해당 element에 접근하여 HTML 정보를 얻기 어렵다.

이 때 강제로 브라우저 속도를 낮추어 원하는 element에 접근할 수 있다.

# 속도 저하 방법

### 네트워크 프리셋 변경

먼저 브라우저에서 F12를 눌러 개발자도구(DevTools)를 실행 후 Network를 클릭하자.
<br><br>

<figure style="text-align: center;">
    <img width="500" alt="DevTools" src="https://user-images.githubusercontent.com/96712692/227718751-01c3c0a6-865b-49d0-91f3-466d679f15fa.png">
    <figcaption>No throttling 클릭</figcaption>
</figure>

<center>
<img width="171" alt="스크린샷 2023-03-25 10 39 54" src="https://user-images.githubusercontent.com/96712692/227681793-c85aa3b6-1e28-475e-8075-7d7360f68add.png">
</center>

Network에서 이미지에 체크되어 있는 No throttling을 클릭하면 다음 메뉴가 나올 것이다.

기본값은 No throttling이며, 3가지 Preset(Fast 3G, Slow 3G, Offline)이 있다.

> **하지만 써본 바로는 Slow 3G도 금방 로딩되어 의미가 없었고, <br>Offline은 아예 네트워크를 차단하므로 progress bar 대신에 네트워크 연결을 다시 시도하라는 element가 나타났다.**

<br><br>

### 커스텀 쓰로틀링 프로파일 만들기

네트워크는 끊지 않으면서 Slow 3G보다는 더 느려야 한다면 커스텀을 할 수도 있다.

위의 메뉴에서 맨 밑에 있는 `Add...` 를 클릭하여 커스텀 화면으로 들어가자.

<figure style="text-align: center;">
    <img width="500" alt="DevTools" src="https://user-images.githubusercontent.com/96712692/227718488-a5e1a345-9df2-4b35-8991-15de9cbb5539.png">
    <figcaption>Network Throttling Profiles 생성</figcaption>
</figure>

Profile Name은 마음대로 정하고,

Download 속도와 Upload 속도, 그리고 Latency를 정말 느리게 설정해주자.

나같은 경우에는 다운로드 1kbit/s, 업로드 1kbit/s, 레이턴시 10000ms로 설정해두었더니
progress bar는 그대로 있으면서 계속해서 1kbit/s 속도로 로딩하게 된다.

<figure style="text-align: center;">
    <img width="171" alt="스크린샷 2023-03-25 11 09 28" src="https://user-images.githubusercontent.com/96712692/227682170-1eb0fda1-d7fc-4a5e-b646-7ac3bfe2160f.png">
</figure>

이제 Network로 돌아와 커스텀 프로파일을 적용하자. 엄청 느려질 것이다.
<br><br>

### 테스트

<figure style="text-align: center;">
    <img width="625" alt="스크린샷 2023-03-25 10 52 51" src="https://user-images.githubusercontent.com/96712692/227682162-6ec3f909-b6d9-434f-a602-0367920fb1fb.png">
    <figcaption>계속 도는 progress bar</figcaption>
</figure>

이제 여유롭게 해당 element에 접근할 수 있게 되었다.
