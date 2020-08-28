import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const gameOver = () => {
    return (
        <View style={styles.screen}>
            <Text>
                Game over
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default gameOver;
