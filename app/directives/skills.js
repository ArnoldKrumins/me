/**
 * Created by arnold.krumins on 09/03/2015.
 */
app.directive('skills',function(){
    return{
        restrict:'AE',
        replace:true,
        scope:{ skills:'=skills' },
        template:'<div id="skills-container" class="col-md-8 col-lg-9" ng-cloak>' +
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



app.directive('repeatComplete',['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, __) {

            if (scope.$last === true) {

                $timeout(function(){
                    element.parent().css('display','block');
                    TweenMax.staggerFromTo(element.parent().find('li'), 0.5, {opacity:0,scaleX:'0',scaleY:'0'},{opacity:1,scaleX:'1', scaleY:'1',ease:Back.easeOut}, 0.2);

                },3000);



            }
        }
    };
}]);

