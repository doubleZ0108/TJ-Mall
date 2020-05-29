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
    console.log(sessionStorage);
    if(sessionStorage.getItem("isLogin") !== "true"){
        sessionStorage.setItem("isLogin", "false");
    }
}