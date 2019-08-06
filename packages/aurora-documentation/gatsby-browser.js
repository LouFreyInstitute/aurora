/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/**
 * Elements is the CSS needed for our React components and general classes.
 * You can import different variations of the base styles (which includes :root
 * variables and CSS properties support) by specifying a different file:
 */
import 'aurora-elements';

/**
 * Import the stylesheet with `:root` variables disabled. This is useful if you
 * know you're using nested themes and you'll override most CSS properties.
 * There are Sass fallbacks for CSS variables so you won't lose styles.
 *
 * import 'aurora-elements/dist/styles-root-disabled.css';
 */

/**
 * Import the stylesheet with :root and CSS variables disabled. If you don't
 * use any CSS variables and want to use only Sass to style your page you should
 * import `aurora-elements` into your own Sass stylesheet with your variables
 * set above it. The following will use the Aurora default styles!
 *
 * import 'aurora-elements/dist/styles-css-variables-disabled.css';
 */

/**
 * Themes that use CSS Custom Properties (variables) should be imported as well.
 * If you set up your themes to use all the same CSS variables then order
 * should not matter here. If you start to get weird results when nesting check
 * that your themes set the same CSS variables!
 */
import 'aurora-themes/dist/aurora-borealis/styles.css';
import 'aurora-themes/dist/civics360/styles.css';
import 'aurora-themes/dist/super-nintendo/styles.css';
