import Router from 'ampersand-router';
import React from 'react';
import Layout from './layout';
import HomePage from './pages/home';
import ReposPage from './pages/repos';

export default Router.extend({
	renderPage(page, opts = {layout: true}) {
		if (opts.layout) {
			page = (
				<Layout>
				  {page}
				</Layout>
			);
		}
		
		React.render(page, document.body)
	},

	routes: {
		'': 'home',
		'repos': 'repos'
	},

	home() {
		this.renderPage(<HomePage/>, {layout: false});
	},

	repos() {
		this.renderPage(<ReposPage/>);
	}
});