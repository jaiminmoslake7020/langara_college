//*****************************************************************
//*****************************************************************
//  Project - Web Programmin & HTML-CSS 1


//*****************************************************************
//*****************************************************************
//  Root Variables for indexPage
const str = "string" ;
const num = "number" ;
const isNullCheck = "isNullCheck" ;

//*****************************************************************
//*****************************************************************
//  Function Declarations


//*****************************************************************
//  This function parses string or null to an array
const parseToArray = ( stringContent ) => {
    if( stringContent === null ){
        return [] ;
    }else if ( stringContent === "" ){
        return [];
    }else if ( typeof stringContent === "string" && stringContent.indexOf(",") === -1 ){
        return [ stringContent ];
    }else if ( typeof stringContent === "string" && stringContent.indexOf(",") !== -1 ){
        return stringContent.split(",");
    }else{
        return [];
    }
};

//*****************************************************************
//  This function changes style.display to make it initial or whatever is defined in data-display attribute of element so this element can be SHOWN from HIDDEN state
const show = (el) => {
    let dataDisplay = el.getAttribute('data-display');
    if( !isNullOrEmpty( dataDisplay ) ){
        el.style.display = dataDisplay ;
    }else{
        el.style.display = "initial" ;
    }
    removeClass(el,'dnone');
};

//*****************************************************************
//  This function changes style.display to make it display none so element can be HIDDEN from SHOWN state
const hide = ( el ) => {
    el.style.display = "none" ;
    addClass(el,'dnone');
};


//*****************************************************************
//  This function checks classes of element and removes the class if the element has that class
const removeClass = ( el, className ) => {
    if( hasClass( el , className ) ){
        let classesString = el.getAttribute('class');
        classesString = replaceChars( classesString , className , '' );
        el.setAttribute( 'class' , classesString );
    }
};

//*****************************************************************
//  This function checks classes of element and adds the class if the element does not have that class
const addClass = ( el , className ) =>{
    if( !hasClass( el , className ) ){
        let classesString = el.getAttribute('class');
        classesString += className;
        el.setAttribute( 'class' , classesString );
    }
};

//*****************************************************************
//  This function checks classes of element returns true or false based on wheather element has class or not
const hasClass = ( el , className ) =>{
    let classesString = el.getAttribute('class');
    return hasCharacters( classesString , className );
};

//*****************************************************************
//  This function checks if string has that particular string or charecter
const hasCharacters = (stringContent , character ) => {
    if( !isNullOrEmpty(stringContent) ){
        let indexOfstringContent = stringContent.indexOf( character );
        return indexOfstringContent !== -1 ;
    }else{
        return  false;
    }
};

//*****************************************************************
//  This function replaces particular string or charecter from given string
const replaceChars = ( stringContent , findIn , replaceWith ) => {
    if( !isNullOrEmpty(stringContent) ){
        return stringContent.replace( findIn , replaceWith );
    }else{
        return stringContent;
    }
};


//*****************************************************************
//  This function gives option to check differnt types
// on the basis of arguments passed.
// helper for typechecking
// example typeCheck( 5 , "number" ) will return true
const typeCheck = ( content , typeCheckAgainst ) => {
    let typeofContent = typeof content ;
    if( content === null && typeCheckAgainst === isNullCheck ){
        // will work for null
        return  true;
    }else if( typeofContent === typeCheckAgainst){
        // will work for this types
        //  string
        //  number
        //  object
        return true;
    }
};

//*****************************************************************
//  This function checks wheather variable is string and if it is string weather it is empty or not
const isEmpty = ( content ) => {
    return typeCheck( content , str ) && content === "" ;
};

//*****************************************************************
//*****************************************************************
//  This function checks wheather variable is string and if it is string weather it is empty or not
const isNullOrEmpty = ( content ) => {
    return typeCheck( content , isNullCheck ) || isEmpty( content ) ;
};

