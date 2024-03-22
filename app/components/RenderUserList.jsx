import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment';
import { COLORS } from '../utils';

const RenderUserList = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsLIL89cyMB1xVtT3RJHUkj1YCVOJjeXc1uzSbtvUaU7YbZVbumfN&usqp=CAE&s' }} style={styles.avatar} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.date}>{moment(item.createdAt).format('YYYY-MM-DD')}</Text>
            </View>
        </View>
    )
}

export default RenderUserList

const styles = StyleSheet.create({

    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        width: "90%",
        height: 130,
        //borderRadius: 60,
        backgroundColor: 'white'
    },
    textContainer: {
        marginTop: 8,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        color: COLORS.darkBlue,
    },
    date: {
        fontSize: 12,
        color: COLORS.darkBlue,
        marginTop: 4,
    },
});