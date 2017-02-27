window.onload = function(){
	var oSlider = document.getElementById("slider");
	var aLi = document.getElementsByTagName("li");

	var iw = 9999;
	var timer = null;

	for(var i=0,len=aLi.length;i<len;i++){
		aLi[i].index = i;
		aLi[i].onclick = function(){
			var index = this.index;
			clearInterval(timer);
			timer = setInterval(function(){
				slider(index);
			},50);
		}
	}

	function slider(index){
		var iW = parseInt(getStyle(oSlider,"width"));
		var judg = true;
		for(var i=0;i<aLi.length;i++){
			iw = Math.min(iw,parseInt(getStyle(aLi[i],"width")));
		}
		for(var i=0;i<aLi.length;i++){
			if(i === index){
				continue;
			}else if(parseInt(getStyle(aLi[i],"width")) === iw){
				iW = iW -iw;
				continue;
			}
			judg = false;
			var speed = Math.ceil((parseInt(getStyle(aLi[i],"width")) - iw)/10);
			var w = parseInt(getStyle(aLi[i],"width")) - speed;
			if(w <= iw){
				w = iw;
			}
			aLi[i].style.width = w + "px";
			iW -= parseInt(getStyle(aLi[i],"width"));
		}
		aLi[index].style.width = iW + "px";
		if(judg){
			clearInterval(timer);
			timer = null;
		}
	}

	function getStyle(obj,attr){
		return obj.currentStyle? obj.currentStyle(attr) : getComputedStyle(obj,null)[attr];
	}
};
