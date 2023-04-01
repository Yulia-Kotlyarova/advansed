import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  alt: string;
  avatar?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = ({
    className, avatar, alt, size = 'sm',
}: AvatarProps) => (
    <div className={classNames(classes.Avatar, {}, [className, classes[size]])}>
        <img className={classes.img} src={avatar} alt={alt} />
    </div>
);
