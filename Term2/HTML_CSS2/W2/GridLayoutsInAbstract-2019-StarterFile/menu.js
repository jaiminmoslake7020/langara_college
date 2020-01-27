const menu = document.querySelector('.style-switcher');
//console.log(menu);

Array.from( document.getElementsByTagName('button')  ).forEach(function (el) {
    el.addEventListener('click',function (e) {
        const btn =  e.target.textContent ;
        document.body.classList = "" ;
        document.body.classList.add(`from-all-layouts`);
        document.body.classList.add(`example${btn}-active`);
        Array.from( document.getElementsByTagName('button')  ).forEach(function (el) {
            el.classList = "" ;
        });
        e.target.classList.add('active');
    });
});

