var router = angular.module("router", []);
router.config(["$stateProvider","$urlRouterProvider", function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise("/myBookshelf");
	$stateProvider
		.state("myBookshelf", {
			url:"/myBookshelf",
			templateUrl:"template/myBookshelf.html"
		})
		.state("myCollection", {
			url:"/myCollection",
			templateUrl: "template/myCollection.html"
		})
		.state("history",{
			url:"/history",
			templateUrl:"template/history.html",
			controller:"history"
		})
		.state("bookDetails",{
			url:"/bookDetails",
			templateUrl:"template/bookDetails.html",
			controller:"bookDetails"
		})
}])