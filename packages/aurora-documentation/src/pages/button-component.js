import React from 'react';
import {Button} from 'aurora-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const code = `
<Button color="default">This is my button</Button>
`;

const ButtonComponent = () => (
	<Layout>
		<SEO title="Button" />

		<pre>
			<code>{code}</code>
		</pre>

		<Button color="default">This is my button</Button>
	</Layout>
);

export default ButtonComponent;
