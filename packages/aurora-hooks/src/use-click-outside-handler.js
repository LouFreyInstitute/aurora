/* global document */

import {useEffect, useRef} from 'react';

/**
 * Calls a function when clicking outside of the given ref.
 * @param {Function} onClickOutside function called when clicking outside ref
 * @returns {Object} ref to node which can be clicked
 */
function useClickOutsideHandler(onClickOutside) {
	const ref = useRef(null);

	/**
	 * Function that determines if the click was outside of the current ref.
	 * @param {Object} event event when a click is registered
	 */
	function handleClickOutside(event) {
		const isOutside = !ref.current.contains(event.target);

		if (isOutside) {
			onClickOutside();
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('touchend', handleClickOutside);

		return function() {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('touchend', handleClickOutside);
		};
	});

	return ref;
}

export default useClickOutsideHandler;
