/**
 * Created by arnoldkrumins on 25/02/15.
 */
app.controller('mainCtrl',function($scope){


    $scope.jobs = [
        { title:'Developer',
          company:'ITR Telecom',
          duration: 'Sept 1996 to April 1999',
          URL:'',
          description:'ITR were a small private company that provided payphone services' +
                       ' to a number of NHS hospitals throughout the UK.',
          projects:[{
              name: 'Energis Billing System',
              description: 'ITR Telecom required a way to take the raw billing data recieved from Energis to produce detailed billing..',
              techs:[{ name: 'Visual Basic', used:'100'},
                  { name: 'MS Access',used:'80'},
                  { name: 'SQL Server',used:'100'},
              ]
          }]


        }

    ];


})