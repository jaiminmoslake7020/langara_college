// MADE SLIDESHOW WITH A YOUTUBE VIDEO
// https://www.youtube.com/watch?v=NsDJtWBOoWY

if( typeof indexPage != "undefined" ){
	let slideIndex, slides;
	function initGallery(){
		slideIndex=0;
		//ATTR https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
		slides=document.getElementsByClassName("imageHolder");
		slides[slideIndex].style.opacity =1;
	}
	initGallery();

// changing slides to prev or next with +1 or -1
	function plusSlides(n){
		moveSlide(slideIndex+n);
	}

// make slide appear based on slideIndex
	function moveSlide(n){
		if(n>slideIndex){
			// if the n is more than number of slides
			if(n>=slides.length){
				n = 0;
			}
		}else if(n < slideIndex){
			// if the n is less than 0
			if(n<0){
				n=slides.length-1;
			}
		}
		// if n is not current slide make opacity of all slide to 0 then make current slide opacity to 1
		if(n !== slideIndex){
			for(i=0; i<slides.length;i++){
				slides[i].className = "imageHolder";
				slides[i].style.opacity = 0;
			}
			slides[n].style.opacity = 1;
			slideIndex = n ;
		}
	}
}

if( typeof messageBody != "undefined" ){
	submitButton.addEventListener('click',()=>{
		let formValues = [] ;
		let intersts = [];
		let total = 0;
		formValues.push('<b>Thank you for your message. We will get back to you soon!</b><br/>');
		formValues.push("<b>First name:</b> "+fname.value);
		formValues.push("<b>Email Address:</b> "+email.value);
		formValues.push("<b>Phone Number:</b> "+pNumber.value);
		if( check_coins.checked ){
			intersts.push( check_coins.value ) ;
			total += parseFloat(check_coins_p.innerHTML) ;
		}
		if( check_origami.checked ){
			intersts.push( check_origami.value ) ;
			total += parseFloat(check_origami_p.innerHTML) ;
		}
		if( check_ant.checked ){
			intersts.push( check_ant.value ) ;
			total += parseFloat(check_ant_p.innerHTML) ;
		}
		if( check_toys.checked ){
			intersts.push( check_toys.value ) ;
			total += parseFloat(check_af_p.innerHTML) ;
		}
		if( check_af.checked ){
			intersts.push( check_af.value ) ;
			total += parseFloat(check_af_p.innerHTML) ;
		}
		if( intersts.length > 0 ){
			let intersts_join = intersts.join(", ");
			formValues.push("<b>Interests:</b> "+intersts_join);
		}
		formValues.push("<b>Estimated total as per your interests:</b> $"+total.toFixed(2));
		formValues.push("<b>Other Interests:</b> "+interests.value);
		formValues.push("<b>Comments:</b> "+comments.value);
		outputBox.innerHTML = formValues.join('<br/>');
	});
}

if( typeof registerBody != "undefined" ){
	submitButton.addEventListener('click',()=>{
		let formValues = [] ;
		let intersts = [];
		formValues.push('<b>Thank you for registratiion.</b><br/>');
		formValues.push("<b>Name:</b> "+fname.value);
		if( male.checked ){
			formValues.push("<b>Gender:</b> "+ male.value ) ;
		}else if( female.checked ){
			formValues.push("<b>Gender:</b> "+female.value ) ;
		}
		formValues.push("<b>Address:</b> "+userAddress.value);
		formValues.push("<b>City:</b> "+userCity.value);
		formValues.push("<b>Address:</b> "+contact.value);
		formValues.push("<b>Date:</b> "+pDate.value);

		outputBox.innerHTML = formValues.join('<br/>');
	});
}