import Collection from 'ampersand-rest-collection';
import Label from './label';
import githubAuthMixin from '../helpers/github-auth-mixin';

export default Collection.extend(githubAuthMixin, {
	url() {
		return this.parent.url() + '/labels';
	},

	model: Label
});