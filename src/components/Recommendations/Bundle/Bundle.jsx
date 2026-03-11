import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { RecommendationBundle } from '@athoscommerce/snap-preact/components';

import './Bundle.scss';

export const Bundle = observer((props) => {
	const { controller } = props;
	const store = controller?.store;
	const parameters = store?.profile?.display?.templateParameters;

	useEffect(() => {
		// useEffect here is used to run the search when the component mounts
		if (!controller.store.loaded && !controller.store.loading) {
			controller.search();
		}
	}, []);

	const bundleProps = {
		controller: controller,
		onAddToCart: (data) => {
			// this function is called when an item is added to the cart
			// you can handle the add to cart logic here, such as sending data to your
			// cart service or updating the UI accordingly.
			controller.log.debug('ADDING TO CART', data);
		},
		title: parameters?.title,
	};

	return store.results.length > 0 && <RecommendationBundle {...bundleProps} />;
});
