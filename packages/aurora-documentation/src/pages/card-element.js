import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CardElement = () => (
	<Layout>
		<SEO title="Button" />

		<section className="section s-prose">
			<a href="#">Aurora</a>
			{' / '}
			<span>Elements</span>
			{' / '}
			<span>Button</span>
		</section>

		<section className="section is-large">
			<div className="container">
				<h1 className="c-heading is-large">Card</h1>
				<p>Displays lesser information in a controlled format.</p>
			</div>
		</section>

		<section className="section is-large">
			<div className="o-grid">
				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical card">
						<div className="card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/320/240"
								width="300px"
							/>
						</div>
						<div className="card-body">
							<p className="u-margin-bottom-">This is a card.</p>
							<button
								className="button is-small has-outline is-hollow"
								type="button"
							>
								Action
							</button>
						</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical card is-brand">
						<div className="card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/320/240"
								width="300px"
							/>
						</div>
						<div className="card-body">
							<p className="u-margin-bottom-">
								This is a card with brand colors.
							</p>
							<button
								className="button is-brand has-outline is-small"
								type="button"
							>
								Action
							</button>
						</div>
					</div>
				</div>

				<div className="o-grid-column is-fill">
					<div className="o-layout is-vertical card is-accent">
						<div className="card-media">
							<img
								alt="Kitten"
								height="300px"
								src="https://placekitten.com/320/240"
								width="300px"
							/>
						</div>
						<div className="card-body">
							<p className="u-margin-bottom-">
								This is a card with accent colors.
							</p>
							<button
								className="button is-accent has-outline is-inverted is-small"
								type="button"
							>
								Action
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default CardElement;
