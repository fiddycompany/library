var app=angular.module("reader",['ngRoute']);
app.config([
	'$routeProvider',
	function ($routeProvider){
		$routeProvider.when('/shujia',{
			templateUrl:'pages/shujiaa/shujia1-zhengwen.html',
			controller:'shujia1Ctrl'
		}).when('/hanzi',{
			templateUrl:'pages/shujiaa/shujia2-zhengwen.html',
			controller:'shujia2Ctrl'
	}).when('/sousuo',{
		    templateUrl:'pages/shujiaa/shujia3.html',
			controller:'shujia3Ctrl'
	}).when('/fu',{
		    templateUrl:'pages/shujiaa/shujia4.html',
			controller:'shujia4Ctrl'
	}).when('/shu1',{
		templateUrl:'pages/shucheng/shucheng1/shucheng1.html',
	    controller:'shu1Ctrl'
	}).when('/shu2',{
		templateUrl:'pages/shucheng/shucheng2/shucheng2.html'
	}).when('/shu3',{
		templateUrl:'pages/shucheng/shucheng3/shucheng3.html',
	    controller:'shu3Ctrl'
	}).when('/shu4',{
		templateUrl:'pages/shucheng/shucheng4/shucheng4.html',
	    controller:'shu4Ctrl'
	}).when('/shu5',{
		templateUrl:'pages/shucheng/shucheng5/shucheng5.html',
	    controller:'shu5Ctrl'
	}).when('/shu6',{
		templateUrl:'pages/shucheng/shucheng6/shucheng6.html',
	    controller:'shu6Ctrl'
	}).when('/zxj-sy',{
		templateUrl:'pages/zxj-sy/zxj-sy.html',
	}).when('/zxj-shuqian',{
		templateUrl:'pages/zxj-sy/zxj-shuqian.html',
	}).when('/zxj-biji',{
		templateUrl:'pages/zxj-sy/zxj-biji.html',
	}).when('/zxj-qbsp',{
		templateUrl:'pages/zxj-sy/zxj-qbsp.html',
	}).when('/zxj-fabu',{
		templateUrl:'pages/zxj-sy/zxj-fabu.html',
	}).when('/yue', {
		templateUrl: 'pages/dushu/wenzhang/wenzhang.html',
		controller: 'dushuCtrl'
	}).when('/mulu', {
		templateUrl: 'pages/dushu/mulu/mulu.html',
		controller: 'muluCtrl'
	}).when('/biji', {
		templateUrl: 'pages/dushu/biji/biji.html',
		controller: 'bijiCtrl'
	}).when('/shuqian', {
		templateUrl: 'pages/dushu/shuqian/shuqian.html',
		controller: 'shuqianCtrl'
	}).when('/', {
		templateUrl: 'Pages/enter/denglu/denglu.html',
		controller: 'dengluCtrl',
	}).when('/xiayibu', {
		templateUrl: 'Pages/enter/xiayibu/xiayibu.html',
		controller: 'xiayibuCtrl',
	}).when('/wancheng', {
		templateUrl: 'Pages/enter/wancheng/wancheng.html',
		controller: 'wanchengCtrl',
	}).when('/zhuce', {
		templateUrl:'Pages/enter/zhuce/zhuce.html',
		controller:'zhuceCtrl',
	})	
	}]);
