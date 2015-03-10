/**
 * Created by arnoldkrumins on 10/03/15.
 */
app.factory('CVDataService',function($q){

    var jobs = [

        { title:'Developer',
            order:'0',
            company:'ITR Telecom',
            duration: 'Sept 1996 to April 1999',
            URL:'Unknown',
            description:'ITR were a small private company that provided payphone services' +
                ' to a number of NHS hospitals throughout the UK.',
            projects:[{
                name: 'Energis Payphone Billing System',
                filter:'Windows,SQL,FullStack',
                team:'1',
                description: 'Chosen from university by the head of the department I was initially contracted to design and develop a bespoke telephone billing system. This was extended to additional functionality as well as integrating the billing system into the Sage accounting software.',
                techs:[{ name: 'Visual Basic 6', used:'100'},
                    { name: 'MS Access 2.0',used:'80'},
                    { name: 'SQL Server 6.5',used:'100'},
                ]
            },
                {
                    name: 'Payphone Commission ',
                    filter:'Windows,SQL,FullStack',
                    description: 'ITR had 2000+ payphones within hospitals throughout the UK.  I developed a system to allow users to input revenue for each phone and work out the commission on each phone or any logical groupings such as departments or groups of hospitals. The software also provided extensive management and invoicing reports.',
                    techs:[{ name: 'Visual Basic 6', used:'100'},
                        { name: 'MS Access 2.0',used:'80'},
                        { name: 'SQL Server 6.5',used:'100'},
                    ]
                }
            ]


        },

        { title:'Developer',
            order:'1',
            company:'ADT Fire & Security',
            duration: 'May 1999 to November 2000',
            URL:'http://www.adt.co.uk',
            description:'ADT is one of the biggest global brands for providing for business and domestic fire security solutions.',
            projects:[{
                name: 'M.A.T.E.S',
                filter:'Windows,SQL,FullStack',
                team:'1',
                description: 'Brought in to complete the MATES (Mileage and Timesheet Entry System), which had fallen behind schedule. The software was completed before the deadline. I was also responsible for deploying the software and user training in 15 offices throughout the UK, with a further six months support and developing enhancements.',
                techs:[{ name: 'Visual Basic 6', used:'100'},
                    { name: 'MS Access 2.0',used:'80'},
                    { name: 'SQL Server 2000',used:'100'},
                    { name: 'AS400',used:'20'}
                ]
            }]

        },

        { title:'Senior Developer',
            order:'2',
            company:'Cyberview Technology',
            duration: 'Nov 2000 to March 2007',
            URL:'',
            description:'Cyberview was a start up company that introduced the controversial Fixed Odd Betting (FOBT) server based technology to the UK. Growing for 20 employees to over 150 it was eventually bought by Barcest. ',
            projects:[{
                name: 'Online Reporting System',
                filter:'Web,FrontEnd,SQL',
                team:'3',
                description: 'Designed, developed, managed and maintained the customer management web sites for Cyberviews highly successful Fixed Odd Betting Terminals.  The websites provided extensive reporting on performance and administration of the highly transactional terminals in real-time.',
                techs:[{ name: 'Visual Basic 6', used:'100'},
                    { name: 'Classic ASP',used:'100'},
                    { name: 'HTML',used:'100'},
                    { name: 'CSS',used:'80'},
                    { name: 'SQL Server 2000',used:'50'},
                ]
            },
                {
                    name: 'Game Activation Scheduler System',
                    filter:'Winforms,SQL,FullStack',
                    team:'2',
                    description: 'Designed and developed the UI, middle-ware server components and database for the G2E innovation award winning software. Allowing Casino Operators to maximise profits by dynamically scheduling games and content to terminals in real-time.',
                    techs:[{ name: 'C# 2.0', used:'100'},
                        { name: 'SQL Server 2000',used:'50'},
                        { name: 'Threading',used:'30'},
                        { name: 'Network Socket Layer',used:'20'},
                    ]
                },
                {
                    name: 'Draw Manager UI and Reporting for Venezuelan Casino Lottery',
                    filter:'Winforms,SQL,FullStack',
                    team:'1',
                    description: 'Designed and developed the admin UI for scheduling the draws, entering the results and calculating the winnings.  I also developed the management reports for the casino operators to view the draw schedules and results.  Cyberview developed a delivered a complete end-to-end casino based lottery system.',
                    techs:[{ name: 'C# 2.0', used:'100'},
                        { name: 'SQL Server 2000',used:'50'},
                        { name: 'Threading',used:'30'},
                        { name: 'Network Socket Layer',used:'20'},
                    ]
                }
            ]


        },
    ];



return{

        getData: function () {

            return jobs;
            //return  _.map(_.sortByAll(jobs, ['order']), _.values);
            //return _.pluck(_.where(jobs,{'order'}));

//            var deferred = $q.defer();
//            _.pluck(_.where(jobs,{}));
//            $http.post(this.apipath, quote).success(function (data) {
//                deferred.resolve(data);
//            }).error(function () {
//                deferred.reject("an error occured while calling Service");
//            });
//            return deferred.promise;
        }



    }

})