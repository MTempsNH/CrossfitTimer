import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type Props = {
    onPress: Function,
    title: string
}

const Button = (props: Props) => {
    const { onPress, title } = props;
    console.log('onPress: ', onPress);

    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;