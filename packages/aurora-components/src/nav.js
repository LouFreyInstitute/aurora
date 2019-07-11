import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function Nav(props) {
	const {className, fill, ...passProps} = props;

	const navClassNames = cx(
		'o-layout-item',
		'c-nav',
		{
			'is-fill': fill
		},
		className
	);

	return <nav className={navClassNames} {...passProps} />;
}

Nav.propTypes = {
	className: PropTypes.string,
	fill: PropTypes.bool
};

Nav.defaultProps = {
	className: '',
	fill: false
};

export default Nav;
