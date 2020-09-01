var msg = {};
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
msg.error = "加载中...";
chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
	msg = request;
	//数据处理
	crateTable();
	addContent(msg);
});



function crateTable() {
  var sql = 'create table if not exists t_content(id,text, url, create_time)';
  db.transaction(function(tx) {
  　　tx.executeSql(sql); 
  });
}


function addContent(content) {
  content.text = replaceStr(content.text);
	 var currentDate = new Date().toLocaleString();
     var sql = "INSERT INTO t_content (id,text, url, create_time) VALUES ('"+new Date().getTime()+"','"+content.text+"','"+content.url+"','"+currentDate+"')";
     db.transaction(function(tx) {
     　　tx.executeSql(sql);
    },
    function (tx) {
        alert('插入失败: ' + tx.message);
    });
}


function findContent(content){
  var sql = 'SELECT * FROM t_content WHERE text = '
}

function deleteContent(id){
  var sql = "delete * from t_content where id = '"+id+"'";
   db.transaction(function(tx) {
     　　tx.executeSql(sql);
    },
    function (tx) {
        alert('删除失败: ' + tx.message);
    });
}



function replaceStr(keyWord){
  keyWord = keyWord.replaceAll("'", "''");
  return keyWord;
}


String.prototype.replaceAll  = function(s1,s2){     
    return this.replace(new RegExp(s1,"gm"),s2);     
}   


