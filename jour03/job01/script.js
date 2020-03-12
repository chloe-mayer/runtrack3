

$('#button').click(function(){

	$("html").append("<p>le $ est un bon élémentv monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément</p>");
	$("html").append('<button id="supp">"Supprimer"</button>');

	$("#supp").click(function(){

		$("p").remove();
		$("#supp").remove();
	})

});