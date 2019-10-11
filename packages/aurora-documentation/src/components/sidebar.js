import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'gatsby';
import {NavItem} from '@lou-frey-institute/aurora-components';

function Sidebar(props) {
	return (
		<div className={`${props.className} sidebar`}>
			<nav className="o-layout is-aligned-top c-nav is-vertical">
				<h1 className="c-nav-item c-heading is-tiny">Components</h1>
				<Link className="c-nav-item" to="/menu-component">
					Menu
				</Link>
				<Link className="c-nav-item" to="/modal-component">
					Modal
				</Link>
			</nav>

			<nav className="o-layout is-aligned-top c-nav is-vertical">
				<h1 className="c-nav-item c-heading is-tiny">Elements</h1>
				<Link className="c-nav-item" to="/button-element">
					Button
				</Link>
				<Link className="c-nav-item" to="/card-element">
					Card
				</Link>
				<Link className="c-nav-item" to="/notification-element">
					Notification
				</Link>
				<Link className="c-nav-item" to="/tag-element">
					Tag
				</Link>
				<Link className="c-nav-item" to="/input-element">
					Input
				</Link>
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
