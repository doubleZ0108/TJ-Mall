function initHistory(){

    let totalNum = 0;
    let historygroup = $('HistoryGroup');
    let history = $('HistoryList');
    history.innerHTML = "";

    if(sessionStorage.getItem("isLogin") === "true"){
        let username = {
            "username": sessionStorage.getItem("username")
        };
        connectToBackEnd(username, "history")
            .then(result => {
                if(result['state'] === 'true'){
                    console.log(result['history']);
                    console.log("刷新历史订单成功");

                    totalNum = result['history'].length;

                    result['history'].forEach(function (card, i) {
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
                        card.forEach(function(elem, j){
                            let contentLi = $c('li');
                            let contentImg = $c('img');
                            contentImg.src = "../" + elem.imgsrc;
                            let contentTextDiv = $c('div');
                            contentTextDiv.classList.add('Text');
                            let contentH2 = $c('h2');
                            contentH2.innerHTML = elem.title;
                            let contentP1 = $c('p');
                            contentP1.innerHTML = "购买数量: " + "<label>" + elem.amount + "</label>";
                            let contentP2 = $c('p');
                            contentP2.innerHTML = "购买时间: " + "<label>" + elem.ordertime + "</label>";
                            contentTextDiv.appendChild(contentH2);
                            contentTextDiv.appendChild(contentP1);
                            contentTextDiv.appendChild(contentP2);
                            contentLi.appendChild(contentImg);
                            contentLi.appendChild(contentTextDiv);
                            contentUl.appendChild(contentLi);
                        });

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
                    });

                } else {
                    alert(result['msg'] + "加载历史订单失败，请刷新尝试");
                }
            })
            .catch(error => console.log(error));
    } else {
        // TODO 未登陆查看历史记录
    }

    // for(let i = 0; i < totalNum; ++i){
    //     let index = i%12 + 1;
    //     let index_str = getIndexStr(index);
    //
    //     let historycardLi = $c('li');
    //     historycardLi.classList.add('HistoryCard');
    //     setStyle(historycardLi, {
    //         "width": 100/totalNum + "%"
    //     });
    //
    //     let historycardImg = $c('img');
    //     historycardImg.src = "../img/tongji/bg/" + index_str + ".png";
    //
    //     let contentDiv = $c('div');
    //     contentDiv.classList.add('Content');
    //
    //     let contentUl = $c('ul');
    //     let itemNum = 10;
    //     for(let j=0;j<itemNum;++j){
    //         let contentLi = $c('li');
    //         let contentImg = $c('img');
    //         contentImg.src = "../img/Books/9.png";
    //         let contentTextDiv = $c('div');
    //         contentTextDiv.classList.add('Text');
    //         let contentH2 = $c('h2');
    //         contentH2.innerHTML = "同济大学纪念礼品校徽樱花季徽章礼盒胸针配饰logo金属贴纸高考研";
    //         let contentP1 = $c('p');
    //         contentP1.innerHTML = "购买数量: " + "<label>2</label>";
    //         let contentP2 = $c('p');
    //         contentP2.innerHTML = "购买时间: " + "<label>2020-02-20</label>";
    //         contentTextDiv.appendChild(contentH2);
    //         contentTextDiv.appendChild(contentP1);
    //         contentTextDiv.appendChild(contentP2);
    //         contentLi.appendChild(contentImg);
    //         contentLi.appendChild(contentTextDiv);
    //         contentUl.appendChild(contentLi);
    //     }
    //
    //     contentDiv.appendChild(contentUl);
    //
    //     historycardLi.appendChild(historycardImg);
    //     historycardLi.appendChild(contentDiv);
    //
    //     history.appendChild(historycardLi);
    //
    //     if(totalNum !== 1){
    //         historycardLi.addEventListener('mouseover', function(){
    //             document.querySelectorAll('li.HistoryCard').forEach(function(elem){
    //                 elem.style.width = 40/(totalNum-1) + "%";
    //             });
    //             historycardLi.style.width = "60%";
    //         });
    //         historycardLi.addEventListener('mouseout', function(){
    //             document.querySelectorAll('li.HistoryCard').forEach(function(elem){
    //                 elem.style.width = 100/totalNum + "%";
    //             });
    //         });
    //     } else {
    //         setStyle(historycardImg, {
    //             "width": "100%"
    //         });
    //     }
    // }
}