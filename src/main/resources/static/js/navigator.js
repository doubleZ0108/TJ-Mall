function initNavigation(){
    let navigator = $('navigator');
    document.addEventListener('scroll', function () {
    if(self.pageYOffset > 50) {
        navigator.classList.add('NavigationScrolled');
    } else {
        navigator.classList.remove('NavigationScrolled');
    }
    });

    initNavigationList();
}


function initNavigationList(){
    let navigationList = $('NavigationList');
    // let navigatorObj = readJson("navigator.json");

    readJson("navigator.json")
        .then(navigatorObj => {
            navigatorObj["navigator"].forEach(function(elem){
                let navigationLi = $c('li');
                let navigationA = $c('a');
                navigationA.href = elem.href;
                navigationA.title = elem.title;
                navigationA.innerHTML = elem.content;
                navigationLi.appendChild(navigationA);
                
                navigationList.appendChild(navigationLi);
            });
        })
        .catch(error => console.log(error));
}
