/* global document */

import React, {useEffect} from 'react';

const activeElement = React.createRef();

function useFocusHandler({shouldFocus, ref}) {
	useEffect(() => {
		if (shouldFocus && ref.current) {
			if (document.activeElement) {
				activeElement.current = document.activeElement;
			}

			ref.current.focus();
		}

		if (!shouldFocus && activeElement.current) {
			activeElement.current.focus();
		}
	}, [ref, shouldFocus]);
}

export default useFocusHandler;
