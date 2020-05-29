function initHero(){
    let hero = $('hero');
    
    setInterval(function(){
        let index = getRandomNum(1, 12);

        let index_str = getIndexStr(index);
        try {
            hero.style.backgroundImage = 'url("../img/tongji/bg/' + index_str + '.png")';
        } catch (err){
            console.log("random hero bg error...");
        } finally {
            hero.style.backgroundImage = 'url("../img/tongji/bg/' + "03" + '.png")';
        }
    }, 10000);
}