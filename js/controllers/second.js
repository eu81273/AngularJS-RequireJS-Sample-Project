'use strict';

define([], function () {

	//컨트롤러 선언
	function _controller($scope, tester) {
	
		//CSS 설정
		$scope.$emit('updateCSS', ['css/css2.css']);

	
		//컨트롤러2 메시지
		$scope.message = "I'm the 2nd controller! "  + tester;
		
		//변수가 살아있는지 테스트하기 위함.
		$scope.test = $scope.test || 0;
		
		//버튼 클릭시 변수 증가
		$scope.testfunction = function()
		{
			$scope.test++;
		}
	}

	//생성한 컨트롤러 리턴
	return _controller;
});
