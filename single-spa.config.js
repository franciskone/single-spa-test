import { registerApplication, start } from 'single-spa'

registerApplication(
	// Name of our single-spa application
	'home',
	// loadingFunction
	() => import('./src/home/home.app.js'),
	// activityFunction
	(location) => location.pathname === "" ||
	location.pathname === "/" ||
	location.pathname.startsWith('/home')
);

registerApplication(
	// Name of our single-spa application
	'starWars',
	// loadingFunction
	() => import('./src/starWars/starWars.app.js'),
	// activityFunction
	(location) => location.pathname === "/star-wars" ||
		location.pathname.startsWith('/star-wars')
);

start();