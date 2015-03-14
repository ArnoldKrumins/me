/**
 * Created by arnoldkrumins on 10/03/15.
 */
app.directive('skillsLegend',function(){

    return{
        restrict:'A',
        replace:true,
        scope:{ technologies:'='},
        template:'<div>' +
                    '<ul>' +
                        '<li ng-repeat="tech intechnologies">' +
                            '<div></div>' +
                        '</li>' +
                    '</ul>' +
                  '</div>',
        link:function(scope,element,attrs){


        }
    }
})