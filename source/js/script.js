    const tabs = document.getElementsByClassName("tabs__item");
    
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            const content = document.getElementsByClassName("tabs__content");
            for (let u = 0; u < tabs.length; u++) {
                tabs[u].classList.remove('active');
                content[u].classList.remove('tabs__content--active');
            }
            content[i].classList.add('tabs__content--active');
            this.classList.add('active');
        });
    };