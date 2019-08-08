/* global document */

import {useEffect} from 'react';

function useKeyDownHandler({keyName, onKeyDown}) {
	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === keyName) {
				onKeyDown(event);
			}
		}

		document.addEventListener('keydown', handleKeyDown);

		return function() {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [keyName, onKeyDown]);
}

export default useKeyDownHandler;
