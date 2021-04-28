var myApp = angular.module("app", []);
myApp.controller("MyController",
    function ($scope) {
        $scope.employee = [];
        $scope.c = 0;

        $scope.CalculateIncrement = function (){
            if($scope.in_BasicSalary > 20000)
                $scope.in_Increment = 5000;
            else
                $scope.in_Increment = 2000;
        };

        $scope.addEmployee = function () {
            $scope.check();
            if($scope.flag)
            {
                $scope.c++;
                $scope.CalculateIncrement();
                $scope.employee.push({
                    in_FirstName: $scope.in_FirstName,
                    in_LastName: $scope.in_LastName,
                    in_Department: $scope.in_Department,
                    in_BasicSalary: $scope.in_BasicSalary,
                    in_Increment: $scope.in_Increment
                });
                $scope.EmptyTextBox();
            }
            else{
                alert("Please Enter All Data!!");
            }
        };

        $scope.deleteEmployee = function (val) {
            var index = $scope.employee.indexOf(val);
            $scope.employee.splice(index, 1);
        };

        $scope.EmptyTextBox = function () {
            $scope.in_FirstName = null;
            $scope.in_LastName = null;
            $scope.in_Department = null;
            $scope.in_BasicSalary = null;
            $scope.in_Increment = null;
        };

        $scope.check = function(){
            $scope.flag = true;
            if(($scope.in_FirstName == null || $scope.in_LastName == null || $scope.in_Department == null || $scope.in_BasicSalary == null))
                $scope.flag = false;
        };
    }
);