class Friend extends User{

    addFriend(){
        if( this.validate() ){
           this.postProcess();
    
            let friendDataObject = {} ;
            friendDataObject['fullName'] = this.fullName;
            friendDataObject['emailAddress'] = this.emailAddress;

            this.getDataCollectorObject().addFriend( this.emailAddress , friendDataObject );
        }
    }

    postProcess(){
        this.fullName = this.getFullNameInputEl().value ;
        this.emailAddress = this.getEmailInputEl().value ;
    }

    validate(){
        let validate1 = this.getInputElObject( this.getFullNameInputEl() ).validate();     
        let validate2 = this.getInputElObject( this.getEmailInputEl() ).validate();

        return validate1 && validate2 ;
    }

    getFullNameInputEl(){
        return document.getElementById('add-friend-form_full_name');
    }

    getEmailInputEl(){
        return document.getElementById('add-friend-form_email_address');
    }

}

