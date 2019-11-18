// Common Functions for Tip Calculator (10 Marks) & Bill Splitter (15 Marks)
// Common Functions for Tip Calculator (10 Marks) & Bill Splitter (15 Marks)
// Common Functions for Tip Calculator (10 Marks) & Bill Splitter (15 Marks)
// Common Functions for Tip Calculator (10 Marks) & Bill Splitter (15 Marks)

let getTipByPercentage = ( billValue , tipPercentage ) => {
    return billValue*tipPercentage/100;
};

let applyToDecimal = ( value ) => {
    return value.toFixed(2);
};

let totalBill = ( billValue , tipPercentage ) => {
    return billValue+getTipByPercentage(billValue,tipPercentage)
};

let devideBill = ( billValue , tipPercentage , numberOfPeope ) => {
    return totalBill( billValue , tipPercentage )/numberOfPeope;
};

function getBillTipMessage( billValue , tipPercentage ){
    return `Calulated tip is <b>${applyToDecimal( getTipByPercentage( billValue , tipPercentage  ) )}</b> CAD for bill of <b>${billValue}</b> CAD with <b>${tipPercentage}%</b> tip.`;
}

function getSplitBillMessage( billValue , tipPercentage , numberOfPeople ){
    return `Split amount is <b>${applyToDecimal( devideBill( billValue , tipPercentage , numberOfPeople ) )}</b> CAD for group of ${numberOfPeople} people with total bill <b>${totalBill( billValue , tipPercentage  )}</b> including tip amount of <b>${getTipByPercentage( billValue , tipPercentage )}</b> CAD. <br/>Tip calculation Info: ${getBillTipMessage( billValue , tipPercentage )} `;
}

// 1 Tip Calculator (10 Marks)
// 1 Tip Calculator (10 Marks)
// 1 Tip Calculator (10 Marks)
// 1 Tip Calculator (10 Marks)


tool1Submit.addEventListener('click',(e)=>{
    let billValue = t1billAmount.value ;
    t1billAmount.value = billValue.trim();
    billValue = parseFloat(billValue.trim());

    let tipPercentage = t1tipPercent.value ;
    t1tipPercent.value = tipPercentage.trim();
    tipPercentage = parseFloat(tipPercentage.trim());

    too11output.innerHTML = getBillTipMessage( billValue , tipPercentage ) ;
});

// 2 Bill Splitter (15 Marks)
// 2 Bill Splitter (15 Marks)
// 2 Bill Splitter (15 Marks)
// 2 Bill Splitter (15 Marks)

tool2Submit.addEventListener('click',(e)=>{
    let billValue = t2billAmount.value ;
    t2billAmount.value = billValue.trim();
    billValue = parseFloat(billValue.trim());

    let tipPercentage = t2tipPercent.value ;
    t2tipPercent.value = tipPercentage.trim();
    tipPercentage = parseFloat(tipPercentage.trim());

    let numberOfPeople = t2numberOfPeople.value ;
    numberOfPeople.value = numberOfPeople.trim();
    numberOfPeople = parseInt(numberOfPeople.trim());

    too12output.innerHTML = getSplitBillMessage( billValue ,  tipPercentage  , numberOfPeople );
});


// 3 Temperature Conversion (10 Marks)
// 3 Temperature Conversion (10 Marks)
// 3 Temperature Conversion (10 Marks)
// 3 Temperature Conversion (10 Marks)
// 3 Temperature Conversion (10 Marks)

function convertToCelcius( temp ){
    return  ((temp-32)*5/9);
}

function convertToFehrenHit( temp ){
    return ((temp*9/5)+32);
}

function getTempValue(){
    let temp = t3temp.value ;
    t3temp.value = temp.trim();
    temp = parseFloat(temp.trim());
    return temp;
}

function convertToCelciusMsg( temp ){
    return  `${temp} <span>&#176;</span>F = ${convertToCelcius(temp)} <span>&#176;</span>C`;
}

