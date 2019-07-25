import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TagElement = () => (
	<Layout>
		<SEO title="Notification" />

		<div className="s-prose">
			<h1 className="c-heading is-large">
				Tags <span className="tag">Cool</span>
			</h1>
			<p>Inline status or categorization.</p>

			<h2 className="c-heading is-small">
				Default <span className="tag">Cool</span>
			</h2>
			<p>
				<span className="tag">Tag</span>
				{` `}
				<span className="tag is-brand">Brand</span>
				{` `}
				<span className="tag is-accent">Accent</span>
			</p>

			<h2 className="c-heading is-small">Menus</h2>
			<ul>
				<li>
					<span>Menu Item</span> <span className="tag">Tag</span>
				</li>
				<li>
					Menu Item <span className="tag is-brand">Brand</span>
				</li>
				<li>
					Menu Item <span className="tag is-accent">Accent</span>
				</li>
			</ul>
		</div>
	</Layout>
);

export default TagElement;
