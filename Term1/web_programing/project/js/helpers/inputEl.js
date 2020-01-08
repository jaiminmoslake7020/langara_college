// https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp
class InputEl extends htmlEl{

    getInputContainer(){
        return this.el.parentElement ;
    }

    getInfoTextEl(){
        return this.el.nextElementSibling ;
    }

    getLabel(){
        return  document.querySelector('[for="this.el.attr(\'id\')"]' ).innerHTML   ;
    }

    validate(){
        return true ;
    }

    requiredCheck(){
        if( this.getTypeObject( this.trimmedValue() ).isNullOrEmpty() ){
            this.getInfoTextEl().innerHTML( this.getLabel()+' is required.');
            return false;
        }else{
            return true;
        }
    }

    emailCheck(){
        if( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( this.trimmedValue() ) ){

        }else{

        }
    }

    trimWhiteSpace(){
        return this.value().trim();
    }

    value(){
        return this.el.value;
    }

    trimmedValue(){
        return this.trimWhiteSpace();
    }

}