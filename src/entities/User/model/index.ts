import { getUserAuthData } from './selectors/getUserAuthData';
import { getUserIninted } from './selectors/getUserIninted';
import { userActions, userReducer } from './slice/userSlice';
import { User, UserSchema } from './types/userSchema';

export {
    userActions, userReducer, UserSchema, User, getUserAuthData, getUserIninted,
};
