window.onload = function () {
    initSessionStorage();

    initNavigation();
    initHero();

    initCreativeProduct();
    initSocialMedia();

    initWaveSection();
    initGift();
    initBook();
};

function initSessionStorage(){
    console.log(sessionStorage);
    if(sessionStorage.getItem("isLogin") !== "true"){
        sessionStorage.setItem("isLogin", "false");
    }
}