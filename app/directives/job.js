/**
 * Created by arnoldkrumins on 26/02/15.
 */
app.directive('cv',function(){

    return{
        restrict:'EA',
        scope:{ jobs:'='},
        template:'<div id="jobs">' +
                    '<ul ng-repeat="job in jobs">' +
                        '<li>' +
                            '<div class="job-container">' +
                            '<p class="job-role">{{ job.title }}</p>' +
                            '<p class="company"><i class="fa fa-building"></i><span class="company-name">{{ job.company }}</span><a class="website" ng-if="job.URL.length > 0" href="{{ job.URL }}" target="_blank">website</a><span class="duration">({{ job.duration }})</span></p>' +
                            '<p class="location">{{ job.location }}</p>' +
                             '<p class="company-description">{{ job.description }}</p>' +
                             '<p class="project">Projects</p>' +
                             '<div class="project-detail" ng-repeat="project in job.projects">' +

                                '<p class="project-name">{{ project.name }}</p>' +
                                 '<team class="team" devs="project.team"></team>' +
                                 '<p class="project-description">{{ project.description }}</p>' +
                                    '<div skills-legend technologies="project.techs"></div>'+
                                        '<div project-examples examples="project.examples">' +

                                        '</div>' +
                                     '<span ng-show="!$last" class="project-separator col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10"></span>' +
                                '</div>' +

                            '</div>' +

                        '</li>' +
                    '</ul>' +
                 ' </div>',
        link:function(scope,element,attrs){

  var j = scope.jobs;

        }

    }




})