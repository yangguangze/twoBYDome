		function ajaxGet(url,callback,data){
			var ajax = new XMLHttpRequest();
			if(arguments.length == 3){
				url = url + "?" + data;
			}
			ajax.open("GET",url);
			ajax.send(null);
			ajax.onreadystatechange = function(){
				if(ajax.readyState == 4 && ajax.status == 200){
					callback(ajax.responseText);
				}
			}
		}

		function ajaxPost(url,callback,data){
			if(arguments.length == 2){
				data = null;
			}
			var ajax = new XMLHttpRequest();
			ajax.open("POST",url);
			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			ajax.send(data);
			ajax.onreadystatechange = function(){
				if(ajax.readyState == 4 && ajax.atatus == 200){
					callback(ajax.responseText);
				}
			}
		}


	
