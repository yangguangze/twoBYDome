//;(function($){
//			$.extend({
//				Magnifier:function(opt){
//					this.lBox = $(opt.big_img);
//					this.positionBox = $(opt.position_box);
//					this.magnifierBox = $(opt.magnifier_box);
//					this.magnifierAll = $(opt.magnifier_box_all);
//					this.init()
//				},
//				init:function(){
//					var that = this
//					this.lBox.hover(function(){
//						that.showBox()
//					},function(){
//						that.hideBox()
//					})
//					this.lBox.mousemove(function(event){
//						var evt = event || window.event
//						that.move(evt)
//					})
//				},
//				showBox:function(){
//					this.positionBox.show()
//					this.magnifierBox.show()
//				},
//				hideBox:function(){
//					this.positionBox.hide()
//					this.magnifierBox.hide()
//				},
//				move:function(evt){
//					this.mouseX = evt.clientX;
//					this.mouseY = evt.clientY;
//					this.left = this.mouseX - this.lBox.offset().left - this.positionBox.width()/2
//					this.top = this.mouseY - this.lBox.offset().top -this.positionBox.height()/2
//					this.left = this.left <= 0 ? 0 : this.left
//					this.top = this.top <= 0 ? 0 : this.top
//					if(this.left >= this.lBox.width() - this.positionBox.width()){
//						this.left = this.lBox.width() - this.positionBox.width()
//					}
//					if(this.top >= this.lBox.height() - this.positionBox.height()){
//						this.top = this.lBox.height() - this.positionBox.height()
//					}			
//					this.leftProprtion = this.left / (this.lBox.width() - this.positionBox.width());
//		
//					this.magnifierAll.css('left',-(this.magnifierAll.width() - this.magnifierBox.width()) * this.leftProprtion)		
//					this.topProprtion = this.top / (this.lBox.height() - this.positionBox.height());			
//					this.magnifierAll.css('top',-(this.magnifierAll.height() - this.magnifierBox.height()) * this.topProprtion)			
//					this.positionBox.css({left:this.left})
//					this.positionBox.css({top:this.top})
//				}
//			})
//})(jQuery)




//局部对象面向过程放大镜插件
;(function($){
	$.fn.extend({
		magnifier:function(opt){
			var lBox = $(opt.big_img)
			var positionBox = $(opt.position_box)
			var magnifierBox = $(opt.magnifier_box)
			var magnifierAll = $(opt.magnifier_box_all)
			$(lBox).hover(function(){
				positionBox.css({display:"block"})
				magnifierBox.css({display:"block"})
				},function(){
				positionBox.css({display:"none"})
				magnifierBox.css({display:"none"})
			})
			$(lBox).mousemove(function(event){
				var evt = event || window.event
				var mouseX = evt.pageX;
				var mouseY = evt.pageY;
				var left = mouseX - lBox.offset().left - positionBox.width()/2
				var top = mouseY - lBox.offset().top - positionBox.height()/2
				left = left <= 0 ? 0 : left
				top = top <= 0 ? 0 : top
				if(left >= lBox.width() - positionBox.width()){
					left = lBox.width() - positionBox.width()
				}
				if(top >= lBox.height() - positionBox.height()){
					top = lBox.height() - positionBox.height()
				}
				var leftProprtion = left / (lBox.width() - positionBox.width());
				magnifierAll.css('left',-(magnifierAll.width() - magnifierBox.width()) * leftProprtion)
				var topProprtion = top / (lBox.height() - positionBox.height());
				magnifierAll.css('top',-(magnifierAll.height() - magnifierBox.height()) * topProprtion)
				positionBox.css({left:left})
				positionBox.css({top:top})

			})
		}
	})
})(jQuery)
		