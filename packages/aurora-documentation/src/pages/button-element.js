import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ButtonElement = () => (
	<Layout>
		<SEO title="Button" />

		<div className="s-prose">
			<h1 className="c-heading is-large">Button</h1>

			<p>Used to interact with page navigation, forms, or other elements.</p>

			<h2 className="c-heading is-small">Default</h2>
			<p>
				<button className="c-button" type="button">
					Default
				</button>
				{` `}
				<button disabled className="c-button" type="button">
					Disabled
				</button>
				{` `}
				<button className="c-button is-brand" type="button">
					Brand
				</button>
				{` `}
				<button className="c-button is-accent" type="button">
					Accent
				</button>
			</p>

			<h2 className="c-heading is-small">Aurora Light</h2>
			<p className="t-aurora">
				<button className="c-button" type="button">
					Default
				</button>
				{` `}
				<button disabled className="c-button" type="button">
					Disabled
				</button>
				{` `}
				<button className="c-button is-brand" type="button">
					Brand
				</button>
				{` `}
				<button className="c-button is-accent" type="button">
					Accent
				</button>
			</p>

			<h2 className="c-heading is-small">Civics360 Light</h2>
			<p className="t-civics360">
				<button className="c-button" type="button">
					Default
				</button>
				{` `}
				<button disabled className="c-button" type="button">
					Disabled
				</button>
				{` `}
				<button className="c-button is-brand" type="button">
					Brand
				</button>
				{` `}
				<button className="c-button is-accent" type="button">
					Accent
				</button>
			</p>

			<h2 className="c-heading is-small">Large</h2>
			<p>
				<button className="c-button is-large" type="button">
					Default
				</button>
				{` `}
				<button className="c-button is-brand is-large" type="button">
					Brand
				</button>
				{` `}
				<button className="c-button is-accent is-large" type="button">
					Accent
				</button>
			</p>

			<h2 className="c-heading is-small">Small</h2>
			<p>
				<button className="c-button is-small" type="button">
					Default
				</button>
				{` `}
				<button className="c-button is-brand is-small" type="button">
					Brand
				</button>
				{` `}
				<button className="c-button is-accent is-small" type="button">
					Accent
				</button>
			</p>

			<h2 className="c-heading is-small">Hollow</h2>
			<p>
				<button className="c-button is-hollow" type="button">
					Default
				</button>
				{` `}
				<button className="c-button is-brand is-hollow" type="button">
					Brand
				</button>
				{` `}
				<button className="c-button is-accent is-hollow" type="button">
					Accent
				</button>
			</p>
		</div>
	</Layout>
);

export default ButtonElement;
