window.onload = function () {
    initNavigation();
    initHero();

    initCreativeProduct();
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

function initCreativeProduct(){
    let creativeproduct = $('CreativeProductCardGroup');
    readJson("creativeproduct.json")
        .then(creativeproductObj => {
            creativeproductObj["creativeproduct"].forEach(function(elem){
                let creativeproductDiv = $c('div');
                creativeproductDiv.classList.add('CreativeProductCard');
                let creativeproductImg = $c('img');
                creativeproductImg.src =  CREATIVE_PRODUCTS_IMG_PATH + elem.imgsrc;
                let creativeproductH2 = $c('h2');
                creativeproductH2.innerHTML = elem.title;
                let bufDiv = $c('div');
                bufDiv.classList.add('appidx-info');
                let bufP = $c('p');
                bufP.innerHTML = elem.intro;
                let priceDiv = $c('div');
                priceDiv.classList.add('Price');
                priceDiv.innerHTML = "¥" + elem.price;
                
                bufDiv.appendChild(bufP);
                bufDiv.appendChild(priceDiv);
                creativeproductDiv.appendChild(creativeproductImg);
                creativeproductDiv.appendChild(creativeproductH2);
                creativeproductDiv.appendChild(bufDiv);

                creativeproduct.append(creativeproductDiv);
            });
        })
        .catch(error => console.log(error));
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