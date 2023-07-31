import React from 'react'
import { Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native';
import { styles } from '../styles/FabStyles';
import { Props } from '../interfaces/appInterfaces';

const Fab: React.FC<Props> = (({ title, onPress, position = 'br' }) => {

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
});

export default Fab;