import { UserSchema } from 'entities/User/model';
import { LoginSchema } from 'features/AuthByUserName';

export interface Counter {
    value: number;
}

export interface StateSchema {
    counter: Counter,
    user: UserSchema,
    loginForm: LoginSchema;
}
