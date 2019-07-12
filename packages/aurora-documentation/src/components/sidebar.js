import React from 'react';
import {Link} from 'gatsby';

function Sidebar(props) {
	const {...passProps} = props;

	return (
		<div {...passProps}>
			<ul>
				<li>
					<h4>Components</h4>
					<ul>
						<li>
							<Link to="/button-component">Button</Link>
						</li>
						<li>
							<Link to="/nav">Nav</Link>
						</li>
						<li>
							<Link to="/nav-bar">NavBar</Link>
						</li>
					</ul>
				</li>
			</ul>
			<ul>
				<li>
					<h4>Elements</h4>
					<ul>
						<li>Components</li>
						<ul>
							<li>
								<Link to="/button-element">Button</Link>
							</li>
						</ul>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
