let myArray = [] ;
const countryArray = ["CA","US","BR","IN","JP","CH","RU"];

console.log( "Line 3 is working" );
//console.log( "Line 3 is working" );

//***************************************************************************
//***************************************************************************
//
// Code for Implementing Color Picker
//
//***************************************************************************
//***************************************************************************

box1bgColor.addEventListener('change', (event) => {
    console.log(event);
    sec2.style.backgroundColor = box1bgColor.value;


});

console.log( "Line 18 is working" );
//console.log( "Line 18 is working" );


//***************************************************************************
//***************************************************************************
//
// Code for Implementing Input Box
//
//***************************************************************************
//***************************************************************************

box2.addEventListener('click', (event) => {
    console.log(event);
    console.log(event['target']);
    console.log(box2txtField.value);
    output2.innerHTML = `The email address you provided was: ${box2txtField.value}`;


});

console.log( "Line 36 is working" );
//console.log( "Line 36 is working" );


//***************************************************************************
//***************************************************************************
//
// Code for Implementing Check Box
//
//***************************************************************************
//***************************************************************************

box3chkBox.addEventListener('change', (event) => {
    console.log(box3chkBox.value);
    if (box3chkBox.checked) {
        output3.innerHTML += "<br/>Great! You've been add to ouyr list - Thank You!";
    } else {
        let joiningMeeting = box3chkBox.checked ? "" : "not";
        output3.innerHTML += `<br/>Please remember to click the checkbox to join our mailing list.`;
    }
});


box4.addEventListener('click',() => {
    myArray.push( parseFloat(box4txtField.value) );

    if( myArray.length > 1 ){
        let gradeAvg = 0 ;
        for ( let i = 0 ; i < myArray.length ; i++ ){
            gradeAvg += myArray[i];
        }
        gradeAvg /= myArray.length ;
        output4.innerHTML = `The average of grades entered is ${gradeAvg}` ;
    }else{
        output4.innerHTML = `You only entered one grade and that grade is  ${myArray[0]}` ;
    }

    output4.innerHTML += "<br><br>"+myArray ;
    box4txtField.value = "" ;
    box4txtField.focus();
});





//***************************************************************************
//***************************************************************************
//
// Code for Implementing Calculator
//
//***************************************************************************
//***************************************************************************
let num1In, num2In, result;

let getNumbers = ( operation ) => {
    num1In= parseFloat(box5FirstNumber.value);
    num2In= parseFloat(box5SecondNumber.value);

    if ( operation === 'add' ){
        result = num1In+num2In;
    }else if ( operation === 'subtract' ){
        result = num1In-num2In;
    }else if ( operation === 'multiplication' ){
        result = num1In*num2In;
    }else if ( operation === 'division' ){
        result = num1In/num2In;
    }
};



//********************** Code for the Add Button ******************************
box5Add.addEventListener('click',(e)=>{
    getNumbers('add');

    console.log(e.target);
    output5.innerHTML = `The sum of ${num1In} and ${num2In} is ${result}`;

});

//********************** Code for the Subtract Button ******************************
box5Sub.addEventListener('click',(e)=>{
    getNumbers('subtract');

    console.log(e.target);
    output5.innerHTML = `The subtract of ${num1In} and ${num2In} is ${result}`;

});

//********************** Code for the Multiply Button ******************************
box5Mul.addEventListener('click',(e)=>{
    getNumbers('multiplication');

    console.log(e.target);
    output5.innerHTML = `The multiplication of ${num1In} and ${num2In} is ${result}`;

});

//********************** Code for the Division Button ******************************
box5Div.addEventListener('click',(e)=>{
    getNumbers('division');

    console.log(e.target);
    output5.innerHTML = `The division of ${num1In} and ${num2In} is ${result}`;

});



box6.addEventListener('click',(e)=>{
    let userInput = box6txtField.value.toUpperCase() ;

    let countryExist = false ;
    for ( let i = 0 ; i < countryArray.length ; i++ ){
        if( countryArray[i] === userInput ){
            countryExist = true ;
            break;
        }
    }

    if( countryExist ){
        output6.innerHTML = `Your country ${userInput} is supported by our system.` ;
    }else{
        output6.innerHTML = `Your country ${userInput} is not supported by our system.` ;
    }

    box6txtField.value = "" ;
});








