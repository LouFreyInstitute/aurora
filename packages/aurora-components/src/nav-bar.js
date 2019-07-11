import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function NavBar(props) {
	const {className, fixed, ...passProps} = props;

	const navBarClassNames = cx(
		'o-layout',
		'c-nav-bar',
		{
			'is-fixed': fixed
		},
		className
	);

	return <div className={navBarClassNames} {...passProps} />;
}

NavBar.propTypes = {
	className: PropTypes.string,
	fixed: PropTypes.bool
};

NavBar.defaultProps = {
	className: '',
	fixed: false
};

export default NavBar;
