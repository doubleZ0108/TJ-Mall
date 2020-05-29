function initSettle(){
    let settle = $('SettleBtn');
    settle.addEventListener('click',function(){
        settleBtnClick();
    });
}

function settleBtnClick() {
    if(sessionStorage.getItem("isLogin") === "true"){

        connectToBackEnd(type_index_title_price_amount, "add-to-shopping-cart")
            .then(result => {
                if(result['state']){
                    console.log("加入购物车成功", type_index_title_price_amount);
                } else {
                    alert("加入购物车失败，请重新添加");
                }
            })
            .catch(error => console.log(error));
    } else {
        alert("结算失败");
    }
}