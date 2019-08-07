import PropTypes from 'prop-types';
import React from 'react';
import {useClickOutsideHandler} from 'aurora-hooks';

function Menu(props) {
	const {onClose, render} = props;
	const ref = useClickOutsideHandler(onClose);
	return render(ref);
}

Menu.propTypes = {
	render: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
};

export default Menu;
