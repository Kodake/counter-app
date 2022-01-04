import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fab from '../components/Fab';

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Contador: {counter}</Text>

            <Fab
                title='+1'
                position='br'
                onPress={() => setCounter(counter + 1)}
            />

            <Fab
                title='-1'
                position='bl'
                onPress={() => setCounter(counter - 1)}
            />

            {/* <TouchableOpacity style={styles.fabLocationLeft}
                onPress={() => setCounter(counter - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1, justifyContent: 'center'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 40,
        top: -25,
    },
    fabLocationLeft: {
        position: 'absolute',
        bottom: 25,
        left: 25
    }
})

export default CounterScreen;
