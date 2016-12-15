/**
 * Created by arnoldkrumins on 24/03/15.
 */
app.directive('exampleImage',function(){

    return{
        restrict:'EA',
        scope:{images:'='},
        template:'<div class="example-images" ng-repeat="image in images">' +
                        '<img ng-class="{ \'border\': image.border === true }" ng-src="image.path"/><span ng-hide="image.description.length === 0" class="figure-image">{{ image.figure }}</span>' +
                        '<p ng-hide="image.description.length === 0"><span class="figure">{{ image.figure }}).</span>{{ image.description }}</p>' +
                  '</div>'
    }
})