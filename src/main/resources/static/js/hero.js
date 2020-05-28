function initHero(){
    let hero = $('hero');
    
    setInterval(function(){
        let index = getRandomNum(1, 12);
        let index_str = getIndexStr(index);
        hero.style.backgroundImage = 'url("../img/tongji/bg/' + index_str + '.png")';
    }, 10000);
}