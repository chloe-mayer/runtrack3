var year = prompt("Année :");

var result = bissextile(year);

alert(result);

function bissextile(annee)
{
	var jours = new Date(annee,2,0).getDate();

	if(jours == 29)
	{
		document.write(annee + " est bissextile");
		return(true);
	}
	else
	{
		document.write(annee + " n'est pas bissextile");
		return(false);
	}
}