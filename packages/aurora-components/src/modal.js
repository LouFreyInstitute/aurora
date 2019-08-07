import PropTypes from 'prop-types';
import React, {useRef} from 'react';

function Modal(props) {
	const {children, onClose} = props;
	const overlayRef = useRef(null);

	return (
		<div
			ref={overlayRef}
			className="overlay"
			onClick={event => event.target === overlayRef.current && onClose(event)}
		>
			{children({close: onClose})}
		</div>
	);
}

Modal.propTypes = {
	children: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
};

export default Modal;
