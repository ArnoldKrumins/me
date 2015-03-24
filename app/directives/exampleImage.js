/**
 * Created by arnoldkrumins on 24/03/15.
 */
app.directive('exampleImage',function(){

    return{
        restrict:'EA',
        scope:{images:'='},
        template:'<div class="example-images" ng-repeat="image in images">' +
                        '<img src="{{ image.path }}"/><span class="figure-image">{{ image.figure }}</span>' +
                        '<p><span class="figure">{{ image.figure }}).</span>{{ image.description }}</p>' +
                  '</div>'
    }
})