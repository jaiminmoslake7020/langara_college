//*****************************************************************
//*****************************************************************
//  Midterm 2 - Javascript
//*****************************************************************
//*****************************************************************
//  Root scope variable Declartions
//*****************************************************************

let carArray = [] ;

//*****************************************************************
//*****************************************************************
//  Function Declarations
//*****************************************************************

let calcTip = ( bill , tip ) => {
    return bill*(tip/100);
};


//*****************************************************************
//*****************************************************************
//  Tool 1 Code
//*****************************************************************

t1Submit.addEventListener('click',(e)=>{
    const bill = parseFloat( t1billAmount.value );
    const tipPercent = parseFloat( t1tipPercent.value );

    t1output.innerHTML = `The tip amount for ${tipPercent}% of $${bill} is $${calcTip( bill, tipPercent ).toFixed(2)}` ;

});


//*****************************************************************
//*****************************************************************
//  Tool 2 Code
//*****************************************************************

t2Submit.addEventListener('click',(e)=>{
    const bill = parseFloat( t2billAmount.value );
    const tipPercent = parseFloat( t2tipPercent.value );
    const numberOfPeople = parseInt(t2numberOfPeople.value) ;

    const tipAmount = calcTip( bill , tipPercent );
    const totalBill = bill+tipAmount;

    let split = (totalBill/numberOfPeople).toFixed(2);

    t2output.innerHTML = `A ${tipPercent}% tip on a $${bill} bill, split between ${numberOfPeople} people is: $${split}.` ;

    if( split*numberOfPeople != totalBill ){
        const extra = totalBill-(split*numberOfPeople );
        split = (parseFloat(split)+parseFloat(extra)).toFixed(2);
        t2output.innerHTML += `&nbsp;&nbsp;with one person paying $${split}.` ;
    }

});


//*****************************************************************
//*****************************************************************
//  Tool 3 Code
//*****************************************************************
// Converting to Celcius
t3Celsius.addEventListener( 'click' , ()=>{
    const temp = parseFloat(t3temp.value) ;
    const tempC = ((temp-32) * 5/9).toFixed(2);
    t3output.innerHTML = `${temp} <span>&#176;</span>F converts to ${tempC}<span>&#176;</span>C` ;
});

// Converting to Fahrenhite
t3Fahrenheit.addEventListener( 'click' , ()=>{
    const temp = parseFloat(t3temp.value) ;
    const tempF = ((temp * 9/5) + 32).toFixed(2);
    t3output.innerHTML = `${temp} <span>&#176;</span>C converts to ${tempF}<span>&#176;</span>F` ;
});

//*****************************************************************
//*****************************************************************
//  Tool 4 Code
//*****************************************************************
// Fill the Array
t4AddCar.addEventListener('click',()=>{
    //pulling UI Input
    const carIn = t4car.value;

    //
    if( carArray.indexOf(carIn) >= 0 ){
        t4output.innerHTML = "Duplicate Entry";
    }else{
        carArray.push( carIn );
        t4output.innerHTML = `Car Array Contains: ${carArray.join(", ")}`;
    }

});

t4Clear.addEventListener('click',()=>{
    carArray = [] ;
    t4output.innerHTML = `Car Array Contains: ${carArray.join(", ")}`;
});


//*****************************************************************
//*****************************************************************
//  Tool 5 Code

t5Submit.addEventListener( 'click' , () => {
    if( carArray.length === 0 ){
        t5output.innerHTML = 'Car Array is empty. Please add card first.';
    }else{
        const randIndex = Math.floor( Math.random()*carArray.length ) ;
        t5output.innerHTML = `Your random car selection is a(n) ${carArray[randIndex]}`;
    }
} );

//*****************************************************************
//*****************************************************************
//  End of Code
//*****************************************************************
//*****************************************************************

