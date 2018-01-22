define(function(require,exports,module){
	
		function table(){
			this.aBtn = $(".min_img").children("li")
			this.aLi = $(".big_img").children("li")
			
			var that = this
			for(var i = 0 ; i < this.aBtn.length;i++){
				this.aBtn[i].index = i
				this.aBtn[i].onclick = function(){
					that.move(this.index)
				}
			}
		}
		table.prototype.move = function(index){
			for(var i = 0; i < this.aBtn.length; i++){
				this.aBtn[i].className = ""
				this.aLi[i].className = ""
			}
			this.aBtn[index].className = "active"
			this.aLi[index].className = "active"
			
		}
	
	module.exports = new table()
	
	
})
