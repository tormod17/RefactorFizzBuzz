
/*function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press

}
*/
/*var input;


*/



/*window.onkeyup = keyup;

	function keyup(e) {
	
	//;
	var input = e.target.value;
	
	
	  e.target.value='';
	  }  
}
*/


/*var input;

var input= prompt('choose number');
	input= +input;
*/

/*	var input= document.getElementById("inputBox").value
	input= parseInt(input);
	console.log(input);

keyup();

*/


$(document).ready(function() {

getNumber();


fizzbuzz(input)

});


var input;

function getNumber() {
	
	$( "input" ).keyup(function(e) {
		    var input = $( this ).val();
		    var input =parseInt(input);
		    if (e.keyCode == 13) {
	  		console.log(input);
	  		$( "input").val(" ");
	  		}
	  		return input 

});
}


function fizzbuzz(input) { 

	for (i=1; i <=input; i ++) {

		 if ( i% 5 == 0  && i% 3 == 0) {
  			console.log('fizz buzz');
			$('.drawingBoard').append('<li>' + 'fizz buzz' + '</li>')
           	
		} else if ( i% 3 == 0 ) {
		
			console.log('fizz') ;
        	$('.drawingBoard').append('<li>' + 'fizz' +'</li>') 

		} else if ( i% 5 == 0 ) {
			console.log('buzz');
			$('.drawingBoard').append('<li>' + 'buzz' + '</li>')


		} else {
			console.log(i);
			$('.drawingBoard').append('<li>' + i + '</li>' )
					
		}
		

		
	};
};



