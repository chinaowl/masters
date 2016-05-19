import Model from 'ampersand-model';
import githubAuthMixin from '../helpers/github-auth-mixin';

export default Model.extend(githubAuthMixin, {
	props: {
		name: 'string',
		color: 'string'
	}
});