function convertToFehrenHitMsg( temp ){
    return  `${temp} <span>&#176;</span>C = ${convertToFehrenHit(temp)} <span>&#176;</span>F`;
}

tool3Celsius.addEventListener('click',(e)=>{
    too13output.innerHTML = convertToCelciusMsg( getTempValue() );
});

tool3Fahrenheit.addEventListener('click',(e)=>{
    too13output.innerHTML = convertToFehrenHitMsg( getTempValue() );
});


// 4 Load an Array of Cars (15 Marks)
// 4 Load an Array of Cars (15 Marks)
// 4 Load an Array of Cars (15 Marks)
// 4 Load an Array of Cars (15 Marks)

let myCarArray = [] ;

function resetArray() {
    myCarArray = [] ;
    let classString =  t4carInfoText.getAttribute('class');
    t4carInfoText.innerHTML = `` ;
    if( classString.indexOf('dnone') === -1 ){
        classString += ' dnone ';
    }
    t4carInfoText.setAttribute('class',classString);
    t4car.value = '' ;
    return true;
}

function showErrorMsg() {
    // dont needed
    let classString =  t4carInfoText.getAttribute('class');
    t4carInfoText.innerHTML = `<b>${value}</b> is already member of the array.` ;
    classString = classString.replace('dnone','');
    t4carInfoText.setAttribute('class',classString);
}

function hideErrorMsg() {
    // dont needed
    let classString =  t4carInfoText.getAttribute('class');
    t4carInfoText.innerHTML = `` ;
    if( classString.indexOf('dnone') === -1 ){
        classString += ' dnone ';
    }
    t4carInfoText.setAttribute('class',classString);
}

function checkUnique( value ) {
    for ( let i = 0 ;  i < myCarArray.length ; i++ ){
        if( myCarArray[i] === value ){
            showErrorMsg();
            return false;
        }
    }
    hideErrorMsg();
    return true;
}


function storeItem( value ) {
    if( checkUnique( value ) ){
        myCarArray.push( value )
    }
    return myCarArray;
}

function displayArrayItems() {
    if( typeof myCarArray === "object" ){
        if( myCarArray.length > 0 ){
            stringOut = '<p><b>Here is the list of cars in the Array</b></p>' ;
            stringOut += '<ul>' ;
            for ( car of myCarArray ){
                stringOut += `<li>${car}</li>` ;
            }
            stringOut += '</ul>' ;
            too14output.innerHTML = stringOut ;
        }else{
            too14output.innerHTML = "There are no cars in array right now. Please feel free to add them." ;
        }
    }
}

function getCarInserted(){
    let car = t4car.value ;
    t4car.value = '' ;
    return car;
}

tool4AddCar.addEventListener( 'click' , ( e )=>{
    storeItem( getCarInserted() );
    displayArrayItems();
} );

tool4Clear.addEventListener( 'click' , ( e )=>{
    resetArray();
    displayArrayItems();
} );


// 5 Bonus: Pick a Random Car from the Array every time the User Clicks the button (+3 Marks)
// 5 Bonus: Pick a Random Car from the Array every time the User Clicks the button (+3 Marks)
// 5 Bonus: Pick a Random Car from the Array every time the User Clicks the button (+3 Marks)
// 5 Bonus: Pick a Random Car from the Array every time the User Clicks the button (+3 Marks)

function selectRandomCar() {
    var min=0;
    var max=myCarArray.length;
    //https://www.geeksforgeeks.org/javascript-math-random-function/
    var random = Math.floor(Math.random() * (+max - +min) + +min);
    return myCarArray[random];
}

tool5Submit.addEventListener('click',(e)=>{
    if( typeof myCarArray === "object" ){
        if( myCarArray.length > 0 ){
            too15output.innerHTML = `Random car from the My Car array is <b>${selectRandomCar()}</b>`;
        }else{
            too15output.innerHTML = "There are no cars in My Car array right now. Please use Car form to add an car into an array." ;
        }
    }
});

