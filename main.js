$(document).on('ready', function(){
	// alert("foo");

	$( "#expo-contract" ).on( "submit", function(e){
		  e.preventDefault();
		  console.log( $(this).serialize() );
		});

// function showValues() {
//     var str = $( "form" ).serialize();
//     $( "#results" ).text( str );
//   }
//   $( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
//   $( "select" ).on( "change", showValues );
//   showValues();
});