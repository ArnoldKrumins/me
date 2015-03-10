/**
 * Created by arnoldkrumins on 10/03/15.
 */
app.directive('team',function(){

    return{
        restrict:'EA',
        scope:{devs:'='},
        template:'<i class="fa" ng-class="{\'fa-users\': devs > 1 , \'fa-user\': devs === 1}"></i>' +
            '<span class="dev-info" ng-if="devs > 1">Team of {{ devs }}</span>' +
            '<span class="dev-info" ng-if="devs === 1">Individual</span>'
    }
})