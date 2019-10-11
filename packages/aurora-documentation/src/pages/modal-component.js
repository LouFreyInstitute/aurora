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

			<section className="section is-large">
				<div className="container">
					<h1 className="c-heading is-large">Modal</h1>
					<p>A modal is a layer of content displayed overlaying the page.</p>
				</div>
			</section>

			<section className="section is-large">
				<div className="container is-large">
					<div className="boxes o-layout is-horizontal">
						<section className="box is-brand is-large is-hollow o-layout-item is-fill">
							<h1 className="c-heading is-small">Default Modal</h1>
							<p>
								A modal simply controls the visibility of the components you
								give it. Pass a <code>ref</code> to the modal content to enable
								the focus and key handler hooks.
							</p>
							<div>
								<button
									className="button is-brand"
									type="button"
									onClick={() => !isDefaultOpen && setIsDefaultOpen(true)}
								>
									Launch Default Modal
								</button>

								<Modal
									isOpen={isDefaultOpen}
									render={ref => (
										<div
											className={`overlay ${
												isDefaultOpen ? 'is-open' : ''
											}`.trim()}
										>
											<div className="container" style={{margin: 'auto'}}>
												<section ref={ref} className="section" tabIndex="-1">
													<h1 className="c-heading is-small">Modal Demo</h1>
													<p>
														This is some modal content. You can click on the
														button below or outside of the modal content window
														to close it. This modal was constructed using the{' '}
														<code>section</code> element and class.
													</p>
													<button
														className="button"
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
						<section className="box is-brand is-large o-layout-item is-fill">
							<p>
								Modals trap focus! Try using <code>Tab</code> when the modal is
								open.
							</p>
							<p>
								You can also close modals by hitting the <code>Escape</code>{' '}
								key.
							</p>
						</section>
					</div>
				</div>
			</section>

			<section className="section is-large">
				<div className="container">
					<div className="box is-large">
						<h1 className="c-heading is-small">Alternative Modal Content</h1>
						<p>
							You can use almost any content inside of the <code>Modal</code>{' '}
							component.
						</p>
						<div>
							<button
								className="button is-brand"
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
										<div
											className="container is-small"
											style={{margin: 'auto'}}
										>
											<div ref={ref} className="card is-brand" tabIndex="-1">
												<div className="card-media">
													<img
														alt="Kitten"
														src="https://placekitten.com/640/480"
													/>
												</div>
												<div className="card-body">
													<p>
														This modal uses content directly on the{' '}
														<code>overlay</code> class.
													</p>

													<p className="u-text-align-right">
														<button
															className="button is-brand is-invert is-small"
															type="button"
															onClick={() => setIsAlternativeOpen(false)}
														>
															Accept
														</button>
														{` `}
														<button
															className="button is-brand has-outline is-small"
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
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default ModalComponent;
