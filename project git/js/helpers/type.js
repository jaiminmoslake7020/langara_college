class Type {

    constructor( content ){
        this.content = content ;
    }

    replaceContent( content ){
        return this.content = content;
    }

    getType(){
        return typeof this.content;
    }

    isUndefined(){
        return this.getType() === "undefined" ;
    }

    isString(){
        return this.getType() === "string" ;
    }

    isNumber(){
        return this.getType() === "number" ;
    }

    isObject(){
        return this.getType() === "object" ;
    }

    isNull(){
        return !this.isUndefined() && this.content === null ;
    }

    isEmpty(){
        return this.isString() && this.content === "" ;
    }

    isNullOrEmpty(){
        return this.isNull() || this.isEmpty() ;
    }

    isNotNullOrEmpty(){
        return !this.isNotNullOrEmpty();
    }

}