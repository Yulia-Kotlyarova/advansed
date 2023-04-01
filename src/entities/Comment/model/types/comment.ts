import { User } from 'entities/User/model';

export interface Comment {
    id: string,
    user: User,
    text: string
}
