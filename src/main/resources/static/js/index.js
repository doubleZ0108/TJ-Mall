window.onload = function () {
    initNavigation();
    initHero();

    initSocialMedia();
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
            navigatorObj["navigator"].forEach(function(elem){
                let navigationLi = $c('li');
                let navigationA = $c('a');
                navigationA.href = elem.href;
                navigationA.title = elem.title;
                navigationA.innerHTML = elem.content;
                navigationLi.appendChild(navigationA);
                navigationList.appendChild(navigationLi);
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

function initSocialMedia(){
    let socialMedia = $('SocialMediaGroup');
    readJson("socialmedia.json")
        .then(socialmediaObj => {
            socialmediaObj["socialmedia"].forEach(function(elem){
                let socialmediaDiv = $c('div');
                socialmediaDiv.classList.add("SocialMediaIcon");
                let socialmediaA = $c('a');
                socialmediaA.href = elem.href;
                socialmediaA.title = elem.title;
                socialmediaA.target = "_blank";
                let socialmediaI = $c('i');
                socialmediaI.classList.add("iconfont");
                socialmediaI.classList.add(elem.class);
                socialmediaI.style.color = elem.color;

                socialmediaA.appendChild(socialmediaI);
                socialmediaDiv.appendChild(socialmediaA);
                socialMedia.appendChild(socialmediaDiv);
            });
        })
        .catch(error => console.log(error));
}