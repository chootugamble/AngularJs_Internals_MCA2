var myApp = angular.module("app", []);
myApp.controller("MyController",
    function ($scope) {
        $scope.rows = [];
        $scope.c = 0;

        $scope.addRow = function () {
            $scope.check();
            if($scope.flag)
            {
                $scope.c++;
                $scope.rows.push({
                    in_Id: $scope.in_Id,
                    in_Name: $scope.in_Name,
                    in_City: $scope.in_City,
                    in_Branch: $scope.in_Branch,
                    in_Sem: $scope.in_Sem
                });
                $scope.EmptyTextBox();
            }
            else{
                alert("Enter All Data!!");
            }
        };

        $scope.check = function(){
            $scope.flag = true;
            if(($scope.in_Id == null))
                $scope.flag = false;
            if(($scope.in_Name == null))
                $scope.flag = false;
            if(($scope.in_City == null))
                $scope.flag = false;
            if(($scope.in_Branch == null))
                $scope.flag = false;
            if(($scope.in_Sem == null))
                $scope.flag = false;
        };

        $scope.RowDelete = function (val) {
            var index = $scope.rows.indexOf(val);
            $scope.rows.splice(index, 1);
        };

        $scope.EmptyTextBox = function () {
            $scope.in_Id = null;
            $scope.in_Name = null;
            $scope.in_City = null;
            $scope.in_Branch = null;
            $scope.in_Sem = null;
        };
    }
);