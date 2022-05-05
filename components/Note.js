import { StyleSheet, Text, View } from 'react-native';
import useNoteSQLite from "../hooks/useNoteSQLite";
import { Button } from 'react-native-paper';
import React from "react";

export default function Note({ id, title, description, timestamp })
{
    const { Get_Note, Delete_Note } = useNoteSQLite();

    const handleDeleteNote = async () =>
    {
        await Delete_Note(id);
        await Get_Note();
    };

    return (
        <View style={styles.note}>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{timestamp}</Text>
            <Button onPress={handleDeleteNote}>X</Button>
        </View>
    );
}


const styles = StyleSheet.create({
    note: {

    }
});