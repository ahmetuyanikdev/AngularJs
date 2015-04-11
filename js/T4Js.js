function Controller($scope){
	$scope.products=[
					{Name:'Captur',price:60000,sold:false,edit:false},
					{Name:'Focus',price:50000,sold:false,edit:false},
					{Name:'Zx',price:75000,sold:true,edit:false}
					];
					
	
	$scope.getNofP=function(){
		return $scope.products.length;
	}
	
	$scope.addNewProduct = function(){
		$scope.products.push({Name:$scope.newProductName,price:$scope.newProductPrice,sold:$scope.newProductSoldStatus});
	}
					
}