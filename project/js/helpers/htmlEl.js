class htmlEl {

    constructor(el , elInObjectForm ){
        this.el = el;
        this.elInObjectForm = elInObjectForm ;
        this.createElObjectFromString();
    }

    replaceEl( newEl , elInObjectForm ){
        this.el = newEl ;
        this.elInObjectForm = elInObjectForm;
        this.createElObjectFromString();
    }

    createElObjectFromString(){
        let elContent =  this.el ;
        if( !this.elInObjectForm && typeof elContent === "string" ){
            if( this.getStringObject( this.el ).hasCharacter("#") ){
                let elString = this.el.replace( "#" , "" );
                this.el = document.getElementById( elString );
            }else if( this.getStringObject( this.el ).hasCharacter(".") ){
                let elString = this.el.replace( "." , "" );
                this.el = document.getElementsByClassName( elString );
            }
        }
    }

    show(){
        this.el.style.display = "initial" ;
        this.removeClass('dnone');
    }

    hide(){
        this.el.style.display = "none" ;
        this.addClass('dnone');
    }

    removeClass( className ){
        if( this.hasClass( className ) ){
            let classesString = this.el.getAttribute('class');
            classesString = this.getStringObject( classesString ).replaceChars( className , '' );
            this.el.setAttribute( 'class' , classesString );
        }
    }

    addClass( className ){
        if( !this.hasClass( className ) ){
            let classesString = this.el.getAttribute('class');
            this.getStringObject( classesString ).replaceChars( className , '' );
            this.el.setAttribute( 'class' , classesString );
        }
    }

    hasClass( className ){
        let classesString = this.el.getAttribute('class');
        return this.getStringObject( classesString ).hasCharacter( className );
    }

    getStringObject( string ){
        if( typeof this.stringClass === "undefined" ){
            this.stringClass = new stringClass( string );
        }
        this.stringClass.replaceContent( string );
        return this.stringClass;
    }

    getTypeObject( content ){
        if( typeof this.typeClass === "undefined" ){
            this.typeClass = new Type( content );
        }
        this.typeClass.replaceContent( content );
        return this.typeClass;
    }

}
