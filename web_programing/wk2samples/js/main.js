
let testVar1 = 5 ;
//var funScopeVar ;

console.log( " myFunc  START " );
let myFunc = () => {
    let funScopeVar = 22 ;
    testVar1 = testVar1 + 10 ;

    console.log("testVar1: "+testVar1);
    console.log("funScopeVar: "+funScopeVar);


};
console.log( " myFunc  END " );


 let blockScopeVar;
for (let i = 0 ; i <= 5 ; i++){
    blockScopeVar = testVar1+i ;
    console.log( blockScopeVar);
}

//console.log("funScopeVar Last: "+funScopeVar);
//console.log("testVar1 Last: "+testVar1);

console.log( "blockScopeVar "+blockScopeVar);

console.log(" CALL 1 ");
myFunc();
console.log(" CALL 2 ");
myFunc();
console.log(" CALL 3 ");
myFunc();
console.log(" CALL 4 ");
myFunc();





