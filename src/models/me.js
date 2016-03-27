import Model from 'ampersand-model';

export default Model.extend({
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

	onTokenChange() {
		window.localStorage.token = this.token;
	}
});