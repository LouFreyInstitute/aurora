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
			various products.
		</p>
	</Layout>
);

export default IndexPage;
