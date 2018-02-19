var tableLength = dataJson.length

var table = '<tr><th>URL</th><th>Issue_count</th><th>Branches</th><th>Contributor</th><th>star</th><th>commit</th><th>watcher</th></tr>';


for( var r=0;r<tableLength;r++)
{
	table += '<tr>';

	for(var c=0;c<7;c++)
	{
		
			if(c == 0){
				table += '<td>' + dataJson[r].url + '</td>';

			}

			if(c == 1){
				table += '<td>' + dataJson[r].issue_count + '</td>';
			}
			if(c == 2){
				table += '<td>' + dataJson[r].branches + '</td>';
			}
			if(c == 3){
				table += '<td>' + dataJson[r].contributors + '</td>';
			}
			if(c == 4){
				table += '<td>' + dataJson[r].star + '</td>';
			}
			if(c == 5){
				table += '<td>' + dataJson[r].commit + '</td>';
			}
			if(c == 6){
				table += '<td>' + dataJson[r].watchers + '</td>';
			}

			
		
		
	}

	table += '</tr>';
	

	
}

document.write('<table border=1 style="margin:auto;">' + table + '</table>');









