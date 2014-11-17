function Profile($scope) {  
  $scope.person = {
      name : "Tamas Piros",
      company : "Galactic Empire",
      role : "Sith Lord"
  };
}

function Editor($scope) {  
    $scope.name = $scope.person.name;
    $scope.role = $scope.person.role;
    $scope.company = $scope.person.company;
    $scope.save = function() {  
        $scope.person.name = $scope.name;
        $scope.person.company = $scope.company;
        $scope.person.role = $scope.role;
    }

}

//$scope.save = function() {  
//        $scope.person.name = $scope.name;
//        $scope.person.company = $scope.company;
//        $scope.person.role = $scope.role;
//    }
