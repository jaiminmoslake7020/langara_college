class Driver{

    getDataCollector(){
        if( typeof this.dataCollector === "undefined" ){
            this.dataCollector = new DataCollector();
        }
        return this.dataCollector ;
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