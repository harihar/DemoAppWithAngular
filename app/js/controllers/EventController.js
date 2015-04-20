'use strict'

eventsApp.controller('EventController',
        function EventController($scope) {
            
            $scope.sortorder = 'name';
            $scope.event = {
                name: 'Angular Boot Camp',
                date: '1429108325613',
                time: '1429108325613',
                price: 25,
                location: {
                    address: 'OAR',
                    city: 'Bangalore',
                    state: 'Karnataka'
                },
                imageUrl: 'img/angularjs-logo.png',
                sessions: [
                    {
                        name: 'Directives Masterclass',
                        creatorName: 'Bob Smith',
                        duration: 1,
                        level: 'Advanced',
                        abstract: 'In this session you will learn the ins and outs of directives!',
                        upvoteCount: 0
                    },
                    {
                        name: 'Scopes for fun and profit',
                        creatorName: 'John Doe',
                        duration: 2,
                        level: 'Introductory',
                        abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
                        upvoteCount: 0
                    },
                    {
                        name: 'Well behaved Controllers',
                        creatorName: 'John Doe',
                        duration: 4,
                        level: 'Intermediate',
                        abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbours.',
                        upvoteCount: 0
                    }
                ]
            };
            
            $scope.upVoteSession = function(session) {
                session.upvoteCount++;
            };
            
            $scope.downVoteSession = function(session) {
                session.upvoteCount--;
            };
        }
);

