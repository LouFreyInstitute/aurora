import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout size="large">
		<SEO title="Home" />

		<div className="o-container u-margin-bottom+">
			<h1 className="c-heading is-large">Aurora</h1>
			<p className="s-prose">
				Aurora is a collection of CSS patterns, React components, icons, and
				color themes designed for use with{' '}
				<a
					href="http://loufreyinstitute.org"
					rel="noopener noreferrer"
					target="_blank"
				>
					Lou Frey Institute&apos;s
				</a>{' '}
				various products.
			</p>
		</div>

		<div className="o-layout is-horizontal section-group">
			<div className="o-block is-large o-layout-item is-fill section is-rounded is-brand">
				<h1 className="c-heading is-large">Aurora Core</h1>
				<p>These form the foundation of Aurora.</p>

				<h2 className="c-heading is-small">Aurora Elements</h2>
				<p>
					Written in SCSS, this is the foundation of Aurora used to build out
					user interfaces and web applications.
				</p>

				<h2 className="c-heading is-small">Aurora Themes</h2>
				<p>
					If CSS variables are enabled, themes are used to override those
					variables. Aurora was designed to allow for nested theming.
				</p>
				<h2 className="c-heading is-small">Aurora Palettes</h2>
				<p>A set of colorschemes to import into your themes.</p>
			</div>
			<div className="o-block is-large o-layout-item is-fill section is-rounded">
				<h1 className="c-heading is-large">Aurora Extras</h1>
				<p>Bonuses for your app development.</p>

				<h2 className="c-heading is-small">Aurora Components</h2>
				<p>
					React components that use <em>Elements</em> classes for styling. You
					can also supply your own <code>className</code> property.
				</p>

				<h2 className="c-heading is-small">Aurora Icons</h2>
				<p>
					Custom vector SVG icons to be used in <em>Components</em>. It should
					be possible to copy the SVG paths and inline them independently,
					though.
				</p>
				<h2 className="c-heading is-small">Aurora Avatars</h2>
				<p>
					A framework for building user avatars. A set of SVG graphics that are
					customizable by the user. Your users will enjoy creating an avatar
					that suits their personality.
				</p>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
