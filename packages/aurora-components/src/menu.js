import PropTypes from 'prop-types';
import React from 'react';
import {
	useClickOutsideHandler,
	useFocusHandler,
	useFocusTrap,
	useKeyDownHandler
} from '@lou-frey-institute/aurora-hooks';

function Menu(props) {
	const {onClose, isOpen, render} = props;
	const ref = React.useRef(null);

	useKeyDownHandler({keyName: 'Escape', onKeyDown: onClose});
	useFocusHandler({shouldFocus: isOpen, ref});
	useFocusTrap({isActive: isOpen, ref});
	useClickOutsideHandler({onClickOutside: onClose, ref});

	return render(ref);
}

Menu.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func.isRequired,
	render: PropTypes.func.isRequired
};

Menu.defaultProps = {
	isOpen: false
};

export default Menu;
