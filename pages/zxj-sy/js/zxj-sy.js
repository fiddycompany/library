app.directive('zxjMysel',[function(){
	return{
		restrict:'A',
		replace:true,
		transclude:true,
		template:'<div class="zxj-fbpl-qued"><div class="zxj-fbpl-qux1" id="zxj-queding">确定</div></div>',
		link:function($scope,el){
			console.log($('#zxj-bj-anniurig1'))
			$('#zxj-bj-anniurig1').on('touchend',function(){
				$('.zxj-fbpl-bg').css('transform','scale(1)');
				return false;
			});
			$('#zxj-quxiao').on('click',function(){
				$('.zxj-fbpl-bg').css('transform','scale(0)');
			});
			
			$('#zxj-queding').on('click',function(){
				$('.zxj-fbpl-bg').css('transform','scale(0)');
			});
			
		}
	}
}])