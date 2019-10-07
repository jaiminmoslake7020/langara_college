/**
 *  INPUTS FROM THE ASSIGNMENTS
 */
let weddingDate = "28th November 2019" ;
let budget = 50000 ;
let dressPrice = 6500;
let receptionHallPrice =  2*dressPrice;
let bridesMaidExpenses = 2500;
let perPlateDinnerPrice = 18;
let numberOfPeopleInvited = 50 ;
let openBarPerPerson = 1.5*perPlateDinnerPrice;
let flowersAndDecoration = 2800 ;
let bandCost = 1500;
let photographerCost = 7500;
let limoCost = 800;
let miscellaneousExpenses = 3500;

/**
 * Functions to determine some of the inputs defined in  the file
 */

let totalOnDinning = () => {
     return numberOfPeopleInvited * ( perPlateDinnerPrice+openBarPerPerson );
};

let totalTaxOnDinning = () =>{
    return totalOnDinning()*(15/100);
};

let totalAmountWithTaxOnDinning = () => {
    return totalOnDinning()+totalTaxOnDinning();
};

let gettingTotalExpensesOfWedding = () => {
    return (dressPrice + receptionHallPrice + bridesMaidExpenses + totalAmountWithTaxOnDinning() + flowersAndDecoration + bandCost + photographerCost + limoCost + miscellaneousExpenses).toFixed(2) ;
};

let getFundsRemainingForGiftsPurchase = () => {
    return (budget-gettingTotalExpensesOfWedding()).toFixed(2);
};

/**
 * validation of inputs checks for null undefined , "" and numeric
 * based on type date and text
 */
let validateInfo = () => {
    let inputs = document.getElementsByClassName('input-item');
    let allIsWell = true;
    for( input in inputs ){
        if( !isNaN(input) ){
            // got this idea from my previous experience and with some little bit googling
            let label = inputs[input].children[0] ;
            let inputEl = inputs[input].children[1] ;
            let errorInput = inputs[input].children[2] ;
            let inputElValue = inputEl.value ;
            let inputElType = inputEl.getAttribute('type') ;
            let lableInfo = label.innerHTML;
            console.log( "inputElType"+inputElType );
            console.log( "inputElValue"+inputElValue );
            console.log( "lableInfo"+lableInfo );
            if( ( typeof inputElValue == "undefined" || inputElValue == "" || inputElValue == null || isNaN( inputElValue ) ) && ( inputElType == "text" ) ){
                errorInput.innerHTML =`Please insert appropriate numeric value for ${lableInfo}`;
                errorInput.style.display = 'block';
                allIsWell = false ;
            }else if( ( typeof inputElValue == "undefined" || inputElValue == "" || inputElValue == null ) && ( inputElType == "date" ) ){
                errorInput.innerHTML =`Please select appropriate date value for ${lableInfo}`;
                errorInput.style.display = 'block';
                allIsWell = false ;
            }else{
                errorInput.innerHTML = "" ;
                errorInput.style.display = 'none';
            }
        }
    }
    return allIsWell;
};

//*  Function to be called
let calculateDynamically = () => {
    // simple validation
    if( validateInfo() ){
        weddingDate = hId_weddingDate.value;
        budget = parseFloat(hId_budget.value) ;
        dressPrice = parseFloat(hId_dressPrice.value);
        receptionHallPrice =  parseFloat(hId_receptionHallPrice.value);
        bridesMaidExpenses = parseFloat(hId_bridesMaidExpenses.value);
        perPlateDinnerPrice = parseFloat(hId_perPlateExpense.value);
        numberOfPeopleInvited = parseFloat(hId_peopleInvited.value) ;
        openBarPerPerson = parseFloat(hId_openBars.value)*( perPlateDinnerPrice );
        flowersAndDecoration = parseFloat(hId_flowersCost.value) ;
        bandCost = parseFloat(hId_bandCost.value) ;
        photographerCost = parseFloat(hId_photographerCost.value) ;
        limoCost = parseFloat(hId_limoCost.value) ;
        miscellaneousExpenses = parseFloat(hId_miscCost.value);

        dynamicInfoDiv.innerHTML =`Funds for gifts <b>$${getFundsRemainingForGiftsPurchase()}</b> as total expenses for planned wedding is <b>$${gettingTotalExpensesOfWedding()}</b> on wedding date <b>${weddingDate}</b>.` ;

        p_w_date.innerHTML = weddingDate;
        p_budget.innerHTML = "$"+budget.toFixed(2);
        p_dressPrice.innerHTML = "$"+dressPrice.toFixed(2);
        p_receptionHallPrice.innerHTML = "$"+receptionHallPrice.toFixed(2);
        p_brideMaidPrice.innerHTML = "$"+bridesMaidExpenses.toFixed(2);
        p_dinningPrice.innerHTML = "$"+totalAmountWithTaxOnDinning().toFixed(2);
        p_flowersPrice.innerHTML = "$"+flowersAndDecoration.toFixed(2);
        p_photoPrice.innerHTML = "$"+photographerCost.toFixed(2);
        p_limoPrice.innerHTML = "$"+limoCost.toFixed(2);
        p_miscPrice.innerHTML = "$"+miscellaneousExpenses.toFixed(2);
        p_total.innerHTML = "$"+gettingTotalExpensesOfWedding();
        p_remaining.innerHTML = "$"+getFundsRemainingForGiftsPurchase();

        resultsDiv.style.display = 'block' ;

    }else{
        wholeFormError.innerHTML = 'Please solve errors mentioned.';
        resultsDiv.style.display = 'none' ;
    }
};

// button event listener
submit.addEventListener('click',()=>{
    calculateDynamically();
});



