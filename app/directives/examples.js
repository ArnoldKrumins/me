/**
 * Created by arnoldkrumins on 15/03/15.
 */
app.directive('projectExamples',function(){

    return{
        restrict:'EA',
        scope:{examples:'='},
        template:'<div class="project-examples" ng-show="examples.length >0">' +
                    '<p>Examples of work.</p>' +
                    '<ul>' +
                        '<li ng-repeat="example in examples">' +
                            '<a href="{{ example.url }}">{{ example.name }}</a>' +
                        '</li>' +
                    '</ul>' +
                '</div>'
    }
})


