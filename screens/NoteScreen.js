import { StyleSheet, View, Text, FlatList } from 'react-native';
import { TextInput, Divider } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import useNoteSQLite from "../hooks/useNoteSQLite";
import NoteAppBar from "../components/NoteAppBar";
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Note from "../components/Note";
import moment from 'moment';

export default function NoteScreen({ navigation })
{
    const { Get_Note, Add_Note } = useNoteSQLite();
    const { listNote } = useSelector(state => state.note);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => Get_Note(), []);

    const renderNote = ({ item }) => (
        <Note
            id={item.id}
            title={item.title}
            description={item.description}
            timestamp={item.timestamp}
        />
    );

    const handleAddNote = async () =>
    {
        const timenow = new Date();
        const timestamp = moment(timenow).format("llll");
        const newNote = { title, description, timestamp };
        await Add_Note(newNote);
        await Get_Note();
    };

    return (
        <View style={styles.container}>
            <View style={styles.noteAppBar}>
                <NoteAppBar />
            </View>

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

                <View style={styles.divider}>
                    <Divider />
                </View>
            </View>

            <View style={styles.noteList}>
                {
                    listNote.length > 0 &&
                    <FlatList
                        data={listNote}
                        renderItem={renderNote}
                        keyExtractor={item => item.id}
                    />
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

    noteAppBar: {
        flex: 1
    },
    textField: {
        flex: 2,
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
        borderRadius: 20,
        marginBottom: 10
    },
    noteList: {
        flex: 6
    },
    divider: {
        width: "90%",
        alignSelf: "center"
    }
});