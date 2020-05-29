window.onload = function () {
    initNavigation(true);
    initLogin();
};

function initLogin(){
    const signUpButton = $('signUp');
    const accountSignUpButton = $('accountSignUp');
    const signInButton = $('signIn');
    const accountSignInButton = $('accountSignIn');
    
    const signUpName = $('signUpName');
    const signUpPassword = $('signUpPassword');
    const signInName = $('signInName');
    const signInPassword = $('signInPassword');
    
    const container = $('container');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
    
    accountSignUpButton.addEventListener('click', () => {
        SignUpBtnClick();
    });
    
    accountSignInButton.addEventListener('click', async () => {
        SignInBtnClick();
    });
}


function SignUpBtnClick(){
    let username = signUpName.value;
    let password = signUpPassword.value;
    let username_password = {
        "username": username,
        "password": password
    };

    connectToBackEnd(username_password, "sign-up")
        .then(result => {
            if(result['state']){
                const hiddenText = $('success-sign-up');
                hiddenText.className = 'show';
                container.classList.remove("right-panel-active");
            } else {
                alert("注册失败，请重新尝试");
            }
        })
        .catch(error => console.log(error));
}

function SignInBtnClick(){
    let username = signInName.value;
    let password = signInPassword.value;
    let username_password = {
        "username": username,
        "password": password
    };

    connectToBackEnd(username_password, "sign-in")
        .then(result => {
            if (result['state']) {
                const hiddenTextForSuccess = $('success-sign-in');
                hiddenTextForSuccess.className = 'show';

                sessionStorage.setItem("isLogin", "true");
                // document.cookie = "isLogin=true";
                // localStorage.setItem("isLogin", "true");

                window.location.href = "index.html";
            } else {
                alert("登陆失败，请重新尝试");
                const hiddenTextForFail = $('fail-sign-in');
                hiddenTextForFail.className = 'show';
            }
        })
        .catch(error => console.log(error));
}