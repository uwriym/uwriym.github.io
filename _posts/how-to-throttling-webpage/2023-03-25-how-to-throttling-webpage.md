---
title: 브라우저 속도가 느려졌으면 좋겠어
date: 2023-03-25 11:58:47 +09:00
modified: 2023-03-25 11:58:47 +09:00
tags: [DevTools]
categories: 개발
description: Shell adalah sebuah command-line interpreter; program yang berperan sebagai penerjemah perintah yang diinputkan oleh User yang melalui terminal, sehingga perintah tersebut bisa dimengerti oleh si Kernel.
image: ""
---

<center>
    <figure>
        <img width="114" alt="트위터 progress bar" src="https://user-images.githubusercontent.com/96712692/227679807-b82e0422-c85a-453b-a648-eb6830b3769b.png">
        <figcaption>트위터 progress bar</figcaption>
    </figure>
</center>

로딩될 때만 나타나는 요소에 대해 접근하고 싶을 때,

progress bar와 같은 것은 로딩 후 빠르게 사라지기 때문에 해당 element에 접근하여 HTML 정보를 얻기 어렵다.

이 때 강제로 브라우저 속도를 낮추어 원하는 element에 접근할 수 있다.

## 속도 저하 방법

### 네트워크 프리셋 변경

<center>
    <figure>
        <img alt="DevTools" src="https://user-images.githubusercontent.com/96712692/227681340-e98cc4af-fe7a-4f07-b784-ee5a0b88d6fe.jpg">
        <figcation>Network로 이동</figcaption>
    </figure>
</center>

먼저 브라우저에서 F12를 눌러 개발자도구(DevTools)를 실행 후 Network를 클릭하자.
<br><br>

<center>
    <figure>
        <img alt="DevTools" src="https://user-images.githubusercontent.com/96712692/227681654-7abfd103-f0c6-4c53-9f98-fbd6bb3f4c2e.jpg">
        <figcation>No throttling 클릭</figcaption>
    </figure>
</center>

<center>
<img width="171" alt="스크린샷 2023-03-25 10 39 54" src="https://user-images.githubusercontent.com/96712692/227681793-c85aa3b6-1e28-475e-8075-7d7360f68add.png">
</center>

Network에서 No throttling을 클릭하면 다음 메뉴가 나올 것이다.

기본값은 No throttling이며, 3가지 Preset(Fast 3G, Slow 3G, Offline)이 있다.

하지만 써본 바로는 Slow 3G도 금방 로딩되어 의미가 없었고, Offline은 아예 네트워크를 차단하므로 progress bar가 뜨지는 않았다.
<br><br>

### 커스텀

네트워크는 끊지 않으면서 Slow 3G보다는 더 느려야 한다면 커스텀을 할 수도 있다.

맨 밑에 있는 `Add...`를 클릭하여 커스텀 화면으로 들어가자.

<center>
    <figure>
        <img alt="DevTools" src="https://user-images.githubusercontent.com/96712692/227682038-8b843da4-c67d-4239-9a46-506eb58bbcba.jpg">
        <figcation>Network Throttling Profiles 생성</figcaption>
    </figure>
</center>

Profile Name은 마음대로 정하고,

Download 속도와 Upload 속도, 그리고 Latency를 정말 느리게 설정해주자.

나같은 경우에는 다운로드 1kbit/s, 업로드 1kbit/s, 레이턴시 10000ms로 설정해두었더니
프로그레스 바는 그대로 있으면서 계속해서 1kbit/s 속도로 로딩하게 된다.

<center>
    <img width="171" alt="스크린샷 2023-03-25 11 09 28" src="https://user-images.githubusercontent.com/96712692/227682170-1eb0fda1-d7fc-4a5e-b646-7ac3bfe2160f.png">
</center>

이제 커스텀 프로파일을 적용하자. 엄청 느려질 것이다.
<br><br>

### 테스트

<center>
    <figure>
        <img width="625" alt="스크린샷 2023-03-25 10 52 51" src="https://user-images.githubusercontent.com/96712692/227682162-6ec3f909-b6d9-434f-a602-0367920fb1fb.png">
        <figcation>계속 도는 progress bar</figcaption>
    </figure>
</center>

이제 여유롭게 해당 element에 접근할 수 있게 되었다.
