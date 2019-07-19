import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TextInputElement = () => (
	<Layout>
		<SEO title="Text Input" />

		<div className="s-prose">
			<h1 className="c-heading is-large">Text Input</h1>
			<p>Form field used for a single line of short text.</p>

			<div className="o-grid">
				<div className="o-grid-column">
					<label className="c-label" htmlFor="firstName">
						First Name
					</label>
					<input
						className="c-text-input"
						id="firstName"
						name="firstName"
						type="text"
					/>
				</div>
				<div className="o-grid-column">
					<div className="o-layout is-vertical c-form-field">
						<label className="c-label" htmlFor="lastName">
							Last Name
						</label>
						<input
							className="c-text-input is-error"
							id="lastName"
							name="lastName"
							type="text"
							defaultValue="This is an invalid value."
						/>
						<div className="c-input-helper is-error">
							Please use letters only.
						</div>
					</div>
				</div>
			</div>

			<label className="c-label" htmlFor="email">
				Email
			</label>
			<input className="c-text-input" id="email" name="email" type="email" />

			<label className="c-label" htmlFor="password">
				Password
			</label>
			<input
				className="c-text-input is-error"
				id="password"
				name="password"
				type="password"
				defaultValue="It's a secret!"
			/>
		</div>
	</Layout>
);

export default TextInputElement;
