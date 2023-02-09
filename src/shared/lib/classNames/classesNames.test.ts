import { classNames } from './classNames';

describe('classNames', () => {
    test('test', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });

    test('test', () => {
        const expected = 'someClass 1 2';
        expect(classNames('someClass', {}, ['1', '2'])).toBe(expected);
    });

    test('test', () => {
        const expected = 'someClass 1 2 outlined';
        expect(classNames('someClass', { outlined: true }, ['1', '2'])).toBe(expected);
    });
});
