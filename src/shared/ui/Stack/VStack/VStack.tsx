import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'directions'>

export const VStack = (props: VStackProps) => {
    return (
        <Flex
            {...props}
            direction="column"
        />
    );
};
