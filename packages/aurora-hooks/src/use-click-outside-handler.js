/* global document */

import {useEffect} from 'react';

/**
 * Calls a function when clicking outside of the given ref.
 * @param {Function} onClickOutside function called when clicking outside ref
 */
function useClickOutsideHandler({onClickOutside, ref}) {
	useEffect(() => {
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

		if (ref.current) {
			document.addEventListener('click', handleClickOutside);
			document.addEventListener('touchend', handleClickOutside);

			return function() {
				document.removeEventListener('click', handleClickOutside);
				document.removeEventListener('touchend', handleClickOutside);
			};
		}

		return function() {};
	}, [onClickOutside, ref]);
}

export default useClickOutsideHandler;
