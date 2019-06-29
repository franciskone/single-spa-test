import React from 'react';
import { APPS } from '../../single-spa.config';
import {navigateToUrl} from 'single-spa';

const NavBar = () => (
	<nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="navbar-start">
			{
				Object.values(APPS).map(app => (
						<a key={app.NAME}
						   className="navbar-item"
						   href={app.ROOT}
						   onClick={navigateToUrl}
						>
							{app.LINK_NAME}
						</a>
					)
				)
			}
		</div>
	</nav>
);

export default NavBar