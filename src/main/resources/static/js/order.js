window.onload = function () {
    initNavigation();
    initShoppingCart();
    initWaterRipple();
    initButton();
    initSettle();
    initSocialMedia();
};

function initShoppingCart() {
    let hero = $('hero');
    hero.style.backgroundImage = 'url("../img/tongji/bg/' + '08' + '.png")';
}

function initButton(){
    document.querySelectorAll('.Hero .WaterRipple').forEach(function(elem, index){
        switch (index){
            case 0:
                elem.addEventListener('click',function () {
                    window.location.href = "#order-anchor";
                });
                setStyle(elem, {
                    backgroundImage: 'linear-gradient(to right, #5151E5, #72EDF2)',
                    backgroundSize: '200%',
                    backgroundPosition: '100% 0'
                });
                break;
            case 1:
                elem.addEventListener('click',function () {
                    window.location.href = "#history-anchor";
                });
                setStyle(elem, {
                    backgroundImage: 'linear-gradient(to right, #5151E5, #72EDF2)',
                    backgroundSize: '200%',
                    backgroundPosition: '0 100%'
                });
                break;
            default:
                console.log("button index error...");
        }
    });
}