/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';

import Header from './header';
import Sidebar from './sidebar';

const Layout = ({children}) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div className="o-layout is-vertical u-full-height">
			<Header siteTitle={data.site.siteMetadata.title} />
			<div className="o-layout is-horizontal o-layout-item is-fill">
				<Sidebar style={{padding: '1rem'}} />
				<main style={{padding: '1rem'}}>{children}</main>
			</div>
			<footer style={{padding: '1rem'}}>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
