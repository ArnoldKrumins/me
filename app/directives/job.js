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
                            '<p class="job-role">{{ job.title }}</p>' +
                            '<p class="company">{{ job.company }}<a class="website" ng-if="job.URL.length > 0" href="{{ job.URL }}" target="_blank">website</a></p>' +
                            '<p class="location">{{ job.location }}</p>' +
                            '<p class="duration">{{ job.duration }}</p>' +
                            '<p></p>' +
                            '<p class="company-description">{{ job.description }}</p>' +
                             '<p>Projects</p>' +
                             '<div ng-repeat="project in job.projects">' +

                                '<p>Name: {{ project.name }}</p>' +
                                 '<team devs="project.team"></team>' +
                                '<p class="col-md-2 col-lg-2">Description: {{ project.description }}</p>' +
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