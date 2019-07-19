import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TextInputElement = () => (
	<Layout>
		<SEO title="Notification" />

		<div className="s-prose">
			<h1 className="c-heading is-large">Notification</h1>
			<p>Status messages used to deliver information to the user.</p>

			<h2 className="c-heading is-small">Default</h2>
			<div className="c-notification">This is a notification.</div>
			<div className="c-notification is-error">
				This is an error notification.
			</div>

			<div className="c-notification is-success">
				This is a success notification.
			</div>

			<div className="c-notification is-warning">
				This is a warning notification.
			</div>

			<h2 className="c-heading is-small">Large</h2>
			<div className="c-notification is-large">This is a notification.</div>
			<div className="c-notification is-error is-large">
				This is an error notification.
			</div>

			<div className="c-notification is-large is-success">
				This is a success notification.
			</div>

			<div className="c-notification is-large is-warning">
				This is a warning notification.
			</div>

			<h2 className="c-heading is-small">Small</h2>
			<div className="c-notification is-small">This is a notification.</div>
			<div className="c-notification is-error is-small">
				This is an error notification.
			</div>

			<div className="c-notification is-small is-success">
				This is a success notification.
			</div>

			<div className="c-notification is-small is-warning">
				This is a warning notification.
			</div>
		</div>
	</Layout>
);

export default TextInputElement;
