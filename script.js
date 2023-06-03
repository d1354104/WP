var navLinks = document.querySelectorAll("nav ul li a");
var pages = document.querySelectorAll(".page");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        var page = link.dataset.page;
        showPage(page);
        underlineMenu(link);
    });
});

function showPage(page) {
    pages.forEach(function (pageElement) {
        if (pageElement.id === page) {
            pageElement.style.display = "block";
        } else {
            pageElement.style.display = "none";
        }
    });
}

function underlineMenu(link) {
    var navItems = document.querySelectorAll("nav ul li a");
    navItems.forEach(function (item) {
        item.style.textDecoration = "none";
        item.style.borderBottom = "none";
    });

    link.style.textDecoration = "none";
    link.style.borderBottom = "2px solid orange";

    var firstItem = document.querySelector("nav ul li:first-child a");
    if (link === firstItem) {
        var secondItem = document.querySelector("nav ul li:nth-child(4) a");
        link.style.borderBottom = "none";
        secondItem.style.borderBottom = "2px solid orange"; // 원하는 색상으로 변경하세요
    }
}
window.addEventListener("DOMContentLoaded", function () {
    var initialPage = "about"; // 처음에 보여줄 페이지의 id를 지정하세요
    var initialLink = document.querySelector("nav ul li a[data-page='" + initialPage + "']");
    showPage(initialPage);
    underlineMenu(initialLink);
});