import { StateSchema } from 'app/providers/StoreProvider';

export const getUserIninted = (state: StateSchema) => state.user._inited;
