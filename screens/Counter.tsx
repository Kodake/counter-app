import { Text, View } from 'react-native'
import Fab from '../components/Fab';
import store from '../store/sharedStateStore';
import { APP_STRINGS } from '../messages/appMessages';
import { styles } from '../styles/CounterStyles';
import { observer } from 'mobx-react';

const Counter: React.FC = observer(() => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{APP_STRINGS.counter} {store.counter}</Text>

            <Fab
                title='+1'
                position='br'
                onPress={() => store.incrementCounter()}
            />

            <Fab
                title='-1'
                position='bl'
                onPress={() => store.decrementCounter()}
            />
        </View>
    )
});

export default Counter;