var $$ = Dom7;

var base_path = ''; // root path
var app_path = base_path + 'server/'; // php folder path
var asset_path = app_path + 'assets/'; // asset folder path

var app = new Framework7({
	name: '', // app name
	id: '', // package name
	root: '#app',
	theme: 'md',
	cache: false,
	panel: { swipe: 'left' },
	routes: [
	  {
	  	path: '/index/',
	  	url: 'index.html'
	  },
	  {
	  	path: '/login/',
	  	url: 'pages/login.html',
	  	on: {
	  	  pageInit: function(e, page) {

	  		app.panel.disableSwipe();

	  	  }
	  	}
	  },
	  {
	  	path: '/register/',
	  	url: 'pages/register.html',
	  	on: {
	  	  pageInit: function(e, page) {

	  	  }
	  	}
	  },
	  {
	  	path: '/home/',
	  	url: 'pages/home.html',
	  	on: {
	  	  pageInit: function(e, page) {
	  	  	
	  	  }
	  	}
	  }
	]
});

var mainView = app.views.create('.view-main', { url: '/login/' });