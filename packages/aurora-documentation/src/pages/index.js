import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<h1>Aurora</h1>
		<p>
			Aurora is a collection of CSS patterns, React components, icons, and color
			themes designed for use with{' '}
			<a
				href="http://loufreyinstitute.org"
				rel="noopener noreferrer"
				target="_blank"
			>
				Lou Frey Institute&apos;s
			</a>{' '}
			various products. It was born out of exploration of various frameworks and
			technologies, which always seemed to be over-engineered or bloated, and a
			want to be as minimalist as possible. Chances are, if you use this
			product, more code and features will be removed than added.
		</p>

		<h2>Aurora Components</h2>
		<p>
			React components that use <em>Elements</em> classes for styling. It is
			possible to use without <em>Elements</em>, but you would need to look into
			the source for the classnames used. It&apos;d be easier to use a custom{' '}
			<em>Theme</em>. You can also supply custom custom classes to any
			component.
		</p>

		<h2>Aurora Elements</h2>
		<p>
			CSS classes written in SCSS that are the foundation of Aurora.{' '}
			<em>Elements</em> can be used independently by just importing the
			stylesheet.
		</p>

		<h2>Aurora Icons</h2>
		<p>
			Custom vector SVG icons to be used in <em>Components</em>. It should be
			possible to copy the SVG paths and inline them independently, though.
		</p>

		<h2>Aurora Palettes</h2>
		<p>
			Color schemes that can be consumed by <em>Themes</em>. They can be
			imported separately into your projects if you just want to use the colors.
		</p>

		<h2>Aurora Themes</h2>
		<p>
			<em>Themes</em> override the variables found in <em>Elements</em>. Themes
			are only designed to be imported before <em>Elements</em> in order to
			customize the design of Aurora.
		</p>
	</Layout>
);

export default IndexPage;
