import {Link} from 'gatsby';
import {Nav, NavBar} from 'aurora-components';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({siteTitle}) => (
	<NavBar>
		<Nav>
			<h1 className="c-heading is-tiny">
				<Link to="/">{siteTitle}</Link>
			</h1>
		</Nav>

		<Nav fill />

		<Nav>
			<a href="https://github.com/loufreyinstitute/aurora">GitHub</a>
		</Nav>
	</NavBar>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
