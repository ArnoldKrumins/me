/**
 * Created by arnoldkrumins on 24/02/15.
 */
var app = angular.module('me',[])

.config([

    '$compileProvider',function config($compileProvider){
    $compileProvider.debugInfoEnabled(false);


}]);






