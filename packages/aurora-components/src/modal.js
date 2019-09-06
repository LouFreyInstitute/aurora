import PropTypes from 'prop-types';
import {useRef} from 'react';
import {
	useClickOutsideHandler,
	useFocusHandler,
	useFocusTrap,
	useKeyDownHandler
} from '@lou-frey-institute/aurora-hooks';

function Modal(props) {
	const {isOpen, onClose, render} = props;

	const ref = useRef(null);

	useClickOutsideHandler({onClickOutside: onClose, ref});
	useFocusHandler({shouldFocus: isOpen, ref});
	useFocusTrap({isActive: isOpen, ref});
	useKeyDownHandler({keyName: 'Escape', onKeyDown: onClose});

	return render(ref);
}

Modal.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func.isRequired,
	render: PropTypes.func.isRequired
};

Modal.defaultProps = {
	isOpen: false
};

export default Modal;
