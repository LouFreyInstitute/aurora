import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ThemeContext from '../components/theme-context';

function ButtonElement() {
	// You can't use hooks here because ThemeContext.Provider is inside Layout.
	// The hook won't see a parent in the tree.
	// const theme = useContext(ThemeContext);

	return (
		<Layout>
			<SEO title="Button" />

			<div className="o-container s-prose">
				<h1 className="c-heading is-large">Button</h1>

				<p>Used to interact with page navigation, forms, or other elements.</p>

				<div className="o-block section u-margin-bottom+">
					<h2 className="c-heading is-small">Default</h2>
					<p>
						<button className="c-button" type="button">
							Default
						</button>
						{` `}
						<button className="c-button is-inverted" type="button">
							Inverted
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
				</div>

				<div className="o-block section u-margin-bottom+">
					<h2 className="c-heading is-small">Light (Using Context)</h2>
					<ThemeContext.Consumer>
						{theme => (
							<p className={`t-${theme.toLowerCase()}`}>
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
						)}
					</ThemeContext.Consumer>
				</div>

				<div className="o-block section u-margin-bottom+">
					<h2 className="c-heading is-small">Large</h2>
					<p>
						<button className="c-button is-large" type="button">
							Default
						</button>
						{` `}
						<button className="c-button is-brand is-large" type="button">
							Brand
						</button>
						{` `}
						<button className="c-button is-accent is-large" type="button">
							Accent
						</button>
					</p>
				</div>

				<div className="o-block section u-margin-bottom+">
					<h2 className="c-heading is-small">Small</h2>
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

				<div className="o-block section u-margin-bottom+">
					<h2 className="c-heading is-small">Hollow</h2>
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
			</div>
		</Layout>
	);
}

export default ButtonElement;
