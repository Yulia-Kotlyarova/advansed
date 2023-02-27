import { UserSchema } from 'entities/User/model';

export interface Counter {
    value: number;
}

export interface StateSchema {
    counter: Counter,
    user: UserSchema
}
