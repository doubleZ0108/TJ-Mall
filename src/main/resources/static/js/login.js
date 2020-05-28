window.onload = function () {
    initNavigation(true);
    initLogin();
}

function initLogin(){
    const localStorageName = 'user-name';

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
        let name = signUpName.value;
        let password = signUpPassword.value;
        let userPassword = {username: name, password: password};

        //Todo: 将[name, password]传给后端，记录用户名称和密码
        connectToBackEnd(userPassword, "sign-up")
            .then(result => {
                console.log(result);
                if(result['state']){
                    console.log("ok");
                    const hiddenText = $('success-sign-up');
                    hiddenText.className = 'show';
                    container.classList.remove("right-panel-active");
                }
            })
            .catch(error => console.log(error));
    });
    
    accountSignInButton.addEventListener('click', async () => {
        let name = signInName.value;
        let password = signInPassword.value;
        let userPassword = {username: name, password: password};

        connectToBackEnd(userPassword, "sign-in")
            .then(result => {
                if (result['state']) {
                    const hiddenTextForSuccess = $('success-sign-in');
                    hiddenTextForSuccess.className = 'show';
                    // localStorage.setItem(localStorageName, name);
                    window.location.href = "index.html";
                } else {
                    const hiddenTextForFail = $('fail-sign-in');
                    hiddenTextForFail.className = 'show';
                }
            })
            .catch(error => console.log(error));
    });
}

