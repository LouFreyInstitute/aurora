import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const code = `
<button class="c-button is-default" type="button">
  This is my button
</button>
`;

const ButtonElement = () => (
	<Layout>
		<SEO title="Button" />

		<h1>Button</h1>
		<p>Used to interact with page navigation, forms, or other elements.</p>

		<h2>Classes</h2>
		<dl>
			<dt>
				<code>c-button</code>
			</dt>
			<dd>The default setting for buttons without any styling.</dd>
		</dl>

		<h2>Examples</h2>
		<h3>Code</h3>
		<pre>
			<code>{code}</code>
		</pre>

		<h3>Result</h3>
		<button className="c-button is-default" type="button">
			This is my button
		</button>
	</Layout>
);

export default ButtonElement;
