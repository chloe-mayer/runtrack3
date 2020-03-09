var a = prompt("Premier Nombre");
var b = prompt("Deuxième Nombre")


function sommenombrespremiers($a, $b)
{

	premier = a;
	deuxieme = b;
        	
    for (var i = 0; i >= a; i++) {

    	if (a % i == 0) {

    		premier++;
    	}
    
    }

    for (var i = 0; i >= b; i++) {
    
    	if (b % i == 0) {

    		deuxieme++;
    	}

    }
    
    if (premier > 2 || deuxieme > 2) {

    	console.log(false);
    }

    else{

    	console.log(parseInt(a) + parseInt(b));
    }


}

sommenombrespremiers()