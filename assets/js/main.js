(() => {
    // Theme switch
    const body = document.body;
    const lamp = document.getElementById("mode");

    const toggleTheme = (state) => {
        if (state === "dark") {
            localStorage.setItem("theme", "light");
            body.removeAttribute("data-theme");
        } else if (state === "light") {
            localStorage.setItem("theme", "dark");
            body.setAttribute("data-theme", "dark");
        } else {
            initTheme(state);
        }
    };

    lamp.addEventListener("click", () =>
        toggleTheme(localStorage.getItem("theme"))
    );

    // Blur the content when the menu is open
    const cbox = document.getElementById("menu-trigger");

    cbox.addEventListener("change", function () {
        const area = document.querySelector(".wrapper");
        this.checked
            ? area.classList.add("blurry")
            : area.classList.remove("blurry");
    });
})();

// 카테고리 클릭 시 나머지 카테고리 투명도 조절(0.5)
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
window.onhashchange = handleKeywordHighLight;
