import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { ReduxStoreWithManager, StateSchema } from './config/StateSchema';
import { createReduxStore } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
};
