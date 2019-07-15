import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const code = `<button class="c-button is-default" type="button">
  This is my button
</button>
`;

const ButtonElement = () => (
	<Layout>
		<SEO title="Button" />

		<div className="s-prose">
			<h1 className="c-heading is-large">
				Button
				<a
					className="u-color-brand u-font-size-tinier"
					href="https://github.com/LouFreyInstitute/aurora/blob/master/packages/aurora-elements/src/components/_button.scss"
				>{`</>`}</a>
			</h1>

			<p>Used to interact with page navigation, forms, or other elements.</p>

			<h2 className="c-heading is-small">Classes</h2>
			<dl>
				<dt>
					<code>c-button</code>
				</dt>
				<dd>The default setting for buttons without any styling.</dd>
			</dl>

			<h2 className="c-heading is-small">Examples</h2>

			<div className="o-layout is-horizontal">
				<div className="o-block is-large">
					<h3 className="c-heading is-tiny">Code</h3>
					<pre>
						<code>{code}</code>
					</pre>
				</div>
				<div className="o-block is-large">
					<h3 className="c-heading is-tiny">Result</h3>
					<button className="c-button is-default" type="button">
						This is my button with no wrapping!
					</button>
				</div>
			</div>
		</div>
	</Layout>
);

export default ButtonElement;
