import React, { useState } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';

interface Props {
    title: string;
    position: 'br' | 'bl'
    onPress: () => void;
}

const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.fabLocation, (position === 'bl') ? styles.fabLeft : styles.fabRight]}
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={[styles.fabLocation, (position === 'bl') ? styles.fabLeft : styles.fabRight]}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('black', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
    return (Platform.OS === 'ios' ? ios() : android())
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    fabLeft: {
        left: 25
    },
    fabRight: {
        right: 25
    },
    fab: {
        backgroundColor: '#023e8a',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default Fab;
