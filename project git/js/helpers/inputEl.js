// https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp
class InputEl extends htmlEl{

    getInputContainer(){
        return this.el.parentElement ;
    }

    getInfoTextEl(){
        return this.el.nextElementSibling ;
    }

    validate(){

    }

    requiredCheck(){
        if( this.getTypeObject( this.value() ).isNullOrEmpty()  ){

        }
    }

    emailCheck(){

    }

    trimWhiteSpace(){

    }

    value(){
        return this.el.value;
    }
}