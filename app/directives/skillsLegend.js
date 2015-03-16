/**
 * Created by arnoldkrumins on 10/03/15.
 */
app.directive('skillsLegend',function(){

    return{
        restrict:'A',
        replace:true,
        scope:{ technologies:'='},
        template:'<div class="projectskills">' +
                    '<ul>' +
                        '<li ng-repeat="tech in technologies">' +
                            '<div class="skill-circle skill{{tech.class}}"><span>{{ tech.name }}</span></div>' +
                        '</li>' +
                    '</ul>' +
                  '</div>'
    }
})