//*****************************************************************
//*****************************************************************
//  This function creates unique array and values must not be isNullOrEmpty to be inserted into array
const uniqueArray = ( array ) => {
    let newArray = [] ;
    for( key in array ){
        let value = array[key].trim();
        if( newArray.indexOf( value ) === -1 ){
            if( !isNullOrEmpty( value ) ){
                newArray[key] = value;
            }
        }
    }
    return newArray;
};

//*****************************************************************
//  Event listeners for SplitBills page
// As most of the code is done specifc for this page
// this is why putting this all in this page
// to improve process times.
if( !(typeof splitBillPage === "undefined") ){

    //*****************************************************************
    //*****************************************************************
    //  This function capitaliza the first letter of string
    //https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
    const capitalize = (s) => {
        if (typeof s !== 'string') return '';
        s = s.toLowerCase();
        return s.charAt(0).toUpperCase() + s.slice(1)
    };

    //*****************************************************************
    //*****************************************************************
    //  This function changes whoPaidTemplate.innerHTML to add Radio Button of who paid after each keyup event for selection further
    const getWhoPaidForThis = ( content ) => {
        content = content.trim();
        content = capitalize(content);
        let contentId = replaceChars( content , " " , "_" );
        let whoPaidTemplateValue = whoPaidTemplate.innerHTML ;
        whoPaidTemplateValue = replaceChars( whoPaidTemplateValue , "{FRIEND}" , content );
        whoPaidTemplateValue = replaceChars( whoPaidTemplateValue , "{FRIEND}" , content );
        whoPaidTemplateValue = replaceChars( whoPaidTemplateValue , "{FRIEND_ID}" , contentId  );
        whoPaidTemplateValue = replaceChars( whoPaidTemplateValue , "{FRIEND_ID}" , contentId  );
        return whoPaidTemplateValue;
    };

    //*****************************************************************
    //*****************************************************************
    //  This function changes forWhomTemplate.innerHTML to add Checkbox Button of who were involved for selection further
    const getWhoWasInvolved = ( content ) => {
        content = content.trim();
        content = capitalize(content);
        let contentId = replaceChars( content , " " , "_" );
        let forWhomTemplateValue = forWhomTemplate.innerHTML ;
        forWhomTemplateValue = replaceChars( forWhomTemplateValue , "{FRIEND}" , content );
        forWhomTemplateValue = replaceChars( forWhomTemplateValue , "{FRIEND}" , content );
        forWhomTemplateValue = replaceChars( forWhomTemplateValue , "{FRIEND_ID}" , contentId  );
        forWhomTemplateValue = replaceChars( forWhomTemplateValue , "{FRIEND_ID}" , contentId  );
        return forWhomTemplateValue;
    };


    //*****************************************************************
    //*****************************************************************
    //  This function changes expenseTemplate.innerHTML to add expense dialogue box to view and returns ID of the box
    const generateBox = ( title , money ) => {
        title = title.trim();
        let titleId = replaceChars( title , " " , "_" )+"-"+(Date.now());
        let expenseTemplateValue = expenseTemplate.innerHTML ;
        expenseTemplateValue = replaceChars( expenseTemplateValue , "{TITLE}" , title );
        expenseTemplateValue = replaceChars( expenseTemplateValue , "{MONEY}" , money.toFixed(2) );
        expenseTemplateValue = replaceChars( expenseTemplateValue , "{BOX_ID}" , titleId  );
        expenseTemplateValue = replaceChars( expenseTemplateValue , "{BOX_ID}" , titleId  );
        expenseTemplateValue = replaceChars( expenseTemplateValue , "{BOX_ID}" , titleId  );
        dashboardViewChild.innerHTML += expenseTemplateValue ;
        return titleId;
    };

    //*****************************************************************
    //*****************************************************************
    //  This function changes hasToGive.innerHTML adds details of who has to give money inside expense dialogue box
    const addWhohasToGive = ( titleId,  personInvolved , share , payeePerson ) => {

        let hasToGiveValue = hasToGive.innerHTML ;
        hasToGiveValue = replaceChars( hasToGiveValue , "{personInvolved}" , personInvolved );
        hasToGiveValue = replaceChars( hasToGiveValue , "{share}" , share.toFixed(2) );
        hasToGiveValue = replaceChars( hasToGiveValue , "{payeePerson}" , payeePerson  );

        document.getElementById( titleId ).innerHTML += hasToGiveValue ;

    };

    //*****************************************************************
    //*****************************************************************
    //  This function changes hasToTake.innerHTML adds details iof who has to take money inside expense dialogue box
    const addWhohasToTake = ( titleId,  personsInvolvedString , money , payeePerson ) => {

        let hasToTakeValue = hasToTake.innerHTML ;
        hasToTakeValue = replaceChars( hasToTakeValue , "{payeePerson}" , payeePerson );
        hasToTakeValue = replaceChars( hasToTakeValue , "{share}" , money.toFixed(2) );
        hasToTakeValue = replaceChars( hasToTakeValue , "{personsInvolvedString}" , personsInvolvedString  );

        document.getElementById( titleId ).innerHTML += hasToTakeValue ;

    };

    //*****************************************************************
    //*****************************************************************
    //  This function is keyup event listener for the field expense_people which creates radio buttons and checkboxes
    expense_people.addEventListener('keyup', (e) => {
        let expensePeopleVal = expense_people.value;
        expensePeopleVal = parseToArray(expensePeopleVal.trim());
        expensePeopleVal = uniqueArray( expensePeopleVal );
        if( expensePeopleVal.length === 0 ){
            expense_people_info.innerHTML = 'Please add names of people involved in the purchase.' ;
            hide( peoplesInvolved );
        }else{
            whoPaid.innerHTML = "" ;
            forWhom.innerHTML = "" ;
            for( key in expensePeopleVal ){
                whoPaid.innerHTML += getWhoPaidForThis( expensePeopleVal[key] );
            }
            for( key in expensePeopleVal ){
                forWhom.innerHTML += getWhoWasInvolved( expensePeopleVal[key] );
            }
            show( peoplesInvolved );
        }
    });

    //*****************************************************************
    //*****************************************************************
    //  This function is click event of split-bill button and calculates whole thing and adds expense dialogue box to view
    splitSubmitBtn.addEventListener('click',(e)=>{
        let title = expense_money_spent_on_which.value;
        let process = true ;

        // validate title
        if( isNullOrEmpty( title ) ){
            expense_money_spent_on_which_info.innerHTML =  `Please add something where you have spent the money.` ;
            show( expense_money_spent_on_which_info );
            process = false ;
        }else{
            hide( expense_money_spent_on_which_info );
            title = capitalize(title);
        }

        // validate money
        let money = parseFloat(expense_money_spent.value);
        if( isNullOrEmpty( money ) && !typeCheck( money , num )  ){
            expense_money_spent_info.innerHTML =  `Please add how much you have spent. It must be a number.` ;
            show( expense_money_spent_info );
            process = false ;
        }else{
            hide( expense_money_spent_info );
        }

        // validate peoples
        let peoples = expense_people.value;
        if( isNullOrEmpty( money )){
            expense_people_info.innerHTML =  `Please add who were involved in this transaction. Please check the hint given to you.` ;
            show( expense_people_info );
            process = false ;
        }else{
            hide( expense_people_info );
        }

        // all validation succefull check
        if( process ){
            // yes they are

            // check someone of them has paid money
            // ATTRIBUTION: https://www.w3schools.com/jsref/met_document_queryselector.asp
            if( !isNullOrEmpty( document.querySelector('input[name="expense[who-paid]"]') ) ){
                let processInside = true;

                // get who paid
                // ATTRIBUTION: https://www.w3schools.com/jsref/met_document_queryselector.asp
                let whoPaid = document.querySelector('input[name="expense[who-paid]"]:checked');
                if( isNullOrEmpty( whoPaid ) ){
                    whoPaidContainer_info.innerHTML = `Please select the person who paid ` ;
                    show( whoPaidContainer_info );
                    processInside = false;
                }else{
                    hide( whoPaidContainer_info );
                }

                // get who were involved in expense
                // ATTRIBUTION: https://www.w3schools.com/jsref/met_document_queryselectorall.asp
                let whoRInvolved = document.querySelectorAll('input[name="expense[for-whom]"]:checked')  ;
                if( isNullOrEmpty( whoRInvolved ) ){
                    forWhomContainer_info.innerHTML = `Please select the person who paid ` ;
                    show( forWhomContainer_info );
                    processInside = false;
                }else{
                    hide( forWhomContainer_info );
                }

                // check who paid and who were involved selected
                if( processInside ){
                    // yes bothe are selected

                    // generating expense dilogue box to view
                    let boxId = generateBox( title , money );
                    mainBoxId = "box-"+boxId;
                    boxId = "box-body-"+boxId;
                    let personsInvolved = "" ;
                    let share = money/whoRInvolved.length ;
                    let shareTake = 0 ;
                    for( who of whoRInvolved ){
                        if(  whoPaid.value  !==  who.value){
                            addWhohasToGive( boxId , who.value , share , whoPaid.value );
                            personsInvolved += who.value+", " ;
                            shareTake += parseFloat( share );
                        }
                    }
                    if( personsInvolved !== "" ){
                        personsInvolved = personsInvolved.trim();
                        personsInvolved = personsInvolved.substring(0,personsInvolved.length-1);
                    }
                    addWhohasToTake( boxId , personsInvolved , shareTake , whoPaid.value );

                    setTimeout(function () {
                        removeClass( document.getElementById(mainBoxId), 'no-effect' )
                    },0);

                }
            }
        }

    });

    //*****************************************************************
    //*****************************************************************
    //  This function will reset the form
    splitResetBtn.addEventListener('click' , (e) =>{
        splitBillForm.reset();
        whoPaid.innerHTML = "" ;
        forWhom.innerHTML = "" ;
        hide( peoplesInvolved );
    });

}





