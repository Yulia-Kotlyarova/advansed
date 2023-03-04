import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [reducerKey in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModalLoaderProps {
    reducers: ReducersList,
    children: ReactNode,
    removeAfterUnmount?: boolean,
}

export const DynamicModalLoader = (props: DynamicModalLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = false,
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
            store.reducerManager.add(reducerKey, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(reducerKey);
                    dispatch({ type: `@DESTROY ${reducerKey} reducer` });
                });
            }
        };
    }, []);

    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
