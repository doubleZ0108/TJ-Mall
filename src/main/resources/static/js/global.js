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

/* 获取min-max间的随机数 */
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

/*异步 读取json 返回json内容 */
function readJson(filename){
    return new Promise((resolve, reject) => {
        let request;  
        let obj;
        if(window.XMLHttpRequest){  
            request = new XMLHttpRequest();  
        }else if(window.ActiveXObject){  
            request = new window.ActiveXObject();  
        }else{  
            alert("请升级至最新版本的浏览器");  
        }  
        if(request != null){  
            request.open("GET","../json/navigator.json", true);  
            request.send(null);  
            request.onreadystatechange=function(){  
                if(request.readyState==4 && request.status==200){  
                    obj = JSON.parse(request.responseText);  
                    
                    resolve(obj);        // 通过 resolve 参数把成功的结果返回
                    reject('error');     // 通过 reject 参数把错误信息返回
                    
                    return obj;
                }  
            };  
        }
    });
}