import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../consts/colors';

function GuessLog({roundNum, guess}){
    return (
        <View style={styles.list}>
            <Text>#{roundNum}</Text>
            <Text>Tebakan q:{guess}</Text>
        </View>
    );
}

export default GuessLog;

const styles = StyleSheet.create({
    list: {
        borderColor: Colors.primary2,
        borderWidth: 1,
        borderRadius: 20,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primary5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
})