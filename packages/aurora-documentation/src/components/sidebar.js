import React from 'react';
import {Link} from 'gatsby';
import {NavItem} from 'aurora-components';

function Sidebar() {
	return (
		<div className="o-block is-large">
			<nav className="o-layout is-vertical u-margin-bottom+">
				<NavItem className="c-heading is-tiny u-margin-none" Component="h4">
					Components
				</NavItem>
				<NavItem Component={Link} to="/button-component">
					Button
				</NavItem>
				<NavItem Component={Link} to="/nav">
					Nav
				</NavItem>
				<NavItem Component={Link} to="/nav-bar">
					NavBar
				</NavItem>
			</nav>

			<nav className="o-layout is-vertical u-margin-bottom+">
				<NavItem className="c-heading is-tiny u-margin-none" Component="h4">
					Elements
				</NavItem>
				<NavItem Component={Link} to="/button-element">
					.c-button
				</NavItem>
				<NavItem Component={Link} to="/c-nav">
					.c-nav
				</NavItem>
				<NavItem Component={Link} to="/c-nav-bar">
					.c-nav-bar
				</NavItem>
				<NavItem Component={Link} to="/c-nav-item">
					.c-nav-item
				</NavItem>
				<NavItem Component={Link} to="/layout-object">
					.o-layout
				</NavItem>
			</nav>

			<nav className="o-layout is-vertical">
				<NavItem className="c-heading is-tiny u-margin-none" Component="h4">
					Themes
				</NavItem>
				<NavItem Component={Link} to="/aurora-theme">
					Aurora
				</NavItem>
				<NavItem Component={Link} to="/civics360-theme">
					Civics360
				</NavItem>
				<NavItem Component={Link} to="/citizen-theme">
					Citizen
				</NavItem>
				<NavItem Component={Link} to="/institute-theme">
					Institute
				</NavItem>
			</nav>
		</div>
	);
}

export default Sidebar;
