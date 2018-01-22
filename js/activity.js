	$(".footer").load("http://localhost/dome_biyao/footer.html")
	$(".header").load("http://localhost/dome_biyao/index-header.html",function(){
						
		//删除购物车里的商品
		$(".shopRight_content").on("click",".delete",function(){
			var carArr = eval($.cookie("commodity"))
//			console.log(carArr)
			carArr.splice(this.id,1)
//			console.log(carArr)
			var afteratrCommodity = JSON.stringify(carArr);
			$.cookie("commodity",afteratrCommodity)
			rendraingCoolie()
			getCommodityNum()
		})
	
		
		//购物车框动态
		$(".logo_shopcar").mouseenter(function(){
			
			$(".shopRight").show()
		})
		$(".logo_shopcar").mouseleave(function(){
		$(".shopRight").hide()
		})
		$(".shopRight").mouseenter(function(){
			$(this).show()
		})
		$(".shopRight").mouseleave(function(){
			$(this).hide()
		})
		//导航栏变化
		window.onscroll = function(){
			var scroll = document.body.scrollTop || document.documentElement.scrollTop || 0;
			if(scroll !== 0){
				$(".body_right_top").fadeIn()
				$(".box-2").css({
					height:48,
					position:"fixed",
					top:0,
				})
				
				$(".nav_right").css({
					marginTop:12,
				})
				$(".nav_logo").css({
					width:163,
					height:48,
					background:"url(images/logo-retract.png) no-repeat 0 center"
				})
				$(".logo_shopcar").css({
					display:"block"
				})
			}else{
				$(".body_right_top").fadeOut()
				$(".box-2").css({
					height:98,
					position:"absolute",
					top:30,
				})
				$(".nav_right").css({
					marginTop:42,
				})
				$(".nav_logo").css({
					width:231,
					height:98,
					background:"url(images/logo.png) no-repeat 0 center"
				})
				$(".logo_shopcar").css({
					display:"none"
				})
			}
		}
		
		//导航栏效果
		var timer = null;
		var index = 0
		//鼠标滑过更多
		$(".nav_right_more").on("mouseenter",function(){
			if(index == 0){
				$(".nav_right_more").find("span").html("返回")
				$(".nav_right_more").find("i").css({background:"url(images/category-down.png) 100% 25% no-repeat"})
				$(".nav_right_list").stop().animate({top:-37,},300)
				index = 1
			}else{
				$(".nav_right_more").find("span").html("更多")
				$(".nav_right_more").find("i").css({background:"url(images/category-up.png) 100% 25% no-repeat"})
				$(".nav_right_list").stop().animate({top:0,},300)
				index = 0
			}
		})
		//鼠标滑过上方li让下方ul显示
		for(let i = 0 ; i < $(".nav_right_list_li_active").length;i++){
			$(".nav_right_list_li_active").eq(i).mouseover(function(){
				var zx = $(this).offset().left
				var zy = $(this).offset().top
				for(var j = 0; j < $(".nav_right_list_list").length;j++){
						$(".nav_right_list_list").eq(j).css({display:"none"})
				}
				$(".nav_right_list_list").eq(i).css({display:"block",top:zy - $("body").scrollTop() + 65,left:zx})
			})
			
		}
		//鼠标离开上方li让下方ul消失
			$(".nav_right_list_li_active").mouseout(function(){
				var that = this;
				timer = setTimeout(function(){
					$(".nav_right_list_list").eq( $(that).index()-1 ).hide()
				},1000)
				
			})
		//鼠标滑过下方ul时
		$(".nav_right_list_list").mouseover(function(){
				clearTimeout(timer)
				$(this).show();
				$(this).mouseout(function(){
					$(this).hide()
				})
		})
		
		//鼠标滑过下方ul时让上方li的border变化
		$(".nav_right_list_list").hover(function(){
			$(".nav_active").css({borderBottom:"4px solid transparent"})
			$(".nav_right_list_li_a").eq($(this).index()+1).css({borderBottom:"4px solid #523669"})
		},function(){
			$(".nav_active").css({borderBottom:"4px solid #523669"})
			$(".nav_right_list_li_a").eq($(this).index()+1).css({borderBottom:"4px solid transparent"})
		})
		//鼠标滑过上方li时让border变化
		$(".nav_right_list_li").hover(function(event){
			$(this).children(".nav_right_list_li_a").css({borderBottom:"4px solid #523669"})
			$(".nav_active").css({borderBottom:"4px solid transparent"})
		},function(){
			$(this).children(".nav_right_list_li_a").css({borderBottom:"4px solid transparent"})
			$(".nav_active").css({borderBottom:"4px solid #523669"})
		})
		
		
		
		
		
	})
	
