window.onload = function () {
    initNavigator();
    initHero();
}

function initNavigator(){
    let navigator = $('navigator');
    document.addEventListener('scroll', function () {
    if(self.pageYOffset > 50) {
        navigator.classList.add('NavigationScrolled');
    } else {
        navigator.classList.remove('NavigationScrolled');
    }
    });
}

function initHero(){
    let hero = $('hero');
    
    setInterval(function(){
        let index = getRandomNum(1, 12);
        console.log(index);
        let index_str = index < 10 ? '0' + index.toString() : index.toString();
        hero.style.backgroundImage = 'url("../img/tongji/bg/' + index_str + '.png")';
    }, 10000);
}