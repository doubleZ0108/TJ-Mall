let TONGJI_IMG_MAX = 12;    // 总图标数
let CREATIVE_PRODUCTS_IMG_PATH = "../img/CreativeProducts/";

/**
    $('container')

 * @param id
 * @returns {HTMLElement}
 */
function $(id){
    return document.getElementById(id);
}

function $c(type){
    return document.createElement(type);
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
            request.open("GET","../json/" + filename, true);  
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


/* 解析url */
function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function getIndexStr(index){
    return (index<10 ? "0"+index.toString() : index.toString());
}


function connectToBackEnd(frontendObj, url){
    return new Promise((resolve, reject) => {
        let backendObj;
        let request;
        if(window.XMLHttpRequest){
            request = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            request = new window.ActiveXObject();
        }else{
            alert("请升级至最新版本的浏览器");
        }
        if(request != null){
            request.open("POST",url, true);
            request.setRequestHeader("Content-Type","application/json");
            request.send(JSON.stringify(frontendObj));
            // request.send(null);
            request.onreadystatechange=function(){
                if(request.readyState==4 && request.status==200){
                    backendObj = JSON.parse(request.responseText);

                    resolve(backendObj);        // 通过 resolve 参数把成功的结果返回
                    reject('error');     // 通过 reject 参数把错误信息返回

                    return backendObj;
                }
            };
        }
    });
}