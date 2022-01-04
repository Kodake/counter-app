import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const HelloWorldScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                Hello World!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 45,
        textalign: 'center',
    }
})

export default HelloWorldScreen;
