var bookScanning = angular.module("bookScanning.controller",["ionic","ngCordova","router","scanningServer"]);
//扫描部分
bookScanning.controller("bookScanning.scanning",["$rootScope","$scope","$cordovaBarcodeScanner","$state","$window","getBookData",function($rootScope,$scope,$cordovaBarcodeScanner,$state,$window,getBookData){
	//callback函数的定义
	$window.bookCallBack = function(data){
		$rootScope.bookData = data;
		console.log(data);
		if($scope.imageData){
			$rootScope.historyStorage[$scope.imageData]={
				img:data.images.medium,
				title:data.title,
				imgData:$scope.imageData,
				isInBookshelf:false,
				isInCollection:false,
				time:new Date()
			}
		}
		$rootScope.historyStorage[9787111128069]={
				img:data.images.medium,
				title:data.title,
				imgData:9787111128069,
				time:new Date()
			}
		console.log($rootScope.historyStorage);
		$state.go("bookDetails");
	};
	//扫描控件
	$scope.scanBarcode = function(){
		$cordovaBarcodeScanner.scan().then(function(imageData){
			$scope.imageData = imageData.text;
			//向豆瓣API获取书本信息
			getBookData.getSingleBook(imageData.text);
		},function(error){
			alert("抱歉，扫描出错");
		});
	}
}]);
//头部
bookScanning.controller("bookScanning.header",["$scope",function($scope){
	$scope.active = true;
	$scope.changeBookshelfStyle = function(){
		$scope.active = true;
	};
	$scope.changeCollectionStyle = function(){
		$scope.active = false;
	}
}]);
bookScanning.controller("getData",["$scope","getBookData","$window","$rootScope","$state",function($scope,getBookData,$window,$rootScope,$state){
	$scope.getbook = function(){
		getBookData.getSingleBook(9787111128069);
	};
	
}])
//图书详情
bookScanning.controller("bookDetails",["$scope","$window",function($scope,$window){
	
}])
//扫描历史
bookScanning.controller("history",["$scope","$rootScope","getBookData",function($scope,$rootScope,getBookData){
	$scope.getBookMsg = function(item){
		getBookData.getSingleBook(item.imgData);
	}
	
}])
