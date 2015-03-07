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
              description: 'Chosen from university by the head of the department I was initially contracted to design and develop a bespoke telephone billing system. This was extended to additional functionality as well as integrating the billing system into the Sage accounting software.',
              techs:[{ name: 'Visual Basic', used:'100'},
                  { name: 'MS Access',used:'80'},
                  { name: 'SQL Server',used:'100'},
              ]
          }]


        }

    ];


})