/* global document, window */

import React, {useEffect, useState} from 'react';

/**
 * Replaces the current theme class with a new one.
 * @param {String} classList classes on the html element
 * @param {String} theme current theme class
 * @param {String} newTheme new theme class
 * @return {String} classes with theme class replaced
 */
function replaceThemeInClassList(classList, theme, newTheme) {
	if (classList === '') {
		return newTheme;
	}

	const classes = classList.split(' ');
	return [
		...classes.splice(0, classes.indexOf(theme)),
		newTheme,
		...classes.splice(classes.indexOf(theme) + 1)
	].join(' ');
}

function useTheme() {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== 'undefined') {
			return window.localStorage.getItem('theme') || 'Aurora';
		}

		return 'Aurora';
	});

	useEffect(() => {
		const oldTheme = window.localStorage.getItem('theme') || 'Aurora';
		window.localStorage.setItem('theme', theme);

		const classes = replaceThemeInClassList(
			document.documentElement.classList.value,
			`t-${oldTheme.toLowerCase()}`,
			`t-${theme.toLowerCase()}`
		);

		document.documentElement.classList.value = classes;
	}, [theme]);

	return [theme, setTheme];
}

export default useTheme;
