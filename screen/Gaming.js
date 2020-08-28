import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

import Card from '../components/Card'
import NumberWrapper from '../components/NumberWrapper'
import { registerRootComponent } from 'expo';

const gaming = props => {
    return (
        <View style={styles.screen}>
            <Card style={{padding:20, alignItems: 'center'}}>
                <Text style={{textAlign: 'center'}}>
                    Ah... I guess.....
                </Text>
                <NumberWrapper style={{marginVertical: 20}}>{props.children}</NumberWrapper>
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <Button title="Greater" onPress={props.reGen.bind(this, 'greater')}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="lower" onPress={props.reGen.bind(this, 'lower')}/>
                    </View>
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    buttonWrapper: {
        height: 50,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        width: 120
    }
});

export default gaming;