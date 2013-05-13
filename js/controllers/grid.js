'use strict';

define(['library/pqgrid/pqgrid.dev'], function () {
		
	//컨트롤러 선언
	function _controller($scope) {

		//CSS 설정
		$scope.$emit('updateCSS', ['lib/jquery/css/base/jquery-ui-1.10.2.min.css', 'lib/pqgrid/pqgrid.dev.css']);
		
		
		/*
			보여줄 더미 데이터 생성
		*/
		var array = [];
		for(var i=0; i<100; i++) {
			array[i] = [ "Task " + i, "5 days", Math.round(Math.random() * 100), "01/01/2009", "01/05/2009", (i % 5 == 0) + "" ];
		}
		
		
		/*
		Paramquery Grid 설정
		*/
		$("div[pq-grid]").pqGrid({
			width: 700,
			height: 400,
			editable: false,
			title: "Basic Grid",
			colModel: [
				{ title: "Title", width: 100, dataType: "string" },
				{ title: "Duration", width: 100, dataType: "string" },
				{ title: "Complete", width: 50, dataType: "float", align: "right" },
				{ title: "Start", width: 100, dataType: "string", align: "right" },
				{ title: "Finish", width: 100, dataType: "string", align: "right" },
				{ title: "Effort Driven", width: 100, dataType: "string", align: "right"}
			],
			dataModel: { data: array }
		});
	}

	//생성한 컨트롤러 리턴
	return _controller;
});
