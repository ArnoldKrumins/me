/**
 * Created by arnold.krumins on 09/03/2015.
 */
app.directive('skills',function(){
    return{
        restrict:'AE',
        replace:true,
        scope:{ skills:'=skills' },
        template:'<div id="skills-container">' +
                    '<ul>' +
                        '<li ng-repeat="skill in skills" repeat-complete>' +
                            '<div class="skill-circle skill{{$index}}"><span>{{skill.title}}</span></div>' +
                        '</li>' +
                    '</ul>' +
                  '</div>',
        link: function(scope,element,attrs){



        }
    }

})



app.directive('repeatComplete', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, __) {

            if (scope.$last === true) {

                $timeout(function () {
                    element.parent().parent().css('display','block');
                    TweenMax.staggerFrom(element.parent().find('li'), 1, {opacity:0, y:250, ease:Back.easeInOut}, 0.2);
                },1000)

            }
        }
    };
});

