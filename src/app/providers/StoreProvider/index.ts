import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { ReduxStoreWithManager, StateSchema, ThunkConfig } from './config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
    StateSchema,
};
