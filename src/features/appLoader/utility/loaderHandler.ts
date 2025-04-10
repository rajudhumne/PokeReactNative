import {store} from '../../../stores/store';
import {stopLoader, triggerAppLoader} from '../slice/AppLoaderSlice';

export const LoaderOnApiResponse = () => {
  store.dispatch(stopLoader());
};

export const TriggerLoader = () => {
  store.dispatch(triggerAppLoader());
};
