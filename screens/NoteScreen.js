import { StyleSheet, View, Dimensions } from 'react-native';
import useSQLite from "../hooks/useSQLite";
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

export default function NoteScreen({ navigation })
{
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
});