import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {Link} from 'gatsby';
import {NavItem} from 'aurora-components';

import ThemeContext from './theme-context';

function Sidebar(props) {
	const theme = useContext(ThemeContext);

	return (
		<div
			className={`t-${theme.toLowerCase()} has-overrides is-dark o-block ${
				props.className
			}`}
			style={{
				borderRight: '1px solid #303040',
				minWidth: '16vw'
			}}
		>
			<nav className="o-layout is-vertical u-margin-bottom">
				<NavItem className="c-heading is-tiny u-margin-none" Component="h1">
					Components
				</NavItem>
				<NavItem Component={Link} to="/button-component">
					Button
				</NavItem>
			</nav>

			<nav className="o-layout is-vertical u-margin-bottom">
				<NavItem className="c-heading is-tiny u-margin-none" Component="h1">
					Elements
				</NavItem>
				<NavItem Component={Link} to="/button-element">
					.c-button
				</NavItem>
				<NavItem Component={Link} to="/card-element">
					.c-card
				</NavItem>
				<NavItem Component={Link} to="/notification-element">
					.c-notification
				</NavItem>
				<NavItem Component={Link} to="/tag-element">
					<div className="o-layout">
						<div className="o-layout-item is-fill">.c-tag</div>
						<div>
							<span className="tag is-brand">New</span>
						</div>
					</div>
				</NavItem>
				<NavItem Component={Link} to="/input-element">
					.input
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
