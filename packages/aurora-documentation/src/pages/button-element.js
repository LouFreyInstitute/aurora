import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ThemeContext from '../components/theme-context';

function ButtonElement() {
	// You can't use hooks here because ThemeContext.Provider is inside Layout.
	// The hook won't see a parent in the tree.
	// const theme = useContext(ThemeContext);

	return (
		<Layout size="large">
			<SEO title="Button" />

			<section className="section s-prose">
				<a href="#">Aurora</a>
				{' / '}
				<span>Elements</span>
				{' / '}
				<span>Button</span>
			</section>

			<section className="section is-large">
				<section className="section">
					<div className="container is-large">
						<h1 className="c-heading is-large">Button</h1>
						<p>
							Used to interact with page navigation, forms, or other elements.
						</p>
					</div>
				</section>

				<section className="section">
					<div className="container is-large">
						<section className="o-layout is-horizontal boxes">
							<div className="o-layout-item is-fill box is-large">
								<h2 className="c-heading is-small">Default Buttons</h2>
								<p>
									These are the standard size button with various color options.
								</p>

								<p>
									<button
										className="button u-margin-right- u-margin-bottom-"
										type="button"
									>
										Default
									</button>
									<button
										className="button is-invert u-margin-right- u-margin-bottom-"
										type="button"
									>
										Inverted
									</button>
									<button
										disabled
										className="button u-margin-right- u-margin-bottom-"
										type="button"
									>
										Disabled
									</button>
									<button
										className="button is-brand u-margin-right- u-margin-bottom-"
										type="button"
									>
										Brand
									</button>
									<button
										className="button is-accent u-margin-right- u-margin-bottom-"
										type="button"
									>
										Accent
									</button>
								</p>
							</div>
							<div className="o-layout-item box is-large">
								<h1 className="c-heading is-small">Classes</h1>
								<p>
									Use <code>.button</code> for the base class.
								</p>
								<p>
									<code>.is-brand</code>
								</p>
								<p>
									<code>.is-accent</code>
								</p>
								<p>
									<code>.is-invert</code>
								</p>
								<p>
									<code>.is-hollow</code>
								</p>
							</div>
						</section>
						<ThemeContext.Consumer>
							{theme => (
								<div className={`${theme} box is-large`}>
									<h2 className="c-heading is-small">Light Mode Override</h2>
									<p>
										If using CSS variables and React you can use context to
										re-apply the current theme without the `is-dark` class. This
										effectively forces light mode.
									</p>

									<p>
										<button className="button" type="button">
											Default
										</button>
										{` `}
										<button disabled className="button" type="button">
											Disabled
										</button>
										{` `}
										<button className="button is-brand" type="button">
											Brand
										</button>
										{` `}
										<button className="button is-accent" type="button">
											Accent
										</button>
									</p>

									<p className="u-font-size-">
										<em>
											Note: this will not work if CSS variables are disabled.
										</em>
									</p>
								</div>
							)}
						</ThemeContext.Consumer>
						<div className="box is-large">
							<h2 className="c-heading is-small">Large Buttons</h2>
							<p>A larger sized button useful for call-to-actions</p>
							<p>
								<button className="button is-brand is-large" type="button">
									Sign Up
								</button>
								{` `}
								<button className="button is-large" type="button">
									Log In
								</button>
							</p>
						</div>
						<div className="box is-large">
							<h2 className="c-heading is-small">Small Buttons</h2>
							<p>
								A smaller sized button that can be used on navigation,
								sub-menus, etc.
							</p>
							<p>
								<button className="button is-small" type="button">
									Default
								</button>
								{` `}
								<button className="button is-brand is-small" type="button">
									Brand
								</button>
								{` `}
								<button className="button is-accent is-small" type="button">
									Accent
								</button>
							</p>
						</div>
						<div className="o-layout is-horizontal boxes">
							<section className="box is-large">
								<h2 className="c-heading is-small">Hollow Buttons</h2>
								<p>
									Can be used on top of dynamic content like banner images or to
									reduce attention.
								</p>

								<p>
									<button
										className="button is-hollow has-outline"
										type="button"
									>
										Default
									</button>
									{` `}
									<button className="button is-brand is-hollow" type="button">
										Brand
									</button>
									{` `}
									<button className="button is-accent is-hollow" type="button">
										Accent
									</button>
								</p>
							</section>

							<section className="box is-accent is-large">
								<h2 className="c-heading is-small">Accented Section</h2>
								<p>
									Select your colors carefully. The default button should look
									good with any background.
								</p>

								<p>
									<button className="button is-hollow" type="button">
										Default
									</button>
									{` `}
									<button className="button is-brand is-hollow" type="button">
										Brand
									</button>
									{` `}
									<button
										className="button is-accent is-hollow has-outline"
										type="button"
									>
										Accent
									</button>
								</p>

								<p className="notification is-hollow is-font-size-small">
									Tip: Add <code>.has-outline</code> to apply the border color
									to buttons on same color containers.
								</p>
							</section>
						</div>
					</div>
				</section>
			</section>
		</Layout>
	);
}

export default ButtonElement;
