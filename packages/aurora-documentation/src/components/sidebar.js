import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {Link} from 'gatsby';
import {NavItem} from '@lou-frey-institute/aurora-components';

import ThemeContext from './theme-context';

function Sidebar(props) {
	const theme = useContext(ThemeContext);

	return (
		<div className={`o-block ${props.className} sidebar`}>
			<nav className="o-layout is-vertical u-margin-bottom">
				<NavItem className="c-heading is-tiny u-margin-none" Component="h1">
					Components
				</NavItem>
				<NavItem Component={Link} to="/menu-component">
					Menu
				</NavItem>
				<NavItem Component={Link} to="/modal-component">
					Modal
				</NavItem>
			</nav>

			<nav className="o-layout is-vertical u-margin-bottom">
				<NavItem className="c-heading is-tiny u-margin-none" Component="h1">
					Elements
				</NavItem>
				<NavItem Component={Link} to="/button-element">
					Button
				</NavItem>
				<NavItem Component={Link} to="/card-element">
					Card
				</NavItem>
				<NavItem Component={Link} to="/notification-element">
					Notification
				</NavItem>
				<NavItem Component={Link} to="/tag-element">
					Tag
				</NavItem>
				<NavItem Component={Link} to="/input-element">
					Input
				</NavItem>
			</nav>
		</div>
	);
}

Sidebar.propTypes = {
	className: PropTypes.string
};

Sidebar.defaultProps = {
	className: ''
};

export default Sidebar;
