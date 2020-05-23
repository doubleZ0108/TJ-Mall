let TONGJI_IMG_MAX = 12;    // 总图标数

/**
    $('container')

 * @param id
 * @returns {HTMLElement}
 */
function $(id){
    return document.getElementById(id);
}

/**
    setStyle(container,{
        perspective: 1000 + "px",
        transformStyle: "preserve-3d",
    });

 * @param obj
 * @param css
 */
function setStyle(obj, css){
    for(let atr in css){
        obj.style[atr] = css[atr];
    }
}

function getRandomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}