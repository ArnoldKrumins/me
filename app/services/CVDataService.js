
app.factory('CVDataService', function ($q) {

    var jobs = [


        {
            title: 'Lead Software Engineer',
            order: 0,
            keys: ['AngularJS', 'WEB API'],
            company: 'WideOrbit',
            location: 'Gothenburg, Sweden',
            duration: 'April 2015 to Present',
            URL: 'http://www.wideorbit.com',
            description: 'WideOrbit is a technology platform for media companies built to create value on both sides of media transactions. WideOrbit\'s core solution, WO Traffic, was introduced in 1999 to streamline workflow for customers in radio, cable, and TV. In 2015, the Programmatic advertising media exchange was introduced as an innovative approach to the buying process, increasing demand for broadcasters and efficiencies for advertisers.',
            projects: [{
                name: 'Programmatic TV Buyer and Seller Consoles',
                filter: 'Web,FullStack',
                team: 5,
                description: 'My team where responsible for adding new features to the \'Buyer Console\', \'Seller Console\' as well as maintaining \'Spotbank\', the creative management portal.',
                techs: [{name: '.NET', used: '100', class: '2'},
                    {name: 'C#', used: '100', class: '2'},
                    {name: 'WEB API', used: '100', class: '3'},
                    {name: 'REST', used: '100', class: '3'},
                    {name: 'Octopus Deploy', used: '100', class: '5'},
                    {name: 'GIT', used: '100', class: '3'},
                    {name: 'TFS Online', used: '100', class: '3'},
                    {name: 'ExtJS', used: '100', class: '3'}
                ],

                examples: [{
                    name: 'Novated Lease Calculator',
                    url: 'http://www.fleetpartners.com.au/personal/novated-lease-calculator/',
                    images:[
                        { border:true, figure:'1', location:'http://arnoldcv.azurewebsites.net/images/examples/PTV1@2x.png',description:'The Buyer Console allows agencies and advertisers to create campaigns to target specific channels and demographics.'},
                        { border:true, figure:'2', location:'http://arnoldcv.azurewebsites.net/images/examples/PTV2@2x.png',description:'Here the user can create \'Adgroups\' that can specifically target \'channels\', \'geo regions\',\'day parts\', \'user age groups\'. \'AdGroups\' are generated into bids that are passed to ADX (Ad Exchange) and compete against other \'AdGroups\' for the Broadcasters\' available \'Ad Slots\'.' },
                        { border:true, figure:'3', location:'http://arnoldcv.azurewebsites.net/images/examples/PTV3@2x.png',description:'\'Spotbank\' allows agencies and advertiser to manage the encoding and approval process by broadcasters of their video and audio assets.'},
                        { border:true, figure:'4', location:'http://arnoldcv.azurewebsites.net/images/examples/PTV4@2x.png',description:'In the \'Seller Console\' Broadcasters can manage offers (winning bids from ADX) from Advertisers/Agencies and more importantly how to maximise their revenue by scheduling these bids in the optimum way.'}
                    ]
                }
                ]
            }

            ]


        },

        {
            title: 'Senior Developer',
            order: 0,
            keys: ['AngularJS', 'WEB API'],
            company: 'FleetPartners',
            location: 'Melbourne, Australia',
            duration: 'Contract - July 2014 to Dec 2014',
            URL: 'http://www.fleetpartners.com.au/',
            description: 'FleetPartners are one of the biggest and leading corporate vehicle leasing company in Australia',
            projects: [{
                name: '\'Novated \' Lease Calculator and \' MyCar \' web portal.',
                filter: 'Web,FullStack',
                team: 1,
                description: 'I was brought in to design and develop the \'Novated \' Lease Calculator’ of the new FleetPartner’s ‘MyCar’ web portal. This is the integral part of the portal allowing users to choose and configure their new Novated vehicle. As well as developing the calculator I was also responsible for the UI design and look and feel.',
                techs: [{name: 'AngularJS', used: '100', class: '2'},
                    {name: 'Bootstrap', used: '100', class: '2'},
                    {name: 'HTML', used: '100', class: '2'},
                    {name: 'CSS3', used: '100', class: '2'},
                    {name: 'WEB API', used: '100', class: '3'},
                    {name: 'REST', used: '100', class: '3'},
                    {name: 'Agile/SCRUM', used: '100', class: '5'},
                    {name: 'Mobile', used: '100', class: '7'},
                    {name: 'Balsamiq', used: '100', class: '4'},
                    {name: 'Subversion', used: '100', class: '3'}
                ],

                examples: [{
                    name: 'Novated Lease Calculator',
                    url: 'http://www.fleetpartners.com.au/personal/novated-lease-calculator/',
                    images:[
                        { border:true, figure:'1', location:'http://arnoldcv.azurewebsites.net/images/examples/one@2x.png',description:'This is a first page of the Introduction screen. Explaining that a novated vehicle can save you money.'},
                        { border:true, figure:'2', location:'http://arnoldcv.azurewebsites.net/images/examples/two@2x.png',description:'The next screen allows the user to select a car make from the ten most popular brands, and also if they desire \' new \' or \' used \' model.'},
                        { border:true, figure:'3', location:'http://arnoldcv.azurewebsites.net/images/examples/three@2x.png',description:'Once the user has selected the vehicle make. A selection of body shapes available for the make are highlighted.'},
                        { border:true, figure:'4', location:'http://arnoldcv.azurewebsites.net/images/examples/four@2x.png',description:'After the body shape is selected, the variants are presented. This includes model,transmission and year.'},
                        { border:true, figure:'5', location:'http://arnoldcv.azurewebsites.net/images/examples/five@2x.png',description:'The next section displays images of the chosen vehicle. Addition information is collected to be used for the final calculation. This includes post code, lease term in months, and approximate annual mileage.'},
                        { border:true, figure:'6', location:'http://arnoldcv.azurewebsites.net/images/examples/six@2x.png',description:'The summary page displays the final breakdown of costs. This includes addition factors such as maintenance and fuel cost. These values can be changed and the quote can be re-calculated.'},
                        { border:true, figure:'7', location:'http://arnoldcv.azurewebsites.net/images/examples/seven@2x.png',description:'The final page provides a detailed breakdown summary of quote.'},
                    ]
                }
                ]
            }

            ]


        },

        {
            title: 'Senior Systems Developer',
            order: 0,
            keys: ['Front End', 'CSS'],
            company: 'Stendahls',
            location: 'Gothenburg, Sweden',
            duration: 'Contract - August 2012 to June 2014',
            URL: 'http://www.stendahls.se/',
            description: 'Stendahls are one of the oldest and most innovative and respected digital agencies in Gothenburg',
            projects: [{
                name: 'Husqvarna Global Websites',
                filter: 'Web,FullStack',
                team: 4,
                description: 'Stendahls main account is Husqvarna. This involved the running, maintenance and support of over twenty individual multi-lingual websites and their CMS/DAM systems. My duties involved technical analysis of customer requests and working with Art Directors on designs. Backlog planning to provide estimation and to prioritise tasks. Creating Agile Kanban walls to visualise the on-going work and ultimately doing the work. The projects typically covered 2/3 weekly sprints, followed up by a client presentation and in team retrospective. The projects generally involved creating new campaigns, new pages and enhancements to existing content. All sites are designed to be fully responsive',
                techs: [{name: 'HTML', used: '100', class: '2'},
                    {name: 'CSS', used: '100', class: '2'},
                    {name: 'ASP.NET', used: '100', class: '1'},
                    {name: 'ASP.MVC', used: '100', class: '1'},
                    {name: 'JavaScript', used: '100', class: '2'},
                    {name: 'Jquery', used: '100', class: '2'},
                    {name: 'JQuery Mobile', used: '100', class: '7'},
                    {name: 'Agile/SCRUM', used: '100', class: '5'},
                    {name: 'Responsive Design', used: '100', class: '6'},
                    {name: 'Third Party Libs', used: '100', class: '2'},
                    {name: 'CMS', used: '100', class: '3'},
                    {name: 'Subversion', used: '100', class: '3'}

                ],

                examples: [
                    {
                        name: 'Husqvarna', url: 'http://www.husqvarna.com/us/home/',

                        images:[
                            { border:true, figure:'1', location:'http://arnoldcv.azurewebsites.net/images/examples/hq@2x.png',description: 'Desktop website'},
                            { border:true, figure:'2', location:'http://arnoldcv.azurewebsites.net/images/examples/hqmobile@2x.png',description: 'Mobile website'}
                        ]

                    },
                    {
                        name: 'McCulloch Chainsaws', url: 'http://www.mcculloch.com/uk/products/',

                        images:[
                            { border:true, figure:'1', location:'http://arnoldcv.azurewebsites.net/images/examples/mcc@2x.png',description: 'Desktop website'},
                            { border:true, figure:'2', location:'http://arnoldcv.azurewebsites.net/images/examples/mccmobile@2x.png',description: 'Mobile website'}
                        ]

                    },
                    {
                        name: 'Husqvarna Construction', url: 'http://www.husqvarna.com/us/construction/company/proudprofessionals/',

                        images:[
                            { border:true, figure:'1', location:'http://arnoldcv.azurewebsites.net/images/examples/hqpp@2x.png',description: 'Desktop website'}
                        ]

                    },
                    {
                        name: 'Gardena', url: 'http://www.gardena.com/au/',

                        images:[
                            { border:true, figure:'1', location:'http://arnoldcv.azurewebsites.net/images/examples/gardena@2x.png',description: 'Desktop website'}
                        ]
                    }
                ]

            },
                {
                    name: 'UD Trucks',
                    filter: 'Web,FrontEnd',
                    team: 6,
                    description: 'I have also assisted in the launch for the Japanese UD Trucks website for the \' NewBiz \' team',
                    techs: [{name: 'HTML', used: '100', class: '0'},
                        {name: 'CSS', used: '100', class: '0'},
                        {name: 'ASP.MVC', used: '100', class: '1'},
                        {name: 'JavaScript', used: '100', class: '0'},
                        {name: 'Jquery', used: '100', class: '0'},
                        {name: 'EPI Server', used: '100', class: '2'},
                        {name: 'Agile/Scrum', used: '100', class: '4'},
                        {name: 'GIT', used: '100', class: '3'}
                    ],

                    examples: [{name: 'UD Trucks', url: 'http://www.udtrucks.com/'}

                    ]

                },

                {
                    name: 'Cochlear',
                    filter: 'Web,FrontEnd',
                    team: 2,
                    description: 'Was involved in technical workshop to evaluate the Xamarin mobile development framework as a suitable platform for Cochlear’s new companion mobile app.',
                    techs: [{name: 'Xamarin', used: '100', class: '5'},
                        {name: 'Design Concepts', used: '100', class: '2'}
                    ],

                    examples: [{name: 'Cochlear Website', url: 'http://www.cochlear.com/wps/wcm/connect/intl/home/home'}

                    ]

                }

            ]
        },

        {
            title: 'Senior Web Developer',
            order: 0,
            keys: ['Front End', 'Back End'],
            company: 'RMIT - Royal Melbourne Institute of Technology',
            location: 'Melbourne, Australia',
            duration: 'Contract - Feb 2011 to Feb 2012',
            URL: 'http://www.rmit.edu.au',
            description: 'RMIT is one of the largest and well-respected universities in Australia with over 70,000 students spread over several areas of Melbourne and Vietnam',
            projects: [{
                name: 'Apply Direct Online ',
                filter: 'Web,SQL,FullStack',
                team: 4,
                description: 'The challenge was to provide a highly available and scalable website that allowed students to apply for courses also providing back end tools for staff to process applications integrating into the existing PeopleSoft system. The site was developed on time and was regarded as a great success.',
                techs: [{name: 'C#', used: '100', class: '0'},
                    {name: 'ASP.MVC', used: '80', class: '0'},
                    {name: 'CSS', used: '80', class: '1'},
                    {name: 'HTML', used: '80', class: '1'},
                    {name: 'Fluent NHibernate', used: '80', class: '2'},
                    {name: 'Oracle 9', used: '80', class: '2'},
                    {name: 'Agile/Scrum', used: '100', class: '4'},
                    {name: 'SourceSafe', used: '100', class: '3'}
                ],

                examples: [{name: 'Apply Direct', url: 'https://apply.rmit.edu.au/Direct/Register/login.aspx'}]
            }

            ]


        },


        {
            title: 'Senior Developer',
            order: 0,
            keys: ['Front End', 'Back End'],
            company: 'AI Media Comms',
            location: 'London, United Kingdom',
            duration: 'Contract - March 2010 to Dec June 2010',
            URL: 'http://www.aimediacomms.com',
            description: 'AI Media provides software solutions that enables organisations to manage proactive PR campaigns with a comprehensive media contacts database, press release distribution and integrated media monitoring.',
            projects: [{
                name: '\'Vuelio \' Media Relations website.',
                filter: 'Web,FullStack',
                team: 1,
                description: 'The aim was to design and develop a new website geared towards the private sector. This involved taking the existing ‘Newflash’ product and overhauling the UI to incorporate Ajax, freshen up the look and feel and to refactor the existing code base.',
                techs: [{name: 'ASP.NET', used: '100', class: '0'},
                    {name: 'HTML', used: '100', class: '1'},
                    {name: 'CSS', used: '100', class: '1'},
                    {name: 'Ajax', used: '100', class: '1'},
                    {name: 'Agile/SCRUM', used: '100', class: '4'},
                    {name: 'NHibernate', used: '100', class: '2'},
                    {name: 'NUnit', used: '100', class: '0'},
                    {name: 'TDD', used: '100', class: '0'},
                    {name: 'JavaScript', used: '100', class: '1'},
                    {name: 'Subversion', used: '100', class: '3'}
                ]
            }

            ]


        },


        {
            title: 'Senior Developer',
            order: 0,
            company: 'Freedman International',
            location: 'London, United Kingdom',
            duration: 'Perm - June 2007 to Dec 2009',
            URL: 'http://www.freedmaninternational.com/',
            description: 'Freedman main goals are to provide efficient and cost-effective marketing campaigns for large corporate companies.',
            projects: [{
                name: 'Development and Support of client marketing websites - Electronic Arts, Philips, Xerox, Scania Trucks',
                filter: 'Web,FullStack',
                team: 6,
                description: 'General day to day support of client websites as well as new requirements and functionality as per the Client specification.  The work would be costed and scheduled into the software development two week release cycle. Used Agile planning meetings and daily stand-ups to monitor progress. ',
                techs: [{name: 'HTML', used: '100', class: '2'},
                    {name: 'CSS', used: '100', class: '2'},
                    {name: 'ASP.NET', used: '100', class: '0'},
                    {name: 'ASP.MVC', used: '100', class: '0'},
                    {name: 'JavaScript', used: '100', class: '2'},
                    {name: 'Jquery', used: '100', class: '2'},
                    {name: 'SQL Server', used: '100', class: '3'},
                    {name: 'Agile/SCRUM', used: '100', class: '5'},
                    {name: 'Subversion', used: '100', class: '3'}

                ]

            },
                {
                    name: 'OnTrack - Philips website warehouse integration',
                    filter: 'Winforms ,BackEnd',
                    team: 1,
                    description: 'Designed and developed this solution to create a seamless interface between the Philips Marketing website and the warehouse in Eindhoven, Holland.  The final product provided an admin application which allowed the admin team to automatically send orders to the warehouse, receive up to date stock quantities and real-time carrier tracking information, which was also integrated into the Philips website providing real-time customer tracking.',
                    techs: [{name: 'C#', used: '100', class: '0'},
                        {name: 'Winforms', used: '100', class: '0'},
                        {name: 'Web Services', used: '100', class: '3'},
                        {name: 'TDD', used: '100', class: '3'},
                        {name: 'Threading', used: '100', class: '0'},
                        {name: 'Subversion', used: '100', class: '3'}
                    ]

                },

                {
                    name: 'Scania Trucks - website warehouse integration',
                    filter: 'Web,FrontEnd',
                    team: 1,
                    description: 'Like Philips, Scania required that our website integrated into their Unix based warehousing system in Stockholm. It was my responsibility to create a software solution to the problem. This involved liaising with Scania IT, producing a specification and designing and developing the software. Due to the propriety nature of their system I devised a XML based FTP solution.',
                    techs: [{name: 'C#', used: '100', class: '0'},
                        {name: 'Winforms', used: '100', class: '0'},
                        {name: 'Web Services', used: '100', class: '3'},
                        {name: 'TDD', used: '100', class: '3'},
                        {name: 'Threading', used: '100', class: '0'},
                        {name: 'FTP', used: '100', class: '3'},
                        {name: 'Subversion', used: '100', class: '3'}
                    ]

                },

                {
                    name: 'Airline Menus - Delta, SAS, Swiss, Virgin Atlantic',
                    filter: 'Web,FrontEnd',
                    team: 1,
                    description: 'Freedman provides multi-lingual services for many of the large airlines.  One of the services is the production of multi-lingual in flight menus.  The challenge was to provide a more automated system that took the airlines flight schedules and created the menu templates and quantities per flight for the coming month. Also a value added website was created to allow the airlines to view PDF versions of the menus.',
                    techs: [{name: 'C#', used: '100', class: '0'},
                        {name: 'ASP.NET', used: '100', class: '0'},
                        {name: 'SQL Server', used: '100', class: '3'},
                        {name: 'TDD', used: '100', class: '3'},
                        {name: 'Infragistics', used: '100', class: '0'},
                        {name: 'Subversion', used: '100', class: '3'}
                    ]

                },

                {
                    name: 'Freedman Project',
                    filter: 'Web,FrontEnd',
                    team: 1,
                    description: 'Initially was brought in to develop a proof of concept web based workflow system for the company to manage and integrate their work processes. This was seen as a vital component to win new business.  The six-month project was delivered on time, but was put on hold, as the company was unsure in the direction of the product.',
                    techs: [{name: 'C#', used: '100', class: '0'},
                        {name: 'ASP.NET', used: '100', class: '0'},
                        {name: 'SQL Server', used: '100', class: '3'},
                        {name: 'TDD', used: '100', class: '3'},
                        {name: 'Infragistics', used: '100', class: '0'},
                        {name: 'Subversion', used: '100', class: '3'}
                    ]

                }

            ]
        },

        {
            title: 'Senior Developer',
            order: 2,
            company: 'Cyberview Technology',
            location: 'London, United Kingdom',
            duration: 'Perm - Nov 2000 to March 2007',
            URL: 'http://www.igt.com',
            description: 'Cyberview was a start up company that introduced the controversial Fixed Odd Betting (FOBT) server based technology to the UK. Growing for 20 employees to over 150 it was eventually bought by Barcest. ',
            projects: [{
                name: 'Online Reporting System',
                filter: 'Web,FrontEnd,SQL',
                team: 3,
                description: 'Designed, developed, managed and maintained the customer management web sites for Cyberviews highly successful Fixed Odd Betting Terminals.  The websites provided extensive reporting on performance and administration of the highly transactional terminals in real-time.',
                techs: [{name: 'Visual Basic 6', used: '100'},
                    {name: 'Classic ASP', used: '100', class: '1'},
                    {name: 'HTML', used: '100', class: '2'},
                    {name: 'CSS', used: '80', class: '2'},
                    {name: 'SQL Server 2000', used: '50', class: '3'},
                    {name: 'Subversion', used: '100', class: '3'}
                ]
            },
                {
                    name: 'Game Activation Scheduler System',
                    filter: 'Winforms,SQL,FullStack',
                    team: 2,
                    description: 'Designed and developed the UI, middle-ware server components and database for the G2E innovation award winning software. Allowing Casino Operators to maximise profits by dynamically scheduling games and content to terminals in real-time.',
                    techs: [{name: 'C# 2.0', used: '100', class: '1'},
                        {name: 'SQL Server 2000', used: '50', class: '3'},
                        {name: 'Threading', used: '30', class: '2'},
                        {name: 'Network Socket Layer', used: '20', class: '1'},
                        {name: 'Subversion', used: '100', class: '3'}
                    ]
                },
                {
                    name: 'Draw Manager UI and Reporting for Venezuelan Casino Lottery',
                    filter: 'Winforms,SQL,FullStack',
                    team: 1,
                    description: 'Designed and developed the admin UI for scheduling the draws, entering the results and calculating the winnings.  I also developed the management reports for the casino operators to view the draw schedules and results.  Cyberview developed a delivered a complete end-to-end casino based lottery system.',
                    techs: [{name: 'C# 2.0', used: '100', class: '1'},
                        {name: 'SQL Server 2000', used: '50', class: '3'},
                        {name: 'Threading', used: '30', class: '3'},
                        {name: 'Network Socket Layer', used: '20', class: '3'},
                        {name: 'Subversion', used: '100', class: '3'}
                    ]
                }
            ]


        },


        {
            title: 'Developer',
            order: 1,
            company: 'ADT Fire & Security',
            location: 'Sunbury, United Kingdom',
            duration: 'Perm - May 1999 to November 2000',
            URL: 'http://www.adt.co.uk',
            description: 'ADT is one of the biggest global brands for providing for business and domestic fire security solutions.',
            projects: [{
                name: 'M.A.T.E.S',
                filter: 'Windows,SQL,FullStack',
                team: 1,
                description: 'Brought in to complete the MATES (Mileage and Timesheet Entry System), which had fallen behind schedule. The software was completed before the deadline. I was also responsible for deploying the software and user training in 15 offices throughout the UK, with a further six months support and developing enhancements.',
                techs: [{name: 'Visual Basic 6', used: '100', class: '1'},
                    {name: 'MS Access 2.0', used: '80', class: '1'},
                    {name: 'SQL Server 2000', used: '100', class: '3'},
                    {name: 'AS400', used: '20', class: '3'},
                    {name: 'SourceSafe', used: '100', class: '3'}
                ]
            }]

        },

        {
            title: 'Developer',
            order: 0,
            company: 'ITR Telecom Ltd',
            location: 'AshyBank House, Denholm, Scotland',
            duration: 'Perm - Sept 1996 to April 1999',
            URL: '',
            description: 'ITR were a small private company that provided payphone services' +
            ' to a number of NHS hospitals throughout the UK.',
            projects: [{
                name: 'Energis Payphone Billing System',
                filter: 'Windows,SQL,FullStack',
                team: 1,
                description: 'Chosen from university by the head of the department I was initially contracted to design and develop a bespoke telephone billing system. This was extended to additional functionality as well as integrating the billing system into the Sage accounting software.',
                techs: [{name: 'Visual Basic 6', used: '100', class: '0'},
                    {name: 'MS Access 2.0', used: '80', class: '0'},
                    {name: 'SQL Server 6.5', used: '100', class: '3'},
                    {name: 'SourceSafe', used: '100', class: '3'}
                ]
            },
                {
                    name: 'Payphone Commission ',
                    filter: 'Windows,SQL,FullStack',
                    team: 1,
                    description: 'ITR had 2000+ payphones within hospitals throughout the UK.  I developed a system to allow users to input revenue for each phone and work out the commission on each phone or any logical groupings such as departments or groups of hospitals. The software also provided extensive management and invoicing reports.',
                    techs: [{name: 'Visual Basic 6', used: '100', class: '0'},
                        {name: 'MS Access 2.0', used: '80', class: '0'},
                        {name: 'SQL Server 6.5', used: '100', class: '3'},
                        {name: 'SourceSafe', used: '100', class: '3'}
                    ]
                }
            ]


        }
    ];


    return {

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