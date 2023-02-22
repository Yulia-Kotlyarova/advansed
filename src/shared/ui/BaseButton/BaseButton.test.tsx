import { render, screen } from '@testing-library/react';
import { BaseButton } from './BaseButton';

describe('button', () => {
    test('test', () => {
        render(<BaseButton className="test"> Test </BaseButton>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('test2', () => {
        render(<BaseButton className="test"> Test </BaseButton>);
        expect(screen.getByText('Test')).toHaveClass('test');
        screen.debug();
    });
});
