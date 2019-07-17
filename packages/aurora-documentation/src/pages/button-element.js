import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ButtonElement = () => (
	<Layout>
		<SEO title="Button" />

		<div className="s-prose">
			<div className="o-layout is-horizontal">
				<h1 className="c-heading is-large u-margin-right">Button</h1>
				<a
					className="u-color-brand"
					href="https://github.com/LouFreyInstitute/aurora/blob/master/packages/aurora-elements/src/components/_button.scss"
				>
					View Code on GitHub
				</a>
			</div>

			<p>Used to interact with page navigation, forms, or other elements.</p>

			<p>
				<button className="c-button" type="button">
					Default
				</button>
				{` `}
				<button className="c-button is-brand is-large" type="button">
					Brand
				</button>
				{` `}
				<button className="c-button is-accent is-small" type="button">
					Accent
				</button>
				{` `}
				<button className="c-button is-hollow" type="button">
					Default
				</button>
				{` `}
				<button className="c-button is-brand is-hollow is-large" type="button">
					Brand
				</button>
				{` `}
				<button className="c-button is-accent is-hollow is-small" type="button">
					Accent
				</button>
			</p>

			<h2 className="c-heading is-small">Classes</h2>
			<dl>
				<dt>
					<code>c-button</code>
				</dt>
				<dd>The default setting for buttons without any styling.</dd>
			</dl>

			<h2 className="c-heading is-small">Examples</h2>

			<div className="o-grid">
				<div className="o-grid-column is-3/4">
					<h3 className="c-heading is-tiny">Code</h3>
					<pre>
						<code>{`<button class="c-button is-brand" type="button">
  This is my button
</button>`}</code>
					</pre>
				</div>
				<div className="o-grid-column is-1/4">
					<h3 className="c-heading is-tiny">Result</h3>
					<button className="c-button is-brand" type="button">
						Action Text
					</button>
				</div>
			</div>

			<div className="o-grid">
				<div className="o-grid-column is-3/4">
					<h3 className="c-heading is-tiny">Code</h3>
					<pre>
						<code>{`<button class="c-button is-light" type="button">
  This is my button
</button>`}</code>
					</pre>
				</div>
				<div className="o-grid-column is-1/4">
					<h3 className="c-heading is-tiny">Result</h3>
					<button className="c-button is-light" type="button">
						Action Text
					</button>
				</div>
			</div>

			<div className="o-grid">
				<div className="o-grid-column is-3/4">
					<h3 className="c-heading is-tiny">Code</h3>
					<pre>
						<code>{`<button class="c-button is-dark" type="button">
  This is my button
</button>`}</code>
					</pre>
				</div>
				<div className="o-grid-column is-1/4">
					<h3 className="c-heading is-tiny">Result</h3>
					<button className="c-button is-dark" type="button">
						Action Text
					</button>
				</div>
			</div>
		</div>
	</Layout>
);

export default ButtonElement;
