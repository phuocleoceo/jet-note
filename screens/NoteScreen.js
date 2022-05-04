import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import useSQLite from "../hooks/useSQLite";
import { useSelector } from 'react-redux';

export default function NoteScreen({ navigation })
{
    const { Get_Data, Add_Data } = useSQLite();
    const { listNote } = useSelector(state => state.note);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => Get_Data(), []);

    const handleAddNote = async () =>
    {
        const newNote = { title, description };
        console.log(newNote);
        await Add_Data(newNote);
        await Get_Data();
    };

    return (
        <View style={styles.container}>
            <View style={styles.textField}>
                <TextInput
                    label="Title"
                    mode="flat"
                    onChangeText={t => setTitle(t)}
                    style={styles.textInput}
                />

                <TextInput
                    label="Add a note"
                    mode="flat"
                    onChangeText={d => setDescription(d)}
                    style={styles.textInput}
                />
            </View>

            <View style={styles.buttonBar}>
                <Button
                    mode="contained"
                    style={styles.saveButton}
                    onPress={handleAddNote}
                >
                    Save
                </Button>
            </View>

            <View style={styles.noteList}>
                {
                    listNote.length > 0 &&
                    listNote.map(note => <Text key={note.id}>{note.title}</Text>)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    textField: {
        flex: 1,
        margin: 20,
        marginTop: 0,
        borderColor: "#cfcacf",

    },
    textInput: {
        backgroundColor: "white",
        width: "70%",
        alignSelf: "center",
        marginTop: 15
    },
    buttonBar: {
        flex: 1,
        alignItems: "center"
    },
    saveButton: {
        width: "20%",
        borderRadius: 20
    },
    noteList: {
        flex: 2
    }
});