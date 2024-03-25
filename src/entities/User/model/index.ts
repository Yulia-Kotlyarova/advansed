import { UserRole } from './consts/consts';
import { getUserAuthData } from './selectors/getUserAuthData';
import { getUserIninted } from './selectors/getUserIninted';
import { getUserRoles, isUserAdmin, isUserManager } from './selectors/roleSelector';
import { userActions, userReducer } from './slice/userSlice';
import { User, UserSchema } from './types/userSchema';

export type {
    UserSchema,
    User,
};

export {
    UserRole,
    userActions,
    userReducer,
    getUserAuthData,
    getUserIninted,
    isUserAdmin,
    isUserManager,
    getUserRoles,
};
