var portfolio = [
  {
    "id": '1',
    "name": "flo",
    "permalink": "/frontend/",
    "title": "Flo UI Frontend Framework",
    "content": "Co-authored a frontend framework designed for fast prototyping of flat web design"
  },
  {
    "id": '2',
    "name": "gethighered",
    "permalink": "http://gethighered.ca",
    "title": "Get Highered Redesign",
    "content": "A Canadian student jobs startup that needed a site redesign. I was incharge of design and front end development"
  },
  {
    "id": '3',
    "name": "line-icons",
    "permalink": "/portfolio/line-icons/",
    "title": "Line Icons",
    "content": "An icon font created for use in webapps and mobile web programming"
  },
  {
    "id": '4',
    "name": "wikipedia",
    "permalink": "/portfolio/wikipedia",
    "title": "Wikipedia Redesign",
    "content": "Concept redesign for some of wikipedia's visual assets and certain parts of their site"
  },
  {
    "id": '5',
    "name": "offthewallmedia",
    "permalink": "/portfolio/offthewallmedia/",
    "title": "OffTheWall Media Redesign",
    "content": "My process for a concept logo for OffTheWall Media"
  },
  {
    "id": '6',
    "name": "closet-theory",
    "permalink": "/portfolio/closet-theory/",
    "title": "Closet theory Redesign",
    "content": "Redesign for a boutique custom closet organizing consultancy"
  },
  {
    "id": '7',
    "name": "veloria",
    "permalink": "/portfolio/veloria/",
    "title": "Veloria Site Designs",
    "content": "Concept site designs for concert/party planning business"
  }
];


var myControllers = angular.module('myControllers', []);

myControllers.controller('PortfolioCtrl', ['$scope',
  function ($scope) {
    $scope.projects = portfolio;
  }
]);

myControllers.controller('ProjectLoadCtrl', ['$scope',
  function ($scope) {
  }
]);

myControllers.controller('AboutCtrl', ['$scope',
  function ($scope) {
  }
]);

myControllers.controller('ContactCtrl', ['$scope',
  function ($scope) {
  }
]);