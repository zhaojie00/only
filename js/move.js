// JavaScript Document
function move(obj,attr,target,speed,fn){//对象,属性,目标,速度
		speed = (parseInt(getStyle(obj,attr)) < target) ? speed:-speed;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var newSs = parseInt(getStyle(obj,attr)) + speed;
			/*if(((speed>0)&&speed>(target-newSs))||((speed<0)&&speed<(target-newSs))){
					obj.style[attr] = target + "px";*/
			if((Math.abs(speed)) >= (Math.abs(target-newSs))){
				obj.style[attr] = target + "px";
				fn(obj.style[attr]);
				clearInterval(obj.timer);
				if(fn){
					fn();
				  }
				}else{
				obj.style[attr] = newSs + "px";
				}	
		},5)}
	function getStyle(obj,attr){return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];}