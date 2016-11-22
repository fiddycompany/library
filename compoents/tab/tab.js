app.directive('tab',[function(){
	return {
		restrict:'E',
		replace:true,
		scope:{
			data:'=',
		},
		templateUrl:'compoents/tab/tab.html',
		link:function($scope,el){
			$(el).find('.title').on("click",'li',function(){
			   $(el).find(".title li").removeClass('active');
			   $(this).addClass('active');
			   $(el).find(".content li").removeClass('active');
			   $(this).addClass('active');
			})
			
		   
		   
		   
		   
		}
	}
}])