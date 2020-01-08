// alert("Hi Alert");


if( typeof openModal !== "undefined" ){
    openModal.addEventListener( 'click' , ()=>{

        modalContent.innerHTML = imageData.innerHTML ;

        modal.style.display = "grid" ;
    } );
}

if( typeof closeModal !== "undefined" ){
    closeModal.addEventListener( 'click' , ()=>{
        modalContent.innerHTML ="";
        modal.style.display = "none" ;
    } );
}


if( typeof openModalSub !== "undefined" ){
    openModalSub.addEventListener( 'click' , ()=>{



        modalSub.style.display = "grid" ;
    } );
}

if( typeof closeModalSub !== "undefined" ){
    closeModalSub.addEventListener( 'click' , ()=>{

        modalSub.style.display = "none" ;
    } );
}


if( typeof openModalRandom !== "undefined" ){
    openModalRandom.addEventListener( 'click' , ()=>{


        modal.style.display = "grid" ;
    } );
}

if( typeof closeModalRandom !== "undefined" ){
    closeModalRandom.addEventListener( 'click' , ()=>{

        modal.style.display = "none" ;
    } );
}