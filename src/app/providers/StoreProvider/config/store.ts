import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User/model';
import { loginReducer } from 'features/AuthByUserName';

export function createReduxStore(initialState: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };
    return configureStore({
        reducer: rootReducer,
        // devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
