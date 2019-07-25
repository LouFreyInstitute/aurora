/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState} from 'react';
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

	const [theme, setTheme] = useState('Aurora');
	const [dark, setDark] = useState(false);
	const toggleDark = () => setDark(prev => !prev);

	return (
		<div
			className={`t-${theme.toLowerCase()} ${
				dark ? 'is-dark' : ''
			} o-layout is-vertical u-full-height c-section`}
		>
			<Header
				changeMode={toggleDark}
				changeTheme={setTheme}
				dark={dark}
				siteTitle={data.site.siteMetadata.title}
				theme={theme}
			/>

			<div className="o-layout is-horizontal o-layout-item is-fill">
				<Sidebar />

				<main className="o-block is-large">
					<div className="o-container">{children}</div>
				</main>
			</div>

			<footer className="c-footer s-prose u-font-size-">
				<div className="o-layout">
					<div>
						© {new Date().getFullYear()},{' '}
						<a href="http://loufreyinstitute.org">Lou Frey Institute</a> at the
						University of Central Florida.
					</div>
					<div className="o-layout-item is-fill" />
					<div>
						Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
					</div>
				</div>
			</footer>
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
