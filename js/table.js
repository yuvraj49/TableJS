var tableLength = dataJson.length
var col = [];


for(var i=0;i<tableLength;i++)
{
	for(var key in dataJson[i]){
		if (col.indexOf(key) == -1) {
			col.push(key);
		}
	}
}


var table = '<tr>';
for(var h=0;h<col.length;h++) {
	table += '<th>' + col[h] + '</th>';
}
table += '</tr>';

for( var r=0;r<tableLength;r++) {
	table += '<tr>';
	for(var c=0;c<7;c++) {
		table += '<td>' + dataJson[r][col[c]] + '</td>';
	}
	table += '</tr>';
}

document.write('<table border=1 style="margin:auto;">' + table + '</table>');