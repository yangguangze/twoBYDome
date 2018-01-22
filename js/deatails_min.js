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
			var scroll = document.body.scrollTop || document.documentElement.scrollTol || 0;
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
				$(".nav_right_list_list").eq(i).css({display:"block",top:zy - $("body").scrollTop() + 66,left:zx})
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
	$(".footer").load("http://localhost/dome_biyao/footer.html")
	
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
	
			//选项卡
//		new table();
//		function table(){
//			this.aBtn = $(".min_img").children()
//			this.aLi = $(".big_img").children()
//			
//			var that = this
//			for(var i = 0 ; i < this.aBtn.length;i++){
//				this.aBtn[i].index = i
//				this.aBtn[i].onclick = function(){
//					that.move(this.index)
//				}
//			}
//		}
//		table.prototype.move = function(index){
//			for(var i = 0; i < this.aBtn.length; i++){
//				this.aBtn[i].className = ""
//				this.aLi[i].className = ""
//			}
//			this.aBtn[index].className = "active"
//			this.aLi[index].className = "active"
//			
//		}
	//让放大镜内容等于当前li的内容
	$(".big_img").on("mouseover","li",function(){
		$img = $(this).html()
		$(".magnifier_box_all").html($img)
	})






		
		

		//两个页面切换
		$(".introduce_top_details").on("click",function(){
			$(".commodity").css({display:"block"})
			$(".evaluate_page").css({display:"none"})
			$(".introduce_top_border").stop().animate({left:0},300)
		})
		$(".introduce_top_evaluate").on("click",function(){
			$(".evaluate_page").css({display:"block"})
			$(".commodity").css({display:"none"})
			$(".introduce_top_border").stop().animate({left:130},300)
		})
		



	$.ajax({
		url:"http://localhost/dome_biyao/js/detalis.json",
		success:function(json){
			//拼接大图
			$big = ""
			for(var i in json.details){
				if(getCookie("id") == json.details[i].id){
					$big += `<div class="position_box"></div>
						<li><img src="${json.details[i].img}" alt="" /></li>`
				}
				$(".big_img").html($big)
				$(".big_img").children("li").eq(0).addClass("active")
				
			}
		
			//拼接小图
			$min = ""
			for(var j in json.details){
			
				if(getCookie("id") == json.details[j].id){
					$min += `
						<li><img src="${json.details[j].img}" alt="" /></li>`	
				}
				$(".min_img").html($min)
				$(".min_img").children("li").eq(0).addClass("active")
			}

			//拼接文字
			$text = ""
			$text_top = ""
			$text_explain = ""
			for(var w in json.text){
				if(getCookie("id") == json.text[w].id){
					
					$text_top = `<ul>
									<li>
										<a href="">首页</a>
										 <span>/ ${json.text[w].title}</span>
									</li>
									<li class="details_top_title">
										<i></i>
										<span>BCDZ玻璃制品</span>
									</li>
									<li class="details_top_service">
										<div>
											<i></i>
											<span>联系客服</span>
										</div>
									</li>
								</ul>`
					
					
					$text = `<div class="purchase_top">
								<h3>${json.text[w].title}</h3>
								<p>${json.text[w].introduce}</p>
							</div>
							<ul class="purchase_min">
								<li class="purchase_min_price">
									<span>售价</span>
									<div class="purchase_min_price_in">
										<span class="num">
											￥
											<i>${json.text[w].price}</i>
										</span>
										<span class="data">生产周期：15天</span>
									</div>
								</li>
								<li class="purchase_min_color">
									<span>颜色</span>
									<div class="purchase_min_color_img">
										<div class="purchase_min_color_img_box">
											<img src="${json.text[w].minBox}" alt="" />
											<em></em>
										</div>
									</div>
								</li>
								<li class="purchase_min_number">
									<span>数量</span>
									<div class="purchase_min_number_count">
										<p>
											<span class="reduce">-</span>
											<span class="and">1</span>
											<span class="plus">+</span>
										</p>
									</div>
								</li>
							</ul>
							<div class="purchase_bottom">
								<p class="cartbtn" id="${getCookie("id")}">
									<i></i>
									加入购物车
								</p>
								<ul class="service">
									<li>
										<i><img src="" alt="" /></i>
										<span>7天无忧退换</span>
										<div class="service_details">
											<span></span>
											实物破损、不符、质量问题，退换货商家承担往返运费。
										</div>
									</li>
									<li>
										<i><img src="" alt="" /></i>
										<span>先行赔付</span>
										<div class="service_details">
											<span></span>
											争议可申诉，申诉成功，立即退款。
										</div>
									</li>
									<li>
										<i><img src="" alt="" /></i>
										<span>超时赔付</span>
										<div class="service_details">
											<span></span>
											未按承诺时间发货，系统自动赔付（赔款金额为订单商品金额的30%，上限500元）。
										</div>
									</li>
									<li>
										<i><img src="" alt="" /></i>
										<span>顺丰包邮</span>
										<div class="service_details">
											<span></span>
											运费由商家承担
										</div>
									</li>
								</ul>
							</div>
						</div>`
						
						//下方商品介绍
						$text_explain = `
											<dl>
												<dt>品名</dt>
												<dd>${json.text[w].product}</dd>
											</dl>
											<dl>
												<dt>品牌</dt>
												<dd>BCDZ</dd>
											</dl>
											<dl>
												<dt>材质</dt>
												<dd>${json.text[w].texture}</dd>
											</dl>
											<dl>
												<dt>组合套装</dt>
												<dd>${json.text[w].combination}</dd>
											</dl>
											<dl>
												<dt>颜色</dt>
												<dd>${json.text[w].color}</dd>
											</dl>
											<dl>
												<dt>杯子品种</dt>
												<dd>${json.text[w].type}</dd>
											</dl>
											<dl>
												<dt>货号</dt>
												<dd>${json.text[w].number}</dd>
											</dl>
											<dl>
												<dt>容量</dt>
												<dd>${json.text[w].capacity}</dd>
											</dl>
											<dl>
												<dt>产地</dt>
												<dd>广东 广州</dd>
											</dl>
											<dl>
												<dt>电子发票</dt>
												<dd>由于本公司开具电子发票，如需发票请您在购买后备注留言您的电子邮箱</dd>
											</dl>`
					}
				$(".purchase").html($text)
				$(".details_top").html($text_top)
				$(".commodity_describe").html($text_explain)
			}
			
			$text_blend = ""
			for(var h in json.blend){
				
				if(getCookie("id") == json.blend[h].id){
					$text_blend += `<p>${json.blend[h].tit}</p>
						<img src="${json.blend[h].titImg}" alt="" />`
				}
				$(".commodity_img").html($text_blend)
			}
			
			
			
			
			
			//购物车添加事件
	$(".details_content").on("click",".cartbtn",function(){
		console.log(1)
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
	rendraingCoolie()	
		

	
		
	
	//添加购物车商品
	function rendraingCoolie(){//通过cookie渲染页面
		$.ajax("http://localhost/dome_biyao/js/activity.json")
		.then(function(json){
			var arrCookie = eval($.cookie("commodity"));
			console.log(arrCookie.length)
			var html = "";
			for(var i = 0 ; i < arrCookie.length;i++){
				console.log($.cookie("commodity"))
//				console.log(json[parseInt(arrCookie[i].id-1)])
				html +=`<div class="shopRight_content_son">
							<div class="shopRight_content_img">
								<img src="${json[arrCookie[i].id-1].img}" alt="" />
							</div>
							<div class="shopRight_content_name">${json[arrCookie[i].id-1].name}</div>
								<div class="shopRight_content_num">
								数量：${arrCookie[i].num}
										<i>${json[arrCookie[i].id-1].price}</i>
										<span class="delete" id="${i}">删除</span>
								</div>
						</div>`

			}
			$(".shopRight_content").html(html)
		})
	}	
			
	
			
			
				
//				html +='<div class="shopRight_content_son">'+
//				'<div class="shopRight_content_img">'+
//							'<img src="'+json[arrCookie[i].id-1].img+'" alt="" />'+
//							'</div>'+
//							'<div class="shopRight_content_name">'+json[arrCookie[i].id-1].name+'</div>'+
//							'<div class="shopRight_content_num">'+
//								'数量：'+arrCookie[i].num+''+
//								'<i> '+json[arrCookie[i].id-1].price+'</i>'+
//								'<span class="delete" id="'+i+'">删除</span>'+
//						'</div>'
//				'</div>'
//				console.log( html )			
			
			
			
			
			
			
			
			
				
			//加减购物车
			var oPlus = document.querySelector(".plus")
			var oAnd = document.querySelector(".and")
			var oReduce = document.querySelector(".reduce")
			oPlus.onclick = function(){
				oAnd.innerHTML = Number(oAnd.innerHTML)+1+""
			}
			oReduce.onclick = function(){
				oAnd.innerHTML = Number(oAnd.innerHTML)-1+""
			}
			
			//让右侧图片盒子变化
			$colorBox = $(".purchase_min_color_img_box")
			var index = 0
			$colorBox.click(function(){
				if(index == 0){
					$colorBox.css({border:"1px solid #ccc"})
					$colorBox.find("em").hide()
					index = 1
				}else{
					$colorBox.css({border:"1px solid #b768a5"})
					$colorBox.find("em").show()
					index = 0
				}
			}) 
			
			
			//放大镜插件
		
			$(function(){
				$(".details_content_img").magnifier({
				big_img:".big_img",
				position_box:".position_box",
				magnifier_box:".magnifier_box",
				magnifier_box_all:".magnifier_box_all"
				});
			})
			
		
			
			
			
		}
	})
