import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

type Props = {
    onPress: Function,
    title: string
}

const Button = (props: Props) => {
    const { onPress, title } = props;
    console.log('onPress: ', onPress);

    return (
        <TouchableOpacity onPress={onPress} style={[styles.mainContent]}>
            <Text style={[styles.text]}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mainContent: {
        height: '25%',
        width: '66%',
        backgroundColor: '#333'

    },
    text: {
        color: 'white'
    }
});

export default Button;