import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const InputElement = () => (
	<Layout>
		<SEO title="Input" />

		<div className="s-prose">
			<h1 className="c-heading is-large">Input</h1>
			<p>Form field used for a single line of short text.</p>

			<div className="o-block is-large c-card is-inverted">
				<div className="o-grid">
					<div className="o-grid-column">
						<div className="field">
							<label className="c-label" htmlFor="firstName">
								First Name
							</label>
							<input
								className="input is-inverted"
								id="firstName"
								name="firstName"
								type="text"
							/>
						</div>
					</div>
					<div className="o-grid-column">
						<div className="o-layout is-vertical c-form-field">
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
				</div>

				<div className="field">
					<label className="c-label" htmlFor="email">
						Email
					</label>
					<input
						className="input is-inverted"
						id="email"
						name="email"
						type="email"
					/>
				</div>

				<div className="field">
					<label className="c-label" htmlFor="email">
						Inverted
					</label>
					<input
						className="input is-inverted"
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
