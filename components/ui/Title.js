import {Text, StyleSheet} from 'react-native';
import Colors from '../../consts/colors';
function Title ({children}) {

    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
        marginTop: 60,
        fontSize: 22,
        fontWeight: 'bold',
        color:Colors.primary1,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.primary5 ,
        backgroundColor: Colors.primary5,
        borderRadius: 20,
        padding: 20,
    }
})