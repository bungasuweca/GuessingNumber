import { useState } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import Start from './screens/Start';
import Colors from './consts/colors';
import Main from './screens/Main';
import GameOver from './screens/GameOver';


export default function App(){
    const [userNumber, setUserNumber] = useState();
    const [gameOver, setGameOver] = useState(true);
    const [guessRound, setGuessRound] = useState(0);
    
    function pickedNumberHandler(pickedNUmber){
        setUserNumber(pickedNUmber);
        setGameOver(false);
    }

    function gameOverHandler(numberRounds){
        setGameOver(true);
        setGuessRound(numberRounds);
    }

    function startNewGameHandler(){
        setUserNumber(null);
        setGuessRound(0);
    }

    let screen = <Start onPickNumber={pickedNumberHandler}/>;

    if(userNumber) {
        screen = <Main userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    if (gameOver && userNumber){
        screen = <GameOver userNum={userNumber} roundNum={guessRound} onNewGame={startNewGameHandler}/>;
    }

    return(
        <View  style={styles.rootScreen}>
            <ImageBackground source={require('./img/bg.jpeg')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.bg}>
                <SafeAreaView style={styles.sfroot}>{screen}</SafeAreaView>

            </ImageBackground>
        </View>   
    );
}

const styles =  StyleSheet.create({
    rootScreen: {
        flex: 1,
        backgroundColor: Colors.primary4
    },

    sfroot:{
        flex:1,
    },

    bg: {
        flex: 1,
        opacity: 0.12
    }
})