import { StyleSheet, Text, View } from 'react-native';
import useNoteSQLite from "../hooks/useNoteSQLite";
import { IconButton } from 'react-native-paper';
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
            <View style={styles.infor}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.timestamp}>{timestamp}</Text>
            </View>

            <View style={styles.buttonBar}>
                <IconButton
                    icon="delete-forever"
                    size={27}
                    onPress={handleDeleteNote}
                    style={styles.deleteButton}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    note: {
        margin: 15,
        marginBottom: 0,
        padding: 12,
        flexDirection: 'row',
        backgroundColor: "#dce5ea",
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30
    },

    infor: {
        flex: 5
    },
    title: {
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 3
    },
    description: {
        fontSize: 17
    },
    timestamp: {
        fontSize: 13
    },

    buttonBar: {
        flex: 1
    },
    deleteButton: {
        alignSelf: "center"
    }
});