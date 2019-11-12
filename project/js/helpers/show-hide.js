Array.from( document.getElementsByClassName('displayClicker') ).forEach( ( element , index ) => {
    element.addEventListener('click',(e)=>{
        let clickedEl =  e.target;
        let dataShowEls = clickedEl.getAttribute('data-show');
        let dataHideEls = clickedEl.getAttribute('data-hide');

        let stringObject = new stringClass( dataShowEls );
        dataShowElsArray = stringObject.parseToArray();
        stringObject.replaceContent( dataHideEls );
        dataHideElsArray = stringObject.parseToArray();


        let htmlElObj = new htmlEl( clickedEl , true );
        dataShowElsArray.forEach(function (showEL, index, array) {
            htmlElObj.replaceEl( showEL , false );
            htmlElObj.show();
        });

        dataHideElsArray.forEach(function (hideEL, index, array) {
            htmlElObj.replaceEl( hideEL , false );
            htmlElObj.hide();
        });

    });
});
