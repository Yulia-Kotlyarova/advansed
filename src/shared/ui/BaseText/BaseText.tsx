import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './BaseText.module.scss';

type TextTheme = 'default' | 'error'

type TextAlign = 'right' | 'left' | 'center'

type TextSize = 's' | 'm' | 'l'

interface BaseTextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    dataTestId?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

const mapSizeHeaderTag: Record<TextSize, HeaderTagType> = {
    l: 'h1',
    m: 'h2',
    s: 'h3',
};

export const BaseText = memo((props: BaseTextProps) => {
    const {
        className,
        title,
        text,
        theme = 'default',
        align = 'left',
        size = 's',
        dataTestId = 'Text',
    } = props;

    const mods: Mods = {
        [classes[theme]]: true,
        [classes[align]]: true,
        // TODO check size class
        [classes[size]]: true,
    };

    const HeaderType = mapSizeHeaderTag[size];

    return (
        <div className={classNames('', mods, [className])}>
            {title
              && (
                  <HeaderType
                      className={classNames(classes.title, {}, [className])}
                      data-testid={`${dataTestId}.Header`}
                  >
                      {title}
                  </HeaderType>
              )}
            <p
                className={classNames(classes.text, {}, [className])}
                data-testid={`${dataTestId}.Text`}
            >
                {text}
            </p>
        </div>
    );
});
