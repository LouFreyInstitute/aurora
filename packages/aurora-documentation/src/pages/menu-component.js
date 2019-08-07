import React, {useState} from 'react';
import {Menu} from 'aurora-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const MenuComponent = () => {
	const [isDefaultOpen, setIsDefaultOpen] = useState(false);
	const [isWidthOpen, setIsWidthOpen] = useState(false);

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
					render={ref => (
						<ul
							ref={ref}
							className={`menu is-floating ${
								isDefaultOpen ? 'is-open' : 'is-hidden'
							}`}
						>
							<li className="list-item" onClick={() => setIsDefaultOpen(false)}>
								Pizza
							</li>
							<li className="list-item" onClick={() => setIsDefaultOpen(false)}>
								Beer
							</li>
							<li className="list-item" onClick={() => setIsDefaultOpen(false)}>
								Tacos
							</li>
							<li className="list-item" onClick={() => setIsDefaultOpen(false)}>
								Tequila
							</li>
							<li className="list-item">Clicking me won&apos;t do anything!</li>
						</ul>
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
						render={ref => (
							<ul
								ref={ref}
								className={`menu is-floating is-full-width ${
									isWidthOpen ? 'is-open' : 'is-hidden'
								}`}
							>
								<li className="list-item" onClick={() => setIsWidthOpen(false)}>
									Pizza
								</li>
								<li className="list-item" onClick={() => setIsWidthOpen(false)}>
									Beer
								</li>
								<li className="list-item" onClick={() => setIsWidthOpen(false)}>
									Tacos
								</li>
								<li className="list-item" onClick={() => setIsWidthOpen(false)}>
									Tequila
								</li>
								<li className="list-item">
									Clicking me won&apos;t do anything!
								</li>
							</ul>
						)}
						onClose={() => isWidthOpen && setIsWidthOpen(false)}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default MenuComponent;
