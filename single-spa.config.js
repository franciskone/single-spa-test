import { registerApplication, start } from 'single-spa'

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

start();