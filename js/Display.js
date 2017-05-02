import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from 'react-native';

const Display = (props: Props) => {

    return (
        <View style={[styles.mainContent]}>
            <View style={[styles.innerContent, styles.centeredContainer]}>
                <Text style={[styles.text, {marginTop: '50%'}]}>00:00:00</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    text: {
        color: 'white',
        fontSize: 60
    },
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContent: {
        backgroundColor: 'rgba(0,0,0,0)',

    }
});

export default Display;