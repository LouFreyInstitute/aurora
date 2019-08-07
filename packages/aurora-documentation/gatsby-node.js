/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateWebpackConfig = ({actions}) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				/**
				 * Since we are using `npm link` to test `aurora-components` it loads
				 * two separate `React`. We need to alias the wrong one to the Gatsby
				 * one.
				 *
				 * It might be necessary to comment out this line and install the
				 * actual `aurora-components` library when not in development.
				 */
				react: path.resolve(__dirname, './node_modules/react')
			}
		}
	});
};
