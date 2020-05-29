function initShoppingCart(){
    let emptyshoppingcart = $('empty-shoppingcart');
    emptyshoppingcart.style.display = "none";

    let shoppingcart = $('ShoppingCart');

    let totalAmount = 0;
    let settle = $('settle');
    let totalamountLabel = settle.firstElementChild.firstElementChild;

    if(sessionStorage.getItem("isLogin") === "true"){
        let username = {
            "username": sessionStorage.getItem("username")
        };
        connectToBackEnd(username, "init-shopping-cart")
            .then(result => {
                console.log(result);
                if(result['state']){
                    console.log("刷新购物车成功");
                    if(result['shoppingcart-products'].length > 0){
                        result['shoppingcart-products'].forEach(function (elem) {
                            totalAmount += elem.price * elem.amount;

                            let shoppingcartcard = $c('div');
                            shoppingcartcard.classList.add('ShoppingCartCard');
                            let shoppingcartImg = $c('img');
                            shoppingcartImg.src = "../" + elem.imgsrc;
                            let shoppingcartText = $c('div');
                            shoppingcartText.classList.add('Text');
                            let shoppingcartH1 = $c('h1');
                            shoppingcartH1.innerHTML = elem.title;
                            let pricegroup = $c('div');
                            pricegroup.classList.add("PriceGroup");
                            let priceSpan1 = $c('span');
                            priceSpan1.innerHTML = "单价: <label>¥" + toTwoDecimal(elem.price) + "</label>";
                            let priceSpan2 = $c('span');
                            priceSpan2.innerHTML = "数量: <label>" + elem.amount + "</label>";
                            let priceSpan3 = $c('span');
                            priceSpan3.innerHTML = "总计: <label>¥" + toTwoDecimal(elem.price * elem.amount) + "</label>";

                            pricegroup.appendChild(priceSpan1);
                            pricegroup.appendChild(priceSpan2);
                            pricegroup.appendChild(priceSpan3);
                            shoppingcartText.appendChild(shoppingcartH1);
                            shoppingcartText.appendChild(pricegroup);
                            shoppingcartcard.appendChild(shoppingcartImg);
                            shoppingcartcard.appendChild(shoppingcartText);

                            shoppingcart.appendChild(shoppingcartcard);
                        });

                        totalamountLabel.innerHTML = "¥" + toTwoDecimal(totalAmount).toString();
                    } else {
                        initEmptyShoppingCart("您的购物车为空");
                    }
                } else {
                    alert(result['msg']);
                }
            })
            .catch(error => console.log(error));
    } else {
        initEmptyShoppingCart("登陆以查看购物车");
    }
}

function initEmptyShoppingCart(text){
    let emptyshoppingcart = $('empty-shoppingcart');
    emptyshoppingcart.style.display = "block";

    let liquidtext = $('liquid-text');
    liquidtext.innerHTML = text;

    let liquidbar = $('liquid-bar');

    liquidtext.addEventListener('mouseover', function () {
        liquidbar.classList.add("bar-hovered");
    });
    liquidtext.addEventListener('mouseout', function () {
        liquidbar.classList.remove("bar-hovered");
    });

    let settle = $('settle');
    settle.style.display = "none";
}