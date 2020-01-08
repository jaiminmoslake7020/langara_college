let myArray = [] ;

console.log( "Line 3 is working" );
//alert( "Line 3 is working" );

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
//alert( "Line 18 is working" );


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
//alert( "Line 36 is working" );


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

x=y;

console.log( "Line 57 is working" );
//alert( "Line 57 is working" );





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

    output4.innerHTML += '<br><br>'+myArray;
});



