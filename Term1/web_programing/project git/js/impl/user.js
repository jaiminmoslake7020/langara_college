class User {

     addUser(){
          
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

    getInputElObject( content ){
        if( typeof this.inputElClass === "undefined" ){
            this.inputElClass = new InputEl( content );
        }
        this.inputElClass.replaceContent( content );
        return this.inputElClass;
    }

    getHtmlElObject( content ){
        if( typeof this.htmlElClass === "undefined" ){
            this.htmlElClass = new htmlEl( content );
        }
        this.htmlElClass.replaceContent( content );
        return this.htmlElClass;
    }

    getDataCollectorObject( content ){
        if( typeof this.dataCollectorClass === "undefined" ){
            this.dataCollectorClass = new DataCollector();
        }
        return this.dataCollectorClass;
    }

}