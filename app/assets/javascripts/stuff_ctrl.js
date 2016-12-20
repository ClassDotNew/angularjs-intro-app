(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){
    $scope.messages = [
      "Angular is cool",
      "Angular is better than react, Joel",
      "Angular Angular"
    ];
    // this is to help debug
    window.$scope = $scope;

    $scope.addReviewToMessages = function(someReview){
      console.log(someReview);
      console.log('hi');
      $scope.messages.push(someReview);
      //  add this on the page
    }

  });

}());
