/* global document */

import React from 'react';
import {Menu} from 'aurora-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const MenuComponent = () => {
	const [isDefaultOpen, setIsDefaultOpen] = React.useState(false);
	const [isWidthOpen, setIsWidthOpen] = React.useState(false);

	return (
		<Layout>
			<SEO title="Menu" />

			<h1 className="c-heading is-large">Menu</h1>
			<p>Display a menu list triggered by an event—usually a button.</p>

			<div className="o-block is-large section">
				<h1 className="c-heading is-small">Default Interaction</h1>
				<p>Clicking on a button to open a menu.</p>

				<button
					className="c-button is-brand u-margin-bottom-"
					type="button"
					onClick={() => !isDefaultOpen && setIsDefaultOpen(true)}
				>
					Open Menu
				</button>

				<Menu
					isOpen={isDefaultOpen}
					render={ref => (
						<div
							ref={ref}
							className={`menu is-floating ${
								isDefaultOpen ? 'is-open' : 'is-hidden'
							}`.trim()}
							tabIndex="-1"
						>
							<a
								className="list-item"
								href="#"
								onClick={() => setIsDefaultOpen(false)}
							>
								Pizza
							</a>
							<a
								className="list-item"
								href="#"
								onClick={() => setIsDefaultOpen(false)}
							>
								Beer
							</a>
							<a
								className="list-item"
								href="#"
								onClick={() => setIsDefaultOpen(false)}
							>
								Tacos
							</a>
							<a
								className="list-item"
								href="#"
								onClick={() => setIsDefaultOpen(false)}
							>
								Tequila
							</a>
							<li className="list-item">Clicking me won&apos;t do anything!</li>
						</div>
					)}
					onClose={() => isDefaultOpen && setIsDefaultOpen(false)}
				/>
			</div>

			<div className="o-block is-large section">
				<h1 className="c-heading is-small">Dynamic Menu Width</h1>
				<p>
					By wrapping the <code>menu</code> in a <code>position: relative</code>{' '}
					container it will inherit the width of the parent container. If the
					parent is <code>display: inline-block</code> you can use positioning
					classes to adjust where the menu appears.
				</p>

				<div style={{position: 'relative'}}>
					<button
						className="c-button is-brand"
						type="button"
						onClick={() => !isWidthOpen && setIsWidthOpen(true)}
					>
						Open Menu
					</button>

					<Menu
						isOpen={isWidthOpen}
						render={ref => (
							<div
								ref={ref}
								className={`menu is-floating is-full-width ${
									isWidthOpen ? 'is-open' : 'is-hidden'
								}`.trim()}
								tabIndex="-1"
							>
								<li className="list-item" onClick={() => setIsWidthOpen(false)}>
									<a href="#">Pizza</a>
								</li>
								<li className="list-item" onClick={() => setIsWidthOpen(false)}>
									<a href="#">Beer</a>
								</li>
								<li className="list-item" onClick={() => setIsWidthOpen(false)}>
									<a href="#">Tacos</a>
								</li>
								<li className="list-item" onClick={() => setIsWidthOpen(false)}>
									<a href="#">Tequila</a>
								</li>
								<li className="list-item">
									Clicking me won&apos;t do anything!
								</li>
							</div>
						)}
						onClose={() => isWidthOpen && setIsWidthOpen(false)}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default MenuComponent;
