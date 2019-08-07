import React, {useState} from 'react';
import {Modal} from 'aurora-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ButtonComponent = () => {
	const [open, setOpen] = useState(false);

	return (
		<Layout>
			<SEO title="Modal" />

			<p>
				<button
					className="c-button is-brand"
					type="button"
					onClick={() => setOpen(true)}
				>
					Launch Modal
				</button>
			</p>

			{open && (
				<Modal onClose={() => setOpen(false)}>
					{({close}) => (
						<div className="o-container" style={{margin: 'auto'}}>
							<div className="o-block is-large section is-rounded">
								<h1 className="c-heading is-small">Modal Demo</h1>
								<p>This is a sample modal.</p>
								<button className="c-button" type="button" onClick={close}>
									Close
								</button>
							</div>
						</div>
					)}
				</Modal>
			)}
		</Layout>
	);
};

export default ButtonComponent;
