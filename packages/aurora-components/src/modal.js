import PropTypes from 'prop-types';
import React from 'react';
import {useClickOutsideHandler} from 'aurora-hooks';

function Modal(props) {
	const {onClose, render} = props;
	const ref = useClickOutsideHandler(onClose);
	return render(ref);
}

Modal.propTypes = {
	render: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
};

export default Modal;
