import React from 'react';
import {Menu} from '@lou-frey-institute/aurora-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const MenuComponent = () => {
	const [isDefaultOpen, setIsDefaultOpen] = React.useState(false);
	const [isWidthOpen, setIsWidthOpen] = React.useState(false);
	const [isThemeOpen, setIsThemeOpen] = React.useState(false);

	return (
		<Layout>
			<SEO title="Menu" />

			<section className="section s-prose">
				<a href="#">Aurora</a>
				{' / '}
				<span>Components</span>
				{' / '}
				<span>Menu</span>
			</section>

			<section className="section is-large">
				<h1 className="c-heading is-large">Menu</h1>
				<p>Display a menu list triggered by an event—usually a button.</p>
			</section>

			<section className="section is-large">
				<div className="container is-large">
					<div className="box is-large">
						<h1 className="c-heading is-small">Default Interaction</h1>
						<p>Clicking on a button to open a menu.</p>

						<button
							className="button is-brand"
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
									<li className="list-item">
										Clicking me won&apos;t do anything!
									</li>
								</div>
							)}
							onClose={() => isDefaultOpen && setIsDefaultOpen(false)}
						/>
					</div>

					<div className="box is-large">
						<h1 className="c-heading is-small">Dynamic Menu Width</h1>
						<p>
							By wrapping the <code>menu</code> in a{' '}
							<code>position: relative</code> container it will inherit the
							width of the parent container. If the parent is{' '}
							<code>display: inline-block</code> you can use positioning classes
							to adjust where the menu appears.
						</p>

						<div style={{position: 'relative'}}>
							<button
								className="button is-brand"
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
										<li
											className="list-item"
											onClick={() => setIsWidthOpen(false)}
										>
											<a href="#">Pizza</a>
										</li>
										<li
											className="list-item"
											onClick={() => setIsWidthOpen(false)}
										>
											<a href="#">Beer</a>
										</li>
										<li
											className="list-item"
											onClick={() => setIsWidthOpen(false)}
										>
											<a href="#">Tacos</a>
										</li>
										<li
											className="list-item"
											onClick={() => setIsWidthOpen(false)}
										>
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

					<div className="t-northern-lights is-dark box is-large">
						<h1 className="c-heading is-small">Nested Theme Example</h1>
						<p>
							This section is set to use the Northern Lights theme in dark mode!
						</p>

						<div style={{position: 'relative'}}>
							<button
								className="button is-brand"
								type="button"
								onClick={() => !isThemeOpen && setIsThemeOpen(true)}
							>
								Open Menu
							</button>

							<Menu
								isOpen={isThemeOpen}
								render={ref => (
									<div
										ref={ref}
										className={`menu is-floating is-full-width ${
											isThemeOpen ? 'is-open' : 'is-hidden'
										}`.trim()}
										tabIndex="-1"
									>
										<a
											className="list-item"
											href="#"
											onClick={() => setIsThemeOpen(false)}
										>
											Pizza
										</a>
										<a
											className="list-item"
											href="#"
											onClick={() => setIsThemeOpen(false)}
										>
											Beer
										</a>
										<a
											className="list-item"
											href="#"
											onClick={() => setIsThemeOpen(false)}
										>
											Tacos
										</a>
										<a
											className="list-item"
											href="#"
											onClick={() => setIsThemeOpen(false)}
										>
											Tequila
										</a>
										<li className="list-item">
											Clicking me won&apos;t do anything!
										</li>
									</div>
								)}
								onClose={() => isThemeOpen && setIsThemeOpen(false)}
							/>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default MenuComponent;
