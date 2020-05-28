function initBook(){
    let bookgroup = $('BookGroup');
    readJson("book.json")
        .then(bookObj => {
            bookObj["book"].forEach(function(elem, index){
                let bookcard = $c('div');
                bookcard.classList.add('BookCard');

                let bookcardImageDiv = $c('div');
                bookcardImageDiv.classList.add('BookCardImage');
                let bookcardImage = $c('img');
                bookcardImage.src = "../img/Books/" + elem.imgsrc;

                let bookcardContent = $c('div');
                bookcardContent.classList.add('BookCardContent');
                let bookcardTitle = $c('div');
                bookcardTitle.classList.add('BookCardTitle');
                bookcardTitle.innerHTML = elem.title;
                let bookcardPrice = $c('div');
                bookcardPrice.classList.add('BookCardPrice');
                bookcardPrice.innerHTML = "¥" + elem.price;

                let BookCardBottom = $c('div');
                BookCardBottom.classList.add('BookCardBottom')
                let bufP = $c('p');
                bufP.innerHTML = elem.content;

                bookcardImageDiv.appendChild(bookcardImage);

                BookCardBottom.appendChild(bufP);
                bookcardContent.appendChild(bookcardTitle);
                bookcardContent.appendChild(bookcardPrice);
                bookcardContent.appendChild(BookCardBottom);
                bookcard.appendChild(bookcardImageDiv);
                bookcard.appendChild(bookcardContent);
                bookgroup.appendChild(bookcard);

                bookcard.addEventListener('click', function(){
                    let type = "book";
                    window.location.href = "product?" + "type=" + type + "&index=" + index;
                });
            });
        })
        .catch(error => console.log(error));
}