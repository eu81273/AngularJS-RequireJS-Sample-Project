'use strict';

define([], function () {

    return ['appVersion', function () {
		return function (scope, elm, attrs) {
			elm.text("1.0.0");
		}
	}]
})
