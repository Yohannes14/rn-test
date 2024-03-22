import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../utils';

const GridItem = ({ item }) => {
    const { rowIndex, colIndex } = item;

    return (
        <View style={styles.gridItem}>
            <Text style={styles.text}>{`${rowIndex},${colIndex}`}</Text>
        </View>
    );
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        width: 70,
        height: 70,
        borderWidth: 0.5,
        borderColor: COLORS.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: COLORS.darkBlue
    },
})