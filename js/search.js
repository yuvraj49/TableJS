

var submitValue = document.getElementById("submit");
var keyValue = document.getElementById("search");
var found = document.getElementById('found');
var notFound = document.getElementById('not-found');


submitValue.onclick = function(){

	var key = keyValue.value;
	var flag = 0;
	for(var r=0;r<tableLength;r++)
	{
		if(dataJson[r].url == key)
		{
			flag = 1;
			found.innerHTML = "data found at row" + r;
			found.setAttribute("opacity","0");
			notFound.setAttribute("opacity","1");
		}
		

	}
	if (flag == 0 || key == '') 
	{
		notFound.innerHTML = "Data Not Available";
		found.setAttribute("opacity","1");
		notFound.setAttribute("opacity","0");

	}


};