function initSettle(){
    let settle = $('SettleBtn');
    settle.addEventListener('click',function(){
        settleBtnClick();
    });
}

function settleBtnClick() {
    if(sessionStorage.getItem("isLogin") === "true"){
        let username = {
            "username": sessionStorage.getItem("username")
        };
        connectToBackEnd(username, "settle")
            .then(result => {
                if(result['state'] === 'true'){
                    alert("结算成功");
                    window.location.href = "order";
                } else {
                    alert(result['msg'] + "结算失败，请重新结算");
                }
            })
            .catch(error => console.log(error));
    } else {
        alert("您需要登陆之后才能结算");
    }
}