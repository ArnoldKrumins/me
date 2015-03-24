/**
 * Created by arnoldkrumins on 15/03/15.
 */
app.directive('projectExamples',function(){

    return{
        restrict:'EA',
        //transclude:true,
        scope:{examples:'='},
        template:'<div class="project-examples" ng-show="examples.length >0">' +
                    '<p>Example(s) of work.</p>' +
                    '<ul>' +
                        '<li ng-repeat="example in examples">' +
                            '<a href="{{ example.url }}">{{ example.name }}</a>' +
//                            '<image-swiper ng-show="example.images.length > 0" images="example.images"></image-swiper>' +
                            '<example-image ng-show="example.images.length > 0" images="example.images"></example-image>' +
                        '</li>' +
                    '</ul>' +
                '</div>'
    }
})


