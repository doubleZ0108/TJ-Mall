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