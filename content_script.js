// 监听双击事件
document.addEventListener("dblclick", doubleClick, true);

// 监听释放鼠标按钮事件
document.addEventListener("mouseup", mouseUp, true);

// 双击处理函数
function doubleClick() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    if ("" != text) {
        console.log(text);
		sendMessage(text);
    }

}

// 释放鼠标处理函数
function mouseUp() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    if ("" != text) {
        console.log(text);
		sendMessage(text);
    }
}
function sendMessage(text){
	var msg = {
		text : text,
		url: document.URL
	};
	chrome.runtime.sendMessage(msg);
}	

