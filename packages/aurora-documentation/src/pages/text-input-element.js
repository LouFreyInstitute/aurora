import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TextInputElement = () => (
	<Layout>
		<SEO title="Text Input" />

		<div className="s-prose">
			<h1 className="c-heading is-large">Text Input</h1>
			<p>Form field used for a single line of short text.</p>

			<input className="c-text-input" name="first" type="text" />
			<input className="c-text-input is-error" name="last" type="text" />
		</div>
	</Layout>
);

export default TextInputElement;
