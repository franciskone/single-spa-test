import { registerApplication, start } from 'single-spa';
import {loadEmberApp} from 'single-spa-ember';

export const APPS = {
	HOME: {
		NAME: 'home',
		ROOT: '/home',
		LINK_NAME: 'Home',
	},
	STAR_WARS: {
		NAME: 'starWars',
		ROOT: '/star-wars',
		LINK_NAME: 'Star Wars',
	},
	ANGULAR_JS: {
		NAME: 'angularJS',
		ROOT: '/angularJS',
		LINK_NAME: 'Angular Js',
	},
	EMBER: {
		NAME: 'ember-app',
		ROOT: '/ember',
		LINK_NAME: 'Ember App',
	},
};

const pathPrefix = prefix => location => location.pathname.startsWith(prefix);

registerApplication(
	'navBar',
	() => import('./src/navBar/navBar.app.js').then(module => module.navBar),
	() => true
);

registerApplication(
	APPS.HOME.NAME,
	() => import('./src/home/home.app.js'),
	(location) => location.pathname === "" ||
	location.pathname === "/" ||
	location.pathname.startsWith(APPS.HOME.ROOT)
);

registerApplication(
	APPS.STAR_WARS.NAME,
	() => import('./src/starWars/starWars.app.js'),
	pathPrefix(APPS.STAR_WARS.ROOT)
);

registerApplication(
	APPS.ANGULAR_JS.NAME,
	() => import ('./src/angularJS/angularJS.app.js'),
	pathPrefix(APPS.ANGULAR_JS.ROOT)
);

registerApplication(
	APPS.EMBER.NAME,
	() => loadEmberApp(
		APPS.EMBER.NAME,
		'/dist/ember-app/assets/ember-app-89d7846b60e1aad09167053e9f64c485.js',
		'/dist/ember-app/assets/vendor-a665f80dbe5339ba5085e617191143c0.js'
	),
	location => location.hash.startsWith('ember')
);

start();