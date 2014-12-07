App = Ember.Application.create();
 
App.Router.map(function() {
  this.resource("about");
  this.resource("portfolio");
  this.resource("contact");
});
 
App.PortfolioRoute = Ember.Route.extend({
  model: function() {
    return portfolio;
  }
});

App.Project = Ember.Object.extend({
  image: function() {
    return '/portfolio/' + this.get('name') + '/' + this.get('name') + '_preview.png';
  }.property('name')
});
 
var portfolio = [
  App.Project.create({
    id: '1',
    name: "flo",
    permalink: "/frontend/",
    title: "Flo UI Frontend Framework",
    content: "Co-authored a frontend framework designed for fast prototyping of flat web design"
  }),
  App.Project.create({
    id: '2',
    name: "gethighered",
    permalink: "http://gethighered.ca",
    title: "Get Highered Redesign",
    content: "A Canadian student jobs startup that needed a site redesign. I was incharge of design and front end development"
  }),
  App.Project.create({
    id: '3',
    name: "line-icons",
    permalink: "/portfolio/line-icons/",
    title: "Line Icons",
    content: "An icon font created for use in webapps and mobile web programming"
  }),
  App.Project.create({
    id: '4',
    name: "wikipedia",
    permalink: "/portfolio/wikipedia",
    title: "Wikipedia Redesign",
    content: "Concept redesign for some of wikipedia's visual assets and certain parts of their site"
  }),
  App.Project.create({
    id: '5',
    name: "offthewallmedia",
    permalink: "/portfolio/offthewallmedia/",
    title: "OffTheWall Media Redesign",
    content: "My process for a concept logo for OffTheWall Media"
  }),
  App.Project.create({
    id: '6',
    name: "closet-theory",
    permalink: "/portfolio/closet-theory/",
    title: "Closet theory Redesign",
    content: "Redesign for a boutique custom closet organizing consultancy"
  }),
  App.Project.create({
    id: '7',
    name: "veloria",
    permalink: "/portfolio/veloria/",
    title: "Veloria Site Designs",
    content: "Concept site designs for concert/party planning business"
  })
];
