import {Link} from 'gatsby';
import {Nav, NavBar, NavItem} from '@lou-frey-institute/aurora-components';
import PropTypes from 'prop-types';
import React from 'react';

function Header(props) {
	const {changeMode, changeTheme, dark, siteTitle, theme} = props;

	return (
		<div className="nav-bar is-brand o-layout is-horizontal">
			<Nav>
				<NavItem Component="h1" className="c-heading is-tiny">
					<Link to="/">{siteTitle}</Link>
				</NavItem>
			</Nav>

			<Nav fill>
				<select
					name="theme"
					value={theme}
					onChange={({target}) => changeTheme(target.value)}
				>
					<option value="t-northern-lights">Northern Lights</option>
					<option value="t-civics360">Civics360</option>
					<option value="t-super-nintendo">Super Nintendo</option>
				</select>

				<label htmlFor="dark">
					<input
						checked={dark}
						id="dark"
						name="dark"
						type="checkbox"
						onChange={changeMode}
					/>
					Dark
				</label>
			</Nav>

			<Nav>
				<NavItem href="https://github.com/loufreyinstitute/aurora">
					View Code on GitHub
				</NavItem>
			</Nav>
		</div>
	);
}

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
