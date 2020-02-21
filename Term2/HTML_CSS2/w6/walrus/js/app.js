class App{

    constructor(){
        this.buttons = document.querySelectorAll('.main-nav-item');
        this.searchButton = document.querySelectorAll('.search-nav-item');

        this.buttons.forEach(button => button.addEventListener( 'click' , this.showMenu ));
        this.searchButton.forEach(button => button.addEventListener( 'click' , this.showSearchMenu ));
    }

    showMenu( e ) {
        // here as this function is called based on event
        // so this will be element not the App it self
        // so need to check what is best practice when we handle event inside class
        App.toggleMenu( this , document.querySelector('main.content-wrapper') );
    }

    showSearchMenu( e ) {
        // here as this function is called based on event
        // so this will be element not the App it self
        // so need to check what is best practice when we handle event inside class
        App.toggleMenu( this , document.querySelector('body') );
    }

    static toggleMenu( btn , parentEl ) {
        console.log( btn.attributes );
        let togglemenu = btn.getAttribute('data-toggle');
        togglemenu = togglemenu+"-activate";
        parentEl.classList.toggle(togglemenu);
    }

}

window.addEventListener('load',function () {
    const app = new App();
});



