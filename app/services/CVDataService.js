/**
 * Created by arnoldkrumins on 10/03/15.
 */
app.factory('CVDataService',function($q){

    var jobs = [


        { title:'Senior Developer',
            order:0,
            company:'FleetPartners',
            location:'Melbourne, Australia',
            duration: 'Contract - July 2014 to Dec 2014',
            URL:'http://www.fleetpartners.com.au/',
            description:'FleetPartners are one of the biggest and leading corporate vehicle leasing company in Australia',
            projects:[{
                name: '\'Novated \' Lease Calculator and \' MyCar \' web portal.',
                filter:'Web,FullStack',
                team:1,
                description: 'I was brought in to design and develop the \'Novated \' Lease Calculator’ of the new FleetPartner’s ‘MyCar’ web portal. This is the integral part of the portal allowing users to choose and configure their new Novated vehicle. As well as developing the calculator I was also responsible for the UI design and look and feel.',
                techs:[{ name: 'AngularJS', used:'100', class:'2'},
                    { name: 'Bootstrap', used:'100', class:'2'},
                    { name: 'HTML', used:'100', class:'2'},
                    { name: 'CSS3', used:'100', class:'2'},
                    { name: 'WEB API', used:'100', class:'3'},
                    { name: 'REST', used:'100', class:'3'},
                    { name: 'Agile/SCRUM', used:'100', class:'5'},
                    { name: 'Mobile', used:'100', class:'7'},
                    { name: 'Balsamiq', used:'100', class:'4'}
                ],

                examples:[{name:'Husqvarna',url:'http://www.husqvarna.com/us/home/'},
                    {name:'McCulloch Chainsaws',url:'http://www.mcculloch.com/uk/products/'}

                ]
            }

            ]


        },

        { title:'Senior Systems Developer',
            order:0,
            company:'Stendahls',
            location:'Gothenburg, Sweden',
            duration: 'Contract - August 2012 to June 2014',
            URL:'http://www.stendahls.se/',
            description:'Stendahls are one of the oldest and most innovative and respected digital agencies in Gothenburg',
            projects:[{
                name: 'Husqvarna Global Websites',
                filter:'Web,FullStack',
                team:1,
                description: 'Stendahls main account is Husqvarna. This involved the running, maintenance and support of over twenty individual multi-lingual websites and their CMS/DAM systems. My duties involved technical analysis of customer requests and working with Art Directors on designs. Backlog planning to provide estimation and to prioritise tasks. Creating Agile Kanban walls to visualise the on-going work and ultimately doing the work. The projects typically covered 2/3 weekly sprints, followed up by a client presentation and in team retrospective. The projects generally involved creating new campaigns, new pages and enhancements to existing content. All sites are designed to be fully responsive',
                techs:[{ name: 'HTML', used:'100', class:'2'},
                    { name: 'CSS', used:'100', class:'2'},
                    { name: 'ASP.NET', used:'100', class:'1'},
                    { name: 'ASP.MVC', used:'100', class:'1'},
                    { name: 'JavaScript', used:'100', class:'2'},
                    { name: 'Jquery', used:'100', class:'2'},
                    { name: 'JQuery Mobile', used:'100', class:'7'},
                    { name: 'Agile/SCRUM', used:'100', class:'5'},
                    { name: 'Responsive Design', used:'100', class:'6'},
                    { name: 'Third Party Libs', used:'100', class:'2'}
                ]
            }

            ]
        },




        { title:'Developer',
            order:0,
            company:'ITR Telecom Ltd',
            location:'AshyBank House, Denholm, Scotland',
            duration: 'Perm - Sept 1996 to April 1999',
            URL:'',
            description:'ITR were a small private company that provided payphone services' +
                ' to a number of NHS hospitals throughout the UK.',
            projects:[{
                name: 'Energis Payphone Billing System',
                filter:'Windows,SQL,FullStack',
                team:1,
                description: 'Chosen from university by the head of the department I was initially contracted to design and develop a bespoke telephone billing system. This was extended to additional functionality as well as integrating the billing system into the Sage accounting software.',
                techs:[{ name: 'Visual Basic 6', used:'100'},
                    { name: 'MS Access 2.0',used:'80'},
                    { name: 'SQL Server 6.5',used:'100'},
                ]
            },
                {
                    name: 'Payphone Commission ',
                    filter:'Windows,SQL,FullStack',
                    team:1,
                    description: 'ITR had 2000+ payphones within hospitals throughout the UK.  I developed a system to allow users to input revenue for each phone and work out the commission on each phone or any logical groupings such as departments or groups of hospitals. The software also provided extensive management and invoicing reports.',
                    techs:[{ name: 'Visual Basic 6', used:'100'},
                        { name: 'MS Access 2.0',used:'80'},
                        { name: 'SQL Server 6.5',used:'100'},
                    ]
                }
            ]


        },

        { title:'Developer',
            order:1,
            company:'ADT Fire & Security',
            location:'Sunbury, United Kingdom',
            duration: 'Perm - May 1999 to November 2000',
            URL:'http://www.adt.co.uk',
            description:'ADT is one of the biggest global brands for providing for business and domestic fire security solutions.',
            projects:[{
                name: 'M.A.T.E.S',
                filter:'Windows,SQL,FullStack',
                team:1,
                description: 'Brought in to complete the MATES (Mileage and Timesheet Entry System), which had fallen behind schedule. The software was completed before the deadline. I was also responsible for deploying the software and user training in 15 offices throughout the UK, with a further six months support and developing enhancements.',
                techs:[{ name: 'Visual Basic 6', used:'100',class:'1'},
                    { name: 'MS Access 2.0',used:'80',class:'1'},
                    { name: 'SQL Server 2000',used:'100', class:'3'},
                    { name: 'AS400',used:'20',class:'1'}
                ]
            }]

        },

        { title:'Senior Developer',
            order:2,
            company:'Cyberview Technology',
            location:'London, United Kingdom',
            duration: 'Perm - Nov 2000 to March 2007',
            URL:'http://www.igt.com',
            description:'Cyberview was a start up company that introduced the controversial Fixed Odd Betting (FOBT) server based technology to the UK. Growing for 20 employees to over 150 it was eventually bought by Barcest. ',
            projects:[{
                name: 'Online Reporting System',
                filter:'Web,FrontEnd,SQL',
                team:3,
                description: 'Designed, developed, managed and maintained the customer management web sites for Cyberviews highly successful Fixed Odd Betting Terminals.  The websites provided extensive reporting on performance and administration of the highly transactional terminals in real-time.',
                techs:[{ name: 'Visual Basic 6', used:'100'},
                    { name: 'Classic ASP',used:'100', class:'1'},
                    { name: 'HTML',used:'100',class:'2'},
                    { name: 'CSS',used:'80',class:'2'},
                    { name: 'SQL Server 2000',used:'50',class:'3'},
                ]
            },
                {
                    name: 'Game Activation Scheduler System',
                    filter:'Winforms,SQL,FullStack',
                    team:2,
                    description: 'Designed and developed the UI, middle-ware server components and database for the G2E innovation award winning software. Allowing Casino Operators to maximise profits by dynamically scheduling games and content to terminals in real-time.',
                    techs:[{ name: 'C# 2.0', used:'100',class:'1'},
                        { name: 'SQL Server 2000',used:'50',class:'3'},
                        { name: 'Threading',used:'30',class:'2'},
                        { name: 'Network Socket Layer',used:'20',class:'1'},
                    ]
                },
                {
                    name: 'Draw Manager UI and Reporting for Venezuelan Casino Lottery',
                    filter:'Winforms,SQL,FullStack',
                    team:1,
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