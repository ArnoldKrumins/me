/**
 * Created by arnoldkrumins on 26/02/15.
 */
app.directive('cv',function(){

    return{
        restrict:'EA',
        scope:{ jobs:'='},
        template:'<div id="jobs" class="col-md-12 col-lg-9">' +
                    '<ul ng-repeat="job in jobs">' +
                        '<li>' +
                            '<div class="job-container col-xs-12">' +
                            '<p class="job-role">{{ job.title }}</p>' +
                            '<p class="company"><i class="fa fa-building"></i><span class="company-name">{{ job.company }}</span><a class="website" ng-if="job.URL.length > 0" href="{{ job.URL }}" target="_blank">website</a><span class="duration">({{ job.duration }})</span></p>' +
                            '<p class="location">{{ job.location }}</p>' +
                             '<p class="company-description">{{ job.description }}</p>' +
                             '<p class="project">Projects</p>' +
                             '<div ng-repeat="project in job.projects">' +

                                '<p><i class="fa fa-code"></i><span class="project-name">{{ project.name }}</span></p>' +
                                 '<team devs="project.team"></team>' +
                                 '<p class="project-description">{{ project.description }}</p>' +
                                    '<div skills-legend technologies="project.techs"></div>'+
                             '</div>' +
                            '</div>' +
                        '</li>' +
                    '</ul>' +
                 ' </div>',
        link:function(scope,element,attrs){



        }

    }




})