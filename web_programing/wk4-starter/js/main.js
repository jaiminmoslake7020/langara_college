// alert("It works Jaimin");

//*************************************************************************** 
//***************************************************************************
//
// Code for Implementing Color Picker
//
//*************************************************************************** 
//*************************************************************************** 


box1bgColor.addEventListener('change', ( event ) => {
    console.log( event );
    sec2.style.backgroundColor = box1bgColor.value ;
});

//*************************************************************************** 
//***************************************************************************
//
// Code for Implementing Input Box
//
//*************************************************************************** 
//*************************************************************************** 


box2.addEventListener('click', ( event ) => { 

    console.log( event );
    console.log( event['target'] );

    console.log( box2txtField.value );

    output2.innerHTML = `The email address you provided was: ${box2txtField.value}`;

});


//*************************************************************************** 
//***************************************************************************
//
// Code for Implementing Check Box
//
//*************************************************************************** 
//*************************************************************************** 


box3chkBox.addEventListener('change', ( event ) => {
    console.log( box3chkBox.value );

    
    if( box3chkBox.checked ){
        output3.innerHTML += "<br/>Great! You've been add to ouyr list - Thank You!" ;
    }else{
        let joiningMeeting = box3chkBox.checked ? "" : "not" ;
        output3.innerHTML += `<br/>Please remember to click the checkbox to join our mailing list.`;
    }

});


const judy = "Judy" ;
const mon = "Mon" ;


let sponsorsArraybyPerson = [] ;

sponsorsArraybyPerson[judy] = [] ;
sponsorsArraybyPerson[judy] = [15,3,11,7,17] ;

sponsorsArraybyPerson[mon] = [];
sponsorsArraybyPerson[mon] = [8,8,13,10,11] ;

let getTotalSponsorsByArray = ( person ) => {
    if( typeof sponsorsArraybyPerson === "object" && sponsorsArraybyPerson.hasOwnProperty( person ) ){
        let sponsorsArrayOfPerson = sponsorsArraybyPerson[person];
        let totalNumberOfSponsersForThisPerson = 0 ;
        for (let index = 0; index < sponsorsArrayOfPerson.length; index++) {
             totalNumberOfSponsersForThisPerson += sponsorsArrayOfPerson[index];
        }   
        return totalNumberOfSponsersForThisPerson;
    }
    return 0 ;
};

let alertWhoHasWon = () => {

    let totalNumberOfSponsersForJudy = getTotalSponsorsByArray( judy );
    let totalNumberOfSponsersForMon = getTotalSponsorsByArray( mon );
    let winner  ;
    let looser  ;
    let winnerNoOfSponsors ;
    let looserNoOfSponsors ;
    let noOfSponsorsInCaseOfTie  ;
    let alertString ;

    if( totalNumberOfSponsersForJudy > totalNumberOfSponsersForMon  ){
        winner = judy ;
        looser = mon ;
        winnerNoOfSponsors = totalNumberOfSponsersForJudy;
        looserNoOfSponsors = totalNumberOfSponsersForMon;
    }else if( totalNumberOfSponsersForJudy < totalNumberOfSponsersForMon  ){
        winner = mon ;
        looser = judy ;
        winnerNoOfSponsors = totalNumberOfSponsersForMon;
        looserNoOfSponsors = totalNumberOfSponsersForJudy;
    }else {
        winner = "none" ;
        noOfSponsorsInCaseOfTie = totalNumberOfSponsersForMon;
    }

    if( winner != "none" ){
        alertString = `${winner} has won the bet. As ${winner} was able to attract ${winnerNoOfSponsors} sponsors and ${looser} was able to attract ${looserNoOfSponsors} sponsors. ${winner} has ${(winnerNoOfSponsors-looserNoOfSponsors)} more sponsores compared to ${looser}.` ;
    }else{
        alertString = `It is a tie between ${judy} and ${mon}. Both of them got ${noOfSponsorsInCaseOfTie} sponsors.` ;
    }

    alert(alertString);
};

alertWhoHasWon();


