import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TitleText from "../components/TitleText";
import Colors from '../constants/colors';

const ListHeader = props => {
    return (
        <View style={styles.list}>
            <View style={styles.titleContainer}>
                <TitleText style={styles.text}>ROUND</TitleText>
                <TitleText style={styles.text}>GUESS</TitleText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: Colors.accent,
        fontFamily: 'open-sans'
    },
    list: {
        width: '80%'
    }
});

export default ListHeader;