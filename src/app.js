import app from 'ampersand-app';
import Router from './router';
import styles from './styles/main.styl';

window.app = app; // need this to see app in the console

app.extend({
	init() {
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();