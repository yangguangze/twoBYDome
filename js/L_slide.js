/**
 * @L_slide picutre scroll
 * @version 1.0
 * @author DQ Lee
 **/

;(function($){
	$.fn.slide=function(options){
       var defaults= {
		   affect:1,     //1：上下滚动; 2:幕布式; 3:左右滚动；4：淡入淡出
		   time: 4000,   //间隔时间
		   speed:500,    //动画快慢
		   dot_text:true,//按钮上有无序列号
	   };
	   var opts=$.extend(defaults,options);//extend是jquery开发插件提供的一种方法 $.extend()//全局插件 $.fn.extend()//局部插件
	   	//默认值    选项
		   var $this=$(this);
		   var ool=$("<div class='dot'><p></p></div>");//创建div   动态生成下面的圆点儿
		   var $box=$this.find("ul");//获取ul
		   var $li=$box.find("li");//获取li
		   var timer=null;//声明一个全局变量
		   var num=0;
	   
	   $this.append(ool);
	   $box.find("li").each(function(i){//each 遍历li  each方法则是对jQuery内 部的子元素进行逐个调用
			ool.find("p").append($("<b></b>"));//在p标签内插入b标签
			if(opts.dot_text){//判断dot_text是否为true,也就是是否让按钮上有数字
				ool.find("b").eq(i).html(i+1)//如果dot_text为true就让按钮里的数字逐个加一
			}
       })
	   ool.find("b").eq(0).addClass("cur");//给第一个b标签添加一个className
	   switch(opts.affect){//判断使用的是那种动画效果
		   case 1://上下滚动
		      break;
		   case 2:
		      $box.find("li").css("display","none");//如果是第二种动画(幕布式)就让lu下的li消失
		      break;
		   case 3:
			   $box.css({"width":$li.eq(0).width()*$li.length});//如果是第三种动画(左右滚动)让ul的宽度自动适应所有li的宽度
			   $li.css("float","left");//让li浮动
			   break;
		   case 4:
		      $box.find("li").css("display","none");//如果是第四种动画(淡入淡出)让li消失
		      break;
	   }
	   $box.find("li").eq(0).show(0);
	   ool.find("b").click(function(){	
			num=$(this).index();//当点击按钮时,让num等于当前项的下标
			run ();//调用run函数
		})
		timer=setInterval(auto,opts.time);//创建定时器
			function auto(){
				num<$box.find("li").length-1?num++:num=0;//判断num是否是li的最后一项,如果是,让li++ 否则让li归0
				run();//调用run函数
			}
		function run(){
			ool.find("b").eq(num).addClass("cur").siblings().removeClass("cur");//让当前b标签的className等于cur,同时删除其他同级cur的className
				switch(opts.affect){//判断是哪个动画
				    case 1://上下滚动
						$box.stop(true,false).animate({"top":-240*num},opts.speed);//让top值等于当前下标乘240,动画的速度为最开始声明的速度
						//开启动画之前先停止动画,stop有两个参数,第一个参数代表是否清除动画队列(turn是清空,false是不清空)；
						//第二个参数代表是否立即完成当前动画(true是完成,false是不完成)
						break;
					case 2:
						$box.find("li").css({"position":"absolute"});//如果是第二种幕布式,就让liposition":"absolute"
						$box.find("li").stop(false,true).fadeOut(opts.speed).eq(num).slideDown(opts.speed);
						//不清空动画队列,立即完成当前动画
						//幕布式是有淡出和滑动一起的,
						break;
					case 3://左右滚动
						$box.stop(true,false).animate({"left":-1001*num},opts.speed);
						//清空当前动画队列,不立即完成当前动画,让li的left移动,速度为给定速度
						break;	
					case 4:
						$box.find("li").css({"position":"absolute"});//4：淡入淡出
						$box.find("li").stop(false,true).fadeOut(opts.speed).eq(num).fadeIn(opts.speed);
						////不清空动画队列,立即完成当前动画,速度等于给定速度,
						break;	
				}
		}
		$this.mouseover(function(){//当鼠标移入当前项的时候关闭定时器
			  clearInterval(timer);	
		})
		 $this.mouseout(function(){//鼠标移出当前项的时候开启定时器
			  timer=setInterval(auto,opts.time);//间隔时间为给定时间
		})
}
})(jQuery)