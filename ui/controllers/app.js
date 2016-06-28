var app = angular.module('projGlobalizationApp',['ngRoute','pascalprecht.translate']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	$routeProvider.
		when('/main', {
			templateUrl: '../views/main.html',
			controller: 'MainController'
		}).
		otherwise({
			redirectTo: '/main'
		});
}]);

app.config(['$translateProvider', function ($translateProvider) {
	var defaultLanguage = "de";
	loadTranslate("en",readFile("en.txt"));
	loadTranslate("de",readFile("de.txt"));
  function loadTranslate(lang, values){
  	var obj = {};
  	angular.forEach(values, function(val,index){
  		obj[val.split(": ")[0]] = val.split(": ")[1]
  	});
  	$translateProvider.translations(lang, obj);
  };
  function readFile(fileName){
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", fileName, false);
		rawFile.send(null);
		return rawFile.responseText.split("\n");;
  };
  $translateProvider.preferredLanguage(defaultLanguage);
}]);

/*app.service('readFile', function() {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", fileName, false);
	rawFile.send(null);
	return readFile.responseText.split("\n");
});	
*/
app.controller('MainController', ['$scope', function($scope){
}]); 