//	//JSON拼接商品列表
//	var oBox = document.querySelector(".list_details_list")
//	ajaxGet("http://localhost/dome_biyao/js/activity.json",fn_succ);
//	function fn_succ(json){
//		var html = "";
//		for(var i = 0; i < json.length;i++){
//			html += `<li>
//					<a href="javascript:;" class="jump"><img src="${json[i].img}" alt="" /></a>
//					<dl>
//						<dt>${json[i].name}</dt>
//						<dd>${json[i].price}</dd>
//					</dl>
//					</li>`
//			$(".list_details_list").on("click",".jump",function(){
//				setCookie("id",json[$(this).index()].id)
//				window.location.href = "http://localhost/dome_biyao/details.html"
//			})
//		}
//		oBox.innerHTML = html;
//	}
//	function ajaxGet(url,callback){
//		var ajax = new XMLHttpRequest();
//		ajax.open("GET",url);
//		ajax.send(null);
//		ajax.onreadystatechange = function(){
//			if(ajax.readyState == 4 && ajax.status == 200){
//				var json = JSON.parse(ajax.responseText);
//					callback(json);
//			}
//		}
//	}
	
	//json拼接商品列表
	$.ajax({
		url:"http://localhost/dome_biyao/js/activity.json",
	}).then(function(json){
		var html = "";
		for(var i = 0; i < json.length;i++){
			html += '<li>'+
					'<p class="cartbtn" id="'+json[i].id+'">'+
					'<i></i>'+
					'加入购物车'+
					'</p>'+
					'<a href="javascript:;" class="jump">'+
					'<img src="'+json[i].img+'" alt="" /></a>'+
					'<dl>'+
						'<dt>'+json[i].name+'</dt>'+
						'<dd>'+json[i].price+'</dd>'+
					'</dl>'+
					'</li>'
		}
		$(".list_details_list").html(html)
		$(".list_details_list").on("mouseover","li",function(){
			$(this).children("p").css({opacity:0.8})
		})
		$(".list_details_list").on("mouseout","li",function(){
			$(this).children("p").css({opacity:0})
		})
		$(".list_details_list").on("click",".jump",function(){
		
				setCookie("id",json[$(this).parent().index()].id)
				window.location.href = "http://localhost/dome_biyao/details.html"
			})
	})
	
	//添加事件
	$(".list_details_list").on("click",".cartbtn",function(){
		if(!$.cookie("commodity")){//判断是不是第一次向cookie中添加商品  即有没有cookie
			$.cookie("commodity","[{'id':"+this.id+",'num':1}]");//如果没有,则创建cookie
//			console.log(this.id)
//			console.log("第一次加入购物车");
		}else{
			var identical = false;//有没有相同商品
			var arrCommodity = eval($.cookie("commodity"));//json字符串转成数组
			//如果商品相同 让num递增
			for(var i = 0; i < arrCommodity.length;i++){
				if(this.id == arrCommodity[i].id){
					arrCommodity[i].num ++;//如果有相同的,让num递增
					identical = true;
//					console.log("有相同商品,num递增");
					break;
				}
			}
			if(!identical){
//				console.log("没有相同商品,建立新对象");
				var commoditys = {id:this.id,num:1};//建立新对象
				arrCommodity.push(commoditys);//插入到数组中
			}
			var strCommodity = JSON.stringify(arrCommodity);//将数组json转换成字符串
			$.cookie("commodity",strCommodity);//创建cookie
		}
		getCommodityNum()//调用购物车数字函数
		rendraingCoolie()//添加购物车商品
	})
	
	function getCommodityNum(){//购物车数字函数
		var commodityArr = eval($.cookie("commodity"));
//		console.log(commodityArr)
		var json = 0;
		for(var i = 0 ; i < commodityArr.length;i++){
			json += commodityArr[i].num;
		}
//		console.log(json)
		$(".shoppCar").html(json)
		$(".logo_shopcar_num").html(json)
	}
	getCommodityNum()
		
		

	
		
	
	//添加购物车商品
	function rendraingCoolie(){//通过cookie渲染页面
		$.ajax("http://localhost/dome_biyao/js/activity.json")
		.then(function(json){
			var arrCookie = eval($.cookie("commodity"));
			var html = "";
			for(var i = 0 ; i < arrCookie.length;i++){
				html +=
				'<div class="shopRight_content_son">'+
				'<div class="shopRight_content_img">'+
							'<img src="'+json[arrCookie[i].id-1].img+'" alt="" />'+
							'</div>'+
							'<div class="shopRight_content_name">'+json[arrCookie[i].id-1].name+'</div>'+
							'<div class="shopRight_content_num">'+
								'数量：'+arrCookie[i].num+''+
								'<i> '+json[arrCookie[i].id-1].price+'</i>'+
								'<span class="delete" id="'+i+'">删除</span>'+
						'</div>'
				'</div>'
			}

			$(".shopRight_content").html(html)
		})
	}
	


	
	
	
	
	
	
	
	
	
	
	//回到顶部
	$(".body_right_top").on("click",function(){
		if(document.body.scrollTop == 0){
			document.documentElement.scroll = 0;
		}else{
			document.body.scrollTop = 0;
		}
	})
	window.onscroll = function(){
		var scroll = document.body.scrollTop || document.documentElement.scrollTop || 0;
		if(scroll == 0){
			$(".body_right_top").fadeOut()
		}else{
			$(".body_right_top").fadeIn()
		}
	}
		