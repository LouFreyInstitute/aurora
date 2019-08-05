import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CardElement = () => (
	<Layout>
		<SEO title="Button" />

		<h1 className="c-heading is-large">Card</h1>
		<p>Displays lesser information in a controlled format.</p>

		<div className="o-block is-large section">
			<h2 className="c-heading is-small">Default</h2>
			<p>Basic cards with an image media and color variants.</p>

			<div className="o-grid">
				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card">
						<div className="c-card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/320/240"
								width="300px"
							/>
						</div>
						<div className="c-card-body">
							<p className="u-margin-bottom-">This is a card.</p>
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
					<div className="o-layout is-vertical c-card is-brand">
						<div className="c-card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/320/240"
								width="300px"
							/>
						</div>
						<div className="c-card-body">
							<p className="u-margin-bottom-">
								This is a card with brand colors.
							</p>
							<button
								className="c-button is-brand is-hollow is-inverted is-small u-margin-bottom-"
								type="button"
							>
								Action
							</button>
						</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical c-card is-accent">
						<div className="c-card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/320/240"
								width="300px"
							/>
						</div>
						<div className="c-card-body">
							<p className="u-margin-bottom-">
								This is a card with accent colors.
							</p>
							<button
								className="c-button is-accent is-hollow is-inverted is-small u-margin-bottom-"
								type="button"
							>
								Action
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default CardElement;
