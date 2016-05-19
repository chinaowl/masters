import app from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import qs from 'qs';
import xhr from 'xhr';
import Layout from './layout';
import HomePage from './pages/home';
import ReposPage from './pages/repos';
import RepoDetail from './pages/repo-detail';

export default Router.extend({
	renderPage(page, opts = {layout: true}) {
		if (opts.layout) {
			page = (
				<Layout me={app.me}>
				  {page}
				</Layout>
			);
		}
		
		React.render(page, document.body)
	},

	routes: {
		'': 'home',
		'repos': 'repos',
		'login': 'login',
		'auth/callback?:query': 'authCallback', // query will get passed to authCallback
		'logout': 'logout',
		'repo/:owner/:name': 'repoDetail'
	},

	home() {
		this.renderPage(<HomePage/>, {layout: false});
	},

	repos() {
		this.renderPage(<ReposPage repos={app.me.repos}/>);
	},

	repoDetail(owner, name) {
		const model = app.me.repos.getByFullName(owner + '/' + name);
		this.renderPage(<RepoDetail repo={model} labels={model.labels}/>);
	},

	login() {
		window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
			client_id: 'd0bb665237ed45ba1c04', // public information, secret proves you are this app
			redirect_uri: window.location.origin + '/auth/callback', // dynamic, don't need to change when going to prod
			scope: 'user,repo'
		}); // qs = query string library
	},

	authCallback(query) {
		query = qs.parse(query);

		xhr({ // xhr = request library
			url: 'https://chinaowl-labelr-localhost.herokuapp.com/authenticate/' + query.code,
			json: true
		}, (err, req, body) => {
			app.me.token = body.token;
			this.redirectTo('/repos'); // prevents /auth/callback from being part of browser history
		});
	},

	logout() {
		window.localStorage.clear();
		window.location = '/';
	}
});