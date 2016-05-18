import Model from 'ampersand-model';
import githubAuthMixin from '../helpers/github-auth-mixin';

export default Model.extend(githubAuthMixin, {
	url() {
		return 'https://api.github.com/repos/' + this.full_name;
	},

	props: {
		name: 'string',
		color: 'string'
	}
});