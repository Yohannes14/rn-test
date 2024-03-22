import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import GridItem from '../components/GridItem';
import CountFloatingButton from '../components/CountFloatingButton';
import { COLORS, dataArray } from '../utils';

const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal={true}>
                <ScrollView contentContainerStyle={styles.gridContainer}>
                    {dataArray.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {row.map((item, colIndex) => (
                                <GridItem key={colIndex} item={item} />
                            ))}
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>
            {/* Count Floating Button */}
            <CountFloatingButton />
            {/* floating button for go user list page */}
            <Pressable style={styles.userButton} onPress={() => navigation.navigate("UserList")}>
                <Ionicons name="person" size={24} color="white" />
            </Pressable>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    gridContainer: {
        flexDirection: 'column',
        padding: 16,
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
    },

    userButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: COLORS.darkBlue,
        padding: 16,
        borderRadius: 30,
        zIndex: 1,
    },
});