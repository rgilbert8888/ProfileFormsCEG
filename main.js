$(document).on('ready', function(){
	// alert("hi");

// NON PHP OPTION: SENDS ALL FORM INFO TO EMAIL 

	$( "#submit-form" ).on( "click", function(e){
			e.preventDefault();
			
			var contactInfo = $('#contact-information').serializeArray();
			var productListing = $('#product-listing').serializeArray();
			var boothPerson = $('#booth-personnel').serializeArray();
			var lunchTicket = $('#lunch-ticket').serializeArray();
			var boothInfo = $('#booth-information').serializeArray();
			var depositAmt = $('#calc-booth-deposit').serializeArray();
			var paymentInfo = $('#payment-information').serializeArray();
			var expoContract = $('#expo-contract').serializeArray();

			var messageBody = '';
			
	// MAKE THE FOLLOWING INTO A FUNCTION AT SOME POINT...

			messageBody += 'CONTACT INFO\n'

			$.map(contactInfo, function(val){
           		if(!val) return;
          			messageBody += val.name + ": " + val.value + '\n';
         		});			

			messageBody += '\nPRODUCT LISTING\n'

			$.map(productListing, function(val){
           		if(!val) return;
          			messageBody += val.name + ": " + val.value + '\n';
         		});			

			messageBody += '\nBOOTH PERSONNEL\n'

			$.map(boothPerson, function(val){
           		if(!val) return;
          			messageBody += val.name + ": " + val.value + '\n';
         		});			

			messageBody += '\nLUNCH TICKETS\n'

			$.map(lunchTicket, function(val){
           		if(!val) return;
          			messageBody += val.name + ": " + val.value + '\n';
         		});			

			messageBody += '\nBOOTH INFO\n'

			$.map(boothInfo, function(val){
           		if(!val) return;
          			messageBody += val.name + ": " + val.value + '\n';
         		});			

			messageBody += '\nDEPOSIT INFO\n'

			$.map(depositAmt, function(val){
           		if(!val) return;
          			messageBody += val.name + ": " + val.value + '\n';
         		});

			messageBody += '\nPAYMENT INFO\n'

			$.map(paymentInfo, function(val){
           		if(!val) return;
          			messageBody += val.name + ": " + val.value + '\n';
         		});			

			messageBody += '\nEXPO CONTRACT\n'

			$.map(expoContract, function(val){
           		if(!val) return;
          			messageBody += val.name + ": " + val.value + '\n';
         		});




		    url = "mailto:robyn.gilb@gmail.com?subject=Expo%20Registration&body=" + encodeURIComponent(messageBody);
    		console.log('Contact Info Section: ', contactInfo);
    		console.log('url: ', url);
    		window.location.href= url;


		});


});



	// $( "#expo-contract" ).on( "submit", function(e){
	// 	  e.preventDefault();
	// 	  var message1 = $(this).serialize();
	// 	  $('.serialized').text( "Post Info: " + message1);

	// 	  // POST message1 to processing page...
	// 	});



	// $( "#product-listing" ).on( "submit", function(e){
	// 	  e.preventDefault();
	// 	  var message2 = $(this).serialize();
	// 	  $('.serialized').text( "Post Info: " + message2);

	// 	  // POST message2 to processing page...
	// 	});

	// $( "#submit-form" ).on( "click", function(e){
	// 		e.preventDefault();
	// 		var contactInfo = $('#contact-information').serializeArray();
	// 		var listingDetails = $('#product-listing').serializeArray();
	// 		// var data = { contactInfo :contactInfo, listingDetails :listingDetails }
	// 		// console.log(data);

	// 		$.post("process.php", { submit:1, contactInfo :contactInfo, listingDetails :listingDetails }, function(data){
	// 			console.log(data)
	// 		});
	// 	  // POST message2 to processing page...
	// 	});	