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
		var delPointGround = $('.server.sel');
		for(var i=0;i<delPointGround.length;i++){
			var delLineId = $(delPointGround[i]).attr('id');
			$('.moveLine-box[id*='+delLineId+']').remove();
		}
			
		$('.server.sel').remove();
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
	$('.point-opre-mark').click(function(){
		$('.point-opre').removeClass('show');
	})

//添加节点-确定按钮
$(".btn-addpoint").click(function(){
	$('.addrelation-panel').removeClass('on');
	var relation = new Array();
	relation = $('.addrelation-panel .newpoint.sel');
	var topint='';
	
	for(var i=0;i<relation.length;i++){
		topint=topint+$(relation[i]).attr('tempid')+';';	
	}
	var html = '<input type="hidden" value="'+topint+'" class="temp-pointrelation"/>'
	$('body').append(html);
	var newpoint=$('.addpoint-list-box .newpoint.sel');
	var name=$('.add-panel .newpoint.sel').children('p').html();
	var id = $('.add-panel .newpoint.sel').attr('tempid');
	var state='';
	var toPoint = $('.temp-pointrelation').val();
	var top = 10;
	var left = 10;
	if(state==''){
		state=1;
	}
	if(toPoint==''||toPoint == undefined){
		toPoint='';
	}
	if(top==''){
		top=10;
	}
	if(left==''){
		left=10;
	}
	if(id==''||id == undefined){
		if(name == ''){
			alert("请输入新增节点的id和名称")
		}else{
			alert("请输入新增节点的id")
		}
	}else{
		addP(id,name,state,top,left,toPoint);
		$("#"+id).dragDiv(10,10);

	}
	$('.point-opre-panel').removeClass('on').removeClass('hid');
	$('.point-opre').removeClass('show');
	for(var i=0;i<relation.length;i++){
		var FromPoint = $("#"+id);
		var ToPoint = $("#"+$(relation[i]).attr('tempid'));
		linedraw(FromPoint,ToPoint,state)
	}	
});

});

//绘制直线
function drawAllLine(){	
		var pointGroup = $('.server');
		for(var i=0;i<pointGroup.length;i++){
			var topointStr = $(pointGroup[i]).attr('topoint');
			var topointStrlast =topointStr.charAt(topointStr.length - 1);
			if(topointStrlast==";"){topointStr = topointStr.substring(0,topointStr.length-1);}
			var topointGround = topointStr.split(';');
			for(var j=0;j<topointGround.length;j++){	
				var FormPoint = $(pointGroup[i]);
				var ToPoint = $("#"+topointGround[j]);
				linedraw(FormPoint,ToPoint,1);
			}
		}
}
function linedraw(FromPoint,ToPoint,state){
		var fp = getpoint(FromPoint);
		var tp = getpoint(ToPoint);
		var lineId= fp.id+"To"+tp.id;		
		var k = (tp.y-fp.y)/(tp.x-fp.x);
		var deg =  180 / (Math.PI / Math.atan(k));
		if(tp.x<fp.x){deg=deg+180;}
		var width = Math.sqrt(Math.abs((tp.y-fp.y)*(tp.y-fp.y)+(tp.x-fp.x)*(tp.x-fp.x)));
		var time= 1000*width/100;
		var lleft=width-tp.r;
		var html=''+'<div id="'+lineId+'" class="moveLine-box" style="left:'+fp.x+'px;top:'+fp.y+'px;width:'+width+'px;transform: rotate('+deg+'deg);"><div class="moveLine"><div class="moveBall " style="left:'+fp.r+'px"> </div></div></div>';
		$('.monitor').append(html);
		var ball=$('#'+FromPoint.attr("id")+'To'+ToPoint.attr("id")+' .moveBall' );	
		$('.moveLine-box').each(function(){
			ballround($(this));
		})
	}
//刷新线
function refresh(obj){
	var movePoint = getpoint(obj);
	var moveId =movePoint.id;
	var moveLine=$('.moveLine-box[id*='+moveId+']')
	var lineNum =moveLine.length;
	for(var i=0;i<lineNum;i++){
		var thisLine=$(moveLine[i]);
		twoLineid=thisLine.attr('id').split('To');
		if(twoLineid[0] == moveId){
			var fp = getpoint($("#"+twoLineid[0]));
			var tp = getpoint($("#"+twoLineid[1]));
			thisLine.css('transform-origin','top left');
			var k = (tp.y-fp.y)/(tp.x-fp.x);
			var deg =  180 / (Math.PI / Math.atan(k));
			if(tp.x<fp.x){deg=deg+180;}
			var width = Math.sqrt(Math.abs((tp.y-fp.y)*(tp.y-fp.y)+(tp.x-fp.x)*(tp.x-fp.x)));
			var time= 1000*width/100;
			var lleft=width-tp.r;
			thisLine.css({'transform':'rotate('+deg+'deg)',"width":width,'left':fp.x,'top':fp.y});
		}else{
			var fp = getpoint($("#"+twoLineid[1]));
			var tp = getpoint($("#"+twoLineid[0]));
			var k = (tp.y-fp.y)/(tp.x-fp.x);
			var deg =  180 / (Math.PI / Math.atan(k))-180;
			if(tp.x<fp.x){deg=deg+180;}
			var width = Math.sqrt(Math.abs((tp.y-fp.y)*(tp.y-fp.y)+(tp.x-fp.x)*(tp.x-fp.x)));
			var time= 1000*width/100;
			var lleft=width-tp.r;
			thisLine.css({'transform':'rotate('+deg+'deg)',"width":width,'left':tp.x,'top':tp.y});
		}
		var ball=thisLine.children('.moveLine').children('.moveBall');
		var name=obj.attr('id')+'_int';
		ballround(thisLine);
		
	}
	
}
function ballround(obj){
	var name =obj.attr('id')+'_int';
	window.clearInterval(name);
	var twoLineid=obj.attr('id').split('To');
	name = setInterval(function(){
		var fp = getpoint($("#"+twoLineid[0]));
		var tp = getpoint($("#"+twoLineid[1]));
		var ball=obj.children('div').children('.moveBall');
		var width = Math.sqrt(Math.abs((tp.y-fp.y)*(tp.y-fp.y)+(tp.x-fp.x)*(tp.x-fp.x)));
		var time= 1000*width/100;
		var lleft=width-tp.r;
		ball.css({"transition":"all "+time+"ms linear","left":lleft+2})
		var thisleft=parseInt(ball.css('left'));
		if(thisleft>lleft){
			ball.css({"transition":"all "+0+"ms linear","left":lleft})
			ball.css('left',fp.r);
			setTimeout(function(){
				ball.css({"transition":"all "+time+"ms linear","left":lleft+2})
			},1)
		}
	},500);
};
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
	$('.monitor').append(html);
	delSign($("#"+pointId));
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
			html= html+'<div class="newpoint" tempid="'+Id+'1"><p>'+name+'</p></div>';
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

var getpoint = function(obj){
	var radius=($('.server').width())/2;
	var point={
		id:obj.attr('id'),
		x:parseInt(obj.css('left'))+radius,
		y:parseInt(obj.css('top'))+radius,
		r:radius
	}
	return point;
}

var delSign = function(obj){
	obj.click(function(){
		$(this).toggleClass('sel');
		console.info('sel');
	})
	obj.mouseover(function(){
		console.info($(this).position().left);
		var name = $(this).children('p').html();
		$('.pointDetail-title').html(name);
		$('.pointDetail').addClass('show');
	})
	obj.mouseout(function(){
		$('.pointDetail').removeClass('show');
	})
}