import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { fetchUserListRequest } from '../redux/actions/userListAction';
import RenderUserList from '../components/RenderUserList';
import { COLORS } from '../utils';

const UserListScreen = () => {
    const dispatch = useDispatch();
    const usrInfo = useSelector((state) => state?.usrInfo);
    const loading = useSelector((state) => state?.loading);
    const error = useSelector((state) => state?.error);

    useEffect(() => {
        dispatch(fetchUserListRequest());
    }, [dispatch]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.darkBlue} />
            </View>
        );
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }


    return (
        <FlatList
            data={usrInfo}
            numColumns={2}
            renderItem={RenderUserList}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
        />
    );
};

export default UserListScreen;

const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
