import app from 'ampersand-app';
import Router from './router';
import styles from './styles/main.styl';
import icons from 'octicons/octicons/octicons.css';
import Me from './models/me';

window.app = app; // need this to see app in the console

app.extend({
	init() {
		this.me = new Me();
		this.me.fetchInitialData();
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();