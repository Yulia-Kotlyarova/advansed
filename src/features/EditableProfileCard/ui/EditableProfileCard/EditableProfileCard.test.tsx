import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'admin',
    first: 'admin',
    city: 'asf',
    currency: Currency.USD,
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};
describe('features/EditableProfileCard', () => {
    test('edit mode has to turn on', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfilePageHeader.EditBtn'));
        expect(screen.getByTestId('ProfilePageHeader.ChancelBtn')).toBeInTheDocument();
    });

    test('After clicking Chancel button inputs are empty', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfilePageHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.first'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.first'), 'first');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'lastname');
        expect(screen.getByTestId('ProfileCard.first')).toHaveValue('first');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('lastname');
        await userEvent.click(screen.getByTestId('ProfilePageHeader.ChancelBtn'));

        expect(screen.getByTestId('ProfileCard.first')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('Have appear validation error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfilePageHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.first'));
        await userEvent.click(screen.getByTestId('ProfilePageHeader.SaveBtn'));

        expect(screen.getByTestId('EditableProfileCard.Error.Text')).toBeInTheDocument();
    });

    test('If no validation error then PUT request', async () => {
        const mockReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('ProfilePageHeader.EditBtn'));
        await userEvent.clear(screen.getByTestId('ProfileCard.first'));
        await userEvent.type(screen.getByTestId('ProfileCard.first'), 'first');
        await userEvent.click(screen.getByTestId('ProfilePageHeader.SaveBtn'));

        expect(mockReq).toHaveBeenCalled();
    });
});
