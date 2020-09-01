

$(function(){
	var basePath = "http://localhost:8080";
	var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
	
	//渲染页面
	var render = function render(tx,results){
		var len = results.rows.length, i;
		var str = "";
		for (i = 0; i < len; i++){
			var id = results.rows.item(i).id;
			str +="<tr>";
			str +="<td class='item-name' style='width:220px'><p>"+results.rows.item(i).text+"</p></td>";
			str +="<td style='width:40px'>"+results.rows.item(i).create_time+"</td>";
			str +="<td style='width:40px'>标签：<SELECT id='label'></SELECT><button name='ok' id='"+id+"'>确定</button></td>";
			str +="</tr>";
		}
		$("#main_data").html(str);
		$("button[name='ok']").on('click',selectLabel);	
	}	
	db.transaction(function (tx) {  
		tx.executeSql('SELECT * FROM t_content', [], render, null);
	});

	

	function selectLabel(){
		console.info($(this).attr("id"));
		console.info("删除websql 数据");
		console.info("mysql 插入数据");
	}

	$("#login_btn").click(function(){
		var fromData = $("#login_form").serializeJSON();
		console.info(fromData);
		$.ajax({
			 url:basePath + "/user/login",
			 data:fromData,
			 type: "post",
			dataType: "jsonp", //指定服务器返回的数据类型
			 success:function(res){
			 	alert(res.retMsg);
			 }
		 });
	});

})




	


