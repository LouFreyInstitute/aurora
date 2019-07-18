/* global document, window */

import React, {useEffect, useState} from 'react';

/**
 * Adds dark mode class to classList if on.
 * @param {String} classList classes on the html element
 * @param {Boolean} isDark dark mode
 * @return {String} classes with dark mode class
 */
function toggleDarkModeClassInClasslist(classList, isDark) {
	const classes = classList.split(' ');

	if (isDark && classes.indexOf('is-dark') === -1) {
		return [...classes, 'is-dark'].join(' ');
	}

	if (!isDark && classes.indexOf('is-dark') !== -1) {
		return classes.filter(className => className !== 'is-dark').join(' ');
	}

	return classes.join(' ');
}

function useDarkMode() {
	const [dark, setDarkMode] = useState(false);

	useEffect(() => {
		const classes = toggleDarkModeClassInClasslist(
			document.documentElement.classList.value,
			dark
		);

		document.documentElement.classList.value = classes;
	}, [dark]);

	return [dark, setDarkMode];
}

export default useDarkMode;
