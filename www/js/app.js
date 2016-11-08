angular.module('bookScanning', ['ionic',"bookScanning.controller"])
.run(["$ionicPlatform","$rootScope","$window",function($ionicPlatform,$rootScope,$window) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  //返回
  $rootScope.goback = function(){
		$window.history.go(-1);
	};
	//存储扫描历史数据
	$rootScope.historyStorage = {};
	//存储书架数据
	$rootScope.bookshelfStorage = {};
	//存储收藏数据
	$rootScope.collectionStorage = {};
}])
