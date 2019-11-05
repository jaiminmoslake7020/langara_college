
Array.from( document.getElementsByClassName('displayClicker') ).forEach( ( element , index ) => {
    element.addEventListener('click',(e)=>{
        let clickedEl =  e.target;
        let dataShowEls = clickedEl.getAttribute('data-show');
        let dataHideEls = clickedEl.getAttribute('data-hide');

        let stringObject = new stringClass( dataShowEls );
        dataShowElsArray = stringObject.parseToArray();
        stringObject.replaceContent( dataHideEls );
        dataHideElsArray = stringObject.parseToArray();


        let htmlElObj = new htmlEl( clickedEl , true );
        dataShowElsArray.forEach(function (showEL, index, array) {
            htmlElObj.replaceEl( showEL , false );
            htmlElObj.show();
        });

        dataHideElsArray.forEach(function (hideEL, index, array) {
            htmlElObj.replaceEl( hideEL , false );
            htmlElObj.hide();
        });

    });
});

class stringClass{

   constructor( stringContent ){
        this.stringContent = stringContent;
   }

   replaceContent( stringContent ){
       this.stringContent = stringContent;
   }

   parseToArray(){
        if( this.stringContent === null ){
            return [] ;
        }else if ( this.stringContent === "" ){
            return [];
        }else if ( typeof this.stringContent === "string" && this.stringContent.indexOf(",") === -1 ){
            return [ this.stringContent ];
        }else if ( typeof this.stringContent === "string" && this.stringContent.indexOf(",") !== -1 ){
            return this.stringContent.split(",");
        }
   }

   hasCharacter( character ){
       this.stringContent.indexOf( character ) !== -1 ? false : true ;
   }

   replaceChars( findIn , replaceWith ){
       this.stringContent.replace( findIn , replaceWith );
   }

}


class htmlEl {

    constructor(el , elInObjectForm ){
        this.el = el;
        this.elInObjectForm = elInObjectForm ;
        this.createElObjectFromString();
    }

    show(){
        this.el.style.display = "block" ;
    }

    hide(){
        this.el.style.display = "none" ;
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

    getStringObject(){
        if( this.stringClass === "undefined" ){
            this.stringClass = new stringClass();
        }else{
            return this.stringClass;
        }
    }

}

