import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function NavItem(props) {
	const {className, Component, ...passProps} = props;

	const navClassNames = cx('c-nav-item', className);

	return <Component className={navClassNames} {...passProps} />;
}

NavItem.propTypes = {
	className: PropTypes.string,
	Component: PropTypes.elementType
};

NavItem.defaultProps = {
	className: '',
	Component: 'a'
};

export default NavItem;
