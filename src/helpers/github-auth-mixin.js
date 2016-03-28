import app from 'ampersand-app';

export default {
	ajaxConfig() { // used by app.me.fetch()
		return {
			headers: {
				Authorization: 'token ' + app.me.token
			}
		};
	}
};