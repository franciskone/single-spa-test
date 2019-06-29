import angular from 'angular';
import './root.component.js';
import './gifs.component.js';
import { APPS } from '../../single-spa.config';

angular
	.module('angularJS-app')
	.config(($stateProvider, $locationProvider) => {

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false,
		});

		$stateProvider
			.state('root', {
				url: APPS.ANGULAR_JS.ROOT,
				template: '<root />',
			})

			.state('root.gifs', {
				url: '/gifs',
				template: '<gifs />',
			})
	});