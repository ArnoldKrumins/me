/**
 * Created by arnold.krumins on 09/03/2015.
 */
app.directive('skills',['$interval','$rootScope',function($interval,$rootScope){
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
//                    '<div id="desc0" class="skills-description"><span>ASP.MVC</span><i class="fa fa-circle"></i><span>ASP.NET</span><i class="fa fa-circle"></i><span>C#</span></div>' +
//                    '<div id="desc1" class="skills-description"><span>CSS/CSS3</span><i class="fa fa-circle"><span>LESS</span><i class="fa fa-circle"><span>HTML5</span></div>' +
//                    '<div id="desc2" class="skills-description"><span>SQL SERVER</span><i class="fa fa-circle"><span>nHibernate</span><i class="fa fa-circle"><span>Pattern Design</span></div>' +
//                    '<div id="desc3" class="skills-description"><span>Balsamiq</span><i class="fa fa-circle"><span>UI Design</span></div>' +
//                    '<div id="desc4" class="skills-description"><span>SCRUM</span><i class="fa fa-circle"><span>Kanban</span></div>' +
//                    '<div id="desc5" class="skills-description"><span>Bootstrap</span><i class="fa fa-circle"><span>Media Queries</span><i class="fa fa-circle"><span>Mobile First</span></div>' +
//                    '<div id="desc6" class="skills-description"><span>Hybrid</span><i class="fa fa-circle"><span>Xamarin</span></div>' +
//                    '<div id="desc7" class="skills-description"><span>AngularJS</span><i class="fa fa-circle"><span>Javascipt</span><i class="fa fa-circle"><span>JQuery</span><i class="fa fa-circle"><span>SPA</span></div>' +
                  '</div>',
        link: function(scope,element,__){

//            $rootScope.$on('staggercomplete', function() {
//
//                var idx=0;
//                var max = scope.skills.length;
//
//                $interval(function(){
//
//
//                    TweenMax.fromTo(element.find('li')[idx],1,{scaleX:'1.3',scaleY:'1.3',delay:0.5},{scaleX:'1',scaleY:'1',ease:Back.easeOut},1);
//                    TweenMax.set($('#desc'+idx),0,{left:"-5000px"});
//
//                    var tl = new TimelineMax();
//
//                    tl.to($('#desc'+idx), 1, {left:"70px"})
//                    tl.to($('#desc'+idx), 2, {autoAlpha:1})
//                    tl.to($('#desc'+idx), 3, {left:"-5000px"})
//
//                    tl.play();
//
//                    if(++idx===max){ idx=0; }
//
//                },5000)
//            })

        }
    }

}]);



app.directive('repeatComplete',['$timeout','$rootScope', function ($timeout,$rootScope) {

    function staggercomplete(){
        $rootScope.$broadcast('staggercomplete');
    }

    return {
        restrict: 'A',
        link: function (scope, element, __) {

            if (scope.$last === true) {

                $timeout(function(){
                    element.parent().css('display','block');
                    TweenMax.staggerFromTo(element.parent().find('li'), 0.5, {opacity:0,scaleX:'0',scaleY:'0'},{opacity:1,scaleX:'1', scaleY:'1',ease:Back.easeOut}, 0.2,staggercomplete);

                },2000);

            }
        }
    };
}]);

