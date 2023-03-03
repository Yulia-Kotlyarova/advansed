import { UserSchema } from 'entities/User/model';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    user: UserSchema,
    loginForm: LoginSchema;
}
