import React from 'react';
import {Button} from 'aurora-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ButtonDocumentation = () => (
	<Layout>
		<SEO title="Button" />

		<Button color="default">This is my button</Button>
	</Layout>
);

export default ButtonDocumentation;
