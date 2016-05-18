import Model from 'ampersand-model';
import githubMixin from '../helpers/github-auth-mixin';

export default Model.extend(githubMixin, {
	url() {
		return 'https://api.github.com/repos/' + this.full_name;
	},

	props: {
		id: 'number',
		name: 'string',
		full_name: 'string'
	},

	derived: {
		appUrl: {
			deps: ['full_name'],
			fn () { // this function computes the app url which depends on full_name
				return '/repo/' + this.full_name;
			}
		}
	}
});