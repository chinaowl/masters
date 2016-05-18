import Model from 'ampersand-model';
import githubAuthMixin from '../helpers/github-auth-mixin';
import LabelCollection from './label-collection';

export default Model.extend(githubAuthMixin, {
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
	},

	collections: {
		labels: LabelCollection
	},

	fetch() {
		Model.prototype.fetch.apply(this, arguments);
		this.labels.fetch();
	}
});