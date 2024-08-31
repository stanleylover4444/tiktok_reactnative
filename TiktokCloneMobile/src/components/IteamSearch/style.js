import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FE2C55',
        marginLeft: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 30,
        backgroundColor: '#464545',
        borderRadius: 6,
        paddingHorizontal: 8,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        paddingVertical: 0,
        fontSize: 16,
        color: 'white',

    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
});
export default styles;