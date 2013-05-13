'use strict';

define([], function () {

	//컨트롤러 선언
	function _controller($scope) {
	
		//CSS 설정
		$scope.$emit('updateCSS', []);
	
	
		//컨트롤러3 메시지
		$scope.message = "I'm the 3rd controller!";
		
		//내부 컨트롤러 4 선언
		$scope.fourthController = function($scope) {
			//컨트롤러4 메시지
			$scope.message = "I'm the 4th controller!";
		}
	}

	//생성한 컨트롤러 리턴
	return _controller;
});
