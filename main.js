// var blocks = [];

$(document).on('ready', function(){


//======= ADD MORE PERSONNEL: ===========//

$('.add-personnel').on('click', function(e){
	e.preventDefault();
	var currAmt = $('.personnel-inputs').attr('persons');
	var newAmt = Number(currAmt) + 1; 

	$('ol.personnel-inputs').append('<li><input type="text" id="person' + newAmt + '" name="person' + newAmt + '" /></li>');
	$('.personnel-inputs').attr('persons', newAmt);
});


//======= GET TOTALS OF THINGS: =========//
		
		// on the click of any of these specific inputs, do this one big function that runs all other funcs to get totals

	function getLunchCost(){
		
		var quantity = $('#lunch-qty').val(); 
		var totalLunch = quantity * 10;
		var lunchCost = totalLunch.toFixed(2);  // forces number to 2 decimal places

		$('#lunch-total').val(lunchCost); 

		return Number(totalLunch);

	}

	function getBoothCost(){
		
		var quantity = $('#qty-booth').val(); 
		var totalBooth = quantity * 500;
		var boothCost = totalBooth.toFixed(2); // forces number to 2 decimal places
		// console.log('boothCost: ', boothCost);
		$('#equals').val(boothCost); 
	
		return totalBooth;
		// console.log("getBoothCost: ", totalBooth);	

	}

	function getBlockCost() {

		var checked = $('#booth-information :checked');
		var total = checked.map(function(){
			return this.value;
			console.log(value);
		}).get();

		// console.log('block array: ', total);

		var totalBlock = 0;
		$.each(checked, function(i, checkBox){
			var value = checkBox.value;
			totalBlock += Number(value);
		});

		
		// console.log('block total: ', totalBlock);
		var totalBlock = totalBlock.toFixed(2);
		$('#qty-block').val(totalBlock);

		return totalBlock; // returns total of array number values
	}


	function getDepositCost(){

		var boothCost = Number(getBoothCost());
		console.log('boothCost: ', boothCost);
		var blockCost = Number(getBlockCost());
		console.log('blockCost:', blockCost);
		var totalForBoth = boothCost + blockCost;
		console.log('totalForBoth: ', totalForBoth);
		var totalDeposit = totalForBoth / 2;
		var depositCost = totalDeposit.toFixed(2); // format for input box

		$('#deposit').val(depositCost); 
		// console.log('depositCost: ', depositCost);
		return totalDeposit;
	}


// GET REMAINING BALANCE FOR BOOTH AND LUNCH AFTER 50% BOOTH DEPOSIT IS SUBTRACTED:
	function getRemainder() {
		var remainingBalance = getLunchCost() + getDepositCost();
		
		$('#remaining-balance').val(remainingBalance.toFixed(2));
	}


	function getTotalCost(){

		var totalCost = getLunchCost() + getBoothCost() + getBlockCost();
		console.log("total:" , totalCost);

	}

$("#lunch-qty, #qty-booth").on('keyup', function(){
	getRemainder();
});

$('#booth-information :checkbox').on('change', function(){
	getRemainder();
});



//======= DRAFT AN EMAIL WITH ALL THE THINGS: =========//

	// NON PHP OPTION - SENDS ALL FORM INFO TO USER'S EMAIL PROGRAM

	$( "#submit-form" ).on( "click", function(e){
			e.preventDefault();
			
			var contactInfo = $('#contact-information').serializeArray();
			var productListing = $('#product-listing').serializeArray();
			var boothPerson = $('#booth-personnel').serializeArray();
			var lunchTicket = $('#lunch-ticket').serializeArray();
			var boothInfo = $('#booth-information').serializeArray();
			var depositAmt = $('#calc-booth-deposit').serializeArray();
			var remainingBalance = $('#balance').serializeArray();
			var paymentInfo = $('#payment-information').serializeArray();
			var expoContract = $('#expo-contract').serializeArray();

			var messageBody = '';
			
		// MAKE THE FOLLOWING INTO A FUNCTION AT SOME POINT...??

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

			messageBody += '\nREMAINING BALANCE\n'

			$.map(remainingBalance, function(val){
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


/// old stuff 

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

//////

	// $("#lunch-qty").on('keyup', function(){
		
	// 	var quantity = $(this).val(); 
	// 	var total = quantity * 10;

	// 	$('#lunch-total').val(total.toFixed(2));  // forces number to 2 decimal places
	// });


	// $("#lunch-total").on('change', function(){
	// 	alert('foo');
		
	// 	// var quantity = $(this).val(); 
	// 	// var total = quantity * 10;

	// 	// $('#lunch-total').val(total.toFixed(2));  // forces number to 2 decimal places
	// });

/////

	// // var blocks = [];

	// 	$('#booth-information :checkbox').on('change', function(){
	// 		value = $(this).val();
	// 	// console.log($(this).val());
	// 		if(this.checked) {
	// 			console.log("checked");
	// 			blocks.push(value);
	// 		} else {
	// 			var index = blocks.indexOf(this);
	// 			blocks.splice(index, 1);
	// 		}
		
	// 		console.log("array: ", blocks);

	// 		var total = 0; 

	// 		$.each(blocks, function(i,val){
	// 			console.log('value',val);
	// 			total += Number(val);
	// 		});

	// 	console.log('total',total);
	// 	var totalBlock = total.toFixed(2);
	// 	$('#qty-block').val(totalBlock);

	// }); 


	// arguments: start position, number of elements to delete
	//console.log( ar.splice(3, 2) ); // ["a", "b"]
