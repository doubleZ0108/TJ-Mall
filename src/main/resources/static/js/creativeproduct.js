function initCreativeProduct(){
    let creativeproduct = $('CreativeProductCardGroup');
    readJson("creativeproduct.json")
        .then(creativeproductObj => {
            creativeproductObj["creativeproduct"].forEach(function(elem, index){
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

                creativeproductDiv.addEventListener('click', function(){
                    let type = "creative-product";
                    window.location.href = "product?" + "type=" + type + "&index=" + index;
                });
            });
        })
        .catch(error => console.log(error));
}