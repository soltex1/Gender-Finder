var myApp = angular.module('myApp');

myApp.controller('GenresController',['$scope', '$http', '$location', '$route', function($scope, $http, $location, $routeParams){

  $scope.message='';
  $scope.name = 'joao';
  $scope.image_url = '../images/girl.png';
  $scope.genders = [
      {name: 'João',value:'male'},
      {name:'Joana',value:'female'}
    ];

  $scope.getGenres = function(){
		$http.get('/api/genres').then(function(response){
			$scope.genres = response.data;
		});
	};

  $scope.addGenre = function() {
    if ($scope.name){
      $scope.message='';
      if ($scope.genders.length < 12){
        $http.get('/api/genres/'+$scope.name).then(function(response){
          if (response.data.gender){
            $scope.genders.push({ name:$scope.name, value:response.data.gender });
            $scope.name = '';
          }else{
            $scope.message = response.data;
          }
        });
      }else{
        $scope.message='Limit reached, please clear!';
      };
    }else{
      $scope.message='Search box is empty!';
      };
    };

    $scope.removeContact = function(genderToRemove) {
      var index = $scope.genders.indexOf(genderToRemove);
      $scope.genders.splice(index, 1);
    };

    $scope.clear = function(event){
      $scope.message = '';
      event.preventDefault();
      $scope.genders =[];
    };

    $scope.submit = function() {
      if ($scope.text) {
        $http.get('/api/genres/'+$scope.text).then(function(response){
        $scope.list = [];
  			var gender = response.data.gender;
	    	$scope.list.push(gender);
        $scope.text = '';
      });
    }
  };

}]);

