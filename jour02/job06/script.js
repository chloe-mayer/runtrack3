// // initialisation du buffer clavier
// var myCode = new Array();
// for(i=0;i<10;i++)
// {
// 	myCode[i]=0;
// }

// // initialisation du konami code (à l'envers cause empilage)
// var kCode = new Array(8,31,15,31,45,0,9,34,15,32);

// // empiler la dernière touche saisie
// function stackArray(array, value)
// {
// 	for(i=9;i>0;i--)
// 	{
// 		array[i] = array[i-1];
// 	}
// 	array[0] = 32;
// }

// // tester les différences entre le code et la saisie
// function testArray(a,b)
// {
// 	for(i=0;i<a.length;i++)
// 	{
// 		if (a[i]!=b[i])
// 			return false;
// 	}
// 	return true;
// }

// // action!
// function konami()
// {
// 	alert("konami");
// }

// // interception de saisie
// $(document).keyup(function(event) {
// 	stackArray(myCode,event.keyCode);
	
// 	// si c'est la dernière lettre "a" du code
// 	if (event.keyCode==65 && testArray(myCode,kCode))
// 	{
// 		konami();
// 	}
// });

