
let testVar1 = 5 ;
//var funScopeVar ;

let myFunc = () => {
    let funScopeVar = 22 ;

    //console.log("testVar1: "+testVar1);
    console.log("funScopeVar: "+funScopeVar);


};




let blockScopeVar;

for (let i = 0 ; i <= 5 ; i++){
    blockScopeVar = testVar1+i ;
    console.log( blockScopeVar);
}

//console.log("funScopeVar Last: "+funScopeVar);
//console.log("testVar1 Last: "+testVar1);

console.log( "blockScopeVar "+blockScopeVar);


myFunc();
testVar1 = testVar1 + 10 ;
myFunc();
testVar1 = testVar1 + 10 ;
myFunc();
testVar1 = testVar1 + 10 ;
myFunc();





