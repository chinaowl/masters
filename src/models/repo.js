import Model from 'ampersand-model';

export default Model.extend({
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