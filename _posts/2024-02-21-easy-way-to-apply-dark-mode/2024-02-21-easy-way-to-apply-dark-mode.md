---
title: 다크모드 쉽게 적용하기
date: 2024-02-21 00:00:00 +09:00
modified: 2024-02-21 00:00:00 +09:00
tags: [ jekyll, ruby ]
categories: [ 블로그]
description: Shell adalah sebuah command-line interpreter; program yang berperan sebagai penerjemah perintah yang diinputkan oleh User yang melalui terminal, sehingga perintah tersebut bisa dimengerti oleh si Kernel.
image: ""
---

> 주의!
> 2024년 2월 21일 현재, Firefox 120 버전에서만 지원되는 기능

## 기존 방법

```css
body {
    color: black;
    background: white;
}

@media (prefers-color-scheme: dark) {
    body {
        color: white;
        background: black;
    }
}
```

유저가 다크모드를 사용 중인지 `prefers-color-scheme` 미디어 쿼리를 통해 확인

`prefers-color-scheme`는 `white` 또는 `dark`의 값을 가짐

해당 값이 `dark`일 경우 배경을 `black`, 글자색을 `white`로 변경

## 새로운 방법

### 브라우저에 지원하는 모드 전달

- 라이트모드, 다크모드를 지원한다고 전달

```
:root {
    color-scheme: light dark;
}
```

### (다크)모드 적용

```css
body {
    color: light-dark(black, white);
    background: light-dark(white, black);
}
```

### 라이트 모드만 지원하는 요소
```css
form {
    color-scheme: light;
}

form input {
    background: light-dark(white, gray);
}
```

- `form`의 `color-scheme`은 라이트 모드만 지원하므로 해당 `form`의 `input`에서 `light-dark` 함수는 항상 `white`를 반환 


## 참고 

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
