function initGift(){
    let giftcardgroup = $('GiftCardGroup');
    readJson("gift.json")
        .then(giftcardObj => {
            giftcardObj["gift"].forEach(function(elem, index){
                let giftcardDiv = $c('div');
                giftcardDiv.classList.add('GiftCard');
                let giftcardImg = $c('img');
                giftcardImg.src = "../img/Gifts/" + elem.imgsrc;
                giftcardImg.style.height = 200 + getRandomNum(0, 100) + getRandomNum(0, 50) + "px";
                let giftcardtextgroupDiv = $c('div');
                giftcardtextgroupDiv.classList.add('GiftCardTextGroup');
                let giftcardH3 = $c('h3');
                giftcardH3.classList.add('GiftCardTitle');
                giftcardH3.innerHTML = elem.title;
                let giftcardP = $c('p');
                giftcardP.classList.add('GiftCardIntro');
                giftcardP.innerHTML = elem.intro;
                let giftcardpriceDiv = $c('div');
                giftcardpriceDiv.classList.add('GiftCardPrice');
                giftcardpriceDiv.innerHTML = "¥" + elem.price;

                giftcardtextgroupDiv.appendChild(giftcardH3);
                giftcardtextgroupDiv.appendChild(giftcardP);
                giftcardtextgroupDiv.appendChild(giftcardpriceDiv);

                giftcardDiv.appendChild(giftcardImg);
                giftcardDiv.appendChild(giftcardtextgroupDiv);

                giftcardgroup.appendChild(giftcardDiv);

                giftcardDiv.addEventListener('click', function(){
                    let type = "gift";
                    window.location.href = "product.html?" + "type=" + type + "&index=" + index;
                });
            });
        })
        .catch(error => console.log(error));
}