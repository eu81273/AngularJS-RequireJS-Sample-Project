'use strict';

//requireJS 모듈 선언 - [myApp 앵귤러 모듈]
define([
		'angular', //앵귤러 모듈을 사용하기 위해 임포트
		'route-config' //registers에 각 프로바이더를 제공하기 위해 임포트
	],
	
/*
	이 부분도 주의깊게 살펴봐야한다.
	위의 디펜던시들이 모두 로드된 뒤에 아래의 콜백이 실행된다.
	디펜던시들이 리턴하는 객체들을 콜백함수의 파라메터로 받게 되는데,
	자세히보면 route-config와 같이 snake case로 된 파일명이,
	파라메터로 받을 때는 routeConfig와 같이 camel case로 바뀌는 것을 볼 수 있다.
*/	
	//디펜던시 로드뒤 콜백함수
	function (angular, routeConfig) {
	
		//위의 디펜던시를 가져와서 콜백을 수행하게 되는데,
		//리턴하는 내용이 실제 사용되는 부분이겠지?
		//여기서는 myApp이라는 앵귤러 모듈을 리턴한다.
		
		
		//모듈 선언
		var app = angular.module('myApp', [], function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
		
			//부트스트랩 과정에서만 가져올 수 있는 프로바이더들을 각 registers와 연계될 수 있도록
			routeConfig.setProvide($provide); //for services
			routeConfig.setCompileProvider($compileProvider);  //for directives
			routeConfig.setControllerProvider($controllerProvider); //for controllers
			routeConfig.setFilterProvider($filterProvider); //for filters
		});
		
	

		//공통 컨트롤러 설정 - 모든 컨트롤러에서 공통적으로 사용하는 부분들 선언
		app.controller('CommonController', function($scope) {
		
			//스타일시트 업데이트
			 $scope.$on('updateCSS', function(event, args) {
			 
				//파라메터로 받아온 스타일 시트 반영
				$scope.stylesheets = args;
			});  
		});	
			
		
		return app; 
 	}
);
