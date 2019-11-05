/**
 *  INPUTS FROM THE ASSIGNMENTS
 */
let weddingDate  ;
let budget  ;
let dressPrice ;
let noOfDress ;
let receptionHallPrice ;
let bridesMaidExpenses ;
let perPlateDinnerPrice ;
let numberOfPeopleInvited  ;
let openBarPerPerson ;
let flowersAndDecoration  ;
let bandCost ;
let photographerCost ;
let limoCost ;
let miscellaneousExpenses ;

let totalOnDinning ;
let totalTaxOnDinning ;
let totalAmountWithTaxOnDinning ;
let gettingTotalExpensesOfWedding ;
let getFundsRemainingForGiftsPurchase ;

// button event listener
submit.addEventListener('click',()=>{

    weddingDate = hId_weddingDate.value;
    budget = parseFloat(hId_budget.value) ;
    noOfDress = parseInt(hId_noOfDress.value);
    dressPrice = parseFloat(hId_dressPrice.value);
    receptionHallPrice =  parseFloat(hId_receptionHallPrice.value);
    bridesMaidExpenses = parseFloat(hId_bridesMaidExpenses.value);
    perPlateDinnerPrice = parseFloat(hId_perPlateExpense.value);
    numberOfPeopleInvited = parseInt(hId_peopleInvited.value) ;
    openBarPerPerson = parseFloat(hId_openBars.value)*( perPlateDinnerPrice );
    flowersAndDecoration = parseFloat(hId_flowersCost.value) ;
    bandCost = parseFloat(hId_bandCost.value) ;
    photographerCost = parseFloat(hId_photographerCost.value) ;
    limoCost = parseFloat(hId_limoCost.value) ;
    miscellaneousExpenses = parseFloat(hId_miscCost.value);

    totalOnDinning = numberOfPeopleInvited * ( perPlateDinnerPrice+openBarPerPerson );
    totalTaxOnDinning = totalOnDinning*(15/100);
    totalAmountWithTaxOnDinning = totalOnDinning+totalTaxOnDinning;
    gettingTotalExpensesOfWedding =  (noOfDress*dressPrice) + receptionHallPrice + bridesMaidExpenses + totalAmountWithTaxOnDinning + flowersAndDecoration + bandCost + photographerCost + limoCost + miscellaneousExpenses ;
    getFundsRemainingForGiftsPurchase = budget-gettingTotalExpensesOfWedding ;

    dynamicInfoDiv.innerHTML =`Funds for gifts <b>$${getFundsRemainingForGiftsPurchase}</b> as total expenses for planned wedding is <b>$${gettingTotalExpensesOfWedding}</b> on wedding date <b>${weddingDate}</b>.` ;

    resultsDiv.style.display = 'block' ;

});



