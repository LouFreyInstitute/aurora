import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function NavItem(props) {
	const {className, Component, fill, ...passProps} = props;

	const navClassNames = cx(
		'o-layout-item',
		'c-nav-item',
		{
			'is-fill': fill
		},
		className
	);

	return <Component className={navClassNames} {...passProps} />;
}

NavItem.propTypes = {
	className: PropTypes.string,
	Component: PropTypes.node,
	fill: PropTypes.bool
};

NavItem.defaultProps = {
	className: '',
	Component: 'a',
	fill: false
};

export default NavItem;
