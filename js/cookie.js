//设置cookie的需求; cookie名 ， cookie值， 路径， 过期时间;
function setCookie(name,value,opt){
	//name  cookie名;
	//value  cookie值;
	//opt;  可选参数; => obj {}
	//document.cookie = name + "=" + value;
	// var d = new Date();
	// d.setDate(d.getDate() + opt.expires);
	// document.cookie = name + "=" + value +";expires=" + d;
	// var d = new Date();
	// d.setDate(d.getDate() + opt.expires);
	// document.cookie = name + "=" + value +";expires=" + d +";path="+ opt.path;

	var str = "";
	//console.log(opt)
	if(!opt){
		//不存在expires;不存在path；
		//设置cookie value 和 name 就可以了;
		str = name + "=" + value;
	}else{
		//opt => object;
		//分三种情况;
		//1.只有expires 
		//2.只有path
		//3.都有;
		if(opt.path && opt.expires){//既有path也有expires;	
			var d = new Date();
			d.setDate(d.getDate() + opt.expires);
			str = name + "=" + value +";path="+opt.path +";expires=" + d ; 
		}else{
			if(opt.path){//只有path
				str = name + "=" + value +";path="+opt.path;
			}
			if(opt.expires){//只有expires
				var d = new Date();
				d.setDate(d.getDate() + opt.expires);
				str = name + "=" + value +";expires=" + d;
			}
		}
	}
	document.cookie = str;
	// if(!opt.path){
	// 	//不存在path;
	// }
}

	function removeCookie(name,path){
		if(arguments.length > 1){
			// 有路径;
			setCookie(name,"",{expires:-1,path:path})
		}else{
			//没有路径;
			setCookie(name,"",{expires:-1})
		}
	}
	//setCookie("user3","yanghuaizhi4",{expires:10,path:"/"});
	//removeCookie("user","/")

	function getCookie(name){

		var cookie = document.cookie;
		var cookieItem = cookie.split("; ");
		for(var i = 0 ; i < cookieItem.length; i++){
			// console.log(cookieItem[i].split("="))
			// console.log(cookieItem[i].split("=")[0])
			if(cookieItem[i].split("=")[0] == name){
				//console.log("找到了是第"+i+"条cookie")
				return cookieItem[i].split("=")[1]
			}
		}

		return "";
	

	}

