// (function () {
//     'use strict';
    
//     angular.module('LunchCheck', [])
//     .controller('LunchCheckController', LunchCheckController);


//     LunchCheckController.$inject= {'$scope'};
    
// })();

(function (){
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.message = "";
        $scope.lunchChecker = "";

        $scope.check = function(){
            let dishesArray = $scope.lunchChecker.split(',');
            let count = 0;

            dishesArray.forEach((item) => {
                if(item != false){
                    count++;
                }
            })
            
            if(count > 0 && count < 4){
                $scope.message = "Enjoy!";
            }else if(count >= 4){
                $scope.message = "Too much!";
            }else{
                $scope.message = "Please enter the data first!";
            }
        };
    }
    })();