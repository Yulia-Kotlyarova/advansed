import { classNames } from 'shared/lib/classNames/classNames';
import { BaseLink, BaseLinkTheme } from 'shared/ui/BaseLink/BaseLink';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <div className={classNames(classes.links, {}, [])}>
                <BaseLink to="/" theme={BaseLinkTheme.PRIMARY}>{t('home')}</BaseLink>
                <BaseLink to="/about" theme={BaseLinkTheme.INVERTED}>{t('about')}</BaseLink>
            </div>
        </div>
    );
};
