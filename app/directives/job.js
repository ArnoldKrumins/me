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
                            '<p>Role: {{ job.title }}</p>' +
                            '<p>Company: {{ job.company }}</p>' +
                            '<p>Duration: {{ job.duration }}</p>' +
                            '<p>Website: {{ job.URL }}</p>' +
                            '<p>Desciption: {{ job.description }}</p>' +
                             '<p>Projects</p>' +
                             '<div ng-repeat="project in job.projects">' +
                                '<p>Name: {{ project.name }}</p>' +
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