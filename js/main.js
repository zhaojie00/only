window.onload = function(){

	var oUl = document.getElementById('uu');
	var oLun = document.getElementById('lunbo');
	var aLi0 = oUl.getElementsByTagName('li'); 
	var oAn = oLun.getElementsByTagName('span');
	var aLi = document.getElementById('next').getElementsByTagName('li');
	var aLia = document.getElementById('tab').getElementsByTagName('li');
	var aLib = document.getElementById('biaoge').getElementsByTagName('li');
	var aLic = document.getElementById('div_box').getElementsByTagName('li');
	var oCebian = document.getElementById('cebian');
	var oLef = document.getElementById('main').getElementsByClassName('left');
	var oBut = document.getElementById('but');
	var oCc = document.getElementById('cc');
	var long = aLi.length;
	var la = aLia.length;
	var lb = aLib.length;
	var lc = aLic.length;
	var i = 0;
	var a=0;
	var delay = 2000;
	var num =0;
	var timer;
	//****************标题栏LI效果****************************
	for (i=0;i<la;i++){
			aLia[i].index=i;
			aLia[i].onmouseover = function(){
			for(var j=0;j<la;j++){
				aLia[j].className = '';
				}
				aLia[this.index].className = 'home';
			}
	}			
	
	
	//****************轮播效果****************************
	Play();
	
	function autoPlay(){
		if(num<aLi0.length-1){
			num++;
			var tag =1;
		}else{
			num=0;
			tag=0;
		}
		for(var i =0;i<aLi.length;i++){
			aLi[i].style.background= "";
		}
			aLi[num].style.background= "#f60";
			if(tag){
				oUl.style.left = -num*1400 +"px";
			}else{
				oUl.style.left = 0 +"px";
			}
	}
	oAn[1].onclick = function(){//右按钮
		autoPlay();
	}
	oAn[0].onclick = function(){//左
		if(num>0){
			num--;
			var tag =1;
		}else{
			num=aLi0.length-1;
			tag=0;
		}
		for(var i =0;i<aLi.length;i++){
			aLi[i].style.background= "";
		}
			aLi[num].style.background= "#f60";
			if(tag){
				oUl.style.left = -num*1400 +"px";
			}else{
				oUl.style.left = -4200 +"px";
			}
	}

	for(var j=0;j<aLi.length;j++){
		aLi[j].index =j;
		aLi[j].onclick = function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].style.background = '';
			}
				k = this.index;
				aLi[k].style.background = '#f60';
				oUl.style.left = -k*1400 +"px";
		}

	}
	oLun.onmouseover = Stop;
	oLun.onmouseout = Play;

	function Stop(){
		clearInterval(timer);
	}
	function Play(){
		timer = setInterval(autoPlay,delay);
	}
	/***************表格切换******************/
		for (i=0;i<lb;i++){
			aLib[i].index=i;
			aLib[i].onclick = function(){
			for(var j=0;j<lb;j++){
				aLib[j].className = '';
				aLic[j].className = '';
				//aDiv[j].className = '';
				//aDiv[j].style.opacity=0;
			}
				aLib[this.index].className = 'table';
				aLic[this.index].className = 'ddx';
				aLic[this.index].style.opacity= '0';
				fn2(this.index);
				}
		}
					
				function fn2(v){//淡出方式
				var a=0;
				var b=v;	
				clearInterval(timerr);
				var timerr = setInterval(function(){
					a+=1;
					a>100&&(a==100);
					aLic[b].style.opacity= a/100;
					if(a==100){
						clearInterval(timerr);
						aLic[b].style.opacity= 1;
						}
					},10);
				}
			//********************侧边栏****************************	
			oCc.onmouseover = function(){movee(oCebian,'left',0,3);}//this.index获取当前对象的index属性
			oCc.onmouseout = function(){movee(oCebian,'left',-245,3);}

				//*************************************************
		function movee(obj,attr,target,speed,fn){//对象,属性,目标,速度
		speed = (parseInt(getStyle(obj,attr)) < target) ? speed:-speed;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var newSs = parseInt(getStyle(obj,attr)) + speed;
			/*if(((speed>0)&&speed>(target-newSs))||((speed<0)&&speed<(target-newSs))){
					obj.style[attr] = target + "px";*/
			if((Math.abs(speed)) >= (Math.abs(target-newSs))){
				obj.style[attr] = target + "px";
				clearInterval(obj.timer);
				}else{
				obj.style[attr] = newSs + "px";
				}	
		},5)}
	function getStyle(obj,attr){return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];}
				
				
				
	
}//windoe.onload闭合
