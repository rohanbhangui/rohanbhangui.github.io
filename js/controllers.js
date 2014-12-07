var portfolio = [
  {
    "id": '1',
    "name": "flo",
    "colour": "#25b799",
    "permalink": "/frontend/",
    "target": "_blank",
    "title": "Flo UI Frontend Framework",
    "content": "Co-authored a frontend framework designed for fast prototyping of flat web design"
  },
  {
    "id": '2',
    "name": "gethighered",
    "colour": "#e9e9e8",
    "permalink": "http://gethighered.ca",
    "target": "_blank",
    "title": "Get Highered",
    "content": "A redesign project for a Canadian student jobs startup."
  },
  {
    "id": '3',
    "name": "line-icons",
    "colour": "#52ba6e",
    "permalink": "/portfolio/line-icons/",
    "target": "_self",
    "title": "Line Icons",
    "content": "An icon font created for use in webapps and mobile web programming"
  },
  {
    "id": '4',
    "name": "wikipedia",
    "colour": "#515151",
    "permalink": "/portfolio/wikipedia",
    "target": "_self",
    "title": "Wikipedia",
    "content": "Concept redesign for some of wikipedia's visual assets and certain parts of their site"
  },
  {
    "id": '5',
    "name": "offthewallmedia",
    "colour": "#c32026",
    "permalink": "/portfolio/offthewallmedia/",
    "target": "_self",
    "title": "OffTheWall Media Redesign",
    "content": "My process for a concept logo for OffTheWall Media"
  },
  {
    "id": '6',
    "name": "closet-theory",
    "colour": "#25b799",
    "permalink": "/portfolio/closet-theory/",
    "target": "_self",
    "title": "Closet Theory Redesign",
    "content": "Redesign for a boutique custom closet organizing consultancy"
  },
  {
    "id": '7',
    "name": "veloria",
    "colour": "#25b799",
    "permalink": "/portfolio/veloria/",
    "target": "_self",
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