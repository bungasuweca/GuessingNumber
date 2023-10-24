import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../consts/colors.js";

function Primarybtn({children, onPress}){
    return (
        
        <View style={styles.outerContainer}>
            <Pressable style={({pressed}) => pressed 
                ? [styles.container, styles.pressed] 
                : styles.container
            }
            onPress={onPress}android_ripple={{color: Colors.primary4}} >
                 <Text style={styles.btntxt}>{children}</Text>
            </Pressable>
         </View>
    );
}

export default Primarybtn;

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin:2,
        overflow: 'hidden',
    },

    container:  {
        backgroundColor: Colors.primary3 ,
        borderRadius: 60,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 3,
        elevation: 2,

    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        // opacity: 0.75
    }
})