if(!(typeof indexPage === "undefined")){

    //*****************************************************************
    //*****************************************************************
    //  Function Declarations
    const isSlideInFocus = (slideClasses) => {
        // ATTRIBUTION: https://www.w3schools.com/jsref/met_document_queryselector.asp
        // in console window allows us to check properties of the window object
        // from console window find out the property offsetTop of window object
        // same way find out about window.scrollY
        if( !(document.querySelector( slideClasses ) == null) ){
            let top = document.querySelector( slideClasses ).offsetTop ;
            let heightOfSlide = document.querySelector( slideClasses ).offsetHeight;
            let bottom = top+heightOfSlide;
            let verticalScrollPosition = window.scrollY+(window.innerHeight/2);
            if( verticalScrollPosition >= top && verticalScrollPosition < bottom ){
                // FOR LOOP OF CLASSS
                Array.from( document.getElementsByClassName( 'slide-container' ) ).forEach( (el , index , value ) => {
                    removeClass( el , 'in-focus' )
                });
                addClass(  document.querySelector( slideClasses ) , 'in-focus' )
            }else{
                removeClass(  document.querySelector( slideClasses ) , 'in-focus' )
            }
        }
    };

    // adds in-focus class to first slide on window load
    window.addEventListener('load',()=>{
        setTimeout(function () {
            if( window.scrollY === 0 ){
                addClass( document.querySelector( '[class=" slide-container first "]' ), 'in-focus');
            }
        },500);
    });

    // adds in-focus class to differnt slide when they touch the top+window.InnerHeight
    window.addEventListener('scroll',()=>{
        isSlideInFocus( '[class=" slide-container first "]' );
        isSlideInFocus( '[class=" slide-container second "]' );
        isSlideInFocus( '[class=" slide-container third "]' );
        isSlideInFocus( '[class=" slide-container four "]' );
    });

}


