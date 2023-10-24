import { StyleSheet, View } from "react-native";
import Colors from "../../consts/colors";

function Card ({children}) {
    return <View style={styles.inputContainer}>{children}</View>
}

export default Card;

const styles =  StyleSheet.create({
    inputContainer: {
        justifyContent:  'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 20,
        marginTop: 36,
        backgroundColor: Colors.primary2,
        borderRadius: 10,
        elevation: 40,
    },
});