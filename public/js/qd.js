//-------
$(function(){
	$(".add-point button").click(function(){
		if(!$('.point-opre').hasClass('show')){
			$('.point-opre').addClass('show');
		}
		$('.point-opre-panel:not(.add-panel)').addClass('hid');
		$('.add-panel').addClass('on');
		setTimeout(function(){
			$('.point-opre-panel.hid').removeClass('hid').removeClass('on');
		},500)
	});
	$(".del-point button").click(function(){
		if(!$('.point-opre').hasClass('show')){
			$('.point-opre').addClass('show');
		}
		$('.point-opre-panel:not(.del-panel)').addClass('hid');
		$('.del-panel').addClass('on');
		setTimeout(function(){
			$('.point-opre-panel.hid').removeClass('on').removeClass('hid');
		},500);
	});
	$(".edit-point button").click(function(){
		if(!$('.point-opre').hasClass('show')){
			$('.point-opre').addClass('show');
		}
		$('.point-opre-panel:not(.edit-panel)').addClass('hid');
		$('.edit-panel').addClass('on');
		setTimeout(function(){
			$('.point-opre-panel.hid').removeClass('hid').removeClass('on');
		},500)
	});

});
//-------//



function drawActive(pointRelation,ctx2){
	var timeGo=0;
	var radius=parseInt(($('.server').width()))/2;
	setInterval(function(){
		ctx2.clearRect(0,0,1000,1000);
		timeGo++;
		var pointGroup = $('.server');
		for(var i=0;i<pointGroup.length;i++){
			var topointStr = $(pointGroup[i]).attr('topoint');
			var topointStrlast =topointStr.charAt(topointStr.length - 1);
			if(topointStrlast==";"){topointStr = topointStr.substring(0,topointStr.length-1);}
			var topointGround = topointStr.split(';');
			for(var j=0;j<topointGround.length;j++){	
				var FormPoint = $(pointGroup[i]);
				var ToPoint = $("#"+topointGround[j]);
				var fx=parseInt($(FormPoint).position().left)+radius;
				var fy=parseInt($(FormPoint).position().top)+radius;
				var tx=parseInt($(ToPoint).position().left)+radius;
				var ty=parseInt($(ToPoint).position().top)+radius;
				//var fx=parseInt(FormPoint[0].offsetLeft) + radius;
				//var fy=parseInt(FormPoint.offset().top) + radius;
				//var tx=parseInt(ToPoint[0].offsetLeft) + radius;
				//var ty=parseInt(ToPoint.offset().top) + radius;
				var ToState = ToPoint.attr('state');
				var FormState = FormPoint.attr('state');
//				var pTopState = pointRelation[i].toP[j].toPointState;	
//				if(ToState==1 && FormState == 1&&pTopState==1){var state=1}else{var state=0}
				if(ToState==1 && FormState == 1){var state=1}else{var state=0}
				dynamicline(fx,fy,tx,ty,radius,ctx2,timeGo,state);
			}
		}
	},30);

}
function dynamicline(x1,y1,x2,y2,r,ctx2,timeGo,state){
		var k = (y2-y1)/(x2-x1);
		var b = y1-k*x1;
		var rr = Math.atan(k);
		var cosr= (1-Math.tan(rr/2)*Math.tan(rr/2))/(1+Math.tan(rr/2)*Math.tan(rr/2));
		var rx = x1>x2?-parseInt(cosr*r):parseInt(cosr*r);
		timeGo=timeGo%(Math.abs(x2-x1)-r);
		timeGo=x2>x1?timeGo:-timeGo;
		var x=timeGo+x1+rx;
		var y=x*k+b;
		var radgrad = ctx.createRadialGradient(x,y,2,x,y,5);
		if(state==1){
			radgrad.addColorStop(0.0,'rgba(255,255,255,0.8)'); 
		  	radgrad.addColorStop(0.8,'rgba(182,224,255,0.2)'); 
		  	radgrad.addColorStop(1.0,'rgba(182,224,255,0.0)'); 
		}else{
		  	radgrad.addColorStop(0.0,'rgba(255, 54, 48,0.8)'); 
		  	radgrad.addColorStop(0.8,'rgba(255, 54, 48,0.2)'); 
		  	radgrad.addColorStop(1.0,'rgba(255, 54, 48,0.0)'); 
		}
		ctx2.beginPath();
		ctx2.arc(x,y,5,0,Math.PI*2,true);
		ctx2.fillStyle=radgrad;
		ctx2.fill();
	
}
//绘制直线
function drawAllLine(pointRelation,ctx){	
	setInterval(function(){
		ctx.clearRect(0,0,1000,1000);
		var pointGroup = $('.server');
		for(var i=0;i<pointGroup.length;i++){
			var topointStr = $(pointGroup[i]).attr('topoint');
			var topointStrlast =topointStr.charAt(topointStr.length - 1);
			if(topointStrlast==";"){topointStr = topointStr.substring(0,topointStr.length-1);}
			var topointGround = topointStr.split(';');
			for(var j=0;j<topointGround.length;j++){	
				var FormPoint = $(pointGroup[i]);
				var ToPoint = $("#"+topointGround[j]);
				pointToPoint(FormPoint,ToPoint,1);
			}
		}
//		for (var i=0;i<pointRelation.length;i++) {
//			for (var j=0;j<pointRelation[i].toP.length;j++) {
//				var FormPoint = $("#"+pointRelation[i].formPoint);
//				var ToPoint = $("#"+pointRelation[i].toP[j].toPointId);
//				var pTopState = pointRelation[i].toP[j].toPointState;
//				pointToPoint(FormPoint,ToPoint,pTopState);
//			}
//		}
	},30);

}
//起始点到结束点
var pointToPoint =function(FormPoint,ToPoint,pTopState){
	var radius=($('.server').width())/2;
	var fx=parseInt(FormPoint.css('left'))+radius;
	var fy=parseInt(FormPoint.css('top'))+radius;
	var tx=parseInt(ToPoint.css('left'))+radius;
	var ty=parseInt(ToPoint.css('top'))+radius;
	var FormState =FormPoint.hasClass('state-err');
	var ToState=ToPoint.hasClass('state-err');
	if(FormState || ToState){
		ctx.strokeStyle="#ff3630";//红色
	}else{
		if(pTopState==0){
			ctx.strokeStyle="#ff3630";//红色
		}else{
			ctx.strokeStyle="#7bc2f6";//蓝色
		}
		
	}
	ctx.save()
	ctx.beginPath();
	ctx.moveTo(fx,fy);
	ctx.lineTo(tx,ty);
	ctx.closePath();
	ctx.lineWidth=2;
	ctx.stroke();
	ctx.restore();
}
//-----创建初始节点组
var addPoint=function(data,callback){
	var pointGroup=data.pointGroup;//节点组
	var pointRelation=data.pointRelation;//节点联系
	var pointGroupNum = pointGroup.length;
	for(var i=0;i<pointGroupNum;i++){
		var pointId =pointGroup[i].id;
		var name=pointGroup[i].name;
		var state=pointGroup[i].state;
		var top=pointGroup[i].top;
		var left=pointGroup[i].left;
		var toPoint='';
		for(var j=0;j<pointGroup[i].toP.length;j++){
			toPoint =toPoint+ pointGroup[i].toP[j].toPointId+";";
		}
		addP(pointId,name,state,top,left,toPoint);
	}
 } 

 //------创建节点
 var addP=function(pointId,name,state,top,left,toPoint){
	var stateclass =(state==0 ?"state-err":"");
	var html="";
	html= html+'<div class="server shadow-spread '+stateclass+'" state="'+state+'"  toPoint="'+toPoint+'"  id="'+pointId+'" style="top: '+top+'px;left: '+ left+'px;"><p>'+name+'</p></div>';
	$('.n-index').append(html);
 }
 var addNewPoint=function(pointGroup,callback){
		var pointGroupNum = pointGroup.length;
		for(var i=0;i<pointGroupNum;i++){
			var Id =pointGroup[i].id;
			var name=pointGroup[i].name;
			var state=pointGroup[i].state;
			var top=pointGroup[i].top;
			var left=pointGroup[i].left;
				var html="";
			html= html+'<div class="newpoint" tempid="'+Id+'"><p>'+name+'</p></div>';
			$('.add-panel .addpoint-list').append(html);
		}
}
 var addRelaPoint=function(pointGroup,callback){
		var pointGroupNum = pointGroup.length;
		for(var i=0;i<pointGroupNum;i++){
			var Id =pointGroup[i].id;
			var name=pointGroup[i].name;
			var state=pointGroup[i].state;
			var top=pointGroup[i].top;
			var left=pointGroup[i].left;
			var html="";
			html= html+'<div class="newpoint" tempid="'+Id+'"><p>'+name+'</p></div>';
			$('.addrelation-panel .addpoint-list').append(html);
		}
}
 
var newpoint = function(obj){
	$('.addrelation-panel .newpoint').removeClass('sel');
	$('.add-panel .newpoint').removeClass('sel');
	obj.toggleClass('sel');
	var name= obj.children('p').html();
	$('.addrelation-panel').removeClass('on').addClass('on');
	$('.addrelation-panel .point-opre-title').html("请选择"+name+"所要联系的节点");
}

