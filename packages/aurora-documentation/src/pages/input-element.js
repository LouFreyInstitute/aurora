import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const InputElement = () => (
	<Layout>
		<SEO title="Input" />

		<h1 className="c-heading is-large">Input</h1>
		<p>Form field used for a single line of short text.</p>

		<div className="o-block section">
			<div className="o-container is-small" style={{margin: '2rem auto'}}>
				<h1 className="c-heading is-small">Create an Account</h1>
				<p>Enter your information to get started!</p>
				<div className="o-grid">
					<div className="o-grid-column is-1/2">
						<div className="field">
							<label className="c-label" htmlFor="firstName">
								First Name
							</label>
							<input
								className="input"
								id="firstName"
								name="firstName"
								type="text"
							/>
						</div>
					</div>
					<div className="o-grid-column is-1/2">
						<div className="field">
							<label className="c-label" htmlFor="lastName">
								Last Name
							</label>
							<input
								className="input is-error"
								id="lastName"
								name="lastName"
								type="text"
								defaultValue="This is an invalid value."
							/>
							<div className="c-input-helper">Please use letters only.</div>
						</div>
					</div>
				</div>

				<div className="field">
					<label className="c-label" htmlFor="email">
						Email
					</label>
					<input className="input" id="email" name="email" type="email" />
				</div>

				<div className="field">
					<label className="c-label" htmlFor="password">
						Password
					</label>
					<input
						className="input is-error"
						id="password"
						name="password"
						type="password"
						defaultValue="It's a secret!"
					/>
					<div className="c-input-helper">Password not ridiculous enough.</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default InputElement;
