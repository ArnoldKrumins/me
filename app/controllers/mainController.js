/**
 * Created by arnoldkrumins on 25/02/15.
 */
app.controller('mainCtrl',['$scope','CVDataService',function($scope,CVDataService){


    $scope.skills = [
        { title:'Creative'},
        { title:'Frontend'},
        {title:'Backend'},
        {title:'SQL'},
        {title:'Agile/Scrum'},
        {title:'Responsive'},
        {title:'Mobile'},
        {title:'MVC'}
    ];

    $scope.jobs = CVDataService.getData();


}]);