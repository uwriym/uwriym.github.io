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
    const pathName = currentUrl.pathname;
    const decodedHash = decodeURIComponent(currentUrl.hash);
    const category = decodedHash.replace('#', '');
    const opacity_to_change = "0.4";

    if (category === '') return;

    if (pathName === "/tags/") {
        const h2Elements = document.querySelectorAll('h2');
        h2Elements.forEach(function (elem) {
            elem.style.opacity = elem.id.replace(/\s/g, '-') === category ? "1" : opacity_to_change;
        });
    }

    if (pathName === "/category/") {
        const h4Elements = document.querySelectorAll('h4');
        h4Elements.forEach(function (elem) {
            elem.style.opacity = elem.textContent.trim() === category ? "1" : opacity_to_change;
        });
    }
}

document.addEventListener("DOMContentLoaded", handleKeywordHighLight);
window.onhashchange = handleKeywordHighLight;
