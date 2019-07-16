import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function NavBar(props) {
	const {className, color, isFixed, ...passProps} = props;

	const navBarClassNames = cx(
		'o-layout',
		'c-nav-bar',
		{
			[`is-${color}`]: color,
			'is-fixed': isFixed
		},
		className
	);

	return <div className={navBarClassNames} {...passProps} />;
}

NavBar.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	isFixed: PropTypes.bool
};

NavBar.defaultProps = {
	className: '',
	color: undefined,
	isFixed: false
};

export default NavBar;
