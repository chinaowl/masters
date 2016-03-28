import Model from 'ampersand-model';
import githubAuthMixin from '../helpers/github-auth-mixin';
import RepoCollection from './repo-collection'

export default Model.extend(githubAuthMixin, {
	url: 'https://api.github.com/user',

	initialize() { // will run once whenever an instance is created
		this.token = window.localStorage.token;

		this.on('change:token', this.onTokenChange);
	},

	props: { // things you expect from a server and want to persist to server
		id: 'number',
		login: 'string',
		avatar_url: 'string'
	},

	session: { // stuff to keep in the browser
		token: 'string'
	},

	collections: {
		repos: RepoCollection
	},

	onTokenChange() {
		window.localStorage.token = this.token;
		this.fetchInitialData();
	},

	fetchInitialData() {
		if (this.token) {
			this.fetch();
			this.repos.fetch(); // note: NOT this.collections.repos.fetch()
		}
	}
});