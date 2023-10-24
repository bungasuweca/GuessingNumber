import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../consts/colors';

function NumberContainer({ children }){
    return(
    <View style={styles.container}>
        <Text style={styles.numText}>{ children }</Text>
    </View>
    );
}

export default NumberContainer;

const styles=StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: Colors.primary2,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary2
    },
    numText:{
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
});