/**
 * Created by arnoldkrumins on 25/02/15.
 */
app.controller('mainCtrl',['$scope','CVDataService',function($scope,CVDataService){


    $scope.skills = [
        { title:'.NET'},
        { title:'HTML/CSS'},
        {title:'Backend'},
        {title:'UX Design'},
        {title:'Agile/Scrum'},
        {title:'Responsive'},
        {title:'Mobile'},
        {title:'Angular'}
    ];

    $scope.jobs = CVDataService.getData();


}]);