let navBar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    navBar.classList.toggle("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    navBar.classList.remove("active");
}

let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    loginForm.classList.remove("active");
    navBar.classList.remove("active");

}
window.onscroll = () => {
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    navBar.classList.remove("active");
}
let themeBtn = document.querySelector("#theme-btn");
themeBtn.onclick = () => {
    themeBtn.classList.toggle("fa-sun");
    if (themeBtn.classList.contains("fa-sun")) {
        themeBtn.classList.remove("fa-moon");
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

    };
};
var swiper = new Swiper(".review-slider", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

