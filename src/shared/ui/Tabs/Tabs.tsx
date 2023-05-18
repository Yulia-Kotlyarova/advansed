import { memo, ReactNode } from 'react';
import { BaseButton } from 'shared/ui/BaseButton/BaseButton';
import classes from './Tabs.module.scss';

export interface TabsItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabsItem[];
  value: string;
  onClickTab: (tab: TabsItem) => void;
}

export const Tabs = memo(({
    tabs, value, onClickTab,
}: TabsProps) => (
    <div className={classes.Tabs}>
        {
            tabs.map((tab) => (
                <BaseButton
                    theme={value === tab.value ? 'primary' : 'secondary'}
                    key={tab.value}
                    onClick={() => onClickTab(tab)}
                >
                    {tab.content}
                </BaseButton>
            ))
        }
    </div>
));
