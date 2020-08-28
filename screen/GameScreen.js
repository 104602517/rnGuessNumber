import React,{useState} from 'react'
import {View, Text, StyleSheet, Button, TextInput, Alert, Keyboard} from 'react-native'

import Card from '../components/Card'
import StyleVar from '../styleVarriables/Varriables'
import Input from '../components/Input'
import NumberWrapper from '../components/NumberWrapper'

const gameScreen = props => {

    const [inputNumber, setInputNumber] = useState('');
    const [comfirmed, setComfirmed] = useState(false);
    const [comfirmNumber, setComfirmNumber] = useState('');

    const inputHandeler = input => {
        setInputNumber(input);
        setInputNumber(input.replace(/[^0-9]/g,''));
    }

    const resetNumber = () => {
        setInputNumber('');
    }

    const comfirmHandeler = () => {
        if (isNaN(inputNumber) || inputNumber <= 0) {
            Alert.alert(
                //title 
                'Invalid Number!',
                // content
                'Number has to be between 1 and 99',
                // button[{text:'',style:'',onpress:}]
                [{text: 'okay', style: 'destructive', onPress: resetNumber}]
            )
            return
        };

        setComfirmed(true);
        setComfirmNumber(inputNumber);
        setInputNumber('');
        Keyboard.dismiss();
    }

    

    let comfirmNumText = <Card style={{padding:25, alignItems: 'center', width: 'auto'}}>
                            <Text>selected number</Text>
                            <NumberWrapper>{comfirmNumber}</NumberWrapper>
                            <Button title="START GAME" onPress={props.startGameHandler.bind(this, comfirmNumber)}></Button>
                        </Card>
    
    return (
        <View style={styles.screen}> 
            <Card style={{padding: 20}}>
                <Text style={{textAlign:'center'}}>Input a number!</Text>
                <View style={styles.inputWrapper}>
                    <View style={styles.input}>
                        <Input inputNumber={inputNumber} inputHandeler={inputHandeler}/>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    <View style={styles.buttons}>
                        <Button title="Reset" color={StyleVar.Primary} onPress={resetNumber}></Button>
                    </View>
                    <View style={styles.buttons}>
                        <Button title="confirm" color={StyleVar.Secondary} onPress={comfirmHandeler}></Button>
                    </View>
                </View>
            </Card>
            {comfirmed === true ? comfirmNumText : null}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttons: {
        width: 120
    },
    inputWrapper: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        alignItems: 'center',
        width: 50,
        flexDirection: 'row'
    }
})
export default gameScreen;