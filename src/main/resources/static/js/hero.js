function initHero(){
    let hero = $('hero');
    
    setInterval(function(){
        let index = getRandomNum(1, 12);
        let index_str = index < 10 ? '0' + index.toString() : index.toString();
        hero.style.backgroundImage = 'url("../img/tongji/bg/' + index_str + '.png")';
    }, 10000);
}