import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const InputElement = () => (
	<Layout>
		<SEO title="Input" />

		<section className="section is-large">
			<div className="container">
				<h1 className="c-heading is-large">Input</h1>
				<p>Form field used for a single line of short text.</p>
			</div>
		</section>

		<section className="section is-large">
			<div className="container is-small">
				<h1 className="c-heading is-small">Create an Account</h1>
				<p>Enter your information to get started!</p>

				<div className="field">
					<label className="c-label" htmlFor="firstName">
						First Name
					</label>
					<input
						className="input is-hollow"
						id="firstName"
						name="firstName"
						type="text"
					/>
				</div>

				<div className="field">
					<label className="c-label" htmlFor="lastName">
						Last Name
					</label>
					<input
						className="input is-hollow is-error"
						id="lastName"
						name="lastName"
						type="text"
						defaultValue="This is an invalid value."
					/>
					<div className="c-input-helper">Please use letters only.</div>
				</div>

				<div className="field">
					<label className="c-label" htmlFor="email">
						Email
					</label>
					<input
						className="input is-hollow"
						id="email"
						name="email"
						type="email"
					/>
				</div>

				<div className="field">
					<label className="c-label" htmlFor="password">
						Password
					</label>
					<input
						className="input is-hollow is-error"
						id="password"
						name="password"
						type="password"
						defaultValue="It's a secret!"
					/>
					<div className="c-input-helper">Password not ridiculous enough.</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default InputElement;
