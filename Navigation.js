import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import useNoteSQLite from "./hooks/useNoteSQLite";
import React, { useEffect } from 'react';

import QuizzScreen from './screens/QuizzScreen';
import NoteScreen from './screens/NoteScreen';

const Stack = createNativeStackNavigator();

export default function Navigation()
{
    const { Create_Note_Table, Drop_Note_Table, Clear_Note_Table } = useNoteSQLite();

    useEffect(() => Create_Note_Table(), []);

    // useEffect(() => Clear_Note_Table(), []);

    // useEffect(() => Drop_Note_Table(), []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Quizz">
                <Stack.Screen name="Note" component={NoteScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Quizz" component={QuizzScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}