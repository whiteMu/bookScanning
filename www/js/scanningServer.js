var scanningServer = angular.module("scanningServer", []);
scanningServer.service("getBookData", ["$http", "$rootScope", function($http, $rootScope) {
	//获取书本信息
	this.getSingleBook = function(scan) {
		$http.jsonp("https://api.douban.com/v2/book/isbn/" + scan + "?callback=bookCallBack");
	};
	//加入书架
	this.addBookshelf = function(item) {
		item.isInBookshelf = true;
		$rootScope.historyStorage[item.imgData] = item;
	}
	//加入收藏
	this.addCollection = function(item) {
		item.isInCollection = true;
		$rootScope.historyStorage[item.imgData] = item;
	}
}])