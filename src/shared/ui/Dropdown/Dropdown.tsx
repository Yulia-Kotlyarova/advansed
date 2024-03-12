import { classNames } from 'shared/lib/classNames/classNames';
import {
    Fragment, memo, ReactNode,
} from 'react';
import { Menu } from '@headlessui/react';
import { BaseLink } from '../BaseLink/BaseLink';
import { Card } from '../Card/Card';
import classes from './Dropdown.module.scss';

interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className,
        items,
        trigger,
    } = props;

    return (
        <Menu as="div" className={classNames(classes.Dropdown, {}, [className])}>
            <Menu.Button as="div" className={classes.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classes.list}>
                <Card>
                    {
                        items.map((item, index) => {
                            const content = ({ active }: {active: boolean}) => (
                                <li
                                    className={classNames(
                                        classes.item,
                                        { [classes.active]: active },
                                        [className],
                                    )}
                                >
                                    {item.content}
                                </li>
                            );

                            if (item.href) {
                                return (
                                    <Menu.Item key={index} as={BaseLink} to={item.href}>
                                        {content}
                                    </Menu.Item>
                                );
                            }
                            return (
                                <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
                                    {content}
                                </Menu.Item>
                            );
                        })
                    }

                </Card>
            </Menu.Items>
        </Menu>
    );
});
