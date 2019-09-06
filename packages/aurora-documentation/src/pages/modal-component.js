import React, {useState} from 'react';
import {Modal} from '@lou-frey-institute/aurora-components';

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

			<div className="o-layout is-horizontal section-group">
				<section className="o-block is-large o-layout-item section is-brand is-hollow is-rounded">
					<h1 className="c-heading is-small">Default Modal</h1>
					<p>
						A modal simply controls the visibility of the components you give
						it. Pass a <code>ref</code> to the modal content to enable the focus
						and key handler hooks.
					</p>
					<div>
						<button
							className="c-button is-brand"
							type="button"
							onClick={() => !isDefaultOpen && setIsDefaultOpen(true)}
						>
							Launch Default Modal
						</button>

						<Modal
							isOpen={isDefaultOpen}
							render={ref => (
								<div
									className={`overlay ${isDefaultOpen ? 'is-open' : ''}`.trim()}
								>
									<div className="o-container" style={{margin: 'auto'}}>
										<section
											ref={ref}
											className="o-block is-large section is-rounded"
											tabIndex="-1"
										>
											<h1 className="c-heading is-small">Modal Demo</h1>
											<p>
												This is some modal content. You can click on the button
												below or outside of the modal content window to close
												it. This modal was constructed using the{' '}
												<code>section</code> element and class.
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
					</div>
				</section>
				<section className="o-block is-large o-layout-item is-fill section is-brand is-rounded">
					<p>
						Modals trap focus! Try using <code>Tab</code> when the modal is
						open.
					</p>
					<p>
						You can also close modals by hitting the <code>Escape</code> key.
					</p>
				</section>
			</div>

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
						isOpen={isAlternativeOpen}
						render={ref => (
							<div
								className={`overlay ${
									isAlternativeOpen ? 'is-open' : 'is-hidden'
								}`.trim()}
							>
								<div className="o-container is-small" style={{margin: 'auto'}}>
									<div ref={ref} className="c-card is-brand" tabIndex="-1">
										<div className="c-card-media">
											<img alt="Kitten" src="https://placekitten.com/640/480" />
										</div>
										<div className="c-card-body">
											<p>
												This modal uses content directly on the{' '}
												<code>overlay</code> class.
											</p>

											<p className="u-text-align-right">
												<button
													className="c-button is-brand is-inverted is-small"
													type="button"
													onClick={() => setIsAlternativeOpen(false)}
												>
													Accept
												</button>
												{` `}
												<button
													className="c-button is-brand is-hollow is-small"
													type="button"
													onClick={() => setIsAlternativeOpen(false)}
												>
													Close
												</button>
											</p>
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
