import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { ReduxStoreWithManager, StateSchema } from './config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
};
