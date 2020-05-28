window.onload = function () {
    initNavigation(true);
    initLogin();
}

function initLogin(){
    const localStorageName = 'user-name';

    const signUpButton = document.getElementById('signUp');
    const accountSignUpButton = document.getElementById('accountSignUp');
    const signInButton = document.getElementById('signIn');
    const accountSignInButton = document.getElementById('accountSignIn');
    
    const signUpName = document.getElementById('signUpName');
    const signUpPassword = document.getElementById('signUpPassword');
    const signInName = document.getElementById('signInName');
    const signInPassword = document.getElementById('signInPassword');
    
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
    
    accountSignUpButton.addEventListener('click', () => {
        let name = signUpName.value;
        let password = signUpPassword.value;
        let userPassword = {username: name, password: password};

        //Todo: 将[name, password]传给后端，记录用户名称和密码
        connectToBackEnd(userPassword);

        const hiddenText = document.getElementById('success-sign-up');
        hiddenText.className = 'show';
    });
    
    accountSignInButton.addEventListener('click', async () => {
        let name = signInName.value;
        let password = signInPassword.value;
        console.log(name + " " + password);  //Test
        //Todo: 将[name, password]传给后端，判断正确还是错误，返回pass
        let userPassword = {username: name, password: password};
        let pass = await receiveSignIn(userPassword);  //Test
        console.log(pass)
        if (pass['state']) {
            const hiddenTextForSuccess = document.getElementById('success-sign-in');
            hiddenTextForSuccess.className = 'show';
            localStorage.setItem(localStorageName, name);
            window.location.href = "calendar.html";
        } else {
            const hiddenTextForFail = document.getElementById('fail-sign-in');
            hiddenTextForFail.className = 'show';
        }
    });
}

function connectToBackEnd(jsonObj){
    let request;
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        request = new window.ActiveXObject();
    }else{
        alert("请升级至最新版本的浏览器");
    }
    if(request != null){
        request.open("POST","test-connecting-back-end", true);
        request.setRequestHeader("Content-Type","application/json");
        request.send(JSON.stringify(jsonObj));
        // request.send(null);
        request.onreadystatechange=function(){
            if(request.readyState==4 && request.status==200){
                let resultdata = JSON.parse(request.responseText);
                console.log(resultdata);
            }
        };
    }
}