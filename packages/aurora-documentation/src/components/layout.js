/* global window */

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {graphql, StaticQuery} from 'gatsby';

import ThemeContext from './theme-context';
import Header from './header';
import Sidebar from './sidebar';

class Layout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			theme: 'Borealis',
			dark: false
		};

		this.setTheme = this.setTheme.bind(this);
		this.setDark = this.setDark.bind(this);
	}

	setTheme(theme) {
		this.setState({theme});

		if (typeof window !== 'undefined') {
			window.localStorage.setItem('theme', theme);
		}
	}

	setDark() {
		this.setState(
			state => ({dark: !state.dark}),
			() => {
				if (typeof window !== 'undefined') {
					window.localStorage.setItem('dark', this.state.dark);
				}
			}
		);
	}

	componentDidMount() {
		if (typeof window !== 'undefined') {
			const theme = window.localStorage.getItem('theme') || 'Borealis';
			const dark = window.localStorage.getItem('dark') === 'true';
			this.setState({theme, dark});
		}
	}

	render() {
		const {children, size} = this.props;
		const {theme, dark} = this.state;

		return (
			<StaticQuery
				query={graphql`
					query SiteTitleQuery {
						site {
							siteMetadata {
								title
							}
						}
					}
				`}
				render={data => (
					<ThemeContext.Provider value={theme}>
						<div
							className={`t-${theme.toLowerCase()} has-overrides ${
								dark ? 'is-dark' : ''
							} o-layout is-vertical u-full-height`}
						>
							<Header
								changeMode={this.setDark}
								changeTheme={this.setTheme}
								dark={dark}
								siteTitle={data.site.siteMetadata.title}
								theme={theme}
							/>

							<div className="o-layout is-horizontal o-layout-item is-fill">
								<Sidebar />

								<main className="o-block is-large o-layout is-vertical o-layout-item is-fill">
									<div className="o-layout-item is-fill u-margin-bottom+ s-prose">
										<div className={`o-container is-${size}`}>{children}</div>
									</div>

									<hr className="divider" />

									<footer className="u-font-size- s-prose">
										<div className="o-layout">
											<div>
												© {new Date().getFullYear()},{' '}
												<a href="http://loufreyinstitute.org">
													Lou Frey Institute
												</a>{' '}
												at the University of Central Florida.
											</div>
											<div className="o-layout-item is-fill" />
											<div>
												Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
												.
											</div>
										</div>
									</footer>
								</main>
							</div>
						</div>
					</ThemeContext.Provider>
				)}
			/>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
