import { Image, Text, View, StyleSheet} from "react-native";
import Colors from "../consts/colors";
import Primarybtn from "../components/ui/Primarybtn";

function GameOver({roundNum, userNum, onNewGame}) {
    return ( 
        <View style={styles.root}>
        <Text style={styles.hurei}>ヾHooray!</Text> 
        <Text style={styles.ovrtitle}>Ups, ketebak :P</Text>
        <View style={styles.imgContainer}>
            <Image style={styles.img} source={require('../img/pocacchoow.png')}/>
        </View>
        <View>
            <Text style={styles.sum}>
                Aku hanya perlu <Text style={styles.highlight}>{roundNum}</Text> percobaan untuk menebak angka <Text style={styles.highlight}>{userNum} </Text> <Text>:P</Text>
            </Text>
            <Primarybtn onPress={onNewGame}>Mulai Lagi</Primarybtn>
        </View>
        
    </View>);
}
export default GameOver;

const  styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary1,
    },
    hurei: {
        fontSize: 40,
        paddingBottom: 10,
        fontWeight:'bold',
        color: 'white',
        elevation: 80,
        textShadowColor:'#585858',
        textShadowOffset:{width: 2, height: 3},
        textShadowRadius:4,
    },
    ovrtitle:{
        fontSize: 20,
        fontWeight: '900',
        backgroundColor: Colors.primary2,
        color: 'white',
        textAlign: 'center',
        borderWidth: 4,
        borderRadius: 30,
        padding: 9,
        borderColor: Colors.primary2
        
    },

    imgContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#ebfaf3',
        overflow: 'hidden',
        margin: 10,
        backgroundColor: '#ebfaf3'
    },
    img: {
        width: '100%',
        height: '100%',
    },

    sum:{
        padding: 20,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginVertical: 24,
    },
    highlight:{
        fontSize: 23,
        fontWeight: "bold",
        color: Colors.primary3
    },

});