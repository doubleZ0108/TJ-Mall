function initShoppingCart(){
    let shoppingcart = $('ShoppingCart');

    let totalNum = 3;

    for(let i=0; i<totalNum; i++){
        let shoppingcartcard = $c('div');
        shoppingcartcard.classList.add('ShoppingCartCard');
        let shoppingcartImg = $c('img');
        shoppingcartImg.src = "../img/Books/" + "9.png";
        let shoppingcartText = $c('div');
        shoppingcartText.classList.add('Text');
        let shoppingcartH1 = $c('h1');
        shoppingcartH1.innerHTML = "同济大学纪念礼品校徽樱花季徽章礼盒胸针配饰logo金属贴纸高考研";
        let pricegroup = $c('div');
        pricegroup.classList.add("PriceGroup");
        let priceSpan1 = $c('span');
        priceSpan1.innerHTML = "单价: <label>¥" + 40.00 + "</label>";
        let priceSpan2 = $c('span');
        priceSpan2.innerHTML = "数量: <label>" + 2 + "</label>";
        let priceSpan3 = $c('span');
        priceSpan3.innerHTML = "总计: <label>¥" + 80.00 + "</label>"

        pricegroup.appendChild(priceSpan1);
        pricegroup.appendChild(priceSpan2);
        pricegroup.appendChild(priceSpan3);
        shoppingcartText.appendChild(shoppingcartH1);
        shoppingcartText.appendChild(pricegroup);
        shoppingcartcard.appendChild(shoppingcartImg);
        shoppingcartcard.appendChild(shoppingcartText);

        shoppingcart.appendChild(shoppingcartcard);
    }
}