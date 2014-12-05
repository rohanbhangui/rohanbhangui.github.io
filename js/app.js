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
 
var portfolio = [{
  id: '1',
  name: "flo",
  title: "Flo UI Frontend Framework",
  content: "Co-authored a frontend framework designed for fast prototyping of flat web design"
}, {
  id: '2',
  name: "flo",
  title: "Flo UI Frontend Framework",
  content: "Co-authored a frontend framework designed for fast prototyping of flat web design"
}, {
  id: '3',
  name: "flo",
  title: "Flo UI Frontend Framework",
  content: "Co-authored a frontend framework designed for fast prototyping of flat web design"
}, {
  id: '4',
  name: "flo",
  title: "Flo UI Frontend Framework",
  content: "Co-authored a frontend framework designed for fast prototyping of flat web design"
}, {
  id: '5',
  name: "flo",
  title: "Flo UI Frontend Framework",
  content: "Co-authored a frontend framework designed for fast prototyping of flat web design"
}, {
  id: '6',
  name: "flo",
  title: "Flo UI Frontend Framework",
  content: "Co-authored a frontend framework designed for fast prototyping of flat web design"
}, {
  id: '7',
  name: "flo",
  title: "Flo UI Frontend Framework",
  content: "Co-authored a frontend framework designed for fast prototyping of flat web design"
}, {
  id: '8',
  name: "flo",
  title: "Flo UI Frontend Framework",
  content: "Co-authored a frontend framework designed for fast prototyping of flat web design"
}];
