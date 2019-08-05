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

			<h1 className="c-heading is-large">Button</h1>

			<p>Used to interact with page navigation, forms, or other elements.</p>

			<div className="o-layout is-horizontal section-group">
				<div className="o-block is-large o-layout-item is-fill section is-rounded">
					<h2 className="c-heading is-small">Default Buttons</h2>
					<p>These are the standard size button with various color options.</p>

					<p>
						<button
							className="c-button u-margin-right- u-margin-bottom-"
							type="button"
						>
							Default
						</button>
						<button
							className="c-button is-inverted u-margin-right- u-margin-bottom-"
							type="button"
						>
							Inverted
						</button>
						<button
							disabled
							className="c-button u-margin-right- u-margin-bottom-"
							type="button"
						>
							Disabled
						</button>
						<button
							className="c-button is-brand u-margin-right- u-margin-bottom-"
							type="button"
						>
							Brand
						</button>
						<button
							className="c-button is-accent u-margin-right- u-margin-bottom-"
							type="button"
						>
							Accent
						</button>
					</p>
				</div>
				<div style={{borderRight: '1px solid var(--border-color-component)'}} />
				<div className="o-block is-large o-layout-item section is-rounded">
					<h1 className="c-heading is-small">Classes</h1>
					<p>
						Use <code>.c-button</code> for the base class.
					</p>
					<p>
						<code>.is-brand</code>
					</p>
					<p>
						<code>.is-accent</code>
					</p>
					<p>
						<code>.is-inverted</code>
					</p>
					<p>
						<code>.is-hollow</code>
					</p>
				</div>
			</div>

			<ThemeContext.Consumer>
				{theme => (
					<div
						className={`t-${theme.toLowerCase()} o-block is-large section is-rounded`}
					>
						<h2 className="c-heading is-small">Light Mode Override</h2>
						<p>
							If using CSS variables and React you can use context to re-apply
							the current theme without the `is-dark` class. This effectively
							forces light mode.
						</p>

						<p>
							<button className="c-button" type="button">
								Default
							</button>
							{` `}
							<button disabled className="c-button" type="button">
								Disabled
							</button>
							{` `}
							<button className="c-button is-brand" type="button">
								Brand
							</button>
							{` `}
							<button className="c-button is-accent" type="button">
								Accent
							</button>
						</p>

						<p className="u-font-size-">
							<em>Note: this will not work if CSS variables are disabled.</em>
						</p>
					</div>
				)}
			</ThemeContext.Consumer>

			<div className="o-block is-large section is-rounded">
				<h2 className="c-heading is-small">Large Buttons</h2>
				<p>A larger sized button useful for call-to-actions</p>
				<p>
					<button className="c-button is-brand is-large" type="button">
						Sign Up
					</button>
					{` `}
					<button className="c-button is-large" type="button">
						Log In
					</button>
				</p>
			</div>

			<div className="o-block is-large section is-rounded">
				<h2 className="c-heading is-small">Small Buttons</h2>
				<p>
					A smaller sized button that can be used on navigation, sub-menus, etc.
				</p>
				<p>
					<button className="c-button is-small" type="button">
						Default
					</button>
					{` `}
					<button className="c-button is-brand is-small" type="button">
						Brand
					</button>
					{` `}
					<button className="c-button is-accent is-small" type="button">
						Accent
					</button>
				</p>
			</div>

			<div className="o-block is-large section is-rounded is-brand">
				<h2 className="c-heading is-small">Hollow Buttons</h2>
				<p>
					Can be used on top of dynamic content like banner images or to reduce
					attention.
				</p>

				<p>
					<button className="c-button is-hollow" type="button">
						Default
					</button>
					{` `}
					<button className="c-button is-brand is-hollow" type="button">
						Brand
					</button>
					{` `}
					<button className="c-button is-accent is-hollow" type="button">
						Accent
					</button>
				</p>
			</div>
		</Layout>
	);
}

export default ButtonElement;
