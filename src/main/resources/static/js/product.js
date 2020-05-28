window.onload = function(){
    let type = getParams("type");
    let index = getParams("index");
    
    initNavigation(true);
    initWaterRipple();
    initProduct(type, index);
};

function initProduct(type, index){
    let product = $('ProductGroup');
    let title = product.firstElementChild;
    let image = title.nextElementSibling.firstElementChild;
    let price = image.nextElementSibling.firstElementChild.firstElementChild;
    let hero = $('hero');

    let jsonFileName;
    let imgDirName;
    switch (type) {
        case 'creative-product':
            jsonFileName = "creativeproduct";
            imgDirName = "CreativeProducts";
            hero.style.backgroundImage = 'url("../img/tongji/bg/' + '03' + '.png")';
            break;
        case 'gift':
            jsonFileName = "gift";
            imgDirName = "Gifts";
            hero.style.backgroundImage = 'url("../img/tongji/bg/' + '05' + '.png")';
            break;
        case 'book':
            jsonFileName = "book";
            imgDirName = "Books";
            hero.style.backgroundImage = 'url("../img/tongji/bg/' + '10' + '.png")';
            break;
        default:
            console.log("type unknown");
    }

    readJson(jsonFileName + ".json")
        .then(productObj => {
            let elem = productObj[jsonFileName][index];
            title.innerHTML = elem.title;
            price.innerHTML = "¥" + elem.price;
            image.src = "../img/" + imgDirName + "/" + elem.imgsrc;
        })
        .catch(error => console.log(error));
}