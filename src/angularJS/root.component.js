import angular from 'angular';
import template from './root.template.html';
import { APPS } from '../../single-spa.config';

angular
	.module('angularJS-app')
	.component('root', {
		template,
		controllerAs: 'vm',
		controller() {
			const vm = this;
			const { ANGULAR_JS } = APPS;

			vm.links = {
				home: ANGULAR_JS.ROOT,
				gifs: `${ANGULAR_JS.ROOT}/gifs`
			}
		},
	});