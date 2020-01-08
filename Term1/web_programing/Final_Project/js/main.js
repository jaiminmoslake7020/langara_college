  //alert("Hello Guysss");

/****** New Construction ******/

let coveredarea = 0;
let constructionPrice = 0;
let structureCost = 0;

if( typeof box1 !== "undefined"){
    box1.addEventListener('click', () => {
        //alert("Test");
        coveredarea = parseInt(box1txtField.value);
        constructionPrice = parseFloat(box2txtField.value);
        structureCost = coveredarea * constructionPrice ;
        output1.innerHTML = `The Cost for structure construction is: $${structureCost}`;
    });
}

let lumberLength = 0;
let lumberPrice = 0;
let lumberCost = 0;

if( typeof box2 !== "undefined"){
box2.addEventListener('click' , () => {
 //alert("Hi!!!")
 lumberLength = parseFloat(box3txtField.value);
 lumberPrice = parseFloat(box4txtField.value);
 lumberCost = lumberLength * lumberPrice;
 output2.innerHTML = `The Cost of lumber is: $${lumberCost}`;
})
}

let floorWood = 0;
let woodPrice = 0;
let floorCost1 = 0;
let floorLam = 0;
let lamPrice = 0;
let floorCost2 = 0;
let floorTile = 0;
let tilePrice = 0;
let floorCost3 = 0;
let totalFloor = 0;
let totalFloorCost =0;


if( typeof box3 !== "undefined" ){
box3.addEventListener('click', () => {
    //alert("Test");
    floorWood = parseInt(box5txtField.value);
    woodPrice = parseInt(box6txtField.value);
    floorCost1 = floorWood * woodPrice ;
    output3.innerHTML = `The Price for the wooden floor is: $${floorCost1}`;
})
}

if( typeof checked !== "undefined"){
    checked.addEventListener('change', () => {
        if( checked.checked ){
            floorThing.style.display = 'block';
        }
   });
}
    
if( typeof notChecked !== "undefined"){
    notChecked.addEventListener('change', () => {
        if( notChecked.checked ){
            floorThing.style.display = 'none';
        }
   });
}

if( typeof box4 !== "undefined" ){
box4.addEventListener('click', () => {
    //alert("Test");
    floorLam = parseInt(box7txtField.value);
    lamPrice = parseInt(box8txtField.value);
    floorCost2 = floorLam * lamPrice ;
    output4.innerHTML = `The Price for the laminated floor is: $${floorCost2}`;
})
}

if( typeof box5 !== "undefined" ){
box5.addEventListener('click', () => {
    //alert("Test");
    floorTile = parseInt(box9txtField.value);
    tilePrice = parseInt(box10txtField.value);
    floorCost3 = floorTile * tilePrice;
    output5.innerHTML = `The total price for the tile floor is: $${floorCost3}`;

    totalFloor = floorCost1 + floorCost2 + floorCost3;
    outputfloor.innerHTML = `<b>Floor Cost: </b>The total cost for the floor is $${totalFloor}`;
})
}

let roofArea = 0;
let roofPrice = 0;
let roofCost = 0;

if( typeof box6 !== "undefined" ){
box6.addEventListener('click', () => {
    //alert("Test");
    roofArea = parseInt(box11txtField.value);
    roofPrice = parseInt(box12txtField.value);
    roofCost = roofArea * roofPrice ;
    output6.innerHTML = `The Cost for the roofing is: $${roofCost}`;

/****** Total Budget ******/ 
    totalBudget = structureCost + lumberCost + totalFloor + roofCost;
    output7.innerHTML = `<b>Total Budget: </b>The total budget for the construction is $${totalBudget}`;
})
}

/******* New Renovation *******/

let KitArea = 0;
let KitPrice = 0;
let KitCost = 0;

let itemArray = [] ;
let costArray = [] ;

if( typeof boxKitchen !== "undefined" ){
    boxKitchen.addEventListener('click' , () => {
        //alert("Hi!!!")
        KitArea = parseFloat(boxKtxtField.value);
        KitPrice = parseFloat(boxKpricetxtField.value);
        KitCost = KitArea * KitPrice;
        outputKitchen.innerHTML = `The Cost of Kitchen Renovation is: $${KitCost.toFixed(2)}`;
        itemArray.push("Kitchen Renovation");
        costArray.push(KitCost);
        showArray();
    })
}


let BathArea = 0;
let BathPrice = 0;
let BathCost = 0;

  if( typeof boxBath !== "undefined" ){
      boxBath.addEventListener('click' , () => {
          //alert("Hi!!!")
          BathArea = parseFloat(boxBathtxtField.value);
          BathPrice = parseFloat(boxBpricetxtField.value);
          BathCost = BathArea * BathPrice;
          outputBath.innerHTML = `The Cost of Bath Renovation is: $${BathCost.toFixed(2)}`;
          itemArray.push("Bath Renovation");
          costArray.push(BathCost);
          showArray();
      })
  }

let PaintArea = 0;
let PaintPrice = 0;
let PaintCost = 0;

  if( typeof boxPaint !== "undefined" ){
      boxPaint.addEventListener('click' , () => {
          //alert("Hi!!!")
          PaintArea = parseFloat(boxPainttxtField.value);
          PaintPrice = parseFloat(boxPpricetxtField.value);
          PaintCost = PaintArea * PaintPrice;
          outputPaint.innerHTML = `The Cost of Paint is: $${PaintCost.toFixed(2)}`;
          itemArray.push("Cost of Paint");
          costArray.push(PaintCost);
          showArray();
      })
  }

let CabArea = 0;
let CabPrice = 0;
let CabCost = 0;

  if( typeof boxCab !== "undefined" ){
      boxCab.addEventListener('click' , () => {
          //alert("Hi!!!")
          CabArea = parseFloat(boxCabtxtField.value);
          CabPrice = parseFloat(boxCpricetxtField.value);
          CabCost = CabArea * CabPrice;
          outputCab.innerHTML = `The Cost of Kitchen Cabinets is: $${CabCost.toFixed(2)}`;
          itemArray.push("Cost of Kitchen");
          costArray.push(CabCost);
          showArray();
      })
  }

let wTArea = 0;
let wTPrice = 0;
let wTCost = 0;


  if( typeof boxwT !== "undefined" ){
      boxwT.addEventListener('click' , () => {
          //alert("Hi!!!")
          wTArea = parseFloat(boxwTpricetxtField.value);
          wTPrice = parseFloat(boxwTpricetxtField.value);
          wTCost = wTArea * wTPrice;
          outputwT.innerHTML = `The Cost of Wall Tiles is: $${wTCost.toFixed(2)}`;
          itemArray.push("Cost of Wall Tiles");
          costArray.push(wTCost);
          showArray();
      })
  }

  const showArray = ()=>{
    outputReno.innerHTML = "";
    let totalRenoBudget = 0 ;
    for( let i = 0 ; i < itemArray.length ; i++){
        outputReno.innerHTML += '<b>'+itemArray[i]+':</b> $'+costArray[i].toFixed(2)+"<br/>" ;
        totalRenoBudget += costArray[i];
    }
    outputReno.innerHTML += `<b>Total Renovation Expenses: $${totalRenoBudget.toFixed(2)}</b>`;
  };