//***************************************************************************
//***************************************************************************
//  Introduction to Programming - Final Exam




//***************************************************************************
//***************************************************************************
//  Root Level Variable Declarations

// variable for Load an Array of Grades
let gradeArray = [] ;
// variable for Create a Simple Array of Objects
let objectsArray = [] ;
// variable for Character Scroller
let curIndex = null ;




//***************************************************************************
//***************************************************************************
// Function Declarations

// validation for the entered grade number before adding it to grade array
const validateGradeNumber = ( gradeNumber ) => {
    // checking the valuye is not empty or null
    gradeNumber = parseFloat(gradeNumber);
    if( gradeNumber === null || gradeNumber === ""  ){
        t4Output.innerHTML = '<span class="red" >Grade must be required.</span>';
        return false;
    }else if( isNaN(gradeNumber) ){
        t4Output.innerHTML = '<span class="red" >Grade must be required and It must be a numeric value.</span>';
        return false;
    }else if( typeof gradeNumber !== "number" || gradeNumber < 0 || gradeNumber > 100 ){
        // check for grade is number and it is between 0 and 100
        t4Output.innerHTML = '<span class="red" >Grade must be a numeric and between 0 and 100.</span>';
        return false;
    }
    return true;
};

// function for Character Scroller
const showSimpleObject = (index) => {
    // checks objectarray is not empty and it is an array
    if( objectArrayCheck( objectsArray ) ){
        let currentObject = objectsArray[index];
        t7Output.innerHTML = "Current loaded object has belowe details:<br/>" ;
        // looping through object
        //https://www.w3schools.com/jsref/jsref_forin.asp
        for( key in currentObject ){
            // added safe check of hasOwnProperty
            if( currentObject.hasOwnProperty( key ) ){
                t7Output.innerHTML +=  `<b>${key}</b>: ${currentObject[key]}<br/>`;
            }
        }
    }
};

// function to validate object array simple checks to prevent unwanted errors
const objectArrayCheck = () => {
    // simple check object is an array and object length > 0
    if( Array.isArray(objectsArray) && objectsArray.length > 0 ){
        return true;
    }else{
        t7Output.innerHTML = '<span class="red" >Object array is empty. Please add characters.</span>';
        return false;
    }
};

