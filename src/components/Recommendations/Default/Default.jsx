import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { observer } from 'mobx-react-lite';
import { Recommendation } from '@athoscommerce/snap-preact/components';

import './Default.scss';

export const Default = observer((props) => {
	const controller = props.controller;
	const store = controller?.store;
	const parameters = store?.profile?.display?.templateParameters;

	useEffect(() => {
		// useEffect here is used to run the search when the component mounts
		if (!controller.store.loaded && !controller.store.loading) {
			controller.search();
		}
	}, []);

	const defaultProps = {
		controller: controller,
		title: parameters?.title,
	};

	return store.results.length > 0 && <Recommendation {...defaultProps} />;
});
