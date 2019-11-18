
 let simpleSplitDataObject = [];

 class DataCollector{

    addFriend( friendId , friendDataObject ){    
        this.addDataItemToDataObject( 'friends' , friendId , friendDataObject );
    }


    addDataItemToDataObject( mainPropertyKey , propertyKey , dataObjecvt ){
        if( simpleSplitDataObject.hasOwnProperty( mainPropertyKey ) ){
            simpleSplitDataObject[ mainPropertyKey ] = {} ;
            simpleSplitDataObject[ mainPropertyKey ][ propertyKey ] = dataObjecvt ;
        }else{
            simpleSplitDataObject[ mainPropertyKey ][ propertyKey ] = dataObjecvt ;
        }
    }



 }



 Array.from( document.getElementsByClassName('form-submit-link') ).forEach( function( element , index ){

    element.addEventListener( 'click' , (e) => {
    
        let clickedEl =  e.target;
        let dataForm = clickedEl.getAttribute('data-form');

        let typeObject = new Type( dataForm );
        if( typeObject.isString() && typeObject.isNotNullOrEmpty() ){
            switch(  typeObject ){
                case "friend-form" :
                     let friendObject = new Friend();
                     friendObject.addFriend(); 
                    break;
            }
            
        }
    
    } );
     
 });
