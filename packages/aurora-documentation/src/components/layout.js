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
				<Sidebar />

				<main className="o-block is-large" style={{maxWidth: '640px'}}>
					{children}
				</main>
			</div>

			<footer
				className="o-block is-large"
				style={{backgroundColor: '#605868', color: 'white'}}
			>
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
