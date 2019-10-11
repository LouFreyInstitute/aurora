import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TagElement = () => (
	<Layout>
		<SEO title="Notification" />

		<section className="section is-large">
			<div className="container is-small">
				<h1 className="c-heading is-large">
					Tags <span className="tag">Cool</span>
				</h1>
				<p>Inline status or categorization.</p>
			</div>
		</section>

		<section className="section is-large">
			<div className="container is-small">
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
				<ul className="menu">
					<li className="list-item">
						<span>Menu Item</span> <span className="tag">Tag</span>
					</li>
					<li className="list-item">
						<span>Menu Item</span>{' '}
						<span className="tag is-invert">Inverted</span>
					</li>
					<li className="list-item">
						Menu Item <span className="tag is-brand">Brand</span>
					</li>
					<li className="list-item">
						Menu Item <span className="tag is-accent">Accent</span>
					</li>
				</ul>
			</div>
		</section>
	</Layout>
);

export default TagElement;
