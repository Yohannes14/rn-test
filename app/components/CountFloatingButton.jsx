import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { COLORS } from '../utils';

const CountFloatingButton = () => {
    const [count, setCount] = useState(0);

    const handleMinusButton = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
    };

    const handlePlusButton = () => {
        setCount((prevCount) => prevCount + 1);
    };
    return (
        <View style={styles.floatingButtonContainer}>
            <Pressable style={styles.minusButton} onPress={handleMinusButton}>
                <Ionicons name="remove" size={24} color={COLORS.white} />
            </Pressable>

            <View style={styles.countContainer}>
                <Text style={styles.countText}>{count}</Text>
            </View>

            <Pressable style={styles.plusButton} onPress={handlePlusButton}>
                <Ionicons name="add" size={24} color={COLORS.white} />
            </Pressable>
        </View>
    )
}

export default CountFloatingButton

const styles = StyleSheet.create({
    floatingButtonContainer: {
        position: 'absolute',
        top: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
        zIndex: 1,
    },
    minusButton: {
        backgroundColor: COLORS.darkBlue,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
    plusButton: {
        backgroundColor: COLORS.darkBlue,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
    countContainer: {
        backgroundColor: COLORS.darkBlue,
        padding: 8,
        borderRadius: 8,
    },
    countText: {
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 8,
        fontWeight: 'bold',
        color: COLORS.white
    },
})