/* searchspring imports */
import { Snap } from '@athoscommerce/snap-preact';

/* local imports */
import './styles/custom.scss';

/* configuration and instantiation */
const config = {
	client: {
		globals: {
			siteId: '{{snapfu.siteId}}',
		},
	},
	instantiators: {
		recommendation: {
			components: {
				Default: async () => {
					return (await import('./components/Recommendations/Default/Default')).Default;
				},
				Bundle: async () => {
					return (await import('./components/Recommendations/Bundle/Bundle')).Bundle;
				},
			},
			config: {
				branch: BRANCHNAME,
			},
		},
	},
	controllers: {},
};

const snap = new Snap(config);
