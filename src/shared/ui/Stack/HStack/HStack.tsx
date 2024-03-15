import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'ref' | 'directions'>

export const HStack = (props: HStackProps) => {
    return (
        <Flex
            {...props}
            direction="row"
        />
    );
};
