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
                team:4,
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
                    { name: 'Third Party Libs', used:'100', class:'2'},
                    { name: 'CMS', used:'100', class:'3'}

                ],

                examples:[{name:'Husqvarna',url:'http://www.husqvarna.com/us/home/'},
                    {name:'McCulloch Chainsaws',url:'http://www.mcculloch.com/uk/products/'},
                    {name:'Husqvarna Construction',url:'http://www.husqvarna.com/us/construction/company/proudprofessionals/'},
                    {name:'Gardena',url:'http://www.gardena.com/au/'}
                ]

            },
                {
                    name: 'UD Trucks',
                    filter:'Web,FrontEnd',
                    team:6,
                    description: 'I have also assisted in the launch for the Japanese UD Trucks website for the \' NewBiz \' team',
                    techs:[{ name: 'HTML', used:'100', class:'0'},
                        { name: 'CSS', used:'100', class:'0'},
                        { name: 'ASP.MVC', used:'100', class:'1'},
                        { name: 'JavaScript', used:'100', class:'0'},
                        { name: 'Jquery', used:'100', class:'0'},
                        { name: 'EPI Server', used:'100', class:'2'},
                        { name: 'Agile/Scrum', used:'100', class:'4'}
                    ],

                    examples:[{name:'UD Trucks',url:'http://www.udtrucks.com/'}

                    ]

                },

                {
                    name: 'Cochlear',
                    filter:'Web,FrontEnd',
                    team:2,
                    description: 'Was involved in technical workshop to evaluate the Xamarin mobile development framework as a suitable platform for Cochlear’s new companion mobile app.',
                    techs:[{ name: 'Xamarin', used:'100', class:'5'},
                        { name: 'Design Concepts', used:'100', class:'2'}
                    ],

                    examples:[{name:'Cochlear Website',url:'http://www.cochlear.com/wps/wcm/connect/intl/home/home'}

                    ]

                }

            ]
        },

        { title:'Senior Web Developer',
            order:0,
            company:'Aztec',
            location:'Remote working',
            duration: 'Contract - Oct 2012 to Nov 2014',
            URL:'https://www.aztecmoney.com/',
            description:'Aztec Money is an open access global marketplace offering Export Trade Finance. The first marketplace for export trade receivables and invoices with immediate access to cash.',
            projects:[{
                name: 'Aztec Money/Exchange Websites',
                filter:'Web,FrontEnd',
                team:4,
                description: 'To provide a simple, clean website design that was also localised for 30 languages.',
                techs:[{ name: 'C#, ', used:'100', class:'0'},
                    { name: 'ASP.MVC',used:'80',class:'0'},
                    { name: 'CSS',used:'80',class:'1'},
                    { name: 'HTML',used:'80',class:'1'},
                    { name: 'Agile/Scrum', used:'100', class:'4'}
                ],

                examples:[{name:'Aztec Money',url:'https://www.aztecmoney.com/'},{name:'Aztec Exchange',url:'https://www.aztecexchange.com/'}

                ]
            }
            ]


        },



        { title:'Senior Web Developer',
            order:0,
            company:'RMIT - Royal Melbourne Institute of Technology',
            location:'Melbourne, Australia',
            duration: 'Contract - Feb 2011 to Feb 2012',
            URL:'http://www.rmit.edu.au',
            description:'RMIT is one of the largest and well-respected universities in Australia with over 70,000 students spread over several areas of Melbourne and Vietnam',
            projects:[{
                name: 'Apply Direct Online ',
                filter:'Web,SQL,FullStack',
                team:4,
                description: 'The challenge was to provide a highly available and scalable website that allowed students to apply for courses also providing back end tools for staff to process applications integrating into the existing PeopleSoft system. The site was developed on time and was regarded as a great success.',
                techs:[{ name: 'C#, ', used:'100', class:'0'},
                    { name: 'ASP.MVC',used:'80',class:'0'},
                    { name: 'CSS',used:'80',class:'1'},
                    { name: 'HTML',used:'80',class:'1'},
                    { name: 'Fluent NHibernate',used:'80',class:'2'},
                    { name: 'Oracle 9',used:'80',class:'2'},
                    { name: 'Agile/Scrum', used:'100', class:'4'}
                ]
            }
            ]


        },


        { title:'Senior Developer',
            order:0,
            company:'AI Media Comms',
            location:'London, United Kingdom',
            duration: 'Contract - March 2010 to Dec June 2010',
            URL:'http://www.aimediacomms.com',
            description:'AI Media provides software solutions that enables organisations to manage proactive PR campaigns with a comprehensive media contacts database, press release distribution and integrated media monitoring.',
            projects:[{
                name: '\'Vuelio \' Media Relations website.',
                filter:'Web,FullStack',
                team:1,
                description: 'The aim was to design and develop a new website geared towards the private sector. This involved taking the existing ‘Newflash’ product and overhauling the UI to incorporate Ajax, freshen up the look and feel and to refactor the existing code base.',
                techs:[{ name: 'ASP.NET', used:'100', class:'0'},
                    { name: 'HTML', used:'100', class:'1'},
                    { name: 'CSS', used:'100', class:'1'},
                    { name: 'Ajax', used:'100', class:'1'},
                    { name: 'Agile/SCRUM', used:'100', class:'4'},
                    { name: 'NHibernate', used:'100', class:'2'},
                    { name: 'NUnit', used:'100', class:'0'},
                    { name: 'JavaScript', used:'100', class:'1'},
                ]
            }

            ]


        },


        { title:'Senior Developer',
            order:0,
            company:'Freedman International',
            location:'London, United Kingdom',
            duration: 'Perm - June 2007 to Dec 2009',
            URL:'http://www.freedmaninternational.com/',
            description:'Stendahls are one of the oldest and most innovative and respected digital agencies in Gothenburg',
            projects:[{
                name: 'Husqvarna Global Websites',
                filter:'Web,FullStack',
                team:4,
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
                    { name: 'Third Party Libs', used:'100', class:'2'},
                    { name: 'CMS', used:'100', class:'3'}

                ],

                examples:[{name:'Husqvarna',url:'http://www.husqvarna.com/us/home/'},
                    {name:'McCulloch Chainsaws',url:'http://www.mcculloch.com/uk/products/'},
                    {name:'Husqvarna Construction',url:'http://www.husqvarna.com/us/construction/company/proudprofessionals/'},
                    {name:'Gardena',url:'http://www.gardena.com/au/'}
                ]

            },
                {
                    name: 'UD Trucks',
                    filter:'Web,FrontEnd',
                    team:6,
                    description: 'I have also assisted in the launch for the Japanese UD Trucks website for the \' NewBiz \' team',
                    techs:[{ name: 'HTML', used:'100', class:'0'},
                        { name: 'CSS', used:'100', class:'0'},
                        { name: 'ASP.MVC', used:'100', class:'1'},
                        { name: 'JavaScript', used:'100', class:'0'},
                        { name: 'Jquery', used:'100', class:'0'},
                        { name: 'EPI Server', used:'100', class:'2'},
                        { name: 'Agile/Scrum', used:'100', class:'4'}
                    ],

                    examples:[{name:'UD Trucks',url:'http://www.udtrucks.com/'}

                    ]

                },

                {
                    name: 'Cochlear',
                    filter:'Web,FrontEnd',
                    team:2,
                    description: 'Was involved in technical workshop to evaluate the Xamarin mobile development framework as a suitable platform for Cochlear’s new companion mobile app.',
                    techs:[{ name: 'Xamarin', used:'100', class:'5'},
                        { name: 'Design Concepts', used:'100', class:'2'}
                    ],

                    examples:[{name:'Cochlear Website',url:'http://www.cochlear.com/wps/wcm/connect/intl/home/home'}

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