import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import Primarybtn from '../components/ui/Primarybtn';
import Colors from '../consts/colors';
import Card from '../components/ui/card';
import Instruction from '../components/ui/instruction';

function Start({onPickNumber}){
    const [enteredValue, setEnteredValue] = useState ('');

    function valueInputHandler(enteredText) {
        setEnteredValue(enteredText);
    }

    function resetValueHandler(){
        setEnteredValue('');
    }

    function confirmValueHandler() {
        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert('Angka tidak tersedia', 'Maaf, angka yang bisa kamu masukkan hanya angka 1 sampai 99 !! o(￣┰￣*)ゞ', [{text: 'okai', style:'default', onPress: resetValueHandler}]);
            return;
        }

       onPickNumber(chosenNumber);
    }


    return (
        <View style={styles.root}>
            <Text style={styles.taitel}>ヾTebak-tebak Angka!!✧</Text>
            <Text style={styles.yuk}>ayo main tebak-tebakan denganku! aku akan menebak angka pilihanmu ο(=•ω＜=)ρ⌒☆</Text>
            <Card>
                <Instruction> Masukkan angkamu ..</Instruction>
                <TextInput 
                    style={styles.inputNumber}       
                    maxLength={2} 
                    keyboardType="numeric"
                    onChangeText={valueInputHandler}
                    value={enteredValue}
                />
                <View style={styles.btnsContainer}>
                    <View style={styles.btnContainer} >
                        <Primarybtn onPress={resetValueHandler}> Hapus </Primarybtn>
                    </View>
                    <View style={styles.btnContainer}>
                        <Primarybtn onPress={confirmValueHandler}> Mulai! </Primarybtn>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default Start;

const styles = StyleSheet.create({
    root:{
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },

    taitel:{
        marginTop: 50,
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#EEEEEE',
        elevation: 20,
        borderRadius: 8,
        color: Colors.primary2
    },

    yuk:{
        margin: 12,
        textAlign:'center',
        fontSize: 11,
        color: Colors.primary2,
        borderTopWidth: 0.5,
    },

    inputNumber: {
        height: 60,
        width: 70,
        textAlign: 'center',
        fontSize: 35,
        borderBottomColor: Colors.primary4 ,
        borderBottomWidth: 2,
        color: Colors.primary4,
        marginVertical: 5,
        fontWeight: 'bold',
    },

    btnsContainer:  {
        flexDirection: 'row',
    },

    btnContainer: {
        flex: 1,
    },
});