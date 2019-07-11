import {Link} from 'gatsby';
import {Nav, NavBar} from 'aurora-components';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({siteTitle}) => (
	<NavBar>
		<Nav>
			<Link to="/">{siteTitle}</Link>
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
