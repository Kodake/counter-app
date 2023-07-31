import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});