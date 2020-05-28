window.onload = function () {
    initNavigation();
    initHero();

    initCreativeProduct();
    initSocialMedia();

    initWaveSection();
    initGift();
    initBook();

    initSessionStorage();
};

function initSessionStorage(){
    sessionStorage.setItem("isLogin", "false");
}