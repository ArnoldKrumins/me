/**
 * Created by arnoldkrumins on 26/02/15.
 */
app.directive('cv',function(){

    return{
        restrict:'EA',
        scope:{ jobs:'='},
        template:'<div id="jobs" class="col-md-3 col-lg-3">' +
                    '<ul ng-repeat="job in jobs">' +
                        '<li>' +
                            '<p class="job-role">{{ job.title }}</p>' +
                            '<p class="company"><i class="fa fa-building"></i>{{ job.company }}<a class="website" ng-if="job.URL.length > 0" href="{{ job.URL }}" target="_blank">website</a><span class="duration">({{ job.duration }})</span></p>' +
                            '<p class="location">{{ job.location }}</p>' +
                             '<p class="company-description">{{ job.description }}</p>' +
                             '<p class="project">Projects</p>' +
                             '<div ng-repeat="project in job.projects">' +

                                '<p><i class="fa fa-code"></i><span class="project-name">{{ project.name }}</span></p>' +
                                 '<team devs="project.team"></team>' +
                                '<p>{{ project.description }}</p>' +
                                 '<div ng-repeat="tech in project.techs">' +
                                    '<span>{{ tech.name}}</span>' +


            '<div class="progress tech-value">' +
                '<div class="progress-bar" role="progressbar" aria-valuenow="{{tech.used}}" aria-valuemin="0" aria-valuemax="100" style="width: {{tech.used}}%;">' +
                    '<span class="sr-only">{{tech.used}}% Used</span>' +
                '</div>' +
            '</div>' +
                                 '</div>' +
                             '</div>' +
                        '</li>' +
                    '</ul>' +
                 ' </div>',
        link:function(scope,element,attrs){



        }

    }




})