import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CardElement = () => (
	<Layout>
		<SEO title="Button" />

		<div className="s-prose">
			<h1 className="c-heading is-large">Card</h1>
			<p>Displays lesser information in a controlled format.</p>

			<h2 className="c-heading is-small">Default</h2>
			<div className="o-grid">
				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card">
						<div className="c-card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/300/300"
								width="300px"
							/>
						</div>
						<div className="c-card-body">
							<p className="u-margin-bottom-">This is a card.</p>
							<button
								className="c-button is-inverted is-small u-margin-bottom-"
								type="button"
							>
								Action
							</button>
						</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-brand">
						<div className="c-card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/310/300"
								width="300px"
							/>
						</div>
						<div className="c-card-body">This is a card with brand colors.</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-accent">
						<div className="c-card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/320/300"
								width="300px"
							/>
						</div>
						<div className="c-card-body">
							This is a card with accent colors.
						</div>
					</div>
				</div>
			</div>

			<h2 className="c-heading is-small">Inverted</h2>
			<div className="o-grid">
				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-inverted">
						<div className="c-card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/300/300"
								width="300px"
							/>
						</div>
						<div className="c-card-body">
							<p className="u-margin-bottom-">This is an inverted card.</p>
							<button
								className="c-button is-small u-margin-bottom-"
								type="button"
							>
								Action
							</button>
						</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-brand is-inverted">
						<div className="c-card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/310/300"
								width="300px"
							/>
						</div>
						<div className="c-card-body">
							This is an inverted card with brand colors.
						</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-accent is-inverted">
						<div className="c-card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/320/300"
								width="300px"
							/>
						</div>
						<div className="c-card-body">
							This is an inverted card with accent colors.
						</div>
					</div>
				</div>
			</div>

			<h2 className="c-heading is-small">Aurora Light</h2>
			<div className="t-aurora o-grid">
				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card">
						<div className="c-card-body">This is a card.</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-brand">
						<div className="c-card-body">This is a card with brand colors.</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-accent">
						<div className="c-card-body">
							This is a card with accent colors.
						</div>
					</div>
				</div>
			</div>

			<h2 className="c-heading is-small">Civics360 (Nested Themes)</h2>
			<div className="t-civics360 o-grid">
				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card">
						<div className="c-card-body">This is a card.</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-brand">
						<div className="c-card-body">This is a card with brand colors.</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-accent">
						<div className="c-card-body">
							This is a card with accent colors.
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default CardElement;
