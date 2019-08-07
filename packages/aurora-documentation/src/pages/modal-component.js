import React, {useState} from 'react';
import {Modal} from 'aurora-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ModalComponent = () => {
	const [isDefaultOpen, setIsDefaultOpen] = useState(false);
	const [isAlternativeOpen, setIsAlternativeOpen] = useState(false);

	return (
		<Layout>
			<SEO title="Modal" />

			<h1 className="c-heading is-large">Modal</h1>
			<p>A modal is a layer of content displayed overlaying the page.</p>

			<section className="o-block is-large section">
				<h1 className="c-heading is-small">Default Modal</h1>
				<p>
					<button
						className="c-button is-brand"
						type="button"
						onClick={() => !isDefaultOpen && setIsDefaultOpen(true)}
					>
						Launch Default Modal
					</button>
				</p>

				<Modal
					render={ref => (
						<div className={`overlay${isDefaultOpen ? ' is-open' : ''}`}>
							<div ref={ref} className="o-container" style={{margin: 'auto'}}>
								<section className="o-block is-large section is-rounded">
									<h1 className="c-heading is-small">Modal Demo</h1>
									<p>
										This is some modal content. You can click on the button
										below or outside of the modal content window to close it.
										This modal was constructed using the <code>section</code>{' '}
										element and class.
									</p>
									<button
										className="c-button"
										type="button"
										onClick={() => setIsDefaultOpen(false)}
									>
										Close
									</button>
								</section>
							</div>
						</div>
					)}
					onClose={() => isDefaultOpen && setIsDefaultOpen(false)}
				/>
			</section>

			<section className="o-block is-large section">
				<h1 className="c-heading is-small">Alternative Modal Content</h1>
				<p>
					You can use almost any content inside of the <code>Modal</code>{' '}
					component.
				</p>
				<div>
					<button
						className="c-button is-brand"
						type="button"
						onClick={() => !isAlternativeOpen && setIsAlternativeOpen(true)}
					>
						Launch Modal
					</button>

					<Modal
						render={ref => (
							<div className={`overlay${isAlternativeOpen ? ' is-open' : ''}`}>
								<div
									ref={ref}
									className="o-container is-small"
									style={{margin: 'auto'}}
								>
									<div className="c-card is-brand">
										<div className="c-card-media">
											<img alt="Kitten" src="https://placekitten.com/300/300" />
										</div>
										<div className="c-card-body">
											<p>
												This modal uses content directly on the{' '}
												<code>overlay</code> class.
											</p>
											<button
												className="c-button is-hollow is-inverted"
												type="button"
												onClick={() => setIsAlternativeOpen(false)}
											>
												Close
											</button>
										</div>
									</div>
								</div>
							</div>
						)}
						onClose={() => isAlternativeOpen && setIsAlternativeOpen(false)}
					/>
				</div>
			</section>
		</Layout>
	);
};

export default ModalComponent;
