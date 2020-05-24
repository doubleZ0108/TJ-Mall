window.onload = function () {
    initNavigation();
    initHero();
}

function initNavigation(){
    let navigator = $('navigator');
    document.addEventListener('scroll', function () {
    if(self.pageYOffset > 50) {
        navigator.classList.add('NavigationScrolled');
    } else {
        navigator.classList.remove('NavigationScrolled');
    }
    });

    initNavigationList();
}

function initNavigationList(){
    let navigationList = $('NavigationList');
    // let navigatorObj = readJson("navigator.json");

    readJson("navigator.json")
        .then(navigatorObj => {
            // console.log(navigatorObj["navigator"]);
            navigatorObj["navigator"].forEach(function(elem){
                console.log(elem);
            });
        })
        .catch(error => console.log(error));
}

function initHero(){
    let hero = $('hero');
    
    setInterval(function(){
        let index = getRandomNum(1, 12);
        let index_str = index < 10 ? '0' + index.toString() : index.toString();
        hero.style.backgroundImage = 'url("../img/tongji/bg/' + index_str + '.png")';
    }, 10000);
}