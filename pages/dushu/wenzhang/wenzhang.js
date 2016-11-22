app.controller('dushuCtrl', ['$scope', function($scope){
	
	$('.wenzhang').on('touchend', function(){
		/*设置页*/
		$('.g-header-1').toggleClass('active'); //头部
		$('.gengduo').toggleClass('active'); //底部的更多
		$('.wenzhang').toggleClass('quanping'); //文章是否全屏
		$('.set-font').removeClass(('active'));//设置字体
		$('.g-liang').removeClass(('active'));//设置字体
	});
	//点击设置
	$('.gengduo .shezhi').on('touchend', function(){
		$('.set-font').addClass(('active'));//设置字体
		$('.gengduo').toggleClass('active'); //底部的更多
	})
	//点击亮度
	$('.gengduo .liangdu').on('touchend', function(){
		$('.g-liang').addClass(('active'));//设置亮度
		$('.gengduo').toggleClass('active'); //底部的更多
	})
	
	//拖动进度条
	tuodong('.gengduo', 0);
	tuodong('.set-font', 0);
	tuodong('.set-font', 1);
	tuodong('.g-liang', 0);
	function tuodong(gengduo, i){
		var pro = $(gengduo).find('.progress').eq(i);
		var pI = pro.find('.progress-i');
		pro.on('touchstart', function(e){
			var star = e.originalEvent.changedTouches[0].clientX - pro.offset().left;
			pI.width(star);
		})
		pro.on('touchstart', function(e){
			$(document).on('touchmove', function(e){
				var star = e.originalEvent.changedTouches[0].clientX - pro.offset().left;
				if(star <= 0 || star >= pro.width()){
					return;
				}
				pI.width(star);
			})
		})
		$(document).on("touchend", function(){
			$(document).off("touchmove");
		});
	}
	
	$scope.color = [
		{col:'yangpi', name: '纯色羊皮'},
		{col:'jingdian1', name: '经典1'},
		{col:'jingdian2', name: '经典2'},
		{col:'lan', name: '蓝色图腾'},
		{col:'mei', name: '美丽星空'},
		{col:'shao', name: '少女情怀'},
		{col:'yangyan', name: '养颜绿色'},
		{col:'', name: '自定义'}
	]
	$scope.cu = 0;
	$('.set-font-a-kuai').on('click', '.set-bg', function(){
		$('.set-font-a-kuai .set-bg').removeClass('active');
		$(this).addClass('active');
		$scope.cu = $(this).index();console.log(1)
	})
	
}])
