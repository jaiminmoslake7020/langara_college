//Decalare Our variables
let tution = 12000;
let expenses = 12000;
let hrlyRate = 14.75 ;
let hrsWkly = 20 ;
let totalExp = 0 ;
let totalWages = 0 ;
let difference = 0 ;

// process
totalExp = tution+expenses;
//alert(totalExp);
totalWages = ( hrlyRate*hrsWkly )*52;
//alert(totalWages);
difference = totalExp-totalWages;
//alert(difference);

// Output to Screen
//let answer = document.getElementById("answer"); OLD SCHOOL WRONG WAY
//document.getElementById("answer").innerHTML = `The amount Jason has to get from his parents is $${difference} `; OLD SCHOOL
ans.innerHTML = `The amount Jason has to get from his parents is $${difference} `; // this is new way 
