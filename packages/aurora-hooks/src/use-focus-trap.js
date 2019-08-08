/* global document */

import {useEffect} from 'react';

const query = [
	'a[href]:not([tabindex="-1"])',
	'area[href]:not([tabindex="-1"])',
	'input:not([disabled]):not([tabindex="-1"])',
	'select:not([disabled]):not([tabindex="-1"])',
	'textarea:not([disabled]):not([tabindex="-1"])',
	'button:not([disabled]):not([tabindex="-1"])',
	'iframe:not([tabindex="-1"])',
	'object:not([tabindex="-1"])',
	'embed:not([tabindex="-1"])',
	'[tabindex]:not([tabindex="-1"])',
	'[contenteditable]:not([tabindex="-1"])'
];

function useFocusTrap({isActive, ref}) {
	useEffect(() => {
		function getFocusableElements(node) {
			/* eslint-disable */
			return node ? Array.from(node.querySelectorAll(query)) : [];
			/* eslint-enable */
		}

		function handleKeyDown(event) {
			if (event.key === 'Tab') {
				const focusableElements = getFocusableElements(ref.current);

				if (focusableElements.length > 0) {
					let activeElement = focusableElements.indexOf(document.activeElement);
					const currentElement = activeElement;

					do {
						if (event.shiftKey) {
							activeElement =
								activeElement === 0
									? focusableElements.length - 1
									: activeElement - 1;
						} else {
							activeElement =
								activeElement === focusableElements.length - 1
									? (activeElement = 0)
									: activeElement + 1;
						}

						focusableElements[activeElement].focus();

						if (activeElement === currentElement) break;
					} while (document.activeElement !== focusableElements[activeElement]);

					event.preventDefault();
				}
			}
		}

		if (isActive && ref.current) {
			document.addEventListener('keydown', handleKeyDown);

			return function() {
				document.removeEventListener('keydown', handleKeyDown);
			};
		}

		return function() {};
	}, [isActive, ref]);
}

export default useFocusTrap;
