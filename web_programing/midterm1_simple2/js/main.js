let weddingDate ;
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

submit.addEventListener('click',()=>{

    weddingDate = htmlELweddingDate.value;
    budget = parseFloat(htmlELbudget.value) ;
    noOfDress = parseInt(htmlELnoOfDress.value);
    dressPrice = parseFloat(htmlELdressPrice.value);
    receptionHallPrice =  parseFloat(htmlELreceptionHallPrice.value);
    bridesMaidExpenses = parseFloat(htmlELbridesMaidExpenses.value);
    perPlateDinnerPrice = parseFloat(htmlELperPlateExpense.value);
    numberOfPeopleInvited = parseInt(htmlELpeopleInvited.value) ;
    openBarPerPerson = parseFloat(htmlELopenBars.value)*( perPlateDinnerPrice );
    flowersAndDecoration = parseFloat(htmlELflowersCost.value) ;
    bandCost = parseFloat(htmlELbandCost.value) ;
    photographerCost = parseFloat(htmlELphotographerCost.value) ;
    limoCost = parseFloat(htmlELlimoCost.value) ;
    miscellaneousExpenses = parseFloat(htmlELmiscCost.value);

    totalOnDinning = numberOfPeopleInvited * ( perPlateDinnerPrice+openBarPerPerson );
    totalTaxOnDinning = totalOnDinning*(15/100);
    totalAmountWithTaxOnDinning = totalOnDinning+totalTaxOnDinning;
    gettingTotalExpensesOfWedding =  (noOfDress*dressPrice) + receptionHallPrice + bridesMaidExpenses + totalAmountWithTaxOnDinning + flowersAndDecoration + bandCost + photographerCost + limoCost + miscellaneousExpenses ;
    getFundsRemainingForGiftsPurchase = budget-gettingTotalExpensesOfWedding ;

    result.innerHTML =`Gifts money <b>$${getFundsRemainingForGiftsPurchase}</b> Tortal Expenses <b>$${gettingTotalExpensesOfWedding}</b>.` ;

});

