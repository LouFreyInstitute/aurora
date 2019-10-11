import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TextInputElement = () => (
	<Layout>
		<SEO title="Notification" />

		<section className="section s-prose">
			<a href="#">Aurora</a>
			{' / '}
			<span>Elements</span>
			{' / '}
			<span>Notification</span>
		</section>

		<section className="section is-large">
			<div className="container">
				<h1 className="c-heading is-large">Notification</h1>
				<p>Status messages used to deliver information to the user.</p>
			</div>
		</section>

		<section className="section is-large">
			<div className="container is-small">
				<h2 className="c-heading is-small">Default</h2>
				<div className="notification">This is a notification.</div>
				<div className="notification is-error">
					This is an error notification.
				</div>

				<div className="notification is-info">
					This is an information notification.
				</div>

				<div className="notification is-success">
					This is a success notification.
				</div>

				<div className="notification is-warning">
					This is a warning notification.
				</div>
			</div>
		</section>

		<section className="section is-large">
			<h2 className="c-heading is-small">Large</h2>
			<div className="notification is-large">This is a notification.</div>
			<div className="notification is-error is-large">
				This is an error notification.
			</div>

			<div className="notification is-large is-info">
				This is a info notification.
			</div>

			<div className="notification is-large is-success">
				This is a success notification.
			</div>

			<div className="notification is-large is-warning">
				This is a warning notification.
			</div>

			<h2 className="c-heading is-small">Small</h2>
			<div className="notification is-small">This is a notification.</div>
			<div className="notification is-error is-small">
				This is an error notification.
			</div>

			<div className="notification is-small is-info">
				This is a success notification.
			</div>

			<div className="notification is-small is-success">
				This is a success notification.
			</div>

			<div className="notification is-small is-warning">
				This is a warning notification.
			</div>

			<h2 className="c-heading is-small">Hollow</h2>
			<div className="notification is-hollow">This is a notification.</div>
			<div className="notification is-error is-hollow">
				This is an error notification.
			</div>

			<div className="notification is-info is-hollow">
				This is a success notification.
			</div>

			<div className="notification is-success is-hollow">
				This is a success notification.
			</div>

			<div className="notification is-warning is-hollow">
				This is a warning notification.
			</div>
		</section>
	</Layout>
);

export default TextInputElement;