/**
 * Author Ionuț G. Stan on stackoverflow Answer link https://stackoverflow.com/a/1527820/2542806
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};




//***************************************************************************
//***************************************************************************
// Simple Interest Calculator

// when Calculate Interest button gets clicked this function will get executed
t1Submit.addEventListener( 'click', ( e )=>{
    // getting values from UI
    let principleAmount = parseFloat(t1PrincipalAmount.value);
    let interestRate = parseFloat(t1Rate.value);
    // I am considering here Duration can be 3.5 years for 42 months
    // so adding parseFloat instead of parseInt
    let duration = parseFloat(t1NumberOfPayments.value);

    // showing message with calculation inside it
    t1Output.innerHTML = `Interest for the amount of <b>$${principleAmount.toFixed(2)}</b>  at the interest rate of <b>${interestRate.toFixed(2)}%</b> for <b>${duration.toFixed(1)}</b> years will be <b>$${((principleAmount*interestRate*duration)/100).toFixed(2)}</b>.` ;
});




//***************************************************************************
//***************************************************************************
// Fuel Consumption Rate Calculator
t2Submit.addEventListener( 'click', ( e )=>{
    // getting values from UI
    let distanceTravelled =  parseFloat(t2Distance.value);
    let litersUsed =  parseFloat(t2LitersUsed.value);

    // showing message with calculation inside it
    t2Output.innerHTML = `If <b>${distanceTravelled.toFixed(2)} Kilometers</b> distance is travelled with <b>${litersUsed.toFixed(2)} litres</b> of gas then vehicle's fuel consumtion rate is <b>${(distanceTravelled/litersUsed).toFixed(2)} Kilometers/litre</b>.` ;
});




//***************************************************************************
//***************************************************************************
// Distance Conversion
t3Miles.addEventListener( 'click', ( e )=>{
    // getting values from UI
    let distance = parseFloat(t3Distance.value);
    // showing message with calculation inside it
    t3Output.innerHTML = `<b>${distance.toFixed(2)}</b> Kilometers equals to <b>${(distance*0.62137).toFixed(2)}</b> Miles.` ;
});

t3Km.addEventListener( 'click', ( e )=>{
    // getting values from UI
    let distance = parseFloat(t3Distance.value);
    // showing message with calculation inside it
    t3Output.innerHTML = `<b>${distance.toFixed(2)}</b> Miles equals to <b>${(distance*1.60934).toFixed(2)}</b> Kilometers.` ;
});




//***************************************************************************
//***************************************************************************
// Load an Array of Grades

// resetting array
t4Clear.addEventListener( 'click', ( e )=>{
    gradeArray = [] ;
    t4Output.innerHTML = "<span class='green'>Grade array has been reset.</span>" ;

    // triggering this will update the grade average directly.
    // as they both are connected i thought of adding this will make it better UI experience
    t5Submit.click();

});

// adding a new grade to array
t4AddGrade.addEventListener( 'click', ( e )=>{
    if( validateGradeNumber( t4Grade.value  ) ){
        // parsing to float then adding two decimles to show in good format
        gradeArray.push(  parseFloat(t4Grade.value).toFixed(2) ) ;
        t4Grade.value = "" ;
        t4Output.innerHTML = "New Grade has been added to grade array. Grade list follows is ascending order: <br/><b>"+gradeArray.join("<br/>")+"</b>";

        // triggering this will update the grade average directly.
        // as they both are connected i thought of adding this will make it better UI experience
        t5Submit.click();

    }
});




//***************************************************************************
//***************************************************************************
// Calculate the Average of all Grades in the Above Array
t5Submit.addEventListener( 'click', ( e )=>{
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    // checking gradeArray is array and checking it's length
    if( Array.isArray( gradeArray ) && gradeArray.length > 0  ){
        let totalGrades = 0 ;
        for ( let i = 0 ;  i < gradeArray.length ; i++ ){
            // as decimles (becomes "string") were added before so parsing to float again
            totalGrades += parseFloat(gradeArray[i]);
        }
        t5Output.innerHTML = "Average grade from above grade array is <b>"+( (totalGrades/gradeArray.length).toFixed(2) )+"</b>" ;
    }else{
        t5Output.innerHTML = '<span class="red" >Please add grades to calculate average.</span>';
    }
});




//***************************************************************************
//***************************************************************************
// Create a Simple Array of Objects
t6Submit.addEventListener( 'click', ( e )=>{
    let simpleObject = {
        Name:t6Name.value,
        Race:t6Race.value,
        Gender:t6Gender.value,
        Wisdom:t6Wisdom.value,
        Hitpoints:t6HP.value,
        // Using this to show it in better way
        // objects can have keys with space if they rae defined withing quotes
        "Magical Power":t6MP.value,
        "Attack Points":t6AP.value,
        "Defense Points":t6DP.value
    };

    // for making easy testing :) not removing others so one can add many objects quickly
    t6Name.value = "" ;
    t6Output.innerHTML = `<span class="green" ><b>${simpleObject.Name}</b> is added succefully.</span>`;
    objectsArray.push( simpleObject ) ;
});




//***************************************************************************
//***************************************************************************
// Character Scroller
t7Load.addEventListener( 'click', ( e )=>{
    //if someone clicks button before adding any character
    if( objectArrayCheck( objectsArray )  ){
        //https://www.geeksforgeeks.org/javascript-math-random-function/
        let min = 0 ;
        let max = objectsArray.length;
        var randomIndex = Math.floor(Math.random() * (+max - +min) + +min);
        showSimpleObject( randomIndex );
        curIndex = randomIndex;
    }
});

t7Prev.addEventListener( 'click', ( e )=>{
    // if someone clicks that button before loading
    if( curIndex === null ){
        t7Output.innerHTML = "<span class='red' >Please Load object first.</span>" ;
    }else{
        //if someone clicks button before adding any character
        if( objectArrayCheck( objectsArray ) ){
            curIndex = curIndex-1;
            if( curIndex < 0 ){
                // we will make it objectsArray.length-1 so it become objectsArray.length-1 = lastIndex of array and load the last object
                curIndex = objectsArray.length-1;
            }
            showSimpleObject( curIndex );
        }
    }
});

t7Next.addEventListener( 'click', ( e )=>{
    // if someone clicks that button before loading
    if( curIndex === null ){
        t7Output.innerHTML = "<span class='red' >Please Load object first.</span>" ;
    }else{
        //if someone clicks button before adding any character
        if( objectArrayCheck( objectsArray ) ){
            curIndex = curIndex+1;
            if( curIndex >= objectsArray.length ){
                // we will make it 0 so it become load the first object
                curIndex = 0;
            }
            showSimpleObject( curIndex );
        }
    }
});

//***************************************************************************
//***************************************************************************
// END

