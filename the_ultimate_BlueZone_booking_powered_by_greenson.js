/*
@Author Greenson
@Version v0.0.2
@readme:
用 chrome 打开这个网站 http://www.seetickets.com/event/london-new-year-s-eve-fireworks/central-london-thames-riverside-london/1022896
然后按 F12 调出开发者工具
然后选择 console 控制台
将 js 代码复制进去 回车！
静候片刻 （具体时间也是看脸）
享受蓝区烟花吧啊哈哈哈哈！！
*/

var timeout = 2000;
current = location.href;
setTimeout('reload()', timeout);	// set timer
function reload() {
	if(!document.getElementsByTagName("frameset")[0]) {	// fetch Blue Zone ticket
		var t = document.getElementsByClassName("price-list see-table  one-group-top ")[0]; 
		var x = t.getElementsByTagName("tbody")[0];
		var d = x.getElementsByTagName("tr")[1];
		var r = d.getElementsByTagName("td")[2];
		//PriceType1_Price
		var str1 = "note quantity";
		var str2 = r.className;
		if(str1 != str2){	// check availability
			alert("GOGOGO!!!");
			return;
		}
		else{	// refresh page
			setTimeout('reload()', timeout);
			fr4me = '<frameset cols=\'*\'>\n<frame src=\'' + current + '\'/>';
			fr4me += '</frameset>';
			with(document) {
				write(fr4me);
				void(close())
			};
		}
	}
	else{
		//var t = document.getElementsByTagName('frameset')[0].contentWindow.document.getElementsByClassName("price-list see-table  one-group-top ")[0]; 
		var t = window.frames[0].document.getElementsByClassName("price-list see-table  one-group-top ")[0];
		var x = t.getElementsByTagName("tbody")[0];
		var d = x.getElementsByTagName("tr")[1];
		var r = d.getElementsByTagName("td")[2];
		//PriceType1_Price
		var str1 = "note quantity";
		var str2 = r.className;
		if(str1 != str2){	// check availability
			alert("GOGOGO!!!");
			return;
		}
		else{	// refresh page
			setTimeout('reload()', timeout);
			fr4me = '<frameset cols=\'*\'>\n<frame src=\'' + current + '\'/>';
			fr4me += '</frameset>';
			with(document) {
				write(fr4me);
				void(close())
			};
		}
	}
}  