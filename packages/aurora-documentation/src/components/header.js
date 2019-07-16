import {Link} from 'gatsby';
import {Nav, NavBar, NavItem} from 'aurora-components';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({siteTitle}) => (
	<NavBar color="brand">
		<Nav>
			<NavItem Component="h1" className="c-heading is-tiny">
				<Link to="/">{siteTitle}</Link>
			</NavItem>
		</Nav>

		<Nav>
			<NavItem Component={Link} to="/blog">
				Blog
			</NavItem>

			<NavItem href="https://github.com/loufreyinstitute/aurora">
				GitHub
			</NavItem>
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
