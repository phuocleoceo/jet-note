import { StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import React from "react";

export default function NoteAppBar()
{
    return (
        <View style={styles.noteAppBar}>
            <Text style={styles.appName}>JetNote</Text>

            <View style={styles.notificationButton}>
                <IconButton
                    icon="bell"
                    size={27}
                    onPress={() => { }}
                    style={styles.deleteButton}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    noteAppBar: {
        flexDirection: "row",
        backgroundColor: "#dce5ea",
        margin: 12,
        padding: 5,
        top: 10,
    },
    appName: {
        flex: 5,
        alignSelf: "center",
        left: 15,
        fontSize: 22,
        fontWeight: "bold"
    },
    notificationButton: {
        flex: 1
    }
});