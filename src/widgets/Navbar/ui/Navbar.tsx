import { classNames } from 'shared/lib/classNames/classNames';
import { BaseLink, BaseLinkTheme } from 'shared/ui/BaseLink/BaseLink';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className: string;

}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(classes.Navbar, {}, [className])}>
        <div className={classNames(classes.links, {}, [])}>
            <BaseLink to="/" theme={BaseLinkTheme.PRIMARY}>home</BaseLink>
            <BaseLink to="/about" theme={BaseLinkTheme.INVERTED}>about</BaseLink>
        </div>
    </div>
);

export default Navbar;
