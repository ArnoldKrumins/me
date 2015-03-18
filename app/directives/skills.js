/**
 * Created by arnold.krumins on 09/03/2015.
 */
app.directive('skills',function(){
    return{
        restrict:'AE',
        replace:true,
        scope:{ skills:'=skills' },
        template:'<div id="skills-container" class="col-md-8 col-lg-9">' +
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

                    TweenMax.staggerFromTo(element.parent().find('li'), 1, {opacity:0, scaleX:'0.5',ease:Back.easeInOut},{opacity:1, scaleX:'1',ease:Back.easeInOut}, 0.5);


            }
        }
    };
});

