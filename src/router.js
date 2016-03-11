import Router from 'ampersand-router';
import React from 'react';
import HomePage from './pages/home';
import ReposPage from './pages/repos';

export default Router.extend({
	routes: {
		'': 'home',
		'repos': 'repos'
	},

	home() {
		React.render(<HomePage />, document.body);
	},

	repos() {
		React.render(<ReposPage />, document.body);
	}
});