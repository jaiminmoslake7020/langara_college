class stringClass{

    constructor( stringContent ){
        this.stringContent = stringContent;
    }

    replaceContent( stringContent ){
        return this.stringContent = stringContent;
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
        let stringContent = this.stringContent;
        let indexOfstringContent = stringContent.indexOf( character );
        return indexOfstringContent !== -1 ? true : false ;
    }

    replaceChars( findIn , replaceWith ){
        return this.stringContent.replace( findIn , replaceWith );
    }

}