function initHistory(){
    //TODO 从数据库中取该用户的历史订单
    let totalNum = 5;
    let historygroup = $('HistoryGroup');
    let history = $('HistoryList');
    history.innerHTML = "";

    for(let i = 0; i < totalNum; ++i){
        let index = i%12 + 1;
        let index_str = getIndexStr(index);

        let historycardLi = $c('li');
        historycardLi.classList.add('HistoryCard');
        setStyle(historycardLi, {
            "width": 100/totalNum + "%"
        });

        let historycardImg = $c('img');
        historycardImg.src = "../img/tongji/bg/" + index_str + ".png";

        let contentDiv = $c('div');
        contentDiv.classList.add('Content');

        let contentUl = $c('ul');
        let itemNum = 10;
        for(let j=0;j<itemNum;++j){
            let contentLi = $c('li');
            let contentImg = $c('img');
            contentImg.src = "../img/Books/9.png";
            let contentTextDiv = $c('div');
            contentTextDiv.classList.add('Text');
            let contentH2 = $c('h2');
            contentH2.innerHTML = "同济大学纪念礼品校徽樱花季徽章礼盒胸针配饰logo金属贴纸高考研";
            let contentP1 = $c('p');
            contentP1.innerHTML = "购买数量: " + "<label>2</label>";
            let contentP2 = $c('p');
            contentP2.innerHTML = "购买时间: " + "<label>2020-02-20</label>";
            contentTextDiv.appendChild(contentH2);
            contentTextDiv.appendChild(contentP1);
            contentTextDiv.appendChild(contentP2);
            contentLi.appendChild(contentImg);
            contentLi.appendChild(contentTextDiv);
            contentUl.appendChild(contentLi);
        }

        contentDiv.appendChild(contentUl);

        historycardLi.appendChild(historycardImg);
        historycardLi.appendChild(contentDiv);

        history.appendChild(historycardLi);

        if(totalNum !== 1){
            historycardLi.addEventListener('mouseover', function(){
                document.querySelectorAll('li.HistoryCard').forEach(function(elem){
                    elem.style.width = 40/(totalNum-1) + "%";
                });
                historycardLi.style.width = "60%";
            });
            historycardLi.addEventListener('mouseout', function(){
                document.querySelectorAll('li.HistoryCard').forEach(function(elem){
                    elem.style.width = 100/totalNum + "%";
                });
            });
        } else {
            setStyle(historycardImg, {
                "width": "100%"
            });
        }
    }
}