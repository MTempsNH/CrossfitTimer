import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from 'react-native';

const Display = (props: Props) => {
    const { runningTime } = props;

    return (
        <View style={[styles.mainContent]}>
            <View style={[styles.innerContent, styles.centeredContainer]}>
                <Text style={[styles.text]}>{ runningTime }</Text>
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
        fontSize: 50,
        width: '100%',
        backgroundColor: '#333',
        textAlign:'left',
    },
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContent: {
        //backgroundColor: 'rgba(0,0,0,0)',
        backgroundColor: '#5848FF',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
});

export default Display;