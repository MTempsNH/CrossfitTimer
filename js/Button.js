import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
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
            <View style={[styles.innerContent, styles.centeredContainer]}>
                <Text style={[styles.text, {marginTop: '42%'}]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mainContent: {
        height: 100,
        width: 100,
        backgroundColor: '#333',
        borderRadius: 50
    },
    text: {
        color: 'white'
    },
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContent: {
        backgroundColor: 'rgba(0,0,0,0)',

    }
});

export default Button;