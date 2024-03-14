---
title: URL 해시 변경 감지하기 - `hashchange` event
date: 2024-03-01 00:00:00 +09:00
modified: 2024-03-01 00:00:00 +09:00
tags: [ javascript, event ]
categories: [ 트러블슈팅 ]
---

이 블로그의 "category" 탭에 가면 카테고리별 포스팅을 볼 수 있다.<br>
"Category List"에서 카테고리를 클릭했을 때<br>
클릭되지 않은 나머지 카테고리의 opacity를 줄이는 기능을 추가하려던 중,<br>
카테고리를 클릭했을 때 기능이 적용되지 않는 문제가 발생했다.

### 문제의 코드

```javascript
const handleKeywordHighLight = () => {
    const currentUrl = new URL(window.location.href);
    const decodedHash = decodeURIComponent(currentUrl.hash);
    const category = decodedHash.replace('#', '');

    if (category === '') return;

    const h4Elements = document.querySelectorAll('h4');
    h4Elements.forEach(function (elem) {
        elem.style.opacity = elem.textContent.trim() === category ? "1" : "0.5";
    });
}

document.addEventListener("DOMContentLoaded", handleKeywordHighLight);
```

## 🔎 문제 파악

위 코드는 페이지를 새로고침 했을 때에는 정상 작동한다.<br>
왜? **`DOMContentLoaded` event만 listen**하고 있기 때문이다.<br>
때문에 페이지 새로고침 없이 URL 해시가 변경되었을 때, 해당 이벤트를 감지하지 못하는 문제가 발생했다.

## 💁🏻 해결 방법

해결 방법은 간단했다.<br>
URL 해시가 변경되는 것을 감지하는 **`hashchange` event를 listen**하면 된다.
<br>
다음과 같이 `DOMContentLoaded`와 함께 `hashchange` event를 listen하도록 코드를 수정했다.

```javascript
document.addEventListener("DOMContentLoaded", handleKeywordHighLight);
window.onhashchange = handleKeywordHighLight;
```

## 참고

- [MDN Web Docs - `onhashchange`](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)








