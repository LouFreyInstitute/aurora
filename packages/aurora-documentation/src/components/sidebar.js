import React from 'react';
import {Link} from 'gatsby';

function Sidebar(props) {
	const {...passProps} = props;

	return (
		<nav className="o-layout is-vertical c-nav" {...passProps}>
			<div>
				<strong>Components</strong>
			</div>
			<nav className="o-layout is-vertical c-nav">
				<div>
					<Link to="/button-component">Button</Link>
				</div>
				<div>
					<Link to="/nav">Nav</Link>
				</div>
				<div>
					<Link to="/nav-bar">NavBar</Link>
				</div>
			</nav>

			<div>
				<strong>Elements</strong>
			</div>
			<nav className="o-layout is-vertical c-nav">
				<div>Components</div>
				<nav className="o-layout is-vertical c-nav">
					<Link to="/button-element">Button</Link>
				</nav>

				<div>Elements</div>
				<nav className="o-layout is-vertical c-nav">
					<Link to="/body-element">Body</Link>
					<Link to="/html-element">HTML</Link>
				</nav>

				<div>Mixins</div>
				<nav className="o-layout is-vertical c-nav">
					<Link to="/block-mixin">Block</Link>
					<Link to="/css-property-fallback-mixin">CSS Property Fallback</Link>
				</nav>

				<div>Objects</div>
				<nav className="o-layout is-vertical c-nav">
					<Link to="/layout-object">Layout</Link>
				</nav>

				<div>Variables</div>
				<nav className="o-layout is-vertical c-nav">
					<Link to="/base-variables">Base</Link>
					<Link to="/font-variables">Font</Link>
					<Link to="/spacing-variables">Spacing</Link>
				</nav>
			</nav>

			<div>
				<strong>Themes</strong>
			</div>
			<nav className="o-layout is-vertical c-nav">
				<Link to="/aurora-theme">Aurora</Link>
				<Link to="/civics360-theme">Civics360</Link>
				<Link to="/citizen-theme">Citizen</Link>
				<Link to="/institute-theme">Institute</Link>
			</nav>
		</nav>
	);
}

export default Sidebar;
