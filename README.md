

# 同济商城 | TJ-Mall

🌐 [同济商城 | TJ-Mall](http://tj-mall.doublez.site/)

🎥 [网页视频 | Intro Video](https://www.bilibili.com/video/BV1U5411s7DS/)

 📦[tongji-mall-0.0.1-SNAPSHOT.jar](https://github.com/doubleZ0108/TJ-Mall/blob/master/tongji-mall-0.0.1-SNAPSHOT.jar)

##### Table of Contents

   * [同济商城 | TJ-Mall](#同济商城--tj-mall)
      * [实现功能](#实现功能)
      * [测试用例](#测试用例)
      * [主要界面](#主要界面)
         * [主界面](#主界面)
            * [同济创意](#同济创意)
            * [同济礼物](#同济礼物)
            * [同济出版](#同济出版)
            * [社交媒体](#社交媒体)
         * [注册 / 登陆](#注册--登陆)
            * [注册](#注册)
            * [登陆](#登陆)
         * [商品购买](#商品购买)
         * [订单中心](#订单中心)
            * [购物车](#购物车)
            * [历史订单](#历史订单)
         * [错误界面](#错误界面)
      * [开发环境](#开发环境)
      * [部分实现](#部分实现)
         * [前端](#前端)
            * [语法糖](#语法糖)
            * [读取json动态生成页面](#读取json动态生成页面)
            * [Ajax连接后端](#ajax连接后端)
         * [后端](#后端)
            * [Controller](#controller)
            * [Dao](#dao)
            * [Entity](#entity)
            * [Service](#service)
         * [数据库](#数据库)
            * [创建用户表](#创建用户表)
            * [查询历史订单sql](#查询历史订单sql)
      * [关于作者](#关于作者)
      * [项目结构](#项目结构)

------

<br/>

## 实现功能

- 商品展示（图片，名称，标签，价格）

  - 创意品 
  - 礼物
  - 图书

- 界面导航

- 购买商品 

  - 未登陆：禁止加入购物车
  - 已登陆：选择数量 加入购物车（一次最多将10个商品加入购物车）

- 注册 / 登陆（这里只做了非空检测，其他功能大同小异）

- 查看购物车

  - 未登陆：loading动态提示
  - 已登陆：查看以添加购物车的信息及总价

- 结算（登陆状态且购物车非空可进行结算下单，这里未实现支付功能）

- 查看历史订单

  - 未登陆：百叶窗特效
  - 已登陆：查看历史订单（每一张卡片为一次结算的订单）

- 媒体信息（github，邮箱，视频，文档）

- 错误处理

- 数据持久化

- ❗️远程部署

  > 请访问http://tj-mall.doublez.site/
  >
  > ip地址: http://101.132.174.191:8080/

- ❗️适配电脑 平板 手机不同平台

<br/>

## 测试用例

1. 历史订单丰富用户

   | Item   | Value  |
   | ------ | ------ |
   | 用户名 | tongji |
   | 密码   | tongji |

2. 空用户

   | Item   | Value |
   | ------ | ----- |
   | 用户名 | fresh |
   | 密码   | fresh |

<br/>

## 主要界面

### 主界面

<img src="https://upload-images.jianshu.io/upload_images/12014150-435d79198404a53b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="index" width="85%;" />

#### 同济创意

<img src="https://upload-images.jianshu.io/upload_images/12014150-845383d021c1f661.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="creativeproduct" width="85%;" />

#### 同济礼物

<img src="https://upload-images.jianshu.io/upload_images/12014150-9992e1936a8b6401.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="gift" width="85%;" />

#### 同济出版

<img src="https://upload-images.jianshu.io/upload_images/12014150-399ea6a32a200465.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="book" width="85%;" />

#### 社交媒体

<img src="https://upload-images.jianshu.io/upload_images/12014150-9f78a8a140563850.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="social" width="60%;" />

------

### 注册 / 登陆

#### 注册

<img src="https://upload-images.jianshu.io/upload_images/12014150-426ae539a1c90f1d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="signin" width="85%;" />

#### 登陆

<img src="https://upload-images.jianshu.io/upload_images/12014150-df428cc4cb65cb36.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="signup" width="85%;" />

------

### 商品购买

<img src="https://upload-images.jianshu.io/upload_images/12014150-4b3ec4e8ab2cf7e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="product" width="85%;" />

------

### 订单中心

<img src="https://upload-images.jianshu.io/upload_images/12014150-05566c4624e8399c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="order" width="85%;" />

#### 购物车

未登陆

<img src="https://upload-images.jianshu.io/upload_images/12014150-6997ad7f573aa8e2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="shoppingcart-none" width="50%;" />

已登陆

<img src="https://upload-images.jianshu.io/upload_images/12014150-defbad879e174b35.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="shopping" width="85%;" />

#### 历史订单

未登陆

<img src="https://upload-images.jianshu.io/upload_images/12014150-3f2cc4041ed13912.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="history-none" width="85%;" />

已登陆

<img src="https://upload-images.jianshu.io/upload_images/12014150-92f966bcc1008fbb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="history" width="85%;" />

### 错误界面

<img src="https://upload-images.jianshu.io/upload_images/12014150-6e1a6a8162ccb19d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="error" width="85%;" />

<br/>

## 开发环境

- **操作系统**

  - **开发环境**：macOS Catalina 10.15.4
  - **部署环境**：Ubuntu 16.04.6 LTS

- **IDE**

  - Visual Studio Code 1.45.1
  - IntelliJ IDEA 2019.3.2

- **开发语言**

  - HTML5
  - CSS3
  - JavaScript
  - Java

- **数据库 **: mysql 8.0.20

- **框架技术**

  - 前端：原生HTML + CSS + JavaScript
  - 后端：SpringBoot + Maven + Mysql + MyBatis

  > 部分图片资源来自网络，侵删

<br/>

## 部分实现

（这里仅展示部分逻辑和实现等）

### 前端

#### 语法糖

通过id获取对象

```javascript
function $(id){
    return document.getElementById(id);
}
```

动态设置样式

```javascript
function setStyle(obj, css){
    for(let atr in css){
        obj.style[atr] = css[atr];
    }
}
```

解析url

```javascript
function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
```

#### 读取json动态生成页面

```javascript
/* 读取json */
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
```

```javascript
/* 动态生成页面 */
let bookgroup = $('BookGroup');
readJson("book.json")
  .then(bookObj => {
  bookObj["book"].forEach(function(elem, index){
    let bookcard = $c('div');
    bookcard.classList.add('BookCard');

    let bookcardImageDiv = $c('div');
    bookcardImageDiv.classList.add('BookCardImage');
    // ...
    bookcard.appendChild(bookcardContent);
    bookgroup.appendChild(bookcard);

    bookcard.addEventListener('click', function(){
      let type = "book";
      window.location.href = "product?" + "type=" + type + "&index=" + index;
    });
  });
})
  .catch(error => console.log(error));
```

```json
/* json数据 */
{
    "book": [
        {
            "imgsrc": "1.png",
            "title": "建筑工程制图(第6版) 9787560856711 同济大学出版社",
            "price": "31.20",
            "content": "《建筑工程制图（第6版）/普通高等教育“十一五”国家级规划教材》在编写上力求理论联系实际，密切结合专业，图文结合，深入浅出，便于自学。"
        }
      //...
    ]
}
```

#### Ajax连接后端

```javascript
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
```



------

### 后端

#### Controller

```java
@Controller
@ComponentScan({"site.doublez.tongjimall.service"})
@MapperScan("site.doublez.tongjimall.dao")
public class OrderController {

    @Resource
    private ProductService productService;

    @Resource
    private HistoryOrderService historyOrderService;

    @RequestMapping(value = "order", method = RequestMethod.GET)
    public String order(){
        return "order";
    }

    @PostMapping("/settle")
    @ResponseBody
    public Map<String, Object> Settle(@RequestBody Map<String,Object> map) throws ParseException {
        String username = map.get("username").toString();

        Map<String, Object> result_map = new HashMap<>();

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date=new Date();
        Date ordettime = simpleDateFormat.parse(simpleDateFormat.format(date));

        try {
            //(1) 查询购物车
            ArrayList<Product> productArrayList = productService.select_shoppingcart_by_username(username);

            // (2) 将订单加入历史订单
            productArrayList.forEach(product -> {
                HistoryOrder historyOrder = new HistoryOrder(username, ordettime, product.getTitle(), product.getImgsrc(), product.getAmount());
                historyOrderService.insert_order(historyOrder);
            });

            // (3) 清空购物车
            productService.delete_by_username(username);

            result_map.put("state", "true");
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }

}
```

#### Dao

```java
@Mapper
public interface ProductDao {
    void insert_product(Product product);

    ArrayList<Product> select_shoppingcart_by_username(String username);

    void delete_by_username(String username);
}
```

#### Entity

```java
@Data
public class User {
    private int id;
    private String username;
    private String password;

    public User() { }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
```

#### Service

```java
@Data
public class User {
    private int id;
    private String username;
    private String password;

    public User() { }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
```

------

### 数据库

#### 创建用户表

```sql
CREATE TABLE `TJ-Mall`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
```

#### 查询历史订单sql

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="site.doublez.tongjimall.dao.HistoryOrderDao">
    <select id="select_history" parameterType="String" resultType="site.doublez.tongjimall.entity.HistoryOrder">
        SELECT *
        FROM HistoryOrder
        WHERE (USERNAME=#{username} AND ORDERTIME IN (
            SELECT ORDERTIME
            FROM HistoryOrder
            GROUP BY ORDERTIME
            ORDER BY ORDERTIME ASC
        ));
    </select>
</mapper>
```



<br/>

## 关于作者

| Item            | Info                                                |
| --------------- | --------------------------------------------------- |
| **Name**        | 张喆                                                |
| **ID**          | 1754060                                             |
| **Adviser**     | 金伟祖老师                                          |
| **Course Name** | Script Programming                                  |
| **Course Time** | 星期二 3-4 [1-17]  星期四 3-4 双[2-16]              |
| **Email**       | [dbzdbz@tongji.edu.cn](mailto:dbzdbz.tongji.edu.cn) |

<br/>

## 项目结构

```
.
├── README.md
├── mvnw
├── mvnw.cmd
├── pom.xml
├── src
│   └── main
│       ├── java
│       │   └── site
│       │       └── doublez
│       │           └── tongjimall
│       │               ├── TongjiMallApplication.java
│       │               ├── controller
│       │               │   ├── DBController.java
│       │               │   ├── IndexController.java
│       │               │   ├── LoginController.java
│       │               │   ├── MyErrorController.java
│       │               │   ├── OrderController.java
│       │               │   └── ProductController.java
│       │               ├── dao
│       │               │   ├── DBDao.java
│       │               │   ├── HistoryOrderDao.java
│       │               │   ├── ProductDao.java
│       │               │   └── UserDao.java
│       │               ├── entity
│       │               │   ├── DB.java
│       │               │   ├── HistoryOrder.java
│       │               │   ├── Product.java
│       │               │   └── User.java
│       │               └── service
│       │                   ├── DBService.java
│       │                   ├── HistoryOrderService.java
│       │                   ├── ProductService.java
│       │                   └── UserService.java
│       └── resources
│           ├── application.yml
│           ├── mapper
│           │   ├── DBMapper.xml
│           │   ├── HistoryOrderMapper.xml
│           │   ├── ProductMapper.xml
│           │   └── UserMapper.xml
│           ├── static
│           │   ├── css
│           │   │   ├── book.css
│           │   │   ├── creativeproduct.css
│           │   │   ├── error.css
│           │   │   ├── footer.css
│           │   │   ├── gift.css
│           │   │   ├── global.css
│           │   │   ├── hero.css
│           │   │   ├── history.css
│           │   │   ├── login.css
│           │   │   ├── navigator.css
│           │   │   ├── order.css
│           │   │   ├── product.css
│           │   │   ├── sectioncaption.css
│           │   │   ├── shoppingchat.css
│           │   │   ├── socialmedia.css
│           │   │   └── wavesection.css
│           │   ├── img
│           │   │   ├── Avatar
│           │   │   │   ├── avatar.jpg
│           │   │   │   └── tongji.png
│           │   │   ├── Books
│           │   │   │   └── 1.png
│           │   │   ├── CreativeProducts
│           │   │   │   └── 1.jpg
│           │   │   ├── Gifts
│           │   │   │   └── 1.png
│           │   │   └── tongji
│           │   │       ├── bg
│           │   │       │   └── 01.png
│           │   │       ├── font
│           │   │       │   └── 01.png
│           │   │       └── sign
│           │   │           └── 01.png
│           │   ├── js
│           │   │   ├── book.js
│           │   │   ├── creativeproduct.js
│           │   │   ├── error.js
│           │   │   ├── gift.js
│           │   │   ├── global.js
│           │   │   ├── hero.js
│           │   │   ├── history.js
│           │   │   ├── index.js
│           │   │   ├── login.js
│           │   │   ├── navigator.js
│           │   │   ├── order.js
│           │   │   ├── product.js
│           │   │   ├── settle.js
│           │   │   ├── shoppingchat.js
│           │   │   ├── socialmedia.js
│           │   │   ├── waterripple.js
│           │   │   └── wavesection.js
│           │   └── json
│           │       ├── book.json
│           │       ├── creativeproduct.json
│           │       ├── gift.json
│           │       ├── navigator.json
│           │       ├── socialmedia.json
│           │       └── tongji.json
│           └── templates
│               ├── error.html
│               ├── index.html
│               ├── login.html
│               ├── order.html
│               └── product.html
└── tongji-mall.iml
```

------

<center>Copyright © doubleZ Tongji University</center>

<center>All Right Reversed</center>

