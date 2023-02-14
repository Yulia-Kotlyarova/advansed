import { render, screen } from '@testing-library/react';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';

describe('button', () => {
    test('test', () => {
        render(<BaseButton className="test"> + </BaseButton>);
        expect(screen.getByText('+')).toBeInTheDocument();
    });

    test('test2', () => {
        render(<BaseButton className="test"> + </BaseButton>);
        expect(screen.getByText('+')).toHaveClass('test');
        screen.debug();
    });
});
