window.onload = function () {
    initNavigation();
    initOrderHero();
    initWaterRipple();
    initSettle();
    initShoppingCart();
    initHistory();
    initSocialMedia();
};

function initOrderHero() {
    let hero = $('hero');
    hero.style.backgroundImage = 'url("../img/tongji/bg/' + '08' + '.png")';
}