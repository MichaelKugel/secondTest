var myobject;

function Persistance($scope) { 
    $scope.load = function() {
      myobject = localStorage.getItem("policycookie");
      if (!myobject) myobject = {"test" : 0};
      console.log(myobject);
    }

    $scope.persist = function() {
      myobject.name = $scope.name;
      myobject.company = $scope.company;
      myobject.role = $scope.role;
      localStorage.setItem("policycookie", myobject);
      console.log(myobject);
    }
}

