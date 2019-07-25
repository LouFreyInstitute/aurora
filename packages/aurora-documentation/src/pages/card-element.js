import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CardElement = () => (
	<Layout>
		<SEO title="Button" />

		<div className="s-prose">
			<h1 className="c-heading is-large">Card</h1>
			<p>Displays lesser information in a controlled format.</p>

			<h2 className="c-heading is-small">Default</h2>
      <div className="o-grid">
        <div className="o-grid-column is-fill">
          <div className="o-layout is-vertical c-card">
            <div className="c-card-content">This is a card.</div>
          </div>
        </div>
        
        <div className="o-grid-column is-fill">
          <div className="o-layout is-vertical c-card is-brand">
            <div className="c-card-content">This is a card with brand colors.</div>
          </div>
        </div>
        
        <div className="o-grid-column is-fill">
          <div className="o-layout is-vertical c-card is-accent">
            <div className="c-card-content">This is a card with accent colors.</div>
          </div>
        </div>
      </div>
      
      <h2 className="c-heading is-small">Aurora Light</h2>
      <div className="t-aurora o-grid">
        <div className="o-grid-column is-fill">
          <div className="o-layout is-vertical c-card">
            <div className="c-card-content">This is a card.</div>
          </div>
        </div>
        
        <div className="o-grid-column is-fill">
          <div className="o-layout is-vertical c-card is-brand">
            <div className="c-card-content">This is a card with brand colors.</div>
          </div>
        </div>
        
        <div className="o-grid-column is-fill">
          <div className="o-layout is-vertical c-card is-accent">
            <div className="c-card-content">This is a card with accent colors.</div>
          </div>
        </div>
      </div>

			<h2 className="c-heading is-small">Civics360 (Nested Themes)</h2>
      <div className="t-civics360 o-grid">
        <div className="o-grid-column is-fill">
          <div className="o-layout is-vertical c-card">
            <div className="c-card-content">This is a card.</div>
          </div>
        </div>
        
        <div className="o-grid-column is-fill">
          <div className="o-layout is-vertical c-card is-brand">
            <div className="c-card-content">This is a card with brand colors.</div>
          </div>
        </div>
        
        <div className="o-grid-column is-fill">
          <div className="o-layout is-vertical c-card is-accent">
            <div className="c-card-content">This is a card with accent colors.</div>
          </div>
        </div>
      </div>
		</div>
	</Layout>
);

export default CardElement;