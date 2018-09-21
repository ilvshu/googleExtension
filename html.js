var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {  
	tx.executeSql('SELECT * FROM t_content', [], function (tx, results) {
		var len = results.rows.length, i;
		msg = "<p>查询记录条数: " + len + "</p>";
		console.info(msg);
		var str = "";
		for (i = 0; i < len; i++){
			str +="<tr>";
			str +="<td class='item-name' style='width:70%'><p>"+results.rows.item(i).text+"</p></td>";
			str +="<td style='width:30%'>"+results.rows.item(i).create_time+"</td>";
			str +="</tr>";
		}
		console.info(str);
		$("#main_data").html(str);
   }, null);
});
	


