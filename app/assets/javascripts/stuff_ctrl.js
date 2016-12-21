(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){
    $scope.messages = [
      {
        review: "Angular is cool",
        rating: 5,
        reviewer: "Joe"
      },
      {
        review: "Angular is better than react, Joel",
        rating: 3,
        reviewer: "Joel"
      },
      {
        review: "Angular Angular",
        rating: 1,
        reviewer: "Jane"
      }

    ];
    // this is to help debug
    window.$scope = $scope;

    $scope.addReviewToMessages = function(someReview, someRating, someReviewer){

       if (someReview && someRating && someReviewer) {
        $scope.messages.push(
          {
            review: someReview,
            rating: someRating,
            reviewer: someReviewer
          }
        );
          $scope.review = '';
          $scope.rating = '';
          $scope.reviewer = '';
       }
    }

    $scope.removeMessage = function(theIndex){
      $scope.messages.splice(theIndex, 1);
    }

    $scope.isNice = function(someReview){
      return someReview.review.indexOf('bad') === -1;
    }

  });

}());
