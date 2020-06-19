(function () {

  'use strict'
  angular.module('food',[]) // create angular module: food

  .controller('checkController', checkController); // create controller that's called checkController

  checkController.$inject = ['$scope']; // inject $scope service

  function checkController ($scope){

    $scope.list = ""; // information inside input
    $scope.message = ""; // Message result
    // this fuction show results of comparisons
    $scope.show = function () {
        var result = without_spaces(); //took array without spaces (organized)
        console.log(result); // show in console result of "without_spaces" function
//---------------------------------------------------------------------------------
        if(result == "") // if statements
          $scope.message = "Empty";
        else if (result.length <= 3)
          $scope.message = "Enjoy!  "
        else
          $scope.message = "Too much! ";
//---------------------------------------------------------------------------------
          console.log("Elements: "+result.length);
          $scope.list = ""; // update with the update string result to show in input
      }

      // function tha return an array without blankspace
      function without_spaces() {
        var result = [];
        var split_var = $scope.list.split(",");
//--------------------------------------------------------------------------
        // to erase characters without content ex: "    john"  =>>>> "john"
        // ex: "      " =>>>> ""
          for (var i = 0; i < split_var.length; i++)
              result[i] = split_var[i].trim();
//--------------------------------------------------------------------------
      // to delete string where ""
          for (var i = 0; i < result.length; i++) {
              if (result[i] == ""){result.splice(i, 1);i=0;}
          }
//---------------------------------------------------------------------------
          return result;
      }
    };


})();
