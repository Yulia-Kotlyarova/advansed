import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject, ReactNode, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollBYPath, scrollSaverActions } from 'features/ScrollSaver';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import classes from './Page.module.scss';

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const scrollPosition = useSelector((state: StateSchema) => getScrollBYPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent) => {
        dispatch(scrollSaverActions.setScrollPosition({
            // @ts-ignore
            position: e?.currentTarget?.scrollTop ?? 0,
            path: pathname,
        }));
    }, 1000);

    return (
        <main
            ref={wrapperRef}
            className={classNames(classes.Page, {}, [className])}
            // @ts-ignore
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd && <div className={classes.trigger} ref={triggerRef} />}
        </main>
    );
};
