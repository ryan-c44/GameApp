import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {

    return (
    <View style={styles.screen}>
        <TitleText>Game Over</TitleText>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/success.png')} style={styles.image} resizeMode="cover"/>
        </View>
        <View style={styles.resultContainer}>
        <BodyText>
            Number of Rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text>
        </BodyText>
        <BodyText>
            Number was: <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
        </View>
        <View style={styles.button}>
            <MainButton onPress={props.onRestart} color={Colors.accent} style={styles.button}>New Game</MainButton>
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        marginTop: 20,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        alignItems: 'center'
    }
});

export default GameOverScreen;