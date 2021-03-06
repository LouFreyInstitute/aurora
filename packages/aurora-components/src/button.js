import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function Button(props) {
	const {className, color, ...passProps} = props;

	const buttonClassNames = cx(
		'c-button',
		{
			[`is-${color}`]: color
		},
		className
	);

	return <button className={buttonClassNames} {...passProps} type="button" />;
}

Button.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string
};

Button.defaultProps = {
	className: '',
	color: undefined
};

export default Button;
