(function () {

  'use strict'
  angular.module('food',[]) // create angular module: food

  .controller('checkController', checkController); // create controller that's called checkController

  checkController.$inject = ['$scope']; // inject $scope service

  function checkController ($scope){

    $scope.list = ""; // information inside input
    $scope.comment = "";
    $scope.message = ""; // Message result
    // this fuction show results of comparisons
    $scope.check = function () {
        var result = without_spaces(); //took array without spaces (organized)
        console.log(result); // show in console result of "without_spaces" function
//---------------------------------------------------------------------------------
        if(result == "") {// if statements
          $scope.message = "Please enter data first";
          $scope.style_message = { "color" : "red" };
          $scope.style_textbox = { "border" : "2px solid red"};

        }
        else if (result.length <= 3){
          $scope.message = "Enjoy!";
          $scope.style_message = {"color" : "green"};
          $scope.style_textbox = { "border" : "2px solid green"};
        }
        else
        {
          $scope.message = "Too Much!";
          $scope.style_message = {"color" : "green"};
          $scope.style_textbox = { "border" : "2px solid green"};

        }
//---------------------------------------------------------------------------------
          console.log("Elements: "+result.length);
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
// to detect and comment if there is spaces between ,   ,
          if(split_var.length > result.length && result != "")
            $scope.comment= "Application does NOT consider and empty item, i.e., `, ,` as an item towards to the count.";
          else
            $scope.comment ="";
//--------------------------------------------------------------------------
          $scope.list = split_var.toString(); // update with the string result to show in input

          return result;
      }
    };


})();
